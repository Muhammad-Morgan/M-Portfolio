import {
  Atom,
  Braces,
  BriefcaseBusiness,
  Code2,
  FormInputIcon,
  Goal,
  Home,
  Laptop,
  Layers,
  Paintbrush,
  PlayCircle,
  Route,
  SearchIcon,
  StoreIcon,
  User,
  CreditCard,
  Cloud,
  Server,
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
    label: "demo",
    href: "#demos",
    icon: <PlayCircle />,
  },
  {
    id: 4,
    label: "project",
    href: "#projects",
    icon: <Laptop />,
  },
  {
    id: 5,
    label: "api",
    href: "#backend-apis",
    icon: <Server />,
  },
  {
    id: 6,
    label: "stack",
    href: "#stacks",
    icon: <Cloud />,
  },
  {
    id: 7,
    label: "about",
    href: "#about-me",
    icon: <User />,
  },
];

export const awsStacks = [
  {
    title: "product-management",
    desc: "AWS stack for product workflows - roadmaps, releases, and insights backed by scalable services.",
    href: "https://github.com/Muhammad-Morgan/aws-product-management",
  },
  {
    title: "user-managment",
    desc: "AWS stack for user onboarding, auth, and profile data with secure, audit-friendly storage.",
    href: "https://github.com/Muhammad-Morgan/aws-user-managment",
  },
  {
    title: "first-sqs",
    desc: "AWS stack showcasing the usage of SQS. It lets different parts of the app communicate asynchronously, which helps to handle background tasks without blocking the API.",
    href: "https://github.com/Muhammad-Morgan/aws-first-sqs",
  },
];
export const backendApis = [
  {
    title: "E-commerce API",
    desc: [
      "Architected a scalable RESTful API using Node.js and Express following MVC pattern.",
      "Custom error classes, centralized error handling middleware, and request validation.",
      "Implemented JWT-based authentication and role-based access control (RBAC).",
    ],
    repo: "https://github.com/Muhammad-Morgan/E_Commerce_API",
  },
  {
    title: "JOBS_API",
    desc: [
      "Protected CRUD operations with authenticated access controls.",
      "Documented endpoints using Swagger for clear API reference and integration readiness.",
    ],
    href: "https://jobs-api-gp8l.onrender.com/",
    repo: "https://github.com/Muhammad-Morgan/JOBS_API",
  },
];
export const skills = [
  {
    id: 1,
    title: "Express",
    text: "Minimal API routing and middleware for robust web services.",
    icon: <Route className="size-7" />,
  },
  {
    id: 2,
    title: "React",
    text: "Building reusable components with predictable state and clean structure.",
    icon: <Atom className="size-7" />,
  },
  {
    id: 3,
    title: "Next.js",
    text: "App Router, Server Components, routing, and performance-focused rendering.",
    icon: <Layers className="size-7" />,
  },
  {
    id: 4,
    title: "TypeScript",
    text: "Type-safe codebases that reduce bugs and improve maintainability.",
    icon: <Braces className="size-7" />,
  },
  {
    id: 5,
    title: "Tailwind CSS",
    text: "Utility-first styling for consistent, responsive layouts.",
    icon: <Paintbrush className="size-7" />,
  },
  {
    id: 6,
    title: "AWS",
    text: "Architecting event-driven systems with serverless scale and secure-by-design boundaries.",
    icon: <Cloud className="size-7" />,
  },
];
export const projects = [
  {
    id: 1,
    url: "https://e-commerce-26-1ef54b29bc8c.herokuapp.com/",
    icon: <StoreIcon className="size-8" />,
    github: "https://github.com/Muhammad-Morgan/E_Commerce_API",
    text: "This Node.js and TypeScript E-commerce API backend features a secure, scalable architecture utilizing MongoDB to manage complex, interconnected data models and transactional workflows. It implements robust JWT authentication, role-based access control, advanced data aggregation for product ratings, and automated order processing logic. The API is designed with a focus on clean code, maintainability, and performance, following best practices for error handling, validation, and modular architecture.",
    title: "E-Commerce API",
  },
  {
    id: 2,
    url: "https://goaltracker-m.netlify.app/",
    icon: <Goal className="size-9" />,
    text: "Goal tracking app for setting targets, monitoring progress, and staying accountable. Supports recurring goals with daily, weekly, and custom frequencies. Tracks progress through date-based entries with clear status and completion logic. Built with a scalable schema and focus on UX, performance, and data consistency.",
    title: "Goal Tracker",
  },
  {
    id: 3,
    url: "https://personal-finance-dashboard-nine-rho.vercel.app/",
    icon: <CreditCard className="size-7" />,
    github: "https://github.com/Muhammad-Morgan/Personal-Finance-Dashboard",
    text: "Finance dashboard to track income, expenses, and budgets with category insights, monthly summaries, and date-based filtering. Built with Next.js and TypeScript using Prisma + PostgreSQL and fully typed APIs.",
    title: "",
  },
  {
    id: 4,
    url: "https://next-store-roan-kappa.vercel.app/",
    icon: <StoreIcon className="size-7" />,
    github: "https://github.com/Muhammad-Morgan/Next-Store",
    text: "E-Commerce app that lets user creates an account, view products, and enjoy the the full shopping experience with other nifty features",
    title: "Next Store",
  },
  {
    id: 5,
    url: "https://jobify-tracker-brown.vercel.app/",
    icon: <BriefcaseBusiness className="size-7" />,
    github: "https://github.com/Muhammad-Morgan/Jobify",
    text: "Job tracking app with which a user can register and then post various jobs, apply to the desired ones and keep tracking their status for the last 6-months",
    title: "Jobify",
  },
  {
    id: 6,
    url: "https://github-users-eomn.vercel.app/",
    icon: <SearchIcon className="size-7" />,
    github: "https://github.com/Muhammad-Morgan/Github-Users",
    text: "Apollo Client-based app that allows user to search any Github user and gets only specific fields from the huge api response, and view their follower, following, repos number.",
    title: "Github User Search",
  },
  {
    id: 7,
    url: "https://comply-task.vercel.app/",
    icon: <FormInputIcon className="size-7" />,
    text: "Form application with multiple stages that could be used for collecting different types of inputs from users, enhanced with fetching from api endpoints",
    title: "Multi Stages Form",
  },
];
