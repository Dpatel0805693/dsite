"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import type { Project } from "../data/projectDetails";
import { projectDetails } from "../data/projectDetails";
import { projects } from "../data/projects";

export default function Work() {
  const [selectedProject, setSelectedProject] = useState<string>("");

  const currentProject: Project | null =
    selectedProject && selectedProject in projectDetails
      ? projectDetails[selectedProject as keyof typeof projectDetails]
      : null;

  return (
    <section
      id="work"
      className="
        min-h-screen
        ml-0
        md:ml-[380px]
        flex
        items-center
        scroll-mt-32
        w-full
      "
    >
      <div className="w-full max-w-6xl px-6 sm:px-10 font-mono">

        <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-12 md:gap-16">

          {/* LEFT SIDE */}
          <div>

            {(Object.keys(projects) as (keyof typeof projects)[]).map(
              (category) => (
                <div
                  key={category}
                  tabIndex={0}
                  className="group py-4 outline-none"
                >

                  {/* CATEGORY NAME */}
                  <div className="flex items-center">

                    <h3
                      className="
                        text-base
                        sm:text-lg
                        transition-opacity
                        duration-300
                        opacity-50
                        group-hover:opacity-100
                        group-focus-within:opacity-100
                      "
                    >
                      {category}
                    </h3>

                  </div>


                  {/* PROJECTS */}
                  <div
                    className="
                      max-h-0
                      overflow-hidden
                      transition-all
                      duration-500
                      group-hover:max-h-96
                      group-focus-within:max-h-96
                    "
                  >

                    <div className="pt-3 ml-3 sm:ml-4 border-l border-white/20 pl-3 sm:pl-4 space-y-2">

                      {projects[category].map((project) => (

                        <motion.button
                          key={project}
                          onClick={() => setSelectedProject(project)}
                          whileHover={{ x: 8 }}
                          transition={{
                            type: "spring",
                            stiffness: 350,
                            damping: 25,
                          }}
                          className={`group/project flex w-full items-center justify-between text-left py-1 ${
                            selectedProject === project
                              ? "opacity-100"
                              : "opacity-40 hover:opacity-100"
                          }`}
                        >

                          <span className="text-xs sm:text-sm">
                            {project}
                          </span>

                          <span className="text-xs opacity-60">
                            →
                          </span>

                        </motion.button>

                      ))}

                    </div>

                  </div>

                </div>
              )
            )}

          </div>


          {/* RIGHT SIDE */}
          <div className="min-w-0">

            {!selectedProject ? (

              <>
                <h2 className="text-3xl sm:text-4xl mb-3">
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
                <h2 className="text-xl sm:text-2xl tracking-wide mb-1 break-words">
                  {selectedProject}
                </h2>

                <p className="uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[9px] sm:text-[10px] opacity-40 mb-4">
                  {currentProject?.type}
                </p>
              </>

            )}


            {selectedProject && (

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.92,
                  x: -30,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                }}
                style={{
                  transformOrigin: "top left",
                }}
                transition={{
                  duration: 0.45,
                  ease: "easeOut",
                }}
              >

                {/* MEDIA */}
                <div className="flex flex-col gap-6 sm:gap-10 mt-8 sm:mt-10 w-full">


                  {/* TAMPA CITY BALLET */}
                  {selectedProject === "Tampa City Ballet" &&
                  currentProject &&
                  "links" in currentProject ? (

                    <div className="flex flex-col gap-3 w-full max-w-[500px]">

                      {currentProject.links!.map((link) => (
                        <a
                          key={link.title}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            text-sm
                            opacity-70
                            hover:opacity-100
                            hover:translate-x-4
                            transition-all
                            duration-300
                            hover:[text-shadow:0_0_10px_rgba(255,255,255,0.8)]
                          "
                        >
                          {link.title} ↗
                        </a>
                      ))}

                    </div>


                  ) : selectedProject === "Stranger Things" &&
                    currentProject &&
                    "images" in currentProject ? (

                    <div className="grid grid-cols-1 sm:grid-cols-[1fr_1fr] gap-4 w-full max-w-[500px]">

                      <img
                        src={currentProject.images![0]}
                        alt=""
                        className="
                          w-full
                          h-auto
                          sm:h-full
                          object-cover
                          rounded-lg
                          border
                          border-white/20
                        "
                      />

                      <div className="grid grid-cols-2 sm:grid-rows-2 sm:grid-cols-1 gap-4">

                        <img
                          src={currentProject.images![1]}
                          alt=""
                          className="
                            w-full
                            object-cover
                            rounded-lg
                            border
                            border-white/20
                          "
                        />

                        <img
                          src={currentProject.images![2]}
                          alt=""
                          className="
                            w-full
                            object-cover
                            rounded-lg
                            border
                            border-white/20
                          "
                        />

                      </div>

                    </div>


                  ) : currentProject &&
                    "images" in currentProject ? (

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-[600px]">

                      {currentProject.images!.map((image) => (
                        <img
                          key={image}
                          src={image}
                          alt={selectedProject}
                          className="
                            w-full
                            h-auto
                            object-cover
                            rounded-lg
                            border
                            border-white/20
                          "
                        />
                      ))}

                    </div>


                  ) : currentProject &&
                    "gif" in currentProject ? (

                    <img
                      src={currentProject.gif}
                      alt={selectedProject}
                      className="
                        w-full
                        max-w-[550px]
                        h-auto
                        rounded-lg
                        border
                        border-white/20
                      "
                    />


                  ) : currentProject?.video ? (

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

                      className={`
                        w-full
                        h-auto
                        rounded-lg
                        border
                        border-white/20

                        ${
                          selectedProject === "SHE"
                            ? "max-w-[380px]"
                            : selectedProject === "The Wave"
                            ? "max-w-[450px]"
                            : selectedProject === "Northern Lights" ||
                              selectedProject === "Vector Mandala"
                            ? "max-w-[390px]"
                            : "max-w-[420px]"
                        }
                      `}
                    />

                  ) : null}

                </div>


                {/* LINKS */}
                {currentProject?.github && (
                  <div className="mt-6 flex flex-wrap gap-6 sm:gap-8">

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
                  className={`
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    lg:grid-cols-4
                    gap-8
                    lg:gap-10

                    ${
                      currentProject?.links
                        ? "mt-12 sm:mt-14"
                        : "mt-8 sm:mt-4"
                    }
                  `}
                >

                  {/* OVERVIEW */}
                  <div className="max-w-none lg:max-w-[260px]">

                    <p className="text-xs uppercase tracking-[0.3em] opacity-50 mb-2">
                      Overview
                    </p>

                    <p className="text-sm opacity-80 leading-relaxed">
                      {currentProject!.overview}
                    </p>

                  </div>


                  {/* TOOLS */}
                  <div>

                    <p className="text-xs uppercase tracking-[0.3em] opacity-50 mb-2">
                      Tools
                    </p>

                    <p className="text-sm opacity-80">
                      {currentProject!.tools}
                    </p>

                  </div>


                  {/* PROCESS */}
                  <div className="max-w-none lg:max-w-[220px]">

                    <p className="text-xs uppercase tracking-[0.3em] opacity-50 mb-2">
                      Process
                    </p>

                    <p className="text-sm opacity-80 leading-relaxed">
                      {currentProject!.process}
                    </p>

                  </div>


                  {/* OUTCOME */}
                  <div className="max-w-none lg:max-w-[220px]">

                    <p className="text-xs uppercase tracking-[0.3em] opacity-50 mb-2">
                      Outcome
                    </p>

                    <p className="text-sm opacity-80 leading-relaxed">
                      {currentProject!.outcome}
                    </p>

                  </div>

                </div>

              </motion.div>

            )}

          </div>

        </div>

      </div>
    </section>
  );
}