"use client";

import type { MouseEvent } from "react";

type SidebarProps = {
  activeSection: string;
};

const sections = [
  {
    id: "intro",
    label: "Intro",
    number: "01",
    gap: "gap-28",
  },
  {
    id: "work",
    label: "Work",
    number: "02",
    gap: "gap-31",
  },
  {
    id: "experience",
    label: "Experience",
    number: "03",
    gap: "gap-15",
  },
  {
    id: "skills",
    label: "Skills",
    number: "04",
    gap: "gap-26",
  },
  {
    id: "contact",
    label: "Contact",
    number: "05",
    gap: "gap-23",
  },
];

export default function Sidebar({
  activeSection,
}: SidebarProps) {

  const handleNavigation = (
    event: MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    event.preventDefault();

    const element = document.getElementById(id);

    if (!element) return;

    const elementPosition =
      element.getBoundingClientRect().top +
      window.scrollY;

    window.scrollTo({
      top: elementPosition,
      behavior: "smooth",
    });

    // Update URL hash without triggering
    // the browser's default anchor jump
    window.history.replaceState(
      null,
      "",
      `#${id}`
    );
  };

  return (
    <>
      {/* ============================= */}
      {/* DESKTOP SIDEBAR */}
      {/* ============================= */}

      <aside
        className="
          hidden
          md:flex
          fixed
          left-12
          top-0
          h-screen
          w-[280px]
          flex-col
          justify-between
          py-14
        "
      >

        {/* NAME */}

        <div>
          <h2 className="font-mono text-2xl">
            D.P
          </h2>
        </div>


        {/* NAVIGATION */}

        <nav>
          <ul className="space-y-1 font-mono">

            {sections.map((section) => (

              <li key={section.id}>

                <a
                  href={`#${section.id}`}
                  onClick={(event) =>
                    handleNavigation(
                      event,
                      section.id
                    )
                  }
                  className={`
                    flex
                    ${section.gap}
                    text-lg
                    transition-all
                    ${
                      activeSection === section.id
                        ? "opacity-100"
                        : "opacity-40 hover:opacity-70"
                    }
                  `}
                >

                  <span>
                    {section.label}
                  </span>

                  <span>
                    {section.number}
                  </span>

                </a>

              </li>

            ))}

          </ul>
        </nav>


        {/* FOOTER */}

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

            {sections.map((section, index) => (

              <div key={section.id}>

                <li>

                  <a
                    href={`#${section.id}`}
                    onClick={(event) =>
                      handleNavigation(
                        event,
                        section.id
                      )
                    }
                    className={`
                      text-[9px]
                      uppercase
                      tracking-[0.2em]
                      transition-all
                      duration-300
                      ${
                        activeSection === section.id
                          ? "opacity-100"
                          : "opacity-30"
                      }
                    `}
                  >
                    {section.label}
                  </a>

                </li>


                {index < sections.length - 1 && (
                  <li className="h-3 w-px bg-white/20" />
                )}

              </div>

            ))}

          </ul>

        </nav>

      </aside>
    </>
  );
}