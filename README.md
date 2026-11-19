# Pothi & Page — static e-book storefront

A fast, lightweight store for selling downloadable e-books and guides. No database, no accounts: buy buttons link straight to your hosted checkout (Razorpay Payment Pages, Stripe Payment Links, Gumroad, Lemon Squeezy…), which takes payment and emails the PDF.

## Edit the store

| What | Where |
| --- | --- |
| Brand name, tagline, email, currency, refund days, home page copy, FAQs, about, newsletter, analytics | `src/site.ts` |
| Products, bundles, prices, checkout links | `src/products.ts` |
| Colours, fonts, spacing | `src/styles.css` |
| Product photos | `public/images/` |

### Add a product

1. Put a photo in `public/images/` (WebP, ~1200px wide, plus a ~640px `-640.webp` thumbnail).
2. Copy one object in the `products` array in `src/products.ts`, give it a new `slug`, and fill in the fields.
3. Paste your checkout link into `buyUrl`.

It appears on the home page, the products page, its own page at `/product/<slug>`, the sitemap and search results automatically.

### Set your checkout links

Create a payment link for each product in your checkout provider, set it to deliver the PDF, and paste the URL into that product's `buyUrl` (and the bundle's `buyUrl`). The placeholders start with `https://example.com/checkout/`.

### Before going live

- Set `url` in `src/site.ts` to your domain (enables absolute share links and sitemap URLs).
- Replace the placeholder Privacy, Terms and Refund pages in `src/routes/privacy.tsx`, `terms.tsx`, `refund.tsx`.
- Add real testimonials only once you have them (`testimonials` in `src/site.ts`).
- Optional: set `newsletter.endpoint` (e.g. Buttondown, ConvertKit form URL) and `analytics.enabled` + `analytics.domain` for Plausible.

## Run locally

```bash
bun install
bun run dev      # http://localhost:8080
bunx vitest run  # store rule tests
```

## Deploy

Publish from Lovable with one click, or build with `bun run build` and deploy to Cloudflare Pages / Workers.
