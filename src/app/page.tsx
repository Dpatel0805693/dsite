"use client";

import { useEffect, useState } from "react";
import BlueprintCursor from "../components/BlueprintCursor";
import Editorial from "../components/Editorial";
import HoverTargets from "../components/HoverTargets";
import ParticleLogo from "../components/ParticleLogo";
import Sidebar from "../components/Sidebar";

export default function Home() {
  const [isDark, setIsDark] = useState(true);
  const [showManBackground, setShowManBackground] =
    useState(false);

  useEffect(() => {
    if (!isDark) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;

      setShowManBackground(
        scrollY > heroHeight * 0.5
      );
    };

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    handleScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, [isDark]);

  return (
    <main
      className={`
        relative
        min-h-[200vh]
        overflow-x-hidden
        ${
          isDark
            ? "bg-black text-white"
            : "bg-[#F8F6F2] text-black"
        }
      `}
    >

      {/* ================================================= */}
      {/* BLUEPRINT CURSOR */}
      {/* ================================================= */}

      {isDark && <BlueprintCursor />}


      {/* ================================================= */}
      {/* FIXED BACKGROUND */}
      {/* ================================================= */}

      {isDark && (
        <div
          className="
            fixed
            inset-0
            z-0
            pointer-events-none
            overflow-hidden
          "
        >

          {/* BLURRED MAN */}

          <img
            src="/images/man.png"
            alt=""
            aria-hidden="true"
            className={`
              absolute
              inset-0
              w-full
              h-full
              object-cover
              object-center
              scale-[1.03]
              blur-[3px]
              transition-opacity
              duration-1000
              ${
                showManBackground
                  ? "opacity-0"
                  : "opacity-100"
              }
            `}
          />


          {/* SHARP MAN */}

          <img
            src="/images/man.png"
            alt=""
            aria-hidden="true"
            className={`
              absolute
              inset-0
              w-full
              h-full
              object-cover
              object-center
              transition-opacity
              duration-1000
              ${
                showManBackground
                  ? "opacity-100"
                  : "opacity-0"
              }
            `}
          />


          {/* DARK OVERLAY */}

          <div
            className="
              absolute
              inset-0
              bg-black/45
            "
          />

        </div>
      )}


      {/* ================================================= */}
      {/* CREATIVE / TECH TOGGLE */}
      {/* ================================================= */}

      <div
        className="
          fixed
          top-6
          sm:top-10
          left-1/2
          -translate-x-1/2
          z-[200]
        "
      >

        <div
          className="
            flex
            items-center
            gap-2
            sm:gap-4
          "
        >

          {/* CREATIVE */}

          <span
            className={`
              text-[9px]
              sm:text-xs
              uppercase
              tracking-[0.2em]
              sm:tracking-[0.3em]
              ${
                !isDark
                  ? "opacity-100"
                  : "opacity-40"
              }
            `}
          >
            Creative
          </span>


          {/* TOGGLE */}

          <button
            onClick={() =>
              setIsDark(!isDark)
            }
            className={`
              relative
              h-8
              w-16
              sm:h-10
              sm:w-20
              rounded-full
              border
              ${
                isDark
                  ? "border-white"
                  : "border-black"
              }
            `}
          >

            <div
              className={`
                absolute
                top-1
                h-6
                w-6
                sm:h-8
                sm:w-8
                rounded-full
                transition-all
                duration-500
                ${
                  isDark
                    ? "left-8 sm:left-10 bg-white"
                    : "left-1 bg-black"
                }
              `}
            />

          </button>


          {/* TECH */}

          <span
            className={`
              text-[9px]
              sm:text-xs
              uppercase
              tracking-[0.2em]
              sm:tracking-[0.3em]
              ${
                isDark
                  ? "opacity-100"
                  : "opacity-40"
              }
            `}
          >
            Tech
          </span>

        </div>

      </div>


      {/* ================================================= */}
      {/* TECH MODE */}
      {/* ================================================= */}

      {isDark ? (

        <>

          {/* ================================================= */}
          {/* SIDEBAR */}
          {/* ================================================= */}

          <Sidebar />


          {/* ================================================= */}
          {/* HERO */}
          {/* ================================================= */}

          <section
            id="hero"
            className="
              relative
              z-10
              min-h-screen
              w-full
              overflow-hidden
            "
          >

            <div
              className="
                absolute
                inset-0
                z-10
                translate-x-[18vw]
                scale-[0.85]
              "
            >
              <ParticleLogo />
            </div>

          </section>


          {/* ================================================= */}
          {/* INTERACTIVE IMAGE NAVIGATION */}
          {/* ================================================= */}

          <HoverTargets
            enabled={showManBackground}
          />

        </>

      ) : (

        /* ================================================= */
        /* CREATIVE MODE */
        /* ================================================= */

        <Editorial />

      )}

    </main>
  );
}