import {
  SiJavascript,
  SiPython,
  SiOpenjdk,
  SiC,
  SiReact,
  SiHtml5,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiFlask,
  SiFirebase,
  SiMongodb,
  SiGit,
  SiGithub,
  SiVercel,
} from "react-icons/si";
import { FiCloud, FiCode, FiCpu, FiDatabase, FiLayout, FiTerminal } from "react-icons/fi";
import { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
  JavaScript: SiJavascript,
  Python: SiPython,
  Java: SiOpenjdk,
  C: SiC,
  SQL: FiDatabase,
  React: SiReact,
  HTML5: SiHtml5,
  CSS3: FiLayout,
  Bootstrap: SiBootstrap,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  Flask: SiFlask,
  "REST APIs": FiCloud,
  "Oracle SQL": FiDatabase,
  "Firebase Firestore": SiFirebase,
  MongoDB: SiMongodb,
  "Firebase Auth": SiFirebase,
  Vercel: SiVercel,
  Git: SiGit,
  GitHub: SiGithub,
  "VS Code": FiTerminal,
  "Progressive Web Apps": FiCpu,
  "Generative AI (IBM Certified)": FiCpu,
};

export function getSkillIcon(name: string): IconType {
  return iconMap[name] ?? FiCode;
}
