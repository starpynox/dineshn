import { TimelineEntry } from "@/types/timeline";

// Ordered chronologically. Sourced from resume — this is the one section
// where numbered ordering is meaningful, since it's a real sequence.
export const timeline: TimelineEntry[] = [
  {
    id: "class-x",
    date: "2022",
    title: "Class X — SHLOKA-A Birla School",
    description: "Completed secondary schooling with 85.4%.",
    tag: "Education",
  },
  {
    id: "class-xii",
    date: "2024",
    title: "Class XII — Accord School",
    description: "Completed higher secondary with 89.6%, before joining VIT.",
    tag: "Education",
  },
  {
    id: "vit",
    date: "2024 — Present",
    title: "B.Tech Computer Science, VIT Vellore",
    description: "Currently pursuing CSE with a 9.03/10.0 CGPA, expected graduation May 2028.",
    tag: "Education",
  },
  {
    id: "svfl",
    date: "2024",
    title: "SVFL E-Commerce Platform",
    description: "Built and deployed a responsive retail showcase site for a family business client.",
    tag: "Project",
  },
  {
    id: "prp",
    date: "2025",
    title: "PRP Building Navigation System",
    description: "Designed and deployed an interactive PWA floor-navigation app for VIT's Pearl Research Park.",
    tag: "Project",
  },
  {
    id: "genai-cert",
    date: "2025",
    title: "Advanced Generative AI Certification",
    description: "IBM Career Education Program, via IBM Developer Skills Network.",
    tag: "Certification",
    href: "https://courses.ibmcep.cognitiveclass.ai/certificates/a99d83a51a52409d99b9a47ff67c9d64",
  },
  {
    id: "medsync",
    date: "2025",
    title: "MedSync — Hackathon Project",
    description: "Led frontend–backend integration on an AI-powered medical report analysis platform.",
    tag: "Project",
  },
  {
    id: "hackathon-lead",
    date: "2025",
    title: "Hackathon Technical Contributor & Integration Lead",
    description: "Coordinated React–Flask integration and Git workflows across teammates under deadline.",
    tag: "Leadership",
  },
];
