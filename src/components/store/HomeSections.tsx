import { Link } from "@tanstack/react-router";
import { buttonVariants } from "@/components/ui/button";
import { bundles, formatPrice, getBundleProducts, getBundleSavings, products } from "@/products";
import { site } from "@/site";
import { BuyButton } from "./BuyButton";
import { Price } from "./Price";
import { SectionHeading } from "./Section";

export function PasBlock() {
  const p = site.pas;
  return (
    <section aria-labelledby="pas-title" className="container-page reveal mt-24">
      <div className="grid gap-10 rounded-3xl bg-surface p-8 md:grid-cols-2 md:p-12">
        <div>
          <p className="eyebrow">{p.eyebrow}</p>
          <h2 id="pas-title" className="mt-3 text-3xl leading-tight md:text-4xl">{p.problem}</h2>
        </div>
        <div>
          <ul className="space-y-3">
            {p.agitate.map((a) => (
              <li key={a} className="flex gap-3 text-muted-foreground">
                <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-buy" />
                {a}
              </li>
            ))}
          </ul>
          <p className="mt-6 border-l-2 border-primary pl-4 font-medium text-foreground">{p.solve}</p>
        </div>
      </div>
    </section>
  );
}

/** Shows the first bundle, or the featured product when there is no bundle. */
export function FeaturedOffer() {
  const bundle = bundles[0];
  if (bundle) {
    const items = getBundleProducts(bundle);
    const { separateTotal, savings } = getBundleSavings(bundle);
    return (
      <section aria-labelledby="featured-title" className="container-page reveal mt-24">
        <div className="grid items-center gap-10 overflow-hidden rounded-3xl bg-primary p-8 text-primary-foreground md:grid-cols-[1.1fr_1fr] md:p-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] opacity-80">Best value</p>
            <h2 id="featured-title" className="mt-3 text-3xl leading-tight md:text-4xl">{bundle.name}</h2>
            <p className="mt-3 max-w-md opacity-85">{bundle.tagline}</p>
            <ul className="mt-6 space-y-2">
              {items.map((p) => (
                <li key={p.slug} className="flex items-center justify-between gap-4 border-b border-primary-foreground/15 pb-2 text-sm">
                  <Link to="/product/$slug" params={{ slug: p.slug }} className="underline-offset-4 hover:underline">
                    {p.name}
                  </Link>
                  <span className="opacity-75">{p.price !== undefined ? formatPrice(p.price) : "Coming soon"}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-4">
              <p className="flex items-baseline gap-2">
                <span className="text-3xl font-semibold">{formatPrice(bundle.price)}</span>
                {savings > 0 && (
                  <span className="text-sm opacity-80">
                    <s>{formatPrice(separateTotal)}</s> · you save {formatPrice(savings)}
                  </span>
                )}
              </p>
              <BuyButton href={bundle.buyUrl} label="Get the bundle" size="xl" productName={bundle.name} />
            </div>
          </div>
          <div className="relative hidden grid-cols-2 gap-3 md:grid">
            {items.slice(0, 4).map((p, i) => (
              <img
                key={p.slug}
                src={p.images[0]?.thumb ?? p.images[0]?.src}
                alt=""
                width={640}
                height={480}
                loading="lazy"
                decoding="async"
                className={`aspect-[4/3] w-full rounded-xl object-cover shadow-lift ${i === 0 && items.length === 3 ? "col-span-2" : ""}`}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
  const product = products.find((p) => p.featured) ?? products[0];
  if (!product) return null;
  return (
    <section aria-labelledby="featured-title" className="container-page reveal mt-24">
      <div className="grid items-center gap-10 rounded-3xl bg-surface p-8 md:grid-cols-2 md:p-12">
        <img src={product.images[0]?.src} alt={product.images[0]?.alt ?? ""} loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover" />
        <div>
          <p className="eyebrow">Featured</p>
          <h2 id="featured-title" className="mt-3 text-3xl md:text-4xl">{product.name}</h2>
          <p className="mt-3 text-muted-foreground">{product.tagline}</p>
          <Price price={product.price} originalPrice={product.originalPrice} large className="mt-6" />
          <div className="mt-6 flex flex-wrap gap-3">
            <BuyButton href={product.buyUrl} size="xl" productName={product.name} />
            <Link to="/product/$slug" params={{ slug: product.slug }} className={buttonVariants({ variant: "quiet", size: "xl" })}>
              View details
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  return (
    <section aria-labelledby="how-title" className="container-page reveal mt-24">
      <SectionHeading eyebrow="How it works" title="Find it. Buy it. Read it." id="how-title" center />
      <ol className="mt-10 grid gap-6 md:grid-cols-3">
        {site.howItWorks.map((step, i) => (
          <li key={step.title} className="rounded-2xl border border-border bg-card p-6 text-center">
            <span className="mx-auto grid size-11 place-items-center rounded-full bg-brand-soft font-display text-lg text-primary">
              {i + 1}
            </span>
            <h3 className="mt-4 text-xl">{step.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

/** Real testimonials only; otherwise an honest "first customers" message. */
export function SocialProof() {
  if (site.testimonials.length > 0) {
    return (
      <section aria-labelledby="proof-title" className="container-page reveal mt-24">
        <SectionHeading eyebrow="Kind words" title="What readers say" id="proof-title" />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {site.testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl border border-border bg-card p-6">
              <blockquote className="text-foreground">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-muted-foreground">
                {t.name}
                {t.role && `, ${t.role}`}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    );
  }
  return (
    <section aria-labelledby="proof-title" className="container-page reveal mt-24">
      <div className="mx-auto max-w-2xl rounded-3xl border border-dashed border-primary/30 bg-card p-8 text-center md:p-12">
        <p className="eyebrow">For curious minds</p>
        <h2 id="proof-title" className="mt-3 text-3xl">{site.firstCustomers.title}</h2>
        <p className="mt-4 text-muted-foreground">{site.firstCustomers.text}</p>
      </div>
    </section>
  );
}

export function AboutBlock({ withLink = true }: { withLink?: boolean }) {
  const a = site.about;
  return (
    <section aria-labelledby="about-title" className="container-page reveal mt-24">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <img
          src={products[0]?.images[0]?.src}
          alt={products[0]?.images[0]?.alt ?? ""}
          width={1200}
          height={900}
          loading="lazy"
          decoding="async"
          className="aspect-[4/3] w-full rounded-3xl object-cover shadow-soft"
        />
        <div>
          <p className="eyebrow">{a.eyebrow}</p>
          <h2 id="about-title" className="mt-3 text-3xl leading-tight md:text-4xl">{a.title}</h2>
          <p className="mt-4 text-lg text-foreground">{site.mission}</p>
          {a.body.map((para) => (
            <p key={para} className="mt-4 text-muted-foreground">{para}</p>
          ))}
          <div className="mt-6 flex items-center gap-3">
            <span aria-hidden className="grid size-11 place-items-center rounded-full bg-primary font-display text-primary-foreground">
              {a.founderName.charAt(0)}
            </span>
            <div className="text-sm">
              <p className="font-semibold">{a.founderName}</p>
              <p className="text-muted-foreground">{a.founderRole}</p>
            </div>
          </div>
          {withLink && (
            <Link to="/about" className="mt-6 inline-block text-sm font-medium text-primary underline underline-offset-4">
              More about us
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
