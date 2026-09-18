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
    id: "aalmatook-store",
    title: "Aal Matook",
    subtitle:
      "A multilingual online storefront connecting customers with merchants",
    src: "/videos/aal-matook.mp4",
    tags: ["Multilingual", "Next.js", "TypeScript", "MongoDB", "Cloudinary"],
    liveUrl: "https://aal-matook.vercel.app/",
  },
  {
    id: "quiz-flow",
    title: "Quiz Flow",
    subtitle: "A focused learning and assessment platform",
    src: "/videos/quiz-flow.mp4",
    tags: ["Next.js", "TypeScript", "MongoDB", "NextAuth", "React Query"],
    liveUrl: "https://quiz-flow-sandy.vercel.app/",
  },
];
