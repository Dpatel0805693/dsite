"use client";

type SidebarProps = {
  activeSection: string;
};

export default function Sidebar({
  activeSection,
}: SidebarProps) {
  return (
    <aside
      className="
        fixed
        left-12
        top-0
        z-[200]
        h-screen
        w-[280px]
        flex
        flex-col
        justify-between
        py-10
        pointer-events-none
      "
    >

      {/* ================================= */}
      {/* NAME — TOP LEFT */}
      {/* ================================= */}

      <div>
        <h2
          className="
            font-mono
            text-[16px]
            font-normal
            tracking-[0.08em]
            text-white
          "
        >
          
        </h2>
      </div>


      {/* ================================= */}
      {/* LAST UPDATED — BOTTOM LEFT */}
      {/* ================================= */}

      <div
        className="
          font-mono
          text-[11px]
          uppercase
          tracking-[0.28em]
          text-white/55
        "
      >
        
      </div>

    </aside>
  );
}