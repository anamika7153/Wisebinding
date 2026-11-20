import type { Product } from "@/products";

/** Shared physical-book mockup; no downloadable cover asset. */
export function ProductArtwork({ product }: { product: Product }) {
  return (
    <div className="book-scene flex aspect-[4/3] w-full items-center justify-center overflow-hidden bg-surface" role="img" aria-label={`${product.name} — burgundy and ivory hardcover book`}>
      <div className="book-mockup">
        <div className="book-cover flex h-full flex-col justify-between bg-cover-panel text-cover-ink">
          <p className="book-imprint border-b border-cover-ink/25 pb-2">Wisebinding</p>
          <div>
            <p className="book-title font-display leading-tight">Excel for<br />Office Jobs</p>
            <p className="book-subtitle mt-3 leading-relaxed">100 Formulas, MIS Reports<br />&amp; Shortcuts</p>
          </div>
          <svg viewBox="0 0 140 160" className="book-illustration mx-auto text-cover-accent" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path d="M10 60h120v90H10zM10 82h120M10 105h120M10 128h120M40 60v90M70 60v90M100 60v90" />
            <path d="M20 82h20v23H20zM70 105h30v23H70z" fill="currentColor" />
            <path d="M42 50V35h16v15M72 50V22h16v28M102 50V8h16v42" fill="currentColor" />
          </svg>
          <p className="book-author border-t border-cover-ink/25 pt-2">{product.author}</p>
        </div>
      </div>
    </div>
  );
}