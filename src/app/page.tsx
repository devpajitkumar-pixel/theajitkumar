import { About } from "@/components/About";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Process } from "@/components/Process";
import { Projects } from "@/components/Projects";
import { Results } from "@/components/Results";
import { Services } from "@/components/Services";
import { Skills } from "@/components/Skills";
import { WhyWorkWithMe } from "@/components/WhyWorkWithMe";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Results />
        <Skills />
        <Projects />
        <Achievements />
        <Services />
        <Process />
        <WhyWorkWithMe />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
