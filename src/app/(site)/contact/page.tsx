import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { Contact } from "@/components/Contact";
import { buildPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

const title = "Contact | Ajit Kumar";
const description = "Let’s build something that creates measurable value.";

export const metadata: Metadata = buildPageMetadata({
  path: "/contact",
  title,
  description,
});

export default function ContactPage() {
  return (
    <main>
      <PageJsonLd
        path="/contact"
        name={title}
        description={description}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />
      <Contact />
    </main>
  );
}
