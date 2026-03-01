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
    id: "kanban-board",
    title: "Kanban Board",
    subtitle: "Edge runtime auth with NextAuth, MongoDB + Mongoose",
    embedUrl:
      "https://player.cloudinary.com/embed/?cloud_name=morgan-cloud&public_id=kanban_y0s3ke",
    tags: ["Next.js", "NextAuth", "Edge Runtime", "MongoDB", "Mongoose"],
    liveUrl: "https://kanban-board-complete.vercel.app/",
    repoUrl: "https://github.com/Muhammad-Morgan/kanban-board-complete",
    poster:
      "https://res.cloudinary.com/morgan-cloud/image/upload/v1772379523/kanban-pre_an9wwo.png",
  },
  {
    id: "goal-tracker",
    title: "Goal Tracker",
    subtitle: "Goals, entries, progress, password reset",
    src: "/videos/goal-tracker.mp4",
    tags: ["Next.js", "Auth", "PostgreSQL", "UX"],
    liveUrl: "https://goaltracker-m.netlify.app/",
  },
];
