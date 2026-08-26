import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Navbar } from "./components/Navbar";
import { Container } from "./components/Container";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Hero } from "./sections/Hero";
import { PortfolioShowcase } from "./sections/PortfolioShowcase";
import type { ShowcaseTab } from "./types/portfolio";

function App() {
  const [activeTab, setActiveTab] = useState<ShowcaseTab>("projects");
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      disable: () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    });
  }, []);

  useEffect(() => {
    AOS.refreshHard();
  }, [activeTab]);
  return <><a href="#main-content" className="skip-link rounded-lg bg-white px-4 py-2 font-semibold text-indigo-900 shadow-lg">Skip to main content</a><div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#040015]"><div className="absolute left-10 top-10 h-80 w-80 rounded-full bg-purple-500 opacity-30 blur-[110px]" /><div className="absolute right-20 top-20 h-72 w-72 rounded-full bg-cyan-400 opacity-30 blur-[110px]" /><div className="absolute bottom-16 left-28 h-96 w-96 rounded-full bg-pink-500 opacity-30 blur-[110px]" /><div className="absolute bottom-10 right-10 h-64 w-64 rounded-full bg-blue-500 opacity-30 blur-[110px]" /></div><Navbar onTabChange={setActiveTab} /><main id="main-content" className="relative z-10"><Hero onTabChange={setActiveTab} /><About onTabChange={setActiveTab} /><PortfolioShowcase activeTab={activeTab} onTabChange={setActiveTab} /><Contact /></main><footer className="relative z-10 mt-8 border-t border-white/10 py-4"><Container><p className="text-center text-sm leading-relaxed text-gray-400">© {new Date().getFullYear()} Shaza. All rights reserved.</p></Container></footer></>;
}

export default App;
