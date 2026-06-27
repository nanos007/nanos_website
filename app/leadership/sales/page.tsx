import type { Metadata } from "next";
import SectionBand from "@/components/ui/SectionBand";
import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";
import { challengerSale } from "@/content/leadership";

export const metadata: Metadata = {
  title: "Sales — Leadership",
  description:
    "The Challenger Sale methodology: Teaching for Differentiation, Tailoring for Resonance, Taking Control, Constructive Tension, and Driving to Decision.",
};

export default function SalesPage() {
  return (
    <>
      <SectionBand>
        <FadeIn>
          <Link href="/leadership" className="text-xs text-muted hover:text-ink transition-colors mb-6 inline-block">
            ← Leadership
          </Link>
          <p className="text-xs font-medium tracking-widest uppercase text-muted mb-4">
            Sales Methodology
          </p>
          <h1
            className="font-display text-5xl font-normal text-ink mb-4"
            style={{ letterSpacing: "-1px" }}
          >
            {challengerSale.title}
          </h1>
          <p className="text-base text-muted max-w-xl">{challengerSale.intro}</p>
        </FadeIn>
      </SectionBand>

      <SectionBand dark>
        <div className="space-y-6 max-w-3xl">
          {challengerSale.principles.map((principle, i) => (
            <FadeIn key={principle.title} delay={i * 0.1}>
              <div className="flex gap-6">
                <span className="font-display text-4xl font-normal text-surface-dark-soft leading-none flex-shrink-0 w-8">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="font-sans text-base font-medium text-on-dark mb-2">
                    {principle.title}
                  </h2>
                  <p className="text-sm text-on-dark-soft leading-relaxed">{principle.description}</p>
                </div>
              </div>
              {i < challengerSale.principles.length - 1 && (
                <div className="border-t border-surface-dark-elevated mt-6" />
              )}
            </FadeIn>
          ))}
        </div>
      </SectionBand>
    </>
  );
}
