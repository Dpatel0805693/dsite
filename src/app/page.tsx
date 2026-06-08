"use client";

import { useState } from "react";

export default function Home() {
  const [isDark, setIsDark] = useState(true);

  return (
    <main
      className={`min-h-screen transition-all duration-700 ${
        isDark
          ? "bg-black text-white"
          : "bg-[#F5F5F5] text-black"
      }`}
    >
      {/* Toggle */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2">
        <div className="flex items-center gap-4">
          

          <button
            onClick={() => setIsDark(!isDark)}
            className={`relative w-20 h-10 rounded-full border transition-all ${
              isDark
                ? "border-white"
                : "border-black"
            }`}
          >
            <div
              className={`absolute top-1 w-8 h-8 rounded-full transition-all duration-500 ${
                isDark
                  ? "left-10 bg-white"
                  : "left-1 bg-black"
              }`}
            />
          </button>


        </div>
      </div>

      {/* Hero */}
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-8xl font-light tracking-wide">
          Dhwani Patel
        </h1>

        <p className="mt-6 text-xl tracking-[0.3em] uppercase opacity-80">
          Creative Developer & Digital Designer
        </p>
      </div>
    </main>
  );
}