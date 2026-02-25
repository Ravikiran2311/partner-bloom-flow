import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navItems = [
  { id: "overview", label: "Overview" },
  { id: "phases", label: "Phases" },
  { id: "workstreams", label: "Workstreams" },
  { id: "checklist", label: "Checklist" },
  { id: "governance", label: "Governance" },
];

const StickyNav = () => {
  const [active, setActive] = useState("overview");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
      const sections = navItems.map((n) => document.getElementById(n.id));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i];
        if (el && el.getBoundingClientRect().top < 200) {
          setActive(navItems[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-card shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center font-bold text-sm text-primary-foreground">
            N
          </div>
          <span className="font-semibold text-foreground text-sm tracking-wide">
            NIAT Operations
          </span>
        </div>
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`px-3 py-1.5 rounded-md text-sm transition-all ${
                active === item.id
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
        <a
          href="https://docs.google.com/spreadsheets/d/1FDn5p0UmTWvWa3pn9tmVDjjHOpTLxI3jqCT1fPrd_eU/edit?gid=580862037#gid=580862037"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs px-3 py-1.5 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
        >
          Progress Tracker ↗
        </a>
      </div>
    </motion.nav>
  );
};

export default StickyNav;
