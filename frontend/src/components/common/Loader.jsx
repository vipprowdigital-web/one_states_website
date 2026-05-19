"use client";

import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-30 -left-30 w-72 h-72 bg-secondary/10 blur-3xl rounded-full" />
        <div className="absolute -bottom-30 -right-30 w-72 h-72 bg-secondary/10 blur-3xl rounded-full" />
      </div>

      {/* Main Loader */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Animated Logo Circle */}
        <div className="relative flex items-center justify-center">
          {/* Outer Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute w-28 h-28 rounded-full border-2 border-secondary/20 border-t-secondary"
          />

          {/* Middle Ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute w-20 h-20 rounded-full border-2 border-primary-light/20 border-b-secondary"
          />

          {/* Center */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0.6 }}
            animate={{
              scale: [0.9, 1.05, 0.9],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-12 h-12 rounded-full bg-secondary shadow-[0_0_40px_rgba(238,113,36,0.45)]"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col items-center gap-3">
          <motion.h1
            initial={{ opacity: 0.5 }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-3xl md:text-4xl font-bold tracking-wide text-foreground"
          >
            One States
          </motion.h1>

          <div className="flex gap-2">
            {[0, 1, 2].map((item) => (
              <motion.span
                key={item}
                animate={{
                  y: [0, -8, 0],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: item * 0.15,
                }}
                className="w-2 h-2 rounded-full bg-secondary"
              />
            ))}
          </div>

          <p className="text-sm text-foreground/60 tracking-[0.2em] uppercase">
            Loading Experience
          </p>
        </div>

        {/* Bottom Progress */}
        <div className="w-64 h-0.75 bg-border rounded-full overflow-hidden">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1/2 h-full bg-secondary rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
