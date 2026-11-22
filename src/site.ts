/** Brand, copy and static-store settings. Product details live in products.ts. */
export const site = {
  brand: "Wisebinding",
  tagline: "E-books for curious minds and new possibilities.",
  mission:
    "Wisebinding brings together e-books across topics, so you can explore what interests you and find your next read.",
  supportEmail: "dev.personal.pf@gmail.com",
  supportResponse: "Send a direct message to @wisebinding on Instagram with your questions or order details.",
  currency: "INR",
  locale: "en-IN",
  url: "",
  instagramUrl: "https://www.instagram.com/wisebinding?avpt=MXU3anJ1dWczajhkbA%3D%3D&utm_source=qr",
  hero: {
    eyebrow: "Independent e-books & guides",
    headline: "Wisebinding",
    subheadline:
      "A place for curious minds. Explore e-books, discover new perspectives, and choose your next chapter — whatever your interests.",
    cta: "Browse e-books",
    microTrust: "Digital reads · Hosted checkout · Author support",
  },
  trust: [
    { title: "Digital delivery", text: "Access your purchase through the checkout provider." },
    { title: "Hosted checkout", text: "Payment is handled on the provider’s website, not here." },
    { title: "Explore your interests", text: "E-books across topics, for different reading journeys." },
    { title: "Author support", text: "Questions? Get in touch with Anamika Yadav." },
  ],
  pas: {
    eyebrow: "Follow your curiosity",
    problem: "There’s always something new to discover.",
    agitate: [
      "A topic you want to understand better.",
      "A fresh perspective on a familiar challenge.",
      "A new interest waiting for its first chapter.",
    ],
    solve:
      "Find an e-book that speaks to where you are today. Wisebinding is open to every topic, not just one kind of reader.",
  },
  howItWorks: [
    { title: "Find your read", text: "Explore the collection and read each e-book’s details." },
    { title: "Visit checkout", text: "The buy link takes you to the e-book’s hosted checkout." },
    { title: "Start reading", text: "Follow the checkout provider’s instructions to access your purchase." },
  ],
  testimonials: [] as { quote: string; name: string; role?: string }[],
  firstCustomers: {
    title: "Your reading journey starts here",
    text: "Explore the e-book details, see what’s inside, and choose the read that’s right for you. Have a question? Anamika Yadav is just an Instagram DM away.",
  },
  about: {
    eyebrow: "Behind Wisebinding",
    title: "Meet Anamika Yadav.",
    founderName: "Anamika Yadav",
    founderRole: "Author · Wisebinding",
    body: [
      "I’m Anamika Yadav, the author behind Wisebinding. This is where you’ll find my e-books and guides.",
      "Wisebinding isn’t limited to one subject or one audience. Each e-book has its own focus, with details to help you decide whether it’s for you.",
    ],
  },
  faqs: [
    {
      q: "How do I buy an e-book?",
      a: "Choose an e-book and select Buy now. You’ll go to its hosted checkout to complete your purchase.",
    },
    {
      q: "How do I access my purchase?",
      a: "Your checkout provider handles digital delivery. Follow the instructions on your confirmation page and receipt.",
    },
    {
      q: "What format are the e-books in?",
      a: "Check each e-book’s page for its format, page count and device information. These details can vary between titles.",
    },
    {
      q: "Is my payment handled here?",
      a: "No. Payment happens on the checkout provider’s website. Wisebinding does not collect your card or payment details.",
    },
    {
      q: "Who can I contact for help?",
      a: "Message @wisebinding on Instagram, with the e-book title and any relevant order details. Never send card details or passwords.",
    },
  ],
  newsletter: {
    endpoint: "",
    title: "Get new e-books first",
    text: "Updates when a new read arrives.",
    privacyNote: "Unsubscribe anytime.",
  },
  analytics: { enabled: false, scriptSrc: "https://plausible.io/js/script.js", domain: "" },
  nav: [
    { label: "E-books", to: "/products" },
    { label: "About", to: "/about" },
    { label: "FAQ", to: "/faq" },
    { label: "Contact", to: "/contact" },
  ] as const,
  legal: { businessName: "Wisebinding", lastUpdated: "19 November 2026" },
};

/** Opens the visitor’s configured email app without loading a webmail page. */
export function supportUrl(): string {
  return `mailto:${site.instagramUrl}`;
}

export function fill(text: string): string {
  return text.replaceAll("{brand}", site.brand);
}
