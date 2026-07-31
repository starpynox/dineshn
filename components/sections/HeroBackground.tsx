"use client";

import { motion } from "framer-motion";

export function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden>
      {/* Fine grid, faded toward the edges so it reads as texture, not a pattern */}
      <div
        className="absolute inset-0 opacity-[0.07] noise-mask"
        style={{
          backgroundImage:
            "linear-gradient(#F5F5F7 1px, transparent 1px), linear-gradient(90deg, #F5F5F7 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Two soft glow orbs — blue primary, purple secondary — the one deliberate duotone nod on the page */}
      <motion.div
        animate={{ y: [0, -24, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/3 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
      />
      <motion.div
        animate={{ y: [0, 18, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute right-[15%] top-1/2 h-72 w-72 rounded-full bg-accent2/[0.06] blur-[100px]"
      />
    </div>
  );
}
