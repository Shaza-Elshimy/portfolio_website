import type { Project } from "../types/portfolio";

interface ProjectCardProps {
  project: Project;
  onDetails: (project: Project, trigger: HTMLButtonElement) => void;
}

export function ProjectCard({ project, onDetails }: ProjectCardProps) {
  return (
    <article className="soft-elevation flex flex-col rounded-lg border border-white/20 bg-white/10 p-6 backdrop-blur-md">
      {project.image ? <img src={project.image} alt={project.imageAlt ?? `${project.title} project preview`} className="mb-4 h-44 w-full rounded-md object-cover" width="1920" height="936" loading="lazy" decoding="async" /> : <div className="mb-4 flex h-44 w-full items-center justify-center rounded-md border border-dashed border-white/25 bg-white/5 px-4 text-center text-sm text-gray-300">Project preview coming soon</div>}
      <h3 className="text-lg font-semibold">{project.title}</h3>
      <p className="mt-2 flex-grow text-sm text-gray-300 sm:text-base">{project.summary}</p>
      {project.technologies.length > 0 && <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
        {project.technologies.map((technology) => <li key={technology} className="rounded-md border border-white/20 bg-white/10 px-2 py-1 text-xs text-gray-200">{technology}</li>)}
      </ul>}
      <div className="mt-5 flex flex-wrap items-center gap-3 text-sm sm:text-base">
        <button type="button" onClick={(event) => onDetails(project, event.currentTarget)} className="rounded-md bg-indigo-600 px-3 py-2 font-medium text-white transition hover:bg-purple-700">Details</button>
        {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Live Demo</a>}
        {project.repoUrl && <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Source Code</a>}
      </div>
    </article>
  );
}
