"use client";

import Image from "next/image";
import Reveal from "./Reveal";

export default function AboutFounder() {
  return (
    <section className="border-t border-[#ebebeb] bg-white px-6 py-[100px]">
      <div className="mb-16 text-left md:text-center">
        <Reveal>
          <p className="mb-5 inline-flex items-center justify-start gap-3 text-xs font-bold uppercase tracking-[0.32em] text-[var(--secondary)] md:justify-center md:text-sm">
            <span className="block h-px w-8 bg-[var(--secondary)]" />
            The Visionary
            <span className="block h-px w-8 bg-[var(--secondary)]" />
          </p>
        </Reveal>

        <Reveal delay={90}>
          <h2 className="text-3xl font-extrabold leading-tight tracking-[-0.02em] text-[var(--primary)] md:text-5xl">
            Meet the Founder
          </h2>
        </Reveal>
      </div>

      <div className="founder-grid mx-auto grid max-w-[1020px] grid-cols-1 items-start gap-10 md:grid-cols-[420px_1fr] md:gap-[72px]">
        <Reveal className="img-reveal">
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-[#e8e8e8]">
            <Image
              src="/images/owner.jpg"
              alt="Founder photo"
              fill
              className="object-cover object-center"
              sizes="(max-width:768px) 100vw, 420px"
            />

            <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(to_top,rgba(35,38,39,.85)_0%,transparent_100%)] px-7 pb-6 pt-7">
              <p className="m-0 text-lg font-bold text-white">
                Aryan Mehta
              </p>

              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--secondary)]">
                Founder & Managing Director
              </p>
            </div>

            <div className="absolute left-0 right-0 top-0 h-1 bg-[var(--secondary)]" />
          </div>
        </Reveal>

        <Reveal delay={140}>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[var(--secondary)]">
            Founder's Message
          </p>

          <h3 className="mb-6 text-3xl font-extrabold leading-tight tracking-[-0.01em] text-[var(--primary)] md:text-5xl">
            Aryan Mehta
          </h3>

          <div className="mb-7 h-[3px] w-12 rounded bg-[var(--secondary)]" />

          <p className="mb-5 text-base font-medium leading-8 text-[var(--primary)]/65">
            With over 20 years of experience spanning luxury hotel operations and
            strategic advisory across South &amp; Southeast Asia, I founded this
            consultancy with a singular vision — to bridge the gap between
            operational excellence and business growth in hospitality.
          </p>

          <p className="mb-9 text-base font-medium leading-8 text-[var(--primary)]/65">
            My philosophy: every property has a soul. Our job is to help it find
            its voice — and amplify it.
          </p>

          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[var(--primary)]/50">
            Areas of Expertise
          </p>

          <div className="flex flex-wrap gap-3">
            {[
              "Luxury Hospitality",
              "Brand Strategy",
              "Revenue Optimisation",
              "Pre-opening Advisory",
              "F&B Concepts",
              "Investor Advisory",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full border-[1.5px] border-[rgba(238,113,36,.35)] bg-[rgba(238,113,36,.05)] px-4 py-2 text-xs font-semibold text-[var(--secondary)]"
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