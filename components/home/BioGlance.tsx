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
              Data-driven leader. Creative engineer.
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
                The title I hold with the most pride is &ldquo;Husband&rdquo; to my wonderful wife Xanthianna and &ldquo;Dad&rdquo; to my extraordinary son, Sopho.
              </p>
            </div>
          </FadeIn>
        </div>
      </SectionBand>
    </>
  );
}
