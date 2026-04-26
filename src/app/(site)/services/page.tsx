import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { Services } from "@/components/Services";
import { buildPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

const title = "Services | Ajit Kumar";
const description = "Services focused on business outcomes.";

export const metadata: Metadata = buildPageMetadata({
  path: "/services",
  title,
  description,
});

export default function ServicesPage() {
  return (
    <main>
      <PageJsonLd
        path="/services"
        name={title}
        description={description}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]}
      />
      <Services />
    </main>
  );
}
