import type { Metadata } from "next";
import SectionBand from "@/components/ui/SectionBand";
import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";
import { shippingCertificates } from "@/content/certificates";

export const metadata: Metadata = {
  title: "Shipping Certificates",
  description:
    "Maritime and shipping industry certifications including DNV GL programs in HSE, compliance, information security, and maritime operations.",
};

export default function ShippingCertificatesPage() {
  return (
    <>
      <SectionBand>
        <FadeIn>
          <Link href="/certificates" className="text-xs text-muted hover:text-ink transition-colors mb-6 inline-block">
            ← Certificates
          </Link>
          <p className="text-xs font-medium tracking-widest uppercase text-muted mb-4">
            DNV GL · Maritime
          </p>
          <h1
            className="font-display text-5xl font-normal text-ink mb-4"
            style={{ letterSpacing: "-1px" }}
          >
            Shipping Certificates
          </h1>
          <p className="text-base text-muted max-w-xl">
            Professional certifications in maritime operations, HSE, compliance, and information
            security — primarily issued by DNV GL during my tenure as Regional Sales Manager.
          </p>
        </FadeIn>
      </SectionBand>

      <SectionBand card>
        <div className="space-y-2">
          {shippingCertificates.map((cert, i) => (
            <FadeIn key={cert.id} delay={i * 0.03}>
              <div className="flex items-center justify-between bg-canvas border border-hairline rounded-lg px-5 py-3">
                <span className="text-sm text-ink">{cert.name}</span>
                <span className="text-xs text-muted flex-shrink-0 ml-4">{cert.issuer}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </SectionBand>
    </>
  );
}
