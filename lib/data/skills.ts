import { Skill } from "@/types/skill";

// Sourced directly from resume. Coursework category intentionally left
// empty — resume lists no specific coursework; add real course names here
// if you want that category to appear on the site.
export const skills: Skill[] = [
  // Programming
  { name: "Java", category: "Programming" },
  { name: "Python", category: "Programming" },
  { name: "C", category: "Programming" },
  { name: "JavaScript", category: "Programming" },
  { name: "SQL", category: "Programming" },

  // Frontend
  { name: "React", category: "Frontend" },
  { name: "HTML5", category: "Frontend" },
  { name: "CSS3", category: "Frontend" },
  { name: "Bootstrap", category: "Frontend" },

  // Backend
  { name: "Node.js", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "Flask", category: "Backend" },
  { name: "REST APIs", category: "Backend" },

  // Databases
  { name: "Oracle SQL", category: "Databases" },
  { name: "Firebase Firestore", category: "Databases" },
  { name: "MongoDB", category: "Databases" },

  // Cloud
  { name: "Firebase Auth", category: "Cloud" },
  { name: "Vercel", category: "Cloud" },

  // Developer Tools
  { name: "Git", category: "Developer Tools" },
  { name: "GitHub", category: "Developer Tools" },
  { name: "VS Code", category: "Developer Tools" },
  { name: "Progressive Web Apps", category: "Developer Tools" },

  // AI
  { name: "Generative AI (IBM Certified)", category: "AI" },
];
