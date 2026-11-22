import { Link } from "@tanstack/react-router";
import { site, supportUrl } from "@/site";
import { Logo } from "./SiteHeader";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.5fr_1fr_1fr]">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{site.tagline}</p>
          <a
            href={supportUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            Instagram support
          </a>
        </div>
        <nav aria-label="Store">
          <h2 className="font-sans text-sm font-semibold text-foreground">Store</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {site.nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:text-foreground">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Policies">
          <h2 className="font-sans text-sm font-semibold text-foreground">Policies</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/privacy" className="hover:text-foreground">
                Privacy policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-foreground">
                Terms of sale
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-border">
        <p className="container-page py-6 text-xs text-muted-foreground">
          © {year} {site.legal.businessName}. Payments are processed securely by our checkout provider.
        </p>
      </div>
    </footer>
  );
}
