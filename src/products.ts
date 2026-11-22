import { site } from "./site";
import cover from "./assets/interview-cover.webp.asset.json";
import coverThumb from "./assets/interview-cover-640.webp.asset.json";
import excelPhoto from "./assets/excel-book-tablet.webp.asset.json";
import excelPhotoThumb from "./assets/excel-book-tablet-640.webp.asset.json";
import { assetUrl } from "./lib/assets";

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
  author?: string;
  tagline: string;
  category: string;
  description: string;
  price?: number;
  originalPrice?: number;
  badge?: string;
  format: string;
  images: ProductImage[];
  artwork?: "spreadsheet";
  features: string[];
  benefits: string[];
  includes: string[];
  faqs: { q: string; a: string }[];
  /** Hosted checkout link. No card data ever touches this site. */
  buyUrl?: string;
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
    slug: "crack-your-next-interview-with-ai",
    name: "Crack Your Next Interview with AI",
    author: "Anamika Yadav",
    tagline: "ATS Resumes, AI Mock Interviews & Smarter Job Search for Indian Job Seekers",
    category: "Career & Job Search",
    price: 499,
    originalPrice: 1999,
    format: "PDF e-book · 195 pages",
    buyUrl: "https://superprofile.bio/vp/crack-your-next-interview-with-ai",
    featured: true,
    images: [
      {
        src: assetUrl(cover.url),
        thumb: assetUrl(coverThumb.url),
        alt: "Crack Your Next Interview with AI by Anamika Yadav — evergreen Wisebinding cover with a golden staircase and AI-inspired lines",
      },
    ],
    description:
      "A practical, step-by-step guide for Indian job seekers who are applying everywhere and hearing nothing back. Hiring has changed: software reads your resume before a person does, recruiters search by keywords, and AI tools may score your first interview. This 195-page eBook shows how that system works and how to use AI to get through every stage of it honestly, from an ATS-friendly resume and a recruiter-ready profile to AI mock interviews, scam safety and offer negotiation. It is built for India, written for beginners, and works with free AI tools.",
    benefits: [
      "Find the exact hiring stage where you’re losing, and fix that first",
      "Build a clean, ATS-friendly resume that both software and recruiters can read",
      "Tailor your resume to any job description in about 15 minutes with AI",
      "Get found by recruiters on LinkedIn and Naukri",
      "Walk into HR, technical and video interviews prepared, with practised STAR stories",
      "Spot fake jobs and scams before they cost you money or your documents",
      "Understand your CTC and in-hand pay, and negotiate your offer with confidence",
    ],
    features: [
      "Built for the Indian job market: Naukri, LinkedIn, campus drives, GCCs, notice periods and CTC",
      "Teaches AI as a coach, not a ghostwriter: sharpen your real experience, never fake it",
      "Practical frameworks, including the Three Layers of AI in Hiring, the CLEAR Career Framework, the 10-JD Method, the 3-Check Rule, the STOP Check and the OFFER Framework",
      "Ready-to-copy AI prompts for ChatGPT, Claude or Gemini in every chapter",
      "Illustrative mini case studies, ‘Try This’ exercises and key takeaways in every chapter",
      "Beginner-friendly: works with free AI tools and a simple spreadsheet",
      "PDF with a clickable Contents page and chapter bookmarks for easy navigation",
    ],
    includes: [
      "Introduction, 19 chapters, an Appendix toolkit and a Conclusion",
      "30-Day Job Search Sprint and a 7-Day Interview Prep Plan",
      "Worksheets: skills inventory, JD keyword mapping, application tracker, STAR story bank, networking tracker and offer comparison",
      "ATS-friendly resume skeleton",
      "Cheat sheets: ATS checklist, action verbs, AI prompt library, top 30 HR questions, video interview setup, interview-day checklist, scam red flags and negotiation scripts",
    ],
    faqs: [
      {
        q: "What format is the eBook in?",
        a: "A 195-page PDF with a clickable Contents page and bookmarks for every chapter. It works on phone, tablet and laptop.",
      },
      {
        q: "Do I need to be technical?",
        a: "No. If you can use WhatsApp and a web browser, you can use every tool in this book.",
      },
      {
        q: "Do I need paid AI tools?",
        a: "No. Every strategy works with free AI tiers, free learning platforms and a simple spreadsheet.",
      },
      {
        q: "I’m a fresher. Is this for me?",
        a: "Yes. It covers campus hiring, online assessments, projects and building your first resume.",
      },
      {
        q: "Isn’t using AI for job applications cheating?",
        a: "Not the way this book teaches it. You use AI to prepare and sharpen your real experience, never to invent skills or to answer during a live test or interview.",
      },
      {
        q: "Does this guarantee a job?",
        a: "No book can promise that. It gives you a clear system to find where you’re getting stuck, fix it, and walk into every interview prepared.",
      },
    ],
  },
  {
    slug: "excel-for-office-jobs",
    price: 299,
    originalPrice: 599,
    buyUrl: "https://superprofile.bio/vp/excel-for-office-jobs",
    name: "Excel for Office Jobs",
    author: "Anamika Yadav",
    tagline: "100 Formulas, MIS Reports & Shortcuts (with practice files)",
    category: "Career / Office Skills",
    format: "eBook · 215 pages · 20 practice workbooks",
    images: [
      {
        src: assetUrl(excelPhoto.url),
        thumb: assetUrl(excelPhotoThumb.url),
        alt: "Excel for Office Jobs by Anamika Yadav — burgundy and ivory book and tablet photographed on a softly lit tabletop",
      },
    ],
    description:
      "Excel is the shared language of office work, yet most people learn it in bits and pieces, under pressure. This book gives you the missing structure. It teaches the 100 formulas, the keyboard shortcuts, the pivot tables and the MIS reporting skills that office jobs actually ask for, with Indian examples such as GST, lakhs and crores, PF, EMI and the April–March financial year. Written for freshers, MIS and data-entry executives, people in accounts, HR and sales operations, small-business owners and career switchers, it takes you from Excel stress to Excel confidence. Every chapter comes with its own practice workbook, so you learn by doing.",
    benefits: [
      "Write the formulas office work needs, from SUMIFS and lookups to dates and text cleaning, with confidence",
      "Fix #N/A, #VALUE! and #REF! errors in minutes instead of panicking",
      "Finish daily and monthly reports faster with shortcuts, pivot tables and a repeatable MIS framework",
      "Build clear MIS reports and one-page dashboards that managers can read at a glance",
      "Walk into an Excel test or interview prepared, with a timed mock test and model answers",
    ],
    features: [
      "100 formulas, keyboard shortcuts, pivot tables and MIS reporting skills",
      "Indian examples: GST, lakhs and crores, PF, EMI and the April–March financial year",
      "Beginner-friendly lessons with a practice workbook for every chapter",
      "Microsoft Excel on Windows, with Mac shortcuts included",
      "Clearly marked Microsoft 365 and Excel 2021 formulas, with alternatives for older versions",
    ],
    includes: [
      "Introduction, 20 chapters, an Appendix toolkit and a Conclusion",
      "20 practice workbooks with Start, Solution and Challenge sheets, plus monthly CSV files for Power Query exercises",
      "30-Day Excel Mastery Plan and a 7-Day Interview Test Preparation Plan",
      "Skill tracker, MIS report templates, monthly MIS checklist, report requirement sheet and dashboard planning sheet",
      "100 Formulas Quick Reference, keyboard shortcuts, error fix-it sheet, formula selection guide, Indian number formats and 25 practice challenges",
    ],
    faqs: [
      {
        q: "Do I need to be good at Excel already?",
        a: "No. The book starts with the basics and builds up. If you can use a computer and type a few words, you can follow it.",
      },
      {
        q: "Which Excel version do I need?",
        a: "Most of the book works in any modern version. Formulas that need Microsoft 365 or Excel 2021 or later are clearly marked, with alternatives for older versions.",
      },
      {
        q: "Does it work on Excel for Mac or Google Sheets?",
        a: "The book is written for Microsoft Excel on Windows, with Mac shortcuts included. Most formulas also work in Excel for the web. Google Sheets is not the focus.",
      },
      {
        q: "Are the practice files included?",
        a: "Yes. Every chapter has its own practice workbook with a Start, Solution and Challenge sheet.",
      },
      {
        q: "I'm a fresher. Is this for me?",
        a: "Yes. It explains what job posts mean by Basic, Intermediate and Advanced Excel, and ends with a mock Excel test and interview preparation.",
      },
    ],
  },
];

/** Optional bundles, populated only when a real offer is available. */
export const bundles: Bundle[] = [];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getCategories(list: Product[] = products): string[] {
  return Array.from(new Set(list.map((p) => p.category)));
}

export function getBundleProducts(bundle: Bundle): Product[] {
  return bundle.productSlugs.map((slug) => getProduct(slug)).filter((p): p is Product => Boolean(p));
}

/** What the bundle's products cost if bought separately at their current prices. */
export function getBundleSavings(bundle: Bundle): { separateTotal: number; savings: number } {
  const separateTotal = getBundleProducts(bundle).reduce((sum, p) => sum + (p.price ?? 0), 0);
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
    return [p.name, p.tagline, p.category, p.description, p.format].join(" ").toLowerCase().includes(q);
  });
}
