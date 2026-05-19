"use client";

import Reveal from "./Reveal";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-white py-[120px] text-left md:py-[140px] md:text-center">
      <div className="relative mx-auto max-w-[900px] px-6">
        <Reveal>
          <p className="mb-6 inline-flex items-center justify-start gap-3 text-xs font-bold uppercase tracking-[0.32em] text-[var(--secondary)] md:justify-center md:text-sm">
            <span className="block h-px w-8 bg-[var(--secondary)]" />
            Who We Are
            <span className="block h-px w-8 bg-[var(--secondary)]" />
          </p>
        </Reveal>

        <Reveal delay={90}>
          <h1 className="mb-7 text-4xl font-extrabold leading-tight tracking-[-0.02em] text-[var(--primary)] sm:text-5xl md:text-6xl lg:text-7xl">
           Building Long-Term
            <br />
            <span className="text-[var(--secondary)] not-italic">
           Hospitality Growth 
            </span>
          </h1>
        </Reveal>

        <Reveal delay={180}>
          <p className="max-w-[650px] text-base font-medium leading-8 text-[var(--primary)]/65 md:mx-auto md:text-lg">
         OneStates Hospitality is a strategic consulting and advisory firm helping hospitality brands, hotel owners, developers and investors identify the right opportunities for expansion and business growth. 
          </p>
        </Reveal>
      </div>
    </section>
  );
}