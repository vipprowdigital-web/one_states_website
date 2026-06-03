"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, MoveLeft } from "lucide-react";
import { GridPattern } from "../common/Patterns";
import Image from "next/image";

// ─── LIGHTBOX (MODAL VIEWPORT) ───────────────────────────────────────────────────

function Lightbox({ img, onClose }) {
  if (!img) return null;
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-primary/95 backdrop-blur-md p-4 md:p-10"
        onClick={onClose}
      >
        {/* Close Button Pin */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 bg-white/10 hover:bg-white/20 border border-white/10 text-white p-3 rounded-full transition-colors group"
        >
          <X
            size={20}
            className="group-hover:rotate-90 transition-transform duration-300"
          />
        </button>

        <motion.div
          initial={{ scale: 0.95, y: 15, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.95, y: 15, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-5xl w-full rounded-2xl overflow-hidden bg-black/40 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Mapped to backend 'image' string key property context */}
          <Image
            src={img.image}
            alt={img.title || "Achievement Slide"}
            width={1000}
            height={500}
            className="w-full max-h-[75vh] md:max-h-[80vh] mx-auto object-contain"
          />

          <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/90 via-black/50 to-transparent px-6 py-6 pt-12 text-white">
            <span className="text-secondary text-[10px] font-black tracking-[0.3em] uppercase">
              {img.category || "Gallery"}
            </span>
            <p className="text-white/70 text-xs md:text-sm mt-1 max-w-2xl">
              {img.title}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── MAIN SLIDER COMPONENT ─────────────────────────────────────────────────────

export default function Gallery() {
  const [lightboxImg, setLightboxImg] = useState(null);
  const [dragBounds, setDragBounds] = useState({ left: 0, right: 0 });
  const [gallery, setGallery] = useState([]);

  const carouselRef = useRef(null);
  const innerSliderRef = useRef(null);
  const headerRef = useRef(null);

  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  // 1. Separate loading from empty
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/gallery/active`,
        );
        if (res.ok) {
          const data = await res.json();
          setGallery(data.data || []);
        }
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchGallery();
  }, []);

  // Compute boundaries safely on state update adjustments or resize triggers
  useEffect(() => {
    if (carouselRef.current && innerSliderRef.current && gallery.length > 0) {
      const computeBounds = () => {
        const bounds =
          carouselRef.current.offsetWidth - innerSliderRef.current.scrollWidth;
        setDragBounds({ left: bounds < 0 ? bounds - 48 : 0, right: 0 });
      };

      // Slight timeout delay ensures the DOM completely compiles elements before math computation
      const timer = setTimeout(computeBounds, 100);
      window.addEventListener("resize", computeBounds);

      return () => {
        clearTimeout(timer);
        window.removeEventListener("resize", computeBounds);
      };
    }
  }, [gallery]);

  // 2. Guard only on loading, not empty gallery
  if (loading) return null; // or a skeleton
  if (gallery.length === 0) return null;

  // Structural Manual Click Navigators
  const scrollManual = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <>
      <Lightbox img={lightboxImg} onClose={() => setLightboxImg(null)} />

      <section className="relative bg-white py-10 md:pt-20 overflow-hidden border-t border-primary/10 select-none">
        <GridPattern opacity={0.02} />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          {/* ─── HEADER WITH NAV BUTTONS ─── */}
          <motion.div
            ref={headerRef}
            // initial={{ opacity: 0, y: 20 }}
            // animate={headerInView ? { opacity: 1, y: 0 } : {}}
            // initial={{ opacity: 0, y: 20 }}
            // animate={{
            //   opacity: headerInView ? 1 : 0,
            //   y: headerInView ? 0 : 20,
            // }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-secondary" />
                <span className="text-secondary text-[10px] font-black tracking-[0.35em] uppercase">
                  Our Achievements
                </span>
              </div>
              <h2 className="text-primary font-black text-3xl sm:text-5xl tracking-tight leading-none">
                A Legacy Built on{" "}
                <span className="text-secondary">Excellence</span>
              </h2>
            </div>

            {/* Slider Action Controller Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => scrollManual("left")}
                className="w-12 h-12 rounded-full border border-primary/10 hover:border-secondary flex items-center justify-center text-primary hover:text-secondary bg-white shadow-sm transition-all duration-200 active:scale-95"
                aria-label="Scroll Left"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                onClick={() => scrollManual("right")}
                className="w-12 h-12 rounded-full border border-primary/10 hover:border-secondary flex items-center justify-center text-primary hover:text-secondary bg-white shadow-sm transition-all duration-200 active:scale-95"
                aria-label="Scroll Right"
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </motion.div>

          {/* ─── SWIPEABLE VIEWPORT SURFACE CONTAINER ─── */}
          <div
            ref={carouselRef}
            className="overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing pb-6"
            style={{ scrollbarWidth: "none" }}
          >
            <motion.div
              ref={innerSliderRef}
              drag="x"
              dragConstraints={dragBounds}
              dragElastic={0.1}
              className="flex gap-5 md:gap-6 w-max"
            >
              {/* ── MAPPED LIVE BACKEND GALLERY DATA ── */}
              {gallery.map((img) => (
                <motion.div
                  key={img._id}
                  onClick={() => setLightboxImg(img)}
                  className="relative w-85 md:w-110 h-52 sm:h-64 md:h-80 rounded-3xl overflow-hidden group shadow-md border border-primary/5 bg-primary/5 shrink-0"
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Standard img tag maps to cloud assets safely */}
                  <Image
                    src={img.image}
                    alt={img.title || "Achievement Image"}
                    draggable="false"
                    width={1000}
                    height={500}
                    className="w-full h-full object-cover grayscale-15 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out select-none pointer-events-none"
                  />

                  {/* Dark Veil Mask */}
                  <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Dynamic Bottom Label Reveal */}
                  <div className="absolute bottom-0 left-0 right-0 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out bg-linear-to-t from-primary/90 via-primary/50 to-transparent p-6 pt-16 pointer-events-none">
                    <span className="text-secondary text-[9px] font-black tracking-[0.25em] uppercase">
                      {img.category || "Gallery"}
                    </span>
                    <p className="text-white font-bold text-sm mt-0.5 truncate">
                      {img.title}
                    </p>
                  </div>

                  {/* Ambient Light Reflector Sheen Line */}
                  <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Swipe Indicator Meta Prompt for Discovery */}
          <div className="flex items-center gap-2 mt-4 text-primary/30 text-xs font-medium">
            <MoveLeft size={14} className="animate-pulse" />
            <span>Drag, swipe, or use buttons to navigate records</span>
          </div>
        </div>
      </section>
    </>
  );
}
