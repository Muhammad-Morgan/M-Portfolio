import About from "@/components/Layouts/About";
import Demo from "@/components/Layouts/Demo";
import Footer from "@/components/Layouts/Footer";
import Hero from "@/components/Layouts/Hero";
import Projects from "@/components/Layouts/Projects";
import Tech from "@/components/Layouts/Tech";
export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <Tech />
      <Demo />
      <Projects />
      <About />
      <Footer />
    </main>
  );
}
