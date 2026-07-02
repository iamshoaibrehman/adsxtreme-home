import { steps } from "@/lib/content";

export default function Process() {
  return (
    <section id="process" className="process">
      <div className="wrap">
        <div className="process__head">
          <div className="eyebrow eyebrow--light">How we work</div>
          <h2 className="h2">The Xtreme Growth Framework™</h2>
          <p className="lead">
            A repeatable system that diagnoses, fixes, and compounds — so growth
            isn&apos;t luck, it&apos;s process.
          </p>
        </div>
        <div className="grid-5">
          {steps.map((st) => (
            <div className="step" key={st.n}>
              <div className="step__n">{st.n}</div>
              <h3>{st.t}</h3>
              <p>{st.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
