import { createFileRoute } from "@tanstack/react-router";
import { products } from "@/products";
import { site } from "@/site";

const staticPaths = ["/", "/products", "/about", "/faq", "/contact", "/privacy", "/terms"];

/** Generated from src/products.ts — new products appear automatically. */
export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: ({ request }) => {
        const origin = site.url || new URL(request.url).origin;
        const paths = [...staticPaths, ...products.map((p) => `/product/${p.slug}`)];
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths
          .map((p) => `  <url><loc>${origin}${p}</loc></url>`)
          .join("\n")}\n</urlset>\n`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml; charset=utf-8", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
