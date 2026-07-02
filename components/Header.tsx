"use client";

import { useState } from "react";

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why Us" },
  { href: "#work", label: "Case Studies" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__inner">
        <a href="#top" className="header__logo" aria-label="AdsXtreme home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/adsxtreme-logo.png" alt="AdsXtreme" />
        </a>
        <nav className="nav" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="header__actions">
          <a href="#contact" className="btn-audit">
            Get Free Audit
          </a>
          <button
            className="burger"
            aria-label="Menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="mobile-menu">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)}>
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-audit"
            onClick={() => setMobileOpen(false)}
          >
            Get Free Audit
          </a>
        </div>
      )}
    </header>
  );
}
