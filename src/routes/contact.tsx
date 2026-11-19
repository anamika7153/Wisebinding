import { createFileRoute, Link } from "@tanstack/react-router";
import { buttonVariants } from "@/components/ui/button";
import { PageIntro } from "@/components/store/Section";
import { seo } from "@/lib/seo";
import { fill, site } from "@/site";

export const Route = createFileRoute("/contact")({
  head: () =>
    seo({
      title: "Contact us",
      description: `Questions about an order or a guide? Email ${site.brand} and a real person will reply. ${site.supportResponse}`,
      path: "/contact",
    }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageIntro eyebrow="Contact" title="Talk to a real person." text={site.supportResponse} />
      <div className="container-page mt-6 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
          <h2 className="text-2xl">Email us</h2>
          <p className="mt-2 text-muted-foreground">
            For order help, refunds, or questions before you buy.
          </p>
          <a href={`mailto:${site.supportEmail}`} className={`${buttonVariants({ variant: "brand", size: "xl" })} mt-6`}>
            {site.supportEmail}
          </a>
        </div>
        <div className="rounded-3xl bg-surface p-8">
          <h2 className="text-2xl">Before you write</h2>
          <ul className="mt-4 space-y-3 text-muted-foreground">
            <li>Can't find your download? Check your spam folder for the email from our checkout provider.</li>
            <li>{fill("Want a refund? Just reply to your receipt within {refundDays} days.")}</li>
            <li>
              Common questions are answered on our{" "}
              <Link to="/faq" className="text-primary underline underline-offset-4">FAQ page</Link>.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
