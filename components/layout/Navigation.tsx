"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  {
    label: "Leadership",
    href: "/leadership",
    children: [
      { label: "Soft Skills", href: "/leadership/soft-skills" },
      { label: "Tools", href: "/leadership/tools" },
      { label: "Sales", href: "/leadership/sales" },
    ],
  },
  { label: "Resume", href: "/resume" },
  {
    label: "Certificates",
    href: "/certificates",
    children: [
      { label: "Shipping", href: "/certificates/shipping" },
      { label: "Digital", href: "/certificates/digital" },
    ],
  },
  { label: "Impressions", href: "/impressions" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
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
        {/* Logo / Wordmark */}
        <Link
          href="/"
          className="font-display text-lg font-medium text-ink hover:text-primary transition-colors"
          aria-label="Georgios Nanos — Home"
        >
          <span className="text-accent-steel">◆</span>{" "}
          <span>Georgios Nanos</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {navItems.map((item) => (
            <li key={item.href} className="relative">
              {item.children ? (
                <div
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      pathname.startsWith(item.href)
                        ? "text-ink bg-surface-card"
                        : "text-muted hover:text-ink hover:bg-surface-soft"
                    }`}
                    aria-expanded={openDropdown === item.label}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        openDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {openDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-1 w-44 bg-canvas border border-hairline rounded-xl shadow-sm py-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block px-4 py-2 text-sm transition-colors ${
                            pathname === child.href
                              ? "text-ink font-medium bg-surface-soft"
                              : "text-muted hover:text-ink hover:bg-surface-soft"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    pathname === item.href
                      ? "text-ink bg-surface-card"
                      : "text-muted hover:text-ink hover:bg-surface-soft"
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-md text-muted hover:text-ink hover:bg-surface-soft transition-colors"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-canvas border-t border-hairline px-6 py-4"
          aria-label="Mobile navigation"
        >
          <p className="text-xs text-muted mb-3">Use tab to navigate through the menu items.</p>
          <ul className="space-y-1" role="list">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    pathname.startsWith(item.href)
                      ? "text-ink bg-surface-card"
                      : "text-muted hover:text-ink"
                  }`}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="ml-4 mt-1 space-y-1" role="list">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className={`block px-3 py-1.5 text-sm rounded-md transition-colors ${
                            pathname === child.href
                              ? "text-ink font-medium"
                              : "text-muted hover:text-ink"
                          }`}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
