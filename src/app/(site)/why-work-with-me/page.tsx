import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { WhyWorkWithMe } from "@/components/WhyWorkWithMe";
import { buildPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

const title = "Why Work With Me | Ajit Kumar";
const description = "A reliable partner for complete software delivery.";

export const metadata: Metadata = buildPageMetadata({
  path: "/why-work-with-me",
  title,
  description,
});

export default function WhyWorkWithMePage() {
  return (
    <main>
      <PageJsonLd
        path="/why-work-with-me"
        name={title}
        description={description}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Why work with me", path: "/why-work-with-me" },
        ]}
      />
      <WhyWorkWithMe />
    </main>
  );
}
