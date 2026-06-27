import type { Metadata } from "next";
import SectionBand from "@/components/ui/SectionBand";
import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";
import { businessTools } from "@/content/leadership";

export const metadata: Metadata = {
  title: "Tools — Leadership",
  description:
    "12 proven business frameworks used in consulting and leadership: from SWOT and BCG Matrix to the Innovator's Method and Balanced Scorecard.",
};

export default function ToolsPage() {
  return (
    <>
      <SectionBand>
        <FadeIn>
          <Link href="/leadership" className="text-xs text-muted hover:text-ink transition-colors mb-6 inline-block">
            ← Leadership
          </Link>
          <p className="text-xs font-medium tracking-widest uppercase text-muted mb-4">
            12 Business Frameworks
          </p>
          <h1
            className="font-display text-5xl font-normal text-ink mb-4"
            style={{ letterSpacing: "-1px" }}
          >
            Tools
          </h1>
          <p className="text-base text-muted max-w-xl">
            A tool, no matter how powerful, is only as good as the hand that wields it — these
            frameworks have been applied across naval defense, maritime, and digital consulting
            engagements.
          </p>
        </FadeIn>
      </SectionBand>

      <SectionBand card>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {businessTools.map((tool, i) => (
            <FadeIn key={tool.id} delay={i * 0.05}>
              <div className="bg-canvas border border-hairline rounded-xl p-6 h-full">
                <h2 className="font-sans text-sm font-medium text-ink mb-3">{tool.name}</h2>
                <p className="text-sm text-body leading-relaxed">{tool.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </SectionBand>
    </>
  );
}
