// page.tsx

"use client";

import { useEffect, useState } from "react";
import BlueprintCursor from "../components/BlueprintCursor";
import Contact from "../components/Contact";
import Editorial from "../components/Editorial";
import Experience from "../components/Experience";
import HoverTargets from "../components/HoverTargets";
import Intro from "../components/Intro";
import ParticleLogo from "../components/ParticleLogo";
import Sidebar from "../components/Sidebar";
import Skills from "../components/Skills";
import Work from "../components/Work";

export default function Home() {
  const [isDark, setIsDark] = useState(true);
  const [showSidebar, setShowSidebar] = useState(false);
  const [activeSection, setActiveSection] =
    useState("intro");

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

      setShowSidebar(
        scrollY > heroHeight * 0.8
      );

      const sections = [
        "intro",
        "work",
        "experience",
        "skills",
        "contact",
      ];

      for (const section of sections) {
        const element =
          document.getElementById(section);

        if (!element) continue;

        const rect =
          element.getBoundingClientRect();

        if (
          rect.top <= window.innerHeight * 0.35 &&
          rect.bottom >= window.innerHeight * 0.35
        ) {
          setActiveSection(section);
          break;
        }
      }
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
        min-h-screen
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
              blur-[6px]
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
          z-[100]
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

            {/* PARTICLE LOGO */}

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
          {/* HOVER TARGETS */}
          {/* ================================================= */}

          <HoverTargets
            enabled={showManBackground}
          />


          {/* ================================================= */}
          {/* CONTENT */}
          {/* ================================================= */}

          <div
            className="
              relative
              z-20
              w-full
            "
          >

            {showSidebar && (
              <Sidebar
                activeSection={activeSection}
              />
            )}

            <Intro />

            <Work />

            <Experience />

            <Skills />

            <Contact />

          </div>

        </>

      ) : (

        <Editorial />

      )}

    </main>
  );
}