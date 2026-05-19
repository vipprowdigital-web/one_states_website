"use client";

import { useEffect, useRef } from "react";

function useReveal(threshold = 0.1) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.dataset.vis = "1";
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

export default function ServicesReveal({
  children,
  delay = 0,
  y = 30,
  className = "",
}) {
  const ref = useReveal();

  return (
    <div
      ref={ref}
      className={`srv-reveal ${className}`}
      style={{ "--delay": `${delay}ms`, "--y": `${y}px` }}
    >
      {children}
    </div>
  );
}