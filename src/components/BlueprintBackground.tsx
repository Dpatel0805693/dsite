"use client";

import { motion } from "framer-motion";

export default function BlueprintBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">


    

      {/* ================================= */}
      {/* GUIDE LINES */}
      {/* ================================= */}

      <motion.div
        className="absolute top-[18%] left-0 h-px bg-white/10"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 1.4 }}
      />

      <motion.div
        className="absolute top-[62%] left-0 h-px bg-white/10"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 1.6 }}
      />

      <motion.div
        className="absolute left-[18%] top-0 w-px bg-white/10"
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
        transition={{ duration: 1.5 }}
      />

      <motion.div
        className="absolute left-[72%] top-0 w-px bg-white/10"
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
        transition={{ duration: 1.7 }}
      />

      {/* ================================= */}
      {/* CONSTRUCTION CIRCLES */}
      {/* ================================= */}

      <motion.div
        className="absolute top-[18%] left-[18%] -translate-x-1/2 -translate-y-1/2"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="w-20 h-20 rounded-full border border-white/10" />
      </motion.div>

      <motion.div
        className="absolute top-[62%] left-[72%] -translate-x-1/2 -translate-y-1/2"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="w-32 h-32 rounded-full border border-white/10" />
      </motion.div>

      {/* ================================= */}
      {/* CROSSHAIRS */}
      {/* ================================= */}

      {[
        { top: "18%", left: "18%" },
        { top: "62%", left: "72%" },
        { top: "82%", left: "35%" },
      ].map((point, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            top: point.top,
            left: point.left,
          }}
          animate={{
            opacity: [0.2, 0.45, 0.2],
          }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="absolute -left-4 top-0 w-8 h-px bg-white/20" />
          <div className="absolute left-0 -top-4 h-8 w-px bg-white/20" />
        </motion.div>
      ))}

      {/* ================================= */}
      {/* LABELS */}
      {/* ================================= */}

      <motion.p
        className="absolute top-[16%] left-[19%] text-[10px] font-mono uppercase tracking-[0.3em] text-white/30"
        animate={{ opacity: [0.2, 0.45, 0.2] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        A1
      </motion.p>

      <motion.p
        className="absolute top-[60%] left-[73%] text-[10px] font-mono uppercase tracking-[0.3em] text-white/30"
        animate={{ opacity: [0.2, 0.45, 0.2] }}
        transition={{ duration: 7, repeat: Infinity }}
      >
        B2
      </motion.p>

      <motion.p
        className="absolute top-[80%] left-[36%] text-[10px] font-mono uppercase tracking-[0.3em] text-white/30"
        animate={{ opacity: [0.2, 0.45, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        C3
      </motion.p>

    </div>
  );
}