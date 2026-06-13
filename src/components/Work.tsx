"use client";

import { useState } from "react";
import { projectDetails } from "../data/projectDetails";
import { projects } from "../data/projects";

export default function Work() {
  const [selectedCategory, setSelectedCategory] = useState(
    "Adobe Creative Suite"
  );

  const [selectedProject, setSelectedProject] = useState(
    "Self Portrait"
  );

  const currentProject =
    projectDetails[
      selectedProject as keyof typeof projectDetails
    ];

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

            <p className="uppercase tracking-[0.4em] text-[10px] opacity-40 mb-4">
              {currentProject.type}
            </p>

            {/* MEDIA */}
            <div className="flex justify-start mb-6">

            {selectedProject === "Stranger Things" ? (

            <div className="grid grid-cols-[1fr_1fr] gap-4 w-[500px]">

                <img
                src={currentProject.images[0]}
                alt=""
                className="h-full object-cover rounded-lg border border-white/20"
                />

                <div className="grid grid-rows-2 gap-4">

                <img
                    src={currentProject.images[1]}
                    alt=""
                    className="w-full object-cover rounded-lg border border-white/20"
                />

                <img
                    src={currentProject.images[2]}
                    alt=""
                    className="w-full object-cover rounded-lg border border-white/20"
                />

                </div>

            </div>

            ) : "images" in currentProject ? (

            <div className="grid grid-cols-2 gap-4 w-[600px]">

                {currentProject.images.map((image) => (
                <img
                    key={image}
                    src={image}
                    alt={selectedProject}
                    className="w-full object-cover rounded-lg border border-white/20"
                />
                ))}

            </div>

            ) : "gif" in currentProject ? (

            <img
                src={currentProject.gif}
                alt={selectedProject}
                className="w-[550px] rounded-lg border border-white/20"
            />
        ) : (

            <video
                src={currentProject.video}
                autoPlay={
                  selectedProject === "Northern Lights" ||
                  selectedProject === "Vector Mandala" ||
                  selectedProject === "Sanskrit" ||
                  selectedProject === "Brain vs Heart" ||
                  selectedProject === "Catch some Butterflies"
                }
                loop={
                  selectedProject === "Northern Lights" ||
                  selectedProject === "Vector Mandala" ||
                  selectedProject === "Sanskrit" ||
                  selectedProject === "Brain vs Heart" ||
                  selectedProject === "Catch some Butterflies"
                }
                muted
                playsInline
                controls={
                  selectedProject !== "Northern Lights" &&
                  selectedProject !== "Vector Mandala" &&
                  selectedProject !== "Sanskrit" &&
                  selectedProject !== "Brain vs Heart" &&
                  selectedProject !== "Catch some Butterflies"
                }
                className={`rounded-lg border border-white/20 ${
                    selectedProject === "SHE"
                      ? "w-[380px]"
                      : selectedProject === "The Wave"
                      ? "w-[450px]"
                      : selectedProject === "Northern Lights" ||
                        selectedProject === "Vector Mandala"
                      ? "w-[390px]"
                      : "w-[420px]"
                  }`}
            />
            
            )}

            </div>

            {/* INFO */}
            <div className="flex gap-10 mt-4">

              <div className="max-w-[260px]">
                <p className="text-xs uppercase tracking-[0.3em] opacity-50 mb-2">
                  Overview
                </p>

                <p className="text-sm opacity-80 leading-relaxed">
                  {currentProject.overview}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.3em] opacity-50 mb-2">
                  Tools
                </p>

                <p className="text-sm opacity-80">
                  {currentProject.tools}
                </p>
              </div>

              <div className="max-w-[220px]">
                <p className="text-xs uppercase tracking-[0.3em] opacity-50 mb-2">
                  Process
                </p>

                <p className="text-sm opacity-80 leading-relaxed">
                  {currentProject.process}
                </p>
              </div>

              <div className="max-w-[220px]">
                <p className="text-xs uppercase tracking-[0.3em] opacity-50 mb-2">
                  Outcome
                </p>

                <p className="text-sm opacity-80 leading-relaxed">
                  {currentProject.outcome}
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}