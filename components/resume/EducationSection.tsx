import Image from "next/image";
import { education } from "@/content/education";
import FadeIn from "@/components/ui/FadeIn";
import { ExternalLink } from "lucide-react";

export default function EducationSection() {
  return (
    <div className="space-y-6">
      {education.map((entry, i) => (
        <FadeIn key={entry.id} delay={i * 0.08}>
          <div className="bg-canvas border border-hairline rounded-xl p-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-surface-soft flex items-center justify-center overflow-hidden">
                <Image
                  src={entry.logo}
                  alt={entry.institution}
                  width={56}
                  height={56}
                  className="object-contain w-14 h-14"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-sans text-base font-medium text-ink mb-1">{entry.degree}</h3>
                <a
                  href={entry.institutionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:text-primary-active transition-colors font-medium"
                >
                  {entry.institution}
                </a>
                <p className="text-xs text-muted mt-1 mb-3">
                  {entry.location} · {entry.startYear}–{entry.endYear} ({entry.duration})
                  {entry.grade && ` · Grade: ${entry.grade}`}
                </p>
                <p className="text-sm text-body leading-relaxed mb-3">{entry.details}</p>
                {entry.links && entry.links.length > 0 && (
                  <div className="flex flex-wrap gap-3">
                    {entry.links.map((link) => (
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
      <FadeIn delay={0.32}>
        <div className="bg-surface-soft rounded-xl p-6">
          <p className="font-sans text-sm font-medium text-ink mb-1">
            Professional Development &amp; Online Courses
          </p>
          <p className="text-xs text-muted mb-2">Various Platforms · 2010–Present (15 yrs)</p>
          <p className="text-sm text-body">
            Ongoing learning across Digital, AI, Data Science, Blockchain, Cybersecurity, Maritime,
            Safety, and Compliance.
          </p>
        </div>
      </FadeIn>
    </div>
  );
}
