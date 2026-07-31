"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { NavLink } from "@/constants/nav";
import { socials } from "@/constants/socials";
import { FiGithub, FiLinkedin } from "react-icons/fi";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: NavLink[];
  activeId: string | null;
}

const menuVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const linkVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const MotionLink = motion(Link);

export function MobileMenu({ isOpen, onClose, links, activeId }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={menuVariants}
          className="fixed inset-0 z-[9990] flex flex-col justify-center bg-bg/98 backdrop-blur-nav px-8 md:hidden"
        >
          <nav className="flex flex-col gap-2">
            {links.map((link) => {
              const isActive = activeId === link.href.split("#")[1];
              return (
                <MotionLink
                  key={link.href}
                  href={link.href}
                  variants={linkVariants}
                  onClick={onClose}
                  className={`font-display text-4xl font-medium tracking-tight transition-colors ${
                    isActive ? "text-accent" : "text-text"
                  }`}
                >
                  {link.label}
                </MotionLink>
              );
            })}
          </nav>

          <motion.div
            variants={linkVariants}
            className="mt-12 flex gap-6 text-text-muted"
          >
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-text transition-colors"
            >
              <FiGithub size={22} />
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-text transition-colors"
            >
              <FiLinkedin size={22} />
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
