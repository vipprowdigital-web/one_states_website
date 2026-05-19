

"use client";

import { useState } from "react";
import Link from "next/link";
import ServicesReveal from "./ServicesReveal";

export default function ServiceCard({ service, index }) {
  const [hovered, setHovered] = useState(false);
  const isOrange = service.accent === "#ee7124";

  return (
    <ServicesReveal delay={index * 110} y={40}>
      <div
        className="srv-card relative cursor-default overflow-hidden rounded-[20px] border-[1.5px] p-[40px_36px_36px] text-left transition-all duration-300"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: hovered ? service.accent : "#fff",
          borderColor: hovered ? service.accent : "#e8e8e8",
          transform: hovered
            ? "translateY(-10px) scale(1.012)"
            : "translateY(0) scale(1)",
          boxShadow: hovered
            ? `0 32px 72px ${
                isOrange
                  ? "rgba(238,113,36,.28)"
                  : "rgba(35,38,39,.22)"
              }`
            : "0 4px 20px rgba(0,0,0,.06)",
          transition:
            "background .4s ease, border-color .4s ease, transform .35s ease, box-shadow .35s ease",
        }}
      >
        <span
          className="pointer-events-none absolute -top-2.5 right-5 select-none text-[96px] font-black leading-none"
          style={{
            color: hovered
              ? "rgba(255,255,255,.1)"
              : "rgba(238,113,36,.07)",
            transition: "color .4s ease",
          }}
        >
          {service.number}
        </span>

        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, transparent 40%, rgba(255,255,255,.12) 50%, transparent 60%)",
            transform: hovered ? "translateX(100%)" : "translateX(-100%)",
            transition: "transform .6s ease",
          }}
        />

        <div
          className="srv-card-icon mb-6 flex h-[60px] w-[60px] items-center justify-center rounded-2xl transition-all duration-300"
          style={{
            background: hovered
              ? "rgba(255,255,255,.18)"
              : `${service.accent}14`,
            color: hovered ? "#fff" : service.accent,
          }}
        >
          {service.icon}
        </div>

        <p
          className="mb-2 text-[10px] font-bold uppercase tracking-[0.28em] transition-colors duration-300"
          style={{
            color: hovered ? "rgba(255,255,255,.65)" : "#ee7124",
          }}
        >
          {service.subtitle}
        </p>

        <h3
          className="mb-3.5 text-xl font-extrabold leading-tight transition-colors duration-300"
          style={{
            color: hovered ? "#fff" : "#232627",
          }}
        >
          {service.title}
        </h3>

        <div
          className="mb-[18px] h-0.5 rounded"
          style={{
            width: hovered ? 48 : 32,
            background: hovered ? "rgba(255,255,255,.5)" : "#ee7124",
            transition: "width .35s ease, background .4s ease",
          }}
        />

        <p
          className="mb-6 text-[0.88rem] font-medium leading-[1.8] transition-colors duration-300"
          style={{
            color: hovered ? "rgba(255,255,255,.8)" : "#555",
          }}
        >
          {service.desc}
        </p>

        <div className="srv-card-tags flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full px-[13px] py-[5px] text-[11px] font-semibold transition-all duration-300"
              style={{
                border: `1px solid ${
                  hovered
                    ? "rgba(255,255,255,.35)"
                    : "rgba(238,113,36,.3)"
                }`,
                color: hovered ? "rgba(255,255,255,.85)" : "#ee7124",
                background: hovered
                  ? "rgba(255,255,255,.1)"
                  : "rgba(238,113,36,.05)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <Link
          href={service.href}
          className="absolute bottom-7 right-7 z-20 flex h-9 w-9 items-center justify-center rounded-full text-base font-bold no-underline transition-all duration-300"
          style={{
            background: hovered
              ? "rgba(255,255,255,.2)"
              : "rgba(238,113,36,.1)",
            color: hovered ? "#fff" : "#ee7124",
            transform: hovered ? "translate(2px,-2px)" : "translate(0,0)",
          }}
        >
          →
        </Link>
      </div>
    </ServicesReveal>
  );
}

// "use client";

// import { useState } from "react";
// import ServicesReveal from "./ServicesReveal";

// export default function ServiceCard({ service, index }) {
//   const [hovered, setHovered] = useState(false);
//   const isOrange = service.accent === "#ee7124";

