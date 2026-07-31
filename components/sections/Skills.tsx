"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills } from "@/lib/data/skills";
import { SkillCategory } from "@/types/skill";
import { SkillCard } from "@/components/shared/SkillCard";
import { RevealText } from "@/components/shared/RevealText";
import { SectionEyebrow } from "@/components/shared/SectionEyebrow";
import { fadeUp } from "@/animations/variants";

const allCategories: SkillCategory[] = [
  "Programming",
  "Frontend",
  "Backend",
  "Databases",
  "Cloud",
  "Developer Tools",
  "AI",
  "Coursework",
];

// Only show category tabs that actually have skills — an empty "Coursework"
// tab with nothing behind it reads as unfinished, not minimal.
const activeCategories = allCategories.filter((cat) =>
  skills.some((s) => s.category === cat)
);

export function Skills() {
  const [selected, setSelected] = useState<SkillCategory | "All">("All");

  const filtered = useMemo(() => {
    if (selected === "All") return skills;
    return skills.filter((s) => s.category === selected);
  }, [selected]);

  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-32 md:px-10">
      <SectionEyebrow number="02" label="Skills" />

      <RevealText
        text="Tools I reach for when building."
        as="h2"
        className="font-display text-display-md font-semibold text-text text-balance"
      />

      {/* Category filter tabs */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="mt-10 flex flex-wrap gap-2"
      >
        {(["All", ...activeCategories] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            data-cursor-hover
            className={`rounded-pill border px-4 py-2 font-mono text-xs transition-colors duration-300 ${
              selected === cat
                ? "border-accent bg-accent/10 text-accent"
                : "border-border text-text-muted hover:text-text"
            }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* Card grid — re-animates on filter change via key on AnimatePresence */}
      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        <AnimatePresence mode="popLayout">
          {filtered.map((skill) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <SkillCard skill={skill} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
