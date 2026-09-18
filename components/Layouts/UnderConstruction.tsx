import { ArrowUpRight, BriefcaseBusiness, Play } from "lucide-react";
import { underConstructionProjects } from "@/lib/projectsUtils";
import Image from "next/image";
import clientWorkIllustration from "@/public/assets/undraw_working-at-home_usrj.svg";

const UnderConstruction = () => {
  return (
    <section id="client-work" className="section">
      <div className="section-inner space-y-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-kicker">Selected client work</p>
            <h2 className="font-display flex items-center gap-3 text-3xl sm:text-4xl">
              Client Engagements{" "}
              <BriefcaseBusiness className="size-6 text-accent" />
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            A commissioned product currently in delivery, alongside completed
            work shown above.
          </p>
        </div>
        <div className="grid items-stretch gap-6 md:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)]">
          <div className="space-y-6">
            {underConstructionProjects.map((project, index) => (
              <article
                key={project.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-[0_18px_35px_var(--shadow-soft)] reveal transition-colors hover:border-accent"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="relative aspect-video overflow-hidden border-b border-border bg-muted">
                  {project.videoSrc ? (
                    <video
                      className="h-full w-full object-cover"
                      src={project.videoSrc}
                      controls
                      preload="metadata"
                      playsInline
                      aria-label={`${project.title} project preview`}
                    />
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center gap-3 bg-[radial-gradient(circle_at_center,var(--surface-grid-accent),transparent_65%)] px-6 text-center">
                      <span className="flex size-12 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-accent">
                        <Play className="ml-0.5 size-5" />
                      </span>
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          Project preview
                        </p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          Video walkthrough coming soon
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="flex size-10 items-center justify-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/30">
                        {project.icon}
                      </span>
                      <h3 className="font-display text-2xl text-foreground">
                        {project.title}
                      </h3>
                    </div>
                    <span className="whitespace-nowrap pt-1 text-[10px] uppercase tracking-[0.18em] text-accent-warm">
                      In delivery
                    </span>
                  </div>
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
                    {project.text}
                  </p>
                  <div className="mt-6 flex items-center justify-between border-t border-border/70 pt-4 text-xs text-muted-foreground">
                    <span>{project.status}</span>
                    <ArrowUpRight className="size-4 text-accent-warm transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </article>
            ))}
          </div>
          <aside className="surface-panel flex flex-col justify-between overflow-hidden p-6 reveal reveal-delay-1">
            <div>
              <p className="text-kicker">Product delivery</p>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Turning a client brief into a focused product experience, from
                workflow design through implementation.
              </p>
            </div>
            <Image
              src={clientWorkIllustration}
              alt="Illustration of a professional working on a product"
              className="mx-auto mt-8 h-auto w-full max-w-lg"
              priority={false}
            />
          </aside>
        </div>
      </div>
    </section>
  );
};

export default UnderConstruction;
