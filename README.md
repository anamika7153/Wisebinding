# Wisebinding — static e-book storefront

Anamika Yadav’s general-interest e-book store. No database, accounts or hosted e-book files: buy buttons link to hosted checkout.

## Edit the store

- Brand, copy, email and settings: `src/site.ts`.
- Products, prices, authors and checkout URLs: `src/products.ts`.
- Design tokens: `src/styles.css`.
- Media: use Lovable Assets and import its `.asset.json` pointers.

Add one product object to list it in the catalogue, search, category filters, its detail page, sitemap and JSON-LD. Describe each title’s own format and audience rather than narrowing the store as a whole.

The current title is **Crack Your Next Interview with AI**, by Anamika Yadav: 195 pages, ₹499 (original price ₹1,999), with its real Gumroad checkout URL. No PDF is stored here.

Support links show “Email support” and open the visitor’s configured email app with the recipient prefilled; an email handler must be configured on their device. The address is not shown as page text, but remains in the link destination. Analytics and newsletter signup are disabled. No refund page or promises are displayed.

## Run and publish

```bash
bun install
bun run dev
bunx vitest run
```

Publish from Lovable. Set `site.url` to the actual public domain once available; never use a repository URL as the store domain.

### Netlify

The checked-in `netlify.toml` sets the build command to `bun run build`, the publish directory to `dist` (not `dist/client`), Node.js 22, and the Netlify deployment preset. Repository settings override the old publish directory in Netlify's dashboard.

Deploy the latest commit, then retry the deployment. Nitro generates the page server in `.netlify/functions-internal` and static assets in `dist`; Netlify deploys both automatically. Do not add a single-page-app redirect to `index.html`: product pages, sitemap and robots use the generated server.

CDN image pointers are resolved through `src/lib/assets.ts` to the project's publicly accessible Lovable asset endpoint, so Netlify does not try to serve missing `/__l5e/assets-v1/` files itself. Keep new product images and branding on this helper; the favicon remains a local public file.
