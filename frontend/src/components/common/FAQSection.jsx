"use client";

import { useState } from "react";

export default function FAQSection({
  eyebrow = "FAQ",
  title = "Frequently Asked Questions",
  faqs = [],
}) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="relative overflow-hidden bg-white px-6 py-16 md:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(rgba(238,113,36,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(238,113,36,.04) 1px,transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative mx-auto max-w-4xl">
        <div className="mb-12 text-left md:text-center">
          <p className="mb-5 inline-flex items-center justify-start gap-3 text-xs font-bold uppercase tracking-[0.32em] text-[#ee7124] md:justify-center md:text-sm">
            <span className="block h-px w-8 bg-[#ee7124]" />
            {eyebrow}
            <span className="block h-px w-8 bg-[#ee7124]" />
          </p>

          <h2 className="text-3xl font-extrabold leading-tight tracking-[-0.02em] text-[#232627] md:text-5xl">
            {title}
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-[#ebebeb] bg-white shadow-[0_8px_24px_rgba(0,0,0,.04)] transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
                >
                  <span className="text-base font-extrabold leading-7 text-[#232627] md:text-lg">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ee7124]/10 text-xl font-bold text-[#ee7124] transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="border-t border-[#ebebeb] px-6 py-5 text-sm font-medium leading-8 text-[#232627]/65 md:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}