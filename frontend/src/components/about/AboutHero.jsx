"use client";

import Reveal from "./Reveal";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-white pt-30 pb-10 text-left md:py-35 md:text-center">
      <div className="relative mx-auto max-w-225 px-6">
        <Reveal>
          <p className="mb-6 inline-flex items-center justify-start gap-3 text-xs font-bold uppercase tracking-[0.32em] text-secondary md:justify-center md:text-sm">
            <span className="block h-px w-8 bg-secondary" />
            Who We Are
            <span className="block h-px w-8 bg-secondary" />
          </p>
        </Reveal>

        <Reveal delay={90}>
          <h1 className="mb-7 text-3xl font-extrabold leading-tighter tracking-[-0.02em] text-primary sm:text-3xl md:text-5xl lg:text-7xl">
           Building Long-Term
            <br />
            <span className="text-secondary not-italic">
           Hospitality Growth 
            </span>
          </h1>
        </Reveal>

        <Reveal delay={180}>
          <p className="max-w-162.5 text-base font-medium leading-8 text-(--primary)/65 md:mx-auto md:text-lg">
         OneStates Hospitality is a strategic consulting and advisory firm helping hospitality brands, hotel owners, developers and investors identify the right opportunities for expansion and business growth. 
          </p>
        </Reveal>
      </div>
    </section>
  );
}