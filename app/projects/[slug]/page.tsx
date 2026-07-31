import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects, getProjectBySlug } from "@/lib/data/projects";
import { ProjectHero } from "@/components/project/ProjectHero";
import { ProjectSection } from "@/components/project/ProjectSection";
import { ProjectNav } from "@/components/project/ProjectNav";
import { Navbar } from "@/components/nav/Navbar";
import { Footer } from "@/components/shared/Footer";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.name} — Dinesh Narasimhulu`,
    description: project.tagline,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const prev = index > 0 ? projects[index - 1] ?? null : null;
  const next = index < projects.length - 1 ? projects[index + 1] ?? null : null;

  return (
    <>
      <Navbar />
      <main>
        <ProjectHero project={project} />

        {project.content ? (
          <div className="mx-auto max-w-5xl px-6 md:px-10">
            <ProjectSection label="Overview">
              <p>{project.content.overview}</p>
            </ProjectSection>

            <ProjectSection label="Problem">
              <p>{project.content.problem}</p>
            </ProjectSection>

            <ProjectSection label="Features">
              <ul className="flex flex-col gap-2">
                {project.content.features.map((f) => (
                  <li key={f} className="flex gap-3">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </ProjectSection>

            <ProjectSection label="Architecture">
              <p>{project.content.architecture}</p>
            </ProjectSection>

            <ProjectSection label="Challenges">
              <p>{project.content.challenges}</p>
            </ProjectSection>

            <ProjectSection label="Lessons Learned">
              <p>{project.content.lessonsLearned}</p>
            </ProjectSection>

            {project.content.futureImprovements && (
              <ProjectSection label="Future Improvements">
                <ul className="flex flex-col gap-2">
                  {project.content.futureImprovements.map((f) => (
                    <li key={f} className="flex gap-3">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </ProjectSection>
            )}
          </div>
        ) : (
          <div className="mx-auto max-w-5xl px-6 py-10 md:px-10">
            <p className="font-body text-text-muted">
              This project is still in progress — a full case study will
              go up here once it&apos;s further along.
            </p>
          </div>
        )}

        <ProjectNav prev={prev} next={next} />
      </main>
      <Footer />
    </>
  );
}
