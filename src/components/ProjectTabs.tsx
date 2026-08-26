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
    <div className="soft-elevation mx-auto mt-8 grid w-full max-w-md grid-cols-3 gap-1 rounded-2xl border border-white/15 bg-[#100a32]/80 p-1.5 backdrop-blur-md" role="tablist" aria-label="Project categories">
      {categories.map((category) => {
        const isActive = activeCategory === category;
        return <button key={category} type="button" role="tab" id={`${category}-projects-tab`} aria-selected={isActive} aria-controls={`${category}-projects-panel`} onClick={() => onChange(category)} className={`${isActive ? "bg-gradient-to-r from-violet-600 to-indigo-500 text-white shadow-md shadow-indigo-950/50" : "text-gray-300 hover:bg-white/10 hover:text-white"} min-w-0 rounded-xl px-1.5 py-2.5 text-xs font-semibold transition duration-200 sm:px-3 sm:text-sm`}>
          <span className="flex items-center justify-center whitespace-nowrap gap-1.5"><span className={`${isActive ? "bg-white" : "bg-indigo-300/70"} hidden h-1.5 w-1.5 rounded-full sm:block`} aria-hidden="true" />{labels[category]}</span>
        </button>;
      })}
    </div>
  );
}
