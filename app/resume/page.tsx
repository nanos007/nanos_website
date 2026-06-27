import type { Metadata } from "next";
import SectionBand from "@/components/ui/SectionBand";
import CareerTimeline from "@/components/resume/CareerTimeline";
import EducationSection from "@/components/resume/EducationSection";
import SkillsSection from "@/components/resume/SkillsSection";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Career timeline, education, and skills of Georgios Nanos — 13 positions across naval defense, shipbuilding, maritime software, and technology consulting.",
};

export default function ResumePage() {
  return (
    <>
      <SectionBand>
        <FadeIn>
          <p className="text-xs font-medium tracking-widest uppercase text-muted mb-4">
            Career · Education · Skills
          </p>
          <h1
            className="font-display text-5xl font-normal text-ink mb-4"
            style={{ letterSpacing: "-1px" }}
          >
            Resume
          </h1>
          <p className="text-base text-muted max-w-xl">
            20+ years across naval defense, shipbuilding, maritime software, industrial solutions,
            and technology consulting.
          </p>
        </FadeIn>
      </SectionBand>

      <SectionBand card>
        <FadeIn>
          <h2
            className="font-display text-3xl font-normal text-ink mb-8"
            style={{ letterSpacing: "-0.5px" }}
          >
            Professional Experience
          </h2>
        </FadeIn>
        <CareerTimeline />
      </SectionBand>

      <SectionBand>
        <FadeIn>
          <h2
            className="font-display text-3xl font-normal text-ink mb-8"
            style={{ letterSpacing: "-0.5px" }}
          >
            Education
          </h2>
        </FadeIn>
        <EducationSection />
      </SectionBand>

      <SectionBand card>
        <FadeIn>
          <h2
            className="font-display text-3xl font-normal text-ink mb-8"
            style={{ letterSpacing: "-0.5px" }}
          >
            Skills &amp; Expertise
          </h2>
        </FadeIn>
        <SkillsSection />
      </SectionBand>
    </>
  );
}
