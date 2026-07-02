import { leaks } from "@/lib/content";
import Reveal from "./Reveal";

export default function Problem() {
  return (
    <section id="why" className="problem">
      <div className="wrap">
        <div className="problem__head">
          <div className="eyebrow">The problem</div>
          <h2 className="h2">
            Most Amazon brands aren&apos;t losing to competitors. They&apos;re
            losing to <span className="accent">leaks.</span>
          </h2>
          <p className="lead">
            Every month, profit quietly drains out of accounts that look
            &quot;fine&quot; on the surface. We find the leaks, plug them, and
            turn that recovered margin into growth.
          </p>
        </div>
        <div className="grid-3 leaks">
          {leaks.map((l, i) => (
            <Reveal key={l.n} delay={(i % 3) * 0.07}>
              <div className="leak">
                <div className="leak__num">
                  <span>{l.n}</span>
                </div>
                <h3>{l.t}</h3>
                <p>{l.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
