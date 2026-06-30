"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function BlueprintCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, {
    stiffness: 180,
    damping: 25,
    mass: 0.3,
  });

  const y = useSpring(mouseY, {
    stiffness: 180,
    damping: 25,
    mass: 0.3,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      className="fixed pointer-events-none z-40"
      style={{
        x,
        y,
      }}
    >
      {/* Outer Circle */}
      <motion.div
        className="
          absolute
          -translate-x-1/2
          -translate-y-1/2
          w-20
          h-20
          rounded-full
          border
          border-white/15
        "
        animate={{
          scale: [1, 1.03, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Horizontal Line */}
      <div
        className="
          absolute
          -translate-x-1/2
          w-72
          h-px
          bg-white/15
        "
      />

      {/* Vertical Line */}
      <div
        className="
          absolute
          -translate-y-1/2
          h-72
          w-px
          bg-white/15
        "
      />

      {/* Small Inner Circle */}
      <div
        className="
          absolute
          -translate-x-1/2
          -translate-y-1/2
          w-3
          h-3
          rounded-full
          border
          border-white/30
        "
      />

      {/* Center Dot */}
      <div
        className="
          absolute
          -translate-x-1/2
          -translate-y-1/2
          w-[4px]
          h-[4px]
          rounded-full
          bg-white/70
        "
      />
    </motion.div>
  );
}