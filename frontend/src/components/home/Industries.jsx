"use client";

import { GridPattern } from "../common/Patterns";
import { SectionReveal } from "../common/SectionReveal";
import { motion } from "framer-motion";
import { fadeIn, fadeUp } from "../common/variants";
import {
  Stethoscope,
  Building2,
  Hotel,
  Factory,
  GraduationCap,
  ShoppingBag,
} from "lucide-react";

const INDUSTRIES = [
  {
    icon: Stethoscope,
    title: "Healthcare",
    desc: "Specialized clinics, hospitals & wellness centers built for modern medicine.",
    count: "120+ Projects",
    color: "#ee7124",
  },
  {
    icon: Building2,
    title: "Corporate",
    desc: "Premium office spaces & headquarters designed for productivity and prestige.",
    count: "340+ Projects",
    color: "#232627",
  },
  {
    icon: Hotel,
    title: "Hospitality",
    desc: "Luxury hotels, resorts & serviced apartments that redefine guest experience.",
    count: "85+ Projects",
    color: "#ee7124",
  },
  {
    icon: Factory,
    title: "Industrial",
    desc: "Smart warehouses, manufacturing hubs & logistics parks for modern operations.",
    count: "210+ Projects",
    color: "#232627",
  },
  {
    icon: GraduationCap,
    title: "Education",
    desc: "Campuses, academies & research institutes built for knowledge and growth.",
    count: "65+ Projects",
    color: "#ee7124",
  },
  {
    icon: ShoppingBag,
    title: "Retail",
    desc: "High-footfall malls, showrooms & mixed-use commercial spaces.",
    count: "175+ Projects",
    color: "#232627",
  },
];

export default function Industries() {
  return (
    <section className="relative bg-[#232627] py-28 overflow-hidden">
      <GridPattern opacity={0.04} />

      {/* Large background text */}
      {/* <div className="absolute top-0 right-0 text-white/2 font-black text-[200px] leading-none select-none pointer-events-none">
        SECTORS
      </div> */}

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <motion.div
                variants={fadeIn}
                custom={0}
                className="flex items-center gap-3 mb-4"
              >
                <div className="w-8 h-0.5 bg-[#ee7124]" />
                <span className="text-[#ee7124] text-xs font-black tracking-[0.3em] uppercase">
                  Our Verticals
                </span>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                custom={0.1}
                className="text-white font-black text-4xl md:text-5xl leading-tight tracking-tight"
              >
                Industries We
                <br />
                <span className="text-[#ee7124]">Serve</span>
              </motion.h2>
            </div>
            <motion.p
              variants={fadeUp}
              custom={0.3}
              className="text-white/40 text-sm leading-relaxed max-w-sm"
            >
              From healthcare campuses to industrial parks, we bring deep domain
              expertise to every sector we touch.
            </motion.p>
          </div>
        </SectionReveal>

        <SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
            {INDUSTRIES.map((ind, i) => {
              // Extract the component layout dynamically
              const IconComponent = ind.icon;

              return (
                <motion.div
                  key={ind.title}
                  variants={fadeUp}
                  custom={i * 0.08}
                  className="relative bg-[#232627] p-8 group overflow-hidden cursor-pointer"
                >
                  {/* Hover background slide fill */}
                  <motion.div
                    className="absolute inset-0 bg-[#ee7124]"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    style={{ originX: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      {/* Dynamic Vector Icon Wrapper */}
                      <div className="text-[#ee7124] group-hover:text-white transition-colors duration-300">
                        <IconComponent size={36} strokeWidth={1.5} />
                      </div>

                      <span className="text-white/20 text-xs font-black tracking-widest group-hover:text-white/40 transition-colors">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="text-white font-black text-2xl tracking-tight mb-3 group-hover:text-white transition-colors">
                      {ind.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed mb-6 group-hover:text-white/80 transition-colors">
                      {ind.desc}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-[#ee7124] font-black text-sm tracking-wider group-hover:text-white transition-colors">
                        {ind.count}
                      </span>
                      <motion.div
                        className="w-8 h-8 border border-white/20 flex items-center justify-center group-hover:border-white/60 transition-colors"
                        whileHover={{ rotate: 45 }}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="w-4 h-4 text-white/40 group-hover:text-white transition-colors"
                        >
                          <path d="M7 17L17 7M17 7H7M17 7v10" />
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
