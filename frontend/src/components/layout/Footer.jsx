"use client";

import { GridPattern } from "../common/Patterns";
import { SectionReveal } from "../common/SectionReveal";
import { motion } from "framer-motion";
import { fadeUp, fadeIn } from "../common/variants";
import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "What We Do", href: "/services" },
  { name: "Blogs", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const services = [
  { name: "Hotel Brand Tie-Ups", href: "/services/hotel-brand-tie-ups" },
  {
    name: "Commercial Retail Leasing",
    href: "/services/commercial-retail-leasing",
  },
  { name: "Warehouse Solutions", href: "/services/warehouse-leasing" },
  {
    name: "Large Asset Transaction Advisory",
    href: "/services/large-asset-transaction-advisory",
  },
  { name: "JV & Strategic Collaborations", href: "/services/jv-collaboration" },
];
const industries = [
  "Healthcare",
  "Corporate",
  "Hospitality",
  "Industrial",
  "Education",
  "Retail",
];

const CITIES = [
  "Bengaluru",
  "Mumbai",
  "Delhi NCR",
  "Hyderabad",
  "Pune",
  "Chennai",
  "Ahmedabad",
  "Kolkata",
];

export default function Footer() {
  return (
    <footer className="relative bg-primary overflow-hidden">
      <GridPattern id="footer-grid" color="white" opacity={0.03} />

      <div className="h-1 w-full bg-secondary" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-12 relative z-10">
        <SectionReveal>
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 pb-16 border-b border-white/10">
            <motion.div variants={fadeUp} custom={0} className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-6 w-50">
                <Image
                  src="/one-states-logo-light.png"
                  alt="One States Logo"
                  width={1000}
                  height={500}
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>

              <p className="text-white/40 text-sm leading-relaxed mb-8 max-w-xs">
                Strategic Hospitality Expansion, Brand Tie-Ups, Asset
                Transactions & Commercial Collaboration Solutions.
              </p>

              {/* Cities */}
              <div>
                <p className="text-white/30 text-[10px] font-black tracking-[0.3em] uppercase mb-3">
                  We Operate In
                </p>
                <div className="flex flex-wrap gap-2">
                  {CITIES.map((city) => (
                    <motion.span
                      key={city}
                      whileHover={{
                        backgroundColor: "rgba(238,113,36,0.2)",
                        borderColor: "#ee7124",
                        color: "#ffffff",
                      }}
                      className="border border-white/10 text-white/40 text-[10px] font-bold tracking-wider px-3 py-1.5 uppercase cursor-pointer transition-all duration-300"
                    >
                      {city}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Links columns */}
            <motion.div
              variants={fadeUp}
              // custom={index * 0.1 + 0.2}
              className="lg:col-span-2"
            >
              <p className="text-secondary text-[10px] font-black tracking-[0.3em] uppercase mb-6">
                Quick Links
              </p>
              <ul className="flex flex-col gap-3">
                {quickLinks.map((link, index) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 4, color: "#ee7124" }}
                      transition={{ duration: 0.2 }}
                      className="text-white/40 text-sm font-semibold tracking-wide hover:text-secondary inline-flex items-center gap-2 group transition-colors duration-300"
                    >
                      <span className="w-0 group-hover:w-3 h-px bg-secondary transition-all duration-300 overflow-hidden" />
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              variants={fadeUp}
              // custom={index * 0.1 + 0.2}
              className="lg:col-span-2"
            >
              <p className="text-secondary text-[10px] font-black tracking-[0.3em] uppercase mb-6">
                Quick Links
              </p>
              <ul className="flex flex-col gap-3">
                {services.map((link, index) => (
                  <li key={link.name + index}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 4, color: "#ee7124" }}
                      transition={{ duration: 0.2 }}
                      className="text-white/40 text-sm font-semibold tracking-wide hover:text-secondary inline-flex items-center gap-2 group transition-colors duration-300"
                    >
                      <span className="w-0 group-hover:w-3 h-px bg-secondary transition-all duration-300 overflow-hidden" />
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              variants={fadeUp}
              // custom={index * 0.1 + 0.2}
              className="lg:col-span-2"
            >
              <p className="text-secondary text-[10px] font-black tracking-[0.3em] uppercase mb-6">
                Industries
              </p>
              <ul className="flex flex-col gap-3">
                {industries.map((ind, index) => (
                  <li key={ind + "ind" + index}>
                    <motion.p
                      whileHover={{ x: 4, color: "#ee7124" }}
                      transition={{ duration: 0.2 }}
                      className="text-white/40 text-sm font-semibold tracking-wide hover:text-secondary inline-flex items-center gap-2 group transition-colors duration-300"
                    >
                      <span className="w-0 group-hover:w-3 h-px bg-secondary transition-all duration-300 overflow-hidden" />
                      {ind}
                    </motion.p>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </SectionReveal>

        {/* Certifications / badges row */}
        {/* <SectionReveal>
          <motion.div
            variants={fadeUp}
            custom={0.1}
            className="flex flex-wrap items-center gap-6 py-10 border-b border-white/10"
          >
            <span className="text-white/20 text-[10px] font-black tracking-[0.3em] uppercase">
              Certifications & Memberships
            </span>
            {[
              "RERA Certified",
              "ISO 9001:2015",
              "NAR India Member",
              "CREDAI Member",
              "Green Building Council",
            ].map((badge) => (
              <div
                key={badge}
                className="border border-white/10 px-4 py-2 text-white/30 text-[10px] font-bold tracking-wider uppercase"
              >
                {badge}
              </div>
            ))}
          </motion.div>
        </SectionReveal> */}

        {/* Bottom row */}
        <SectionReveal>
          <motion.div
            variants={fadeIn}
            custom={0.1}
            className="flex flex-col md:flex-row items-center justify-between gap-6 pt-10"
          >
            <p className="text-white/20 text-xs text-center md:text-left font-semibold tracking-widest uppercase">
              &copy; {new Date().getFullYear()} OneStates Hospitality Pvt. Ltd.
              All rights reserved.
            </p>

            {/* <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-white/30 text-xs font-semibold tracking-wider">
                All systems operational
              </span>
            </div> */}
            <div className="flex items-center gap-6">
              <Link
                href="/privacy-policy"
                className="text-white/20 text-xs font-bold tracking-wider uppercase hover:text-secondary transition-colors duration-300 text-center"
              >
                Privacy Policy
              </Link>
              {/* <Link
    href="/terms-of-use"
    className="text-white/20 text-xs font-bold tracking-wider uppercase hover:text-secondary transition-colors duration-300 text-center"
  >
    Terms of Use
  </Link> */}
            </div>
            <a
              className="text-white/20 text-xs text-center md:text-left font-semibold tracking-widest uppercase"
              href="https://vipprow.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Developed by <span className="text-secondary">VIPPROW</span>
            </a>
          </motion.div>
        </SectionReveal>
      </div>
    </footer>
  );
}
