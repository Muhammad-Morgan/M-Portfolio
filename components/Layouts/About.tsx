import { Mail, User2Icon } from "lucide-react";
import Image from "next/image";
import aboutImg from "@/public/assets/about.svg";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
const About = () => {
  return (
    <section id="about-me" className="bg-[#000011] py-20">
      <h1 className="text-3xl font-semibold text-neutral-400 flex mx-auto justify-center gap-3 tracking-wider mb-10">
        Code and Coffee
        <User2Icon className="size-10 text-white" />
      </h1>
      <div className="align-element grid md:grid-cols-2 items-center gap-4 mb-8">
        <Image src={aboutImg} alt="about" className="w-full h-64" />
        <article>
          <p className="text-white/80 mt-8 ps-4 md:ps-0 leading-loose">
            <span className="block mb-3">Hi ! My name is Muhammad Morgan.</span>
            <span className="block">
              I build modern, responsive web applications using Next JS,
              TypeScript and Tailwind CSS, by writing clean code, optimizing the
              application performence and ensure scalability.
            </span>
          </p>
        </article>
      </div>
      <div
        id="contact"
        className="max-w-3xl mx-auto p-5 grid items-center justify-center sm:grid-cols-2 sm:gap-x-3"
      >
        <p className="text-neutral-400">
          <b className="mr-2 animate-in">
            Ready to build the website that expresses you and your business ?
          </b>
          Send me an email
        </p>
        <ul className="mt-4 h-full">
          <li className="flex gap-x-3 mb-2">
            <Mail className="size-6 text-primary" />
            <Link
              href="https://mailto:morganmuhammad158@gmail.com"
              className="underline text-neutral-400"
            >
              morganmuhammad158@gmail.com
            </Link>
          </li>
          <li className="flex gap-x-3">
            <FaWhatsapp className="size-6 text-primary" />
            <Link
              href="https://api.whatsapp.com/send?phone=201289737637"
              className="underline text-neutral-400"
            >
              +201289737637
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default About;
