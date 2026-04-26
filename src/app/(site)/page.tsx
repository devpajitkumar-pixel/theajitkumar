import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { About } from "@/components/About";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { Projects } from "@/components/Projects";
import { Results } from "@/components/Results";
import { Services } from "@/components/Services";
import { Skills } from "@/components/Skills";
import { WhyWorkWithMe } from "@/components/WhyWorkWithMe";
import { buildPageMetadata, DEFAULT_DESCRIPTION } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata({
  path: "/",
  title: "Ajit Kumar | Full Stack Developer",
  description: DEFAULT_DESCRIPTION,
});

export default function HomePage() {
  return (
    <main>
      <PageJsonLd
        path="/"
        name="Ajit Kumar | Full Stack Developer"
        description={DEFAULT_DESCRIPTION}
        breadcrumbs={[{ name: "Home", path: "/" }]}
      />
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
  );
}
