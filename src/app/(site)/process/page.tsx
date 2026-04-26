import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { Process } from "@/components/Process";
import { buildPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

const title = "Process | Ajit Kumar";
const description = "How I build and deliver systems.";

export const metadata: Metadata = buildPageMetadata({
  path: "/process",
  title,
  description,
});

export default function ProcessPage() {
  return (
    <main>
      <PageJsonLd
        path="/process"
        name={title}
        description={description}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Process", path: "/process" },
        ]}
      />
      <Process />
    </main>
  );
}
