import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { Achievements } from "@/components/Achievements";
import { buildPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

const title = "Achievements | Ajit Kumar";
const description = "Proof of impact and ownership.";

export const metadata: Metadata = buildPageMetadata({
  path: "/achievements",
  title,
  description,
});

export default function AchievementsPage() {
  return (
    <main>
      <PageJsonLd
        path="/achievements"
        name={title}
        description={description}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Achievements", path: "/achievements" },
        ]}
      />
      <Achievements />
    </main>
  );
}
