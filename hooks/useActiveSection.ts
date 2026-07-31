"use client";

import { useEffect, useState } from "react";

/**
 * Observes all elements matching the given ids and returns the id of
 * whichever is most prominently in the viewport. Gracefully returns null
 * if none of the ids exist yet in the DOM (e.g. sections not built yet).
 */
export function useActiveSection(ids: string[]) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry with the largest visible intersection ratio
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        const first = visible[0];
        if (first) {
          setActiveId(first.target.id);
        }
      },
      {
        // Bias toward the upper-middle of the viewport, matching where
        // a sticky nav's "current section" feels correct
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}
