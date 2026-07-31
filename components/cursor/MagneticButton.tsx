"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useMagnetic } from "@/hooks/useMagnetic";

const MotionLink = motion(Link);

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  cursorText?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  target?: string;
  rel?: string;
}

const variantStyles = {
  primary: "bg-accent text-white hover:bg-accent-bright shadow-glow",
  secondary: "bg-surface border border-border hover:border-accent/50 text-text",
  ghost: "bg-transparent text-text-muted hover:text-text",
};

export function MagneticButton({
  children,
  href,
  onClick,
  cursorText,
  variant = "primary",
  className,
  target,
  rel,
}: MagneticButtonProps) {
  const { ref, x, y, handleMouseMove, handleMouseLeave } = useMagnetic({
    strength: 0.3,
    maxOffset: 12,
  });

  const sharedProps = {
    onMouseMove: handleMouseMove as (e: React.MouseEvent<HTMLElement>) => void,
    onMouseLeave: handleMouseLeave,
    style: { x, y },
    className: cn(
      "inline-flex items-center justify-center gap-2 rounded-pill px-6 py-3",
      "text-sm font-medium transition-colors duration-300 ease-premium",
      variantStyles[variant],
      className
    ),
    "data-cursor-hover": true,
    ...(cursorText ? { "data-cursor-text": cursorText } : {}),
  };

  if (href) {
    // target="_blank" (or an external URL) stays a plain anchor;
    // everything else is internal navigation and should use next/link
    if (target) {
      return (
        <motion.a
          ref={ref as React.RefObject<HTMLAnchorElement>}
          href={href}
          target={target}
          rel={rel}
          {...sharedProps}
        >
          {children}
        </motion.a>
      );
    }
    return (
      <MotionLink
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        {...sharedProps}
      >
        {children}
      </MotionLink>
    );
  }

  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      onClick={onClick}
      type="button"
      {...sharedProps}
    >
      {children}
    </motion.button>
  );
}
