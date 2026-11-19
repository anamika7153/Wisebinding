import { createFileRoute } from "@tanstack/react-router";
import { FeaturedOffer } from "@/components/store/HomeSections";
import { ProductBrowser } from "@/components/store/ProductBrowser";
import { PageIntro } from "@/components/store/Section";
import { TrustStrip } from "@/components/store/TrustStrip";
import { seo } from "@/lib/seo";
import { site } from "@/site";

export const Route = createFileRoute("/products")({
  head: () =>
    seo({
      title: "All e-books & guides",
      description: `Browse every e-book and guide from ${site.brand}. Instant PDF download, secure checkout and a ${site.refundDays}-day refund guarantee.`,
      path: "/products",
    }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Products"
        title="All e-books & guides"
        text="Filter by topic or search by name. Every guide is a PDF you can read on any device."
      />
      <section className="container-page mt-8">
        <ProductBrowser />
      </section>
      <FeaturedOffer />
      <section aria-label="Why buy from us" className="container-page mt-16">
        <TrustStrip />
      </section>
    </>
  );
}
