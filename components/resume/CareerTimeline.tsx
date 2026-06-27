import Image from "next/image";
import Link from "next/link";
import { career, CareerEntry } from "@/content/career";
import FadeIn from "@/components/ui/FadeIn";
import { ExternalLink } from "lucide-react";

const countryNames: Record<string, string> = {
  DE: "Germany",
  AU: "Australia",
  GR: "Greece",
  MT: "Malta",
  NO: "Norway",
  CY: "Cyprus",
  IT: "Italy",
  ES: "Spain",
  PT: "Portugal",
  FR: "France",
  HR: "Croatia",
  TR: "Turkey",
  EG: "Egypt",
  AE: "UAE",
  QA: "Qatar",
  SE: "Sweden",
  HU: "Hungary",
  SG: "Singapore",
  ZA: "South Africa",
};

const typeColors: Record<CareerEntry["type"], string> = {
  work: "bg-accent-steel",
  research: "bg-accent-teal",
  military: "bg-muted",
  entrepreneurial: "bg-accent-amber",
  academic: "bg-surface-card border border-hairline",
};

export default function CareerTimeline() {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-hairline" aria-hidden />

      <div className="space-y-8">
        {career.map((entry, i) => (
          <FadeIn key={entry.id} delay={i * 0.04}>
            <div className="relative flex gap-8 md:gap-12">
              {/* Dot */}
              <div
                className={`relative z-10 flex-shrink-0 w-8 md:w-12 flex items-start pt-1`}
              >
                <div
                  className={`w-3 h-3 rounded-full mt-1 ${typeColors[entry.type]}`}
                  title={entry.type}
                />
              </div>

              {/* Card */}
              <div className="flex-1 bg-canvas border border-hairline rounded-xl p-6 mb-0">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  {/* Logo */}
                  <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-surface-soft flex items-center justify-center overflow-hidden">
                    <Image
                      src={entry.logo}
                      alt={entry.company}
                      width={56}
                      height={56}
                      className="object-contain w-14 h-14"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="font-sans text-base font-medium text-ink">{entry.role}</h3>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <a
                        href={entry.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:text-primary-active transition-colors font-medium"
                      >
                        {entry.company}
                      </a>
                      <span className="text-muted-soft text-sm">·</span>
                      <span className="text-sm text-muted">{entry.location}</span>

                      {/* Flags */}
                      {entry.countries.slice(0, 5).map((code) => (
                        <span
                          key={code}
                          title={countryNames[code] || code}
                          className="text-base"
                          aria-label={countryNames[code] || code}
                        >
                          <Image
                            src={`/images/flags/${code.toLowerCase()}.png`}
                            alt={countryNames[code] || code}
                            width={20}
                            height={14}
                            className="inline-block rounded-sm"
                          />
                        </span>
                      ))}
                      {entry.countries.length > 5 && (
                        <span className="text-xs text-muted">+{entry.countries.length - 5} more</span>
                      )}
                    </div>

                    <p className="text-xs text-muted mb-3">
                      {entry.startDate} – {entry.endDate} · {entry.duration}
                    </p>

                    <p className="text-sm text-body leading-relaxed mb-3">{entry.description}</p>

                    {entry.links && entry.links.length > 0 && (
                      <div className="flex flex-wrap gap-3">
                        {entry.links.map((link) => (
                          link.url.startsWith("http") ? (
                            <a
                              key={link.url}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-xs text-primary hover:text-primary-active transition-colors"
                            >
                              {link.label} <ExternalLink size={12} />
                            </a>
                          ) : (
                            <Link
                              key={link.url}
                              href={link.url}
                              className="inline-flex items-center gap-1 text-xs text-primary hover:text-primary-active transition-colors"
                            >
                              {link.label} →
                            </Link>
                          )
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
