import Link from "next/link";
import { links } from "@/lib/projectsUtils";

const Footer = () => {
  return (
    <section className="border-t border-border/70">
      <div className="section-inner flex flex-col gap-4 px-[clamp(1.25rem,6vw,6rem)] py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <small>All rights reserved - © 2025</small>
          <span className="text-[10px] uppercase tracking-[0.3em]">
            Muhammad Morgan
          </span>
        </div>
        <nav className="flex flex-wrap gap-x-4 gap-y-2 text-[10px] uppercase tracking-[0.3em]">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className="text-muted-foreground transition hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
};

export default Footer;
