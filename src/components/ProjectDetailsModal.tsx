import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import type { Project } from "../types/portfolio";
import { ProjectLinks } from "./ProjectLinks";
import { ProjectMediaGallery } from "./ProjectMediaGallery";

interface ProjectDetailsModalProps {
  project: Project;
  returnFocusTo: HTMLButtonElement | null;
  onClose: () => void;
}

function DetailList({ title, items }: { title: string; items?: string[] }) {
  if (!items?.length) return null;
  return <section className="mt-7"><h3 className="text-lg font-semibold text-white">{title}</h3><ul className="mt-3 list-disc space-y-2 pl-5 text-gray-300">{items.map((item) => <li key={item}>{item}</li>)}</ul></section>;
}

export function ProjectDetailsModal({ project, returnFocusTo, onClose }: ProjectDetailsModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    const handleEscape = (event: KeyboardEvent) => { if (event.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleEscape);
      returnFocusTo?.focus();
    };
  }, [onClose, returnFocusTo]);

  const handleDialogKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Tab") return;
    const focusable = dialogRef.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])');
    if (!focusable?.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  };

  const { details } = project;
  return createPortal(
    <div className="fixed inset-0 z-[110] flex items-start justify-center bg-black/75 p-4 pt-[max(1rem,env(safe-area-inset-top))] sm:items-center" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="project-dialog-title" onKeyDown={handleDialogKeyDown} className="flex max-h-[calc(100dvh-2rem)] w-full max-w-6xl flex-col overflow-hidden rounded-xl border border-white/20 bg-[#0b0725] shadow-2xl sm:max-h-[88vh]">
        <header className="flex shrink-0 items-start justify-between gap-5 border-b border-white/10 bg-[#0b0725] p-5 sm:p-8"><h2 id="project-dialog-title" className="min-w-0 text-2xl font-bold sm:text-3xl">{project.title}</h2><button ref={closeButtonRef} type="button" onClick={onClose} className="flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-md border border-white/25 text-xl transition hover:bg-white/10" aria-label={`Close ${project.title} details`}>×</button></header>
        <div className="min-h-0 overflow-y-auto overscroll-contain p-5 sm:p-8">
        <ProjectMediaGallery title={project.title} imageAlt={project.imageAlt ?? `${project.title} project preview`} fallbackImage={project.image} images={project.media?.images} videoUrl={project.media?.videoUrl} />
        <section className="mt-7"><h3 className="text-lg font-semibold text-white">Summary</h3><p className="mt-3 leading-relaxed text-gray-300">{project.summary}</p></section>
        {details?.description && <section className="mt-7"><h3 className="text-lg font-semibold text-white">Description</h3><p className="mt-3 leading-relaxed text-gray-300">{details.description}</p></section>}
        {project.technologies.length > 0 && <section className="mt-7"><h3 className="text-lg font-semibold text-white">Technologies</h3><ul className="mt-3 flex flex-wrap gap-2" aria-label="Technologies used">{project.technologies.map((technology) => <li key={technology} className="rounded-md border border-white/20 bg-white/10 px-3 py-1 text-sm">{technology}</li>)}</ul></section>}
        {details?.role && <section className="mt-7"><h3 className="text-lg font-semibold text-white">Role</h3><p className="mt-3 text-gray-300">{details.role}</p></section>}
        <DetailList title="Features" items={details?.features} />
        <DetailList title="Challenges" items={details?.challenges} />
        <DetailList title="What I Learned" items={details?.learning} />
        <ProjectLinks project={project} />
        </div>
      </div>
    </div>
  , document.body);
}
