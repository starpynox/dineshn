"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/animations/variants";

interface SectionEyebrowProps {
  number: string; // e.g. "01"
  label: string;
}

export function SectionEyebrow({ number, label }: SectionEyebrowProps) {
  return (
    <motion.p
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="mb-6 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-text-faint"
    >
      <span className="text-accent">{number}</span>
      <span className="text-text-faint">—</span>
      <span className="text-accent">{label}</span>
    </motion.p>
  );
}
