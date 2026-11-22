import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage } from "@/components/store/PolicyPage";
import { seo } from "@/lib/seo";
import { site, supportUrl } from "@/site";

export const Route = createFileRoute("/privacy")({
  head: () =>
    seo({
      title: "Privacy policy",
      description: `How ${site.brand} collects, uses and protects your personal information.`,
      path: "/privacy",
    }),
  component: () => (
    <PolicyPage title="Privacy policy">
      <h2>About this website</h2>
      <p>
        {site.brand} is an e-book storefront run by Anamika Yadav. You do not create an account here, and this site does
        not collect payment details.
      </p>
      <h2>Checkout and digital delivery</h2>
      <p>
        Buy links take you to an external checkout provider. That provider handles payment, order information and
        delivery under its own privacy policy. The current e-book uses Gumroad.
      </p>
      <h2>Support by Instagram</h2>
      <p>
        If you send a support message, Anamika Yadav receives the information you choose to include and uses it to
        respond to your enquiry. Do not send passwords or card details.
      </p>
      <h2>Analytics and hosting</h2>
      <p>
        This store has no configured analytics or newsletter signup. The hosting provider may process technical
        information needed to serve the website. External services such as Gumroad and Google Fonts have their own
        privacy practices.
      </p>
      <h2>Contact</h2>
      <p>
        For questions about information you have shared with us: <a href={supportUrl()}>Instagram</a>.
      </p>
    </PolicyPage>
  ),
});
