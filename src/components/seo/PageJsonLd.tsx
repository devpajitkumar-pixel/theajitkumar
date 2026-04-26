import { buildBreadcrumbJsonLd, buildWebPageJsonLd } from "@/lib/json-ld";
import { JsonLd } from "./JsonLd";

type Crumb = { name: string; path: string };

type PageJsonLdProps = {
  path: string;
  name: string;
  description: string;
  breadcrumbs: Crumb[];
};

export function PageJsonLd({ path, name, description, breadcrumbs }: PageJsonLdProps) {
  const safeId = path === "/" ? "home" : path.replace(/^\//, "").replace(/\//g, "-") || "page";
  return (
    <>
      <JsonLd id={`ld-webpage-${safeId}`} data={buildWebPageJsonLd(path, name, description)} />
      <JsonLd id={`ld-breadcrumb-${safeId}`} data={buildBreadcrumbJsonLd(breadcrumbs)} />
    </>
  );
}
