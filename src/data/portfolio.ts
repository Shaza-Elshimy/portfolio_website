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
  { name: "HTML5", icon: "/html-5.svg" },
  { name: "CSS3", icon: "/css.svg" },
  { name: "Bootstrap", icon: "/bootstrap.webp" },
  { name: "JavaScript (ES6)", icon: "/js.svg" },
  { name: "TypeScript", icon: "/typescript.png" },
  { name: "Tailwind CSS", icon: "/tailwind.svg" },
  { name: "React", icon: "/react.svg" },
  { name: "Next.js", icon: "/nextjs.jpeg" },
  { name: "Vite", icon: "/vite.svg" },
  { name: "React Router DOM", icon: "/react-router.svg" },
  { name: "TanStack Query", icon: "/tanstack_query.png" },
  { name: "Redux Toolkit", icon: "/redux_toolkit.jpeg" },
  { name: "React Hook Form", icon: "/react_hook_form.png" },
  { name: "Zod", icon: "/zod.png" },
  { name: "Node.js", icon: "/nodejs.jpeg" },
  { name: "Express.js", icon: "/expressjs.webp" },
  { name: "NestJS", icon: "/nestjs.webp" },
  { name: "MongoDB", icon: "/mongodb.png" },
  { name: "PostgreSQL", icon: "/postgreesql.webp" },
  { name: "Prisma ORM", icon: "/prisma.png" },
  { name: "Redis", icon: "/redis.svg" },
  { name: "Docker", icon: "/docker.png" },
  { name: "OpenAI-compatible LLMs", icon: "/openai.svg" }
];

export const certifications: Certification[] = [
  { title: "Learn HTML & CSS", image: "/certeficate1.png", imageAlt: "Certificate of completion for Learn HTML & CSS" },
  { title: "JavaScript", image: "/certeficate2.png", imageAlt: "Certificate of completion for JavaScript" },
  { title: "React JS", image: "/certeficate3.png", imageAlt: "Certificate of completion for React JS" },
  { title: "Modern JavaScript: ES6 and beyond", image: "/certeficate4.png", imageAlt: "Certificate of completion for Modern JavaScript: ES6 and beyond" },
  { title: "TypeScript Fundamentals", image: "/certeficate5.png", imageAlt: "Certificate of completion for TypeScript Fundamentals" },
];
