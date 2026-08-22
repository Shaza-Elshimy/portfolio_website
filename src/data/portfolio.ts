import type { Certification, NavigationItem, Skill, SocialLink } from "../types/portfolio";

export const navigation: NavigationItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#portfolio", tab: "tech" },
  { label: "Projects", href: "#portfolio", tab: "projects" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/Shaza-Elshimy", icon: "/github.png" },
  { label: "Instagram", href: "https://www.instagram.com/shaza1379", icon: "/instagram.png" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shaza-elshimy-141a05344", icon: "/linkedin.png" },
];

export const skills: Skill[] = [
  { name: "HTML 5", icon: "/html-5.svg" },
  { name: "CSS", icon: "/css.svg" },
  { name: "JavaScript", icon: "/js.svg" },
  { name: "Tailwind CSS", icon: "/tailwind.svg" },
  { name: "React.JS", icon: "/react.svg" },
  { name: "Vite", icon: "/vite.svg" },
];

export const certifications: Certification[] = [
  { title: "Learn HTML & CSS", image: "/certeficate1.png", imageAlt: "Certificate of completion for Learn HTML & CSS" },
  { title: "JavaScript", image: "/certeficate2.png", imageAlt: "Certificate of completion for JavaScript" },
  { title: "React JS", image: "/certeficate3.png", imageAlt: "Certificate of completion for React JS" },
  { title: "Modern JavaScript: ES6 and beyond", image: "/certeficate4.png", imageAlt: "Certificate of completion for Modern JavaScript: ES6 and beyond" },
  { title: "TypeScript Fundamentals", image: "/certeficate5.png", imageAlt: "Certificate of completion for TypeScript Fundamentals" },
];
