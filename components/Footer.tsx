const SERVICE_LINKS = [
  "PPC & Sponsored Ads",
  "PPC Audit & Strategy",
  "Listing Optimization",
  "A+ Content & Brand Store",
  "Flat-File & Variations",
];

const COMPANY_LINKS = [
  { href: "#why", label: "Why AdsXtreme" },
  { href: "#work", label: "Case Studies" },
  { href: "#process", label: "Our Process" },
  { href: "#faq", label: "FAQ" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="footer__logo"
            src="/assets/adsxtreme-logo-allwhite.png"
            alt="AdsXtreme"
          />
          <p className="footer__about">
            Your unfair advantage on Amazon. Senior PPC &amp; catalog management
            that scales brands profitably.
          </p>
          <a href="mailto:info@adsxtreme.com" className="footer__email">
            info@adsxtreme.com
          </a>
        </div>
        <div>
          <div className="footer__col-title">Services</div>
          <div className="footer__links">
            {SERVICE_LINKS.map((label) => (
              <a href="#services" key={label}>
                {label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <div className="footer__col-title">Company</div>
          <div className="footer__links">
            {COMPANY_LINKS.map((l) => (
              <a href={l.href} key={l.href}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <div className="footer__col-title">Get started</div>
          <a href="#contact" className="btn-audit">
            Free Audit →
          </a>
          <div className="footer__social">
            <a href="#">LinkedIn</a>
            <a href="#">Instagram</a>
            <a href="#">YouTube</a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div>© 2026 AdsXtreme. All rights reserved.</div>
        <div className="footer__legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms &amp; Conditions</a>
        </div>
      </div>
    </footer>
  );
}
