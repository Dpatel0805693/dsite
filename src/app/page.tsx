"use client";

import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";

export default function Home() {
  const [isDark, setIsDark] = useState(true);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowSidebar(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);

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
            Blueprint
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
        {showSidebar && <Sidebar />}

        
        
        <section
          id="intro"
          className="min-h-screen ml-[500px] flex items-center"
        >
          <div className="max-w-3xl px-20">

            <p className="font-mono text-lg leading-relaxed">
              I'm a Computer Science student,
              designer, and creative developer
              focused on building meaningful
              digital experiences.
              My work lives at the intersection
              of technology and storytelling,
              combining clean systems with
              thoughtful design.
              Currently pursuing a B.S. in
              Computer Science with a Minor
              in New Media at the University
              of Tampa.
            </p>


          </div>
        </section>





        <section
          id="skills"
          className="min-h-screen ml-[320px] flex items-center justify-center"
        >
          <h2 className="text-6xl font-mono">
            SKILLS
          </h2>
        </section>

        <section
          id="experience"
          className="min-h-screen ml-[320px] flex items-center justify-center"
        >
          <h2 className="text-6xl font-mono">
            EXPERIENCE
          </h2>
        </section>

        <section
          id="work"
          className="min-h-screen ml-[320px] flex items-center justify-center"
        >
          <h2 className="text-6xl font-mono">
            WORK
          </h2>
        </section>

        <section
          id="contact"
          className="min-h-screen ml-[320px] flex items-center justify-center"
        >
          <h2 className="text-6xl font-mono">
            CONTACT
          </h2>
        </section>
      </div>
    </main>
  );
}

