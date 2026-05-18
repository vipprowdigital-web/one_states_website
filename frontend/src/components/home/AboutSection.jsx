"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Award, ShieldCheck, Zap } from "lucide-react";
import { GridPattern } from "../common/Patterns";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="relative bg-white py-20 md:py-28 overflow-hidden z-10">
      {/* Subtle brand grid pattern background */}
      <GridPattern opacity={0.02} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* ─── LEFT COLUMN: GRAPHICS & IMAGES (5/12 Cols) ─── */}
          <div className="lg:col-span-5 relative">
            {/* Decorative accent geometry background */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/10 rounded-2xl -z-10 pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 60, damping: 15 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-primary/10 aspect-4/5 bg-primary/5"
            >
              {/* Main Section Image
                  Replace the src path below with your actual local asset image 
                  (e.g., public/images/hospitality-growth.jpg) */}
              <Image
                src="/images/modern-skyscaper.jpg"
                width={800}
                height={100}
                alt="Luxury Hotel Lobby Architecture representing Premium Hospitality Growth"
                className="w-full h-full object-cover grayscale-20 contrast-110 group-hover:scale-105 transition-transform duration-700"
              />

              {/* <div className="absolute bottom-6 right-6 bg-primary text-white p-6 rounded-2xl border border-white/10 max-w-50 shadow-xl backdrop-blur-md">
                <p className="text-secondary font-black text-3xl mb-1 tracking-tight">
                  FMCG
                </p>
                <p className="text-xs text-white/70 uppercase font-black tracking-widest leading-tight">
                  Corporate DNA Leadership
                </p>
              </div> */}
            </motion.div>
          </div>

          {/* ─── RIGHT COLUMN: EXACT COPY & CONTENT (7/12 Cols) ─── */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Mini Category Header */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-8 h-0.5 bg-secondary" />
              <span className="text-secondary text-xs font-black tracking-[0.3em] uppercase">
                Who We Are
              </span>
            </motion.div>

            {/* Main Headline Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-primary font-black text-3xl md:text-5xl tracking-tight mb-5 leading-tight"
            >
              Building Long-Term <br />
              <span className="text-secondary">Hospitality Growth</span>
            </motion.h2>

            {/* Paragraph 1: Core Target Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-primary/80 text-lg leading-relaxed mb-3 font-medium"
            >
              OneStates Hospitality is a strategic consulting and advisory firm
              helping hospitality brands, hotel owners, developers and investors
              identify the right opportunities for expansion and business
              growth.
            </motion.p>

            {/* Paragraph 2: Corporate Track Record Profile */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-primary/60 text-base leading-relaxed mb-3 border-l-2 border-secondary/40 pl-6 italic bg-secondary/2 py-3 rounded-r-xl"
            >
              With leadership experience across organizations like PepsiCo,
              Marico, Himalaya and Hindustan Unilever, we bring a strong
              understanding of business expansion, partnerships, negotiations
              and market strategy.
            </motion.p>

            {/* Paragraph 3: Strategic Corporate Philosophy Focus */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-primary/70 text-base leading-relaxed mb-5"
            >
              Our focus is to create value-driven collaborations across
              hospitality, commercial retail and warehousing sectors through
              trust, execution and long-term vision.
            </motion.p>

            {/* ─── CALL TO ACTION BUTTON ─── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <a
                href="/about"
                className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-xl font-bold tracking-wide transition-all duration-300 group hover:bg-secondary hover:shadow-xl hover:shadow-secondary/20 w-full sm:w-auto justify-center"
              >
                <span>Know More</span>
                <ArrowUpRight
                  size={18}
                  strokeWidth={2.5}
                  className="text-white transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
