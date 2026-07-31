"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { CursorContext, useCursorState } from "@/hooks/useCursor";

/**
 * Any element can opt into custom-cursor behavior with plain data attributes —
 * no need to import hooks or wrap components:
 *
 *   <a data-cursor-hover data-cursor-text="View">...</a>
 *   <div data-cursor-hover>...</div>  (expands ring only, no label)
 *
 * This keeps the cursor system decoupled from the rest of the component tree.
 */
export function CustomCursor({ children }: { children: React.ReactNode }) {
  const [isTouch, setIsTouch] = useState(true); // default true = cursor hidden until proven otherwise
  const [isHovering, setIsHovering] = useState(false);
  const { hoverText, setHoverText } = useCursorState();

  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  // Ring trails behind the dot with spring physics for that "premium" lag
  const ringX = useSpring(dotX, { damping: 28, stiffness: 300, mass: 0.6 });
  const ringY = useSpring(dotY, { damping: 28, stiffness: 300, mass: 0.6 });

  useEffect(() => {
    const hasFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    setIsTouch(!hasFinePointer);
    if (!hasFinePointer) return;

    document.body.classList.add("custom-cursor-active");

    function handleMove(e: MouseEvent) {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
    }

    function handleOver(e: MouseEvent) {
      const target = (e.target as HTMLElement)?.closest<HTMLElement>("[data-cursor-hover]");
      if (target) {
        setIsHovering(true);
        setHoverText(target.dataset.cursorText ?? null);
      }
    }

    function handleOut(e: MouseEvent) {
      const target = (e.target as HTMLElement)?.closest<HTMLElement>("[data-cursor-hover]");
      if (target) {
        setIsHovering(false);
        setHoverText(null);
      }
    }

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CursorContext.Provider value={{ setHoverText }}>
      {children}
      {!isTouch && (
        <>
          {/* Precision dot — follows raw mouse position, no lag */}
          <motion.div
            aria-hidden
            className="pointer-events-none fixed left-0 top-0 z-[9999] h-1.5 w-1.5 rounded-full bg-accent"
            style={{
              x: dotX,
              y: dotY,
              translateX: "-50%",
              translateY: "-50%",
            }}
          />
          {/* Trailing ring — spring physics, expands + shows text on hover */}
          <motion.div
            aria-hidden
            className="pointer-events-none fixed left-0 top-0 z-[9998] flex items-center justify-center rounded-full border border-accent/60"
            style={{
              x: ringX,
              y: ringY,
              translateX: "-50%",
              translateY: "-50%",
            }}
            animate={{
              width: isHovering ? (hoverText ? 72 : 48) : 28,
              height: isHovering ? (hoverText ? 72 : 48) : 28,
              backgroundColor: isHovering ? "rgba(47,111,237,0.12)" : "rgba(47,111,237,0.03)",
            }}
            transition={{ type: "spring", damping: 22, stiffness: 260 }}
          >
            {hoverText && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="font-mono text-[10px] uppercase tracking-wider text-text"
              >
                {hoverText}
              </motion.span>
            )}
          </motion.div>
        </>
      )}
    </CursorContext.Provider>
  );
}
