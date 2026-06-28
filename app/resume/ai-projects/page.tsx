import type { Metadata } from "next";
import SectionBand from "@/components/ui/SectionBand";
import FadeIn from "@/components/ui/FadeIn";
import { aiProjects } from "@/content/projects";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Projects",
  description:
    "8 AI projects by Georgios Nanos — from CI-Identification and Data CoPilot to NTT Data AI Training, led at digitalsalt for naval defense and maritime clients.",
};

export default function AIProjectsPage() {
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
            AI Projects
          </h1>
          <p className="text-base text-muted max-w-xl">
            AI and data science initiatives conceived and led during my tenure at digitalsalt,
            serving naval defense, shipbuilding, and enterprise clients.
          </p>
        </FadeIn>
      </SectionBand>

      <SectionBand card>
        <div className="grid md:grid-cols-2 gap-4">
          {aiProjects.map((project, i) => (
            <FadeIn key={project.id} delay={i * 0.06}>
              <div className="bg-canvas border border-hairline rounded-xl p-6 h-full flex flex-col">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h2 className="font-sans text-base font-medium text-ink">{project.title}</h2>
                  <span className="text-xs text-muted bg-surface-soft px-2 py-0.5 rounded-full whitespace-nowrap flex-shrink-0">
                    {project.type}
                  </span>
                </div>
                <p className="text-sm text-body leading-relaxed mb-4 flex-1">{project.description}</p>
                {project.links && project.links.length > 0 && (
                  <div className="flex flex-wrap gap-3 mt-auto">
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
            </FadeIn>
          ))}
        </div>
      </SectionBand>
    </>
  );
}
