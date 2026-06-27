import type { Metadata } from "next";
import SectionBand from "@/components/ui/SectionBand";
import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Leadership",
  description:
    "Leadership philosophy and frameworks by Georgios Nanos: 6 core soft skills, 12 business tools, and the Challenger Sale methodology.",
};

const hubs = [
  {
    title: "Soft Skills",
    description:
      "The 6 core skills for effective business leadership in the AI era — from Adaptability and Digital Intelligence to Ethos.",
    href: "/leadership/soft-skills",
  },
  {
    title: "Tools",
    description:
      "12 proven business frameworks applied across consulting engagements — SWOT, BCG Matrix, Balanced Scorecard, and more.",
    href: "/leadership/tools",
  },
  {
    title: "Sales",
    description:
      "The Challenger Sale methodology: leading with insights, constructive tension, and driving customers to confident decisions.",
    href: "/leadership/sales",
  },
];

export default function LeadershipPage() {
  return (
    <>
      <SectionBand>
        <FadeIn>
          <p className="text-xs font-medium tracking-widest uppercase text-muted mb-4">
            Philosophy &amp; Frameworks
          </p>
          <h1
            className="font-display text-5xl font-normal text-ink mb-4"
            style={{ letterSpacing: "-1px" }}
          >
            Leadership
          </h1>
          <p className="text-base text-muted max-w-xl">
            Leadership built through hands-on experience across naval defense, shipbuilding, maritime
            software, and international consulting — grounded in continuous learning.
          </p>
        </FadeIn>
      </SectionBand>

      <SectionBand card>
        <div className="grid md:grid-cols-3 gap-4">
          {hubs.map((hub, i) => (
            <FadeIn key={hub.href} delay={i * 0.1}>
              <Link
                href={hub.href}
                className="group block bg-canvas border border-hairline rounded-xl p-6 hover:bg-surface-soft transition-colors h-full"
              >
                <h2 className="font-sans text-base font-medium text-ink mb-3">{hub.title}</h2>
                <p className="text-sm text-muted leading-relaxed mb-4">{hub.description}</p>
                <span className="inline-flex items-center gap-1 text-sm text-primary font-medium group-hover:gap-2 transition-all">
                  Explore <ArrowRight size={14} />
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </SectionBand>
    </>
  );
}
