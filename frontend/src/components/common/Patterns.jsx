"use client";

import { useId } from "react";

// ─── GRID PATTERN SVG ────────────────────────────────────────────────────────
export function GridPattern({ opacity = 0.04, stroke }) {
  const patternId = useId();

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id={`grid-${patternId}`}
          width="60"
          height="60"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 60 0 L 0 0 0 60"
            fill="none"
            stroke={stroke || "white"}
            strokeWidth="1"
            strokeDasharray="0"
          />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        fill={`url(#grid-${patternId})`}
        style={{ opacity }}
      />
    </svg>
  );
}

// ─── DIAGONAL LINES PATTERN ───────────────────────────────────────────────────
export function DiagPattern({ opacity = 0.06 }) {
  const patternId = useId();

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id={`diag-${patternId}`}
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          <line x1="0" y1="0" x2="0" y2="20" stroke="#ee7124" strokeWidth="1" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        fill={`url(#diag-${patternId})`}
        style={{ opacity }}
      />
    </svg>
  );
}

export function DotsPattern({ id = "dots", color = "black", opacity = 0.08 }) {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id={id} width="28" height="28" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.4" fill={color} />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        fill={`url(#${id})`}
        style={{ opacity }}
      />
    </svg>
  );
}
