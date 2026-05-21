"use client";

import ServicesStyles from "@/components/services/ServicesStyles";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesBottomCTA from "@/components/services/ServicesBottomCTA";

import FAQSection from "@/components/common/FAQSection";
import { servicesFAQ } from "@/components/common/faqData";

export default function ServicesPage() {
  return (
    <>
      <ServicesStyles />

      <main className="srv-page min-h-screen bg-white text-[#232627]">
        <ServicesHero />
        <ServicesGrid />

        <ServicesBottomCTA />
        <FAQSection
          eyebrow="Service FAQ"
          title="Questions About Our Services"
          faqs={servicesFAQ}
        />
      </main>
    </>
  );
}

// "use client";
// import { useEffect, useRef, useState } from "react";

// /* ═══════════════════════════════════════
//    Scroll Reveal Hook
// ═══════════════════════════════════════ */
// function useReveal(threshold = 0.1) {
//   const ref = useRef(null);
//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;
//     const io = new IntersectionObserver(
//       ([e]) => { if (e.isIntersecting) { el.dataset.vis = "1"; io.disconnect(); } },
//       { threshold }
//     );
//     io.observe(el);
//     return () => io.disconnect();
//   }, [threshold]);
//   return ref;
// }

// function Reveal({ children, delay = 0, y = 30, className = "" }) {
//   const ref = useReveal();
//   return (
//     <div
//       ref={ref}
//       className={`srv-reveal ${className}`}
//       style={{ "--delay": `${delay}ms`, "--y": `${y}px` }}
//     >
//       {children}
//     </div>
//   );
// }

// /* ═══════════════════════════════════════
//    Services Data
// ═══════════════════════════════════════ */
// const SERVICES = [
//   {
//     number: "01",
//     title: "Hotel Brand Tie-ups",
//     subtitle: "Profitable Hospitality Partnerships",
//     desc: "We assist hotel owners, investors and brands in building profitable hospitality partnerships through structured brand tie-up models.",
//     tags: ["Management Contract", "Minimum Guarantee / Revenue Sharing", "Franchise Model", "Pure Lease Model"],
//     icon: (
//       <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
//         <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
//       </svg>
//     ),
//     accent: "#ee7124",
//   },
//   {
//     number: "02",
//     title: "Commercial Retail Leasing",
//     subtitle: "Smart Leasing Solutions",
//     desc: "We provide retail leasing solutions for commercial spaces by connecting property owners with suitable brands and financial institutions.",
//     tags: ["Retail Brands", "NBFCs", "Commercial Spaces", "High-street & Mall Locations"],
//     icon: (
//       <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
//         <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>
//       </svg>
//     ),
//     accent: "#232627",
//   },
//   {
//     number: "03",
//     title: "Warehouse Leasing",
//     subtitle: "Logistics & Distribution",
//     desc: "We help businesses and asset owners with warehouse leasing opportunities for logistics and large-scale distribution requirements.",
//     tags: ["3PL Logistics Players", "FMCG Companies", "Large Storage Requirements", "Industrial & Warehouse Spaces"],
//     icon: (
//       <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
//         <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/><line x1="12" y1="12" x2="12" y2="17"/><line x1="9.5" y1="14.5" x2="14.5" y2="14.5"/>
//       </svg>
//     ),
//     accent: "#ee7124",
//   },
//   {
//     number: "04",
//     title: "Large Asset Transaction Advisory",
//     subtitle: "High-Value Real Estate",
//     desc: "We offer advisory support for high-value real estate and hospitality asset transactions with a professional, market-driven approach.",
//     tags: ["Hotels", "Land Parcels", "Commercial Assets", "Investment Properties"],
//     icon: (
//       <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
//         <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
//       </svg>
//     ),
//     accent: "#232627",
//   },
//   {
//     number: "05",
//     title: "JV / Collaboration",
//     subtitle: "Joint Venture Structuring",
//     desc: "We help landowners, developers and investors structure joint ventures and collaboration opportunities for large-scale projects.",
//     tags: ["Housing Projects", "Hotels", "Warehouses", "Commercial Developments"],
//     icon: (
//       <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
//         <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
//       </svg>
//     ),
//     accent: "#ee7124",
//   },
// ];

// /* ═══════════════════════════════════════
//    Service Card
// ═══════════════════════════════════════ */
// function ServiceCard({ service, index }) {
//   const [hovered, setHovered] = useState(false);
//   const isOrange = service.accent === "#ee7124";

