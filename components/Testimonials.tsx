import { testimonials } from "@/lib/content";
import Reveal from "./Reveal";

export default function Testimonials() {
  return (
    <section className="testi-section">
      <div className="wrap">
        <div className="center-head">
          <div className="eyebrow">From our clients</div>
          <h2 className="h2 h2--sm">Rated 4.9/5 by the brands we scale.</h2>
        </div>
        <div className="grid-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 0.07}>
              <div className="testi">
                <div className="testi__top">
                  <div className="stars">★★★★★</div>
                  <div className="testi__source">{t.source}</div>
                </div>
                <p className="testi__quote">“{t.quote}”</p>
                <div className="testi__who">
                  <div className="avatar">{t.initial}</div>
                  <div>
                    <div className="testi__name">{t.name}</div>
                    <div className="testi__role">{t.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
