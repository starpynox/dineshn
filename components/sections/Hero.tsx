"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiArrowDown, FiDownload } from "react-icons/fi";
import { RevealText } from "@/components/shared/RevealText";
import { MagneticButton } from "@/components/cursor/MagneticButton";
import { HeroBackground } from "./HeroBackground";
import { socials } from "@/constants/socials";
import { fadeUp } from "@/animations/variants";

const roleTags = ["AI", "Full Stack", "Product Engineering"];

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <HeroBackground />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-4 font-mono text-xs text-accent-bright"
      >
        <span className="text-text-faint">{">"}</span> ~/user: dinesh_narasimhulu
        <span className="ml-0.5 inline-block h-3 w-[2px] animate-pulse-dot bg-accent-bright align-middle" />
      </motion.p>

      <motion.p
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-text-muted"
      >
        Computer Science Engineering Student · VIT
      </motion.p>

      <RevealText
        text="Dinesh Narasimhulu"
        as="h1"
        delay={0.1}
        className="font-display text-hero font-semibold text-balance"
        wordClassName="bg-gradient-to-r from-text via-accent-bright to-accent2 bg-[length:200%_auto] bg-clip-text text-transparent animate-shine"
      />

      <RevealText
        text="Building software that solves real-world problems."
        as="p"
        delay={0.5}
        stagger={0.03}
        className="mt-6 max-w-xl font-body text-lg text-text-muted text-balance md:text-xl"
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ delay: 0.9 }}
        className="mt-8 flex flex-wrap items-center justify-center gap-3"
      >
        {roleTags.map((tag, i) => (
          <span key={tag} className="flex items-center gap-3">
            <span className="rounded-pill border border-border px-4 py-1.5 font-mono text-xs text-text-muted">
              {tag}
            </span>
            {i < roleTags.length - 1 && (
              <span className="h-1 w-1 rounded-full bg-text-faint" />
            )}
          </span>
        ))}
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ delay: 1.1 }}
        className="mt-10 flex flex-wrap items-center justify-center gap-4"
      >
        <MagneticButton href="/#projects" variant="primary" cursorText="Explore">
          Explore Projects
        </MagneticButton>
        <MagneticButton
          href="/resume"
          variant="secondary"
          cursorText="Download"
        >
          <FiDownload size={15} />
          Resume
        </MagneticButton>
        <MagneticButton
          href={socials.github}
          target="_blank"
          rel="noopener noreferrer"
          variant="ghost"
          cursorText="GitHub"
          className="!px-4"
        >
          <FiGithub size={18} />
        </MagneticButton>
        <MagneticButton
          href={socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          variant="ghost"
          cursorText="LinkedIn"
          className="!px-4"
        >
          <FiLinkedin size={18} />
        </MagneticButton>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-10 flex flex-col items-center gap-2 text-text-faint"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <FiArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