//   return (
//     <Reveal delay={index * 110} y={40}>
//       <div
//         className="srv-card"
//         onMouseEnter={() => setHovered(true)}
//         onMouseLeave={() => setHovered(false)}
//         style={{
//           position: "relative",
//           background: hovered ? service.accent : "#fff",
//           border: `1.5px solid ${hovered ? service.accent : "#e8e8e8"}`,
//           borderRadius: 20,
//           padding: "40px 36px 36px",
//           overflow: "hidden",
//           cursor: "default",
//           transition: "background .4s ease, border-color .4s ease, transform .35s ease, box-shadow .35s ease",
//           transform: hovered ? "translateY(-10px) scale(1.012)" : "translateY(0) scale(1)",
//           boxShadow: hovered
//             ? `0 32px 72px ${isOrange ? "rgba(238,113,36,.28)" : "rgba(35,38,39,.22)"}`
//             : "0 4px 20px rgba(0,0,0,.06)",
//         }}
//       >
//         {/* big number watermark */}
//         <span style={{
//           position: "absolute", top: -10, right: 20,
//           fontSize: 96, fontWeight: 900, lineHeight: 1,
//           color: hovered ? "rgba(255,255,255,.1)" : "rgba(238,113,36,.07)",
//           fontFamily: "Raleway, sans-serif",
//           transition: "color .4s ease",
//           userSelect: "none",
//           pointerEvents: "none",
//         }}>
//           {service.number}
//         </span>

//         {/* animated shine sweep on hover */}
//         <div style={{
//           position: "absolute", inset: 0, pointerEvents: "none",
//           background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,.12) 50%, transparent 60%)",
//           transform: hovered ? "translateX(100%)" : "translateX(-100%)",
//           transition: "transform .6s ease",
//         }} />

//         {/* icon */}
//         <div style={{
//           width: 60, height: 60, borderRadius: 16,
//           display: "flex", alignItems: "center", justifyContent: "center",
//           background: hovered ? "rgba(255,255,255,.18)" : `${service.accent}14`,
//           color: hovered ? "#fff" : service.accent,
//           marginBottom: 24,
//           transition: "background .4s ease, color .4s ease",
//         }}>
//           {service.icon}
//         </div>

//         {/* small label */}
//         <p style={{
//           fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase",
//           color: hovered ? "rgba(255,255,255,.65)" : "#ee7124",
//           margin: "0 0 8px",
//           transition: "color .4s ease",
//         }}>
//           {service.subtitle}
//         </p>

//         {/* title */}
//         <h3 style={{
//           fontSize: "1.25rem", fontWeight: 800, lineHeight: 1.25,
//           color: hovered ? "#fff" : "#232627",
//           margin: "0 0 14px",
//           transition: "color .4s ease",
//         }}>
//           {service.title}
//         </h3>

//         {/* divider */}
//         <div style={{
//           width: hovered ? 48 : 32, height: 2, borderRadius: 4,
//           background: hovered ? "rgba(255,255,255,.5)" : "#ee7124",
//           marginBottom: 18,
//           transition: "width .35s ease, background .4s ease",
//         }} />

//         {/* desc */}
//         <p style={{
//           fontSize: "0.88rem", lineHeight: 1.8,
//           color: hovered ? "rgba(255,255,255,.8)" : "#555",
//           margin: "0 0 24px",
//           transition: "color .4s ease",
//         }}>
//           {service.desc}
//         </p>

//         {/* tags */}
//         <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
//           {service.tags.map((tag) => (
//             <span key={tag} style={{
//               padding: "5px 13px",
//               borderRadius: 50,
//               fontSize: 11,
//               fontWeight: 600,
//               border: `1px solid ${hovered ? "rgba(255,255,255,.35)" : "rgba(238,113,36,.3)"}`,
//               color: hovered ? "rgba(255,255,255,.85)" : "#ee7124",
//               background: hovered ? "rgba(255,255,255,.1)" : "rgba(238,113,36,.05)",
//               transition: "all .4s ease",
//               fontFamily: "Raleway, sans-serif",
//             }}>
//               {tag}
//             </span>
//           ))}
//         </div>

//         {/* arrow */}
//         <div style={{
//           position: "absolute", bottom: 28, right: 28,
//           width: 36, height: 36, borderRadius: "50%",
//           display: "flex", alignItems: "center", justifyContent: "center",
//           background: hovered ? "rgba(255,255,255,.2)" : "rgba(238,113,36,.1)",
//           color: hovered ? "#fff" : "#ee7124",
//           fontSize: 16, fontWeight: 700,
//           transition: "all .35s ease",
//           transform: hovered ? "translate(2px,-2px)" : "translate(0,0)",
//         }}>
//           →
//         </div>
//       </div>
//     </Reveal>
//   );
// }

