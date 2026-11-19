# Wisebinding — static e-book storefront

Anamika Yadav’s general-interest e-book store. No database, accounts or hosted e-book files: buy buttons link to hosted checkout.

## Edit the store

- Brand, copy, email and settings: `src/site.ts`.
- Products, prices, authors and checkout URLs: `src/products.ts`.
- Design tokens: `src/styles.css`.
- Media: use Lovable Assets and import its `.asset.json` pointers.

Add one product object to list it in the catalogue, search, category filters, its detail page, sitemap and JSON-LD. Describe each title’s own format and audience rather than narrowing the store as a whole.

The current title is **Crack Your Next Interview with AI**, by Anamika Yadav: 195 pages, ₹499 (original price ₹1,999), with its real Gumroad checkout URL. No PDF is stored here.

Support links open Gmail compose with the recipient prefilled. Buyers may need to sign in to Gmail. Analytics and newsletter signup are disabled. No refund page or promises are displayed.

## Run and publish

```bash
bun install
bun run dev
bunx vitest run
```

Publish from Lovable. Set `site.url` to the actual public domain once available; never use a repository URL as the store domain.
