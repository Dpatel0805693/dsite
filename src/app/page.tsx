"use client";

import { useState } from "react";

export default function Home() {
  const [isDark, setIsDark] = useState(true);

  return (
    <main
      className={`min-h-screen transition-all duration-700 ${
        isDark
          ? "bg-black text-white"
          : "bg-[#F7F5F2] text-black"
      }`}
    >
      {/* Toggle */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2">
        <div className="flex items-center gap-4">
          <span className="text-xs tracking-[0.25em] uppercase">
            Light
          </span>

          <button
            onClick={() => setIsDark(!isDark)}
            className={`relative h-10 w-20 rounded-full border transition-all duration-500 ${
              isDark ? "border-white" : "border-black"
            }`}
          >
            <div
              className={`absolute top-1 h-8 w-8 rounded-full transition-all duration-500 ${
                isDark
                  ? "left-[42px] bg-white"
                  : "left-1 bg-black"
              }`}
            />
          </button>

          <span className="text-xs tracking-[0.25em] uppercase">
            Dark
          </span>
        </div>
      </div>

      {/* Hero */}
      <section className="flex min-h-screen flex-col items-center justify-center">
        <h1
          className={`transition-all duration-700 ${
            isDark
              ? "text-8xl font-light tracking-wide"
              : "text-8xl font-light tracking-wide"
          }`}
        >
          Dhwani Patel
        </h1>

        <p className="mt-8 text-sm uppercase tracking-[0.45em] opacity-80 transition-all duration-700">
          {isDark
            ? "Creative Developer & Digital Designer"
            : "Designer • Storyteller • Creative"}
        </p>
      </section>
    </main>
  );
}