"use client";

import { motion } from "framer-motion";

interface ProjectVisualProps {
  slug: string;
  accentColor: string;
  className?: string;
}

/**
 * These are intentionally abstract representations of what each project
 * does (a parsing pipeline, a floor map, a product grid) rather than fake
 * screenshots. Swap in real screenshots/GIFs in public/images/ and replace
 * these components once you have them — see README.
 */
export function ProjectVisual({ slug, accentColor, className }: ProjectVisualProps) {
  if (slug === "medsync") return <MedSyncVisual accentColor={accentColor} className={className} />;
  if (slug === "prp-navigation") return <PRPVisual accentColor={accentColor} className={className} />;
  if (slug === "svfl") return <SVFLVisual accentColor={accentColor} className={className} />;
  if (slug === "wardrobeos" || slug === "mess-food-calorie-tracker")
    return <InProgressVisual accentColor={accentColor} className={className} />;
  return null;
}

function MedSyncVisual({ accentColor, className }: { accentColor: string; className?: string }) {
  return (
    <div className={`relative flex h-full w-full items-center justify-center bg-bg-elevated ${className}`}>
      <svg viewBox="0 0 400 240" className="h-full w-full max-w-md" fill="none">
        {/* Document */}
        <rect x="30" y="60" width="80" height="110" rx="6" stroke={accentColor} strokeOpacity="0.4" strokeWidth="1.5" />
        <line x1="45" y1="85" x2="95" y2="85" stroke={accentColor} strokeOpacity="0.3" strokeWidth="1.5" />
        <line x1="45" y1="100" x2="95" y2="100" stroke={accentColor} strokeOpacity="0.3" strokeWidth="1.5" />
        <line x1="45" y1="115" x2="80" y2="115" stroke={accentColor} strokeOpacity="0.3" strokeWidth="1.5" />

        {/* Pipeline connector, animated dash to suggest processing */}
        <motion.path
          d="M 115 115 Q 170 115 200 115"
          stroke={accentColor}
          strokeWidth="1.5"
          strokeDasharray="4 4"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -16 }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
        />

        {/* Processing node */}
        <circle cx="215" cy="115" r="18" stroke={accentColor} strokeWidth="1.5" fill={`${accentColor}1A`} />
        <motion.circle
          cx="215"
          cy="115"
          r="18"
          stroke={accentColor}
          strokeWidth="1"
          fill="none"
          animate={{ scale: [1, 1.4], opacity: [0.6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
        />

        {/* Output summary card */}
        <motion.path d="M 233 115 Q 270 115 300 115" stroke={accentColor} strokeOpacity="0.4" strokeWidth="1.5" />
        <rect x="300" y="75" width="70" height="80" rx="6" stroke={accentColor} strokeWidth="1.5" fill={`${accentColor}0D`} />
        <line x1="312" y1="95" x2="358" y2="95" stroke={accentColor} strokeOpacity="0.5" strokeWidth="1.5" />
        <line x1="312" y1="108" x2="348" y2="108" stroke={accentColor} strokeOpacity="0.5" strokeWidth="1.5" />
        <line x1="312" y1="121" x2="352" y2="121" stroke={accentColor} strokeOpacity="0.5" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

function PRPVisual({ accentColor, className }: { accentColor: string; className?: string }) {
  const rooms = Array.from({ length: 24 }, (_, i) => i);
  return (
    <div className={`relative flex h-full w-full items-center justify-center bg-bg-elevated ${className}`}>
      <div className="grid grid-cols-6 gap-3 p-8">
        {rooms.map((i) => {
          const isTarget = i === 14;
          return (
            <div key={i} className="relative flex h-9 w-9 items-center justify-center">
              <div
                className="h-full w-full rounded-md border"
                style={{
                  borderColor: isTarget ? accentColor : `${accentColor}33`,
                  backgroundColor: isTarget ? `${accentColor}22` : "transparent",
                }}
              />
              {isTarget && (
                <motion.div
                  className="absolute h-full w-full rounded-md border"
                  style={{ borderColor: accentColor }}
                  animate={{ scale: [1, 1.6], opacity: [0.7, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function SVFLVisual({ accentColor, className }: { accentColor: string; className?: string }) {
  const cards = [
    { w: 2, h: 2 }, { w: 1, h: 1 }, { w: 1, h: 1 },
    { w: 1, h: 1 }, { w: 2, h: 1 }, { w: 1, h: 1 },
  ];
  return (
    <div className={`relative flex h-full w-full items-center justify-center bg-bg-elevated p-10 ${className}`}>
      <div className="grid w-full max-w-sm grid-cols-3 grid-rows-3 gap-3">
        {cards.map((c, i) => (
          <div
            key={i}
            className="rounded-md border"
            style={{
              gridColumn: `span ${c.w}`,
              gridRow: `span ${c.h}`,
              borderColor: `${accentColor}40`,
              backgroundColor: `${accentColor}0D`,
              minHeight: 48,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function InProgressVisual({ accentColor, className }: { accentColor: string; className?: string }) {
  return (
    <div className={`relative flex h-full w-full items-center justify-center overflow-hidden bg-bg-elevated ${className}`}>
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `repeating-linear-gradient(135deg, ${accentColor} 0, ${accentColor} 1px, transparent 1px, transparent 14px)`,
        }}
      />
      <span className="relative rounded-pill border border-border px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-text-faint">
        In progress
      </span>
    </div>
  );
}
