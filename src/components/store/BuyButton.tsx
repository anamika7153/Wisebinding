import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  label?: string;
  size?: "pill" | "xl" | "default";
  className?: string | undefined;
  productName?: string | undefined;
};

/** Links to the hosted checkout. No payment data is handled on this site. */
export function BuyButton({ href, label = "Buy now", size = "pill", className, productName }: Props) {
  return (
    <a
      href={href}
      rel="noopener"
      className={cn(buttonVariants({ variant: "buy", size }), className)}
      aria-label={productName ? `${label}: ${productName}` : undefined}
    >
      {label}
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </a>
  );
}
