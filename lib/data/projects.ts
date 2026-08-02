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
    accentColor: "#2F6FED",
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
    accentColor: "#2F6FED",
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
    slug: "motorq-fleet-intelligence",
    name: "Motorq Fleet Intelligence Service",
    tagline: "AI-powered vehicle telemetry normalization and anomaly diagnosis",
    status: "live",
    role: "Solo Developer — Architecture, AI Integration & Deployment",
    context: "Independent Project",
    techStack: [
      "Python",
      "FastAPI",
      "Google Gemini 2.5 Flash",
      "Pydantic",
      "Vercel (Serverless)",
      "Mangum",
    ],
    accentColor: "#2F6FED",
    links: {
      github: "",
      live: "",
    },
    content: {
      overview:
        "A serverless microservice that ingests raw vehicle telemetry from different manufacturers (Ford, BMW, and others), each using different units and data formats, converts it into one standard format, and automatically investigates any abnormal readings using an AI agent — returning a structured diagnostic report with severity level and recommended action.",
      problem:
        "Different car manufacturers send telemetry in incompatible formats — °F vs °C, mph vs km/h, different error-code naming schemes. Raw threshold alerts also give no context on root cause. This service solves both problems: one unified data format, and AI-generated diagnoses instead of raw numbers.",
      features: [
        "Normalizes multi-OEM telemetry into a single canonical schema",
        "Rule-based anomaly detection (temperature thresholds, active fault codes)",
        "AI agent investigates anomalies using two custom diagnostic tools (maintenance history lookup, DTC/fault code lookup) before diagnosing",
        "Enforced structured JSON output (severity level, summary, recommended action)",
        "Automatic fallback to a rule-based diagnosis if the AI service is unavailable, so the API never fails outright",
      ],
      architecture:
        "Telemetry lands on a FastAPI service running as a serverless function on Vercel (via the Mangum ASGI adapter). A normalization layer maps each OEM's raw format into one canonical schema, validated with Pydantic. Rule-based checks flag anomalies (temperature thresholds, active fault codes); flagged readings are handed to an AI agent built on Google Gemini 2.5 Flash, which calls two custom diagnostic tools — a maintenance history lookup and a DTC/fault code lookup — before producing a structured diagnosis. If the AI service is unavailable, the service falls back to the rule-based diagnosis automatically, so the API always returns a result.",
      // DRAFT — replace with your actual account of technical hurdles
      challenges:
        "Getting the AI agent to reliably return strictly structured output (rather than free-form text) required enforcing function calling and schema validation end to end, and designing the rule-based fallback so the service degrades gracefully instead of failing outright when the AI provider has an outage.",
      // DRAFT — replace with your actual takeaways
      lessonsLearned:
        "Building an AI agent that calls its own tools before producing a verdict — rather than just prompting a model once — clarified how much of 'AI integration' is really about constraining and validating the model's output, not just calling an API. Designing the rule-based fallback also reinforced thinking about service reliability, not just the happy path.",
      futureImprovements: [
        "Add support for additional OEM telemetry formats beyond Ford and BMW",
        "Expose a webhook-based ingestion path for real-time fleet monitoring",
      ],
    },
  },
  {
    slug: "budget-tracker",
    name: "Budget Tracker",
    tagline: "Offline-first budget tracking PWA — installable, zero backend, fully private",
    status: "live",
    role: "Solo Developer — Vanilla JS, PWA & Data Security",
    context: "Independent Project",
    techStack: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "Service Workers",
      "Web Storage API",
      "SVG",
    ],
    accentColor: "#2F6FED",
    links: {
      github: "",
      live: "",
    },
    content: {
      overview:
        "A privacy-focused personal finance tracker built as an installable Progressive Web App with zero backend dependency — all data stays on-device. Fully offline-capable, service-worker cached, and installable straight to a phone's home screen.",
      problem:
        "Most budget trackers require an account and send spending data to a remote server just to function. This one is built the opposite way: an offline-first PWA where all financial data stays entirely on-device, works with no internet connection, and has no backend or third-party service to depend on — or trust.",
      features: [
        "Category-based budget limits with real-time progress tracking",
        "Expense logging with full CRUD (add, edit, delete)",
        "Filterable, searchable expense history",
        "Monthly analytics: spending trends, category breakdowns, month-over-month comparisons, budget utilization, and daily spending pace vs. the prior month",
        "Full JSON backup/restore and CSV import/export, with schema validation against malformed input",
      ],
      architecture:
        "Built entirely with vanilla JavaScript — no frameworks, no charting libraries, no CDNs. A custom, dependency-free analytics engine renders trend lines, donut breakdowns, and comparative pace charts directly as native SVG. All data persists in the browser's Web Storage API, with a service worker caching the app shell for full offline use and home-screen installability. A strict Content Security Policy and sanitized rendering prevent XSS from unescaped user input, and imported JSON/CSV data is schema-validated before being trusted.",
      // DRAFT — replace with your actual account of technical hurdles
      challenges:
        "Building the charting engine from scratch instead of reaching for a library meant hand-rolling SVG path math for trend lines and donut segments, and hardening data import (JSON/CSV) against malformed or malicious input required real schema validation rather than assuming well-formed data.",
      // DRAFT — replace with your actual takeaways
      lessonsLearned:
        "Skipping every framework and library forced a much closer look at what a charting library or CSP actually does under the hood — and made clear how much of 'security' for a client-only app comes down to never trusting stored or imported data, even your own.",
      futureImprovements: [
        "Optional end-to-end encrypted cloud sync, kept strictly opt-in to preserve the offline-first privacy model",
        "Recurring expense support",
      ],
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const liveProjects = projects.filter((p) => p.status === "live");
export const inProgressProjects = projects.filter((p) => p.status === "in-progress");
