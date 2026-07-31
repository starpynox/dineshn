export type ProjectStatus = "live" | "in-progress";

export interface ProjectLink {
  github?: string;
  live?: string;
}

export interface ProjectSection {
  overview: string;
  problem: string;
  features: string[];
  architecture: string;
  challenges: string;
  lessonsLearned: string;
  futureImprovements?: string[];
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  status: ProjectStatus;
  role: string;
  context: string; // e.g. "Hackathon Team Project", "Client Project"
  techStack: string[];
  accentColor: string; // hex, gives each project a unique visual identity
  links: ProjectLink;
  heroImage?: string;
  galleryImages?: string[];
  content?: ProjectSection; // omitted for in-progress teasers
}
