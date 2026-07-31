"use client";

import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { timeline } from "@/lib/data/timeline";
import { RevealText } from "@/components/shared/RevealText";
import { SectionEyebrow } from "@/components/shared/SectionEyebrow";
import { fadeUp } from "@/animations/variants";

const tagColors: Record<string, string> = {
  Education: "#8A8A93",
  Project: "#2F6FED",
  Certification: "#5A8FFF",
  Leadership: "#F5F5F7",
};

export function Timeline() {
  return (
    <section id="timeline" className="mx-auto max-w-4xl px-6 py-32 md:px-10">
      <SectionEyebrow number="04" label="Timeline" />

      <RevealText
        text="How I got here."
        as="h2"
        className="font-display text-display-md font-semibold text-text text-balance"
      />

      <div className="relative mt-20 pl-8 md:pl-10">
        {/* Connector line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border md:left-[11px]" />

        <div className="flex flex-col gap-14">
          {timeline.map((entry, i) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
              className="relative"
            >
              {/* Dot on the connector */}
              <span
                className="absolute -left-8 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-bg md:-left-10 md:h-[22px] md:w-[22px]"
                style={{ backgroundColor: tagColors[entry.tag ?? ""] ?? "#2F6FED" }}
              />
              {/* Sequence number — meaningful here since order is real */}
              <span className="absolute -left-8 top-[3px] hidden w-[22px] text-center font-mono text-[9px] font-medium text-bg md:top-1 md:block">
                {i + 1}
              </span>

              <div className="flex flex-wrap items-baseline gap-3">
                <span className="font-mono text-xs uppercase tracking-widest text-text-faint">
                  {entry.date}
                </span>
                {entry.tag && (
                  <span className="rounded-pill border border-border px-2.5 py-0.5 font-mono text-[10px] text-text-muted">
                    {entry.tag}
                  </span>
                )}
              </div>

              <h3 className="mt-2 font-display text-xl font-medium text-text">
                {entry.href ? (
                  <a
                    href={entry.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor-hover
                    data-cursor-text="Verify"
                    className="inline-flex items-center gap-2 transition-colors hover:text-accent"
                  >
                    {entry.title}
                    <FiExternalLink size={14} className="text-text-faint" />
                  </a>
                ) : (
                  entry.title
                )}
              </h3>
              <p className="mt-1.5 max-w-lg font-body text-sm text-text-muted md:text-base">
                {entry.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
