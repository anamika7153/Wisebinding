/**
 * All brand and site copy lives here. Edit this file to rebrand the store.
 * Product data lives in src/products.ts.
 *
 * Fields marked PLACEHOLDER are sample values — replace them with your own.
 */

export const site = {
  /** PLACEHOLDER brand details */
  brand: "Pothi & Page",
  tagline: "Practical e-books and guides for independent creatives.",
  mission:
    "We write the guides we wished we had when we started freelancing: clear, honest and practical, so you can skip years of trial and error and focus on the work you love.",
  supportEmail: "hello@pothiandpage.com",
  supportResponse: "We reply within one business day.",
  /** ISO 4217 code, used for price formatting and Product JSON-LD */
  currency: "INR",
  /** BCP 47 locale for number formatting */
  locale: "en-IN",
  /**
   * Your live site address, e.g. "https://pothiandpage.com" (no trailing slash).
   * Used for canonical links, share images and the sitemap. When empty, the
   * sitemap uses the address the visitor is on.
   */
  url: "",
  /** Days customers have to request a refund */
  refundDays: 14,

  hero: {
    eyebrow: "E-books & guides for freelancers",
    headline: "Build a calmer, better-paid freelance life, one guide at a time.",
    subheadline:
      "Short, practical PDF guides on pricing, focus and running your own business. Download instantly and start applying what you learn today.",
    cta: "Browse products",
    microTrust: "Instant download · Secure checkout · {refundDays}-day refund guarantee",
  },

  trust: [
    { title: "Instant delivery", text: "Your PDF arrives by email the moment you pay." },
    { title: "Secure payment", text: "Checkout is handled by a trusted payment provider." },
    { title: "Refund guarantee", text: "Not a fit? Ask within {refundDays} days for a full refund." },
    { title: "Real human support", text: "Questions go to a real person, not a bot." },
  ],

  /** Problem – Agitate – Solve */
  pas: {
    eyebrow: "Sound familiar?",
    problem: "You became a freelancer for freedom, not for guesswork and late nights.",
    agitate: [
      "Not sure what to charge, so you quote low and hope.",
      "Busy all day, yet the important work keeps slipping.",
      "Endless free advice online, but no clear plan to follow.",
    ],
    solve:
      "Our guides turn years of real freelance experience into clear, step-by-step playbooks you can read in an evening and use the next morning.",
  },

  howItWorks: [
    { title: "Choose", text: "Pick the guide that fits where you are right now." },
    { title: "Pay securely", text: "Check out in under a minute with UPI, card or wallet." },
    { title: "Download instantly", text: "Get your PDF by email and start reading on any device." },
  ],

  /** Leave empty until you have real testimonials. Never invent them. */
  testimonials: [] as { quote: string; name: string; role?: string }[],

  firstCustomers: {
    title: "Be among our first customers",
    text: "We're a new studio, so we don't have a wall of reviews yet. What we do have is a no-questions refund guarantee and a real person answering every email. Try a guide, and tell us honestly what you think.",
  },

  about: {
    eyebrow: "About us",
    title: "A small studio, run by real people.",
    /** PLACEHOLDER founder details */
    founderName: "Ananya Rao",
    founderRole: "Founder & designer",
    body: [
      "Pothi & Page started at a kitchen table after years of freelance work, and too many lessons learned the hard way.",
      "Every guide we publish is built from what actually worked for us and the freelancers we know. We keep them short, honest and practical, and stand behind each one with a real refund guarantee.",
    ],
    image: { src: "/images/studio.webp", alt: "Hands sketching in a notebook on a wooden desk" },
  },

  faqs: [
    {
      q: "How do I receive my purchase?",
      a: "Right after payment you'll get an email with a download link. You can also download from the checkout confirmation page.",
    },
    {
      q: "What software do I need?",
      a: "Nothing special. Our guides are PDFs that open on any phone, tablet, laptop or e-reader.",
    },
    {
      q: "Can I get a refund?",
      a: "Yes. If a product isn't right for you, email us within {refundDays} days of purchase for a full refund.",
    },
    {
      q: "Is my payment secure?",
      a: "Payments are processed by our checkout provider. We never see or store your card or UPI details.",
    },
    {
      q: "Can I share the e-book with friends?",
      a: "Each purchase is a personal licence. Please point friends to the store instead, it helps us keep writing.",
    },
  ],

  newsletter: {
    /**
     * Form endpoint that accepts a POST with an "email" field
     * (e.g. Buttondown, ConvertKit, Formspree). Leave empty to hide the signup.
     */
    endpoint: "",
    title: "Get new guides first",
    text: "One short email when we release something new. No spam.",
    privacyNote: "We only use your email to send updates. Unsubscribe anytime.",
  },

  /** Privacy-friendly analytics (e.g. Plausible). Off by default. */
  analytics: {
    enabled: false,
    scriptSrc: "https://plausible.io/js/script.js",
    domain: "",
  },

  nav: [
    { label: "Products", to: "/products" },
    { label: "About", to: "/about" },
    { label: "FAQ", to: "/faq" },
    { label: "Contact", to: "/contact" },
  ] as const,

  /** PLACEHOLDER legal details — have them reviewed for your country. */
  legal: {
    businessName: "Pothi & Page",
    lastUpdated: "November 2026",
  },
};

/** Replace {refundDays} and similar tokens in copy. */
export function fill(text: string): string {
  return text.replaceAll("{refundDays}", String(site.refundDays)).replaceAll("{brand}", site.brand);
}
