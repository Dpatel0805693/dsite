"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* ============================= */}
      {/* BACKGROUND GRID */}
      {/* ============================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.08]
          bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          bg-[size:80px_80px]
        "
      />


      {/* ============================= */}
      {/* TOP LABEL */}
      {/* ============================= */}

      <div
        className="
          absolute
          top-8
          left-6
          sm:left-10
          md:left-12
          font-mono
          text-xs
          tracking-[0.25em]
          opacity-50
        "
      >
        D.P / SYSTEM
      </div>


      {/* ============================= */}
      {/* MAIN CONTENT */}
      {/* ============================= */}

      <div
        className="
          relative
          z-10
          min-h-screen
          flex
          items-center
          justify-center
          px-6
          sm:px-10
        "
      >

        <div className="w-full max-w-4xl">

          {/* 404 */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="
              font-mono
              text-[clamp(8rem,25vw,20rem)]
              leading-none
              tracking-[-0.08em]
              select-none
            "
          >
            404
          </motion.div>


          {/* DIVIDER */}

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: "easeOut",
            }}
            className="
              origin-left
              w-full
              h-px
              bg-white/30
              mt-4
              mb-8
            "
          />


          {/* INFORMATION */}

          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-[1fr_auto]
              gap-8
              items-end
            "
          >

            {/* LEFT */}

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.5,
              }}
            >

              <p
                className="
                  font-mono
                  text-xs
                  uppercase
                  tracking-[0.35em]
                  opacity-50
                  mb-3
                "
              >
                Page Not Found
              </p>

              <h1
                className="
                  font-mono
                  text-xl
                  sm:text-2xl
                  tracking-wide
                  mb-4
                "
              >
                The requested page could not be located.
              </h1>

              <p
                className="
                  font-mono
                  text-sm
                  leading-relaxed
                  opacity-50
                  max-w-md
                "
              >
                The page you're looking for may have been
                moved, deleted, or never existed.
              </p>

            </motion.div>


            {/* SYSTEM INFO */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.8,
              }}
              className="
                font-mono
                text-[10px]
                sm:text-xs
                opacity-40
                md:text-right
                space-y-1
              "
            >

              <p>ERROR ........ 404</p>
              <p>PATH ......... UNKNOWN</p>
              <p>STATUS ....... LOST</p>
              <p>RESPONSE ..... NOT FOUND</p>

            </motion.div>

          </div>


          {/* RETURN HOME */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 1,
            }}
            className="mt-12"
          >

            <Link
              href="/"
              className="
                inline-flex
                items-center
                gap-4
                font-mono
                text-sm
                border
                border-white/30
                px-6
                py-3
                transition-all
                duration-300
                hover:border-white
                hover:bg-white
                hover:text-black
                hover:gap-6
              "
            >
              <span>←</span>
              <span>Return Home</span>
            </Link>

          </motion.div>

        </div>

      </div>


      {/* ============================= */}
      {/* BOTTOM STATUS */}
      {/* ============================= */}

      <div
        className="
          absolute
          bottom-8
          left-6
          sm:left-10
          md:left-12
          right-6
          sm:right-10
          md:right-12
          flex
          justify-between
          font-mono
          text-[9px]
          uppercase
          tracking-[0.2em]
          opacity-30
        "
      >

        <span>
          Digital Archive
        </span>

        <span>
          2026
        </span>

      </div>


      {/* ============================= */}
      {/* SCANNING LINE */}
      {/* ============================= */}

      <motion.div
        animate={{
          y: ["0vh", "100vh"],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          pointer-events-none
          absolute
          left-0
          right-0
          top-0
          h-px
          bg-white/20
        "
      />

    </main>
  );
}