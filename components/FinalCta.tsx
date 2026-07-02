"use client";

import { useState, type FormEvent } from "react";

export default function FinalCta() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = new FormData(e.currentTarget).get("email");
    setEmail(typeof value === "string" ? value : "");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="final">
      <div className="final__inner">
        <h2>Get your free Amazon &amp; PPC audit.</h2>
        <p className="final__sub">
          Tell us where to send it. We&apos;ll review your account, spot the
          leaks, and show you exactly where the growth is — no obligation.
        </p>
        <form className="final__form" onSubmit={onSubmit}>
          <input
            className="final__input"
            type="email"
            name="email"
            required
            placeholder="you@yourbrand.com"
            aria-label="Your email address"
          />
          <button className="final__submit" type="submit">
            Get my audit →
          </button>
        </form>
        {submitted && (
          <div className="final__thanks">
            Thanks — we&apos;ll be in touch within 24 hours at {email}.
          </div>
        )}
        <div className="final__fine">
          Worth $500 · We only onboard a few brands each month
        </div>
      </div>
    </section>
  );
}
