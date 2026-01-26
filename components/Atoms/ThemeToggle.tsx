"use client";

import { startTransition, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    startTransition(() => setMounted(true));
  }, []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      className="group inline-flex size-10 cursor-pointer items-center justify-center rounded-full border-2 bg-card/80 text-foreground transition duration-250 border-accent/70 hover:border-accent hover:scale-110 hover:bg-card/50"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {mounted ? (
        isDark ? (
          <Sun className="size-5 transition-transform duration-500 group-hover:rotate-180 motion-reduce:transition-none motion-reduce:transform-none" />
        ) : (
          <Moon className="size-5 transition-transform duration-500 group-hover:rotate-180 motion-reduce:transition-none motion-reduce:transform-none" />
        )
      ) : (
        <span className="size-5" />
      )}
    </button>
  );
};

export default ThemeToggle;
