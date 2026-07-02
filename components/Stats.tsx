"use client";

import { useEffect, useRef } from "react";
import { stats } from "@/lib/content";

function formatValue(
  value: number,
  decimals: number,
  prefix: string,
  suffix: string
) {
  const body = decimals
    ? value.toFixed(decimals)
    : Math.round(value).toLocaleString();
  return `${prefix}${body}${suffix}`;
}

export default function Stats() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const nodes =
      rootRef.current?.querySelectorAll<HTMLElement>("[data-count]") ?? [];

    if (typeof IntersectionObserver === "undefined") {
      return;
    }

    const animate = (el: HTMLElement) => {
      const target = parseFloat(el.dataset.count || "0");
      const decimals = parseInt(el.dataset.dec || "0", 10);
      const prefix = el.dataset.prefix || "";
      const suffix = el.dataset.suffix || "";
      const duration = 1500;
      const start = performance.now();

      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = formatValue(target * eased, decimals, prefix, suffix);
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(entry.target as HTMLElement);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    nodes.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="stats-section">
      <div className="wrap">
        <div className="stats" ref={rootRef}>
          <div className="stats__slash" aria-hidden="true" />
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <div className="stat__num">
                <span
                  data-count={s.value}
                  data-prefix={s.prefix}
                  data-suffix={s.suffix}
                  data-dec={s.decimals}
                >
                  {formatValue(s.value, s.decimals, s.prefix, s.suffix)}
                </span>
              </div>
              <div className="stat__label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
