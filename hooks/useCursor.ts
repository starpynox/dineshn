"use client";

import { createContext, useContext, useRef, useState, useCallback } from "react";

interface CursorContextValue {
  setHoverText: (text: string | null) => void;
}

const CursorContext = createContext<CursorContextValue | null>(null);

export function useCursorText() {
  const ctx = useContext(CursorContext);
  if (!ctx) {
    // Context not mounted (e.g. touch devices skip CustomCursor) — no-op
    return { setHoverText: () => {} };
  }
  return ctx;
}

/**
 * Internal: used only by CustomCursor to both provide the context and
 * read the current hover text in the same tree.
 */
export function useCursorState() {
  const [hoverText, setHoverTextState] = useState<string | null>(null);
  const rafRef = useRef<number | null>(null);

  const setHoverText = useCallback((text: string | null) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => setHoverTextState(text));
  }, []);

  return { hoverText, setHoverText };
}

export { CursorContext };
