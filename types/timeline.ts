export interface TimelineEntry {
  id: string;
  date: string; // display string, e.g. "2024"
  title: string;
  description: string;
  tag?: string; // e.g. "Education", "Project", "Certification"
  href?: string; // optional external link (e.g. certificate verification)
}
