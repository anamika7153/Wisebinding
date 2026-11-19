import { describe, expect, it } from "vitest";
import { bundles, formatPrice, getBundleSavings, getProduct, getRelatedProducts, products, searchProducts } from "@/products";
import { site } from "@/site";

describe("store rules", () => {
  it("shows prices in Indian rupees", () => {
    expect(site.currency).toBe("INR");
    expect(formatPrice(499)).toContain("₹");
  });

  it("every product slug is unique and has a checkout link", () => {
    const slugs = products.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const p of products) expect(p.buyUrl).toMatch(/^https:\/\//);
  });

  it("returns nothing for an unknown product", () => {
    expect(getProduct("does-not-exist")).toBeUndefined();
  });

  it("bundle saving is the separate total minus the bundle price", () => {
    const b = bundles[0]!;
    expect(getBundleSavings(b)).toEqual({ separateTotal: 499 + 399 + 349, savings: 1247 - 999 });
  });

  it("related products never include the current product", () => {
    expect(getRelatedProducts("deep-work-days").map((p) => p.slug)).not.toContain("deep-work-days");
  });

  it("search filters by category and text", () => {
    expect(searchProducts(products, "", "Money").map((p) => p.slug)).toEqual(["price-with-confidence"]);
    expect(searchProducts(products, "focus", null).map((p) => p.slug)).toContain("deep-work-days");
  });
});
