export type SkillCategory =
  | "Programming"
  | "Frontend"
  | "Backend"
  | "Databases"
  | "Cloud"
  | "Developer Tools"
  | "AI"
  | "Coursework";

export interface Skill {
  name: string;
  category: SkillCategory;
  icon?: string; // react-icons key, resolved in component
}
