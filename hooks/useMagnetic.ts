"use client";

import { useRef } from "react";
import { useMotionValue, useSpring } from "framer-motion";

interface UseMagneticOptions {
  strength?: number; // 0–1, how much of the cursor offset to apply
  maxOffset?: number; // px cap so the pull never feels unhinged
}

export function useMagnetic({ strength = 0.35, maxOffset = 14 }: UseMagneticOptions = {}) {
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.3 });

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);

    const offsetX = Math.max(-maxOffset, Math.min(maxOffset, relX * strength));
    const offsetY = Math.max(-maxOffset, Math.min(maxOffset, relY * strength));

    x.set(offsetX);
    y.set(offsetY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return { ref, x: springX, y: springY, handleMouseMove, handleMouseLeave };
}
