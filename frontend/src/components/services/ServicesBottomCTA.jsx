"use client";

import ServicesReveal from "./ServicesReveal";

export default function ServicesBottomCTA() {
  return (
    <section className="relative overflow-hidden bg-[#ee7124] px-6 py-[72px] text-left md:text-center">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.07) 1px,transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative mx-auto max-w-[640px]">
        <ServicesReveal>
          <h2 className="mb-[18px] text-3xl font-extrabold leading-tight tracking-[-0.02em] text-white md:text-5xl">
            Not sure which service fits your need?
          </h2>

          <p className="mb-9 text-base font-medium leading-8 text-white/80 md:text-lg">
            Talk to our experts — we'll find the right path forward for your
            property or investment.
          </p>

          <a
            href="/contact"
            className="inline-block rounded-full bg-[#232627] px-12 py-4 text-sm font-bold tracking-[0.07em] text-white no-underline transition-opacity duration-200 hover:opacity-85"
          >
            Talk to an Expert →
          </a>
        </ServicesReveal>
      </div>
    </section>
  );
}