// /* ═══════════════════════════════════════
//    Main Page
// ═══════════════════════════════════════ */
// export default function ServicesPage() {
//   return (
//     <>
//       <style>{`
//         * { box-sizing: border-box; }
//         body, .srv-page { font-family: Raleway, sans-serif; }

//         /* reveal animation */
//         .srv-reveal {
//           opacity: 0;
//           transform: translateY(var(--y, 30px));
//           transition: opacity .7s ease var(--delay, 0ms), transform .7s ease var(--delay, 0ms);
//         }
//         .srv-reveal[data-vis="1"] { opacity: 1; transform: translateY(0); }

//         /* hero parallax bg */
//         @keyframes srvHeroZoom {
//           from { transform: scale(1); }
//           to   { transform: scale(1.06); }
//         }
//         .srv-hero-bg {
//           animation: srvHeroZoom 12s ease-in-out infinite alternate;
//         }

//         /* spinning ring */
//         @keyframes srvSpin {
//           from { transform: rotate(0deg); }
//           to   { transform: rotate(360deg); }
//         }
//         .srv-spin { animation: srvSpin 24s linear infinite; }
//         .srv-spin-r { animation: srvSpin 18s linear infinite reverse; }

//         /* number counter pulse */
//         @keyframes srvPulse {
//           0%,100% { opacity:.55; }
//           50%      { opacity:1; }
//         }

//         /* card grid */
//         .srv-grid {
//           display: grid;
//           grid-template-columns: repeat(3, 1fr);
//           gap: 28px;
//         }
//         @media (max-width: 1024px) { .srv-grid { grid-template-columns: repeat(2,1fr); } }
//         @media (max-width: 640px)  { .srv-grid { grid-template-columns: 1fr; } }

//         /* hero text responsive */
//         @media (max-width: 640px) {
//           .srv-hero-h1 { font-size: 2.6rem !important; }
//         }
//       `}</style>

//       <main className="srv-page" style={{ background: "#fff", color: "#232627", minHeight: "100vh" }}>

//         {/* ══════════════════════════════
//             HERO — full screen with bg
//         ══════════════════════════════ */}
//         <section style={{
//           position: "relative",
//           minHeight: "92vh",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           overflow: "hidden",
//           textAlign: "center",
//         }}>
//           {/* background image */}
//           <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
//             <div
//               className="srv-hero-bg"
//               style={{
//                 position: "absolute", inset: "-5%",
//                 backgroundImage: "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1800&q=85')",
//                 /* ↑ premium hotel lobby — replace with your own /images/services-hero.jpg */
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             />
//             {/* dark overlay */}
//             <div style={{
//               position: "absolute", inset: 0,
//               background: "linear-gradient(160deg, rgba(35,38,39,.82) 0%, rgba(35,38,39,.55) 60%, rgba(238,113,36,.25) 100%)",
//             }} />
//             {/* noise grain overlay */}
//             <div style={{
//               position: "absolute", inset: 0, opacity: 0.04,
//               backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
//             }} />
//           </div>

//           {/* decorative rings */}
//           <div aria-hidden className="srv-spin" style={{
//             position: "absolute", top: 48, left: 48, zIndex: 1,
//             width: 100, height: 100, borderRadius: "50%",
//             border: "1px dashed rgba(238,113,36,.45)",
//           }} />
//           <div aria-hidden className="srv-spin-r" style={{
//             position: "absolute", bottom: 64, right: 64, zIndex: 1,
//             width: 140, height: 140, borderRadius: "50%",
//             border: "1px dashed rgba(255,255,255,.2)",
//           }} />
//           <div aria-hidden style={{
//             position: "absolute", bottom: "20%", left: "8%", zIndex: 1,
//             width: 8, height: 8, borderRadius: "50%", background: "#ee7124",
//             boxShadow: "0 0 20px 6px rgba(238,113,36,.5)",
//           }} />
//           <div aria-hidden style={{
//             position: "absolute", top: "25%", right: "10%", zIndex: 1,
//             width: 5, height: 5, borderRadius: "50%", background: "#fff",
//             boxShadow: "0 0 16px 4px rgba(255,255,255,.4)",
//           }} />

