import SectionBand from "@/components/ui/SectionBand";
import FadeIn from "@/components/ui/FadeIn";

export default function VPBio() {
  return (
    <SectionBand card id="bio">
      <div className="max-w-2xl">
        <FadeIn>
          <p className="text-xs font-medium tracking-widest uppercase text-muted mb-4">
            Background
          </p>
          <h2
            className="font-display text-4xl font-normal text-ink mb-8"
            style={{ letterSpacing: "-0.5px" }}
          >
            Data-driven leader. Creative engineer.
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="space-y-4 text-body leading-relaxed">
            <p>
              RWTH Aachen alumnus with a Diplom-Ingenieur in Electrical Engineering &amp;
              Information Technology and an MBA. Over 20 years of international leadership across
              Defense, Naval Systems, Maritime, and Digital Solutions.
            </p>
            <p>
              Track record in building and leading cross-functional teams, managing large-scale
              programs and bids, and driving commercial growth — including quadrupling annual
              turnover at DNV. Deep expertise across the full defense and maritime value chain,
              from systems engineering to C-level advisory.
            </p>
            <p>
              Operates at the intersection of technology and business: translating complex
              engineering environments into clear strategic decisions.
            </p>
          </div>
        </FadeIn>
      </div>
    </SectionBand>
  );
}
