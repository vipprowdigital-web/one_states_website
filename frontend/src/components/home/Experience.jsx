"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Building, ShieldCheck, Milestone } from "lucide-react";
import { GridPattern } from "../common/Patterns";

export default function Experience() {
  return (
    <section className="relative bg-white py-10 md:py-28 overflow-hidden z-10">
      {/* Background visual texture */}
      <GridPattern opacity={0.02} />

      {/* Large background typographical watermark */}
      <div className="absolute top-10 left-0 text-primary/1 font-black text-[220px] leading-none select-none pointer-events-none tracking-tighter">
        TRACK RECORD
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* ─── LEFT COLUMN: EXACT COPY & STATS GRID (7/12 Cols) ─── */}
          <div className="lg:col-span-7">
            {/* Section Badge */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-secondary" />
              <span className="text-secondary text-xs font-black tracking-[0.3em] uppercase">
                EXPERIENCE SECTION
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-primary font-black text-3xl md:text-5xl tracking-tight mb-8">
              Industry Experience &{" "}
              <span className="text-secondary">Collaborations</span>
            </h2>

            {/* Core Narrative Paragraphs */}
            <div className="space-y-6 text-base leading-relaxed text-primary/80 mb-10">
              <p className="text-lg font-medium text-primary">
                Over the years, OneStates Hospitality has been associated with
                hospitality collaborations and strategic transactions, including
                projects with Espire Hospitality and Ananta Hotels and Resorts
                for hotel and destination resort developments.
              </p>
              <p className="text-primary/70 border-l-2 border-secondary pl-4 bg-secondary/1 py-2">
                Our expertise combines hospitality consulting with strong
                business leadership experience across large-scale operations,
                strategic expansion and relationship-driven growth.
              </p>
            </div>

            {/* Mini Brand Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-primary/10">
              <div className="flex gap-4 items-start">
                <div className="p-2 bg-primary/5 text-secondary rounded-lg mt-1">
                  <Building size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-sm uppercase tracking-wider mb-1">
                    Elite Partners
                  </h4>
                  <p className="text-xs text-primary/60">
                    Associated with Espire & Ananta Hotels benchmarks.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-2 bg-primary/5 text-secondary rounded-lg mt-1">
                  <Milestone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-sm uppercase tracking-wider mb-1">
                    Strategic Focus
                  </h4>
                  <p className="text-xs text-primary/60">
                    High-yield destination resort developments.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ─── RIGHT COLUMN: ASYMMETRICAL COLLAGE GRID (5/12 Cols) ─── */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full aspect-4/5 md:aspect-3/4">
              {/* Back Accent Block */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/10 rounded-2xl pointer-events-none" />

              {/* Main Primary Image Container */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-[85%] h-[85%] rounded-3xl overflow-hidden shadow-2xl border border-primary/10 relative z-10"
              >
                <img
                  src="/images/why.png"
                  alt="Premium Luxury Destination Resort Development Portfolio"
                  className="w-full h-full object-cover grayscale-[15%] contrast-[105%]"
                />
              </motion.div>

              {/* Overlapping Secondary Image Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: 30 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute bottom-0 right-0 w-[55%] h-[50%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-20"
              >
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=500&q=80"
                  alt="Corporate hospitality consulting negotiation meeting environment"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
