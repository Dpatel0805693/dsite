"use client";

import { useEffect, useState } from "react";
import BlueprintCursor from "../components/BlueprintCursor";
import Contact from "../components/Contact";
import Editorial from "../components/Editorial";
import Experience from "../components/Experience";
import Intro from "../components/Intro";
import ParticleLogo from "../components/ParticleLogo";
import Sidebar from "../components/Sidebar";
import Skills from "../components/Skills";
import Work from "../components/Work";

export default function Home() {
  const [isDark, setIsDark] = useState(true);
  const [showSidebar, setShowSidebar] = useState(false);
  const [activeSection, setActiveSection] = useState("intro");

  useEffect(() => {
    if (!isDark) return;

    const handleScroll = () => {
      setShowSidebar(window.scrollY > window.innerHeight * 0.8);

      const sections = [
        "intro",
        "work",
        "experience",
        "skills",
        "contact",
      ];

      for (const section of sections) {
        const element = document.getElementById(section);

        if (element) {
          const rect = element.getBoundingClientRect();

          if (
            rect.top <= window.innerHeight * 0.35 &&
            rect.bottom >= window.innerHeight * 0.35
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isDark]);

  return (
    <main
      className={`relative min-h-screen overflow-x-hidden transition-colors duration-900 ${
        isDark
          ? "bg-black text-white"
          : "bg-[#F8F6F2] text-black"
      }`}
    >

      {/* Blueprint Cursor */}
      {isDark && <BlueprintCursor />}


      {/* TOGGLE */}
      <div className="fixed top-6 sm:top-10 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-2 sm:gap-4">

          <span
            className={`text-[9px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] ${
              !isDark ? "opacity-100" : "opacity-40"
            }`}
          >
            Creative
          </span>


          <button
            onClick={() => setIsDark(!isDark)}
            className={`relative h-8 w-16 sm:h-10 sm:w-20 rounded-full border ${
              isDark ? "border-white" : "border-black"
            }`}
          >

            <div
              className={`absolute top-1 h-6 w-6 sm:h-8 sm:w-8 rounded-full transition-all duration-500 ${
                isDark
                  ? "left-8 sm:left-10 bg-white"
                  : "left-1 bg-black"
              }`}
            />

          </button>


          <span
            className={`text-[9px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] ${
              isDark ? "opacity-100" : "opacity-40"
            }`}
          >
            Tech
          </span>

        </div>
      </div>


      {isDark ? (
        <>

          {/* HERO */}
          <section
            id="hero"
            className="
              min-h-screen
              w-full
              flex
              flex-col
              items-center
              justify-center
              px-6
              sm:px-10
            "
          >

<ParticleLogo />

          </section>


          {/* CONTENT */}
          <div className="relative w-full">

            {showSidebar && (
              <Sidebar activeSection={activeSection} />
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