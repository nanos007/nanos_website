import SectionBand from "@/components/ui/SectionBand";
import FadeIn from "@/components/ui/FadeIn";

export default function BioGlance() {
  return (
    <>
      {/* Bio */}
      <SectionBand card id="bio">
        <div className="max-w-3xl">
          <FadeIn>
            <p className="text-xs font-medium tracking-widest uppercase text-muted mb-4">
              Bio Glance
            </p>
            <h2
              className="font-display text-4xl font-normal text-ink mb-8"
              style={{ letterSpacing: "-0.5px" }}
            >
              Creative engineer. Data-driven leader.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="space-y-4 text-body leading-relaxed">
              <p>
                RWTH Aachen alumnus with a Diplom-Ingenieur in Electrical Engineering &amp;
                Information Technology and an MBA in Customer Relations Management. Over 20 years of
                international business experience across Digital Solutions, Shipbuilding, Maritime,
                Defense, and Industrial Solutions.
              </p>
              <p>
                Expertise spans Management, Sales, Business Consulting, Systems Engineering,
                Auditing, and AI implementation. A creative engineer focused on data analysis
                supporting decision-making, with competencies in process design, project and product
                management, sales leadership, team management, and contract negotiation.
              </p>
              <p>
                Business and people leader who has developed leadership skills through hands-on
                experience in diverse industries, combined with high-level education and theoretical
                knowledge.
              </p>
              <p className="italic text-muted">
                The title I hold with the most pride is &ldquo;Dad&rdquo; to my extraordinary son, Sopho.
              </p>
            </div>
          </FadeIn>
        </div>
      </SectionBand>

      {/* Naval AI & DEEPDOCK */}
      <SectionBand dark id="deepdock">
        <div className="max-w-3xl">
          <FadeIn>
            <p className="text-xs font-medium tracking-widest uppercase text-on-dark-soft mb-4">
              Research Initiative
            </p>
            <h2
              className="font-display text-4xl font-normal text-on-dark mb-8"
              style={{ letterSpacing: "-0.5px" }}
            >
              Naval AI &amp; Autonomy
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="space-y-4 text-on-dark-soft leading-relaxed mb-8">
              <p>
                Exploring artificial intelligence enabling autonomous behavior in maritime
                environments. Work focuses on surface and underwater systems combining perception,
                decision-making, and control.
              </p>
              <p>
                A research-driven, non-commercial initiative called{" "}
                <a
                  href="http://www.deepdock.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-teal hover:text-on-dark transition-colors"
                >
                  DEEPDOCK
                </a>{" "}
                — centered on autonomous maritime systems, conducted during free time since 1999.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <a
              href="http://www.deepdock.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-surface-dark-elevated text-on-dark text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-surface-dark-soft transition-colors border border-surface-dark-soft"
            >
              Visit DEEPDOCK →
            </a>
          </FadeIn>
        </div>
      </SectionBand>
    </>
  );
}
