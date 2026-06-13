"use client";

import { motion } from "framer-motion";
import { Users, Network, BarChart3, Layers, Award } from "lucide-react";
import { GridPattern } from "../common/Patterns";
import Image from "next/image";

const PILLARS = [
  {
    icon: Users,
    title: "Relationship-Driven Approach",
    desc: "We believe long-term business growth is built through trust, strong partnerships and transparent execution.",
  },
  {
    icon: Network,
    title: "Strong Industry Network",
    desc: "Strong connections with hospitality brands, developers, investors and commercial stakeholders help us create valuable growth opportunities.",
  },
  {
    icon: BarChart3,
    title: "Strategic Market Understanding",
    desc: "We help businesses identify scalable opportunities through market insights, strategic planning and practical execution.",
  },
  {
    icon: Layers,
    title: "End-to-End Advisory",
    desc: "From tie-ups and leasing to asset transactions and collaborations, we provide complete advisory support at every stage.",
  },
];

export default function WhyUs() {
  return (
    <section className="relative bg-primary py-10 md:py-28 overflow-hidden z-10 text-white">
      {/* Background structural grid pattern */}
      <GridPattern opacity={0.03} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* ─── LEFT COLUMN: HERO IMAGE & LEADERSHIP MILESTONE (5/12 Cols) ─── */}
          <div className="lg:col-span-5 relative group">
            {/* Visual accent backdrop block */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary/10 rounded-3xl pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-3/4 rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-white/5"
            >
              <Image
                src="/images/why-us.avif"
                width={1000}
                height={400}
                alt="Modern commercial corporate tower reflecting elite market execution"
                className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
                loading="lazy"
              />

              {/* Deep gradient overlay to blend copy readability cleanly */}
              <div className="absolute inset-0 bg-linear-to-t from-primary via-primary/20 to-transparent mix-blend-multiply" />

              {/* ─── 25+ YEARS LEADERSHIP FEATURE CARD ─── */}
              <div className="absolute bottom-0 left-0 right-0 sm:p-8 p-4 bg-linear-to-t from-primary via-primary/95 to-primary/80 backdrop-blur-md border-t border-white/10">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-xl text-secondary border border-secondary/20 shrink-0">
                    <Award size={28} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-2xl font-black text-white tracking-tight mb-2">
                      25+ Years of Leadership Experience
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      With 25+ years of leadership experience across
                      hospitality, FMCG and business expansion, we bring strong
                      expertise in strategic growth, partnerships and market
                      development.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ─── RIGHT COLUMN: FEATURE GRID (7/12 Cols) ─── */}
          <div className="lg:col-span-7">
            {/* Section Tag */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-secondary" />
              <span className="text-secondary text-xs font-black tracking-[0.3em] uppercase">
                Our Value Proposition
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-white font-black text-3xl md:text-5xl tracking-tight mb-12">
              Why OneStates <span className="text-secondary">Hospitality</span>
            </h2>

            {/* Core Pillars Split Sub-Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              {PILLARS.map((pillar, index) => {
                const IconComponent = pillar.icon;

                return (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex flex-col gap-4 group"
                  >
                    {/* Icon Container - Turns into your solid secondary color on hover */}
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-primary group-hover:border-secondary transition-all duration-300">
                      <IconComponent size={22} strokeWidth={1.8} />
                    </div>

                    {/* Content */}
                    <div>
                      <h4 className="text-white font-bold text-lg tracking-tight mb-2 group-hover:text-secondary transition-colors duration-200">
                        {pillar.title}
                      </h4>
                      <p className="text-white/50 text-sm leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
