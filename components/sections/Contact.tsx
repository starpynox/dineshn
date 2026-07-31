"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiSend } from "react-icons/fi";
import { RevealText } from "@/components/shared/RevealText";
import { SectionEyebrow } from "@/components/shared/SectionEyebrow";
import { MagneticButton } from "@/components/cursor/MagneticButton";
import { socials } from "@/constants/socials";
import { fadeUp } from "@/animations/variants";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendMail() {
    const subject = encodeURIComponent(`Portfolio contact from ${name || "a visitor"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${socials.email}?subject=${subject}&body=${body}`;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    sendMail();
  }

  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 py-32 md:px-10">
      <SectionEyebrow number="06" label="Contact" />

      <RevealText
        text="Engineering The Future."
        as="h2"
        className="font-display text-display-md font-semibold text-text text-balance"
      />

      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ delay: 0.15 }}
        className="mt-5 max-w-md font-body text-text-muted"
      >
        Open to internships, collaborations, or just talking through an
        interesting problem. Reach out directly, or send a note below.
      </motion.p>

      <div className="mt-14 grid gap-12 md:grid-cols-5">
        <motion.form
          onSubmit={handleSubmit}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="flex flex-col gap-5 md:col-span-3"
        >
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="font-mono text-xs uppercase tracking-widest text-text-faint">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded-md border border-border bg-surface px-4 py-3 font-body text-sm text-text outline-none transition-colors focus:border-accent/60"
              placeholder="Your name"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="font-mono text-xs uppercase tracking-widest text-text-faint">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-md border border-border bg-surface px-4 py-3 font-body text-sm text-text outline-none transition-colors focus:border-accent/60"
              placeholder="you@example.com"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="font-mono text-xs uppercase tracking-widest text-text-faint">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="resize-none rounded-md border border-border bg-surface px-4 py-3 font-body text-sm text-text outline-none transition-colors focus:border-accent/60"
              placeholder="What's on your mind?"
            />
          </div>

          <MagneticButton
            onClick={sendMail}
            variant="primary"
            cursorText="Send"
            className="mt-2 self-start"
          >
            <FiSend size={14} />
            Send message
          </MagneticButton>
          <p className="font-mono text-[11px] text-text-faint">
            Opens your email client with this pre-filled — this site has no backend.
          </p>
        </motion.form>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ delay: 0.1 }}
          className="flex flex-col gap-4 md:col-span-2"
        >
          <a
            href={`mailto:${socials.email}`}
            data-cursor-hover
            data-cursor-text="Email"
            className="group flex items-center gap-4 rounded-card border border-border bg-surface px-5 py-4 transition-colors hover:border-accent/40"
          >
            <FiMail size={18} className="text-text-muted group-hover:text-accent" />
            <div>
              <p className="font-body text-sm text-text">Email</p>
              <p className="font-mono text-xs text-text-faint">{socials.email}</p>
            </div>
          </a>
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            data-cursor-text="GitHub"
            className="group flex items-center gap-4 rounded-card border border-border bg-surface px-5 py-4 transition-colors hover:border-accent/40"
          >
            <FiGithub size={18} className="text-text-muted group-hover:text-accent" />
            <div>
              <p className="font-body text-sm text-text">GitHub</p>
              <p className="font-mono text-xs text-text-faint">@starpynox</p>
            </div>
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            data-cursor-text="LinkedIn"
            className="group flex items-center gap-4 rounded-card border border-border bg-surface px-5 py-4 transition-colors hover:border-accent/40"
          >
            <FiLinkedin size={18} className="text-text-muted group-hover:text-accent" />
            <div>
              <p className="font-body text-sm text-text">LinkedIn</p>
              <p className="font-mono text-xs text-text-faint">Connect</p>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
