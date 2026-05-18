import { motion } from "framer-motion";
import { SectionReveal } from "../common/SectionReveal";
import { DiagPattern } from "../common/Patterns";
import { slideLeft, fadeUp } from "../common/variants";
import Image from "next/image";

const CLIENTS = [
  { name: "Godrej Properties", abbr: "GP" },
  { name: "DLF Group", abbr: "DLF" },
  { name: "Sobha Realty", abbr: "SR" },
  { name: "Prestige Group", abbr: "PG" },
  { name: "Lodha Group", abbr: "LG" },
  { name: "Brigade Group", abbr: "BG" },
  { name: "Mahindra Lifespace", abbr: "ML" },
  { name: "Embassy Group", abbr: "EG" },
];

export default function Clients() {
  const doubled = [...CLIENTS, ...CLIENTS];

  return (
    <section className="relative py-10 md:pt-20 overflow-hidden border-b border-white">
      {/* ─── BACKGROUND IMAGE ─── */}
      {/* <Image
        src="/images/clients.jpg"
        fill 
        alt="Client Real Estate Background Portfolio"
        className="object-cover z-0"
        priority 
      /> */}

      {/* Subtle overlay screen to blend background contrast and maintain text legibility */}
      {/* <div className="absolute inset-0 bg-white/30 z-0 pointer-events-none" /> */}

      <div className="relative z-10">
        <SectionReveal>
          <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-12 flex md:flex-row flex-col md:items-center md:gap-6 gap-3">
            <motion.div
              variants={slideLeft}
              custom={0}
              className="flex items-center gap-4"
            >
              <div className="w-8 h-0.5 bg-secondary" />
              <span className="text-secondary text-xs font-black tracking-[0.3em] uppercase">
                Trusted By
              </span>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              custom={0.1}
              className="text-primary font-black text-3xl md:text-5xl tracking-tight"
            >
              India&apos;s Leading{" "}
              <span className="text-secondary">Real Estate Brands</span>
            </motion.h2>
          </div>
        </SectionReveal>

        {/* Marquee Wrapper Window */}
        <div className="relative w-full overflow-hidden">
          {/* Transparent left / right edge fading masks */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-linear-to-r from-white to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-linear-to-l from-white to-transparent z-20 pointer-events-none" />

          <motion.div
            className="flex gap-8 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 22, ease: "linear", repeat: Infinity }}
          >
            {doubled.map((c, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, borderColor: "#ee7124" }}
                // Added explicit 'bg-white shadow-md' to isolate the individual cards from the backdrop image
                className="shrink-0 w-52 h-20 border-2 border-[#e5e5e5] bg-white shadow-sm rounded-xl flex items-center justify-center gap-3 px-6 my-2 cursor-pointer transition-all duration-300 group relative z-10"
              >
                <div className="w-10 h-10 bg-primary text-white flex items-center justify-center font-black text-xs tracking-wider group-hover:bg-secondary transition-colors duration-300 rounded-lg">
                  {c.abbr}
                </div>
                <span className="text-primary font-bold text-sm tracking-wide">
                  {c.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
