"use client";

import Reveal from "./Reveal";

export default function SectionHead({ eyebrow, title, dark = false }) {
  return (
    <div className="text-center mb-14">
      <Reveal>
        <span
          className="inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.3em] uppercase mb-4"
          style={{ color: "var(--secondary)" }}
        >
          <span
            style={{
              display: "block",
              width: 28,
              height: 1,
              background: "var(--secondary)",
            }}
          />
          {eyebrow}
          <span
            style={{
              display: "block",
              width: 28,
              height: 1,
              background: "var(--secondary)",
            }}
          />
        </span>

        <h2
          className="text-3xl md:text-[2.6rem] font-bold leading-tight"
          style={{ color: dark ? "#fff" : "var(--primary)" }}
        >
          {title}
        </h2>
      </Reveal>
    </div>
  );
}