//           {/* hero content */}
//           <div style={{ position: "relative", zIndex: 2, maxWidth: 800, padding: "0 24px" }}>
//             <Reveal>
//               <p style={{
//                 display: "inline-flex", alignItems: "center", gap: 10,
//                 fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase",
//                 color: "#ee7124", marginBottom: 20,
//               }}>
//                 <span style={{ display: "block", width: 28, height: 1, background: "#ee7124" }} />
//                 What We Offer
//                 <span style={{ display: "block", width: 28, height: 1, background: "#ee7124" }} />
//               </p>
//             </Reveal>

//             <Reveal delay={100}>
//               <h1 className="srv-hero-h1" style={{
//                 fontSize: "clamp(3rem, 6.5vw, 5.2rem)",
//                 fontWeight: 900,
//                 lineHeight: 1.08,
//                 letterSpacing: "-0.02em",
//                 color: "#fff",
//                 margin: "0 0 24px",
//               }}>
//                 Our{" "}
//                 <span style={{ color: "#ee7124", fontStyle: "italic" }}>Services</span>
//               </h1>
//             </Reveal>

//             <Reveal delay={190}>
//               <p style={{
//                 fontSize: "1.1rem", lineHeight: 1.8,
//                 color: "rgba(255,255,255,.72)",
//                 maxWidth: 560, margin: "0 auto 40px",
//               }}>
//                 From hotel brand tie-ups to large asset transactions — we deliver
//                 end-to-end hospitality and real estate consultancy with precision
//                 and deep market expertise.
//               </p>
//             </Reveal>

//             <Reveal delay={280}>
//               <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
//                 <a href="/contact" style={{
//                   display: "inline-block", padding: "15px 40px",
//                   borderRadius: 50, background: "#ee7124", color: "#fff",
//                   fontWeight: 700, fontSize: 13, letterSpacing: "0.08em",
//                   textDecoration: "none",
//                   boxShadow: "0 8px 32px rgba(238,113,36,.4)",
//                   transition: "transform .2s ease",
//                 }}
//                   onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
//                   onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
//                 >
//                   Get a Consultation →
//                 </a>
//                 <a href="#services" style={{
//                   display: "inline-block", padding: "15px 40px",
//                   borderRadius: 50, color: "#fff",
//                   border: "1.5px solid rgba(255,255,255,.4)",
//                   fontWeight: 600, fontSize: 13, letterSpacing: "0.06em",
//                   textDecoration: "none",
//                   transition: "border-color .2s ease, background .2s ease",
//                 }}
//                   onMouseEnter={e => { e.currentTarget.style.borderColor = "#ee7124"; e.currentTarget.style.background = "rgba(238,113,36,.1)"; }}
//                   onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,.4)"; e.currentTarget.style.background = "transparent"; }}
//                 >
//                   Explore Services
//                 </a>
//               </div>
//             </Reveal>
//           </div>

//           {/* scroll indicator */}
//           <div style={{
//             position: "absolute", bottom: 36, left: "50%",
//             transform: "translateX(-50%)", zIndex: 2,
//             display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
//           }}>
//             <p style={{ fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,.45)" }}>
//               Scroll
//             </p>
//             <div style={{
//               width: 1, height: 48,
//               background: "linear-gradient(to bottom, rgba(255,255,255,.5), transparent)",
//             }} />
//           </div>
//         </section>

//         {/* ══════════════════════════════
//             SERVICES GRID
//         ══════════════════════════════ */}
//         <section id="services" style={{ padding: "100px 24px", background: "#f9f9f9", borderTop: "1px solid #ebebeb" }}>
//           {/* heading */}
//           <div style={{ textAlign: "center", marginBottom: 72 }}>
//             <Reveal>
//               <p style={{
//                 display: "inline-flex", alignItems: "center", gap: 10,
//                 fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase",
//                 color: "#ee7124", marginBottom: 16,
//               }}>
//                 <span style={{ display: "block", width: 28, height: 1, background: "#ee7124" }} />
//                 Expertise Areas
//                 <span style={{ display: "block", width: 28, height: 1, background: "#ee7124" }} />
//               </p>
//             </Reveal>
//             <Reveal delay={80}>
//               <h2 style={{
//                 fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800,
//                 color: "#232627", lineHeight: 1.15, margin: "0 0 16px",
//               }}>
//                 Comprehensive Solutions<br />
//                 <span style={{ color: "#ee7124" }}>Tailored for You</span>
//               </h2>
//             </Reveal>
//             <Reveal delay={160}>
//               <p style={{
//                 fontSize: "0.97rem", lineHeight: 1.8, opacity: 0.55,
//                 maxWidth: 500, margin: "0 auto",
//               }}>
//                 Five core service verticals designed to unlock value at every stage
//                 of your hospitality and real estate journey.
//               </p>
//             </Reveal>
//           </div>

