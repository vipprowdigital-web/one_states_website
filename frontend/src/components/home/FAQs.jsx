"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { GridPattern } from "../common/Patterns";

const FAQ_DATA = [
  {
    question: "What is your typical project delivery timeline?",
    answer:
      "Timelines depend directly on project scale. Generally, specialized commercial assets take between 6 to 14 months. We establish strict target milestones during pre-construction planning to guarantee scheduling precision.",
  },
  {
    question: "Do you assist with zoning laws and structural permits?",
    answer:
      "Yes, fully. We handle the complete end-to-end municipal compliance cycle, managing zoning clearance approvals, site engineering evaluations, and formal architectural permits before construction commences.",
  },
  {
    question: "Can we track construction progression updates in real time?",
    answer:
      "Absolutely. Every client receives dedicated secure platform access where progress benchmarks, site logistics photos, and updated timelines are posted live by our management supervisors.",
  },
  {
    question: "How do you manage materials sourcing and quality control?",
    answer:
      "We source directly from premium global partners matching strict structural specifications. Our dedicated QA teams review materials on arrival to ensure structural integrity standards are consistently met.",
  },
];

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative bg-white py-20 md:py-28 overflow-hidden z-10 border-t border-primary/10">
      <GridPattern opacity={0.02} />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Header Block */}
        <div className="md:text-center mb-7 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-1.5 rounded-full mb-4 border border-secondary/20">
            <span className="text-secondary text-xs font-black tracking-[0.2em] uppercase">
              Inquiries
            </span>
          </div>
          <h2 className="text-primary font-black text-3xl md:text-5xl tracking-tight">
            Frequently Asked <span className="text-secondary">Questions</span>
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <motion.div
                key={index}
                layout
                className={`border rounded-2xl transition-colors duration-300 ${
                  isOpen
                    ? "border-secondary/40 bg-secondary/5 shadow-sm"
                    : "border-primary/20 bg-white hover:border-primary/40"
                }`}
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none select-none"
                >
                  <span
                    className={`text-lg font-bold tracking-tight transition-colors duration-200 ${
                      isOpen ? "text-secondary" : "text-primary"
                    }`}
                  >
                    {faq.question}
                  </span>

                  {/* Dynamic Turning Chevron Icon */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className={`shrink-0 ml-4 p-1 rounded-full ${
                      isOpen
                        ? "text-secondary bg-secondary/10"
                        : "text-primary/40"
                    }`}
                  >
                    <ChevronDown size={20} strokeWidth={2.5} />
                  </motion.div>
                </button>

                {/* Animated Collapsible Expand Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 250,
                        damping: 25,
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pr-12 text-primary/70 text-base font-semibold leading-relaxed border-t border-primary/5 pt-3">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
