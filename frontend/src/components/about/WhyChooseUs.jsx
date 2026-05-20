"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { scrollTo } from "../common/scrollTo";

function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.dataset.vis = "1";
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return ref;
}

function Reveal({ children, delay = 0, className = "" }) {
  const ref = useReveal();

  return (
    <div
      ref={ref}
      className={`wcu-reveal ${className}`}
      style={{ "--d": `${delay}ms` }}
    >
      {children}
    </div>
  );
}

const LEFT = [
  {
    icon: (
      <svg
        width="28"
        height="28"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
      >
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
    title: "22+ Years Leadership Experience",
    desc: "Strong expertise across hospitality, FMCG, expansion strategy and business growth.",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
      >
        <path d="M9 12l2 2 4-4" />
        <path d="M21 12c0 4.97-4.03 9-9 9S3 16.97 3 12 7.03 3 12 3s9 4.03 9 9z" />
      </svg>
    ),
    title: "Relationship-Driven Approach",
    desc: "Focused on trust, transparency and long-term partnerships.",
  },
];

const RIGHT = [
  {
    icon: (
      <svg
        width="28"
        height="28"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
      >
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "Strong Industry Network",
    desc: "Connections across hospitality brands, developers, investors and commercial stakeholders.",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    title: "Strategic Market Understanding",
    desc: "Helping businesses identify scalable opportunities with practical execution support.",
  },
];

export default function WhyChooseUs() {
  return (
    <>
      <style>{`
        .wcu-wrap * {
          font-family: Raleway, sans-serif;
          box-sizing: border-box;
        }

        .wcu-reveal {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity .65s ease var(--d, 0ms), transform .65s ease var(--d, 0ms);
        }

        .wcu-reveal[data-vis="1"] {
          opacity: 1;
          transform: translateY(0);
        }

        .wcu-card {
          transition: transform .28s ease, box-shadow .28s ease, border-color .28s ease;
          cursor: default;
        }

        .wcu-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 48px rgba(0,0,0,.09);
          border-color: rgba(238,113,36,.45) !important;
        }

        .wcu-card:hover .wcu-icon {
          background: var(--secondary, #ee7124);
        }

        .wcu-card:hover .wcu-icon svg {
          color: #fff;
          stroke: #fff;
        }

        .wcu-icon {
          transition: background .25s ease;
        }

        .wcu-icon svg {
          transition: stroke .25s ease;
        }

        .wcu-photo-inner {
          transition: transform 6s ease;
        }

        .wcu-photo-inner:hover {
          transform: scale(1.03);
        }

        @keyframes wcuSpin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .wcu-spin {
          animation: wcuSpin 22s linear infinite;
        }

        .wcu-grid {
          display: grid;
          grid-template-columns: 1fr 360px 1fr;
          gap: 32px;
          align-items: center;
          max-width: 1100px;
          margin: 0 auto;
        }

        .wcu-col {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        @media (max-width: 900px) {
          .wcu-grid {
            grid-template-columns: 1fr !important;
          }

          .wcu-center-col {
            order: -1;
            max-width: 340px;
            margin: 0 auto;
          }

          .wcu-card {
            align-items: flex-start !important;
            text-align: left !important;
          }

          .wcu-icon {
            align-self: flex-start !important;
            order: 0 !important;
          }
        }
      `}</style>

      <section className="wcu-wrap relative overflow-hidden border-t border-[#ebebeb] bg-white px-6 md:py-25 py-10">
        <div
          aria-hidden
          className="wcu-spin pointer-events-none absolute right-15 top-10 h-24 w-24 rounded-full border-[1.5px] border-dashed border-[rgba(238,113,36,.3)]"
        />

        <div className="relative mb-16 text-left md:text-center">
          <Reveal>
            <p className="mb-5 inline-flex items-center justify-start gap-3 text-xs font-bold uppercase tracking-[0.32em] text-secondary md:justify-center md:text-sm">
              <span className="block h-px w-8 bg-secondary" />
              Our Advantage
              <span className="block h-px w-8 bg-secondary" />
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="text-3xl font-extrabold leading-tight tracking-[-0.02em] text-primary md:text-5xl">
              Why OneStates Hospitality ?
            </h2>
          </Reveal>

          <Reveal delay={150}>
            <p className="mt-5 max-w-150 text-base font-medium leading-8 text-(--primary)/65 md:mx-auto md:text-lg">
              From concept to culture — we bring unmatched expertise, deep
              hospitality insight, and a genuine commitment to your growth.
            </p>
          </Reveal>
        </div>

        <div className="wcu-grid relative">
          <div className="wcu-col">
            {LEFT.map((feature, index) => (
              <Reveal key={feature.title} delay={index * 90}>
                <FeatureCard {...feature} align="right" />
              </Reveal>
            ))}
          </div>

          <div className="wcu-center-col relative">
            <Reveal delay={60}>
              <div className="relative aspect-3/4 overflow-hidden rounded-[20px] bg-[#1a1a1a] shadow-[0_32px_80px_rgba(0,0,0,.18)]">
                <div className="absolute left-0 right-0 top-0 z-2 h-1 bg-[#ee7124]" />

                <div className="wcu-photo-inner absolute inset-0">
                  <Image
                    src="/images/why-choose-us.jpg"
                    alt="Our hospitality expertise"
                    fill
                    className="object-cover object-center"
                    sizes="360px"
                  />
                </div>

                <div className="absolute inset-0 z-1 bg-[linear-gradient(to_top,rgba(35,38,39,.75)_0%,transparent_55%)]" />

                <div className="absolute inset-x-0 bottom-0 z-2 px-6 pb-6 pt-7">
                  <p className="m-0 text-base font-bold leading-tight text-white">
                    Hospitality &amp; Consultancy
                  </p>

                  <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#ee7124]">
                    Excellence Delivered
                  </p>
                </div>

                <div className="absolute -right-3.5 top-5 z-3 rounded-xl bg-[#ee7124] px-4.5 py-2.5 text-white shadow-[0_8px_24px_rgba(238,113,36,.35)]">
                  <p className="m-0 text-xl font-extrabold leading-none">15+</p>
                  <p className="m-0 mt-1 text-[10px] uppercase tracking-[0.12em] opacity-90">
                    Years
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-7 text-center">
                <div
                  onClick={() => scrollTo("contact")}
                  className="inline-block rounded-full bg-[#232627] px-9 py-3.5 text-[13px] font-bold tracking-[0.08em] text-white no-underline transition-colors duration-200 hover:bg-[#ee7124]"
                >
                  Get a Free Consultation →
                </div>
              </div>
            </Reveal>
          </div>

          <div className="wcu-col">
            {RIGHT.map((feature, index) => (
              <Reveal key={feature.title} delay={index * 90}>
                <FeatureCard {...feature} align="left" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function FeatureCard({ icon, title, desc, align }) {
  const isRight = align === "right";

  return (
    <div
      className={`wcu-card flex flex-col gap-3.5 rounded-2xl border-[1.5px] border-[#ebebeb] bg-white px-6 py-7 ${
        isRight ? "items-end text-right" : "items-start text-left"
      }`}
    >
      <div
        className={`wcu-icon flex h-13 w-13 items-center justify-center rounded-[14px] bg-[rgba(238,113,36,.09)] text-[#ee7124] ${
          isRight ? "self-end" : "self-start"
        }`}
        style={{ order: isRight ? 1 : 0 }}
      >
        {icon}
      </div>

      <div>
        <h3 className="mb-2 text-base font-extrabold text-[#232627]">
          {title}
        </h3>

        <p className="m-0 text-sm font-medium leading-7 text-[#232627]/60">
          {desc}
        </p>
      </div>
    </div>
  );
}
