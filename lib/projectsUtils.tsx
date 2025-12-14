import {
  Atom,
  Braces,
  BriefcaseBusiness,
  Code2,
  FormInputIcon,
  Home,
  Laptop,
  Layers,
  Paintbrush,
  SearchIcon,
  StoreIcon,
  User,
} from "lucide-react";
export const links = [
  {
    id: 1,
    label: "overview",
    href: "#overview",
    icon: <Home />,
  },
  {
    id: 2,
    label: "tech",
    href: "#tech",
    icon: <Code2 />,
  },
  {
    id: 3,
    label: "projects",
    href: "#projects",
    icon: <Laptop />,
  },

  {
    id: 4,
    label: "about me",
    href: "#about-me",
    icon: <User />,
  },
];
export const skills = [
  {
    id: 1,
    title: "React",
    text: "Building reusable components with predictable state and clean structure.",
    icon: <Atom className="size-13 md:size-15 hover-style animate-pulse" />,
  },
  {
    id: 2,
    title: "Next.js",
    text: "App Router, Server Components, routing, and performance-focused rendering.",
    icon: <Layers className="size-13 md:size-15 hover-style animate-pulse" />,
  },
  {
    id: 3,
    title: "TypeScript",
    text: "Type-safe codebases that reduce bugs and improve maintainability.",
    icon: <Braces className="size-13 md:size-15 hover-style animate-pulse" />,
  },
  {
    id: 4,
    title: "Tailwind CSS",
    text: "Utility-first styling for consistent, responsive layouts.",
    icon: (
      <Paintbrush className="size-13 md:size-15 hover-style animate-pulse" />
    ),
  },
];
export const projects = [
  {
    id: 1,
    url: "https://next-store-roan-kappa.vercel.app/",
    icon: <StoreIcon className="size-18 animate-pulse text-white/90" />,
    github: "https://github.com/Muhammad-Morgan/Next-Store",
    text: "E-Commerce app that lets user creates an account, view products, and enjoy the the full shopping experience with other nifty features",
    title: "Next Store",
  },
  {
    id: 2,
    url: "https://jobify-tracker-brown.vercel.app/",
    icon: <BriefcaseBusiness className="size-18 animate-pulse text-white/90" />,
    github: "https://github.com/Muhammad-Morgan/Jobify",
    text: "Job tracking app with which a user can register and then post various jobs, apply to the desired ones and keep tracking their status for the last 6-months",
    title: "Jobify",
  },
  {
    id: 3,
    url: "https://github-users-eomn.vercel.app/",
    icon: <SearchIcon className="size-18 animate-pulse text-white/90" />,
    github: "https://github.com/Muhammad-Morgan/Github-Users",
    text: "Apollo Client-based app that allows user to search any Github user and gets only specific fields from the huge api response, and view their follower, following, repos number.",
    title: "Github User Search",
  },
  {
    id: 4,
    url: "https://comply-task.vercel.app/",
    icon: <FormInputIcon className="size-18 animate-pulse text-white/90" />,
    text: "Form application with multiple stages that could be used for collecting different types of inputs from users, enhanced with fetching from api endpoints",
    title: "Multi Stages Form",
  },
];
