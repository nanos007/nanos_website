import LinkedInIcon from "@/components/ui/LinkedInIcon";

export default function Footer() {
  return (
    <footer className="bg-surface-dark text-on-dark-soft" aria-label="Site footer">
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-display text-lg text-on-dark">
            <span className="text-accent-steel">◆</span> Georgios Nanos
          </p>
          <div className="flex items-center gap-6">
            <a
              href="mailto:georgios.nanos@rwth-aachen.de"
              className="text-xs text-on-dark-soft hover:text-on-dark transition-colors"
            >
              georgios.nanos (at) rwth-aachen.de
            </a>
            <a
              href="https://de.linkedin.com/in/georgios-nanos-7048b25a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-dark-soft hover:text-on-dark transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedInIcon size={16} />
            </a>
          </div>
        </div>
        <p className="text-xs text-on-dark-soft mt-6">
          © 1998–2026 Dipl.-Ing. Georgios Nanos, MBA. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
