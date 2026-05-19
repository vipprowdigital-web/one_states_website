"use client";

import Reveal from "./Reveal";

const principles = [
  {
    number: "01",
    title: "Strategic Clarity",
    desc: "We bring clear direction to every hospitality project through practical planning, market understanding, and business-focused execution.",
  },
  {
    number: "02",
    title: "Operational Excellence",
    desc: "From systems to guest experience, we focus on building smooth, scalable, and profitable hospitality operations.",
  },
  {
    number: "03",
    title: "Long-Term Partnership",
    desc: "We work closely with owners, investors, and brands to create sustainable growth, not just short-term solutions.",
  },
  {
    number: "04",
    title: "Trust & Transparency",
    desc: "Every recommendation is based on honest communication, clear process, and a deep commitment to client success.",
  },
];

export default function AboutPrinciples() {
  return (
    <section className="border-t border-white/10 bg-[#232627] px-6 py-24 font-[Raleway]">
      <div className="mb-16 text-left md:text-center">
        <Reveal>
          <p className="mb-5 inline-flex items-center justify-start gap-3 text-xs font-bold uppercase tracking-[0.32em] text-[var(--secondary)] md:justify-center md:text-sm">
            <span className="block h-px w-8 bg-[var(--secondary)]" />
            Our Principles
            <span className="block h-px w-8 bg-[var(--secondary)]" />
          </p>
        </Reveal>

        <Reveal delay={90}>
          <h2 className="text-3xl font-extrabold leading-tight tracking-[-0.02em] text-white md:text-5xl">
            The values behind
            <br />
            every decision
          </h2>
        </Reveal>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
        {principles.map((item, index) => (
          <Reveal key={item.title} delay={index * 80}>
            <div className="group h-full rounded-2xl border border-white/10 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(238,113,36,0.18)]">
              <div className="mb-8 flex items-center justify-between">
                <span className="text-sm font-bold tracking-[0.25em] text-[var(--secondary)]">
                  {item.number}
                </span>

                <span className="h-px w-16 bg-[var(--secondary)] opacity-50 transition-all duration-300 group-hover:w-24" />
              </div>

              <h3 className="mb-4 text-xl font-extrabold leading-tight text-[var(--primary)] md:text-2xl">
                {item.title}
              </h3>

              <p className="text-[15px] font-medium leading-8 text-[var(--primary)]/60">
                {item.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}