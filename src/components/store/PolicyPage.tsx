import type { ReactNode } from "react";
import { site } from "@/site";
import { PageIntro } from "./Section";

export function PolicyPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <PageIntro eyebrow="Policies" title={title} text={`Last updated ${site.legal.lastUpdated}`} />
      <div className="container-page">
        <div className="prose-store max-w-2xl">
          <p className="rounded-xl bg-secondary p-4 text-sm">
            This is a placeholder policy. Please review and adapt it for your business and country before going live.
          </p>
          {children}
        </div>
      </div>
    </>
  );
}
