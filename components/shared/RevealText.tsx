"use client";

import { motion } from "framer-motion";
import { staggerContainer, wordReveal } from "@/animations/variants";

interface RevealTextProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
}

export function RevealText({
  text,
  as = "p",
  className,
  wordClassName,
  delay = 0,
  stagger = 0.06,
}: RevealTextProps) {
  const words = text.split(" ");
  const Tag = motion[as];

  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      variants={staggerContainer(stagger, delay)}
    >
      {words.map((word, i) => (
        <span key={i} className="mr-[0.25em] inline-block overflow-hidden">
          <motion.span variants={wordReveal} className={`inline-block ${wordClassName ?? ""}`}>
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
