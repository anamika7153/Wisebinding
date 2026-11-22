import { describe, expect, it } from "vitest";
import {
  bundles,
  formatPrice,
  getBundleSavings,
  getProduct,
  getRelatedProducts,
  products,
  searchProducts,
} from "@/products";
import { site } from "@/site";

describe("store rules", () => {
  it("shows prices in Indian rupees", () => {
    expect(site.currency).toBe("INR");
    expect(formatPrice(499)).toContain("₹");
  });

  it("every product slug is unique and has a checkout link", () => {
    const slugs = products.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const p of products) if (p.buyUrl) expect(p.buyUrl).toMatch(/^https:\/\//);
  });

  it("returns nothing for an unknown product", () => {
    expect(getProduct("does-not-exist")).toBeUndefined();
  });

  it("lists only the supplied real e-books and no sample bundles", () => {
    expect(products.map((p) => p.slug)).toEqual(["crack-your-next-interview-with-ai", "excel-for-office-jobs"]);
    expect(bundles).toEqual([]);
  });

  it("uses the supplied price and original price", () => {
    expect(getProduct("crack-your-next-interview-with-ai")?.price).toBe(499);
    expect(getProduct("crack-your-next-interview-with-ai")?.originalPrice).toBe(1999);
  });

  it("uses the real hosted checkout", () => {
    expect(products[0]?.buyUrl).toBe("https://littlefixesco.gumroad.com/l/CrackYourNextInterviewwithAI");
  });

  it("uses the real brand and author", () => {
    expect(site.brand).toBe("Wisebinding");
    expect(site.about.founderName).toBe("Anamika Yadav");
    expect(products[0]?.author).toBe("Anamika Yadav");
  });

  it("does not configure a refund promise", () => {
    expect("refundDays" in site).toBe(false);
  });

  it("keeps bundle calculations available for future real offers", () => {
    expect(
      getBundleSavings({
        slug: "test",
        name: "Test",
        tagline: "",
        price: 400,
        productSlugs: ["crack-your-next-interview-with-ai"],
        buyUrl: "https://checkout.test",
      }),
    ).toEqual({ separateTotal: 499, savings: 99 });
  });

  it("related products never include the current product", () => {
    expect(getRelatedProducts("crack-your-next-interview-with-ai").map((p) => p.slug)).toEqual([
      "excel-for-office-jobs",
    ]);
  });

  it("uses the supplied Excel price of 299 rupees", () => {
    expect(getProduct("excel-for-office-jobs")?.price).toBe(299);
  });

  it("uses the real Excel checkout link", () => {
    const excel = getProduct("excel-for-office-jobs");
    expect(excel).toBeDefined();
    expect(excel?.buyUrl).toBe("https://littlefixesco.gumroad.com/l/aajloa");
    expect(excel?.originalPrice).toBeUndefined();
  });

  it("includes the supplied Excel length and practice workbooks", () => {
    expect(getProduct("excel-for-office-jobs")?.format).toBe("eBook · 215 pages · 20 practice workbooks");
  });

  it("search filters by category and text", () => {
    expect(searchProducts(products, "", "Career & Job Search").map((p) => p.slug)).toEqual([
      "crack-your-next-interview-with-ai",
    ]);
    expect(searchProducts(products, "ATS", null).map((p) => p.slug)).toContain("crack-your-next-interview-with-ai");
    expect(searchProducts(products, "", "Money")).toEqual([]);
  });
});
