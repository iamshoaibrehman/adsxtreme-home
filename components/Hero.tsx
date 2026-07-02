export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__slash hero__slash--1" aria-hidden="true" />
      <div className="hero__slash hero__slash--2" aria-hidden="true" />
      <div className="hero__slash hero__slash--3" aria-hidden="true" />
      <div className="hero__grid">
        <div>
          <div className="pill">Amazon PPC &amp; Catalog Growth Agency</div>
          <h1>
            We turn Amazon ad spend into
            <br />
            <span className="grad-text">predictable, profitable growth.</span>
          </h1>
          <p className="hero__sub">
            No wasted spend. No invisible listings. No broken catalogs. Just a
            senior team running your PPC and catalog to a target ACoS — and
            scaling what works.
          </p>
          <div className="hero__ctas">
            <a href="#contact" className="btn-primary">
              Get My Free Audit <span aria-hidden="true">→</span>
            </a>
            <a href="#work" className="btn-ghost">
              See the results
            </a>
          </div>
          <div className="hero__trust">
            <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <div className="stars">★★★★★</div>
              <div className="hero__trust-sub">
                4.9/5 across Upwork &amp; Google
              </div>
            </div>
            <div className="hero__trust-divider" />
            <div className="hero__trust-brands">
              Trusted by <strong>120+ brands</strong>
              <br />
              doing 6–8 figures on Amazon
            </div>
          </div>
        </div>

        <div className="dash">
          <div className="dash__card">
            <div className="dash__bar">
              <span className="dot" style={{ background: "#ff5f57" }} />
              <span className="dot" style={{ background: "#febc2e" }} />
              <span className="dot" style={{ background: "#28c840" }} />
              <span className="label">advertising · campaign manager</span>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="dash__img"
              src="/assets/sample-dashboard.png"
              alt="Campaign performance dashboard"
            />
            <div className="dash__kpis">
              <div className="dash__kpi">
                <div className="k">ACoS</div>
                <div className="v">17.4%</div>
              </div>
              <div className="dash__kpi">
                <div className="k">ROAS</div>
                <div className="v v--cyan">4.6x</div>
              </div>
              <div className="dash__kpi">
                <div className="k">Sales</div>
                <div className="v">$1.2M</div>
              </div>
            </div>
          </div>
          <div className="dash__float dash__float--tl">
            <div className="cap">ACoS reduced</div>
            <div className="big big--green">↓ 38%</div>
          </div>
          <div className="dash__float dash__float--br">
            <div className="cap">Revenue / mo</div>
            <div className="big big--blue">+ $1.2M</div>
          </div>
        </div>
      </div>
    </section>
  );
}
