"use client";

import { useState } from "react";
import { faqs } from "@/lib/content";

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="faq">
      <div className="faq__inner">
        <div className="faq__head">
          <div className="eyebrow">Questions</div>
          <h2 className="h2 h2--sm">The stuff brands ask us most.</h2>
        </div>
        <div className="faq__list">
          {faqs.map((f, i) => {
            const isOpen = i === open;
            return (
              <div className="faq__item" key={f.q}>
                <button
                  className="faq__q"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span>{f.q}</span>
                  <span className="faq__sign">{isOpen ? "–" : "+"}</span>
                </button>
                {isOpen && <div className="faq__a">{f.a}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
