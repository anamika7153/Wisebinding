import { Link } from "@tanstack/react-router";
import { buttonVariants } from "@/components/ui/button";
import type { Product } from "@/products";
import { BuyButton } from "./BuyButton";
import { Price } from "./Price";
import { ProductArtwork } from "./ProductArtwork";

export function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  const img = product.images[0];
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <Link
        to="/product/$slug"
        params={{ slug: product.slug }}
        className="relative block aspect-[4/3] overflow-hidden bg-surface"
        tabIndex={-1}
        aria-hidden
      >
        {product.artwork ? <ProductArtwork product={product} /> : img && (
          <img
            src={img.thumb ?? img.src}
            alt=""
            width={640}
            height={480}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        )}
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-card/95 px-3 py-1 text-xs font-semibold text-primary shadow-soft">
            {product.badge}
          </span>
        )}
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {product.category} · {product.format.split("·")[0]?.trim()}
        </p>
        <h3 className="mt-2 text-xl leading-snug">
          <Link to="/product/$slug" params={{ slug: product.slug }} className="hover:text-primary">
            {product.name}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{product.tagline}</p>
        <Price price={product.price} originalPrice={product.originalPrice} className="mt-4" />
        <div className="mt-4 flex flex-wrap gap-2">
          <Link
            to="/product/$slug"
            params={{ slug: product.slug }}
            className={buttonVariants({ variant: "quiet", size: "pill" })}
          >
            View details
          </Link>
          <BuyButton href={product.buyUrl} productName={product.name} />
        </div>
      </div>
    </article>
  );
}
