import { Mail, User2Icon } from "lucide-react";
import Image from "next/image";
import aboutImg from "@/public/assets/about.svg";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const About = () => {
  return (
    <section id="about-me" className="section section-light">
      <div className="section-inner grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="surface-panel overflow-hidden p-6 transition-shadow hover:shadow-[0_22px_45px_var(--shadow-medium)] flex flex-col justify-between">
          <Image
            src={aboutImg}
            alt="About illustration"
            className="h-auto w-full"
          />
          <div className="rounded-2xl border border-border/70 hover:border-accent duration-150 bg-card/70 p-4">
            <p className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
              Focus Areas
            </p>
            <ul className="mt-3 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center justify-between gap-4">
                <span>UI systems</span>
                <span className="text-foreground/80">Design-ready</span>
              </li>
              <li className="flex items-center justify-between gap-4">
                <span>Backend APIs</span>
                <span className="text-foreground/80">
                  Scalable & secure
                </span>
              </li>
              <li className="flex items-center justify-between gap-4">
                <span>Delivery</span>
                <span className="text-foreground/80">Performance-first</span>
              </li>
              <li className="flex items-center justify-between gap-4">
                <span>Architecture</span>
                <span className="text-foreground/80">
                  MVC + SOLID
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <p className="text-kicker">About</p>
            <h2 className="font-display flex items-center gap-3 text-3xl sm:text-4xl">
              Code and Coffee <User2Icon className="size-6 text-accent" />
            </h2>
          </div>
          <p className="border-l-2 border-accent/70 pl-4 text-sm leading-relaxed text-muted-foreground">
            I specialize in architecting scalable RESTful APIs with Node.js and
            Express, and delivering full-stack apps using React, Next.js, and
            TypeScript. Since 2023, I've freelanced on production projects,
            structuring APIs with MVC (controllers, services, middleware) and
            designing modular systems grounded in SOLID principles and clean
            architecture.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Clean component architecture",
              "Motion and interaction design",
              "Pixel-precise responsive layouts",
              "Delivery with performance in mind",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-border/70 bg-card/60 p-4 text-sm text-muted-foreground transition-colors hover:border-accent"
              >
                {item}
              </div>
            ))}
          </div>
          <div id="contact" className="surface-panel space-y-4 p-6">
            <p className="text-sm text-muted-foreground">
              Open to freelance work and collaborations on API-first or
              full-stack products. If you need maintainable architecture,
              production-ready delivery, or scalable backend systems, send me
              an email or reach out on WhatsApp.
            </p>
            <ul className="space-y-3 text-sm rounded-2xl border border-border/70 p-4 transition-colors hover:border-accent">
              <li className="flex flex-wrap items-center gap-3 text-foreground/80">
                <Mail className="size-5 text-accent" />
                <Link
                  href="mailto:morganmuhammad158@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="break-all underline decoration-accent/60 underline-offset-4 hover:text-accent"
                >
                  morganmuhammad158@gmail.com
                </Link>
              </li>
              <li className="flex flex-wrap items-center gap-3 text-foreground/80">
                <FaWhatsapp className="size-5 text-accent" />
                <Link
                  href="https://api.whatsapp.com/send?phone=201289737637"
                  target="_blank"
                  rel="noreferrer"
                  className="break-words underline decoration-accent/60 underline-offset-4 hover:text-accent"
                >
                  +201289737637
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
