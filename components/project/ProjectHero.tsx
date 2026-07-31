"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowLeft, FiGithub, FiExternalLink } from "react-icons/fi";
import { Project } from "@/types/project";
import { ProjectVisual } from "./ProjectVisual";
import { RevealText } from "@/components/shared/RevealText";
import { MagneticButton } from "@/components/cursor/MagneticButton";
import { fadeUp } from "@/animations/variants";

export function ProjectHero({ project }: { project: Project }) {
  return (
    <div className="mx-auto max-w-5xl px-6 pb-16 pt-32 md:px-10 md:pt-40">
      <motion.div initial="hidden" animate="visible" variants={fadeUp}>
        <Link
          href="/#projects"
          data-cursor-hover
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-text-muted transition-colors hover:text-text"
        >
          <FiArrowLeft size={13} />
          All projects
        </Link>
      </motion.div>

      <div className="mt-8 flex items-center gap-3">
        <span
          className="h-2 w-2 rounded-full"
          style={{ backgroundColor: project.accentColor }}
        />
        <span className="font-mono text-xs uppercase tracking-widest text-text-faint">
          {project.context}
        </span>
      </div>

      <RevealText
        text={project.name}
        as="h1"
        delay={0.1}
        className="mt-4 font-display text-display-lg font-semibold text-text text-balance"
      />

      <motion.p
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ delay: 0.4 }}
        className="mt-4 max-w-2xl font-body text-lg text-text-muted"
      >
        {project.tagline}
      </motion.p>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ delay: 0.5 }}
        className="mt-6 flex flex-wrap gap-2"
      >
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-pill border border-border px-3 py-1 font-mono text-[11px] text-text-muted"
          >
            {tech}
          </span>
        ))}
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ delay: 0.6 }}
        className="mt-8 flex flex-wrap gap-4"
      >
        {project.links.github && (
          <MagneticButton
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            cursorText="Code"
          >
            <FiGithub size={15} />
            View source
          </MagneticButton>
        )}
        {project.links.live && (
          <MagneticButton
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            cursorText="Visit"
          >
            <FiExternalLink size={15} />
            Live demo
          </MagneticButton>
        )}
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ delay: 0.7 }}
        className="mt-14 overflow-hidden rounded-card border border-border"
      >
        <div className="h-[24rem] md:h-[32rem]">
          <ProjectVisual slug={project.slug} accentColor={project.accentColor} />
        </div>
      </motion.div>
    </div>
  );
}
