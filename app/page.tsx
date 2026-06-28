import type { Metadata } from "next";
import VPHero from "@/components/vp/VPHero";
import VPBio from "@/components/vp/VPBio";
import VPLogos from "@/components/vp/VPLogos";
import SolonQuote from "@/components/home/SolonQuote";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Georgios Nanos — Defense & Maritime Executive",
  description: "Georgios Nanos — Dipl.-Ing. EE, MBA. 20+ years leading defense, naval, and maritime programs across Europe and the Middle East.",
};

const stats = [
  { value: "20+", label: "Years in Defense & Maritime" },
  { value: "4", label: "Countries of Operation" },
  { value: "13", label: "Roles Across the Value Chain" },
  { value: "4×", label: "Revenue Growth at DNV" },
];

const competencies = [
  { title: "Cross-functional Leadership", desc: "Building and directing diverse, international teams across engineering, sales, and consulting functions." },
  { title: "Program & Project Management", desc: "Large-scale defense and maritime programs from bid to delivery, on time and within scope." },
  { title: "Systems Engineering", desc: "Naval underwater systems, functional integration, technical contract negotiation." },
  { title: "Digital Transformation", desc: "Maritime software solutions, AI implementation, process digitalization for naval and industrial clients." },
  { title: "Auditing & Compliance", desc: "International operational, financial, and compliance audits across defense subsidiaries." },
  { title: "Business Development & Sales Leadership", desc: "P&L ownership, strategic bids, key account management across SEMEA and European markets." },
];

const roles = [
  { title: "Principal Project Manager", company: "Thales", period: "01/2025 – Present", location: "Kiel, Germany", note: "Defense systems program management." },
  { title: "Principal", company: "digitalsalt", period: "03/2020 – 12/2024", location: "Germany", note: "Senior consulting across defense and maritime digitalization programs; naval systems, digital transformation." },
  { title: "Regional Sales Manager EMEA", company: "DNV", period: "04/2014 – 02/2020", location: "Hamburg, Germany", note: "Managed EMEA region; quadrupled annual turnover; led large-scale maritime software bids." },
  { title: "Senior Auditor — Defense", company: "ThyssenKrupp AG", period: "12/2011 – 03/2014", location: "Essen, Germany", note: "Operational, financial, and compliance audits across international defense subsidiaries." },
  { title: "Systems Engineer & Project Manager", company: "ThyssenKrupp Marine Systems", period: "03/2006 – 11/2011", location: "Kiel, Germany", note: "Functional integration and project management for underwater naval systems." },
];

const education = [
  { degree: "Dipl.-Ing. Electrical Engineering", institution: "RWTH Aachen", logo: "/images/logos/rwth-aachen.png", period: "2000–2004", note: "Thesis Grade: 1.3" },
  { degree: "Leadership and Communication — Professional Certificate", institution: "Harvard University", logo: "/images/logos/harvard.png", period: "2024", note: "Online" },
  { degree: "Digital Transformation & Innovation Certificate", institution: "INSEAD", logo: "/images/logos/insead.png", period: "2019", note: "Athens" },
  { degree: "MBA", institution: "FOM University", logo: "/images/logos/fom.png", period: "2010–2012", note: "Finance Grade: 1.0" },
];

export default function HomePage() {
  return (
    <div className="pt-16">

      <VPHero />

      {/* Stats strip */}
      <section className="bg-surface-card border-y border-hairline py-10 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <FadeIn key={s.value}>
              <div className="text-center">
                <p className="font-display text-4xl font-normal text-ink mb-1" style={{ letterSpacing: "-1px" }}>{s.value}</p>
                <p className="text-xs text-muted tracking-wide">{s.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <VPBio />

      {/* Core competencies */}
      <section className="bg-surface-soft py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-xs font-medium tracking-widest uppercase text-muted mb-10">Core Competencies</p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {competencies.map((c, i) => (
              <FadeIn key={c.title} delay={i * 0.07}>
                <div className="bg-canvas border border-hairline rounded-xl p-6 h-full">
                  <h3 className="font-sans text-sm font-semibold text-ink mb-2">{c.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{c.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <VPLogos />

      {/* Experience */}
      <section className="bg-canvas py-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <p className="text-xs font-medium tracking-widest uppercase text-muted mb-10">Experience</p>
          </FadeIn>
          <div className="divide-y divide-hairline">
            {roles.map((r, i) => (
              <FadeIn key={r.company + r.period} delay={i * 0.06}>
                <div className="py-6 grid sm:grid-cols-[1fr_auto] gap-2 items-start">
                  <div>
                    <p className="font-sans text-base font-medium text-ink">{r.title}</p>
                    <p className="text-sm text-primary font-medium">{r.company}</p>
                    <p className="text-sm text-muted mt-1">{r.note}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-sm text-muted whitespace-nowrap">{r.period}</p>
                    <p className="text-xs text-muted">{r.location}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="bg-surface-soft py-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <p className="text-xs font-medium tracking-widest uppercase text-muted mb-10">Education</p>
          </FadeIn>
          <div className="space-y-4">
            {education.map((e, i) => (
              <FadeIn key={e.institution} delay={i * 0.06}>
                <div className="bg-canvas border border-hairline rounded-xl p-5 flex items-center gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-surface-soft flex items-center justify-center overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={e.logo} alt={e.institution} className="w-10 h-10 object-contain" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-sans text-sm font-medium text-ink">{e.degree}</p>
                    <p className="text-sm text-primary font-medium">{e.institution}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-sm text-muted">{e.period}</p>
                    <p className="text-xs text-muted">{e.note}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <SolonQuote />

      {/* Contact strip */}
      <section className="bg-canvas py-20 px-6 md:px-12 text-center">
        <FadeIn>
          <p className="font-display text-3xl font-normal text-ink mb-3" style={{ letterSpacing: "-0.5px" }}>
            Let&apos;s connect.
          </p>
          <p className="text-base text-muted mb-8 max-w-md mx-auto">
            Open to leadership opportunities in defense, naval systems, and maritime.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="/contact" className="inline-flex items-center gap-2 bg-primary text-on-primary text-sm font-medium px-6 py-3 rounded-lg hover:bg-primary-active transition-colors">
              Get in Touch
            </a>
            <a href="https://de.linkedin.com/in/georgios-nanos-7048b25a" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-canvas text-ink text-sm font-medium px-6 py-3 rounded-lg border border-hairline hover:bg-surface-soft transition-colors">
              LinkedIn
            </a>
          </div>
        </FadeIn>
      </section>

    </div>
  );
}
