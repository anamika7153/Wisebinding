import { createFileRoute, Link } from "@tanstack/react-router";
import { buttonVariants } from "@/components/ui/button";
import { AboutBlock, HowItWorks } from "@/components/store/HomeSections";
import { PageIntro } from "@/components/store/Section";
import { TrustStrip } from "@/components/store/TrustStrip";
import { seo } from "@/lib/seo";
import { site } from "@/site";

export const Route = createFileRoute("/about")({
  head: () =>
    seo({
      title: "About us",
      description: `${site.brand} is an independent digital bookstore. ${site.mission}`.slice(0, 158),
      path: "/about",
    }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageIntro eyebrow="About" title={site.about.title} text={site.tagline} />
      <div className="-mt-12">
        <AboutBlock withLink={false} />
      </div>
      <section aria-label="Our promises" className="container-page mt-20">
        <h2 className="text-3xl">Our promises to you</h2>
        <div className="mt-6">
          <TrustStrip />
        </div>
      </section>
      <HowItWorks />
      <div className="container-page mt-16 text-center">
        <Link to="/products" className={buttonVariants({ variant: "brand", size: "xl" })}>
          Browse products
        </Link>
      </div>
    </>
  );
}
