"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const MARQUEE_ITEMS = [
  "22+ Years Leadership Experience",
  "Hotel Brand Tie-Ups",
  "Commercial Leasing Solutions",
  "Asset Transactions Advisory",
  "Warehouse & Logistics Solutions",
  "JV & Strategic Collaborations",
];

export default function FeatureMarquee() {
  const containerRef = useRef(null);
  const [animateX, setAnimateX] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const halfWidth = containerRef.current.scrollWidth / 2;
      setAnimateX(halfWidth);
    }
  }, []);

  return (
    <section className="relative w-full bg-primary py-4 overflow-hidden border-y border-secondary/20 z-10">
      <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-linear-to-r from-primary to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-linear-to-l from-primary to-transparent z-20 pointer-events-none" />

      <div className="w-full relative">
        <motion.div
          ref={containerRef}
          className="flex gap-16 items-center w-max whitespace-nowrap"
          animate={animateX ? { x: [0, -animateX] } : {}}
          transition={{
            ease: "linear",
            duration: 20,
            repeat: Infinity,
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {MARQUEE_ITEMS.map((item, index) => (
            <div key={`set1-${index}`} className="flex items-center gap-4">
              <span className="w-2 h-2 rounded-full bg-secondary shrink-0" />
              <span className="text-white font-black uppercase text-sm md:text-base tracking-wider select-none">
                {item}
              </span>
            </div>
          ))}

          {/* Second Duplicate Array Set for Seamless Wrapping Loop */}
          {MARQUEE_ITEMS.map((item, index) => (
            <div key={`set2-${index}`} className="flex items-center gap-4">
              <span className="w-2 h-2 rounded-full bg-secondary shrink-0" />
              <span className="text-white font-black uppercase text-sm md:text-base tracking-wider select-none">
                {item}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
