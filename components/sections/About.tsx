"use client";

import { motion } from "framer-motion";
import { RevealText } from "@/components/shared/RevealText";
import { SectionEyebrow } from "@/components/shared/SectionEyebrow";
import { fadeUp, staggerContainer } from "@/animations/variants";

const quickFacts = [
  { label: "CGPA", value: "9.03 / 10.0" },
  { label: "Graduating", value: "2028" },
  { label: "Based in", value: "Vellore, India" },
  { label: "Certified in", value: "Generative AI (IBM)" },
];

export function About() {
  return (
    <section
      id="about"
      className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-32 md:px-10 lg:flex-row lg:gap-24"
    >
      <div className="lg:w-2/3">
        <SectionEyebrow number="01" label="About" />

        <RevealText
          text="I build things people use, not just things that compile."
          as="h2"
          className="font-display text-display-md font-semibold text-text text-balance"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-15%" }}
          variants={staggerContainer(0.15, 0.2)}
          className="mt-8 flex flex-col gap-5 font-body text-base leading-relaxed text-text-muted md:text-lg"
        >
          <motion.p variants={fadeUp}>
            Most of what I&apos;ve built so far has had a real person on the
            other end of it — a research park building that needed a way for
            visitors to find a room, a family retail business that needed a
            storefront online, a team at a hackathon that needed a working
            product by morning. That constraint, building for someone who
            actually has to use the thing, is what I find most interesting
            about engineering.
          </motion.p>
          <motion.p variants={fadeUp}>
            I&apos;m a Computer Science student at VIT, currently maintaining
            a 9.03 CGPA while spending most of my time outside class on
            full-stack and AI-integrated projects. On team projects I&apos;ve
            gravitated toward the integration work — the part where a React
            frontend actually has to agree with a Flask API on what data
            looks like, under a deadline, with someone else&apos;s code on
            the other side.
          </motion.p>
          <motion.p variants={fadeUp}>
            I keep coming back to AI applications and product engineering
            because they&apos;re both, at their core, about the same
            question: what does this actually need to do for the person
            using it. That&apos;s the question I want to keep building
            software around.
          </motion.p>
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer(0.1, 0.3)}
        className="flex flex-col gap-6 border-t border-border pt-8 lg:w-1/3 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0"
      >
        {quickFacts.map((fact) => (
          <motion.div key={fact.label} variants={fadeUp}>
            <p className="font-mono text-[11px] uppercase tracking-widest text-text-faint">
              {fact.label}
            </p>
            <p className="mt-1.5 font-display text-lg text-text">{fact.value}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
