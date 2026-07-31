"use client";

import { useLenis } from "@/hooks/useLenis";
import { CustomCursor } from "@/components/cursor/CustomCursor";

export function Providers({ children }: { children: React.ReactNode }) {
  useLenis();
  return <CustomCursor>{children}</CustomCursor>;
}
