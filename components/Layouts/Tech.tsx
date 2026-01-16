import { skills } from "@/lib/projectsUtils";
import { Code2 } from "lucide-react";
import type { ReactNode } from "react";

const Tech = () => {
  return (
    <section id="tech" className="section section-light">
      <div className="section-inner grid gap-10 lg:grid-cols-[0.45fr_0.55fr]">
        <div className="space-y-6 lg:sticky lg:top-28 lg:self-start">
          <div>
            <p className="text-kicker">Toolbox</p>
            <h2 className="font-display flex items-center gap-3 text-3xl sm:text-4xl">
              Tech Stack <Code2 className="size-6 text-accent" />
            </h2>
          </div>
          <p className="text-sm text-muted-foreground">
            Tools and practices I use to build fast, resilient web apps with
            clean developer experience.
          </p>
          <div className="surface-panel p-5 transition-colors hover:border-accent">
            <p className="text-kicker">Workflow</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Design system planning</li>
              <li>Component-driven delivery</li>
              <li>Performance and QA pass</li>
            </ul>
          </div>
        </div>
        <div className="surface-grid p-6 md:p-8">
          <div className="grid gap-6 sm:grid-cols-2">
            {skills.map((tech, index) => {
              return <TechCard key={tech.id} index={index} {...tech} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

type TechCardProps = {
  icon: ReactNode;
  title: string;
  text: string;
  id: number;
  index: number;
};

const TechCard = ({ id, icon, title, text, index }: TechCardProps) => (
  <article
    className="rounded-2xl border border-border/70 bg-card/70 p-6 shadow-[0_18px_35px_rgba(0,0,0,0.35)] reveal transition-colors hover:border-accent"
    style={{ animationDelay: `${index * 0.08}s` }}
  >
    <div className="flex items-center justify-between">
      <span className="flex size-12 items-center justify-center rounded-full bg-accent/10 text-accent ring-1 ring-accent/30">
        {icon}
      </span>
      <span className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
        0{id}
      </span>
    </div>
    <h3 className="mt-5 font-display text-xl text-foreground">{title}</h3>
    <p className="mt-2 text-sm text-muted-foreground">{text}</p>
  </article>
);

export default Tech;
