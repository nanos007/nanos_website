import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import { ArrowRight } from "lucide-react";

const cards = [
  {
    title: "Leadership",
    description: "6 core soft skills, 12 business tools, and the Challenger Sale methodology.",
    href: "/leadership",
  },
  {
    title: "Resume",
    description: "Interactive career timeline spanning 13 positions across naval defense and tech.",
    href: "/resume",
  },
  {
    title: "Certificates",
    description: "Maritime compliance, AI engineering, cybersecurity, and blockchain credentials.",
    href: "/certificates",
  },
  {
    title: "Contact",
    description: "Looking forward to connecting via email or LinkedIn.",
    href: "/contact",
  },
];

export default function CTACards() {
  return (
    <section className="bg-canvas py-24 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h2
            className="font-display text-3xl font-normal text-ink mb-12"
            style={{ letterSpacing: "-0.5px" }}
          >
            Explore
          </h2>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card, i) => (
            <FadeIn key={card.href} delay={i * 0.08}>
              <Link
                href={card.href}
                className="group block bg-surface-card rounded-xl p-6 hover:bg-surface-cream-strong transition-colors h-full"
              >
                <h3 className="font-sans text-base font-medium text-ink mb-2">{card.title}</h3>
                <p className="text-sm text-muted leading-relaxed mb-4">{card.description}</p>
                <span className="inline-flex items-center gap-1 text-sm text-primary font-medium group-hover:gap-2 transition-all">
                  Explore <ArrowRight size={14} />
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
