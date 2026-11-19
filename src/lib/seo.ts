import { site } from "@/site";

type SeoInput = {
  title: string;
  description: string;
  path: string;
  /** Image path ("/images/x.webp") or absolute URL. Only emitted when absolute. */
  image?: string | undefined;
  type?: "website" | "product" | "article";
};

/** Absolute URL when site.url is set; otherwise the relative path. */
export function absoluteUrl(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  return site.url ? `${site.url}${path}` : path;
}

export function pageTitle(title: string): string {
  return title === site.brand ? title : `${title} | ${site.brand}`;
}

/** Builds the meta + canonical link for a route's head(). */
export function seo({ title, description, path, image, type = "website" }: SeoInput) {
  const fullTitle = pageTitle(title);
  const meta: Record<string, string>[] = [
    { title: fullTitle },
    { name: "description", content: description },
    { property: "og:title", content: fullTitle },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
    { property: "og:url", content: absoluteUrl(path) },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: fullTitle },
    { name: "twitter:description", content: description },
  ];
  if (image) {
    const img = absoluteUrl(image);
    if (/^https?:\/\//.test(img)) {
      meta.push({ property: "og:image", content: img }, { name: "twitter:image", content: img });
    }
  }
  return { meta, links: [{ rel: "canonical", href: absoluteUrl(path) }] };
}
