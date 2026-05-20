"use client";

import Reveal from "./Reveal";
import { stats } from "./aboutData";

export default function AboutStats() {
  return (
    <section className="bg-primary border-y border-white/10 px-6 py-14">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 text-center md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.l} delay={i * 70}>
            {/* Numbers Orange */}
            <p className="m-0 text-4xl font-extrabold text-secondary md:text-5xl">
              {s.n}
            </p>

            {/* Labels White */}
            <p className="mt-2 text-sm tracking-wide text-white">{s.l}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
