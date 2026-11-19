import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { site } from "@/site";

export function Logo() {
  return (
    <Link to="/" className="group inline-flex items-center gap-2.5" aria-label={`${site.brand} home`}>
      <span
        aria-hidden
        className="grid size-8 place-items-center rounded-full bg-primary font-display text-base text-primary-foreground transition-transform group-hover:-rotate-6"
      >
        {site.brand.charAt(0)}
      </span>
      <span className="font-display text-lg font-medium tracking-tight">{site.brand}</span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded-md focus:bg-card focus:px-3 focus:py-2"
      >
        Skip to content
      </a>
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Logo />
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {site.nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  activeProps={{ className: "text-foreground bg-secondary" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-full border border-border md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-border md:hidden">
          <ul className="container-page flex flex-col py-2">
            {site.nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-3 text-base font-medium"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
