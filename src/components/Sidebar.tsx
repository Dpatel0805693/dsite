export default function Sidebar() {
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
          <ul className="space-y-6 font-mono">
  
            <li>
              <a
                href="#intro"
                className="flex justify-between text-2xl hover:opacity-70"
              >
                <span>Intro</span>
                <span>01</span>
              </a>
            </li>
  
            <li>
              <a
                href="#skills"
                className="flex justify-between text-2xl hover:opacity-70"
              >
                <span>Skills</span>
                <span>02</span>
              </a>
            </li>
  
            <li>
              <a
                href="#experience"
                className="flex justify-between text-2xl hover:opacity-70"
              >
                <span>Experience</span>
                <span>03</span>
              </a>
            </li>
  
            <li>
              <a
                href="#work"
                className="flex justify-between text-2xl hover:opacity-70"
              >
                <span>Work</span>
                <span>04</span>
              </a>
            </li>
  
            <li>
              <a
                href="#contact"
                className="flex justify-between text-2xl hover:opacity-70"
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