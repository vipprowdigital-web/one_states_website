"use client";

import { useEffect, useRef } from "react";

function useFadeIn(threshold = 0.12) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("vis");
          io.disconnect();
        }
      },
      { threshold }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return ref;
}

export default function Reveal({ children, delay = 0, className = "" }) {
  const ref = useFadeIn();

  return (
    <div
      ref={ref}
      className={`fu ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}