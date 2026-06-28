"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
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
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  function openMenu(label: string) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(label);
  }

  function scheduleClose() {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 150);
  }

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
        {/* Logo */}
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
                  onMouseEnter={() => openMenu(item.label)}
                  onMouseLeave={scheduleClose}
                >
                  {/* Label navigates to hub; chevron toggles dropdown */}
                  <div className={`flex items-center rounded-md transition-colors ${
                    pathname.startsWith(item.href)
                      ? "text-ink bg-surface-card"
                      : "text-muted hover:text-ink hover:bg-surface-soft"
                  }`}>
                    <Link
                      href={item.href}
                      className="pl-3 pr-1 py-2 text-sm font-medium"
                    >
                      {item.label}
                    </Link>
                    <button
                      onClick={() =>
                        setOpenDropdown(openDropdown === item.label ? null : item.label)
                      }
                      className="pr-2 py-2 text-sm"
                      aria-expanded={openDropdown === item.label}
                      aria-haspopup="true"
                      aria-label={`${item.label} submenu`}
                    >
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          openDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>

                  {openDropdown === item.label && (
                    <div
                      className="absolute top-full left-0 mt-1 w-44 bg-canvas border border-hairline rounded-xl shadow-sm py-1"
                      onMouseEnter={() => openMenu(item.label)}
                      onMouseLeave={scheduleClose}
                    >
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
          <ul className="space-y-1" role="list">
            {navItems.map((item) => (
              <li key={item.href}>
                {item.children ? (
                  <>
                    <div className="flex items-center rounded-md">
                      <Link
                        href={item.href}
                        className={`flex-1 px-3 py-2 text-sm font-medium rounded-l-md transition-colors ${
                          pathname.startsWith(item.href)
                            ? "text-ink bg-surface-card"
                            : "text-muted hover:text-ink"
                        }`}
                      >
                        {item.label}
                      </Link>
                      <button
                        onClick={() =>
                          setMobileExpanded(
                            mobileExpanded === item.label ? null : item.label
                          )
                        }
                        className={`px-3 py-2 text-sm rounded-r-md transition-colors ${
                          pathname.startsWith(item.href)
                            ? "text-ink bg-surface-card"
                            : "text-muted hover:text-ink"
                        }`}
                        aria-label={`Expand ${item.label}`}
                      >
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-200 ${
                            mobileExpanded === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>
                    {mobileExpanded === item.label && (
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
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      pathname === item.href
                        ? "text-ink bg-surface-card"
                        : "text-muted hover:text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
