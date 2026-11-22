import { createFileRoute, Link } from "@tanstack/react-router";
import { buttonVariants } from "@/components/ui/button";
import { PageIntro } from "@/components/store/Section";
import { seo } from "@/lib/seo";
import { site, supportUrl } from "@/site";

export const Route = createFileRoute("/contact")({
  head: () =>
    seo({
      title: "Contact us",
      description: `Questions about an order or a guide? Message ${site.brand} and a real person will reply. ${site.supportResponse}`,
      path: "/contact",
    }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageIntro eyebrow="Contact" title="Contact Anamika Yadav." text={site.supportResponse} />
      <div className="container-page mt-6 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
          <h2 className="text-2xl">Message on Instagram</h2>
          <p className="mt-2 text-muted-foreground">
            Reach out via direct message on Instagram for order questions or pre-purchase inquiries.
          </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={supportUrl()}
            className={`${buttonVariants({ variant: "brand", size: "xl" })} mt-6`}
          >
            Message @wisebinding
          </a>
        </div>
        <div className="rounded-3xl bg-surface p-8">
          <h2 className="text-2xl">Before you write</h2>
          <ul className="mt-4 space-y-3 text-muted-foreground">
            <li>
              Can't find your download? Check your receipt and spam folder for the email from the checkout provider.
            </li>
            <li>Include the e-book title and your order reference if you have one. Do not send payment details.</li>
            <li>
              Common questions are answered on our{" "}
              <Link to="/faq" className="text-primary underline underline-offset-4">
                FAQ page
              </Link>
              .
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
