import type { Product } from "@/products";

/** In-page editorial artwork; no generated or downloadable cover asset. */
export function ProductArtwork({ product }: { product: Product }) {
  return (
    <div className="excel-artwork flex aspect-[4/3] w-full flex-col justify-between overflow-hidden bg-cover-panel p-6 text-cover-ink md:p-8" role="img" aria-label={`${product.name} — burgundy and ivory spreadsheet artwork`}>
      <div className="flex items-center justify-between gap-4 border-b border-cover-ink/25 pb-3 text-xs">
        <span>Wisebinding</span><span>Office skills</span>
      </div>
      <div className="grid grid-cols-[1.5fr_1fr] items-center gap-4 py-4">
        <div>
          <p className="font-display text-3xl leading-tight">Excel for<br />Office Jobs</p>
          <p className="mt-3 max-w-56 text-xs leading-relaxed">100 Formulas, MIS Reports &amp; Shortcuts</p>
        </div>
        <svg viewBox="0 0 140 160" className="w-full text-cover-accent" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M10 60h120v90H10zM10 82h120M10 105h120M10 128h120M40 60v90M70 60v90M100 60v90" />
          <path d="M20 82h20v23H20zM70 105h30v23H70z" fill="currentColor" />
          <path d="M42 50V35h16v15M72 50V22h16v28M102 50V8h16v42" fill="currentColor" />
        </svg>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-cover-ink/25 pt-3 text-xs">
        <span>{product.author}</span><span>20 practice workbooks</span>
      </div>
    </div>
  );
}