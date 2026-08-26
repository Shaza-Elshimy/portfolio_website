import { SocialLinks } from "../components/SocialLinks";
import { Container } from "../components/Container";
import type { ShowcaseTab } from "../types/portfolio";

export function Hero({ onTabChange }: { onTabChange: (tab: ShowcaseTab) => void }) {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center pb-16 pt-24 text-white sm:pb-20">
      <Container className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 lg:gap-16" >
        <div className="max-w-xl space-y-4 text-center md:text-left" data-aos="fade-up">
          <p className="text-xs text-indigo-500 sm:text-sm">Hello there, I’m</p>
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-6xl">Shaza Hamdy</h1>
          <p className="text-xl font-semibold text-indigo-400 sm:text-2xl md:text-3xl">Full-Stack Web Developer</p>
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-gray-400 sm:text-base md:mx-0">I build responsive, accessible web applications across the frontend and backend, using React, TypeScript, Node.js, Express, and MongoDB.</p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:justify-start">
            {["React", "TypeScript", "Node.js", "Express", "MongoDB"].map((skill) => <span key={skill} className="rounded-xl bg-white/10 px-2 py-1 text-xs text-white shadow sm:px-3 sm:text-sm">{skill}</span>)}
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-4 md:justify-start">
            <a href="#contact" className="rounded-lg bg-indigo-600 px-6 py-2 text-white transition hover:bg-purple-700">Contact Me</a>
            <a href="#portfolio" onClick={() => onTabChange("projects")} className="rounded-lg border border-indigo-500 px-6 py-2 text-white transition hover:bg-purple-600">See Projects</a>
          </div>
          <SocialLinks />
        </div>
        <div className="mt-8 flex justify-center md:mt-0" data-aos="fade-left">
          <img src="/profile/personal.jpeg" alt="Portrait of Shaza Hamdy" className="aspect-square w-40 border-4 border-indigo-300/70 object-cover shadow-[0_0_28px_rgba(129,140,248,0.5),0_0_64px_rgba(168,85,247,0.28)] sm:w-60 sm:shadow-[0_0_38px_rgba(129,140,248,0.55),0_0_86px_rgba(168,85,247,0.32)] md:w-80" width="768" height="768" decoding="async" />
        </div>
      </Container>
    </section>
  );
}
