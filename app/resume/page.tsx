import type { Metadata } from "next";
import SectionBand from "@/components/ui/SectionBand";
import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resume — Georgios Nanos",
  description: "Career overview of Georgios Nanos — 20+ years across defense, naval systems, and maritime.",
};

const roles = [
  {
    title: "Principal Project Manager",
    company: "Thales",
    url: "https://www.thalesgroup.com/en",
    period: "01/2025 – Present",
    location: "Kiel, Germany",
    note: "Defense systems program management.",
  },
  {
    title: "Principal Consultant & Project Manager",
    company: "digitalsalt",
    url: "https://www.digitalsalt.de",
    period: "07/2022 – 12/2024",
    location: "Germany",
    note: "Senior consulting across defense and maritime digitalization programs.",
  },
  {
    title: "Senior Consultant",
    company: "digitalsalt",
    url: "https://www.digitalsalt.de",
    period: "03/2020 – 06/2022",
    location: "Germany",
    note: "Naval and maritime systems consulting.",
  },
  {
    title: "Sales & Business Development Manager",
    company: "DNV",
    url: "https://www.dnv.com",
    period: "04/2014 – 02/2020",
    location: "Hamburg, Germany",
    note: "Managed the SEMEA region; quadrupled annual turnover; led large-scale maritime software bids.",
  },
  {
    title: "Senior Auditor",
    company: "ThyssenKrupp AG",
    url: "https://www.thyssenkrupp.com",
    period: "12/2011 – 03/2014",
    location: "Essen, Germany",
    note: "Operational, financial, and compliance audits across international defense subsidiaries.",
  },
  {
    title: "Systems Engineer & Project Manager",
    company: "ThyssenKrupp Marine Systems",
    url: "https://www.thyssenkrupp-marinesystems.com",
    period: "03/2006 – 11/2011",
    location: "Kiel, Germany",
    note: "Functional integration and project management for underwater naval systems.",
  },
];

const education = [
  { degree: "Dipl.-Ing. Electrical Engineering & IT", institution: "RWTH Aachen University", period: "1999–2004", note: "Grade: 1.3 (excellent)" },
  { degree: "Leadership and Communication — Professional Certificate", institution: "Harvard University (HarvardX)", period: "2024", note: "Online" },
  { degree: "Digital Transformation & Innovation Certificate", institution: "INSEAD", period: "2019", note: "Athens" },
  { degree: "Master of Business Administration (MBA)", institution: "FOM University", period: "2010–2012", note: "Grade: 1.0 (excellent)" },
];

export default function ResumePage() {
  return (
    <>
      <SectionBand>
        <FadeIn>
          <p className="text-xs font-medium tracking-widest uppercase text-muted mb-4">
            Career Overview
          </p>
          <h1
            className="font-display text-5xl font-normal text-ink mb-4"
            style={{ letterSpacing: "-1px" }}
          >
            Resume
          </h1>
          <p className="text-base text-muted max-w-xl">
            20+ years across defense, naval systems, maritime, and digital solutions.
          </p>
        </FadeIn>
      </SectionBand>

      {/* Experience */}
      <SectionBand card>
        <FadeIn>
          <h2 className="font-display text-3xl font-normal text-ink mb-10" style={{ letterSpacing: "-0.5px" }}>
            Experience
          </h2>
        </FadeIn>
        <div className="space-y-0 divide-y divide-hairline">
          {roles.map((role, i) => (
            <FadeIn key={role.company + role.period} delay={i * 0.06}>
              <div className="py-6 grid sm:grid-cols-[1fr_auto] gap-1 sm:gap-8 items-start">
                <div>
                  <p className="font-sans text-base font-medium text-ink">{role.title}</p>
                  <a
                    href={role.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:text-primary-active transition-colors font-medium"
                  >
                    {role.company}
                  </a>
                  <p className="text-sm text-muted mt-1">{role.note}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-sm text-muted whitespace-nowrap">{role.period}</p>
                  <p className="text-xs text-muted">{role.location}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </SectionBand>

      {/* Education */}
      <SectionBand>
        <FadeIn>
          <h2 className="font-display text-3xl font-normal text-ink mb-10" style={{ letterSpacing: "-0.5px" }}>
            Education
          </h2>
        </FadeIn>
        <div className="space-y-0 divide-y divide-hairline">
          {education.map((ed, i) => (
            <FadeIn key={ed.institution} delay={i * 0.06}>
              <div className="py-6 grid sm:grid-cols-[1fr_auto] gap-1 sm:gap-8 items-start">
                <div>
                  <p className="font-sans text-base font-medium text-ink">{ed.degree}</p>
                  <p className="text-sm text-primary font-medium">{ed.institution}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-sm text-muted whitespace-nowrap">{ed.period}</p>
                  <p className="text-xs text-muted">{ed.note}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </SectionBand>

      <SectionBand card>
        <FadeIn>
          <p className="text-sm text-muted text-center">
            For a detailed career timeline, project history, and certifications, visit{" "}
            <Link href="https://www.nanos.work" className="text-primary hover:underline">
              nanos.work
            </Link>
          </p>
        </FadeIn>
      </SectionBand>
    </>
  );
}
