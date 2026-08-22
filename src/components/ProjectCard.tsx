import type { Project } from "../types/portfolio";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col rounded-lg border border-white/20 bg-white/10 p-6 shadow-lg backdrop-blur-md">
      <img src={project.image} alt={project.imageAlt} className="mb-4 h-44 w-full rounded-md object-cover" width="1920" height="936" loading="lazy" decoding="async" />
      <h3 className="text-lg font-semibold">{project.title}</h3>
      <p className="mt-2 flex-grow text-sm text-gray-300 sm:text-base">{project.summary}</p>
      <div className="mt-4 flex items-center justify-between text-sm sm:text-base">
        {project.liveUrl ? (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Live Demo</a>
        ) : (
          <span className="text-blue-300 opacity-80">Live demo unavailable</span>
        )}
        <span className="rounded-md border border-white/20 bg-white/10 px-3 py-1 opacity-80">Details coming soon</span>
      </div>
    </article>
  );
}
