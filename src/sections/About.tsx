import { SectionHeading } from "../components/SectionHeading";
import { certifications, skills } from "../data/portfolio";
import { projects } from "../data/projects";
import type { ShowcaseTab } from "../types/portfolio";

export function About({ onTabChange }: { onTabChange: (tab: ShowcaseTab) => void }) {
  const stats = [
    { label: "Projects", value: projects.length, image: "/code.png", description: "A collection of real-world projects showcasing my frontend development skills and creativity." },
    { label: "Certificates", value: certifications.length, image: "/award.png", description: "Certified achievements in web development and programming from recognized platforms." },
    { label: "Skills", value: skills.length, image: "/skill.png", description: "Proficient in HTML, CSS, JavaScript, React, and modern frontend technologies." },
  ];

  return (
    <section id="about" className="px-4 py-24 text-white sm:px-6">
      <div className="mx-auto mb-12 max-w-6xl text-center" data-aos="fade-up"><SectionHeading>About me</SectionHeading></div>
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div className="space-y-6 text-center md:text-left" data-aos="fade-right">
          <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">Hello, I'm <span className="gradient-text">Shaza Hamdy</span></h2>
          <p className="text-sm leading-relaxed text-gray-200 sm:text-base">A frontend developer focused on building responsive and modern websites using HTML, CSS, JavaScript, and React. I love transforming designs into real, accessible web experiences.</p>
          <div className="flex flex-wrap justify-center gap-4 md:justify-start">
            <span className="rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 px-5 py-2 opacity-80" aria-disabled="true" title="A CV link will be added when available">CV coming soon</span>
            <a href="#portfolio" onClick={() => onTabChange("projects")} className="gradient-text rounded-lg border border-white px-5 py-2 transition duration-300 hover:scale-105">View Projects</a>
          </div>
        </div>
        <div className="flex justify-center" data-aos="fade-left"><div className="aspect-square w-40 rounded-full bg-gradient-to-tr from-purple-600 to-blue-500 p-1 sm:w-56 md:w-64"><div className="flex h-full w-full items-center justify-center rounded-full bg-[#0f0f2d]"><img src="/personal.jpeg" alt="Portrait of Shaza Hamdy" className="h-full w-full rounded-full object-cover shadow-lg" width="768" height="768" decoding="async" /></div></div></div>
      </div>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 py-16 text-center sm:grid-cols-2 sm:gap-8 sm:px-6 md:grid-cols-3">
        {stats.map((stat) => <article key={stat.label} className="rounded-lg border border-white/20 bg-white/10 p-6 shadow-lg backdrop-blur-md transition duration-300 hover:scale-105"><div className="mb-4 flex flex-col items-center justify-center gap-2"><span className="rounded-full bg-white/10 p-2 shadow-lg"><img src={stat.image} alt="" className="h-8 w-8" width="64" height="64" decoding="async" /></span><span className="text-lg font-bold">{stat.value}</span></div><p className="font-semibold">{stat.label}</p><p className="mt-2 text-sm text-gray-300 sm:text-base">{stat.description}</p></article>)}
      </div>
    </section>
  );
}
