"use client";

import HeroImg from "@/public/assets/hero.svg";
import Image from "next/image";
import { Button } from "../Atoms/button";
import Link from "next/link";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { ArrowRight, ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="overview" className="relative section pt-28 overflow-hidden">
      <div className="hero-glow" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 hero-wash"
        aria-hidden="true"
      />
      <div className="section-inner grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-7">
          <p className="text-kicker reveal">Full Stack Engineer</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <p className="text-xs uppercase tracking-[0.25em] text-accent/80 reveal reveal-delay-1 sm:text-sm sm:tracking-[0.4em]">
              NEXT.JS
            </p>
            <p className="text-xs uppercase tracking-[0.25em] reveal reveal-delay-1 text-muted-foreground sm:text-sm sm:tracking-[0.4em]">
              NODE.JS
            </p>
            <p className="text-xs uppercase tracking-[0.25em] text-accent/80 reveal reveal-delay-1 sm:text-sm sm:tracking-[0.4em]">
              EXPRESS
            </p>
          </div>
          <div className="space-y-4">
            <h1 className="font-display text-4xl leading-tight sm:text-5xl lg:text-6xl reveal reveal-delay-1">
              <span className="font-extrabold">Muhammad</span>{" "}
              <span className="font-extrabold text-accent">Morgan</span>
            </h1>
            <p className="max-w-xl border-l-2 border-accent/70 pl-4 text-lg text-muted-foreground reveal reveal-delay-2">
              <span className="block">
                • Specialized in architecting scalable RESTful APIs using
                Node.js and Express.
              </span>
              <span className="block">
                • Experienced in production workflows including Git-based
                version control, CI/CD pipelines, and maintainable system
                architecture.
              </span>
              <span className="block">
                • Design modular systems applying SOLID principles and clean
                architecture.
              </span>
            </p>
          </div>
          <div className="flex flex-wrap gap-3 reveal reveal-delay-2">
            <Button
              asChild
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Link href="#projects">
                View Projects <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              variant="ghost"
              asChild
              className="border-border/80 text-foreground hover:border-accent"
            >
              <Link href="#contact">Contact</Link>
            </Button>
          </div>
          <div className="grid gap-3 sm:grid-cols-3 reveal reveal-delay-3">
            {[
              {
                label: "Focus",
                value: "Product-ready UI systems",
              },
              {
                label: "Strength",
                value: "Performance-first builds",
              },
              {
                label: "Approach",
                value: "Accessible UX patterns",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-border/70 bg-card/60 p-4 transition-colors hover:border-accent"
              >
                <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  {item.label}
                </p>
                <p className="mt-2 text-sm text-foreground/80">{item.value}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground reveal reveal-delay-4">
            <span className="text-[10px] uppercase tracking-[0.4em]">
              Follow
            </span>
            <div className="flex flex-wrap gap-3">
              <Link
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/muhammad-morgan-858799250/"
                className="inline-flex items-center gap-2 rounded-full border border-border/70 px-3 py-1.5 text-foreground/80 transition hover:border-accent hover:text-accent"
              >
                <FaLinkedin className="size-4" />
                <span>LinkedIn</span>
              </Link>
              <Link
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Muhammad-Morgan"
                className="inline-flex items-center gap-2 rounded-full border border-border/70 px-3 py-1.5 text-foreground/80 transition hover:border-accent hover:text-accent"
              >
                <FaGithubSquare className="size-4" />
                <span>Github</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="grid gap-6 lg:items-start">
          <div className="relative reveal reveal-delay-2">
            <div
              className="absolute -inset-8 rounded-[32px] hero-spotlight blur-2xl opacity-70"
              aria-hidden="true"
            />
            <div className="surface-panel overflow-hidden p-6">
              <Image
                className="mx-auto h-auto w-full max-w-sm float-slow"
                src={HeroImg}
                alt="Portrait illustration"
              />
            </div>
          </div>
          <div className="surface-panel p-5 reveal reveal-delay-3 transition-colors hover:border-accent hover:shadow-[0_24px_50px_var(--shadow-accent)]">
            <p className="text-kicker">Snapshot</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center justify-between gap-4">
                <span>Role</span>
                <span className="text-foreground/80">Software Engineer</span>
              </li>
              <li className="flex items-center justify-between gap-4">
                <span>Stack</span>
                <span className="text-foreground/80">
                  Next.js | Node.js | Express
                </span>
              </li>
              <li className="flex items-center justify-between gap-4">
                <span>Specialty</span>
                <span className="text-foreground/80">
                  Scalable API delivery
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground">
        <Button
          onClick={() => {
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: "smooth",
            });
          }}
          variant="ghost"
          className="flex flex-col items-center gap-1 text-[10px] uppercase tracking-[0.4em] hover:bg-transparent"
        >
          <ChevronDown className="size-5 scroll-cue" />
          <span>Scroll</span>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
