"use client";

import { motion } from "framer-motion";
import { FiGithub, FiStar, FiGitBranch, FiExternalLink } from "react-icons/fi";
import { GitHubRepo, GitHubUser } from "@/lib/github";
import { RevealText } from "@/components/shared/RevealText";
import { SectionEyebrow } from "@/components/shared/SectionEyebrow";
import { MagneticButton } from "@/components/cursor/MagneticButton";
import { fadeUp, staggerContainer } from "@/animations/variants";

interface GitHubStatsClientProps {
  user: GitHubUser | null;
  recent: GitHubRepo[];
  languages: { language: string; count: number }[];
}

export function GitHubStatsClient({ user, recent, languages }: GitHubStatsClientProps) {
  const totalLangCount = languages.reduce((sum, l) => sum + l.count, 0);

  return (
    <section id="github" className="mx-auto max-w-6xl px-6 py-32 md:px-10">
      <SectionEyebrow number="05" label="Open Source" />

      <RevealText
        text="What I've been building in the open."
        as="h2"
        className="font-display text-display-md font-semibold text-text text-balance"
      />

      {!user ? (
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-10 font-mono text-sm text-text-faint"
        >
          GitHub data couldn&apos;t be loaded right now — check back shortly, or
          visit the profile directly below.
        </motion.p>
      ) : (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-10 flex flex-wrap items-center gap-6 rounded-card border border-border bg-surface p-6"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={user.avatar_url}
            alt={user.login}
            width={64}
            height={64}
            className="rounded-full border border-border"
          />
          <div className="flex flex-1 flex-col gap-1">
            <span className="font-display text-lg text-text">@{user.login}</span>
            {user.bio && <span className="font-body text-sm text-text-muted">{user.bio}</span>}
            <div className="mt-1 flex gap-5 font-mono text-xs text-text-faint">
              <span>{user.public_repos} repos</span>
              <span>{user.followers} followers</span>
              <span>{user.following} following</span>
            </div>
          </div>
          <MagneticButton
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            cursorText="Visit"
          >
            <FiGithub size={15} />
            View profile
          </MagneticButton>
        </motion.div>
      )}

      <div className="mt-14 grid gap-10 md:grid-cols-5">
        {/* Recent repositories */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer(0.1)}
          className="md:col-span-3"
        >
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-text-faint">
            Recent repositories
          </p>
          <div className="flex flex-col gap-3">
            {recent.length === 0 && (
              <p className="font-body text-sm text-text-faint">No public repositories found.</p>
            )}
            {recent.map((repo) => (
              <motion.a
                key={repo.name}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                data-cursor-text="Open"
                variants={fadeUp}
                className="group flex items-center justify-between gap-4 rounded-card border border-border bg-surface px-5 py-4 transition-colors hover:border-accent/40"
              >
                <div className="min-w-0">
                  <p className="truncate font-body text-sm text-text group-hover:text-accent">
                    {repo.name}
                  </p>
                  {repo.description && (
                    <p className="mt-0.5 truncate font-body text-xs text-text-muted">
                      {repo.description}
                    </p>
                  )}
                </div>
                <div className="flex shrink-0 items-center gap-3 font-mono text-xs text-text-faint">
                  {repo.language && <span>{repo.language}</span>}
                  <span className="flex items-center gap-1">
                    <FiStar size={12} /> {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <FiGitBranch size={12} /> {repo.forks_count}
                  </span>
                  <FiExternalLink size={13} className="opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Language breakdown — real proportion of repos per language, not a fabricated skill score */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer(0.08)}
          className="md:col-span-2"
        >
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-text-faint">
            Languages across repos
          </p>
          <div className="flex flex-col gap-4">
            {languages.length === 0 && (
              <p className="font-body text-sm text-text-faint">No language data available.</p>
            )}
            {languages.map((lang) => {
              const pct = totalLangCount > 0 ? (lang.count / totalLangCount) * 100 : 0;
              return (
                <motion.div key={lang.language} variants={fadeUp}>
                  <div className="mb-1.5 flex items-center justify-between font-mono text-xs text-text-muted">
                    <span>{lang.language}</span>
                    <span>{lang.count}</span>
                  </div>
                  <div className="h-1 w-full overflow-hidden rounded-pill bg-border">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className="h-full rounded-pill bg-accent"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
