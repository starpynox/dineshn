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
  if (slug === "motorq-fleet-intelligence")
    return <MotorqVisual accentColor={accentColor} className={className} />;
  if (slug === "budget-tracker")
    return <BudgetTrackerVisual accentColor={accentColor} className={className} />;
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

function MotorqVisual({ accentColor, className }: { accentColor: string; className?: string }) {
  return (
    <div className={`relative flex h-full w-full items-center justify-center bg-bg-elevated ${className}`}>
      <svg viewBox="0 0 400 240" className="h-full w-full max-w-md" fill="none">
        {/* Multiple OEM input sources — different manufacturers, different formats */}
        {[70, 115, 160].map((y, i) => (
          <g key={i}>
            <rect
              x="20"
              y={y - 12}
              width="44"
              height="24"
              rx="4"
              stroke={accentColor}
              strokeOpacity="0.4"
              strokeWidth="1.5"
            />
            <text
              x="42"
              y={y + 4}
              textAnchor="middle"
              fontSize="9"
              fontFamily="monospace"
              fill={accentColor}
              opacity="0.6"
            >
              {["°F", "°C", "DTC"][i]}
            </text>
            <motion.path
              d={`M 64 ${y} Q 100 ${y} 130 115`}
              stroke={accentColor}
              strokeOpacity="0.3"
              strokeWidth="1.2"
              strokeDasharray="3 3"
              initial={{ strokeDashoffset: 0 }}
              animate={{ strokeDashoffset: -12 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear", delay: i * 0.15 }}
            />
          </g>
        ))}

        {/* Normalizer node — converges all formats into one schema */}
        <rect x="130" y="95" width="50" height="40" rx="6" stroke={accentColor} strokeWidth="1.5" fill={`${accentColor}12`} />
        <text x="155" y="119" textAnchor="middle" fontSize="8" fontFamily="monospace" fill={accentColor}>
          NORM
        </text>

        {/* Connector to AI agent */}
        <motion.path
          d="M 180 115 Q 210 115 235 115"
          stroke={accentColor}
          strokeWidth="1.5"
          strokeDasharray="4 4"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -16 }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
        />

        {/* AI agent node — pulsing, represents active investigation */}
        <circle cx="255" cy="115" r="20" stroke={accentColor} strokeWidth="1.5" fill={`${accentColor}1A`} />
        <motion.circle
          cx="255"
          cy="115"
          r="20"
          stroke={accentColor}
          strokeWidth="1"
          fill="none"
          animate={{ scale: [1, 1.5], opacity: [0.6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
        />
        <text x="255" y="119" textAnchor="middle" fontSize="8" fontFamily="monospace" fill={accentColor}>
          AI
        </text>

        {/* Output: structured report with severity */}
        <path d="M 275 115 Q 300 115 320 115" stroke={accentColor} strokeOpacity="0.4" strokeWidth="1.5" />
        <rect x="320" y="80" width="60" height="70" rx="6" stroke={accentColor} strokeWidth="1.5" fill={`${accentColor}0D`} />
        <circle cx="335" cy="96" r="4" fill={accentColor} opacity="0.8" />
        <line x1="345" y1="96" x2="370" y2="96" stroke={accentColor} strokeOpacity="0.5" strokeWidth="1.5" />
        <line x1="330" y1="112" x2="372" y2="112" stroke={accentColor} strokeOpacity="0.4" strokeWidth="1.5" />
        <line x1="330" y1="124" x2="365" y2="124" stroke={accentColor} strokeOpacity="0.4" strokeWidth="1.5" />
        <line x1="330" y1="136" x2="358" y2="136" stroke={accentColor} strokeOpacity="0.4" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

function BudgetTrackerVisual({ accentColor, className }: { accentColor: string; className?: string }) {
  return (
    <div className={`relative flex h-full w-full items-center justify-center gap-8 bg-bg-elevated ${className}`}>
      <svg viewBox="0 0 400 240" className="h-full w-full max-w-md" fill="none">
        {/* Donut breakdown */}
        <g transform="translate(100,120)">
          <circle r="55" fill="none" stroke={`${accentColor}22`} strokeWidth="18" />
          <motion.circle
            r="55"
            fill="none"
            stroke={accentColor}
            strokeWidth="18"
            strokeDasharray="345.6"
            strokeDashoffset="345.6"
            strokeLinecap="round"
            transform="rotate(-90)"
            initial={{ strokeDashoffset: 345.6 }}
            animate={{ strokeDashoffset: 345.6 * (1 - 0.62) }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
          <text x="0" y="6" textAnchor="middle" fontSize="16" fontFamily="monospace" fill={accentColor}>
            62%
          </text>
        </g>

        {/* Trend line */}
        <g transform="translate(200,60)">
          <line x1="0" y1="140" x2="180" y2="140" stroke={accentColor} strokeOpacity="0.2" strokeWidth="1" />
          <motion.path
            d="M 0 110 L 30 90 L 60 100 L 90 60 L 120 75 L 150 40 L 180 55"
            stroke={accentColor}
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
          />
          {[0, 30, 60, 90, 120, 150, 180].map((x, i) => {
            const ys = [110, 90, 100, 60, 75, 40, 55];
            return <circle key={i} cx={x} cy={ys[i]} r="2.5" fill={accentColor} />;
          })}
        </g>
      </svg>
    </div>
  );
}
