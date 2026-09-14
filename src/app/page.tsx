"use client";

import { useState } from "react";
import BlueprintCursor from "../components/BlueprintCursor";
import HoverTargets from "../components/HoverTargets";
import ParticleLogo from "../components/ParticleLogo";
import Sidebar from "../components/Sidebar";

export default function Home() {
  const [hideParticleLogo, setHideParticleLogo] =
    useState(false);

  return (
    <main
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-black
        text-white
      "
    >

      {/* ================================================= */}
      {/* BLUEPRINT CURSOR */}
      {/* ================================================= */}

      <BlueprintCursor />


      {/* ================================================= */}
      {/* FIXED BACKGROUND */}
      {/* ================================================= */}

      <div
        className="
          fixed
          inset-0
          z-0
          pointer-events-none
          overflow-hidden
        "
      >

        {/* MAN */}

        <img
          src="/images/man.png"
          alt=""
          aria-hidden="true"
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            object-center
            scale-[1.03]
          "
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


      {/* ================================================= */}
      {/* SIDEBAR */}
      {/* ================================================= */}

      <Sidebar activeSection="" />


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
          className={`
            absolute
            inset-0
            z-10
            translate-x-[18vw]
            scale-[0.85]
            transition-opacity
            duration-300
            ease-out
            ${
              hideParticleLogo
                ? "opacity-0"
                : "opacity-100"
            }
          `}
        >
          <ParticleLogo />
        </div>

      </section>


      {/* ================================================= */}
      {/* INTERACTIVE IMAGE NAVIGATION */}
      {/* ================================================= */}

      <HoverTargets
        enabled={true}
        onHoverChange={
          setHideParticleLogo
        }
      />

    </main>
  );
}