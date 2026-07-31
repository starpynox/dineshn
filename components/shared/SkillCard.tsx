"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Skill } from "@/types/skill";
import { getSkillIcon } from "@/lib/icon-map";

export function SkillCard({ skill }: { skill: Skill }) {
  const Icon = getSkillIcon(skill.name);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { stiffness: 150, damping: 18, mass: 0.5 };
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-8, 8]), springConfig);
  const glowX = useTransform(mouseX, [0, 1], ["0%", "100%"]);
  const glowY = useTransform(mouseY, [0, 1], ["0%", "100%"]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  }

  function handleMouseLeave() {
    mouseX.set(0.5);
    mouseY.set(0.5);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 600 }}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="group relative flex flex-col items-center justify-center gap-3 overflow-hidden rounded-card border border-border bg-surface px-4 py-7 shadow-subtle"
    >
      {/* Glow follows cursor position within the card */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(120px circle at ${glowX} ${glowY}, rgba(47,111,237,0.15), transparent 70%)`,
        }}
      />
      <Icon
        size={28}
        className="relative text-text-muted transition-colors duration-300 group-hover:text-accent"
      />
      <span className="relative font-body text-xs text-text-muted transition-colors duration-300 group-hover:text-text">
        {skill.name}
      </span>
    </motion.div>
  );
}
