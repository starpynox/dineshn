"use client";

import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";
import { socials } from "@/constants/socials";

export function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-6 py-10 md:px-10">
        <p className="font-mono text-xs text-text-faint">
          © {new Date().getFullYear()} Dinesh Narasimhulu
        </p>

        <div className="flex items-center gap-5">
          <a
            href={`mailto:${socials.email}`}
            data-cursor-hover
            aria-label="Email"
            className="text-text-muted transition-colors hover:text-text"
          >
            <FiMail size={16} />
          </a>
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            aria-label="GitHub"
            className="text-text-muted transition-colors hover:text-text"
          >
            <FiGithub size={16} />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            aria-label="LinkedIn"
            className="text-text-muted transition-colors hover:text-text"
          >
            <FiLinkedin size={16} />
          </a>

          <button
            onClick={scrollToTop}
            data-cursor-hover
            data-cursor-text="Top"
            aria-label="Back to top"
            className="ml-2 flex h-8 w-8 items-center justify-center rounded-full border border-border text-text-muted transition-colors hover:border-accent/50 hover:text-accent"
          >
            <FiArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
