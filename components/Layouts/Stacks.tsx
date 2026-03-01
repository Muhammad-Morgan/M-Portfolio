import { awsStacks } from "@/lib/projectsUtils";
import { Cloud } from "lucide-react";
import Link from "next/link";
import { FaGithubSquare } from "react-icons/fa";

const Stacks = () => {
  return (
    <section id="stacks" className="section">
      <div className="section-inner space-y-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-kicker">AWS</p>
            <h2 className="font-display flex items-center gap-3 text-3xl sm:text-4xl">
              Stacks <Cloud className="size-6 text-accent" />
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            Production-ready AWS blueprints focused on product and user
            workflows, built for clarity, security, and scale.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {awsStacks.map((stack, index) => (
            <StackCard key={stack.title} stack={stack} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

type Stack = {
  title: string;
  desc: string;
  href: string;
};

type StackCardProps = {
  stack: Stack;
  index: number;
};

const StackCard = ({ stack, index }: StackCardProps) => {
  return (
    <article
      className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-[0_18px_35px_var(--shadow-soft)] reveal transition-colors hover:border-accent"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div className="flex items-center justify-between">
        <span className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
          Stack 0{index + 1}
        </span>
        <FaGithubSquare className="size-5 text-muted-foreground" />
      </div>
      <h3 className="mt-4 font-display text-xl text-foreground">
        {stack.title}
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">{stack.desc}</p>
      <div className="mt-5">
        <Link
          href={stack.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm text-foreground/80 transition hover:text-accent"
        >
          View repo
        </Link>
      </div>
    </article>
  );
};

export default Stacks;
