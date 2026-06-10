"use client";

import { useState } from "react";

export default function Home() {
  const [isDark, setIsDark] = useState(true);

  return (
    <main
      className={`min-h-screen transition-colors duration-900 ${
        isDark
          ? "bg-black text-white"
          : "bg-[#F8F6F2] text-black"
      }`}
    >
      {/* Toggle */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2">
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

      {/* Hero */}
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1
          className={`text-[120px] leading-none ${
            isDark
              ? "font-mono tracking-wide"
              : "font-editorial tracking-normal"
          }`}
        >
          Dhwani Patel
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
            : "Designer • Storyteller • Creative Technologist"}
        </p>
      </div>
    </main>
  );
}

