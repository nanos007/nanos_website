import type { Metadata } from "next";
import SectionBand from "@/components/ui/SectionBand";
import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";
import { softSkills } from "@/content/leadership";

export const metadata: Metadata = {
  title: "Soft Skills — Leadership",
  description:
    "The 6 skills for business leadership in the AI era: Adaptability, Innovative Visionary, Motivating Coach, Complexity Master, Digital Intelligence, and Ethos.",
};

const icons: Record<string, string> = {
  adaptability: "⟳",
  "innovative-visionary": "◈",
  "motivating-coach": "◎",
  "complexity-master": "⬡",
  "digital-intelligence": "⌁",
  ethos: "Δ",
};

export default function SoftSkillsPage() {
  return (
    <>
      <SectionBand>
        <FadeIn>
          <Link href="/leadership" className="text-xs text-muted hover:text-ink transition-colors mb-6 inline-block">
            ← Leadership
          </Link>
          <p className="text-xs font-medium tracking-widest uppercase text-muted mb-4">
            6 Core Competencies
          </p>
          <h1
            className="font-display text-5xl font-normal text-ink mb-4"
            style={{ letterSpacing: "-1px" }}
          >
            The 6 skills for business leadership in the AI era
          </h1>
        </FadeIn>
      </SectionBand>

      <SectionBand card>
        <div className="grid md:grid-cols-2 gap-4">
          {softSkills.map((skill, i) => (
            <FadeIn key={skill.id} delay={i * 0.08}>
              <div className="bg-canvas border border-hairline rounded-xl p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl text-accent-steel font-light" aria-hidden>
                    {icons[skill.id]}
                  </span>
                  <h2 className="font-sans text-base font-medium text-ink">{skill.title}</h2>
                </div>
                <p className="text-xs text-muted mb-3">{skill.summary}</p>
                <p className="text-sm text-body leading-relaxed">{skill.detail}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </SectionBand>
    </>
  );
}
