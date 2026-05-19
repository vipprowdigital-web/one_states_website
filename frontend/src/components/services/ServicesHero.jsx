"use client";

import ServicesReveal from "./ServicesReveal";

export default function ServicesHero() {
  return (
    <section className="relative flex min-h-[420px] items-center justify-center overflow-hidden bg-white px-6 py-20 text-left md:min-h-[520px] md:text-center">
      {/* Clean subtle background */}
      <div className="pointer-events-none absolute inset-0 bg-white" />

      {/* Light decorative grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(rgba(238,113,36,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(238,113,36,.05) 1px,transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Decorative spinning rings */}
      <div className="srv-spin pointer-events-none absolute left-8 top-8 z-[1] hidden h-[84px] w-[84px] rounded-full border border-dashed border-[rgba(238,113,36,.35)] md:block" />

      <div className="srv-spin-r pointer-events-none absolute bottom-10 right-10 z-[1] hidden h-[110px] w-[110px] rounded-full border border-dashed border-[rgba(238,113,36,.22)] md:block" />

      <div className="relative z-[2] mx-auto max-w-[820px]">
        <ServicesReveal>
          <p className="mb-5 inline-flex items-center justify-start gap-3 text-xs font-bold uppercase tracking-[0.32em] text-[#ee7124] md:justify-center md:text-sm">
            <span className="block h-px w-8 bg-[#ee7124]" />
            What We Offer
            <span className="block h-px w-8 bg-[#ee7124]" />
          </p>
        </ServicesReveal>

        <ServicesReveal delay={100}>
          <h1 className="srv-hero-h1 mb-6 text-4xl font-extrabold leading-tight tracking-[-0.02em] text-[#232627] sm:text-5xl md:text-5xl lg:text-7xl">
            Our{" "}
            <span className="not-italic text-[#ee7124]">
              Services
            </span>
          </h1>
        </ServicesReveal>

        <ServicesReveal delay={190}>
          <p className="mb-8 max-w-[620px] text-base font-medium leading-8 text-[#232627]/65 md:mx-auto md:text-lg">
            From hotel brand tie-ups to large asset transactions — we deliver
            end-to-end hospitality and real estate consultancy with precision
            and deep market expertise.
          </p>
        </ServicesReveal>

        <ServicesReveal delay={280}>
          <div className="flex flex-wrap justify-start gap-4 md:justify-center">
            <a
              href="/contact"
              className="inline-block rounded-full bg-[#ee7124] px-8 py-3.5 text-[13px] font-bold tracking-[0.08em] text-white no-underline shadow-[0_8px_28px_rgba(238,113,36,.28)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              Get a Consultation →
            </a>

            <a
              href="#services"
              className="inline-block rounded-full border-[1.5px] border-[#232627]/20 px-8 py-3.5 text-[13px] font-bold tracking-[0.06em] text-[#232627] no-underline transition-all duration-200 hover:border-[#ee7124] hover:bg-[#ee7124]/10 hover:text-[#ee7124]"
            >
              Explore Services
            </a>
          </div>
        </ServicesReveal>
      </div>
    </section>
  );
}