"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "tech", label: "Tech" },
  { id: "demos", label: "Demos" },
  { id: "projects", label: "Projects" },
  { id: "about-me", label: "About" },
  { id: "contact", label: "Contact" },
];

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const root = document.documentElement;
      const scrollable = root.scrollHeight - window.innerHeight;
      const next = scrollable > 0 ? window.scrollY / scrollable : 0;
      setProgress(Math.min(1, Math.max(0, next)));

      const threshold = window.innerHeight * 0.25;
      let nextIndex = 0;
      SECTIONS.forEach((section, index) => {
        const el = document.getElementById(section.id);
        if (!el) return;
        const top = el.getBoundingClientRect().top;
        if (top <= threshold) {
          nextIndex = index;
        }
      });
      setActiveIndex(nextIndex);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  const percent = Math.min(100, Math.max(0, progress * 100));

  return (
    <nav
      className="fixed right-4 top-1/2 z-50 hidden -translate-y-1/2 md:flex"
      aria-label="Page sections"
    >
      <div className="relative h-56 w-1.5 rounded-full bg-border/80">
        <div
          className="absolute left-0 top-0 w-full rounded-full bg-accent"
          style={{ height: `${percent}%` }}
        />
        {SECTIONS.map((section, index) => {
          const stepPercent =
            SECTIONS.length > 1 ? (index / (SECTIONS.length - 1)) * 100 : 0;
          const isActive = index <= activeIndex;
          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`group absolute left-1/2 z-20 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full border transition ${
                isActive
                  ? "border-accent bg-accent ring-4 ring-accent/20"
                  : "border-border bg-card"
              }`}
              style={{ top: `${stepPercent}%` }}
              aria-label={section.label}
              aria-current={index === activeIndex ? "true" : undefined}
              title={section.label}
            >
              <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 translate-x-1 whitespace-nowrap rounded-xl border border-border bg-card px-3 py-2 text-xs text-foreground opacity-0 shadow-[0_10px_30px_var(--shadow-soft)] transition group-hover:translate-x-0 group-hover:opacity-100">
                {section.label}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default ScrollProgress;
