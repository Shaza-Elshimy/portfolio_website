import { SocialLinks } from "../components/SocialLinks";
import type { ShowcaseTab } from "../types/portfolio";

export function Hero({ onTabChange }: { onTabChange: (tab: ShowcaseTab) => void }) {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center px-4 pb-12 pt-20 text-white sm:px-6">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 md:grid-cols-2" data-aos="fade-up">
        <div className="space-y-4 text-center md:text-left" data-aos="fade-up">
          <p className="text-xs text-indigo-500 sm:text-sm">Hello there, I’m</p>
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-6xl">Shaza Hamdy</h1>
          <p className="text-xl font-semibold text-indigo-400 sm:text-2xl md:text-3xl">Frontend Web Developer</p>
          <p className="mx-auto max-w-md text-sm text-gray-400 sm:text-base md:mx-0">I build responsive, accessible, and modern web experiences using HTML, CSS, JavaScript, and React.</p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:justify-start">
            {["HTML", "CSS", "JavaScript", "TailwindCSS", "React"].map((skill) => <span key={skill} className="rounded-xl bg-white/10 px-2 py-1 text-xs text-white shadow sm:px-3 sm:text-sm">{skill}</span>)}
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-4 md:justify-start">
            <a href="#contact" className="rounded-lg bg-indigo-600 px-6 py-2 text-white transition hover:bg-purple-700">Contact Me</a>
            <a href="#portfolio" onClick={() => onTabChange("projects")} className="rounded-lg border border-indigo-500 px-6 py-2 text-white transition hover:bg-purple-600">See Projects</a>
          </div>
          <SocialLinks />
        </div>
        <div className="mt-8 flex justify-center md:mt-0" data-aos="fade-left">
          <img src="/hero.png" alt="" className="w-40 drop-shadow-xl sm:w-60 md:w-96" width="2000" height="2000" decoding="async" />
        </div>
      </div>
    </section>
  );
}
