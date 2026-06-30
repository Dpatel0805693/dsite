"use client";

import { useEffect, useState } from "react";

export default function HeroTypewriter() {
  const line1 = "DHWANI PATEL";
  const line2 = "Creative Developer & Digital Designer";

  const [displayedLine1, setDisplayedLine1] = useState("");
  const [displayedLine2, setDisplayedLine2] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let index1 = 0;
  
    const typeLine1 = setInterval(() => {
      if (index1 < line1.length) {
        setDisplayedLine1(line1.slice(0, index1 + 1));
        index1++;
      } else {
        clearInterval(typeLine1);
  
        let index2 = 0;
  
        const typeLine2 = setInterval(() => {
          if (index2 < line2.length) {
            setDisplayedLine2(line2.slice(0, index2 + 1));
            index2++;
          } else {
            clearInterval(typeLine2);
  
            setCursorVisible(false);
          }
        }, 85); // subtitle typing speed
      }
    }, 95); // name typing speed
  
    return () => clearInterval(typeLine1);
  }, []);

  return (
    <div className="flex items-end justify-center">
<div className="flex flex-col items-center">

{/* Name */}
<div className="flex items-end">
  <h1 className="text-[100px] font-mono tracking-wide leading-none">
    {displayedLine1}
  </h1>

  {displayedLine2 === "" && cursorVisible && (
    <span className="ml-1 mb-2 text-[55px] leading-none">
      ▌
    </span>
  )}
</div>

{/* Subtitle */}
<div className="mt-6 flex items-end">
  <p className="text-xl font-mono uppercase tracking-[0.3em] opacity-80">
    {displayedLine2}
  </p>

  {displayedLine2 !== "" && cursorVisible && (
    <span className="ml-1 text-xl leading-none">
      ▌
    </span>
  )}
</div>

</div>


    </div>
  );
}