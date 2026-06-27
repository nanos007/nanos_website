import type { Metadata } from "next";
import SectionBand from "@/components/ui/SectionBand";
import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";
import { digitalCertificates } from "@/content/certificates";

export const metadata: Metadata = {
  title: "Digital Certificates",
  description:
    "Digital certifications in AI Engineering, Data Science, Cybersecurity, Blockchain, and Digital Marketing from Coursera, Udemy, and Google.",
};

const categoryOrder = ["Data Science & AI", "Cybersecurity", "Marketing", "Blockchain"];

export default function DigitalCertificatesPage() {
  const grouped = categoryOrder.reduce<Record<string, typeof digitalCertificates>>(
    (acc, cat) => {
      acc[cat] = digitalCertificates.filter((c) => c.category === cat);
      return acc;
    },
    {}
  );

  return (
    <>
      <SectionBand>
        <FadeIn>
          <Link href="/certificates" className="text-xs text-muted hover:text-ink transition-colors mb-6 inline-block">
            ← Certificates
          </Link>
          <p className="text-xs font-medium tracking-widest uppercase text-muted mb-4">
            Coursera · Udemy · Google
          </p>
          <h1
            className="font-display text-5xl font-normal text-ink mb-4"
            style={{ letterSpacing: "-1px" }}
          >
            Digital Certificates
          </h1>
          <p className="text-base text-muted max-w-xl">
            Ongoing professional development in AI, data science, cybersecurity, and blockchain —
            part of a commitment to continuous learning since 2010.
          </p>
        </FadeIn>
      </SectionBand>

      <SectionBand card>
        <div className="space-y-10">
          {categoryOrder.map((category, ci) => {
            const certs = grouped[category];
            if (!certs || certs.length === 0) return null;
            return (
              <FadeIn key={category} delay={ci * 0.08}>
                <div>
                  <p className="text-xs font-medium tracking-widest uppercase text-muted mb-4">
                    {category}
                  </p>
                  <div className="space-y-2">
                    {certs.map((cert) => (
                      <div
                        key={cert.id}
                        className="flex items-center justify-between bg-canvas border border-hairline rounded-lg px-5 py-3"
                      >
                        <span className="text-sm text-ink">{cert.name}</span>
                        <span className="text-xs text-muted flex-shrink-0 ml-4">{cert.issuer}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </SectionBand>
    </>
  );
}
