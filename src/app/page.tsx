"use client";

import { useEffect, useState } from "react";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Intro from "../components/Intro";
import Sidebar from "../components/Sidebar";
import Skills from "../components/Skills";
import Work from "../components/Work";

export default function Home() {
  const [isDark, setIsDark] = useState(true);
  const [showSidebar, setShowSidebar] = useState(false);
  const [activeSection, setActiveSection] = useState("intro");

  useEffect(() => {
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
  }, []);

  return (
    <main
      className={`min-h-screen transition-colors duration-900 ${
        isDark
          ? "bg-black text-white"
          : "bg-[#F8F6F2] text-black"
      }`}
    >
      {/* Toggle */}
      <div className="fixed top-10 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-4">

          <span
            className={`text-xs uppercase tracking-[0.3em] ${
              !isDark ? "opacity-100" : "opacity-40"
            }`}
          >
            Editorial
          </span>

          <button
            onClick={() => setIsDark(!isDark)}
            className={`relative h-10 w-20 rounded-full border ${
              isDark
                ? "border-white"
                : "border-black"
            }`}
          >
            <div
              className={`absolute top-1 h-8 w-8 rounded-full transition-all duration-500 ${
                isDark
                  ? "left-10 bg-white"
                  : "left-1 bg-black"
              }`}
            />
          </button>

          <span
            className={`text-xs uppercase tracking-[0.3em] ${
              isDark ? "opacity-100" : "opacity-40"
            }`}
          >
            Technical
          </span>

        </div>
      </div>

      {/* HERO */}
      <section
        id="hero"
        className="min-h-screen flex flex-col items-center justify-center"
      >
        <h1
          className={`leading-none ${
            isDark
              ? "text-[100px] font-mono tracking-wide"
              : "text-[115px] font-editorial tracking-normal"
          }`}
        >
          DHWANI PATEL
        </h1>

        <p
          className={`mt-6 text-xl opacity-80 ${
            isDark
              ? "font-mono uppercase tracking-[0.3em]"
              : "font-editorial italic tracking-wide"
          }`}
        >
          {isDark
            ? "Creative Developer & Digital Designer"
            : "Storyteller & Creative Technologist"}
        </p>
      </section>

      {/* PORTFOLIO AREA */}
      <div className="relative">

        {showSidebar && (
          <Sidebar activeSection={activeSection} />
        )}

        <Intro />
        <Work />
        <Experience />
        <Skills />
        <Contact />

      </div>

    </main>
  );
}