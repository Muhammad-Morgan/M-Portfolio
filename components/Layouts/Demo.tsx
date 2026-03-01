// app/(home)/Demo.tsx  (or components/sections/Demo.tsx)
import { demos } from "@/lib/demos";
import { cn } from "@/lib/utils";
import { ArrowDownRight, ArrowUpRight, PlayCircle } from "lucide-react";

export default function Demo() {
  return (
    <section id="demos" className="w-full py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4">
        {/* Header */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm text-muted-foreground">
              Proof over screenshots
            </p>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Video demos
            </h2>
          </div>

          <a
            href="#projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            Back to Projects <ArrowDownRight className="h-4 w-4" />
          </a>
        </div>

        {/* Grid */}
        <div className="mt-8 grid items-start gap-6 md:grid-cols-2">
          {demos.map((d) => (
            <article
              key={d.id}
              id={`demo-${d.id}`}
              className={cn(
                "group h-fit overflow-hidden rounded-2xl border-2 bg-card border-border/70 shadow-sm",
                `${d.id === "kanban-board" ? "border-accent shadow-2xl" : ""}`,
              )}
            >
              {/* Video */}
              <div className="relative aspect-video w-full bg-muted">
                {d.embedUrl ? (
                  <iframe
                    className="h-full w-full"
                    src={d.embedUrl}
                    title={`${d.title} demo`}
                    allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                ) : (
                  <video
                    className="h-full w-full object-cover"
                    src={d.src}
                    poster={d.poster}
                    controls
                    preload="metadata"
                    playsInline
                  />
                )}
                {/* subtle overlay label */}
                <div className="pointer-events-none absolute left-3 top-3 inline-flex items-center gap-2 rounded-full border bg-background/70 px-3 py-1 text-xs text-foreground backdrop-blur">
                  <PlayCircle className="h-4 w-4" />
                  Demo
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold leading-tight">
                      {d.title}
                    </h3>
                    {d.subtitle ? (
                      <p className="mt-1 text-sm text-muted-foreground">
                        {d.subtitle}
                      </p>
                    ) : null}
                  </div>

                  {d.liveUrl ? (
                    <a
                      href={d.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium hover:bg-muted"
                      aria-label={`Open live demo for ${d.title}`}
                    >
                      Live <ArrowUpRight className="h-4 w-4" />
                    </a>
                  ) : null}
                </div>

                {/* Tags */}
                {d.tags?.length ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {d.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border bg-muted/40 px-3 py-1 text-xs text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                ) : null}

                {/* Links row */}
                {(d.repoUrl || d.caseStudyUrl) && (
                  <div className="mt-5 flex flex-wrap gap-3">
                    {d.repoUrl ? (
                      <a
                        href={d.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-muted-foreground hover:text-foreground"
                      >
                        Repo <ArrowUpRight className="inline h-4 w-4" />
                      </a>
                    ) : null}

                    {d.caseStudyUrl ? (
                      <a
                        href={d.caseStudyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-muted-foreground hover:text-foreground"
                      >
                        Case study <ArrowUpRight className="inline h-4 w-4" />
                      </a>
                    ) : null}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
