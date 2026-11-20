<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

## What Lovable manages

Rules outside this block are the project's own. Change the pieces below in
Lovable, not by hand. With the [Lovable MCP](https://mcp.lovable.dev)
connected, `send_message` asks Lovable to do it; otherwise ask the user to
use the editor.

- **Database.** Do not add or edit `supabase/migrations/` or `drizzle/`.
  Ask Lovable to change the schema.
- **Generated files.** Do not edit a file whose header says it is automatically
  generated.
- **AI gateway.** Keep model calls on Lovable's gateway, and keep
  `LOVABLE_API_KEY` out of browser code.
- **Connectors.** Lovable provides native connectors. `list_connectors` shows
  which are enabled; `add_connector` only returns the dashboard link. When a
  connector is enabled, calls go through the connector gateway and need
  `LOVABLE_API_KEY`. When Lovable does not provide one, users can bring their
  own key and store it in Secrets.
- **Secrets.** Lovable manages them. Do not put secret values in the repo.
<!-- LOVABLE:END -->

## Store architecture

- All products, bundles and price helpers live in `src/products.ts`; all copy and settings live in `src/site.ts`. Pages, filters, sitemap and JSON-LD read from them, so adding a product is one object and no page edits.
- No backend or database: buy buttons link to a hosted checkout URL (`buyUrl`), so the site never handles payment data.
- Per-route SEO goes through `seo()` in `src/lib/seo.ts`; it only emits og:image when `site.url` makes the image absolute.
- `sitemap.xml` and `robots.txt` are server routes generated from `products.ts`, so new products are indexed automatically.
- Testimonials are real-only: an empty array shows the "first customers" block instead of invented social proof.

- Store product images as CDN asset pointers; keep downloadable e-book files off the storefront because checkout providers own delivery.
- Use the `supportUrl()` mailto builder for support links so all pages use the visitor’s email app without embedding blocked webmail.
- Keep Netlify deployment settings in `netlify.toml` with the Netlify Nitro preset and `dist` publish directory; this deploys both SSR pages and static assets without affecting Lovable's managed target.
- Resolve CDN pointer URLs through `assetUrl()` for product media and branding; external hosts do not serve Lovable's relative asset endpoint, while local icons remain local.
- Products without supplied prices or checkout URLs stay listed with purchasing disabled; omit their structured offers to avoid inventing sale details.
- Optional product artwork uses the shared ProductArtwork view and global palette tokens, so catalogue and detail pages agree without generating cover files.
