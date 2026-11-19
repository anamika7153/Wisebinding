import { createFileRoute } from "@tanstack/react-router";
import { FaqList } from "@/components/store/FaqList";
import { PageIntro } from "@/components/store/Section";
import { seo } from "@/lib/seo";
import { site, supportUrl } from "@/site";

export const Route = createFileRoute("/faq")({
  head: () =>
    seo({
      title: "Frequently asked questions",
      description: `Answers about e-book access, payments and support for ${site.brand} e-books and guides.`,
      path: "/faq",
    }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <PageIntro eyebrow="FAQ" title="Frequently asked questions" text="Everything you need to know before you buy." />
      <div className="container-page mt-6 max-w-3xl">
        <FaqList items={site.faqs} />
        <p className="mt-8 text-muted-foreground">
          Didn't find your answer?{" "}
          <a href={supportUrl()} className="font-medium text-primary underline underline-offset-4">
            Email support
          </a>
          . {site.supportResponse}
        </p>
      </div>
    </>
  );
}
