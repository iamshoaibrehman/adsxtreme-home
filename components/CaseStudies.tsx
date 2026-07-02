import { cases } from "@/lib/content";
import Reveal from "./Reveal";

export default function CaseStudies() {
  return (
    <section id="work" className="cases">
      <div className="wrap">
        <div className="cases__head">
          <div className="eyebrow">Proof, not promises</div>
          <h2 className="h2">Brands we&apos;ve quietly made a lot of money.</h2>
        </div>
        <div className="grid-3">
          {cases.map((c, i) => (
            <Reveal key={c.brand} delay={(i % 3) * 0.07}>
              <div className="case">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="case__img"
                  src={c.img}
                  alt={`${c.cat} performance`}
                />
                <div className="case__body">
                  <div className="case__meta">
                    <span className="case__cat">{c.cat}</span>
                    <span className="case__brand">{c.brand}</span>
                  </div>
                  <div className="case__result">{c.result}</div>
                  <p className="case__detail">{c.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
