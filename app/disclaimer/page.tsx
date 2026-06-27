import type { Metadata } from "next";
import SectionBand from "@/components/ui/SectionBand";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Legal disclaimer for the personal website of Georgios Nanos.",
};

export default function DisclaimerPage() {
  return (
    <>
      <SectionBand>
        <FadeIn>
          <p className="text-xs font-medium tracking-widest uppercase text-muted mb-4">Legal</p>
          <h1
            className="font-display text-5xl font-normal text-ink mb-4"
            style={{ letterSpacing: "-1px" }}
          >
            Disclaimer
          </h1>
        </FadeIn>
      </SectionBand>

      <SectionBand card>
        <FadeIn>
          <div className="max-w-3xl prose prose-sm text-body leading-relaxed space-y-6">
            <div>
              <h2 className="font-sans text-base font-medium text-ink mb-3">
                Personal Website
              </h2>
              <p>
                This is a personal website of Georgios Nanos. All views and opinions expressed on
                this website are personal interpretations and do not represent the official positions
                of any organization with which I am or have been affiliated.
              </p>
            </div>

            <div>
              <h2 className="font-sans text-base font-medium text-ink mb-3">
                Employment Disclosure
              </h2>
              <p>
                I am currently employed full-time by THALES. This website is operated independently
                and is not affiliated with, endorsed by, or representative of THALES in any capacity.
                Any content related to my professional experience is based on publicly available
                information and my personal perspective.
              </p>
            </div>

            <div>
              <h2 className="font-sans text-base font-medium text-ink mb-3">
                Non-Affiliation
              </h2>
              <p>
                This website is not affiliated with or endorsed by RWTH Aachen University, NATO,
                INSEAD, or any other institution referenced herein. References to these organizations
                appear solely in the context of describing educational and professional history.
              </p>
            </div>

            <div>
              <h2 className="font-sans text-base font-medium text-ink mb-3">DEEPDOCK</h2>
              <p>
                The website deepdock.xyz represents a personal research initiative conducted
                entirely outside of work obligations, during free time. DEEPDOCK is a non-profit,
                non-commercial project. It is not affiliated with any employer, defense organization,
                or government entity.
              </p>
            </div>

            <div>
              <h2 className="font-sans text-base font-medium text-ink mb-3">
                Copyright &amp; Trademarks
              </h2>
              <p>
                Company names, logos, and trademarks referenced on this website (including but not
                limited to Thales, DNV, ThyssenKrupp, RWTH, INSEAD, NATO, and others) are the
                property of their respective owners. They are referenced for informational and
                educational purposes only. No endorsement is implied by their appearance on this
                website.
              </p>
            </div>

            <div>
              <h2 className="font-sans text-base font-medium text-ink mb-3">
                Accuracy of Information
              </h2>
              <p>
                While every effort has been made to ensure the accuracy of the information provided
                on this website, no warranty is given as to its completeness or currency. The
                content is subject to change without notice.
              </p>
            </div>

            <div className="border-t border-hairline pt-6">
              <p className="text-muted-soft text-xs">
                © 1998–2026 Dipl.-Ing. Georgios Nanos, MBA. All rights reserved.
              </p>
            </div>
          </div>
        </FadeIn>
      </SectionBand>
    </>
  );
}
