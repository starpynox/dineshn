import { Project } from "@/types/project";

/**
 * NOTE ON CONTENT ACCURACY:
 * Fields marked "// DRAFT" are generated from resume bullet points and
 * reasonable inference about typical challenges for this kind of build.
 * Review and replace these with your actual first-hand account before
 * this goes live — recruiters probe exactly these sections in interviews.
 */

export const projects: Project[] = [
  {
    slug: "medsync",
    name: "MedSync",
    tagline: "AI-powered medical report analysis platform",
    status: "live",
    role: "Full-Stack & AI Integration",
    context: "Hackathon Team Project",
    techStack: ["React", "Flask", "Firebase", "Firestore", "Python", "REST API"],
    accentColor: "#2F6FED",
    links: {
      github: "",
      live: "",
    },
    content: {
      overview:
        "MedSync is a healthcare web application built to help patients and clinicians manage medical records in one place, combining a patient dashboard with automated analysis of uploaded medical reports.",
      problem:
        "Patients often receive medical reports as dense, unstructured PDFs that are hard to interpret quickly, and existing record-keeping tools rarely connect report content to medication and lab history in a single view.",
      features: [
        "Responsive React dashboard for patient profiles, medications, and lab results",
        "Secure authentication and cloud data storage via Firebase Auth and Firestore",
        "Flask REST API backend that processes uploaded PDF medical reports",
        "Automated generation of structured clinical summaries from raw report text",
      ],
      architecture:
        "A React frontend handles the patient dashboard and auth flows, communicating with Firebase Firestore for real-time data (profiles, medications, lab results). A separate Flask REST API receives uploaded PDF reports, parses them, and returns structured summary data consumed by the dashboard.",
      // DRAFT — replace with your actual account of technical hurdles
      challenges:
        "Coordinating a two-service architecture (Firebase for data, Flask for PDF processing) under hackathon time constraints required careful API contract decisions between the frontend and backend teams, especially around how parsed report data was structured and returned.",
      // DRAFT — replace with your actual takeaways
      lessonsLearned:
        "Working across a Firebase-backed frontend and a separate Python API deepened experience integrating services with different data models, and reinforced the value of agreeing on response shapes early when a team is building both sides in parallel.",
      futureImprovements: [
        "Expand report parsing to handle a wider range of lab report formats",
        "Add trend visualization across a patient's historical lab results",
      ],
    },
  },
  {
    slug: "prp-navigation",
    name: "PRP Navigation System",
    tagline: "Interactive floor-wise navigation PWA for Pearl Research Park",
    status: "live",
    role: "Developer",
    context: "Web & PWA Project — VIT Vellore",
    techStack: ["JavaScript", "SVG", "Service Workers", "Web App Manifest", "PWA"],
    accentColor: "#5A8FFF",
    links: {
      github: "",
      live: "",
    },
    content: {
      overview:
        "An interactive, floor-wise navigation web app for VIT's Pearl Research Park (PRP), letting students and visitors visually locate rooms across the building without relying on static signage.",
      problem:
        "Large multi-floor research buildings are difficult to navigate for first-time visitors, and printed floor directories don't scale well or update easily as room usage changes.",
      features: [
        "Scalable SVG-based floor maps with interactive room visualization",
        "Smooth zoom and pan across detailed floor layouts",
        "Installable Progressive Web App with offline access",
        "Service worker caching for fast repeat loads without network dependency",
      ],
      architecture:
        "Floor plans are represented as scalable SVG assets with individually addressable room elements, allowing click/tap interactions per room. A Service Worker caches static assets and floor data on first load, and a Web App Manifest enables installation as a standalone PWA.",
      // DRAFT — replace with your actual account of technical hurdles
      challenges:
        "Keeping SVG floor maps both visually accurate and lightweight enough for smooth zooming required balancing path detail against file size, and configuring the service worker's caching strategy to keep offline maps up to date without stale data.",
      // DRAFT — replace with your actual takeaways
      lessonsLearned:
        "Building this deepened hands-on experience with PWA fundamentals — service worker lifecycle, caching strategies, and manifest configuration — beyond typical single-page app development.",
      futureImprovements: [
        "Add search-by-room-number with auto-pan to location",
        "Support multi-building navigation beyond PRP",
      ],
    },
  },
  {
    slug: "svfl",
    name: "SVFL E-Commerce & Retail Showcase",
    tagline: "Web presence and product showcase for a family retail business",
    status: "live",
    role: "Web Developer",
    context: "Client Project",
    techStack: ["JavaScript", "HTML5", "CSS3", "Bootstrap", "Vercel"],
    accentColor: "#8A8A93",
    links: {
      github: "",
      live: "",
    },
    content: {
      overview:
        "A responsive web platform built for SVFL, a local family-run apparel retailer, to showcase their product collections and store catalog to customers online.",
      problem:
        "SVFL had no digital presence for customers to browse collections before visiting in person, limiting reach beyond foot traffic to the physical store.",
      features: [
        "Interactive product galleries for apparel collections",
        "Store catalog display organized by category",
        "Fully responsive layout across mobile and desktop",
        "Optimized asset loading for fast page speeds",
      ],
      architecture:
        "A static, responsive frontend built with HTML, CSS, and Bootstrap for layout consistency, deployed on Vercel for fast global delivery with minimal infrastructure overhead.",
      // DRAFT — replace with your actual account of technical hurdles
      challenges:
        "Optimizing image-heavy product galleries for fast load times on mobile connections, while keeping the catalog easy for a non-technical business owner to update, required deliberate choices about asset sizing and page structure.",
      // DRAFT — replace with your actual takeaways
      lessonsLearned:
        "Working directly with a business client on real requirements — rather than a self-directed project — sharpened focus on practical constraints like page speed and ease of content updates over purely technical polish.",
      futureImprovements: [
        "Add a lightweight CMS so the client can update the catalog without code changes",
        "Introduce basic analytics to track which collections get the most engagement",
      ],
    },
  },
  {
    slug: "wardrobeos",
    name: "WardrobeOS",
    tagline: "In progress — details coming soon.",
    status: "in-progress",
    role: "",
    context: "",
    techStack: [],
    accentColor: "#5C5C64",
    links: {},
    // No `content` — intentionally a teaser only, per your instruction
  },
  {
    slug: "mess-food-calorie-tracker",
    name: "Mess Food Calorie Tracker",
    tagline: "Nutrition estimation for hostel meals — architecture planned, build in progress.",
    status: "in-progress",
    role: "",
    context: "",
    techStack: ["React", "Node.js", "Express"],
    accentColor: "#5C5C64",
    links: {},
    // No `content` — still in progress, per your instruction
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const liveProjects = projects.filter((p) => p.status === "live");
export const inProgressProjects = projects.filter((p) => p.status === "in-progress");