//   return (
//     <ServicesReveal delay={index * 110} y={40}>
//       <div
//         className="srv-card relative cursor-default overflow-hidden rounded-[20px] border-[1.5px] p-[40px_36px_36px] text-left transition-all duration-300"
//         onMouseEnter={() => setHovered(true)}
//         onMouseLeave={() => setHovered(false)}
//         style={{
//           background: hovered ? service.accent : "#fff",
//           borderColor: hovered ? service.accent : "#e8e8e8",
//           transform: hovered
//             ? "translateY(-10px) scale(1.012)"
//             : "translateY(0) scale(1)",
//           boxShadow: hovered
//             ? `0 32px 72px ${
//                 isOrange
//                   ? "rgba(238,113,36,.28)"
//                   : "rgba(35,38,39,.22)"
//               }`
//             : "0 4px 20px rgba(0,0,0,.06)",
//           transition:
//             "background .4s ease, border-color .4s ease, transform .35s ease, box-shadow .35s ease",
//         }}
//       >
//         <span
//           className="pointer-events-none absolute -top-2.5 right-5 select-none text-[96px] font-black leading-none"
//           style={{
//             color: hovered
//               ? "rgba(255,255,255,.1)"
//               : "rgba(238,113,36,.07)",
//             transition: "color .4s ease",
//           }}
//         >
//           {service.number}
//         </span>

//         <div
//           className="pointer-events-none absolute inset-0"
//           style={{
//             background:
//               "linear-gradient(105deg, transparent 40%, rgba(255,255,255,.12) 50%, transparent 60%)",
//             transform: hovered ? "translateX(100%)" : "translateX(-100%)",
//             transition: "transform .6s ease",
//           }}
//         />

//         <div
//           className="srv-card-icon mb-6 flex h-[60px] w-[60px] items-center justify-center rounded-2xl transition-all duration-300"
//           style={{
//             background: hovered
//               ? "rgba(255,255,255,.18)"
//               : `${service.accent}14`,
//             color: hovered ? "#fff" : service.accent,
//           }}
//         >
//           {service.icon}
//         </div>

//         <p
//           className="mb-2 text-[10px] font-bold uppercase tracking-[0.28em] transition-colors duration-300"
//           style={{
//             color: hovered ? "rgba(255,255,255,.65)" : "#ee7124",
//           }}
//         >
//           {service.subtitle}
//         </p>

//         <h3
//           className="mb-3.5 text-xl font-extrabold leading-tight transition-colors duration-300"
//           style={{
//             color: hovered ? "#fff" : "#232627",
//           }}
//         >
//           {service.title}
//         </h3>

//         <div
//           className="mb-[18px] h-0.5 rounded"
//           style={{
//             width: hovered ? 48 : 32,
//             background: hovered ? "rgba(255,255,255,.5)" : "#ee7124",
//             transition: "width .35s ease, background .4s ease",
//           }}
//         />

//         <p
//           className="mb-6 text-[0.88rem] font-medium leading-[1.8] transition-colors duration-300"
//           style={{
//             color: hovered ? "rgba(255,255,255,.8)" : "#555",
//           }}
//         >
//           {service.desc}
//         </p>

//         <div className="srv-card-tags flex flex-wrap gap-2">
//           {service.tags.map((tag) => (
//             <span
//               key={tag}
//               className="rounded-full px-[13px] py-[5px] text-[11px] font-semibold transition-all duration-300"
//               style={{
//                 border: `1px solid ${
//                   hovered
//                     ? "rgba(255,255,255,.35)"
//                     : "rgba(238,113,36,.3)"
//                 }`,
//                 color: hovered ? "rgba(255,255,255,.85)" : "#ee7124",
//                 background: hovered
//                   ? "rgba(255,255,255,.1)"
//                   : "rgba(238,113,36,.05)",
//               }}
//             >
//               {tag}
//             </span>
//           ))}
//         </div>

//         <div
//           className="absolute bottom-7 right-7 flex h-9 w-9 items-center justify-center rounded-full text-base font-bold transition-all duration-300"
//           style={{
//             background: hovered
//               ? "rgba(255,255,255,.2)"
//               : "rgba(238,113,36,.1)",
//             color: hovered ? "#fff" : "#ee7124",
//             transform: hovered ? "translate(2px,-2px)" : "translate(0,0)",
//           }}
//         >
//           →
//         </div>
//       </div>
//     </ServicesReveal>
//   );
// }