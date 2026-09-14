"use client";

import { useEffect, useRef, useState } from "react";
import Contact from "./Contact";
import Experience from "./Experience";
import Intro from "./Intro";
import Skills from "./Skills";
import Work from "./Work";

interface HoverTargetsProps {
  enabled: boolean;
  onHoverChange: (hovering: boolean) => void;
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
  onHoverChange,
}: HoverTargetsProps) {
  const [activeTarget, setActiveTarget] =
    useState<Target>(null);

  const closeTimer = useRef<
    ReturnType<typeof setTimeout> | null
  >(null);

  useEffect(() => {
    onHoverChange(activeTarget !== null);
  }, [activeTarget, onHoverChange]);

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

  return (
    <>
      {/* ================================================= */}
      {/* RESUME + CONTACT BUTTONS */}
      {/* ================================================= */}

      <div
        className="
          fixed
          left-30
          bottom-20
          z-[200]
          flex
          items-center
          gap-1
        "
      >

        {/* ================================================= */}
        {/* RESUME */}
        {/* ================================================= */}

        <a
          href="https://canva.link/lyqomyc283nk5x5"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Resume"
          className="
            group
            relative
            flex
            items-center
            justify-center
            w-[80px]
            h-[80px]
            shrink-0
            cursor-pointer
            transition-all
            duration-200
            hover:-translate-y-1
            active:translate-y-0
            active:scale-95
          "
        >

          <img
            src="/images/resume.png"
            alt="Resume"
            className="
              w-full
              h-full
              object-contain
              transition-all
              duration-200
              group-hover:drop-shadow-[4px_5px_3px_rgba(0,0,0,0.9)]
              group-active:drop-shadow-[2px_3px_2px_rgba(0,0,0,0.9)]
            "
          />

          <span
            className="
              absolute
              left-1/2
              -translate-x-1/2
              -bottom-6
              whitespace-nowrap
              font-mono
              text-[10px]
              uppercase
              tracking-[0.25em]
              text-yellow-400
              opacity-0
              translate-y-1
              transition-all
              duration-200
              group-hover:opacity-100
              group-hover:translate-y-0
            "
          >
            RESUME
          </span>

        </a>


        {/* ================================================= */}
        {/* CONTACT */}
        {/* ================================================= */}

        <button
          type="button"
          onClick={() => openTarget("contact")}
          aria-label="Contact"
          className="
            group
            relative
            flex
            items-center
            justify-center
            w-[70px]
            h-[60px]
            shrink-0
            cursor-pointer
            transition-all
            duration-200
            hover:-translate-y-1
            active:translate-y-0
            active:scale-95
          "
        >

          <img
            src="/images/contact.png"
            alt="Contact"
            className="
              w-full
              h-full
              object-contain
              transition-all
              duration-200
              group-hover:drop-shadow-[4px_5px_3px_rgba(0,0,0,0.9)]
              group-active:drop-shadow-[2px_3px_2px_rgba(0,0,0,0.9)]
            "
          />

          <span
            className="
              absolute
              left-1/2
              -translate-x-1/2
              -bottom-6
              whitespace-nowrap
              font-mono
              text-[10px]
              uppercase
              tracking-[0.25em]
              text-yellow-400
              opacity-0
              translate-y-1
              transition-all
              duration-200
              group-hover:opacity-100
              group-hover:translate-y-0
            "
          >
            CONTACT
          </span>

        </button>

      </div>


      {/* ================================================= */}
      {/* IMAGE HOTSPOTS */}
      {/* ================================================= */}

      {enabled && (
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
              w-[10vw]
              h-[12vw]
              min-w-[120px]
              min-h-[150px]
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
              top-[75%]
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
              left-[30%]
              top-[52%]
              w-[13vw]
              h-[8vw]
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
                text-[13px]
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

        </div>
      )}


      {/* ================================================= */}
      {/* RIGHT SIDE CONTENT */}
      {/* ================================================= */}

      <div
        className={`
          fixed
          right-0
          top-0
          z-[150]
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
        {/* READING / BLUR LAYER */}
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
          {/* INTRO */}
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