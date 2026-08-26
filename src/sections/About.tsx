import { SectionHeading } from "../components/SectionHeading";
import { Container } from "../components/Container";
import { certifications, skills } from "../data/portfolio";
import { projects } from "../data/projects";
import type { ShowcaseTab } from "../types/portfolio";

export function About({ onTabChange }: { onTabChange: (tab: ShowcaseTab) => void }) {
  const stats = [
    { label: "Projects", value: projects.length, image: "/code.png", description: "A collection of full-stack and frontend projects built around practical user experiences." },
    { label: "Certificates", value: certifications.length, image: "/award.png", description: "Certified achievements in web development and programming from recognized platforms." },
    { label: "Skills", value: skills.length, image: "/skill.png", description: "Working across modern frontend and backend technologies, from React and TypeScript to Node.js and databases." },
  ];

  return (
    <section id="about" className="py-20 text-white sm:py-24">
      <Container>
      <div className="mb-12 text-center" data-aos="fade-up"><SectionHeading>About me</SectionHeading></div>
      <div className="mx-auto max-w-3xl">
        <div className="space-y-6 text-center" data-aos="fade-up">
          <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">Hello, I'm <span className="gradient-text">Shaza Hamdy</span></h2>
          <p className="text-sm leading-relaxed text-gray-200 sm:text-base">A full-stack web developer focused on building responsive, accessible applications from polished interfaces to reliable backend services. I work with React, TypeScript, Node.js, Express, MongoDB, and modern web tools to turn ideas into complete digital experiences.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/shaza_Hamdy_Mohamed_CV%20.pdf" download className="rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 px-5 py-2 transition duration-300 hover:scale-105">Download CV</a>
            <a href="#portfolio" onClick={() => onTabChange("projects")} className="gradient-text rounded-lg border border-white px-5 py-2 transition duration-300 hover:scale-105">View Projects</a>
          </div>
        </div>
      </div>
      <div className="mt-16 grid grid-cols-1 gap-6 text-center sm:grid-cols-2 sm:gap-8 md:grid-cols-3">
        {stats.map((stat) => <article key={stat.label} className="rounded-lg border border-white/20 bg-white/10 p-6 shadow-lg backdrop-blur-md transition duration-300 hover:scale-105"><div className="mb-4 flex flex-col items-center justify-center gap-2"><span className="rounded-full bg-white/10 p-2 shadow-lg"><img src={stat.image} alt="" className="h-8 w-8" width="64" height="64" decoding="async" /></span><span className="text-lg font-bold">{stat.value}</span></div><p className="font-semibold">{stat.label}</p><p className="mt-2 text-sm text-gray-300 sm:text-base">{stat.description}</p></article>)}
      </div>
      </Container>
    </section>
  );
}
