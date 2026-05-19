"use client";

import BlogReveal from "./BlogReveal";

export default function BlogHero() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-24 text-left md:py-[110px] md:text-center">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(238,113,36,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(238,113,36,.04) 1px,transparent 1px)",
          backgroundSize: "68px 68px",
        }}
      />

      <div className="blg-spin pointer-events-none absolute right-20 top-12 hidden h-[90px] w-[90px] rounded-full border-[1.5px] border-dashed border-[rgba(238,113,36,.3)] md:block" />

      <div className="blg-spin-r pointer-events-none absolute bottom-10 left-[60px] hidden h-[120px] w-[120px] rounded-full border border-dashed border-[rgba(35,38,39,.12)] md:block" />

      <div className="relative mx-auto max-w-[760px]">
        <BlogReveal>
          <p className="mb-5 inline-flex items-center justify-start gap-3 text-xs font-bold uppercase tracking-[0.32em] text-[#ee7124] md:justify-center md:text-sm">
            <span className="block h-px w-8 bg-[#ee7124]" />
            Insights & Perspectives
            <span className="block h-px w-8 bg-[#ee7124]" />
          </p>
        </BlogReveal>

        <BlogReveal delay={90}>
          <h1 className="blog-hero-title mb-6 text-5xl font-extrabold leading-tighter tracking-[-0.02em] text-[#232627] md:text-5xl lg:text-7xl">
            The Hospitality{" "}
            <span className="not-italic text-[#ee7124]">
              Journal
            </span>
          </h1>
        </BlogReveal>

        <BlogReveal delay={180}>
          <p className="max-w-[560px] text-base font-medium leading-8 text-[#232627]/65 md:mx-auto md:text-lg">
            Expert analysis, market insights, and strategic thinking on
            hospitality, real estate, and commercial leasing across India.
          </p>
        </BlogReveal>
      </div>
    </section>
  );
}