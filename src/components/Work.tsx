"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { projectDetails } from "../data/projectDetails.ts";
import { projects } from "../data/projects";

export default function Work() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [selectedProject, setSelectedProject] = useState("");

  const currentProject = selectedProject
  ? projectDetails[
      selectedProject as keyof typeof projectDetails
    ]
  : null;

  return (
    <section
      id="work"
      className="min-h-screen ml-[380px] flex items-center scroll-mt-32"
    >
      <div className="w-full max-w-6xl px-10 font-mono">

        <div className="grid grid-cols-[260px_1fr] gap-16">

          {/* LEFT SIDE */}
          <div>

           (Object.keys(projects) as (keyof typeof projects)[]).map((category) => (
              <div key={category} className="mb-6">

                <button
                  onClick={() => {
                    if (selectedCategory === category) {
                      setSelectedCategory("");
                      setSelectedProject("");
                    } else {
                      setSelectedCategory(category);
                      setSelectedProject("");
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
                      <motion.button
  key={project}
  onClick={() => setSelectedProject(project)}
  whileHover={{ x: 10 }}
  transition={{
    type: "spring",
    stiffness: 350,
    damping: 25,
  }}
  className={`group flex w-full items-center justify-between text-left py-1 ${
    selectedProject === project
      ? "opacity-100"
      : "opacity-40 hover:opacity-100"
  }`}
>
  <span className="text-sm">
    {project}
  </span>

  <motion.span
    initial={{ opacity: 0, x: -8 }}
    whileHover={{
      opacity: 1,
      x: 0,
    }}
    transition={{ duration: 0.2 }}
    className="text-xs opacity-60"
  >
    →
  </motion.span>
</motion.button>
                    ))}

                  </div>
                )}

              </div>
            ))}

          </div>

          {/* RIGHT SIDE */}
          <div>

          {!selectedProject ? (
  <>
    <h2 className="text-4xl mb-3">
      Projects
    </h2>

    <p className="max-w-md text-sm opacity-60 leading-8">
      Designed. Developed. Deployed.
      <br />
      <br />

    </p>
  </>
) : (
  <>
    <h2 className="text-2xl tracking-wide mb-1">
      {selectedProject}
    </h2>

    <p className="uppercase tracking-[0.4em] text-[10px] opacity-40 mb-4">
      {currentProject?.type}
    </p>
  </>
)}

{selectedProject && (
  <>
            {/* MEDIA */}
            <div className="flex gap-10 mt-10">
            

            {selectedProject === "Tampa City Ballet" &&
 currentProject &&
 "links" in currentProject ? (

<div className="flex flex-col gap-3 w-[500px]">

  {currentProject.links.map((link) => (
    <a
      key={link.title}
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm opacity-70 hover:opacity-100 hover:translate-x-4 transition-all duration-300 hover:[text-shadow:0_0_10px_rgba(255,255,255,0.8)]"
    >
      {link.title} ↗
    </a>
  ))}

</div>

) : selectedProject === "Stranger Things" ? (

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
                  selectedProject === "Catch some Butterflies" ||
                  selectedProject === "When Fans Get Too Attached"
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

            {"github" in currentProject && (
  <div className="mt-6 flex gap-8">

    {selectedProject === "Open Spot" && (
      <a
        href="https://www.canva.com/design/DAHIKmuaeOE/3MMok8gMN3CDcSp_-C_I-w/edit"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm opacity-70 hover:opacity-100 underline"
      >
        Project Report↗
      </a>
    )}

    <a
      href={currentProject.github}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm opacity-70 hover:opacity-100 underline"
    >
      GitHub↗
    </a>

  </div>
)}

            {/* INFO */}
            <div
          className={`flex gap-10 ${
            currentProject && "links" in currentProject
              ? "mt-14"
              : "mt-4"
          }`}
        >

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
            </>
        )}

          </div>

        </div>

      </div>
    </section>
  );
}