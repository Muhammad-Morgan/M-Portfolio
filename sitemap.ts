import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://m-morgan.netlify.app";
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://www.linkedin.com/in/muhammad-morgan-858799250/",
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: "https://github.com/Muhammad-Morgan",
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: "https://github.com/Muhammad-Morgan/aws-product-management",
      lastModified: new Date(),
      priority: 0.3,
    },
    {
      url: "https://github.com/Muhammad-Morgan/aws-user-managment",
      lastModified: new Date(),
      priority: 0.3,
    },
    {
      url: "https://github.com/Muhammad-Morgan/aws-first-sqs",
      lastModified: new Date(),
      priority: 0.3,
    },
    {
      url: "https://github.com/Muhammad-Morgan/E_Commerce_API",
      lastModified: new Date(),
      priority: 0.3,
    },
    {
      url: "https://github.com/Muhammad-Morgan/JOBS_API",
      lastModified: new Date(),
      priority: 0.3,
    },
    {
      url: "https://kanban-board-complete.vercel.app/",
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: "https://github.com/Muhammad-Morgan/kanban-board-complete",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://goaltracker-m.netlify.app/",
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: "https://personal-finance-dashboard-nine-rho.vercel.app/",
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: "https://next-store-roan-kappa.vercel.app/",
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: "https://github.com/Muhammad-Morgan/Personal-Finance-Dashboard",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://github.com/Muhammad-Morgan/Next-Store",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://jobify-tracker-brown.vercel.app/",
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: "https://github.com/Muhammad-Morgan/Jobify",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://github-users-eomn.vercel.app/",
      lastModified: new Date(),
      priority: 0.6,
    },
    {
      url: "https://github.com/Muhammad-Morgan/Github-Users",
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: "https://comply-task.vercel.app/",
      lastModified: new Date(),
      priority: 0.6,
    },
  ];
}
