"use client";
import HeroImg from "@/public/assets/hero.svg";
import Image from "next/image";
import { Button } from "../Atoms/button";
import Link from "next/link";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { ArrowRight, ChevronDown } from "lucide-react";
const Hero = () => {
  return (
    <section id="overview" className="relative overflow-hidden mt-18.5 section">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.78),var(--neutral-100)_45%,rgba(0,60,97,0.35)_115%)] opacity-80" />
      <div className="grid items-center md:grid-cols-2 relative z-10">
        <div className="lg:mx-auto flex flex-col justify-center">
          <h1 className="text-shadow-md text-3xl lg:text-4xl font-bold text-primary tracking-wide mb-3">
            Web Developer
          </h1>
          <ul className="mb-5 text-sm font-semibold text-[#474747] space-y-1 list-disc pl-5">
            <li>Web application optimization and scalability</li>
            <li>Responsive modern designs across devices and screen sizes</li>
            <li>
              Accessible, user-friendly interfaces with attention to detail
            </li>
          </ul>
          <div className="mt-6">
            <Button variant="ghost" asChild className="hover-style">
              <Link href="#projects">
                View Projects <ArrowRight />
              </Link>
            </Button>
          </div>
          <div className="grid mt-4.5">
            <div className="mb-7">
              <h4 className="mb-1 font-normal text-neutral-600 tracking-wide max-w-107">
                Follow me for more work and background on GitHub and LinkedIn
              </h4>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" asChild>
                <Link
                  target="blank"
                  href="https://www.linkedin.com/in/muhammad-morgan-858799250/"
                  className="hover:underline text-primary duration-300"
                >
                  <FaLinkedin className="size-6 text-primary" />
                  <span className="text-primary text-sm">LinkedIn</span>
                </Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link
                  className="hover:underline text-primary duration-300"
                  target="blank"
                  href="https://github.com/Muhammad-Morgan"
                >
                  <FaGithubSquare className="size-6 text-primary" />
                  <span className="text-primary text-sm">Github</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <Image
          className="hidden md:block w-70 md:ml-auto lg:mx-auto lg:w-80"
          src={HeroImg}
          alt="hero-im"
        />
      </div>
      <div className="absolute bottom-13 lg:bottom-16 right-1 md:right-0 md:left-1/2 -translate-x-1/2 flex flex-col items-center text-neutral-400">
        <Button
          onClick={() => {
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: "smooth",
            });
          }}
          variant="ghost"
          className="grid gap-y-0 hover:text-neutral-400 hover:bg-transparent cursor-pointer"
        >
          <ChevronDown className="size-5 md:size-8 animate-bounce" />
          <span className="text-sm md:text-lg hover-style">Scroll</span>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
