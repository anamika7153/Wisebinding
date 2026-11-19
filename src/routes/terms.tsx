import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage } from "@/components/store/PolicyPage";
import { seo } from "@/lib/seo";
import { site } from "@/site";

export const Route = createFileRoute("/terms")({
  head: () =>
    seo({
      title: "Terms of sale",
      description: `The terms that apply when you buy an e-book or guide from ${site.brand}.`,
      path: "/terms",
    }),
  component: () => (
    <PolicyPage title="Terms of sale">
      <h2>Your licence</h2>
      <p>
        Each purchase gives you a personal, non-transferable licence to read and use the product. You may not resell,
        share or publish the files.
      </p>
      <h2>Payment</h2>
      <p>
        Prices are shown in {site.currency}. Payments are processed by our checkout provider, whose terms also apply.
      </p>
      <h2>Delivery</h2>
      <p>Products are delivered digitally by email immediately after payment.</p>
      <h2>Refunds</h2>
      <p>See our refund policy. You may request a full refund within {site.refundDays} days of purchase.</p>
      <h2>Contact</h2>
      <p>
        Questions about these terms? Email <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>.
      </p>
    </PolicyPage>
  ),
});
