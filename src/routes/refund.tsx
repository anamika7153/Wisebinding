import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage } from "@/components/store/PolicyPage";
import { seo } from "@/lib/seo";
import { site } from "@/site";

export const Route = createFileRoute("/refund")({
  head: () =>
    seo({
      title: "Refund policy",
      description: `Every ${site.brand} purchase comes with a ${site.refundDays}-day, no-questions refund guarantee.`,
      path: "/refund",
    }),
  component: () => (
    <PolicyPage title="Refund policy">
      <h2>{site.refundDays}-day guarantee</h2>
      <p>
        If a product isn't right for you, email us within {site.refundDays} days of purchase and we'll refund you in
        full. No forms, no awkward questions.
      </p>
      <h2>How to request a refund</h2>
      <ul>
        <li>
          Email <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a> or reply to your receipt.
        </li>
        <li>Include the email address you used at checkout.</li>
      </ul>
      <h2>When you'll get your money</h2>
      <p>Refunds go back to your original payment method, usually within 5–7 business days.</p>
    </PolicyPage>
  ),
});
