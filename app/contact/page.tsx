import type { Metadata } from "next";
import SectionBand from "@/components/ui/SectionBand";
import FadeIn from "@/components/ui/FadeIn";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Georgios Nanos via email or LinkedIn.",
};

export default function ContactPage() {
  return (
    <>
      <SectionBand>
        <FadeIn>
          <p className="text-xs font-medium tracking-widest uppercase text-muted mb-4">
            Get in Touch
          </p>
          <h1
            className="font-display text-5xl font-normal text-ink mb-4"
            style={{ letterSpacing: "-1px" }}
          >
            Contact
          </h1>
          <p className="text-base text-muted max-w-xl">
            Looking forward to hearing from you. Fill out the form or reach out directly.
          </p>
        </FadeIn>
      </SectionBand>

      <SectionBand card>
        <FadeIn>
          <ContactForm />
        </FadeIn>
      </SectionBand>
    </>
  );
}
