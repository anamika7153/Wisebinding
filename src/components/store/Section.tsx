import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  text,
  id,
  center,
}: {
  eyebrow?: string;
  title: string;
  text?: ReactNode;
  id?: string;
  center?: boolean;
}) {
  return (
    <div className={cn("max-w-2xl", center && "mx-auto text-center")}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 id={id} className="mt-3 text-3xl leading-tight md:text-4xl">
        {title}
      </h2>
      {text && <p className="mt-4 text-muted-foreground">{text}</p>}
    </div>
  );
}

export function PageIntro({ eyebrow, title, text }: { eyebrow?: string; title: string; text?: string }) {
  return (
    <div className="container-page fade-in pb-4 pt-14 md:pt-20">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h1 className="mt-3 max-w-3xl text-4xl leading-tight md:text-5xl">{title}</h1>
      {text && <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{text}</p>}
    </div>
  );
}
