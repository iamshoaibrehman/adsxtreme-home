"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** Stagger delay in seconds, applied to opacity + transform transitions. */
  delay?: number;
};

/**
 * Fades + slides its child into view once it scrolls near the viewport.
 * Replaces the prototype's data-reveal IntersectionObserver.
 */
export default function Reveal({ children, className = "", delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-visible");
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  const style = delay
    ? {
        transitionDelay: `${delay}s`,
      }
    : undefined;

  return (
    <div ref={ref} className={`reveal ${className}`.trim()} style={style}>
      {children}
    </div>
  );
}
