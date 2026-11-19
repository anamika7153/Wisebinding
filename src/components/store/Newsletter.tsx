import { site } from "@/site";
import { buttonVariants } from "@/components/ui/button";

/** Hidden automatically when site.newsletter.endpoint is empty. */
export function Newsletter() {
  const n = site.newsletter;
  if (!n.endpoint) return null;
  return (
    <section aria-labelledby="newsletter-title" className="container-page mt-24">
      <div className="rounded-3xl bg-brand-soft px-6 py-12 text-center md:px-12">
        <h2 id="newsletter-title" className="text-3xl">{n.title}</h2>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground">{n.text}</p>
        <form action={n.endpoint} method="post" className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row">
          <label className="flex-1">
            <span className="sr-only">Email address</span>
            <input
              type="email"
              name="email"
              required
              autoComplete="email"
              placeholder="you@example.com"
              className="h-12 w-full rounded-full border border-input bg-card px-5 text-sm"
            />
          </label>
          <button type="submit" className={buttonVariants({ variant: "brand", size: "xl" })}>
            Subscribe
          </button>
        </form>
        <p className="mt-3 text-xs text-muted-foreground">{n.privacyNote}</p>
      </div>
    </section>
  );
}
