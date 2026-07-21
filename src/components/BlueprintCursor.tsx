"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function BlueprintCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, {
    stiffness: 180,
    damping: 24,
    mass: 0.3,
  });

  const y = useSpring(mouseY, {
    stiffness: 180,
    damping: 24,
    mass: 0.3,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      className="fixed pointer-events-none z-40"
      style={{ x, y }}
    >
      {/* Infinite Horizontal Blueprint Line */}
      <div
        className="absolute left-1/2 top-1/2 h-px -translate-x-1/2 -translate-y-1/2 bg-white/15 overflow-hidden"
        style={{ width: "5000px" }}
      >
        <motion.div
          className="absolute top-1/2 h-[4px] w-[4px] -translate-y-1/2 rounded-full bg-white"
          animate={{
            x: [-2500, 2500],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Infinite Vertical Blueprint Line */}
      <div
        className="absolute left-1/2 top-1/2 w-px -translate-x-1/2 -translate-y-1/2 bg-white/15 overflow-hidden"
        style={{ height: "5000px" }}
      >
        <motion.div
          className="absolute left-1/2 h-[4px] w-[4px] -translate-x-1/2 rounded-full bg-white"
          animate={{
            y: [-2500, 2500],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Outer Circle */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Inner Circle */}
      <div className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/30" />

      {/* Center Dot */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[7px] w-[7px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
        animate={{
          scale: [1, 1.6, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}