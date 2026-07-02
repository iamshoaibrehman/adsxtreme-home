import { services } from "@/lib/content";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="wrap">
        <div className="services__head">
          <div className="services__head-text">
            <div className="eyebrow">What we do</div>
            <h2 className="h2">
              Everything your Amazon account needs — under one accountable roof.
            </h2>
          </div>
          <a href="#contact" className="link-outline">
            Book a strategy call →
          </a>
        </div>
        <div className="grid-3">
          {services.map((sv, i) => (
            <Reveal key={sv.n} delay={(i % 3) * 0.07}>
              <div className="service">
                <div className="service__top">
                  <span className="service__n">{sv.n}</span>
                  <span className="service__rule" />
                  <span className="service__slash" />
                </div>
                <h3>{sv.t}</h3>
                <p>{sv.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
