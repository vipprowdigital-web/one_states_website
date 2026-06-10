"use client";

import Image from "next/image";
import Reveal from "./Reveal";

export default function AboutFounder() {
  return (
    <section className="border-t border-[#ebebeb] bg-white px-6 md:py-25 pt-5 sm:pt-10">
      <div className="md:mb-16 mb-10 text-left md:text-center">
        <Reveal>
          <p className="mb-5 inline-flex items-center justify-start gap-3 text-xs font-bold uppercase tracking-[0.32em] text-secondary md:justify-center md:text-sm">
            <span className="block h-px w-8 bg-secondary" />
            The Visionary
            <span className="block h-px w-8 bg-secondary" />
          </p>
        </Reveal>

        <Reveal delay={90}>
          <h2 className="text-3xl font-extrabold leading-tight tracking-[-0.02em] text-primary md:text-5xl">
            Meet the Founder
          </h2>
        </Reveal>
      </div>

      <div className="founder-grid mx-auto grid max-w-255 grid-cols-1 items-start gap-10 md:grid-cols-[420px_1fr] md:gap-18">
        <Reveal className="img-reveal">
          <div className="relative aspect-3/4 overflow-hidden rounded-2xl bg-[#e8e8e8]">
            <Image
              src="/images/garg.jpeg"
              alt="Founder photo"
              fill
              className="object-cover object-center"
              sizes="(max-width:768px) 100vw, 420px"
            />

            <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(to_top,rgba(35,38,39,.85)_0%,transparent_100%)] px-7 pb-6 pt-7">
              <p className="m-0 text-lg font-bold text-white">Aditya Kumar Garge</p>

              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
                Founder & Managing Director
              </p>
            </div>

            <div className="absolute left-0 right-0 top-0 h-1 bg-secondary" />
          </div>
        </Reveal>

        <Reveal delay={140}>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-secondary">
            Founder&apos;s Message
          </p>

          <h3 className="mb-6 text-3xl font-extrabold leading-tight tracking-[-0.01em] text-primary md:text-5xl">
            Aditya Kumar Garge
          </h3>

          <div className="mb-7 h-0.75 w-12 rounded bg-secondary" />

          <p className="mb-5 text-base font-medium leading-8 text-primary/65">
            With 22+ years of leadership experience across sales, marketing,
            FMCG channel sales and hospitality consulting, Aditya Kumaar Garg
            helps hospitality brands, hotel chains, developers and investors
            scale through strategic partnerships, commercial leasing and
            expansion planning.
          </p>

          <p className="mb-9 text-base font-medium leading-8 text-primary/65">
            Since 2018, he has worked as an independent consultant, supporting
            F&B, fashion, footwear, jewellery, NBFC and PSU sector brands with
            retail leasing, brand introductions, negotiations, project
            feasibility and ROI-focused growth strategy.
          </p>

          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-primary/50">
            Areas of Expertise
          </p>

          <div className="flex flex-wrap gap-3">
            {[
              "Hospitality Consulting",
              "Commercial Retail Leasing",
              "Brand Partnerships",
              "Asset Transactions",
              "Project Feasibility",
              "Expansion Strategy",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full border-[1.5px] border-[rgba(238,113,36,.35)] bg-[rgba(238,113,36,.05)] px-4 py-2 text-xs font-semibold text-secondary"
              >
                {tag}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
