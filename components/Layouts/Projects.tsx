import { Laptop } from "lucide-react";
import { projects } from "@/lib/projectsUtils";
import { TbWorldWww } from "react-icons/tb";
import { FaGithubSquare } from "react-icons/fa";
import Link from "next/link";
import { ReactNode } from "react";
const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden space-bg space-bg-dense section text-white py-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(125deg,#050717_0%,rgba(5,7,23,0.95)_45%,rgba(6,11,31,0.85)_100%)]" />
      <div className="relative z-10 space-y-4">
        <h1 className="text-3xl font-semibold text-neutral-400 flex mx-auto justify-center gap-3 tracking-wider mb-8">
          Projects
          <Laptop className="size-10 text-white" />
        </h1>
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 py-16">
          {projects.map((project) => {
            return <ProjectCard key={project.id} {...project} />;
          })}
        </div>
      </div>
    </section>
  );
};
type ProjectCardProps = {
  id: number;
  url: string;
  icon: ReactNode;
  github?: string;
  text: string;
  title: string;
};
const ProjectCard = ({
  id,
  url,
  icon,
  github,
  text,
  title,
}: ProjectCardProps) => {
  return (
    <article
      className={`border-primary border rounded-lg hover-style w-full max-w-sm mx-auto  ${
        id === 4 ? "xl:col-span-3 lg:mx-auto mt-4" : ""
      }`}
    >
      <div className="mx-auto w-100 h-50 rounded-t-lg p-4 flex items-center bg-black/5">
        <span className="border-3 p-4 border-primary bg-primary rounded-lg mx-auto">
          {icon}
        </span>
      </div>
      <div className="capitalize p-3">
        <h2 className="text-lg tracking-wider font-semibold text-primary">
          {title}
        </h2>
        <p className="text-white text-sm my-3">{text}</p>
        <div className="flex gap-x-3">
          <Link href={url}>
            <TbWorldWww className="text-white/75 size-8 hover:text-primary duration-300" />
          </Link>
          <Link href={github ?? "#"}>
            <FaGithubSquare className="text-white/75 size-8 hover:text-primary duration-300" />
          </Link>
        </div>
      </div>
    </article>
  );
};
export default Projects;
