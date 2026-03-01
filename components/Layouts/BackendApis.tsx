import { backendApis } from "@/lib/projectsUtils";
import { Server } from "lucide-react";

const BackendApis = () => {
  return (
    <section id="backend-apis" className="section">
      <div className="section-inner space-y-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-kicker">Backend</p>
            <h2 className="font-display flex items-center gap-3 text-3xl sm:text-4xl">
              Backend APIs <Server className="size-6 text-accent" />
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            Production-focused APIs built with clean architecture, robust
            security, and documentation-ready delivery.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {backendApis.map((api, index) => (
            <article
              key={api.title}
              className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-[0_18px_35px_var(--shadow-soft)] reveal transition-colors hover:border-accent"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
                  API 0{index + 1}
                </span>
              </div>
              <h3 className="mt-4 font-display text-xl text-foreground">
                {api.title}
              </h3>
              <ul className="mt-3 list-disc list-inside space-y-2 text-sm text-muted-foreground">
                {api.desc.map((item) => (
                  <li key={item} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
              {(api.href || api.repo) && (
                <div className="mt-5 flex flex-wrap gap-4 text-sm">
                  {api.href ? (
                    <a
                      href={api.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-foreground/80 transition hover:text-accent"
                    >
                      Live API
                    </a>
                  ) : null}
                  {api.repo ? (
                    <a
                      href={api.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-foreground/80 transition hover:text-accent"
                    >
                      Repo
                    </a>
                  ) : null}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BackendApis;
