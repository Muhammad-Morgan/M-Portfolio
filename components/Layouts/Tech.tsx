import { skills } from "@/lib/projectsUtils";
import { Code2 } from "lucide-react";
const Tech = () => {
  return (
    <section id="tech" className="space-bg section py-20">
      <h1 className="text-3xl font-semibold text-neutral-400 flex mx-auto justify-center gap-3 tracking-wider mb-8">
        Tech
        <Code2 className="size-10 text-white" />
      </h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((tech) => {
          return <TechCard key={tech.id} {...tech} />;
        })}
      </div>
    </section>
  );
};
type TechCardProps = {
  icon: React.ReactNode;
  title: string;
  text: string;
  id: number;
};
const TechCard = ({ id, icon, title, text }: TechCardProps) => (
  <article
    className={`flex items-end gap-x-4 lg:grid ${
      id === 1 ? "lg:col-span-3 lg:mx-auto mb-4" : ""
    }`}
  >
    <span className="text-white">{icon}</span>
    <div>
      <h4 className="mt-6 text-amber-50/85 font-bold">{title}</h4>
      <p className="mt-2 text-slate-500 lg:max-w-100">{text}</p>
    </div>
  </article>
);
export default Tech;
