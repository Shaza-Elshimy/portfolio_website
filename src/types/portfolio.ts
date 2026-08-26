export type ShowcaseTab = "projects" | "certificates" | "tech";
export type ProjectCategory = "featured" | "other" | "archive";

export interface Project {
  title: string;
  slug: string;
  summary: string;
  image?: string;
  imageAlt?: string;
  technologies: string[];
  category: ProjectCategory;
  liveUrl?: string;
  repoUrl?: string;
  details?: {
    description?: string;
    role?: string;
    features?: string[];
    challenges?: string[];
    learning?: string[];
  };
  media?: {
    images?: string[];
    videoUrl?: string;
  };
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
