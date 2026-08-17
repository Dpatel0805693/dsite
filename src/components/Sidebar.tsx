type SidebarProps = {
    activeSection: string;
  };
  
  export default function Sidebar({
    activeSection,
  }: SidebarProps) {
    return (
      <>
        {/* ============================= */}
        {/* DESKTOP SIDEBAR */}
        {/* ============================= */}
  
        <aside className="hidden md:flex fixed left-12 top-0 h-screen w-[280px] flex-col justify-between py-14">
  
          {/* Name */}
          <div>
            <h2 className="font-mono text-2xl">
              D.P
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
          <div className="font-mono text-xs opacity-60">
            Last updated · 2026
          </div>
  
        </aside>
  
  
        {/* ============================= */}
        {/* MOBILE VERTICAL INDEX */}
        {/* ============================= */}
  
        <aside
          className="
            md:hidden
            fixed
            right-4
            top-1/2
            -translate-y-1/2
            z-40
          "
        >
  
          <nav>
            <ul className="flex flex-col items-end gap-3 font-mono">
  
              {/* INTRO */}
              <li>
                <a
                  href="#intro"
                  className={`
                    text-[9px]
                    uppercase
                    tracking-[0.2em]
                    transition-all
                    duration-300
                    ${
                      activeSection === "intro"
                        ? "opacity-100"
                        : "opacity-30"
                    }
                  `}
                >
                  Intro
                </a>
              </li>
  
              <li className="h-3 w-px bg-white/20" />
  
  
              {/* WORK */}
              <li>
                <a
                  href="#work"
                  className={`
                    text-[9px]
                    uppercase
                    tracking-[0.2em]
                    transition-all
                    duration-300
                    ${
                      activeSection === "work"
                        ? "opacity-100"
                        : "opacity-30"
                    }
                  `}
                >
                  Work
                </a>
              </li>
  
              <li className="h-3 w-px bg-white/20" />
  
  
              {/* EXPERIENCE */}
              <li>
                <a
                  href="#experience"
                  className={`
                    text-[9px]
                    uppercase
                    tracking-[0.2em]
                    transition-all
                    duration-300
                    ${
                      activeSection === "experience"
                        ? "opacity-100"
                        : "opacity-30"
                    }
                  `}
                >
                  Experience
                </a>
              </li>
  
              <li className="h-3 w-px bg-white/20" />
  
  
              {/* SKILLS */}
              <li>
                <a
                  href="#skills"
                  className={`
                    text-[9px]
                    uppercase
                    tracking-[0.2em]
                    transition-all
                    duration-300
                    ${
                      activeSection === "skills"
                        ? "opacity-100"
                        : "opacity-30"
                    }
                  `}
                >
                  Skills
                </a>
              </li>
  
              <li className="h-3 w-px bg-white/20" />
  
  
              {/* CONTACT */}
              <li>
                <a
                  href="#contact"
                  className={`
                    text-[9px]
                    uppercase
                    tracking-[0.2em]
                    transition-all
                    duration-300
                    ${
                      activeSection === "contact"
                        ? "opacity-100"
                        : "opacity-30"
                    }
                  `}
                >
                  Contact
                </a>
              </li>
  
            </ul>
          </nav>
  
        </aside>
      </>
    );
  }