"use client";

import { useState } from "react";
import { projects } from "../data/projects";

export default function Work() {
  const [selectedCategory, setSelectedCategory] = useState(
    "Adobe Creative Suite"
  );

  const [selectedProject, setSelectedProject] = useState(
    "Self Portrait"
  );

  return (
    <section
      id="work"
      className="min-h-screen ml-[380px] flex items-center scroll-mt-32"
    >
      <div className="w-full max-w-6xl px-10 font-mono">

        <div className="grid grid-cols-[260px_1fr] gap-16">

          {/* LEFT SIDE */}
          <div>

            {Object.keys(projects).map((category) => (
              <div key={category} className="mb-6">

                <button
                  onClick={() => {
                    if (selectedCategory === category) {
                      setSelectedCategory("");
                    } else {
                      setSelectedCategory(category);
                      setSelectedProject(projects[category][0]);
                    }
                  }}
                  className={`text-left text-lg transition ${
                    selectedCategory === category
                      ? "opacity-100"
                      : "opacity-50 hover:opacity-100"
                  }`}
                >
                  {category}
                </button>

                {selectedCategory === category && (
                  <div className="mt-3 ml-4 border-l border-white/20 pl-4 space-y-2">

                    {projects[category].map((project) => (
                      <button
                        key={project}
                        onClick={() => setSelectedProject(project)}
                        className={`block text-sm text-left transition ${
                          selectedProject === project
                            ? "opacity-100 translate-x-2"
                            : "opacity-40 hover:opacity-100"
                        }`}
                      >
                        {project}
                      </button>
                    ))}

                  </div>
                )}

              </div>
            ))}

          </div>

          {/* RIGHT SIDE */}
          <div>

            <h2 className="text-2xl tracking-wide mb-1">
              {selectedProject}
            </h2>

            <p className="uppercase tracking-[0.3em] text-xs opacity-50 mb-4">
              Project
            </p>

            {/* IMAGE */}
            <div className="h-[320px] w-full border border-white/20 rounded-lg flex items-center justify-center">
              <p className="opacity-40">
                PROJECT IMAGE
              </p>
            </div>

            {/* INFO */}
            <div className="flex gap-10 mt-6">

              <div className="max-w-[220px]">
                <p className="text-xs uppercase tracking-[0.3em] opacity-50 mb-2">
                  Overview
                </p>

                <p className="text-sm opacity-80 leading-relaxed">
                  Project overview will go here.
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.3em] opacity-50 mb-2">
                  Role
                </p>

                <p className="text-sm opacity-80">
                  Designer
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.3em] opacity-50 mb-2">
                  Tools
                </p>

                <p className="text-sm opacity-80">
                  Adobe Suite
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.3em] opacity-50 mb-2">
                  Highlights
                </p>

                <p className="text-sm opacity-80">
                  Creativity
                  <br />
                  Design
                  <br />
                  Development
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}