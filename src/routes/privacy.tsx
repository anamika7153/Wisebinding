import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage } from "@/components/store/PolicyPage";
import { seo } from "@/lib/seo";
import { site } from "@/site";

export const Route = createFileRoute("/privacy")({
  head: () =>
    seo({
      title: "Privacy policy",
      description: `How ${site.brand} collects, uses and protects your personal information.`,
      path: "/privacy",
    }),
  component: () => (
    <PolicyPage title="Privacy policy">
      <h2>What we collect</h2>
      <p>
        This website does not use accounts or store your payment details. When you buy, our checkout provider collects
        your name, email and payment information to process the order and deliver your files.
      </p>
      <h2>How we use it</h2>
      <ul>
        <li>To deliver your purchase and send your receipt.</li>
        <li>To answer your support emails.</li>
        <li>To send product updates, only if you subscribed.</li>
      </ul>
      <h2>Analytics</h2>
      <p>
        {site.analytics.enabled
          ? "We use privacy-friendly analytics that do not use cookies or track you across sites."
          : "This site does not currently use analytics or tracking cookies."}
      </p>
      <h2>Your rights</h2>
      <p>
        You can ask us to see, correct or delete your data at any time by emailing{" "}
        <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>.
      </p>
    </PolicyPage>
  ),
});
