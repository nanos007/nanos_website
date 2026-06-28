import type { Metadata } from "next";
import SectionBand from "@/components/ui/SectionBand";
import FadeIn from "@/components/ui/FadeIn";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "DEEPDOCK Ideation",
  description:
    "The genesis of DEEPDOCK — a non-commercial research initiative exploring autonomous naval systems through surface and sub-surface AI applications.",
};

export default function DeepDockSecurePage() {
  return (
    <>
      <SectionBand>
        <FadeIn>
          <Link href="/resume" className="text-xs text-muted hover:text-ink transition-colors mb-6 inline-block">
            ← Resume
          </Link>
          <p className="text-xs font-medium tracking-widest uppercase text-accent-steel mb-4">
            Non-commercial · 1999–Present
          </p>
          <h1
            className="font-display text-5xl font-normal text-ink mb-4"
            style={{ letterSpacing: "-1px" }}
          >
            DEEPDOCK Ideation
          </h1>
          <p className="text-base text-muted max-w-xl">
            Dive into the genesis of DEEPDOCK — exploring autonomous behavior in maritime
            environments through surface and underwater AI systems.
          </p>
        </FadeIn>
      </SectionBand>

      <SectionBand dark>
        <div className="max-w-3xl">
          <FadeIn>
            <div className="relative h-64 rounded-xl overflow-hidden mb-8">
              <Image
                src="/images/deepdock-ideation.jpg"
                alt="DEEPDOCK ideation visualization"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <blockquote className="border-l-2 border-accent-steel pl-6 mb-8">
              <p className="font-display text-2xl font-normal text-on-dark mb-3" style={{ letterSpacing: "-0.3px" }}>
                &ldquo;The only real security that a man will have in this world is a reserve of
                knowledge, experience, and ability.&rdquo;
              </p>
              <footer className="text-on-dark-soft text-sm">— Henry Ford</footer>
            </blockquote>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="space-y-4 text-on-dark-soft leading-relaxed mb-8">
              <p>
                DEEPDOCK began as an ideation project in 1999 — a long-term, non-commercial
                research initiative exploring how artificial intelligence can enable autonomous
                behavior in maritime environments.
              </p>
              <p>
                The research focuses on surface and underwater systems that combine perception,
                decision-making, and control. The goal: contribute to the future of naval
                operations through autonomous systems that enhance both safety and capability.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex flex-wrap gap-3">
              <a
                href="http://www.deepdock.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-on-primary text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-primary-active transition-colors"
              >
                DEEPDOCK Website <ExternalLink size={14} />
              </a>
            </div>
          </FadeIn>
        </div>
      </SectionBand>
    </>
  );
}
