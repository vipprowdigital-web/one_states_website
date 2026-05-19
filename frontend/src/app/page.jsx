"use client";

import AboutSection from "@/components/home/AboutSection";
import Clients from "@/components/home/Clients";
import Experience from "@/components/home/Experience";
import FAQs from "@/components/home/FAQs";
import FeatureMarquee from "@/components/home/FeaturesMarquee";
import Hero from "@/components/home/Hero";
import Industries from "@/components/home/Industries";
import Stats from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonials";
import WhatWeDo from "@/components/home/WhatWeDo";
import WhyUs from "@/components/home/WhyUs";
import { motion } from "framer-motion";
import { MessageSquare, PhoneCall, ArrowRight } from "lucide-react";
import { GridPattern } from "@/components/common/Patterns";
import BlogSection from "@/components/home/BlogSection";
import Image from "next/image";
import { useEffect } from "react";
import Loader from "@/components/common/Loader";
import { useAppConfigStore } from "@/store/useAppConfigStore";

export default function Home() {
  const config = useAppConfigStore((state) => state.config);
  const isLoading = useAppConfigStore((state) => state.isLoading);
  const setLoading = useAppConfigStore((state) => state.setLoading);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [setLoading]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="bg-white">
      <Hero />
      <FeatureMarquee />
      <AboutSection />
      <Industries />
      <WhatWeDo />
      <Stats />
      <WhyUs />
      <Experience />
      <Clients />
      <BlogSection />
      <Testimonials />
      <FAQs />
      <FinalCTA config={config} />
    </div>
  );
}

function FinalCTA({ config }) {
  return (
    <section className="relative bg-primary py-20 md:py-28 overflow-hidden z-10 text-white border-t border-white/5">
      <GridPattern opacity={0.03} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-secondary" />
              <span className="text-secondary text-xs font-black tracking-[0.3em] uppercase">
                Let&apos;s Collaborate
              </span>
            </div>

            {/* Verbatim Section Heading Header */}
            <h2 className="text-white font-black text-3xl md:text-5xl lg:text-5xl tracking-tight mb-8 leading-tight">
              Let’s Build Strategic <br />
              <span className="text-secondary">Growth Together</span>
            </h2>

            {/* Verbatim Section Copy Paragraph */}
            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl font-light">
              Whether you are a hotel owner, hospitality brand, investor or
              developer, OneStates Hospitality helps you unlock the right
              opportunities for expansion, partnerships and sustainable business
              growth.
            </p>

            {/* ─── CTA BUTTONS ACTION ROW ─── */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              {/* Primary Call to Action: Connect With Us */}
              <a
                href={`tel:${config?.phoneNumber}`}
                className="inline-flex items-center justify-center gap-3 bg-secondary text-white px-8 py-4 rounded-xl font-bold tracking-wide shadow-xl shadow-secondary/10 hover:bg-white hover:text-primary hover:shadow-none transition-all duration-300 group"
              >
                <PhoneCall size={18} strokeWidth={2.5} />
                <span>Connect With Us</span>
              </a>

              <a
                href={`mailto:${config?.email}`}
                className="inline-flex items-center justify-center gap-3 bg-white/5 text-white border border-white/10 px-8 py-4 rounded-xl font-bold tracking-wide hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                <MessageSquare
                  size={18}
                  strokeWidth={2.5}
                  className="text-secondary"
                />
                <span>Discuss Your Project</span>
                <ArrowRight
                  size={16}
                  className="transform group-hover:translate-x-1 transition-transform duration-200 opacity-60"
                />
              </a>
            </div>
          </div>

          {/* ─── RIGHT COLUMN: GRAPHIC ASSET ACCENT MASK (5/12 Cols) ─── */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="absolute -inset-4 bg-secondary/5 rounded-3xl blur-2xl pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative aspect-square w-full max-w-105 mx-auto rounded-2xl overflow-hidden border border-white/10"
            >
              <Image
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
                width={1000}
                height={500}
                alt="Elite architectural corporate consulting environment representing strategic planning alignment"
                className="w-full h-full object-cover grayscale opacity-40 hover:opacity-70 hover:grayscale-0 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// export default function Home() {
//   return (
//     <div className="bg-white p-5 h-screen text-black pt-25">
//       <div className="grid grid-cols-1 md:grid-cols-2">
//         <div className="flex flex-col gap-4 justify-center">
//           <h1 className="font-extrabold text-3xl md:text-6xl text-black tracking-tighter w-3/4">
//             Lorem, ipsum dolor sit amet consectetur adipisicing.
//           </h1>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem soluta
//             itaque excepturi sint at esse perspiciatis sed velit. Laboriosam
//             esse eveniet, quis enim blanditiis culpa perspiciatis?
//           </p>
//           <button className="bg-secondary px-5 py-3 w-1/2 md:w-1/2 text-black font-extrabold text-md md:text-xl">
//             Know More
//           </button>
//         </div>
//         <div>
//           <Image
//             width="400"
//             height="600"
//             src="/images/hero-image.png"
//             alt="Hero Image"
//             className="w-full h-full"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
