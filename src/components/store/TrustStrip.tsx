import { fill, site } from "@/site";

const icons = [
  // download
  <path key="d" d="M12 4v11m0 0l-4-4m4 4l4-4M5 20h14" />,
  // lock
  <g key="l"><rect x="5" y="10" width="14" height="10" rx="2" /><path d="M8 10V7a4 4 0 018 0v3" /></g>,
  // open book
  <g key="b"><path d="M12 5v15M12 5C8 3 5 3 2 4v15c3-1 6-1 10 1 4-2 7-2 10-1V4c-3-1-6-1-10 1Z" /></g>,
  // person
  <g key="p"><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0116 0" /></g>,
];

export function TrustStrip() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {site.trust.map((t, i) => (
        <li key={t.title} className="flex gap-3 rounded-2xl border border-border bg-card p-4">
          <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand-soft text-primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              {icons[i % icons.length]}
            </svg>
          </span>
          <div>
            <p className="text-sm font-semibold">{t.title}</p>
            <p className="mt-0.5 text-sm text-muted-foreground">{fill(t.text)}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
