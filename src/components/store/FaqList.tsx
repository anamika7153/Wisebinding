import { fill } from "@/site";

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-border rounded-2xl border border-border bg-card">
      {items.map((item) => (
        <details key={item.q} className="group px-5 py-1 md:px-6">
          <summary className="flex items-center justify-between gap-4 py-4 text-left font-medium">
            {fill(item.q)}
            <span
              aria-hidden
              className="grid size-7 shrink-0 place-items-center rounded-full bg-secondary text-primary transition-transform duration-300 group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="pb-5 pr-10 text-sm leading-relaxed text-muted-foreground">{fill(item.a)}</p>
        </details>
      ))}
    </div>
  );
}
