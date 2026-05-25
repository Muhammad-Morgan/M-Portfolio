// lib/demos.ts
export type DemoItem = {
  id: string;
  title: string;
  subtitle?: string;
  src?: string; // local video path
  embedUrl?: string; // optional external embed url
  poster?: string; // optional poster image path
  tags?: string[];
  liveUrl?: string;
  repoUrl?: string;
  caseStudyUrl?: string;
};

export const demos: DemoItem[] = [
  {
    id: "goal-tracker",
    title: "Goal Tracker",
    subtitle: "Goals, entries, progress, password reset",
    src: "/videos/goal-tracker.mp4",
    tags: ["Next.js", "Auth", "PostgreSQL", "UX"],
    liveUrl: "https://goaltracker-m.netlify.app/",
  },
  {
    id: "finance-dashboard",
    title: "Finance Dashboard",
    subtitle: "Income, expenses, budgets, and category insights",
    src: "/videos/finance-dashboard.mp4",
    tags: ["Next.js", "Auth", "PostgreSQL", "UX"],
    liveUrl: "https://personal-finance-dashboard-nine-rho.vercel.app/",
  },
];
