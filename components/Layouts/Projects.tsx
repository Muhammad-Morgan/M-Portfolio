import { Laptop } from "lucide-react";
import { projects } from "@/lib/projectsUtils";
import { TbWorldWww } from "react-icons/tb";
import { FaGithubSquare } from "react-icons/fa";
import Link from "next/link";
import type { ReactNode } from "react";

const Projects = () => {
  return (
    <section id="projects" className="section section-light">
      <div className="section-inner space-y-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-kicker">Selected</p>
            <h2 className="font-display flex items-center gap-3 text-3xl sm:text-4xl">
              Projects <Laptop className="size-6 text-accent" />
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            A snapshot of recent builds with focus on clean UX, performance, and
            scalable systems.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              featured={index === 0}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

type Project = {
  id: number;
  url: string;
  icon: ReactNode;
  github?: string;
  text: string;
  title: string;
};

type ProjectCardProps = {
  project: Project;
  featured: boolean;
  index: number;
};

const ProjectCard = ({ project, featured, index }: ProjectCardProps) => {
  const { id, url, icon, github, text, title } = project;
  const isPersonalFinance = id === 1;
  const label = featured ? "Featured" : `Project 0${id}`;
  return (
    <article
      className={`flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-[0_18px_35px_rgba(15,12,10,0.12)] reveal transition-colors hover:border-accent ${
        featured ? "md:col-span-2 lg:row-span-2" : ""
      }`}
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div className="flex items-start justify-between gap-4">
        <span
          className={`flex items-center justify-center rounded-2xl bg-accent/10 text-accent ring-1 ring-accent/30 ${
            isPersonalFinance ? "size-14" : "size-12"
          }`}
        >
          {icon}
        </span>
        <span className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
          {label}
        </span>
      </div>
      <div className={`mt-5 ${featured ? "space-y-4" : "space-y-3"}`}>
        <h3
          className={`font-display text-foreground ${
            featured ? "text-2xl sm:text-3xl" : "text-lg"
          }`}
        >
          {title}
        </h3>
        <p
          className={`${
            featured ? "text-base" : "text-sm"
          } text-muted-foreground`}
        >
          {text}
        </p>
      </div>
      <div
        className={`mt-6 flex flex-wrap items-center gap-4 ${
          isPersonalFinance ? "text-base" : "text-sm"
        }`}
      >
        <Link
          href={url}
          className={`inline-flex items-center gap-2 text-foreground/80 transition hover:text-accent ${
            isPersonalFinance
              ? "rounded-full border border-border/70 px-3 py-2"
              : ""
          }`}
        >
          <TbWorldWww className={isPersonalFinance ? "size-6" : "size-5"} />
          Live
        </Link>
        {github ? (
          <Link
            href={github}
            className={`inline-flex items-center gap-2 text-foreground/80 transition hover:text-accent ${
              isPersonalFinance
                ? "rounded-full border border-border/70 px-3 py-2"
                : ""
            }`}
          >
            <FaGithubSquare
              className={isPersonalFinance ? "size-6" : "size-5"}
            />
            Code
          </Link>
        ) : null}
      </div>
    </article>
  );
};

export default Projects;
