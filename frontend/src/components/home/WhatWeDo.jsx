"use client";

import { DiagPattern } from "../common/Patterns";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { fadeIn, fadeUp, slideLeft } from "../common/variants";
import { SectionReveal } from "../common/SectionReveal";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const SERVICES = [
  {
    num: "01",
    title: "Hotel Brand Tie-Ups",
    desc: "Helping hotel owners and developers partner with leading hospitality brands through - Management Contract, MG / Revenue Sharing, Franchise Model and Pure Lease Model.",
    link: "/services/hotel-brand-tie-ups",
  },
  {
    num: "02",
    title: "Commercial Retail Leasing",
    desc: "Strategic leasing solutions for - Retail Brands, NBFCs, Commercial Developers, High-Street & Retail Spaces",
    link: "/images/comm.png",
  },
  {
    num: "03",
    title: "Warehouse Solutions",
    desc: "Warehouse and industrial space solutions for, 3PL Logistics Players, FMCG Companies, Distribution & Supply Chain Businesses.",
    link: "/images/warehouse.png",
  },
  {
    num: "04",
    title: "Large Asset Transaction Advisory",
    desc: "Advisory and transaction support for - Hotels & Resorts, Commercial Assets, Land Parcels and Investment Opportunities.",
    link: "/services/large-asset-transaction-advisory",
  },
  {
    num: "05",
    title: "JV & Strategic Collaborations",
    desc: "Partnership and collaboration consulting for - Housing Projects, Hotels & Resorts, Warehousing Projects and Mixed-Use Developments.",
    link: "/services/jv-collaboration",
  },
];

export default function WhatWeDo() {
  const [active, setActive] = useState(0);

  return (
    <section
      className="relative bg-white py-10 md:py-28 overflow-hidden"
      id="services"
    >
      <DiagPattern />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-5 md:mb-20">
            <div>
              <motion.div
                variants={fadeIn}
                custom={0}
                className="flex items-center gap-3 mb-4"
              >
                <div className="w-8 h-0.5 bg-secondary" />
                <span className="text-secondary text-xs font-black tracking-[0.3em] uppercase">
                  Our Services
                </span>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                custom={0.1}
                className="text-primary font-black text-4xl md:text-5xl leading-tighter tracking-tighter"
              >
                What We
                <br />
                <span className="text-secondary">Do Best</span>
              </motion.h2>
            </div>
            <motion.p
              variants={fadeUp}
              custom={0.3}
              className="text-primary/50 text-sm leading-relaxed max-w-sm"
            >
              Comprehensive real estate services delivered with precision,
              integrity and an unwavering focus on your success.
            </motion.p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — Service list */}
          <SectionReveal>
            <div className="flex flex-col">
              {SERVICES.map((svc, i) => (
                <motion.div
                  key={svc.num}
                  variants={slideLeft}
                  custom={i * 0.1}
                  onClick={() => setActive(i)}
                  className={`group border-b border-white py-7 cursor-pointer transition-all duration-300 ${
                    active === i ? "border-b-secondary" : ""
                  }`}
                >
                  <div className="flex items-start gap-3 sm:gap-6">
                    <span
                      className={`font-black text-2xl sm:text-5xl leading-none transition-colors duration-300 ${
                        active === i ? "text-secondary" : "text-[#e5e5e5]"
                      }`}
                    >
                      {svc.num}
                    </span>
                    <div className="flex-1 pt-1">
                      <h3
                        className={`font-black text-xl tracking-tight mb-2 transition-colors duration-300 ${
                          active === i
                            ? "text-primary"
                            : "text-primary/50 group-hover:text-primary"
                        }`}
                      >
                        {svc.title}
                      </h3>
                      <AnimatePresence>
                        {active === i && (
                          <>
                            <motion.p
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.35 }}
                              className="text-primary/60 font-semibold text-sm leading-relaxed overflow-hidden"
                            >
                              {svc.desc}
                            </motion.p>
                            <Link
                              href={svc.link}
                              className="text-secondary font-bold flex flex-row items-center gap-2 mt-3"
                            >
                              {" "}
                              Know More{" "}
                              <ArrowRight className="-rotate-45" size={18} />
                            </Link>
                          </>
                        )}
                      </AnimatePresence>
                    </div>

                    <motion.div
                      animate={{ rotate: active === i ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`w-8 h-8 border flex items-center justify-center shrink-0 transition-colors duration-300 ${
                        active === i
                          ? "border-secondary bg-secondary"
                          : "border-[#e5e5e5]"
                      }`}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={active === i ? "white" : "#232627"}
                        strokeWidth="2.5"
                        className="w-4 h-4"
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </SectionReveal>

          {/* Right — Visual */}
          <SectionReveal className="block">
            <motion.div variants={fadeUp} custom={0.2} className="relative">
              {/* Main image */}
              <div className="relative h-120 md:h-137.5 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url('${
                        [
                          "/images/comm.png",
                          "/images/warehouse.png",
                          "/images/hotel.png",
                          "/images/jv.png",
                          "/images/leasing.png",
                        ][active]
                      }')`,
                    }}
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-linear-to-t from-primary/50 to-transparent" />

                {/* Service label overlay */}
                <div className="absolute bottom-8 left-8 right-8">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={active}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4 }}
                    >
                      <p className="text-white/60 text-xs font-bold tracking-[0.2em] uppercase mb-1">
                        {SERVICES[active].num}
                      </p>
                      <h3 className="text-white font-black text-2xl">
                        {SERVICES[active].title}
                      </h3>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Accent border */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-secondary -z-10" />

              {/* Small badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -top-5 -left-3 sm:-left-5 bg-primary px-5 py-2"
              >
                <p className="text-secondary font-black text-lg">4,200+</p>
                <p className="text-white/50 text-xs font-bold tracking-widest uppercase">
                  Properties
                </p>
              </motion.div>
            </motion.div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
