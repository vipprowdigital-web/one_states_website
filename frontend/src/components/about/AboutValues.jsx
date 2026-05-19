"use client";

import Reveal from "./Reveal";
import { values } from "./aboutData";

export default function AboutValues() {
  return (
    <section className="border-t border-[#ebebeb] bg-white px-6 py-[100px]">
      <div className="mb-16 text-left md:text-center">
        <Reveal>
          <p className="mb-5 inline-flex items-center justify-start gap-3 text-xs font-bold uppercase tracking-[0.32em] text-[var(--secondary)] md:justify-center md:text-sm">
            <span className="block h-px w-8 bg-[var(--secondary)]" />
            What Drives Us
            <span className="block h-px w-8 bg-[var(--secondary)]" />
          </p>
        </Reveal>

        <Reveal delay={90}>
          <h2 className="text-3xl font-extrabold leading-tight tracking-[-0.02em] text-[var(--primary)] md:text-5xl">
            Our Core Values
          </h2>
        </Reveal>
      </div>

      <div className="mx-auto grid max-w-[960px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((v, i) => (
          <Reveal key={v.title} delay={i * 70}>
            <div className="lift h-full rounded-2xl border-[1.5px] border-[#ebebeb] bg-white px-7 py-9 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(238,113,36,.12)]">
              <span className="mb-5 block text-2xl font-extrabold text-[var(--secondary)]">
                {v.icon}
              </span>

              <h3 className="mb-3 text-xl font-extrabold leading-tight text-[var(--primary)]">
                {v.title}
              </h3>

              <p className="text-[15px] font-medium leading-8 text-[var(--primary)]/60">
                {v.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}