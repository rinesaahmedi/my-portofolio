import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import SidebarDots from "@/components/SidebarDots";

export default function Home() {
  return (
    <main className="relative">
      <SidebarDots />
      <Hero id="hero" />
      <Projects id="projects" />
      <About id="about" />
      <Contact id="contact" />
    </main>
  );
}
