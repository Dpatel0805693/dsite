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

  /* ========================================================= */
  /* PROJECT MEDIA */
  /* ========================================================= */

  const ProjectMedia = () => {
    if (!currentProject) return null;

    const autoPlay =
      selectedProject === "Northern Lights" ||
      selectedProject === "Vector Mandala" ||
      selectedProject === "Sanskrit" ||
      selectedProject === "Brain vs Heart" ||
      selectedProject === "Catch some Butterflies" ||
      selectedProject === "When Fans Get Too Attached";

    const loop =
      selectedProject === "Northern Lights" ||
      selectedProject === "Vector Mandala" ||
      selectedProject === "Sanskrit" ||
      selectedProject === "Brain vs Heart" ||
      selectedProject === "Catch some Butterflies";

    const controls =
      selectedProject !== "Northern Lights" &&
      selectedProject !== "Vector Mandala" &&
      selectedProject !== "Sanskrit" &&
      selectedProject !== "Brain vs Heart" &&
      selectedProject !== "Catch some Butterflies";

    /* ------------------------------------------------------- */
    /* TAMPA CITY BALLET */
    /* ------------------------------------------------------- */

    if (
      selectedProject === "Tampa City Ballet" &&
      "links" in currentProject
    ) {
      return (
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
      );
    }

    /* ------------------------------------------------------- */
    /* STRANGER THINGS */
    /* ------------------------------------------------------- */

    if (
      selectedProject === "Stranger Things" &&
      "images" in currentProject
    ) {
      return (
        <div
          className="
            grid
            grid-cols-[1fr_1fr]
            gap-2
            sm:gap-4
            w-full
            max-w-[290px]
            sm:max-w-[500px]
          "
        >
          <img
            src={currentProject.images![0]}
            alt=""
            className="
              w-full
              h-full
              object-cover
              rounded-lg
              border
              border-white/20
            "
          />

          <div className="grid grid-rows-2 gap-2 sm:gap-4">
            <img
              src={currentProject.images![1]}
              alt=""
              className="
                w-full
                h-full
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
                h-full
                object-cover
                rounded-lg
                border
                border-white/20
              "
            />
          </div>
        </div>
      );
    }

    /* ------------------------------------------------------- */
    /* IMAGE PROJECTS */
    /* ------------------------------------------------------- */

    if ("images" in currentProject) {
      return (
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            gap-3
            sm:gap-4
            w-full
            max-w-[290px]
            sm:max-w-[600px]
          "
        >
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
      );
    }

    /* ------------------------------------------------------- */
    /* GIF PROJECTS */
    /* ------------------------------------------------------- */

    if ("gif" in currentProject) {
      return (
        <img
          src={currentProject.gif}
          alt={selectedProject}
          className="
            w-full
            max-w-[290px]
            sm:max-w-[550px]
            h-auto
            rounded-lg
            border
            border-white/20
          "
        />
      );
    }

    /* ------------------------------------------------------- */
    /* VIDEO PROJECTS */
    /* ------------------------------------------------------- */

    if (currentProject.video) {
      return (
        <video
          src={currentProject.video}
          autoPlay={autoPlay}
          loop={loop}
          muted
          playsInline
          controls={controls}
          className={`
            w-full
            h-auto
            rounded-lg
            border
            border-white/20

            ${
              selectedProject === "SHE"
                ? "max-w-[300px] sm:max-w-[380px]"
                : selectedProject === "The Wave"
                ? "max-w-[300px] sm:max-w-[450px]"
                : selectedProject === "Northern Lights" ||
                  selectedProject === "Vector Mandala"
                ? "max-w-[300px] sm:max-w-[390px]"
                : "max-w-[300px] sm:max-w-[420px]"
            }
          `}
        />
      );
    }

    return null;
  };

  /* ========================================================= */
  /* PROJECT LINKS */
  /* ========================================================= */

  const ProjectLinks = () => {
    if (!currentProject?.github) return null;

    return (
      <div className="mt-6 flex flex-wrap gap-6 sm:gap-8">
        {selectedProject === "Open Spot" && (
          <a
            href="https://www.canva.com/design/DAHIKmuaeOE/3MMok8gMN3CDcSp_-C_I-w/edit"
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-sm
              opacity-70
              hover:opacity-100
              underline
              transition-opacity
            "
          >
            Project Report ↗
          </a>
        )}

        <a
          href={currentProject.github}
          target="_blank"
          rel="noopener noreferrer"
          className="
            text-sm
            opacity-70
            hover:opacity-100
            underline
            transition-opacity
          "
        >
          GitHub ↗
        </a>
      </div>
    );
  };

  /* ========================================================= */
  /* PROJECT INFORMATION */
  /* ========================================================= */

  const ProjectInfo = () => {
    if (!currentProject) return null;

    return (
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-8
          lg:gap-10
          mt-8
        "
      >
        {/* OVERVIEW */}

        <div className="max-w-none lg:max-w-[260px]">
          <p className="text-xs uppercase tracking-[0.3em] opacity-50 mb-2">
            Overview
          </p>

          <p className="text-sm opacity-80 leading-relaxed">
            {currentProject.overview}
          </p>
        </div>

        {/* TOOLS */}

        <div>
          <p className="text-xs uppercase tracking-[0.3em] opacity-50 mb-2">
            Tools
          </p>

          <p className="text-sm opacity-80">
            {currentProject.tools}
          </p>
        </div>

        {/* PROCESS */}

        <div className="max-w-none lg:max-w-[220px]">
          <p className="text-xs uppercase tracking-[0.3em] opacity-50 mb-2">
            Process
          </p>

          <p className="text-sm opacity-80 leading-relaxed">
            {currentProject.process}
          </p>
        </div>

        {/* OUTCOME */}

        <div className="max-w-none lg:max-w-[220px]">
          <p className="text-xs uppercase tracking-[0.3em] opacity-50 mb-2">
            Outcome
          </p>

          <p className="text-sm opacity-80 leading-relaxed">
            {currentProject.outcome}
          </p>
        </div>
      </div>
    );
  };

  /* ========================================================= */
  /* MOBILE PROJECT DETAILS */
  /* ========================================================= */

  const MobileProjectDetails = ({
    project,
  }: {
    project: string;
  }) => {
    if (
      selectedProject !== project ||
      !currentProject
    ) {
      return null;
    }

    return (
      <motion.div
        initial={{
          opacity: 0,
          height: 0,
        }}
        animate={{
          opacity: 1,
          height: "auto",
        }}
        transition={{
          duration: 0.45,
          ease: "easeOut",
        }}
        className="md:hidden overflow-hidden"
      >
        <div className="pt-6 pb-10">

          {/* PROJECT TITLE */}

          <h2 className="text-xl tracking-wide mb-1">
            {selectedProject}
          </h2>

          <p className="uppercase tracking-[0.3em] text-[9px] opacity-40 mb-6">
            {currentProject.type}
          </p>


          {/* MEDIA */}

          <div className="w-full mb-6">
            <ProjectMedia />
          </div>


          {/* LINKS */}

          <ProjectLinks />


          {/* INFORMATION */}

          <ProjectInfo />

        </div>
      </motion.div>
    );
  };

  /* ========================================================= */
  /* MAIN */
  /* ========================================================= */

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


        {/* ================================================= */}
        {/* MOBILE HEADER */}
        {/* ================================================= */}

        <div className="md:hidden mb-10">

          <h2 className="text-3xl mb-3">
            Projects
          </h2>

          <p className="max-w-md text-sm opacity-60 leading-8">
            Designed. Developed. Deployed.
          </p>

        </div>


        {/* ================================================= */}
        {/* MAIN GRID */}
        {/* ================================================= */}

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-[260px_1fr]
            gap-12
            md:gap-16
          "
        >


          {/* ================================================= */}
          {/* LEFT SIDE — PROJECT CATEGORIES */}
          {/* ================================================= */}

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


                  {/* PROJECT LIST */}

                  <div
                    className="
                      max-h-0
                      overflow-hidden
                      transition-all
                      duration-500
                      group-hover:max-h-[1500px]
                      group-focus-within:max-h-[1500px]
                    "
                  >

                    <div
                      className="
                        pt-3
                        ml-3
                        sm:ml-4
                        border-l
                        border-white/20
                        pl-3
                        sm:pl-4
                        space-y-2
                      "
                    >

                      {projects[category].map((project) => (

                        <div key={project}>


                          {/* PROJECT BUTTON */}

                          <motion.button
                            onClick={() =>
                              setSelectedProject(
                                selectedProject === project
                                  ? ""
                                  : project
                              )
                            }
                            whileHover={{ x: 8 }}
                            transition={{
                              type: "spring",
                              stiffness: 350,
                              damping: 25,
                            }}
                            className={`
                              group/project
                              flex
                              w-full
                              items-center
                              justify-between
                              text-left
                              py-1

                              ${
                                selectedProject === project
                                  ? "opacity-100"
                                  : "opacity-40 hover:opacity-100"
                              }
                            `}
                          >

                            <span className="text-xs sm:text-sm">
                              {project}
                            </span>

                            <span
                              className={`
                                text-xs
                                opacity-60
                                transition-transform
                                duration-300

                                ${
                                  selectedProject === project
                                    ? "rotate-90"
                                    : ""
                                }
                              `}
                            >
                              →
                            </span>

                          </motion.button>


                          {/* MOBILE DETAILS */}

                          <MobileProjectDetails
                            project={project}
                          />

                        </div>

                      ))}

                    </div>

                  </div>

                </div>

              )
            )}

          </div>


          {/* ================================================= */}
          {/* RIGHT SIDE — DESKTOP */}
          {/* ================================================= */}

          <div className="hidden md:block min-w-0">


            {/* DEFAULT DESKTOP STATE */}

            {!selectedProject ? (

              <div>

                <h2 className="text-3xl sm:text-4xl mb-3">
                  Projects
                </h2>

                <p className="max-w-md text-sm opacity-60 leading-8">
                  Designed. Developed. Deployed.
                  <br />
                  <br />
                </p>

              </div>

            ) : (

              <>


                {/* PROJECT TITLE */}

                <h2 className="text-2xl tracking-wide mb-1">
                  {selectedProject}
                </h2>

                <p className="uppercase tracking-[0.4em] text-[10px] opacity-40 mb-4">
                  {currentProject?.type}
                </p>


                {/* PROJECT CONTENT */}

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

                  <div className="flex gap-10 mt-10">
                    <ProjectMedia />
                  </div>


                  {/* LINKS */}

                  <ProjectLinks />


                  {/* INFORMATION */}

                  <div
                    className={
                      currentProject?.links
                        ? "mt-14"
                        : "mt-4"
                    }
                  >
                    <ProjectInfo />
                  </div>


                </motion.div>

              </>

            )}

          </div>

        </div>

      </div>
    </section>
  );
}