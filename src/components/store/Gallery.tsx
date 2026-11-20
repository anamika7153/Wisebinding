import { useState } from "react";
import type { Product, ProductImage } from "@/products";
import { ProductArtwork } from "./ProductArtwork";
import { cn } from "@/lib/utils";

export function Gallery({ images, badge, product }: { images: ProductImage[]; badge?: string | undefined; product?: Product }) {
  const [active, setActive] = useState(0);
  const current = images[active] ?? images[0];
  if (product?.artwork) return <div className="overflow-hidden rounded-2xl shadow-soft"><ProductArtwork product={product} /></div>;
  if (!current) return null;
  return (
    <div>
      <div className="relative overflow-hidden rounded-3xl bg-surface shadow-soft">
        <img
          src={current.src}
          alt={current.alt}
          width={1200}
          height={900}
          fetchPriority="high"
          decoding="async"
          className="aspect-[4/3] w-full object-cover"
        />
        {badge && (
          <span className="absolute left-4 top-4 rounded-full bg-card/95 px-3 py-1 text-xs font-semibold text-primary shadow-soft">
            {badge}
          </span>
        )}
      </div>
      {images.length > 1 && (
        <div className="mt-3 flex gap-3" role="group" aria-label="Product images">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show image ${i + 1}`}
              aria-pressed={i === active}
              className={cn(
                "overflow-hidden rounded-xl border-2 transition-colors",
                i === active ? "border-primary" : "border-transparent opacity-70 hover:opacity-100",
              )}
            >
              <img src={img.thumb ?? img.src} alt="" width={120} height={90} loading="lazy" className="aspect-[4/3] w-24 object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
