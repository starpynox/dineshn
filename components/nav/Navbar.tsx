"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { navLinks } from "@/constants/nav";
import { useActiveSection } from "@/hooks/useActiveSection";
import { MobileMenu } from "./MobileMenu";
import { MagneticButton } from "@/components/cursor/MagneticButton";

const sectionIds = navLinks
  .map((l) => l.href.split("#")[1])
  .filter((id): id is string => Boolean(id));

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const activeId = useActiveSection(sectionIds);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  // Lock body scroll while the mobile overlay menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[9980] transition-all duration-500 ease-premium ${
          scrolled ? "glass border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
          <Link
            href="/"
            data-cursor-hover
            className="font-display text-lg font-semibold tracking-tight text-text"
          >
            Dinesh<span className="text-accent">.</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => {
              const id = link.href.split("#")[1];
              const isActive = activeId === id;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  data-cursor-hover
                  className="relative py-1 font-body text-sm text-text-muted transition-colors hover:text-text"
                >
                  <span className={isActive ? "text-text" : ""}>{link.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-0.5 left-0 right-0 h-px bg-accent"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <MagneticButton href="/#contact" variant="secondary" cursorText="Say hi">
              Get in touch
            </MagneticButton>
          </div>

          {/* Mobile hamburger */}
          <button
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="relative z-[9995] flex h-10 w-10 items-center justify-center md:hidden"
          >
            <div className="flex h-4 w-6 flex-col justify-between">
              <motion.span
                animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 7 : 0 }}
                className="h-px w-full bg-text"
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              />
              <motion.span
                animate={{ opacity: mobileOpen ? 0 : 1 }}
                className="h-px w-full bg-text"
                transition={{ duration: 0.2 }}
              />
              <motion.span
                animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -7 : 0 }}
                className="h-px w-full bg-text"
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <MobileMenu
            isOpen={mobileOpen}
            onClose={() => setMobileOpen(false)}
            links={navLinks}
            activeId={activeId}
          />
        )}
      </AnimatePresence>
    </>
  );
}
