type SidebarProps = {
    activeSection: string;
  };
  
  export default function Sidebar({
    activeSection,
  }: SidebarProps) {
    return (
      <aside className="fixed left-12 top-0 h-screen w-[280px] flex flex-col justify-between py-14">
  
        {/* Name */}
        <div>
          <h2 className="font-mono text-2xl">
            Dhwani Patel
          </h2>
        </div>
  
        {/* Navigation */}
            <nav>
            <ul className="space-y-1 font-mono">

                <li>
                <a
                    href="#intro"
                    className={`flex gap-28 text-lg transition-all ${
                    activeSection === "intro"
                        ? "opacity-100"
                        : "opacity-40 hover:opacity-70"
                    }`}
                >
                    <span>Intro</span>
                    <span>01</span>
                </a>
                </li>

                <li>
                <a
                    href="#work"
                    className={`flex gap-31 text-lg transition-all ${
                    activeSection === "work"
                        ? "opacity-100"
                        : "opacity-40 hover:opacity-70"
                    }`}
                >
                    <span>Work</span>
                    <span>02</span>
                </a>
                </li>

                <li>
                <a
                    href="#experience"
                    className={`flex gap-15 text-lg transition-all ${
                    activeSection === "experience"
                        ? "opacity-100"
                        : "opacity-40 hover:opacity-70"
                    }`}
                >
                    <span>Experience</span>
                    <span>03</span>
                </a>
                </li>

                <li>
                <a
                    href="#skills"
                    className={`flex gap-26 text-lg transition-all ${
                    activeSection === "skills"
                        ? "opacity-100"
                        : "opacity-40 hover:opacity-70"
                    }`}
                >
                    <span>Skills</span>
                    <span>04</span>
                </a>
                </li>

                <li>
                <a
                    href="#contact"
                    className={`flex gap-23 text-lg transition-all ${
                    activeSection === "contact"
                        ? "opacity-100"
                        : "opacity-40 hover:opacity-70"
                    }`}
                >
                    <span>Contact</span>
                    <span>05</span>
                </a>
                </li>

            </ul>
            </nav>
  
        {/* Footer */}
        <div className="font-mono text-sm opacity-60">
          2026 Dhwani Patel
        </div>
  
      </aside>
    );
  }