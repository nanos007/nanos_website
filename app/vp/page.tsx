import type { Metadata } from "next";
import VPHero from "@/components/vp/VPHero";
import VPBio from "@/components/vp/VPBio";
import VPLogos from "@/components/vp/VPLogos";

export const metadata: Metadata = {
  title: "Georgios Nanos — Defense & Maritime Executive",
  description: "Georgios Nanos — Dipl.-Ing. EE&IT, MBA. 20+ years leading defense, naval, and maritime programs across Europe and the Middle East.",
  robots: { index: false, follow: false },
};

const roles = [
  { title: "Principal Project Manager", company: "Thales", period: "01/2025 – Present", location: "Kiel, Germany", note: "Defense systems program management." },
  { title: "Principal Consultant & Project Manager", company: "digitalsalt", period: "07/2022 – 12/2024", location: "Germany", note: "Senior consulting across defense and maritime digitalization programs." },
  { title: "Senior Consultant", company: "digitalsalt", period: "03/2020 – 06/2022", location: "Germany", note: "Naval and maritime systems consulting." },
  { title: "Sales & Business Development Manager", company: "DNV", period: "04/2014 – 02/2020", location: "Hamburg, Germany", note: "Managed SEMEA region; quadrupled annual turnover; led large-scale maritime software bids." },
  { title: "Senior Auditor", company: "ThyssenKrupp AG", period: "12/2011 – 03/2014", location: "Essen, Germany", note: "Operational, financial, and compliance audits across international defense subsidiaries." },
  { title: "Systems Engineer & Project Manager", company: "ThyssenKrupp Marine Systems", period: "03/2006 – 11/2011", location: "Kiel, Germany", note: "Functional integration and project management for underwater naval systems." },
];

const education = [
  { degree: "Dipl.-Ing. Electrical Engineering & IT", institution: "RWTH Aachen University", period: "1999–2004", note: "Grade: 1.3 (excellent)" },
  { degree: "Leadership and Communication — Professional Certificate", institution: "Harvard University (HarvardX)", period: "2024", note: "Online" },
  { degree: "Digital Transformation & Innovation Certificate", institution: "INSEAD", period: "2019", note: "Athens" },
  { degree: "Master of Business Administration (MBA)", institution: "FOM University", period: "2010–2012", note: "Grade: 1.0 (excellent)" },
];

export default function VPPage() {
  return (
    <div className="pt-16">
      <VPHero />
      <VPBio />
      <VPLogos />

      {/* Slim career */}
      <section className="bg-surface-soft py-16 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-medium tracking-widest uppercase text-muted mb-8">Experience</p>
          <div className="divide-y divide-hairline">
            {roles.map((r) => (
              <div key={r.company + r.period} className="py-5 grid sm:grid-cols-[1fr_auto] gap-2 items-start">
                <div>
                  <p className="font-sans text-sm font-medium text-ink">{r.title}</p>
                  <p className="text-sm text-primary font-medium">{r.company}</p>
                  <p className="text-xs text-muted mt-0.5">{r.note}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-xs text-muted whitespace-nowrap">{r.period}</p>
                  <p className="text-xs text-muted">{r.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Slim education */}
      <section className="bg-canvas py-16 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-medium tracking-widest uppercase text-muted mb-8">Education</p>
          <div className="divide-y divide-hairline">
            {education.map((e) => (
              <div key={e.institution} className="py-5 grid sm:grid-cols-[1fr_auto] gap-2 items-start">
                <div>
                  <p className="font-sans text-sm font-medium text-ink">{e.degree}</p>
                  <p className="text-sm text-primary font-medium">{e.institution}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-xs text-muted whitespace-nowrap">{e.period}</p>
                  <p className="text-xs text-muted">{e.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact strip */}
      <section className="bg-surface-dark text-on-dark py-12 px-6 md:px-12 text-center">
        <p className="font-display text-2xl mb-2">Get in touch</p>
        <p className="text-on-dark-soft text-sm mb-6">Open to leadership opportunities in defense &amp; maritime.</p>
        <a href="/contact" className="inline-flex items-center gap-2 bg-primary text-on-primary text-sm font-medium px-6 py-3 rounded-lg hover:bg-primary-active transition-colors">
          Contact
        </a>
      </section>
    </div>
  );
}
