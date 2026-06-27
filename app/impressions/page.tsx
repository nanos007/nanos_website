import type { Metadata } from "next";
import SectionBand from "@/components/ui/SectionBand";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Impressions",
  description: "Photo gallery — impressions from a career spanning defense, maritime, and technology.",
};

export default function ImpressionsPage() {
  return (
    <>
      <SectionBand>
        <FadeIn>
          <p className="text-xs font-medium tracking-widest uppercase text-muted mb-4">Gallery</p>
          <h1
            className="font-display text-5xl font-normal text-ink mb-4"
            style={{ letterSpacing: "-1px" }}
          >
            Impressions
          </h1>
          <p className="text-base text-muted max-w-xl">
            Moments from a career spanning naval defense, maritime, shipbuilding, and technology
            across Europe, the Middle East, and beyond.
          </p>
        </FadeIn>
      </SectionBand>

      <SectionBand card>
        <FadeIn>
          <div className="bg-canvas border border-hairline rounded-xl p-12 text-center">
            <p className="font-display text-2xl font-normal text-muted mb-3" style={{ letterSpacing: "-0.3px" }}>
              Gallery coming soon
            </p>
            <p className="text-sm text-muted-soft max-w-sm mx-auto">
              Images will be added here. The gallery is built and ready — a masonry layout with
              lightbox viewing.
            </p>
          </div>
        </FadeIn>
      </SectionBand>
    </>
  );
}
