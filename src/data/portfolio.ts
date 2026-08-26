import type { Certification, NavigationItem, Skill, SocialLink } from "../types/portfolio";

export const navigation: NavigationItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#portfolio", tab: "tech" },
  { label: "Projects", href: "#portfolio", tab: "projects" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/Shaza-Elshimy", icon: "/social/github.png" },
  { label: "Instagram", href: "https://www.instagram.com/shaza1379", icon: "/social/instagram.png" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shaza-elshimy-141a05344", icon: "/social/linkedin.png" },
];

export const skills: Skill[] = [
  { name: "HTML5", icon: "/skills/html-5.svg" },
  { name: "CSS3", icon: "/skills/css.svg" },
  { name: "Bootstrap", icon: "/skills/bootstrap.webp" },
  { name: "JavaScript (ES6)", icon: "/skills/js.svg" },
  { name: "TypeScript", icon: "/skills/typescript.png" },
  { name: "Tailwind CSS", icon: "/skills/tailwind.svg" },
  { name: "React", icon: "/skills/react.svg" },
  { name: "Next.js", icon: "/skills/nextjs.jpeg" },
  { name: "Vite", icon: "/skills/vite.svg" },
  { name: "React Router DOM", icon: "/skills/react-router.svg" },
  { name: "TanStack Query", icon: "/skills/tanstack_query.png" },
  { name: "Redux Toolkit", icon: "/skills/redux_toolkit.jpeg" },
  { name: "React Hook Form", icon: "/skills/react_hook_form.png" },
  { name: "Zod", icon: "/skills/zod.png" },
  { name: "Node.js", icon: "/skills/nodejs.jpeg" },
  { name: "Express.js", icon: "/skills/expressjs.webp" },
  { name: "NestJS", icon: "/skills/nestjs.webp" },
  { name: "MongoDB", icon: "/skills/mongodb.png" },
  { name: "PostgreSQL", icon: "/skills/postgreesql.webp" },
  { name: "Prisma ORM", icon: "/skills/prisma.png" },
  { name: "Redis", icon: "/skills/redis.svg" },
  { name: "Docker", icon: "/skills/docker.png" },
  { name: "OpenAI-compatible LLMs", icon: "/skills/openai.svg" }
];

export const certifications: Certification[] = [
  { title: "Learn HTML & CSS", image: "/certificates/certeficate1.png", imageAlt: "Certificate of completion for Learn HTML & CSS" },
  { title: "JavaScript", image: "/certificates/certeficate2.png", imageAlt: "Certificate of completion for JavaScript" },
  { title: "React JS", image: "/certificates/certeficate3.png", imageAlt: "Certificate of completion for React JS" },
  { title: "Modern JavaScript: ES6 and beyond", image: "/certificates/certeficate4.png", imageAlt: "Certificate of completion for Modern JavaScript: ES6 and beyond" },
  { title: "TypeScript Fundamentals", image: "/certificates/certeficate5.png", imageAlt: "Certificate of completion for TypeScript Fundamentals" },
];
