// HoverTargets.tsx

"use client";

import { useState } from "react";

interface HoverTargetsProps {
  enabled: boolean;
}

export default function HoverTargets({
  enabled,
}: HoverTargetsProps) {
  const [faceHover, setFaceHover] =
    useState(false);

  if (!enabled) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-[90]
        pointer-events-none
      "
    >

      {/* ================================================= */}
      {/* FACE HOVER TARGET */}
      {/* ================================================= */}

      <div
        onMouseEnter={() =>
          setFaceHover(true)
        }
        onMouseLeave={() =>
          setFaceHover(false)
        }
        className={`
          absolute
          left-[35%]
          top-[15%]
          w-[9vw]
          h-[9vw]
          border-2
          pointer-events-auto
          transition-opacity
          duration-150
          ${
            faceHover
              ? "border-yellow-400 opacity-100"
              : "border-transparent opacity-0"
          }
        `}
      />

    </div>
  );
}