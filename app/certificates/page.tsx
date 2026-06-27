import type { Metadata } from "next";
import SectionBand from "@/components/ui/SectionBand";
import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Certificates",
  description:
    "Professional certifications in shipping & maritime compliance (DNV GL), data science, AI, cybersecurity, and blockchain.",
};

const hubCards = [
  {
    title: "Shipping",
    description:
      "20 maritime and shipping industry certifications — DNV GL programs covering HSE, compliance, information security, and maritime operations.",
    href: "/certificates/shipping",
    logo: "/images/logos/dnv.png",
  },
  {
    title: "Digital",
    description:
      "12 digital certifications in AI Engineering, Data Science, Cybersecurity, Blockchain, and Digital Marketing.",
    href: "/certificates/digital",
    logo: null,
  },
];

const featuredCerts = [
  { name: "Dipl.-Ing. EE&IT", institution: "RWTH Aachen", logo: "/images/logos/rwth-aachen.png" },
  { name: "MBA", institution: "FOM University", logo: "/images/logos/fom.png" },
  {
    name: "Leading Digital Transformation",
    institution: "INSEAD",
    logo: "/images/logos/insead.png",
  },
];

export default function CertificatesPage() {
  return (
    <>
      <SectionBand>
        <FadeIn>
          <p className="text-xs font-medium tracking-widest uppercase text-muted mb-4">
            Credentials
          </p>
          <h1
            className="font-display text-5xl font-normal text-ink mb-4"
            style={{ letterSpacing: "-1px" }}
          >
            Certificates
          </h1>
          <p className="text-base text-muted max-w-xl">
            Academic degrees and professional certifications spanning maritime compliance, digital
            transformation, AI, and cybersecurity.
          </p>
        </FadeIn>
      </SectionBand>

      {/* Featured degrees */}
      <SectionBand card>
        <FadeIn>
          <p className="text-xs font-medium tracking-widest uppercase text-muted mb-6">
            Academic Degrees
          </p>
        </FadeIn>
        <div className="flex flex-wrap gap-4 mb-12">
          {featuredCerts.map((cert, i) => (
            <FadeIn key={cert.name} delay={i * 0.08}>
              <div className="flex items-center gap-3 bg-canvas border border-hairline rounded-xl px-4 py-3">
                <Image
                  src={cert.logo}
                  alt={cert.institution}
                  width={40}
                  height={40}
                  className="object-contain h-10 w-auto"
                />
                <div>
                  <p className="text-sm font-medium text-ink">{cert.name}</p>
                  <p className="text-xs text-muted">{cert.institution}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <p className="text-xs font-medium tracking-widest uppercase text-muted mb-6">
            Professional Certifications
          </p>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-4">
          {hubCards.map((card, i) => (
            <FadeIn key={card.href} delay={i * 0.1}>
              <Link
                href={card.href}
                className="group block bg-canvas border border-hairline rounded-xl p-6 hover:bg-surface-soft transition-colors"
              >
                <h2 className="font-sans text-base font-medium text-ink mb-2">{card.title}</h2>
                <p className="text-sm text-muted leading-relaxed mb-4">{card.description}</p>
                <span className="inline-flex items-center gap-1 text-sm text-primary font-medium group-hover:gap-2 transition-all">
                  View all <ArrowRight size={14} />
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </SectionBand>
    </>
  );
}
