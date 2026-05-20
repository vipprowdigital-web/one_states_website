"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GridPattern, DiagPattern } from "@/components/common/Patterns";
import { fadeIn, fadeUp } from "@/components/common/variants";
import { scrollTo } from "../common/scrollTo";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section
      ref={ref}
      className="relative md:min-h-screen bg-white overflow-hidden flex items-center"
    >
      {/* Background patterns */}
      <GridPattern opacity={0.1} stroke="black" />
      <DiagPattern />

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.07 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute -top-40 -right-40 w-175 h-175 rounded-full border border-secondary"
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.04 }}
        transition={{ duration: 1.5, delay: 0.7 }}
        className="absolute -top-20 -right-20 w-125 h-125 rounded-full border border-"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full pt-28 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT — Text */}
        <motion.div style={{ y: textY }} className="relative z-10">
          {/* Eyebrow */}
          {/* <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={0}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-8 h-0.5 bg-secondary" />
            <span className="text-secondary text-xs font-black tracking-[0.3em] uppercase">
              Premium Real Estate
            </span>
          </motion.div> */}

          {/* Heading */}
          <div className="overflow-hidden">
            {["ONE", "STATES", "HOSPITALITY."].map((line, i) => (
              <motion.div
                key={line}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={i * 0.15 + 0.2}
              >
                <h1 className="font-black text-5xl lg:text-7xl text-primary leading-none tracking-tight">
                  {line.includes("STATES") ? (
                    <>
                      <span className="text-secondary">STATES</span>
                    </>
                  ) : (
                    line
                  )}
                </h1>
              </motion.div>
            ))}
          </div>
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={0}
            className="flex items-center gap-3 my-3"
          >
            <span className="text-secondary text-xs font-black tracking-[0.3em] uppercase">
              Hospitality Expansion • <br /> Strategic Partnerships • Asset
              Advisory
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.7}
            className="mt-7 text-primary text-base leading-relaxed max-w-md font-medium"
          >
            Helping Hospitality Brands, Hotel Chains, Developers & Investors
            Scale Through Strategic Collaborations, Brand Tie-Ups &
            Growth-Focused Advisory Solutions.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.85}
            className="mt-10 flex items-center gap-6 flex-wrap"
          >
            <motion.button
              whileHover={{ scale: 1.04, backgroundColor: "#d4631e" }}
              whileTap={{ scale: 0.97 }}
              className="bg-secondary text-white px-8 py-4 font-black text-sm tracking-widest uppercase flex items-center gap-3"
              onClick={() => scrollTo("services")}
            >
              Explore Services
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="w-4 h-4"
              >
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </motion.button>
            <motion.button
              whileHover={{ x: 4 }}
              className="text-primary font-bold text-sm tracking-wider uppercase flex items-center gap-3 hover:text-secondary transition-colors"
              onClick={() => scrollTo("contact")}
            >
              Schedule a Consultation
              <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:border-secondary transition-colors">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 ml-0.5"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* RIGHT — Image card */}
        <motion.div
          initial={{ opacity: 0, x: 80, rotate: 2 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 block"
        >
          {/* Main image frame */}
          <div
            className="relative rounded-[2.5rem] overflow-hidden"
            style={{ height: 520 }}
          >
            <motion.div style={{ y: imgY }} className="absolute inset-0">
              <div
                className="w-full h-[130%] bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80')`,
                  filter: "brightness(0.85)",
                }}
              />
            </motion.div>
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-linear-to-t from-[#232627]/60 via-transparent to-transparent" />

            {/* Bottom badge */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-3 flex items-center gap-3"
            >
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-white text-xs font-bold tracking-widest uppercase">
                12 New Listings Today
              </span>
            </motion.div> */}
          </div>

          {/* Floating card */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -bottom-8 -left-10 bg-secondary p-5 shadow-2xl"
          >
            <p className="text-white font-black text-3xl leading-none">
              ₹4.2Cr
            </p>
            <p className="text-white/70 text-xs font-semibold tracking-widest uppercase mt-1">
              Avg Premium Price
            </p>
          </motion.div> */}

          {/* Arrow circle */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-5 -right-5 w-16 h-16 bg-secondary rounded-full flex items-center justify-center shadow-xl"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              className="w-6 h-6"
            >
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-xs font-bold tracking-[0.3em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-linear-to-b from-white/30 to-transparent"
        />
      </motion.div>
    </section>
  );
}
