"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/animations/variants";

interface ProjectSectionProps {
  label: string;
  children: React.ReactNode;
}

export function ProjectSection({ label, children }: ProjectSectionProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-15%" }}
      variants={fadeUp}
      className="border-t border-border py-10 first:border-t-0 first:pt-0"
    >
      <div className="grid gap-4 md:grid-cols-[200px_1fr] md:gap-10">
        <p className="font-mono text-xs uppercase tracking-widest text-text-faint">
          {label}
        </p>
        <div className="font-body text-base leading-relaxed text-text-muted md:text-lg">
          {children}
        </div>
      </div>
    </motion.div>
  );
}
