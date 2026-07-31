"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { Project } from "@/types/project";
import { ProjectVisual } from "./ProjectVisual";

export function ProjectCard({ project }: { project: Project }) {
  const isLive = project.status === "live";

  return (
    <Link
      href={`/projects/${project.slug}`}
      data-cursor-hover
      data-cursor-text={isLive ? "View" : "Peek"}
      className="block"
    >
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
        className="group flex h-full flex-col overflow-hidden rounded-card border border-border bg-surface shadow-subtle transition-colors duration-300 hover:border-accent/40 hover:shadow-glow"
      >
        <div className="aspect-[16/10] overflow-hidden border-b border-border">
          <ProjectVisual slug={project.slug} accentColor={project.accentColor} />
        </div>

        <div className="flex flex-1 flex-col p-5">
          <div className="mb-2 flex items-center gap-2">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: project.accentColor }}
            />
            <span className="font-mono text-[10px] uppercase tracking-widest text-text-faint">
              {isLive ? project.context : "In progress"}
            </span>
          </div>

          <h3 className="font-display text-lg font-semibold text-text transition-colors group-hover:text-accent">
            {project.name}
          </h3>

          <p className="mt-2 line-clamp-2 flex-1 font-body text-sm text-text-muted">
            {project.tagline}
          </p>

          {isLive && project.techStack.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.techStack.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="rounded-pill border border-border px-2.5 py-0.5 font-mono text-[10px] text-text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          <div className="mt-4 flex items-center gap-1.5 font-mono text-xs text-text-faint transition-colors group-hover:text-accent">
            {isLive ? "View case study" : "Coming soon"}
            <FiArrowUpRight
              size={13}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
