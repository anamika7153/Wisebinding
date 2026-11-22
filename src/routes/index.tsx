import { createFileRoute, Link } from "@tanstack/react-router";
import { buttonVariants } from "@/components/ui/button";
import { FaqList } from "@/components/store/FaqList";
import { AboutBlock, FeaturedOffer, HowItWorks, PasBlock, SocialProof } from "@/components/store/HomeSections";
import { Newsletter } from "@/components/store/Newsletter";
import { ProductBrowser } from "@/components/store/ProductBrowser";
import { SectionHeading } from "@/components/store/Section";
import { TrustStrip } from "@/components/store/TrustStrip";
import { seo } from "@/lib/seo";
import { products } from "@/products";
import { fill, site, supportUrl } from "@/site";

export const Route = createFileRoute("/")({
  head: () =>
    seo({
      title: site.brand,
      description: `${site.tagline} ${site.hero.subheadline}`.slice(0, 158),
      path: "/",
      image: products[0]?.images[0]?.src,
    }),
  component: Home,
});

function Home() {
  const hero = products[0]?.images[0];
  return (
    <>
      <section className="container-page grid items-center gap-12 pb-12 pt-12 md:grid-cols-[1.1fr_1fr] md:pt-20">
        <div className="fade-in">
          <p className="eyebrow">{site.hero.eyebrow}</p>
          <h1 className="mt-4 text-4xl leading-[1.08] md:text-6xl">{site.hero.headline}</h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">{site.hero.subheadline}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link to="/products" className={buttonVariants({ variant: "brand", size: "xl" })}>
              {site.hero.cta}
            </Link>
            <Link to="/about" className={buttonVariants({ variant: "quiet", size: "xl" })}>
              Who we are
            </Link>
          </div>
          <p className="mt-5 text-sm text-muted-foreground">{fill(site.hero.microTrust)}</p>
        </div>
        {hero && (
          <div className="fade-in relative [animation-delay:120ms]">
            <div aria-hidden className="absolute -inset-4 -z-10 rotate-2 rounded-[2rem] bg-brand-soft" />
            <img
              src={hero.src}
              alt={hero.alt}
              width={1200}
              height={900}
              fetchPriority="high"
              decoding="async"
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lift"
            />
          </div>
        )}
      </section>

      <section aria-label="Why buy from us" className="container-page reveal">
        <TrustStrip />
      </section>

      <PasBlock />

      <section aria-labelledby="products-title" className="container-page reveal mt-24" id="products">
        <SectionHeading
          eyebrow="The collection"
          title="The Wisebinding collection"
          text="Explore the e-books currently available."
          id="products-title"
        />
        <div className="mt-8">
          <ProductBrowser />
        </div>
      </section>

      <FeaturedOffer />
      <HowItWorks />
      <SocialProof />
      <AboutBlock />

      <section aria-labelledby="faq-title" className="container-page reveal mt-24">
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions, answered."
            text={
              <>
                Still unsure?{" "}
                <a className="text-primary underline underline-offset-4" href={supportUrl()}>
                  Message us on Instagram.
                </a>
                .
              </>
            }
            id="faq-title"
          />
          <FaqList items={site.faqs} />
        </div>
      </section>

      <Newsletter />
    </>
  );
}
