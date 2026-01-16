"use client";
import Image from "next/image";
import Logo from "@/public/assets/logo.png";
import Link from "next/link";
import LinksDropdown from "../Atoms/LinksDropdown";
import { links } from "@/lib/projectsUtils";
import { Button } from "../Atoms/button";
import { useHashUpdate } from "@/lib/customHook";

const Navbar = () => {
  const { hash, setHash } = useHashUpdate("");
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/70 shadow-[0_10px_30px_rgba(0,0,0,0.4)] supports-[backdrop-filter:blur(16px)]:bg-black/40 backdrop-blur-2xl transition-colors">
      <section className="section-inner mx-auto flex items-center justify-between px-[clamp(1.25rem,6vw,6rem)] py-4">
        <Link href="#" className="flex items-center gap-x-3">
          <Image className="w-12 md:w-15" src={Logo} alt="M-logo" />
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
                className={`capitalize py-3 text-xs uppercase tracking-[0.2em] ${
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
      </section>
    </nav>
  );
};

export default Navbar;
