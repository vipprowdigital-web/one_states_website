

"use client";

import AboutHero from "@/components/about/AboutHero";
import AboutStats from "@/components/about/AboutStats";
import AboutStory from "@/components/about/AboutStory";
import AboutFounder from "@/components/about/AboutFounder";
import AboutValues from "@/components/about/AboutValues";
import AboutPrinciples from "@/components/about/AboutPrinciples";
import WhyChooseUs from "@/components/about/WhyChooseUs";


export default function AboutPage() {
  return (
    <>
      <style>{`
        .fu {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity .65s ease, transform .65s ease;
        }

        .fu.vis {
          opacity: 1;
          transform: translateY(0);
        }

        @keyframes floatY {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .float-anim {
          animation: floatY 5s ease-in-out infinite;
        }

        @keyframes spinRing {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .spin-ring {
          animation: spinRing 20s linear infinite;
        }

        .lift {
          transition: transform .3s ease, box-shadow .3s ease;
        }

        .lift:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(238,113,36,.12);
        }

        @keyframes imgSlide {
          from {
            opacity: 0;
            transform: translateX(-24px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .img-reveal.vis {
          animation: imgSlide .8s ease forwards;
        }

        @media(max-width:700px) {
          .story-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }

        @media(max-width:760px) {
          .founder-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>

      <main
        style={{
          background: "#fff",
          color: "var(--primary)",
          fontFamily: "Raleway, sans-serif",
        }}
      >
        <AboutHero />
        <AboutStats />
        <AboutFounder />
        <AboutStory />
        <AboutPrinciples />
       <WhyChooseUs />
        <AboutValues />
       
       
      </main>
    </>
  );
}


// "use client";
// import Image from "next/image";
// import { useEffect, useRef } from "react";

// /* ─────────────────────────────────────────
//    Scroll-reveal hook
// ───────────────────────────────────────── */
// function useFadeIn(threshold = 0.12) {
//   const ref = useRef(null);
//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;
//     const io = new IntersectionObserver(
//       ([entry]) => { if (entry.isIntersecting) { el.classList.add("vis"); io.disconnect(); } },
//       { threshold }
//     );
//     io.observe(el);
//     return () => io.disconnect();
//   }, [threshold]);
//   return ref;
// }

// function Reveal({ children, delay = 0, className = "" }) {
//   const ref = useFadeIn();
//   return (
//     <div ref={ref} className={`fu ${className}`} style={{ transitionDelay: `${delay}ms` }}>
//       {children}
//     </div>
//   );
// }

// /* ─────────────────────────────────────────
//    Centered section heading
// ───────────────────────────────────────── */
// function SectionHead({ eyebrow, title, dark = false }) {
//   return (
//     <div className="text-center mb-14">
//       <Reveal>
//         <span
//           className="inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.3em] uppercase mb-4"
//           style={{ color: "var(--secondary)" }}
//         >
//           <span style={{ display: "block", width: 28, height: 1, background: "var(--secondary)" }} />
//           {eyebrow}
//           <span style={{ display: "block", width: 28, height: 1, background: "var(--secondary)" }} />
//         </span>
//         <h2
//           className="text-3xl md:text-[2.6rem] font-bold leading-tight"
//           style={{ color: dark ? "#fff" : "var(--primary)" }}
//         >
//           {title}
//         </h2>
//       </Reveal>
//     </div>
//   );
// }

// /* ─────────────────────────────────────────
//    Data
// ───────────────────────────────────────── */
// const stats = [
//   { n: "15+",  l: "Years of Excellence" },
//   { n: "500+", l: "Projects Delivered"  },
//   { n: "98%",  l: "Client Satisfaction" },
//   { n: "40+",  l: "Global Partners"     },
// ];

// const values = [
//   { icon: "✦", title: "Excellence",  desc: "Every engagement held to the highest standard — from strategic counsel to flawless on-ground execution." },
//   { icon: "◈", title: "Integrity",   desc: "Honest counsel, firm commitments, and relationships built on complete transparency." },
//   { icon: "⬡", title: "Innovation",  desc: "Blending timeless service ethos with forward-thinking models that keep clients ahead." },
//   { icon: "◉", title: "Partnership", desc: "We don't just advise — we embed. Your success becomes our success, every step of the journey." },
// ];

// const team = [
//   { name: "Priya Sinha",  role: "Head of Hospitality Design", initials: "PS", bio: "Former creative director for three five-star openings, now shaping brand identity for emerging properties." },
//   { name: "Rahul Verma",  role: "Operations Consultant",      initials: "RV", bio: "Specialist in process transformation and revenue optimisation for mid-scale and luxury segments." },
// ];

// /* ═══════════════════════════════════════════ */
// export default function AboutPage() {
//   return (
//     <>
//       <style>{`
//         /* scroll-reveal */
//         .fu { opacity:0; transform:translateY(28px); transition:opacity .65s ease,transform .65s ease; }
//         .fu.vis { opacity:1; transform:translateY(0); }

//         /* subtle float for quote card */
//         @keyframes floatY {
//           0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)}
//         }
//         .float-anim { animation: floatY 5s ease-in-out infinite; }

//         /* spinning ring in hero */
//         @keyframes spinRing {
//           from{transform:rotate(0deg)} to{transform:rotate(360deg)}
//         }
//         .spin-ring { animation: spinRing 20s linear infinite; }

//         /* card lift on hover */
//         .lift { transition:transform .3s ease,box-shadow .3s ease; }
//         .lift:hover { transform:translateY(-6px); box-shadow:0 16px 40px rgba(238,113,36,.12); }

//         /* owner image reveal */
//         @keyframes imgSlide {
//           from{opacity:0;transform:translateX(-24px)} to{opacity:1;transform:translateX(0)}
//         }
//         .img-reveal.vis { animation: imgSlide .8s ease forwards; }
//       `}</style>

//       <main style={{ background: "#fff", color: "var(--primary)", fontFamily: "Raleway, sans-serif" }}>

//         {/* ══ HERO ══ */}
//         <section style={{ position: "relative", overflow: "hidden", padding: "120px 0 100px", background: "#fff", textAlign: "center" }}>

//           {/* faint grid */}
//           <div aria-hidden style={{
//             position: "absolute", inset: 0, pointerEvents: "none",
//             backgroundImage: "linear-gradient(rgba(238,113,36,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(238,113,36,.07) 1px,transparent 1px)",
//             backgroundSize: "64px 64px",
//           }} />

//           {/* soft orange glow top-center */}
//           <div aria-hidden style={{
//             position: "absolute", top: -120, left: "50%", transform: "translateX(-50%)",
//             width: 560, height: 560, borderRadius: "50%", pointerEvents: "none",
//             background: "radial-gradient(circle,rgba(238,113,36,.1) 0%,transparent 68%)",
//           }} />

//           {/* spinning dashed ring — decorative */}
//           <div aria-hidden className="spin-ring" style={{
//             position: "absolute", top: 60, right: 80, width: 88, height: 88,
//             borderRadius: "50%", border: "1.5px dashed rgba(238,113,36,.35)",
//           }} />

//           <div style={{ position: "relative", maxWidth: 860, margin: "0 auto", padding: "0 24px" }}>
//             <Reveal>
//               <p style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--secondary)", marginBottom: 20 }}>
//                 <span style={{ display: "block", width: 28, height: 1, background: "var(--secondary)" }} />
//                 Who We Are
//                 <span style={{ display: "block", width: 28, height: 1, background: "var(--secondary)" }} />
//               </p>
//             </Reveal>

//             <Reveal delay={90}>
//               <h1 style={{ fontSize: "clamp(2.6rem,7vw,5rem)", fontWeight: 800, lineHeight: 1.06, letterSpacing: "-0.02em", color: "var(--primary)", margin: "0 0 24px" }}>
//                 Crafting Hospitality<br />
//                 <span style={{ color: "var(--secondary)" }}>Futures.</span>
//               </h1>
//             </Reveal>

//             <Reveal delay={180}>
//               <p style={{ fontSize: "1.1rem", lineHeight: 1.8, opacity: 0.65, maxWidth: 560, margin: "0 auto" }}>
//                 A boutique consultancy dedicated to transforming hospitality ventures —
//                 from concept to culture, operations to unforgettable guest experiences.
//               </p>
//             </Reveal>
//           </div>
//         </section>

//         {/* ══ STATS ══ */}
//         <section style={{ background: "#fff", borderTop: "1px solid #ebebeb", borderBottom: "1px solid #ebebeb", padding: "56px 24px" }}>
//           <div style={{ maxWidth: 960, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: 32, textAlign: "center" }}>
//             {stats.map((s, i) => (
//               <Reveal key={s.l} delay={i * 70}>
//                 <p style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, color: "var(--secondary)", margin: 0 }}>{s.n}</p>
//                 <p style={{ fontSize: 13, opacity: 0.55, marginTop: 6, letterSpacing: "0.05em" }}>{s.l}</p>
//               </Reveal>
//             ))}
//           </div>
//         </section>

//         {/* ══ STORY ══ */}
//         <section style={{ background: "#fff", padding: "100px 24px" }}>
//           <SectionHead eyebrow="Our Story" title={<>Born from passion,<br />built on expertise.</>} />
//           <div style={{ maxWidth: 960, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="story-grid">
//             <Reveal>
//               <p style={{ fontSize: "0.97rem", lineHeight: 1.85, opacity: 0.65, marginBottom: 20 }}>
//                 Founded over a decade ago by seasoned hoteliers and management consultants,
//                 we identified a gap — hospitality businesses needed strategic partners who
//                 truly understood service excellence, not just spreadsheets.
//               </p>
//               <p style={{ fontSize: "0.97rem", lineHeight: 1.85, opacity: 0.65 }}>
//                 Today we work with boutique hotels, resort developers, F&amp;B groups, and
//                 hospitality investors across India and beyond — delivering end-to-end
//                 consultancy with a hands-on approach larger firms simply cannot match.
//               </p>
//             </Reveal>

//             {/* Quote card */}
//             <Reveal delay={150}>
//               <div className="float-anim" style={{
//                 background: "var(--primary)", borderRadius: 20, padding: "48px 40px",
//                 position: "relative", overflow: "hidden",
//               }}>
//                 <div aria-hidden style={{
//                   position: "absolute", inset: 0,
//                   background: "linear-gradient(135deg,rgba(238,113,36,.25) 0%,transparent 55%)",
//                 }} />
//                 <p style={{ fontSize: 72, lineHeight: 0.8, fontWeight: 800, color: "var(--secondary)", marginBottom: 16 }}>"</p>
//                 <p style={{ fontSize: "1.15rem", fontWeight: 600, lineHeight: 1.6, color: "#fff", position: "relative" }}>
//                   Great hospitality is not a service.<br />It is an emotion, engineered with intent.
//                 </p>
//                 <p style={{ marginTop: 20, fontSize: 13, opacity: 0.45, color: "#fff", position: "relative" }}>— Our Founding Principle</p>
//               </div>
//             </Reveal>
//           </div>

//           {/* mobile stack fix */}
//           <style>{`@media(max-width:700px){.story-grid{grid-template-columns:1fr !important;gap:40px !important}}`}</style>
//         </section>

//         {/* ══ FOUNDER ══ */}
//         <section style={{ background: "#fafafa", padding: "100px 24px", borderTop: "1px solid #ebebeb" }}>
//           <SectionHead eyebrow="The Visionary" title="Meet the Founder" />

//           <div
//             style={{ maxWidth: 1020, margin: "0 auto", display: "grid", gridTemplateColumns: "420px 1fr", gap: 72, alignItems: "flex-start" }}
//             className="founder-grid"
//           >
//             {/* ── PHOTO — tall rectangular, full bleed ── */}
//             <Reveal className="img-reveal">
//               <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", aspectRatio: "3/4", background: "#e8e8e8" }}>
//                 {/*
//                   ↓ Replace with your actual image path, e.g. "/images/owner.jpg"
//                     Place image in /public/images/owner.jpg
//                     Recommended: portrait photo, min 600×800 px
//                 */}
//                 <Image
//                   src="/images/owner.jpg"
//                   alt="Founder photo"
//                   fill
//                   className="object-cover object-center"
//                   sizes="(max-width:768px) 100vw, 420px"
//                 />

//                 {/* Orange accent bar at bottom */}
//                 <div style={{
//                   position: "absolute", bottom: 0, left: 0, right: 0,
//                   padding: "28px 28px 24px",
//                   background: "linear-gradient(to top,rgba(35,38,39,.85) 0%,transparent 100%)",
//                 }}>
//                   <p style={{ color: "#fff", fontWeight: 700, fontSize: "1.1rem", margin: 0 }}>Aryan Mehta</p>
//                   <p style={{ color: "var(--secondary)", fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", marginTop: 4 }}>Founder & Managing Director</p>
//                 </div>

//                 {/* orange top accent line */}
//                 <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "var(--secondary)" }} />
//               </div>
//             </Reveal>

//             {/* ── BIO ── */}
//             <Reveal delay={140}>
//               <p style={{ fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--secondary)", marginBottom: 16 }}>
//                 Founder's Message
//               </p>
//               <h3 style={{ fontSize: "clamp(1.8rem,3vw,2.4rem)", fontWeight: 800, lineHeight: 1.2, color: "var(--primary)", marginBottom: 24 }}>
//                 Aryan Mehta
//               </h3>

//               {/* divider */}
//               <div style={{ width: 48, height: 3, background: "var(--secondary)", borderRadius: 4, marginBottom: 28 }} />

//               <p style={{ fontSize: "0.97rem", lineHeight: 1.9, opacity: 0.65, marginBottom: 18 }}>
//                 With over 20 years of experience spanning luxury hotel operations and
//                 strategic advisory across South &amp; Southeast Asia, I founded this
//                 consultancy with a singular vision — to bridge the gap between operational
//                 excellence and business growth in hospitality.
//               </p>
//               <p style={{ fontSize: "0.97rem", lineHeight: 1.9, opacity: 0.65, marginBottom: 36 }}>
//                 My philosophy: every property has a soul. Our job is to help it find its
//                 voice — and amplify it. From pre-opening strategy to long-term brand
//                 positioning, I lead every engagement with hands-on commitment and a
//                 deep respect for the craft of hospitality.
//               </p>

//               {/* Expertise tags */}
//               <p style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.45, marginBottom: 14 }}>Areas of Expertise</p>
//               <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
//                 {["Luxury Hospitality", "Brand Strategy", "Revenue Optimisation", "Pre-opening Advisory", "F&B Concepts", "Investor Advisory"].map(tag => (
//                   <span key={tag} style={{
//                     padding: "7px 16px", borderRadius: 50, fontSize: 12, fontWeight: 600,
//                     border: "1.5px solid rgba(238,113,36,.35)", color: "var(--secondary)",
//                     background: "rgba(238,113,36,.05)",
//                   }}>
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </Reveal>
//           </div>

//           <style>{`@media(max-width:760px){.founder-grid{grid-template-columns:1fr !important;gap:40px !important}}`}</style>
//         </section>

//         {/* ══ VALUES ══ */}
//         <section style={{ background: "#fff", padding: "100px 24px", borderTop: "1px solid #ebebeb" }}>
//           <SectionHead eyebrow="What Drives Us" title="Our Core Values" />
//           <div style={{ maxWidth: 960, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 24 }}>
//             {values.map((v, i) => (
//               <Reveal key={v.title} delay={i * 70}>
//                 <div className="lift" style={{
//                   background: "#fff", borderRadius: 16, padding: "36px 28px",
//                   border: "1.5px solid #ebebeb", height: "100%",
//                 }}>
//                   <span style={{ fontSize: 22, display: "block", marginBottom: 20, color: "var(--secondary)" }}>{v.icon}</span>
//                   <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--primary)", marginBottom: 10 }}>{v.title}</h3>
//                   <p style={{ fontSize: "0.875rem", lineHeight: 1.75, opacity: 0.58 }}>{v.desc}</p>
//                 </div>
//               </Reveal>
//             ))}
//           </div>
//         </section>

//         {/* ══ TEAM ══ */}
//         <section style={{ background: "#fafafa", padding: "100px 24px", borderTop: "1px solid #ebebeb" }}>
//           <SectionHead eyebrow="The People Behind the Vision" title="Meet the Team" />
//           <div style={{ maxWidth: 680, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 24 }}>
//             {team.map((m, i) => (
//               <Reveal key={m.name} delay={i * 90}>
//                 <div className="lift" style={{ background: "#fff", borderRadius: 16, padding: "36px 28px", border: "1.5px solid #ebebeb" }}>
//                   <div style={{
//                     width: 52, height: 52, borderRadius: "50%", background: "var(--secondary)",
//                     display: "flex", alignItems: "center", justifyContent: "center",
//                     color: "#fff", fontWeight: 700, fontSize: 15, marginBottom: 20,
//                   }}>
//                     {m.initials}
//                   </div>
//                   <p style={{ fontWeight: 700, fontSize: "1rem", color: "var(--primary)", margin: 0 }}>{m.name}</p>
//                   <p style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--secondary)", margin: "6px 0 16px" }}>{m.role}</p>
//                   <p style={{ fontSize: "0.875rem", lineHeight: 1.75, opacity: 0.6 }}>{m.bio}</p>
//                 </div>
//               </Reveal>
//             ))}
//           </div>
//         </section>

//         {/* ══ CTA ══ */}
//         <section style={{ background: "var(--secondary)", padding: "100px 24px", textAlign: "center", position: "relative", overflow: "hidden" }}>
//           <div aria-hidden style={{
//             position: "absolute", inset: 0, pointerEvents: "none",
//             backgroundImage: "linear-gradient(rgba(255,255,255,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.07) 1px,transparent 1px)",
//             backgroundSize: "56px 56px",
//           }} />
//           <div style={{ position: "relative", maxWidth: 640, margin: "0 auto" }}>
//             <Reveal>
//               <h2 style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 800, color: "#fff", lineHeight: 1.2, marginBottom: 20 }}>
//                 Ready to transform your hospitality business?
//               </h2>
//               <p style={{ color: "rgba(255,255,255,.75)", fontSize: "1rem", marginBottom: 40, lineHeight: 1.7 }}>
//                 Let's start a conversation about where you are today and where you want to be.
//               </p>
//               <a href="/contact" style={{
//                 display: "inline-block", padding: "16px 44px", borderRadius: 50,
//                 background: "var(--primary)", color: "#fff", fontWeight: 700, fontSize: 14,
//                 letterSpacing: "0.06em", textDecoration: "none",
//                 transition: "transform .2s ease,opacity .2s ease",
//               }}
//                 onMouseEnter={e => e.currentTarget.style.opacity = ".88"}
//                 onMouseLeave={e => e.currentTarget.style.opacity = "1"}
//               >
//                 Get in Touch →
//               </a>
//             </Reveal>
//           </div>
//         </section>

//       </main>
//     </>
//   );
// }
