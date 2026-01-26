"use client";
import Link from "next/link";
import LinksDropdown from "../Atoms/LinksDropdown";
import { links } from "@/lib/projectsUtils";
import { Button } from "../Atoms/button";
import { useHashUpdate } from "@/lib/customHook";
import navlogoLight from "@/public/assets/navlogo-lighttheme.png";
import navlogoDark from "@/public/assets/navlogo-darktheme.png";
import Image from "next/image";
import { useTheme } from "next-themes";
import { startTransition, useEffect, useState } from "react";
import ThemeToggle from "../Atoms/ThemeToggle";
const Navbar = () => {
  const { hash, setHash } = useHashUpdate("");
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [showNotice, setShowNotice] = useState(true);

  useEffect(() => {
    startTransition(() => setMounted(true));
  }, []);

  return (
    <nav className="relative z-10 border-b border-border/70 bg-card/90 shadow-[0_10px_30px_var(--shadow-soft)] backdrop-blur-xl supports-[backdrop-filter:blur(16px)]:bg-card/70 transition-colors">
      <section className="section-inner mx-auto flex items-center justify-between px-[clamp(1.25rem,6vw,6rem)] py-4">
        <Link href="#" className="items-center gap-x-3 hidden lg:flex">
          {mounted && resolvedTheme === "dark" ? (
            <Image
              src={navlogoDark}
              alt="MM logo"
              width={57}
              height={57}
              className="object-cover opacity-85 transition duration-150 hover:scale-105 hover:opacity-100"
              // priority
              unoptimized
            />
          ) : (
            <Image
              src={navlogoLight}
              alt="MM logo"
              width={60}
              height={60}
              className="object-cover opacity-85 transition duration-150 hover:scale-105 hover:opacity-100"
              // priority
              unoptimized
            />
          )}

        </Link>
        <LinksDropdown hash={hash} setHash={setHash} />
        <ul className="hidden lg:flex gap-x-3">
          {links.map((link) => {
            const { id, label, href } = link;
            const isActive = hash === href.slice(1);
            return (
              <Button
                variant={isActive ? "link" : "ghost"}
                key={id}
                className={` py-3 text-xs uppercase tracking-[0.2em] ${
                  isActive ? "" : "text-muted-foreground"
                }`}
                asChild
                onClick={() => setHash(href.slice(1))}
              >
                <Link href={href}>{label}</Link>
              </Button>
            );
          })}
        </ul>
        <ThemeToggle />
      </section>
      <div
        className={`overflow-hidden border-t border-border/60 bg-accent/10 transition-all duration-150 ease-linear ${
          showNotice
            ? "max-h-16 translate-y-0 opacity-100"
            : "max-h-0 -translate-y-2 opacity-0"
        }`}
      >
        <div className="section-inner mx-auto flex flex-wrap items-center gap-x-2 gap-y-1 px-[clamp(1.25rem,6vw,6rem)] py-2 text-[11px] uppercase tracking-[0.32em] text-foreground/80">
          <span className="rounded-full border border-accent/30 bg-card/70 px-2 py-0.5 text-[10px] text-accent">
            New
          </span>
          <span>Video demos are live.</span>
          <Link
            href="#demos"
            className="text-accent underline decoration-accent/60 underline-offset-4"
            onClick={() => setShowNotice(false)}
          >
            View demos
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
