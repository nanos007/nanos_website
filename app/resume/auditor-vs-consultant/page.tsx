import type { Metadata } from "next";
import SectionBand from "@/components/ui/SectionBand";
import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Auditor vs. Consultant",
  description:
    "A comparative analysis of the Internal Auditor and Management Consultant roles — their objectives, approaches, and work distribution.",
};

const comparisonRows = [
  {
    dimension: "Main Objective",
    auditor: "Compliance, risk identification, and process improvement",
    consultant: "Strategy development and implementation",
  },
  {
    dimension: "Analytical Approach",
    auditor: "Analysis of internal systems and compliance with standards",
    consultant: "Market, competition, and corporate strategy analysis",
  },
  {
    dimension: "Communication",
    auditor: "Reporting on internal processes and audit findings",
    consultant: "Communicating market strategies and competitive positioning",
  },
  {
    dimension: "Change Management",
    auditor: "Leading implementation of internal process improvements",
    consultant: "Driving strategic change across the organization",
  },
  {
    dimension: "Focus",
    auditor: "Controls, standards, and regulatory compliance",
    consultant: "Market trends, innovation, and strategic opportunities",
  },
];

const workDistribution = [
  { label: "Strategy", auditor: "5%", consultant: "40%" },
  { label: "Anomalies / Analysis", auditor: "60%", consultant: "20%" },
  { label: "Formulation", auditor: "30%", consultant: "20%" },
  { label: "Implementation", auditor: "5%", consultant: "20%" },
];

export default function AuditorVsConsultantPage() {
  return (
    <>
      <SectionBand>
        <FadeIn>
          <Link href="/resume" className="text-xs text-muted hover:text-ink transition-colors mb-6 inline-block">
            ← Resume
          </Link>
          <p className="text-xs font-medium tracking-widest uppercase text-muted mb-4">
            ThyssenKrupp AG · digitalsalt
          </p>
          <h1
            className="font-display text-5xl font-normal text-ink mb-4"
            style={{ letterSpacing: "-1px" }}
          >
            Auditor vs. Consultant
          </h1>
          <p className="text-base text-muted max-w-xl">
            A comparative analysis born from direct experience as both an Internal Auditor at
            ThyssenKrupp AG and a Management Consultant at digitalsalt.
          </p>
        </FadeIn>
      </SectionBand>

      <SectionBand card>
        <FadeIn>
          <h2
            className="font-display text-3xl font-normal text-ink mb-6"
            style={{ letterSpacing: "-0.5px" }}
          >
            Definition
          </h2>
          <div className="bg-canvas border border-hairline rounded-xl p-6 max-w-3xl">
            <p className="text-sm font-medium text-ink mb-2">Internal Auditing</p>
            <p className="text-sm text-body leading-relaxed">
              Internal Auditing is an independent, objective review and advisory process, aimed at
              adding value to an organization and improving its operations. It involves systematic
              evaluation of business processes, controls, and risk management — determining
              effectiveness, compliance with policies and regulations, and support for organizational
              objectives. Internal auditors function as both controllers and advisors, recommending
              process optimization and risk mitigation.
            </p>
          </div>
        </FadeIn>
      </SectionBand>

      <SectionBand>
        <FadeIn>
          <h2
            className="font-display text-3xl font-normal text-ink mb-8"
            style={{ letterSpacing: "-0.5px" }}
          >
            Side-by-Side Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-4 text-muted font-medium border-b border-hairline w-1/4">
                    Dimension
                  </th>
                  <th className="text-left p-4 text-ink font-medium border-b border-hairline">
                    Auditor
                  </th>
                  <th className="text-left p-4 text-ink font-medium border-b border-hairline">
                    Consultant
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.dimension} className={i % 2 === 0 ? "bg-canvas" : "bg-surface-soft"}>
                    <td className="p-4 text-muted font-medium align-top">{row.dimension}</td>
                    <td className="p-4 text-body leading-relaxed align-top">{row.auditor}</td>
                    <td className="p-4 text-body leading-relaxed align-top">{row.consultant}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>
      </SectionBand>

      <SectionBand card>
        <FadeIn>
          <h2
            className="font-display text-3xl font-normal text-ink mb-8"
            style={{ letterSpacing: "-0.5px" }}
          >
            Work Distribution
          </h2>
          <div className="space-y-4 max-w-2xl">
            {workDistribution.map((row) => (
              <div key={row.label}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-ink font-medium">{row.label}</span>
                  <div className="flex gap-6">
                    <span className="text-muted">Auditor: {row.auditor}</span>
                    <span className="text-accent-steel font-medium">
                      Consultant: {row.consultant}
                    </span>
                  </div>
                </div>
                <div className="h-2 bg-hairline rounded-full overflow-hidden flex">
                  <div
                    className="h-full bg-muted-soft rounded-full"
                    style={{ width: row.auditor }}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted mt-6 max-w-lg">
            Both roles increase company value and improve efficiency. Both require strong analytical
            skills, effective communication to senior management, and navigating resistance to
            change.
          </p>
        </FadeIn>
      </SectionBand>
    </>
  );
}
