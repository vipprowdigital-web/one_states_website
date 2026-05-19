"use client";

import ServicesReveal from "./ServicesReveal";
import ServicesCard from "./ServicesCard";
import { SERVICES } from "./ServicesData";

export default function ServicesGrid() {
  return (
    <section
      id="services"
      className="border-t border-[#ebebeb] bg-[#ffffff] px-6 py-[100px]"
    >
      <div className="mb-[72px] text-left md:text-center">
        <ServicesReveal>
          <p className="mb-5 inline-flex items-center justify-start gap-3 text-xs font-bold uppercase tracking-[0.32em] text-[#ee7124] md:justify-center md:text-sm">
            <span className="block h-px w-8 bg-[#ee7124]" />
            Expertise Areas
            <span className="block h-px w-8 bg-[#ee7124]" />
          </p>
        </ServicesReveal>

        <ServicesReveal delay={80}>
          <h2 className="text-3xl font-extrabold leading-tight tracking-[-0.02em] text-[#232627] md:text-5xl">
            Comprehensive Solutions
            <br />
            <span className="not-italic text-[#ee7124]">
              Tailored for You
            </span>
          </h2>
        </ServicesReveal>

        <ServicesReveal delay={160}>
          <p className="mt-5 max-w-[600px] text-base font-medium leading-8 text-[#232627]/60 md:mx-auto md:text-lg">
            Five core service verticals designed to unlock value at every stage
            of your hospitality and real estate journey.
          </p>
        </ServicesReveal>
      </div>

      <div className="srv-grid mx-auto max-w-[1140px]">
        {SERVICES.map((service, index) => (
          <ServicesCard
            key={service.number}
            service={service}
            index={index}
          />
        ))}

        <ServicesReveal delay={SERVICES.length * 110}>
        
        </ServicesReveal>
      </div>
    </section>
  );
}