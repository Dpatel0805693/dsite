"use client";

import { useRef, useState } from "react";

import Contact from "./Contact";
import Experience from "./Experience";
import Intro from "./Intro";
import Skills from "./Skills";
import Work from "./Work";

interface HoverTargetsProps {
  enabled: boolean;
}

type Target =
  | "face"
  | "bag"
  | "experience"
  | "skills"
  | "contact"
  | null;

export default function HoverTargets({
  enabled,
}: HoverTargetsProps) {
  const [activeTarget, setActiveTarget] =
    useState<Target>(null);

  const closeTimer = useRef<
    ReturnType<typeof setTimeout> | null
  >(null);

  const openTarget = (target: Target) => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }

    setActiveTarget(target);
  };

  const closeTarget = () => {
    closeTimer.current = setTimeout(() => {
      setActiveTarget(null);
    }, 180);
  };

  if (!enabled) return null;

  return (
    <>
      {/* ================================================= */}
      {/* IMAGE HOTSPOTS */}
      {/* ================================================= */}

      <div
        className="
          fixed
          inset-0
          z-[90]
          pointer-events-none
        "
      >

        {/* ================================================= */}
        {/* FACE → INTRO */}
        {/* ================================================= */}

        <div
          onMouseEnter={() =>
            openTarget("face")
          }
          onMouseLeave={closeTarget}
          className={`
            absolute
            left-[35%]
            top-[15%]
            w-[10vw]
            h-[10vw]
            min-w-[90px]
            min-h-[90px]
            border-2
            pointer-events-auto
            cursor-pointer
            transition-all
            duration-200
            ${
              activeTarget === "face"
                ? "border-yellow-400 opacity-100"
                : "border-transparent opacity-0"
            }
          `}
        >
          <span
            className={`
              absolute
              -top-7
              left-0
              whitespace-nowrap
              font-mono
              text-[13px]
              uppercase
              tracking-[0.3em]
              text-yellow-400
              transition-all
              duration-200
              ${
                activeTarget === "face"
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-1"
              }
            `}
          >
            INTRO
          </span>
        </div>


        {/* ================================================= */}
        {/* BAG → WORK */}
        {/* ================================================= */}

        <div
          onMouseEnter={() =>
            openTarget("bag")
          }
          onMouseLeave={closeTarget}
          className={`
            absolute
            left-[23%]
            top-[28%]
            w-[8vw]
            h-[10vw]
            min-w-[150px]
            min-h-[200px]
            border-2
            pointer-events-auto
            cursor-pointer
            transition-all
            duration-200
            ${
              activeTarget === "bag"
                ? "border-yellow-400 opacity-100"
                : "border-transparent opacity-0"
            }
          `}
        >
          <span
            className={`
              absolute
              -top-7
              left-0
              whitespace-nowrap
              font-mono
              text-[13px]
              uppercase
              tracking-[0.3em]
              text-yellow-400
              transition-all
              duration-200
              ${
                activeTarget === "bag"
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-1"
              }
            `}
          >
            WORK
          </span>
        </div>


        {/* ================================================= */}
        {/* LEFT HAND → EXPERIENCE */}
        {/* ================================================= */}

        <div
          onMouseEnter={() =>
            openTarget("experience")
          }
          onMouseLeave={closeTarget}
          className={`
            absolute
            left-[30%]
            top-[55%]
            w-[10vw]
            h-[12vw]
            min-w-[90px]
            min-h-[120px]
            border-2
            pointer-events-auto
            cursor-pointer
            transition-all
            duration-200
            ${
              activeTarget === "experience"
                ? "border-yellow-400 opacity-100"
                : "border-transparent opacity-0"
            }
          `}
        >
          <span
            className={`
              absolute
              -top-7
              left-0
              whitespace-nowrap
              font-mono
              text-[13px]
              uppercase
              tracking-[0.3em]
              text-yellow-400
              transition-all
              duration-200
              ${
                activeTarget === "experience"
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-1"
              }
            `}
          >
            EXPERIENCE
          </span>
        </div>


        {/* ================================================= */}
        {/* RIGHT HAND → SKILLS */}
        {/* ================================================= */}

        <div
          onMouseEnter={() =>
            openTarget("skills")
          }
          onMouseLeave={closeTarget}
          className={`
            absolute
            left-[5%]
            top-[59%]
            w-[10vw]
            h-[10vw]
            min-w-[50px]
            min-h-[50px]
            border-2
            pointer-events-auto
            cursor-pointer
            transition-all
            duration-200
            ${
              activeTarget === "skills"
                ? "border-yellow-400 opacity-100"
                : "border-transparent opacity-0"
            }
          `}
        >
          <span
            className={`
              absolute
              -top-7
              left-0
              whitespace-nowrap
              font-mono
              text-[9px]
              uppercase
              tracking-[0.3em]
              text-yellow-400
              transition-all
              duration-200
              ${
                activeTarget === "skills"
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-1"
              }
            `}
          >
            SKILLS
          </span>
        </div>


        {/* ================================================= */}
        {/* SLIPPERS → CONTACT */}
        {/* ================================================= */}

        <div
          onMouseEnter={() =>
            openTarget("contact")
          }
          onMouseLeave={closeTarget}
          className={`
            absolute
            left-[18%]
            top-[78%]
            w-[22vw]
            h-[15vw]
            min-w-[150px]
            min-h-[100px]
            border-2
            pointer-events-auto
            cursor-pointer
            transition-all
            duration-200
            ${
              activeTarget === "contact"
                ? "border-yellow-400 opacity-100"
                : "border-transparent opacity-0"
            }
          `}
        >
          <span
            className={`
              absolute
              -top-7
              left-0
              whitespace-nowrap
              font-mono
              text-[9px]
              uppercase
              tracking-[0.3em]
              text-yellow-400
              transition-all
              duration-200
              ${
                activeTarget === "contact"
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-1"
              }
            `}
          >
            CONTACT
          </span>
        </div>

      </div>


      {/* ================================================= */}
      {/* RIGHT SIDE CONTENT */}
      {/* ================================================= */}

      <div
        className={`
          fixed
          right-0
          top-0
          z-[80]
          h-screen
          w-[48vw]
          max-w-[800px]
          min-w-[420px]
          transition-all
          duration-500
          ease-out
          ${
            activeTarget
              ? "translate-x-0 opacity-100"
              : "translate-x-8 opacity-0 pointer-events-none"
          }
        `}
        onMouseEnter={() => {
          if (closeTimer.current) {
            clearTimeout(closeTimer.current);
          }
        }}
        onMouseLeave={closeTarget}
      >

        {/* ================================================= */}
        {/* SUBTLE READING / BLUR LAYER */}
        {/* ================================================= */}

        <div
          className="
            absolute
            inset-0
            pointer-events-none
            bg-gradient-to-r
            from-black/10
            via-black/45
            to-black/55
            backdrop-blur-[1px]
          "
        />


        {/* ================================================= */}
        {/* CONTENT */}
        {/* ================================================= */}

        <div
          className="
            relative
            h-full
            w-full
            overflow-y-auto
            px-[4vw]
            pt-[14vh]
            pb-[12vh]
            font-mono
          "
        >

          {/* ================================================= */}
          {/* INTRODUCTION */}
          {/* ================================================= */}

          {activeTarget === "face" && (
            <div
              key="intro"
              className="
                animate-[fadeIn_0.4s_ease-out]
              "
            >
              <Intro />
            </div>
          )}


          {/* ================================================= */}
          {/* WORK */}
          {/* ================================================= */}

          {activeTarget === "bag" && (
            <div
              key="work"
              className="
                animate-[fadeIn_0.4s_ease-out]
              "
            >
              <Work />
            </div>
          )}


          {/* ================================================= */}
          {/* EXPERIENCE */}
          {/* ================================================= */}

          {activeTarget === "experience" && (
            <div
              key="experience"
              className="
                animate-[fadeIn_0.4s_ease-out]
              "
            >
              <Experience />
            </div>
          )}


          {/* ================================================= */}
          {/* SKILLS */}
          {/* ================================================= */}

          {activeTarget === "skills" && (
            <div
              key="skills"
              className="
                animate-[fadeIn_0.4s_ease-out]
              "
            >
              <Skills />
            </div>
          )}


          {/* ================================================= */}
          {/* CONTACT */}
          {/* ================================================= */}

          {activeTarget === "contact" && (
            <div
              key="contact"
              className="
                animate-[fadeIn_0.4s_ease-out]
              "
            >
              <Contact />
            </div>
          )}

        </div>

      </div>

    </>
  );
}