"use client";

type SidebarProps = {
  activeSection: string;
};

export default function Sidebar({ activeSection }: SidebarProps) {
  // Kept for compatibility with the existing page.tsx.
  // The original top/bottom text was intentionally empty.
  void activeSection;

  return (
    <aside
      aria-hidden="true"
      className="
        pointer-events-none
        fixed inset-y-0 left-0 z-[200]
        flex flex-col justify-between
        w-[min(280px,35vw)]
        py-6 pl-5 pr-2
        sm:py-8 sm:pl-8
        lg:py-10 lg:pl-12
        max-sm:w-24
      "
    >
      {/* TOP LEFT — left blank to preserve your original design */}
      <div className="font-mono text-[clamp(12px,1.1vw,16px)] tracking-[0.08em] text-white" />

      {/* BOTTOM LEFT — left blank to preserve your original design */}
      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/55" />
    </aside>
  );
}
