"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data/projects";
import { ProjectCard } from "@/components/project/ProjectCard";
import { RevealText } from "@/components/shared/RevealText";
import { SectionEyebrow } from "@/components/shared/SectionEyebrow";
import { staggerContainer, fadeUp } from "@/animations/variants";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-32 md:px-10">
      <SectionEyebrow number="03" label="Featured Projects" />

      <RevealText
        text="Things I've built end to end."
        as="h2"
        className="font-display text-display-md font-semibold text-text text-balance"
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        variants={staggerContainer(0.08)}
        className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {projects.map((project) => (
          <motion.div key={project.slug} variants={fadeUp}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
