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
    <nav className="fixed inset-x-0 top-0 z-50 bg-white/65 supports-[backdrop-filter:blur(16px)]:bg-white/45 py-4 sm:px-16 lg:px-24 px-4 shadow-sm backdrop-blur-2xl border-b border-white/10 transition-colors">
      <section className="container-page flex items-center justify-between mx-auto">
        <Link
          href="#"
          className="flex gap-x-2 md:gap-x-3 items-end hover-style"
        >
          <Image
            className="rounded-md w-10 md:w-12.5"
            src={Logo}
            alt="M-logo"
          />
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
                className="capitalize py-4 hover-style"
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
