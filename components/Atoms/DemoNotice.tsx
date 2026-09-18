"use client";

import { ArrowDownRight, PlayCircle, X } from "lucide-react";
import { useEffect, useState } from "react";

const DemoNotice = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsVisible(true), 700);
    return () => window.clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <aside
      className="fixed inset-x-4 bottom-4 z-50 mx-auto flex max-w-xl items-start gap-3 rounded-2xl border border-accent/30 bg-card/95 p-4 shadow-[0_18px_45px_var(--shadow-strong)] backdrop-blur-md reveal sm:inset-x-auto sm:right-6 sm:ml-6"
      role="status"
      aria-label="New video demos"
    >
      <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
        <PlayCircle className="size-5" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="font-display text-sm text-foreground">
          New demos are live
        </p>
        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
          Watch the latest Aal Matook and Quiz Flow walkthroughs.
        </p>
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium">
          <a
            href="#demo-aalmatook-store"
            className="inline-flex items-center gap-1 text-accent hover:text-foreground"
          >
            Aal Matook <ArrowDownRight className="size-3.5" />
          </a>
          <a
            href="#demo-quiz-flow"
            className="inline-flex items-center gap-1 text-accent hover:text-foreground"
          >
            Quiz Flow <ArrowDownRight className="size-3.5" />
          </a>
        </div>
      </div>
      <button
        type="button"
        onClick={() => setIsVisible(false)}
        className="rounded-full p-1 text-muted-foreground transition hover:bg-muted hover:text-foreground"
        aria-label="Dismiss new demos notification"
      >
        <X className="size-4" />
      </button>
    </aside>
  );
};

export default DemoNotice;
