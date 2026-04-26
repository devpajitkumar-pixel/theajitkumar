import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { Projects } from "@/components/Projects";
import { buildPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

const title = "Projects | Ajit Kumar";
const description = "Systems built for real operational impact.";

export const metadata: Metadata = buildPageMetadata({
  path: "/projects",
  title,
  description,
});

export default function ProjectsPage() {
  return (
    <main>
      <PageJsonLd
        path="/projects"
        name={title}
        description={description}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
        ]}
      />
      <Projects />
    </main>
  );
}
