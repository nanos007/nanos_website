import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import { ArrowRight } from "lucide-react";

interface Card {
  title: string;
  description: string;
  href: string;
  external?: boolean;
}

const mainCards: Card[] = [
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
    title: "Contact",
    description: "Looking forward to connecting via email or LinkedIn.",
    href: "/contact",
  },
];

const moreCards: Card[] = [
  {
    title: "Certificates",
    description: "Maritime compliance, AI engineering, cybersecurity, and blockchain credentials.",
    href: "/certificates",
  },
  {
    title: "Research Initiative",
    description: "DEEPDOCK — autonomous maritime systems research combining AI, perception, and control.",
    href: "http://www.deepdock.xyz",
    external: true,
  },
  {
    title: "Impressions",
    description: "A visual record of moments, places, and people from across my career.",
    href: "/impressions",
  },
];

const cardClass =
  "group block bg-surface-card rounded-xl p-6 hover:bg-surface-cream-strong transition-colors h-full";

function CardItem({ card }: { card: Card }) {
  const inner = (
    <>
      <h3 className="font-sans text-base font-medium text-ink mb-2">{card.title}</h3>
      <p className="text-sm text-muted leading-relaxed mb-4">{card.description}</p>
      <span className="inline-flex items-center gap-1 text-sm text-primary font-medium group-hover:gap-2 transition-all">
        Explore <ArrowRight size={14} />
      </span>
    </>
  );

  return card.external ? (
    <a href={card.href} target="_blank" rel="noopener noreferrer" className={cardClass}>
      {inner}
    </a>
  ) : (
    <Link href={card.href} className={cardClass}>
      {inner}
    </Link>
  );
}

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

        <div className="grid sm:grid-cols-3 gap-4 mb-6">
          {mainCards.map((card, i) => (
            <FadeIn key={card.href} delay={i * 0.08}>
              <CardItem card={card} />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.28}>
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-muted mt-10 mb-4">
            More
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-3 gap-4">
          {moreCards.map((card, i) => (
            <FadeIn key={card.href} delay={0.32 + i * 0.08}>
              <CardItem card={card} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
