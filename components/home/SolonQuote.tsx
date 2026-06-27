import FadeIn from "@/components/ui/FadeIn";

export default function SolonQuote() {
  return (
    <section className="bg-surface-dark py-24 px-6 md:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <FadeIn>
          <blockquote>
            <p
              className="font-display text-3xl md:text-4xl font-normal text-on-dark mb-4"
              style={{ letterSpacing: "-0.5px", lineHeight: 1.25 }}
              lang="el"
            >
              «Γηράσκω δ&apos; αιεί πολλά διδασκόμενος»
            </p>
            <p className="text-on-dark-soft text-sm mb-6">— Σόλων · 600 π.Χ.</p>
            <p
              className="font-display text-2xl md:text-3xl font-normal text-on-dark-soft italic"
              style={{ letterSpacing: "-0.3px" }}
            >
              &ldquo;As I grow older, I constantly learn more.&rdquo;
            </p>
            <footer className="mt-4 text-on-dark-soft text-sm">
              — Solon · 600 B.C.
            </footer>
          </blockquote>
        </FadeIn>
      </div>
    </section>
  );
}
