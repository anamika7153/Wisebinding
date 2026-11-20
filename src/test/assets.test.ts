import { describe, expect, it } from "vitest";
import { assetUrl } from "@/lib/assets";
import { products } from "@/products";
import logo from "@/assets/wisebinding-logo.webp.asset.json";

describe("external hosting assets", () => {
  it("resolves CDN images independently of the storefront host", () => {
    expect(assetUrl(logo.url)).toBe(
      "https://id-preview--e1298ede-a5aa-4a92-9c50-e232cecce8a5.lovable.app/__l5e/assets-v1/7937122c-ef3d-474b-8b44-028f7bfe6093/wisebinding-logo.webp",
    );
  });

  it("resolves both product cover sizes to public HTTPS URLs", () => {
    for (const product of products) {
      for (const image of product.images) {
        expect(image.src).toMatch(/^https:\/\/[^/]+\/__l5e\/assets-v1\//);
        expect(image.thumb).toMatch(/^https:\/\/[^/]+\/__l5e\/assets-v1\//);
      }
    }
  });

  it("preserves local icons and existing absolute URLs", () => {
    expect(assetUrl("/favicon.png")).toBe("/favicon.png");
    expect(assetUrl("https://example.com/image.webp")).toBe("https://example.com/image.webp");
  });
});