import type { ProjectCategory } from "../types/portfolio";

interface ProjectTabsProps {
  categories: ProjectCategory[];
  activeCategory: ProjectCategory;
  onChange: (category: ProjectCategory) => void;
}

const labels: Record<ProjectCategory, string> = {
  featured: "Featured",
  other: "Other Projects",
  archive: "Archive",
};

export function ProjectTabs({ categories, activeCategory, onChange }: ProjectTabsProps) {
  return (
    <div className="soft-elevation mx-auto mt-8 flex w-fit max-w-full flex-wrap justify-center gap-1.5 rounded-2xl border border-white/15 bg-[#100a32]/80 p-1.5 backdrop-blur-md sm:flex-nowrap" role="tablist" aria-label="Project categories">
      {categories.map((category) => {
        const isActive = activeCategory === category;
        return <button key={category} type="button" role="tab" id={`${category}-projects-tab`} aria-selected={isActive} aria-controls={`${category}-projects-panel`} onClick={() => onChange(category)} className={`${isActive ? "bg-gradient-to-r from-violet-600 to-indigo-500 text-white shadow-md shadow-indigo-950/50" : "text-gray-300 hover:bg-white/10 hover:text-white"} rounded-xl px-4 py-2.5 text-sm font-semibold transition duration-200 sm:px-5 sm:text-base`}>
          <span className="flex items-center justify-center gap-2"><span className={`${isActive ? "bg-white" : "bg-indigo-300/70"} h-1.5 w-1.5 rounded-full`} aria-hidden="true" />{labels[category]}</span>
        </button>;
      })}
    </div>
  );
}
