"use client";

import Reveal from "./Reveal";

export default function AboutStory() {
  return (
    <section className="bg-white px-6 py-[100px]">
      <div className="mb-16 md:text-center">
        <Reveal>
          <p className="mb-5 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.32em] text-[var(--secondary)] md:text-sm">
            <span className="block h-px w-8 bg-[var(--secondary)]" />
            Our Story
            <span className="block h-px w-8 bg-[var(--secondary)]" />
          </p>
        </Reveal>

        <Reveal delay={90}>
          <h2 className="text-3xl font-extrabold leading-tight tracking-[-0.02em] text-[var(--primary)] md:text-5xl">
            Born from passion,
            <br />
            built on expertise.
          </h2>
        </Reveal>
      </div>

      <div className="story-grid mx-auto grid max-w-[960px] grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
        <Reveal>
          <p className="mb-5 text-base font-medium leading-8 text-[var(--primary)]/65">
           Our focus is to create value-driven collaborations across hospitality, commercial retail and warehousing sectors through trust, execution and long-term vision. 
          </p>

          <p className="text-base font-medium leading-8 text-[var(--primary)]/65">
        With leadership experience across organizations like PepsiCo, Marico, Himalaya and Hindustan Unilever, we bring a strong understanding of business expansion, partnerships, negotiations and market strategy. 
          </p>
        </Reveal>

        <Reveal delay={150}>
          <div className="float-anim relative overflow-hidden rounded-[20px] bg-[var(--primary)] px-8 py-10 md:px-10 md:py-12">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(238,113,36,.25)_0%,transparent_55%)]" />

            <p className="relative mb-4 text-[72px] font-extrabold leading-[0.8] text-[var(--secondary)]">
              "
            </p>

            <p className="relative text-lg font-bold leading-8 text-white md:text-xl">
              Great hospitality is not a service.
              <br />
              It is an emotion, engineered with intent.
            </p>

            <p className="relative mt-5 text-sm font-medium text-white/45">
              — Our Founding Principle
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}