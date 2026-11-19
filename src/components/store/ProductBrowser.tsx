import { useMemo, useState } from "react";
import { getCategories, products, searchProducts } from "@/products";
import { cn } from "@/lib/utils";
import { ProductCard } from "./ProductCard";

export function ProductBrowser() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | null>(null);
  const categories = getCategories();
  const results = useMemo(() => searchProducts(products, query, category), [query, category]);

  const chip = (active: boolean) =>
    cn(
      "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
      active
        ? "border-primary bg-primary text-primary-foreground"
        : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground",
    );

  return (
    <div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
          <button type="button" className={chip(category === null)} aria-pressed={category === null} onClick={() => setCategory(null)}>
            All
          </button>
          {categories.map((c) => (
            <button key={c} type="button" className={chip(category === c)} aria-pressed={category === c} onClick={() => setCategory(c)}>
              {c}
            </button>
          ))}
        </div>
        <label className="relative block md:w-72">
          <span className="sr-only">Search products</span>
          <svg className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <circle cx="11" cy="11" r="7" />
            <path d="M20 20l-3.5-3.5" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search guides…"
            className="h-11 w-full rounded-full border border-input bg-card pl-10 pr-4 text-sm placeholder:text-muted-foreground"
          />
        </label>
      </div>
      <p className="sr-only" aria-live="polite">
        {results.length} {results.length === 1 ? "product" : "products"} shown
      </p>
      {results.length > 0 ? (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((p, i) => (
            <ProductCard key={p.slug} product={p} priority={i < 3} />
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-2xl border border-dashed border-border p-10 text-center text-muted-foreground">
          No guides match that search.{" "}
          <button type="button" className="font-medium text-primary underline underline-offset-4" onClick={() => { setQuery(""); setCategory(null); }}>
            Show all
          </button>
        </div>
      )}
    </div>
  );
}
