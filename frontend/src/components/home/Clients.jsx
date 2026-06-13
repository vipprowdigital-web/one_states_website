"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionReveal } from "../common/SectionReveal";
import { slideLeft, fadeUp } from "../common/variants";
import Image from "next/image";

/*
  ✅ Uses logos downloaded via download-logos.mjs script
  Files live in: /public/images/clients/

  If a file is missing or fails to load, the brand's
  initials (abbr) box shows automatically as fallback.
*/

const CLIENTS = [
  { name: "Atmosphere Group", abbr: "AG", logo: "atmosphere.png" },
  
  { name: "Lords", abbr: "L", logo: "lords.png" },
  { name: "Tivoli", abbr: "T", logo: "tivoli.png" },
  { name: "Clark's Inn", abbr: "CI", logo: "clarks-inn.png" },
  { name: "SaltStayz", abbr: "SS", logo: "saltstayz.png" },
  { name: "Oyo Sunday", abbr: "OS", logo: "oyo-sunday.png" },
  { name: "The Park", abbr: "TP", logo: "the-park.png" },
  { name: "Fern Hotel", abbr: "FH", logo: "fern-hotel.png" },
  { name: "Country Inn Hotel & Suites", abbr: "CIHS", logo: "country-inn.png" },
  { name: "ITC", abbr: "ITC", logo: "itc.png" },
  { name: "Radisson", abbr: "R", logo: "radisson.png" },
  { name: "Hilton", abbr: "H", logo: "hilton.png" },
  { name: "Taj", abbr: "T", logo: "taj.png" },

  { name: "Justa", abbr: "J", logo: "justa.png" },
  { name: "Lemon Tree", abbr: "LT", logo: "lemon-tree.png" },
  { name: "Pride Hotel", abbr: "PH", logo: "pride-hotel.png" },
  { name: "Sarover Portico", abbr: "SP", logo: "sarover-portico.png" },
 
  { name: "World Hotel", abbr: "WH", logo: "world-hotel.png" },
  { name: "Royal Orchid", abbr: "RO", logo: "royal-orchid.png" },
  { name: "Holiday Inn", abbr: "HI", logo: "holiday-inn.png" },
 
  { name: "Club Mahindra", abbr: "CM", logo: "club-mahindra.png" },
  

  { name: "Ramada by Wyndham", abbr: "RW", logo: "ramada.png" },
  { name: "Levelup", abbr: "LU", logo: "levelup.png" },
];

/* ── Single client card with logo + fallback ── */
function ClientCard({ client }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.05, borderColor: "#ee7124" }}
      className="shrink-0 w-52 h-20 border-2 border-[#e5e5e5] bg-white shadow-sm rounded-xl flex items-center justify-center gap-3 px-6 my-2 cursor-pointer transition-all duration-300 group relative z-10"
    >
      {!imgError ? (
        <>
          {/* Real logo (from /public/images/clients/) */}
          <div className="relative h-9 w-9 shrink-0">
            <Image
              src={`/images/clients/${client.logo}`}
              alt={client.name}
              fill
              className="object-contain"
              sizes="36px"
              onError={() => setImgError(true)}
            />
          </div>
          <span className="text-primary font-bold text-sm tracking-wide leading-tight">
            {client.name}
          </span>
        </>
      ) : (
        <>
          {/* Fallback — initials box */}
          <div className="w-10 h-10 bg-primary text-white flex items-center justify-center font-black text-xs tracking-wider group-hover:bg-secondary transition-colors duration-300 rounded-lg shrink-0">
            {client.abbr}
          </div>
          <span className="text-primary font-bold text-sm tracking-wide leading-tight">
            {client.name}
          </span>
        </>
      )}
    </motion.div>
  );
}

export default function Clients() {
  const doubled = [...CLIENTS, ...CLIENTS];

  return (
    <section className="relative py-10 md:pt-20 overflow-hidden border-b border-white">
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
              <span className="text-secondary"> Brands</span>
            </motion.h2>
          </div>
        </SectionReveal>

        {/* Marquee Wrapper Window */}
        <div className="relative w-full overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-linear-to-r from-white to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-linear-to-l from-white to-transparent z-20 pointer-events-none" />

          <motion.div
            className="flex gap-8 w-max"
            animate={{ x: ["0%", "-40%"] }}
            transition={{ duration: 34, ease: "linear", repeat: Infinity }}
          >
            {doubled.map((c, i) => (
              <ClientCard key={i} client={c} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
