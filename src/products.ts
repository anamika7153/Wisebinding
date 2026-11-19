/**
 * Every product in the store. Add a product by adding one object to `products`.
 * The grid, filters, product pages, bundles, sitemap and JSON-LD all read from here.
 *
 * The three products below are SAMPLE products — replace them with your own,
 * including the buyUrl (your Razorpay Payment Page, Stripe Payment Link, Gumroad or Lemon Squeezy link).
 */

import { site } from "./site";

export type ProductImage = {
  /** Path under /public, e.g. "/images/my-product.webp" */
  src: string;
  /** Optional smaller version (~640px wide) used in product cards */
  thumb?: string;
  alt: string;
};

export type Testimonial = { quote: string; name: string; role?: string };

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  description: string;
  price: number;
  originalPrice?: number;
  badge?: string;
  format: string;
  images: ProductImage[];
  features: string[];
  benefits: string[];
  includes: string[];
  faqs: { q: string; a: string }[];
  /** Hosted checkout link. No card data ever touches this site. */
  buyUrl: string;
  /** Only real testimonials. Leave out if you have none. */
  testimonials?: Testimonial[];
  /** Show in the featured slot on the home page when no bundle exists */
  featured?: boolean;
};

export type Bundle = {
  slug: string;
  name: string;
  tagline: string;
  price: number;
  productSlugs: string[];
  buyUrl: string;
};

export const products: Product[] = [
  {
    // SAMPLE PRODUCT
    slug: "the-calm-freelancer",
    name: "The Calm Freelancer",
    tagline: "Simple habits for a steadier, more fulfilling independent life.",
    category: "Business",
    description:
      "A practical e-book on running a freelance business without burning out. Learn how to find steady clients, set healthy boundaries, plan your weeks and build a buffer, so freelancing feels like freedom again.",
    price: 499,
    originalPrice: 799,
    badge: "Bestseller",
    format: "PDF e-book · 120 pages",
    images: [
      {
        src: "/images/calm.webp",
        thumb: "/images/calm-640.webp",
        alt: "The Calm Freelancer e-book shown as a hardcover and on a tablet",
      },
    ],
    benefits: [
      "Find steadier work instead of riding the feast-and-famine cycle",
      "Say no to bad-fit clients without feeling guilty",
      "Build a simple weekly rhythm that protects your evenings",
    ],
    features: [
      "12 short, actionable chapters",
      "Client-finding playbook for Indian and global markets",
      "Boundary scripts you can copy and paste",
      "Monthly money and buffer plan",
      "Reads well on phone, tablet and e-reader",
    ],
    includes: ["PDF e-book (120 pages)", "Printable weekly planner pages", "Free updates for life"],
    faqs: [
      {
        q: "Is this for new freelancers?",
        a: "Yes. It's written for anyone in their first five years, whether you're just starting or trying to make it sustainable.",
      },
      {
        q: "Can I read it on Kindle?",
        a: "Yes. You can send the PDF to your Kindle or open it on any device.",
      },
    ],
    buyUrl: "https://example.com/checkout/the-calm-freelancer",
    featured: true,
  },
  {
    // SAMPLE PRODUCT
    slug: "price-with-confidence",
    name: "Price With Confidence",
    tagline: "Charge what you're worth and write proposals that win.",
    category: "Money",
    description:
      "A step-by-step pricing and proposal guide. Learn a clear method to price your services, present your value, and handle pushback on price without discounting, plus ready-made proposal outlines.",
    price: 399,
    format: "PDF guide · 64 pages",
    images: [
      {
        src: "/images/proposal.webp",
        thumb: "/images/proposal-640.webp",
        alt: "Pricing and proposal guide booklet next to a tablet",
      },
    ],
    benefits: [
      "Price your services with a clear, repeatable method",
      "Send a polished proposal in under 30 minutes",
      "Raise your rates without losing good clients",
    ],
    features: [
      "Pricing worksheet with worked examples in ₹",
      "3 proposal outlines (design, writing, consulting)",
      "Scope and timeline checklist",
      "Email scripts for follow-ups and rate increases",
    ],
    includes: ["PDF guide (64 pages)", "Printable pricing worksheet", "Free updates for life"],
    faqs: [
      {
        q: "Does it cover pricing for international clients?",
        a: "Yes. There's a chapter on pricing in USD and other currencies when working with clients abroad.",
      },
    ],
    buyUrl: "https://example.com/checkout/price-with-confidence",
  },
  {
    // SAMPLE PRODUCT
    slug: "deep-work-days",
    name: "Deep Work Days",
    tagline: "A workbook for focused mornings and finished projects.",
    category: "Productivity",
    description:
      "A practical workbook to help you do your best work in fewer hours. Short reflections, a 21-day focus plan and simple routines that make deep, uninterrupted work a daily habit.",
    price: 349,
    badge: "New",
    format: "PDF workbook · 48 pages",
    images: [
      {
        src: "/images/deepwork.webp",
        thumb: "/images/deepwork-640.webp",
        alt: "Deep Work Days workbook open beside a tablet showing its cover",
      },
    ],
    benefits: [
      "Get your most important work done before lunch",
      "Cut distractions without quitting your phone",
      "Finish projects instead of juggling ten at once",
    ],
    features: [
      "21-day focus plan",
      "Daily reflection prompts",
      "Distraction audit worksheet",
      "Printable or fill on a tablet",
    ],
    includes: ["PDF workbook (48 pages)", "Fillable tablet version", "Free updates for life"],
    faqs: [
      {
        q: "Can I fill it in digitally?",
        a: "Yes. It works with apps like GoodNotes or Notability, or you can print it.",
      },
    ],
    buyUrl: "https://example.com/checkout/deep-work-days",
  },
];

/** Optional bundles. Leave the array empty to hide the bundle block. */
export const bundles: Bundle[] = [
  {
    // SAMPLE BUNDLE
    slug: "freelancer-library",
    name: "The Freelancer's Library",
    tagline: "All three guides together, for one simple price.",
    price: 999,
    productSlugs: ["the-calm-freelancer", "price-with-confidence", "deep-work-days"],
    buyUrl: "https://example.com/checkout/freelancer-library",
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getCategories(list: Product[] = products): string[] {
  return Array.from(new Set(list.map((p) => p.category)));
}

export function getBundleProducts(bundle: Bundle): Product[] {
  return bundle.productSlugs
    .map((slug) => getProduct(slug))
    .filter((p): p is Product => Boolean(p));
}

/** What the bundle's products cost if bought separately at their current prices. */
export function getBundleSavings(bundle: Bundle): { separateTotal: number; savings: number } {
  const separateTotal = getBundleProducts(bundle).reduce((sum, p) => sum + p.price, 0);
  return { separateTotal, savings: Math.max(0, separateTotal - bundle.price) };
}

export function getRelatedProducts(slug: string, limit = 3): Product[] {
  const current = getProduct(slug);
  const others = products.filter((p) => p.slug !== slug);
  // Same category first, then the rest.
  return [
    ...others.filter((p) => p.category === current?.category),
    ...others.filter((p) => p.category !== current?.category),
  ].slice(0, limit);
}

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat(site.locale, {
    style: "currency",
    currency: site.currency,
    minimumFractionDigits: Number.isInteger(amount) ? 0 : 2,
  }).format(amount);
}

export function searchProducts(list: Product[], query: string, category: string | null): Product[] {
  const q = query.trim().toLowerCase();
  return list.filter((p) => {
    if (category && p.category !== category) return false;
    if (!q) return true;
    return [p.name, p.tagline, p.category, p.description, p.format]
      .join(" ")
      .toLowerCase()
      .includes(q);
  });
}
