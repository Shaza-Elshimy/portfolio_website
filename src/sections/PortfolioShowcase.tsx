import { useState } from "react";
import { CertificateCard } from "../components/CertificateCard";
import { Container } from "../components/Container";
import { ProjectCard } from "../components/ProjectCard";
import { ProjectDetailsModal } from "../components/ProjectDetailsModal";
import { ProjectTabs } from "../components/ProjectTabs";
import { SectionHeading } from "../components/SectionHeading";
import { certifications, skills } from "../data/portfolio";
import { projects } from "../data/projects";
import type { Project, ProjectCategory, ShowcaseTab } from "../types/portfolio";

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
  const [activeProjectCategory, setActiveProjectCategory] = useState<ProjectCategory>("featured");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [detailsTrigger, setDetailsTrigger] = useState<HTMLButtonElement | null>(null);
  const categories: ProjectCategory[] = ["featured", "other", "archive"].filter((category): category is ProjectCategory => projects.some((project) => project.category === category));
  const visibleProjects = projects.filter((project) => project.category === activeProjectCategory);

  function openProjectDetails(project: Project, trigger: HTMLButtonElement) {
    setDetailsTrigger(trigger);
    setSelectedProject(project);
  }

  function closeProjectDetails() {
    setSelectedProject(null);
  }

  return (
    <section id="portfolio" className="py-20 text-white sm:py-24">
      <Container>
      <div className="text-center" data-aos="fade-up">
        <SectionHeading>Portfolio Showcase</SectionHeading>
        <p className="mt-6 text-lg leading-relaxed text-gray-400">Explore my journey through projects, certificates, and tech stack. Each section</p>
        <p className="text-lg leading-relaxed text-gray-400">represents a milestone in my continuous learning path.</p>
      </div>
      <div className="mt-10 flex flex-wrap justify-center gap-4 sm:gap-6" role="tablist" aria-label="Portfolio showcase" data-aos="fade-up">
        {tabs.map((tab) => <button key={tab.id} type="button" role="tab" aria-selected={activeTab === tab.id} aria-controls={`${tab.id}-panel`} onClick={() => onTabChange(tab.id)} className={`${activeTab === tab.id ? "active-tab" : "bg-gray-700 hover:bg-gray-600"} rounded-lg px-6 py-3 font-semibold text-white shadow-md transition`}>{tab.label}</button>)}
      </div>
      <div className="mt-10">
        <div id="projects-panel" role="tabpanel" hidden={activeTab !== "projects"}>
          <ProjectTabs categories={categories} activeCategory={activeProjectCategory} onChange={setActiveProjectCategory} />
          <div id={`${activeProjectCategory}-projects-panel`} role="tabpanel" aria-labelledby={`${activeProjectCategory}-projects-tab`} className="mt-8">
            {visibleProjects.length ? <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">{visibleProjects.map((project) => <ProjectCard key={project.slug} project={project} onDetails={openProjectDetails} />)}</div> : <p className="text-center text-gray-300">No projects are available in this category yet.</p>}
          </div>
          {selectedProject && <ProjectDetailsModal project={selectedProject} returnFocusTo={detailsTrigger} onClose={closeProjectDetails} />}
        </div>
        <div id="certificates-panel" role="tabpanel" hidden={activeTab !== "certificates"}>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">{certifications.map((certification) => <CertificateCard key={certification.title} certification={certification} />)}</div>
        </div>
        <div id="tech-panel" role="tabpanel" hidden={activeTab !== "tech"}>
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">{skills.map((skill) => <article key={skill.name} className="soft-elevation flex min-h-40 flex-col items-center justify-center rounded-lg border border-white/20 bg-white/10 p-5 backdrop-blur-md"><div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-white/10 p-2">{skill.icon ? <img src={skill.icon} alt="" className="h-full w-full object-contain" width="128" height="128" loading="lazy" decoding="async" /> : <span className="text-center text-xs font-bold leading-tight text-indigo-200" aria-hidden="true">{skill.name.slice(0, 2).toUpperCase()}</span>}</div><h3 className="text-center text-sm font-semibold sm:text-base">{skill.name}</h3></article>)}</div>
        </div>
      </div>
      </Container>
    </section>
  );
}
