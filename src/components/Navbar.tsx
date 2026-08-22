import { useEffect, useRef, useState } from "react";
import { navigation } from "../data/portfolio";
import type { ShowcaseTab } from "../types/portfolio";

interface NavbarProps {
  onTabChange: (tab: ShowcaseTab) => void;
}

export function Navbar({ onTabChange }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    function handlePointerDown(event: MouseEvent) {
      if (isOpen && !headerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handlePointerDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handlePointerDown);
    };
  }, [isOpen]);

  function handleNavigation(tab?: ShowcaseTab) {
    if (tab) onTabChange(tab);
    setIsOpen(false);
  }

  return (
    <header ref={headerRef} className="fixed z-50 w-full text-white shadow backdrop-blur-3xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <a href="#home" className="text-xl font-bold tracking-wide text-indigo-400">Portfolio</a>
        <nav className="hidden space-x-6 md:flex" aria-label="Primary navigation">
          {navigation.map((item) => (
            <a key={item.label} href={item.href} onClick={() => handleNavigation(item.tab)} className="group relative transition hover:text-indigo-400">
              {item.label}
              <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-indigo-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
        <button
          ref={menuButtonRef}
          type="button"
          className="rounded-lg p-2 text-white transition hover:bg-white/10 md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsOpen((open) => !open)}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>
      <nav id="mobile-menu" className={`${isOpen ? "block" : "hidden"} border-t border-white/10 bg-[#040015]/95 px-4 py-3 md:hidden`} aria-label="Mobile navigation">
        <div className="mx-auto flex max-w-6xl flex-col gap-1">
          {navigation.map((item) => (
            <a key={item.label} href={item.href} onClick={() => handleNavigation(item.tab)} className="rounded-lg px-3 py-2 hover:bg-white/10">
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
