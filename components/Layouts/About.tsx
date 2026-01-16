import { Mail, User2Icon } from "lucide-react";
import Image from "next/image";
import aboutImg from "@/public/assets/about.svg";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const About = () => {
  return (
    <section id="about-me" className="section section-light">
      <div className="section-inner grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="surface-panel overflow-hidden p-6 transition-shadow hover:shadow-[0_22px_45px_rgba(15,12,10,0.18)]">
          <Image
            src={aboutImg}
            alt="About illustration"
            className="h-auto w-full"
          />
        </div>
        <div className="space-y-6">
          <div>
            <p className="text-kicker">About</p>
            <h2 className="font-display flex items-center gap-3 text-3xl sm:text-4xl">
              Code and Coffee <User2Icon className="size-6 text-accent" />
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Hi, my name is Muhammad Morgan. I am a software engineer building
            Next.js and MERN applications with clean architecture, performance
            optimization, and scalable delivery.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Clean component architecture",
              "Motion and interaction design",
              "Pixel-precise responsive layouts",
              "Delivery with performance in mind",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-border/70 bg-card/60 p-4 text-sm text-muted-foreground transition-colors hover:border-accent"
              >
                {item}
              </div>
            ))}
          </div>
          <div id="contact" className="surface-panel space-y-4 p-6">
            <p className="text-sm text-muted-foreground">
              Ready to build the website that expresses you and your business?
              Send me an email or reach out on WhatsApp.
            </p>
            <ul className="space-y-3 text-sm rounded-2xl border border-border/70 p-4 transition-colors hover:border-accent">
              <li className="flex items-center gap-3 text-foreground/80">
                <Mail className="size-5 text-accent" />
                <Link
                  href="mailto:morganmuhammad158@gmail.com"
                  className="underline decoration-accent/60 underline-offset-4 hover:text-accent"
                >
                  morganmuhammad158@gmail.com
                </Link>
              </li>
              <li className="flex items-center gap-3 text-foreground/80">
                <FaWhatsapp className="size-5 text-accent" />
                <Link
                  href="https://api.whatsapp.com/send?phone=201289737637"
                  className="underline decoration-accent/60 underline-offset-4 hover:text-accent"
                >
                  +201289737637
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
