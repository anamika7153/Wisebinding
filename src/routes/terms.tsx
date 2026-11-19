import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage } from "@/components/store/PolicyPage";
import { seo } from "@/lib/seo";
import { site, supportUrl } from "@/site";

export const Route = createFileRoute("/terms")({
  head: () =>
    seo({
      title: "Terms of sale",
      description: `The terms that apply when you buy an e-book or guide from ${site.brand}.`,
      path: "/terms",
    }),
  component: () => (
    <PolicyPage title="Terms of sale">
      <h2>About Wisebinding</h2>
      <p>{site.brand} is an e-book store by Anamika Yadav. Each title’s page lists its description, format, contents and price.</p>
      <h2>Purchases</h2>
      <p>Prices on this store are displayed in Indian rupees (INR). Buy links take you to the external checkout provider. Review the final amount, any applicable taxes and the provider’s terms before completing payment.</p>
      <h2>Digital access</h2>
      <p>The checkout provider handles payment and access to your purchase. No e-book files or payment information are hosted or collected by this storefront.</p>
      <h2>Product information</h2>
      <p>E-books have different subjects and intended readers. Read the details for the title you choose. Crack Your Next Interview with AI is an educational guide, not a guarantee of a job or interview outcome.</p>
      <h2>Contact</h2>
      <p>Questions about an e-book or an order? Contact <a href={supportUrl()} target="_blank" rel="noopener noreferrer">{site.supportEmail}</a>.</p>
    </PolicyPage>
  ),
});
