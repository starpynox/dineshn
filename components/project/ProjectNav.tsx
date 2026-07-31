import Link from "next/link";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Project } from "@/types/project";

interface ProjectNavProps {
  prev: Project | null;
  next: Project | null;
}

export function ProjectNav({ prev, next }: ProjectNavProps) {
  return (
    <div className="mx-auto mt-20 max-w-5xl border-t border-border px-6 py-10 md:px-10">
      <div className="flex items-center justify-between gap-6">
        {prev ? (
          <Link
            href={`/projects/${prev.slug}`}
            data-cursor-hover
            data-cursor-text="View"
            className="group flex flex-col gap-1"
          >
            <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-text-faint">
              <FiArrowLeft size={12} />
              Previous
            </span>
            <span className="font-display text-lg text-text-muted transition-colors group-hover:text-text">
              {prev.name}
            </span>
          </Link>
        ) : (
          <span />
        )}

        {next ? (
          <Link
            href={`/projects/${next.slug}`}
            data-cursor-hover
            data-cursor-text="View"
            className="group flex flex-col items-end gap-1 text-right"
          >
            <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-text-faint">
              Next
              <FiArrowRight size={12} />
            </span>
            <span className="font-display text-lg text-text-muted transition-colors group-hover:text-text">
              {next.name}
            </span>
          </Link>
        ) : (
          <span />
        )}
      </div>
    </div>
  );
}
