import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { Results } from "@/components/Results";
import { buildPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

const title = "Results | Ajit Kumar";
const description = "Engineering outcomes that matter to business teams.";

export const metadata: Metadata = buildPageMetadata({
  path: "/results",
  title,
  description,
});

export default function ResultsPage() {
  return (
    <main>
      <PageJsonLd
        path="/results"
        name={title}
        description={description}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Results", path: "/results" },
        ]}
      />
      <Results />
    </main>
  );
}
