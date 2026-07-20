"use client";

import { motion } from "framer-motion";

export default function Editorial() {
  return (
    <section className="min-h-screen flex items-center justify-center px-10 bg-[#F8F6F2]">

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md text-center"
      >

      

        <div className="mx-auto my-6 h-px w-20 bg-black/20" />

        <h1 className="text-3xl font-editorial leading-none">
          Work in Progress
        </h1>

        <p className="mt-5 text-base leading-7 opacity-70">
          This side of my portfolio is
          <br />
          still taking shape.
        </p>

        <p className="mt-8 text-xs uppercase tracking-[0.35em] opacity-40">
          Come back soon.
        </p>

      </motion.div>

    </section>
  );
}