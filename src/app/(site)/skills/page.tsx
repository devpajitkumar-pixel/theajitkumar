import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { Skills } from "@/components/Skills";
import { buildPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

const title = "Skills | Ajit Kumar";
const description = "Engineering capabilities across the full stack.";

export const metadata: Metadata = buildPageMetadata({
  path: "/skills",
  title,
  description,
});

export default function SkillsPage() {
  return (
    <main>
      <PageJsonLd
        path="/skills"
        name={title}
        description={description}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Skills", path: "/skills" },
        ]}
      />
      <Skills />
    </main>
  );
}
