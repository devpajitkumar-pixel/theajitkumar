import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { About } from "@/components/About";
import { buildPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

const title = "About | Ajit Kumar";
const description = "Building software that solves business problems.";

export const metadata: Metadata = buildPageMetadata({
  path: "/about",
  title,
  description,
});

export default function AboutPage() {
  return (
    <main>
      <PageJsonLd
        path="/about"
        name={title}
        description={description}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
      />
      <About />
    </main>
  );
}
