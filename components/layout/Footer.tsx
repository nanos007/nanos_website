import Link from "next/link";
import LinkedInIcon from "@/components/ui/LinkedInIcon";

const footerLinks = {
  Leadership: [
    { label: "Soft Skills", href: "/leadership/soft-skills" },
    { label: "Tools", href: "/leadership/tools" },
    { label: "Sales", href: "/leadership/sales" },
  ],
  "Research Projects": [
    { label: "Auditor vs. Consultant", href: "/resume/auditor-vs-consultant" },
    { label: "DEEPDOCK Ideation", href: "/resume/deepdock-secure" },
  ],
  Connect: [
    { label: "Contact", href: "/contact" },
    { label: "LinkedIn", href: "https://de.linkedin.com/in/georgios-nanos-7048b25a", external: true },
    { label: "Disclaimer", href: "/disclaimer" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-surface-dark text-on-dark-soft" aria-label="Site footer">
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-16">
        {/* Top: Wordmark + tagline */}
        <div className="mb-12 pb-8 border-b border-surface-dark-elevated">
          <p className="font-display text-2xl text-on-dark mb-2 whitespace-nowrap">
            <span className="text-accent-steel">◆</span> Georgios Nanos
          </p>
          <p className="text-sm text-on-dark-soft">Defense Expert · Naval AI Researcher · MBA</p>
        </div>

        {/* Link grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="text-xs font-medium tracking-widest uppercase text-on-dark mb-4">
                {category}
              </p>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    {"external" in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-on-dark-soft hover:text-on-dark transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-on-dark-soft hover:text-on-dark transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8 border-t border-surface-dark-elevated">
          <p className="text-xs text-on-dark-soft">
            © 1998–2026 Dipl.-Ing. Georgios Nanos, MBA
          </p>

          <div className="flex items-center gap-4">
            <a
              href="mailto:georgios.nanos@rwth-aachen.de"
              className="text-xs text-on-dark-soft hover:text-on-dark transition-colors"
              aria-label="Email Georgios Nanos"
            >
              georgios.nanos (at) rwth-aachen.de
            </a>
            <a
              href="https://de.linkedin.com/in/georgios-nanos-7048b25a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-dark-soft hover:text-on-dark transition-colors"
              aria-label="LinkedIn profile"
            >
              <LinkedInIcon size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
