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

export default function BlogReveal({
  children,
  delay = 0,
  y = 28,
  className = "",
}) {
  const ref = useReveal();

  return (
    <div
      ref={ref}
      className={`blg-reveal ${className}`}
      style={{ "--d": `${delay}ms`, "--y": `${y}px` }}
    >
      {children}
    </div>
  );
}