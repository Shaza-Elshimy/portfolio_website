import { CertificateCard } from "../components/CertificateCard";
import { ProjectCard } from "../components/ProjectCard";
import { SectionHeading } from "../components/SectionHeading";
import { certifications, skills } from "../data/portfolio";
import { projects } from "../data/projects";
import type { ShowcaseTab } from "../types/portfolio";

interface PortfolioShowcaseProps {
  activeTab: ShowcaseTab;
  onTabChange: (tab: ShowcaseTab) => void;
}

const tabs: { id: ShowcaseTab; label: string }[] = [
  { id: "projects", label: "Projects" },
  { id: "certificates", label: "Certificates" },
  { id: "tech", label: "Tech Stack" },
];

export function PortfolioShowcase({ activeTab, onTabChange }: PortfolioShowcaseProps) {
  return (
    <section id="portfolio" className="px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl text-center" data-aos="fade-up">
        <SectionHeading>Portfolio Showcase</SectionHeading>
        <p className="mt-6 text-lg leading-relaxed text-gray-400">Explore my journey through projects, certificates, and tech stack. Each section</p>
        <p className="text-lg leading-relaxed text-gray-400">represents a milestone in my continuous learning path.</p>
      </div>
      <div className="mt-10 flex flex-wrap justify-center gap-4 sm:gap-6" role="tablist" aria-label="Portfolio showcase" data-aos="fade-up">
        {tabs.map((tab) => <button key={tab.id} type="button" role="tab" aria-selected={activeTab === tab.id} aria-controls={`${tab.id}-panel`} onClick={() => onTabChange(tab.id)} className={`${activeTab === tab.id ? "active-tab" : "bg-gray-700 hover:bg-gray-600"} rounded-lg px-6 py-3 font-semibold text-white shadow-md transition`}>{tab.label}</button>)}
      </div>
      <div className="mt-10">
        <div id="projects-panel" role="tabpanel" hidden={activeTab !== "projects"}>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{projects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
        </div>
        <div id="certificates-panel" role="tabpanel" hidden={activeTab !== "certificates"}>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">{certifications.map((certification) => <CertificateCard key={certification.title} certification={certification} />)}</div>
        </div>
        <div id="tech-panel" role="tabpanel" hidden={activeTab !== "tech"}>
          <div className="grid grid-cols-2 gap-6 px-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">{skills.map((skill) => <article key={skill.name} className="flex flex-col items-center rounded-lg border border-white/20 bg-white/10 p-6 shadow-lg backdrop-blur-md"><img src={skill.icon} alt={skill.name} className="mb-4 h-16 w-16 object-contain" width="128" height="128" loading="lazy" decoding="async" /><h3 className="text-center text-base font-semibold">{skill.name}</h3></article>)}</div>
        </div>
      </div>
    </section>
  );
}
