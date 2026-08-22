export type ShowcaseTab = "projects" | "certificates" | "tech";

export interface Project {
  title: string;
  slug: string;
  summary: string;
  image: string;
  imageAlt: string;
  technologies: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured: boolean;
  status: "completed" | "in-progress" | "archived";
  problem?: string;
  role?: string;
  features?: string[];
  challenges?: string[];
  learning?: string[];
}

export interface Skill {
  name: string;
  icon: string;
}

export interface Certification {
  title: string;
  image: string;
  imageAlt: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  tab?: ShowcaseTab;
}
