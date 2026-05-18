"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { GridPattern } from "../common/Patterns";

const TESTIMONIALS = [
  {
    name: "Sarah Jenkins",
    role: "Hospitality Developer",
    content:
      "Professional approach with strong market understanding.OneStates Hospitality helped us identify the right hospitality opportunities with clear strategy and professional guidance.",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Hotel Brand Partner ",
    content:
      "Strong network and excellent execution support. Their industry relationships and practical approach helped us build valuable business collaborations.",
    rating: 5,
  },
  {
    name: "Elena Rostova",
    role: "Commercial Asset Owner ",
    content:
      "Reliable advisory for long-term growth. A highly professional team with strong market understanding and transparent execution throughout the process.",
    rating: 5,
  },
];

// Stagger entry variants for smooth scrolling reveal
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 20,
    },
  },
};

export default function Testimonials() {
  return (
    <section className="relative bg-white pt-10 md:py-28 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header Section */}
        <div className="text-left mx-auto mb-7 md:mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-1.5 rounded-full mb-4 border border-secondary/20"
          >
            <span className="text-secondary text-xs font-black tracking-[0.2em] uppercase">
              Client Feedback
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-primary font-black text-3xl md:text-5xl tracking-tight"
          >
            Trusted by Industry <span className="text-secondary">Leaders</span>
          </motion.h2>
        </div>

        {/* Testimonials Grid Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="bg-white backdrop-blur-sm p-8 rounded-2xl border border-primary/30 relative group transition-all duration-300 hover:border-secondary/30 hover:shadow-xl"
            >
              {/* Floating Quote Icon Accent */}
              <div className="absolute top-6 right-8 text-primary/5 group-hover:text-secondary/20 transition-colors duration-300">
                <Quote size={48} strokeWidth={1} fill="currentColor" />
              </div>

              {/* Star Rating Layout */}
              <div className="flex items-center gap-1 mb-7">
                {[...Array(t.rating)].map((_, index) => (
                  <Star
                    key={index}
                    size={16}
                    className="text-secondary fill-secondary"
                  />
                ))}
              </div>

              {/* Testimonial Core Content */}
              <p className="text-primary/70 text-base leading-relaxed mb-4 relative z-10">
                &quot;{t.content}&quot;
              </p>

              {/* Divider line */}
              <div className="w-full h-px bg-primary/30 mb-4 group-hover:bg-secondary/20 transition-colors duration-300" />

              {/* Author Details Meta */}
              <div className="flex flex-col">
                <span className="text-primary font-bold text-lg tracking-tight group-hover:text-secondary transition-colors duration-300">
                  {t.name}
                </span>
                <span className="text-secondary text-xs font-medium tracking-wide opacity-80">
                  {t.role}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
