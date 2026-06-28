"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-canvas transition-shadow duration-300 ${
        scrolled ? "shadow-[0_1px_3px_rgba(20,20,19,0.08)]" : "border-b border-hairline"
      }`}
      role="banner"
    >
      <nav
        className="max-w-5xl mx-auto flex items-center justify-between h-16 px-6 md:px-12"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="font-display text-lg font-medium text-ink hover:text-primary transition-colors"
          aria-label="Georgios Nanos — Home"
        >
          <span className="text-accent-steel">◆</span>{" "}
          <span>Georgios Nanos</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/resume"
            className={`text-sm font-medium px-3 py-2 rounded-md transition-colors ${
              pathname === "/resume"
                ? "text-ink bg-surface-card"
                : "text-muted hover:text-ink hover:bg-surface-soft"
            }`}
          >
            Resume
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary text-on-primary text-sm font-medium px-4 py-2 rounded-lg hover:bg-primary-active transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-md text-muted hover:text-ink hover:bg-surface-soft transition-colors"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-canvas border-t border-hairline px-6 py-4 space-y-1">
          <Link
            href="/resume"
            className="block px-3 py-2 text-sm font-medium rounded-md text-muted hover:text-ink hover:bg-surface-soft transition-colors"
          >
            Resume
          </Link>
          <Link
            href="/contact"
            className="block px-3 py-2 text-sm font-medium rounded-md text-muted hover:text-ink hover:bg-surface-soft transition-colors"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