//           {/* cards grid */}
//           <div className="srv-grid" style={{ maxWidth: 1140, margin: "0 auto" }}>
//             {SERVICES.map((s, i) => (
//               <ServiceCard key={s.number} service={s} index={i} />
//             ))}

//             {/* CTA card — last slot */}
//             <Reveal delay={SERVICES.length * 110}>
//               <div style={{
//                 borderRadius: 20, padding: "40px 36px",
//                 background: "linear-gradient(135deg, #232627 0%, #2f3334 100%)",
//                 display: "flex", flexDirection: "column",
//                 justifyContent: "space-between", minHeight: 320,
//                 position: "relative", overflow: "hidden",
//               }}>
//                 <div aria-hidden style={{
//                   position: "absolute", top: -30, right: -30,
//                   width: 140, height: 140, borderRadius: "50%",
//                   background: "radial-gradient(circle, rgba(238,113,36,.25) 0%, transparent 70%)",
//                 }} />
//                 <div>
//                   <p style={{
//                     fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase",
//                     color: "#ee7124", margin: "0 0 12px",
//                   }}>
//                     Ready to Start?
//                   </p>
//                   <h3 style={{
//                     fontSize: "1.5rem", fontWeight: 800, color: "#fff",
//                     lineHeight: 1.2, margin: "0 0 16px",
//                   }}>
//                     Let's Build Something Remarkable Together
//                   </h3>
//                   <p style={{
//                     fontSize: "0.875rem", lineHeight: 1.75,
//                     color: "rgba(255,255,255,.55)", margin: 0,
//                   }}>
//                     Connect with our team for a confidential consultation tailored to your goals.
//                   </p>
//                 </div>
//                 <a href="/contact" style={{
//                   display: "inline-block", marginTop: 32,
//                   padding: "14px 32px", borderRadius: 50,
//                   background: "#ee7124", color: "#fff",
//                   fontWeight: 700, fontSize: 13, letterSpacing: "0.07em",
//                   textDecoration: "none",
//                   boxShadow: "0 8px 28px rgba(238,113,36,.35)",
//                   transition: "transform .2s ease",
//                   fontFamily: "Raleway, sans-serif",
//                   alignSelf: "flex-start",
//                 }}
//                   onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
//                   onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
//                 >
//                   Contact Us →
//                 </a>
//               </div>
//             </Reveal>
//           </div>
//         </section>

//         {/* ══════════════════════════════
//             BOTTOM CTA STRIP
//         ══════════════════════════════ */}
//         <section style={{
//           background: "#ee7124", padding: "72px 24px",
//           textAlign: "center", position: "relative", overflow: "hidden",
//         }}>
//           <div aria-hidden style={{
//             position: "absolute", inset: 0,
//             backgroundImage: "linear-gradient(rgba(255,255,255,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.07) 1px,transparent 1px)",
//             backgroundSize: "56px 56px",
//           }} />
//           <div style={{ position: "relative", maxWidth: 640, margin: "0 auto" }}>
//             <Reveal>
//               <h2 style={{
//                 fontSize: "clamp(1.7rem, 3.5vw, 2.6rem)", fontWeight: 800,
//                 color: "#fff", lineHeight: 1.2, margin: "0 0 18px",
//               }}>
//                 Not sure which service fits your need?
//               </h2>
//               <p style={{
//                 color: "rgba(255,255,255,.78)", fontSize: "1rem",
//                 lineHeight: 1.75, marginBottom: 36,
//               }}>
//                 Talk to our experts — we'll find the right path forward for your property or investment.
//               </p>
//               <a href="/contact" style={{
//                 display: "inline-block", padding: "16px 48px",
//                 borderRadius: 50, background: "#232627", color: "#fff",
//                 fontWeight: 700, fontSize: 14, letterSpacing: "0.07em",
//                 textDecoration: "none", fontFamily: "Raleway, sans-serif",
//                 transition: "opacity .2s ease",
//               }}
//                 onMouseEnter={e => e.currentTarget.style.opacity = ".85"}
//                 onMouseLeave={e => e.currentTarget.style.opacity = "1"}
//               >
//                 Talk to an Expert →
//               </a>
//             </Reveal>
//           </div>
//         </section>

//       </main>
//     </>
//   );
// }
