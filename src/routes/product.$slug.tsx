import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { BuyButton } from "@/components/store/BuyButton";
import { FaqList } from "@/components/store/FaqList";
import { Gallery } from "@/components/store/Gallery";
import { Price } from "@/components/store/Price";
import { ProductCard } from "@/components/store/ProductCard";
import { SectionHeading } from "@/components/store/Section";
import { absoluteUrl, seo } from "@/lib/seo";
import { getProduct, getRelatedProducts, type Product } from "@/products";
import { site } from "@/site";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData, params }) => {
    const product = loaderData?.product;
    if (!product) {
      return { meta: [{ title: `Product not found | ${site.brand}` }, { name: "robots", content: "noindex" }] };
    }
    const base = seo({
      title: product.name,
      description: `${product.tagline} ${product.format}.`.slice(0, 158),
      path: `/product/${params.slug}`,
      image: product.images[0]?.src,
      type: "product",
    });
    return { ...base, scripts: [{ type: "application/ld+json", children: JSON.stringify(productJsonLd(product)) }] };
  },
  component: ProductPage,
  notFoundComponent: () => (
    <div className="container-page py-24 text-center">
      <h1 className="text-4xl">We couldn't find that guide</h1>
      <p className="mt-3 text-muted-foreground">It may have been renamed or removed.</p>
      <Link to="/products" className="mt-6 inline-block font-medium text-primary underline underline-offset-4">
        See all products
      </Link>
    </div>
  ),
});

function productJsonLd(p: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name,
    description: p.description,
    category: p.category,
    image: p.images.map((i) => absoluteUrl(i.src)),
    brand: { "@type": "Brand", name: site.brand },
    offers:
      p.price !== undefined && p.buyUrl
        ? {
            "@type": "Offer",
            price: p.price.toFixed(2),
            priceCurrency: site.currency,
            availability: "https://schema.org/InStock",
            url: absoluteUrl(`/product/${p.slug}`),
          }
        : undefined,
  };
}

function Check() {
  return (
    <svg
      className="mt-0.5 shrink-0 text-primary"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}

function ProductPage() {
  const { product } = Route.useLoaderData();
  const related = getRelatedProducts(product.slug);

  return (
    <div className="pb-28 md:pb-0">
      <nav aria-label="Breadcrumb" className="container-page pt-8 text-sm text-muted-foreground">
        <Link to="/products" className="hover:text-foreground">
          Products
        </Link>
        <span aria-hidden className="mx-2">
          /
        </span>
        <span className="text-foreground">{product.name}</span>
      </nav>

      <section className="container-page mt-6 grid gap-10 md:grid-cols-[1.15fr_1fr] md:gap-14">
        <div className="fade-in">
          <Gallery images={product.images} badge={product.badge} product={product} />
        </div>

        <div className="fade-in [animation-delay:100ms]">
          <p className="eyebrow">
            {product.category} · {product.format}
          </p>
          <h1 className="mt-3 text-4xl leading-tight md:text-5xl">{product.name}</h1>
          {product.author && <p className="mt-3 text-sm font-medium text-primary">By {product.author}</p>}
          <p className="mt-4 text-lg text-muted-foreground">{product.tagline}</p>

          <ul className="mt-6 space-y-3">
            {product.benefits.map((b) => (
              <li key={b} className="flex gap-3">
                <Check />
                {b}
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-soft">
            <Price price={product.price} originalPrice={product.originalPrice} large />
            {product.buyUrl && (
              <p className="mt-1 text-sm text-muted-foreground">One-time purchase · Digital delivery via checkout</p>
            )}
            <BuyButton href={product.buyUrl} size="xl" className="mt-5 w-full" productName={product.name} />
            {product.buyUrl && (
              <ul className="mt-5 grid gap-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="mt-0.5 shrink-0"
                    aria-hidden
                  >
                    <rect x="5" y="10" width="14" height="10" rx="2" />
                    <path d="M8 10V7a4 4 0 018 0v3" />
                  </svg>
                  Secure checkout by our payment provider. We never see your card or UPI details.
                </li>
              </ul>
            )}
          </div>
        </div>
      </section>

      <section className="container-page mt-20 grid gap-10 md:grid-cols-3">
        <div className="md:col-span-1">
          <h2 className="text-2xl">About this e-book</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">{product.description}</p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6">
          <h2 className="text-2xl">What's inside</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {product.features.map((f) => (
              <li key={f} className="flex gap-3">
                <Check />
                {f}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl bg-brand-soft p-6">
          <h2 className="text-2xl">You'll receive</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {product.includes.map((f) => (
              <li key={f} className="flex gap-3">
                <Check />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {product.testimonials && product.testimonials.length > 0 && (
        <section className="container-page mt-20">
          <h2 className="text-2xl">What readers say</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {product.testimonials.map((t) => (
              <figure key={t.name} className="rounded-2xl border border-border bg-card p-6">
                <blockquote>“{t.quote}”</blockquote>
                <figcaption className="mt-3 text-sm text-muted-foreground">
                  {t.name}
                  {t.role && `, ${t.role}`}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      <section className="container-page mt-20 grid gap-10 md:grid-cols-[1fr_1.4fr]">
        <SectionHeading eyebrow="FAQ" title="Questions about this e-book" />
        <FaqList items={[...product.faqs, ...site.faqs.slice(0, 3)]} />
      </section>

      {related.length > 0 && (
        <section aria-labelledby="related-title" className="container-page reveal mt-24">
          <SectionHeading eyebrow="Keep reading" title="You may also like" id="related-title" />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      )}

      {/* Sticky mobile buy bar */}
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-background/95 backdrop-blur-md md:hidden">
        <div className="container-page flex items-center justify-between gap-4 py-3">
          <div className="min-w-0">
            <p className="truncate text-sm font-medium">{product.name}</p>
            <Price price={product.price} originalPrice={product.originalPrice} />
          </div>
          <BuyButton href={product.buyUrl} productName={product.name} />
        </div>
      </div>
    </div>
  );
}
