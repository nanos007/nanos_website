import type { Metadata } from "next";
import SectionBand from "@/components/ui/SectionBand";
import FadeIn from "@/components/ui/FadeIn";
import { consultingProjects } from "@/content/projects";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Consulting Projects",
  description:
    "5 consulting projects by Georgios Nanos at digitalsalt — spanning Configuration Management, GAP Analysis, Earned Value Management, Transformation, and Requirements Management for naval defense clients.",
};

const statusColors = {
  Ongoing: "bg-accent-teal text-white",
  Completed: "bg-surface-card text-muted",
  Preparing: "bg-accent-amber text-white",
};

export default function ConsultingProjectsPage() {
  return (
    <>
      <SectionBand>
        <FadeIn>
          <Link href="/resume" className="text-xs text-muted hover:text-ink transition-colors mb-6 inline-block">
            ← Resume
          </Link>
          <p className="text-xs font-medium tracking-widest uppercase text-muted mb-4">
            digitalsalt · 2020–2024
          </p>
          <h1
            className="font-display text-5xl font-normal text-ink mb-4"
            style={{ letterSpacing: "-1px" }}
          >
            Consulting Projects
          </h1>
          <p className="text-base text-muted max-w-xl">
            Naval defense and shipbuilding consulting engagements led during my tenure at digitalsalt.
          </p>
        </FadeIn>
      </SectionBand>

      <SectionBand card>
        <div className="space-y-6">
          {consultingProjects.map((project, i) => (
            <FadeIn key={project.id} delay={i * 0.08}>
              <div className="bg-canvas border border-hairline rounded-xl p-6">
                <div className="flex items-start gap-4 mb-4">
                  <span className="font-display text-4xl font-normal text-hairline leading-none">
                    {project.number}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="font-sans text-base font-medium text-ink">{project.title}</h2>
                      <span
                        className={`text-xs font-medium px-2 py-0.5 rounded-full ${statusColors[project.status]}`}
                      >
                        {project.status}
                      </span>
                    </div>
                    <p className="text-sm text-body leading-relaxed mb-3">{project.description}</p>
                    {project.links && project.links.length > 0 && (
                      <div className="flex flex-wrap gap-3">
                        {project.links.map((link) => (
                          <a
                            key={link.url}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs text-primary hover:text-primary-active transition-colors"
                          >
                            {link.label} <ExternalLink size={12} />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </SectionBand>
    </>
  );
}
