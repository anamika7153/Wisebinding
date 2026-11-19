import { formatPrice } from "@/products";
import { cn } from "@/lib/utils";

export function Price({
  price,
  originalPrice,
  className,
  large,
}: {
  price: number;
  originalPrice?: number | undefined;
  className?: string | undefined;
  large?: boolean;
}) {
  const onSale = originalPrice !== undefined && originalPrice > price;
  return (
    <p className={cn("flex items-baseline gap-2", className)}>
      <span className={cn("font-semibold text-foreground", large ? "text-3xl" : "text-lg")}>
        {formatPrice(price)}
      </span>
      {onSale && (
        <>
          <span className="sr-only">, was </span>
          <s className={cn("text-muted-foreground", large ? "text-lg" : "text-sm")}>{formatPrice(originalPrice)}</s>
        </>
      )}
    </p>
  );
}
