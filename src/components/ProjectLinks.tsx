import type { Project } from "../types/portfolio";

export function ProjectLinks({ project }: { project: Project }) {
  if (!project.liveUrl && !project.repoUrl) return null;

  return (
    <div className="mt-8 flex flex-wrap gap-3">
      {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="rounded-md bg-indigo-600 px-4 py-2 font-medium text-white transition hover:bg-purple-700">Live Demo</a>}
      {project.repoUrl && <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="rounded-md border border-indigo-400 px-4 py-2 font-medium text-white transition hover:bg-white/10">Source Code</a>}
    </div>
  );
}
