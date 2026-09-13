"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import type { Project } from "../data/projectDetails";
import { projectDetails } from "../data/projectDetails";
import { projects } from "../data/projects";

export default function Work() {
  const [selectedProject, setSelectedProject] =
    useState<string>("");

  const currentProject: Project | null =
    selectedProject &&
    selectedProject in projectDetails
      ? projectDetails[
          selectedProject as keyof typeof projectDetails
        ]
      : null;

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

    if (
      selectedProject === "Tampa City Ballet" &&
      "links" in currentProject
    ) {
      return (
        <div className="flex flex-col gap-3">
          {currentProject.links!.map((link) => (
            <a
              key={link.title}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-sm
                opacity-60
                hover:opacity-100
                hover:translate-x-2
                transition-all
                duration-300
              "
            >
              {link.title} ↗
            </a>
          ))}
        </div>
      );
    }

    if (
      selectedProject === "Stranger Things" &&
      "images" in currentProject
    ) {
      return (
        <div className="grid grid-cols-2 gap-2 max-w-[420px]">
          {currentProject.images!.map((image) => (
            <img
              key={image}
              src={image}
              alt=""
              className="
                w-full
                h-auto
                object-cover
                border
                border-white/15
              "
            />
          ))}
        </div>
      );
    }

    if ("images" in currentProject) {
      return (
        <div className="grid grid-cols-2 gap-3 max-w-[500px]">
          {currentProject.images!.map((image) => (
            <img
              key={image}
              src={image}
              alt={selectedProject}
              className="
                w-full
                h-auto
                object-cover
                border
                border-white/15
              "
            />
          ))}
        </div>
      );
    }

    if ("gif" in currentProject) {
      return (
        <img
          src={currentProject.gif}
          alt={selectedProject}
          className="
            w-full
            max-w-[500px]
            h-auto
            border
            border-white/15
          "
        />
      );
    }

    if (currentProject.video) {
      return (
        <video
          src={currentProject.video}
          autoPlay={autoPlay}
          loop={loop}
          muted
          playsInline
          controls={controls}
          className="
            w-full
            max-w-[500px]
            h-auto
            border
            border-white/15
          "
        />
      );
    }

    return null;
  };

  const ProjectLinks = () => {
    if (!currentProject?.github) return null;

    return (
      <div className="mt-5 flex flex-wrap gap-6">

        {selectedProject === "Open Spot" && (
          <a
            href="https://www.canva.com/design/DAHIKmuaeOE/3MMok8gMN3CDcSp_-C_I-w/edit"
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-xs
              opacity-60
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
            text-xs
            opacity-60
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

  const ProjectInfo = () => {
    if (!currentProject) return null;

    return (
      <div
        className="
          grid
          grid-cols-2
          gap-x-8
          gap-y-7
          mt-8
        "
      >

        <div>
          <p className="text-[9px] uppercase tracking-[0.3em] opacity-40 mb-2">
            Overview
          </p>

          <p className="text-xs leading-6 opacity-70">
            {currentProject.overview}
          </p>
        </div>

        <div>
          <p className="text-[9px] uppercase tracking-[0.3em] opacity-40 mb-2">
            Tools
          </p>

          <p className="text-xs leading-6 opacity-70">
            {currentProject.tools}
          </p>
        </div>

        <div>
          <p className="text-[9px] uppercase tracking-[0.3em] opacity-40 mb-2">
            Process
          </p>

          <p className="text-xs leading-6 opacity-70">
            {currentProject.process}
          </p>
        </div>

        <div>
          <p className="text-[9px] uppercase tracking-[0.3em] opacity-40 mb-2">
            Outcome
          </p>

          <p className="text-xs leading-6 opacity-70">
            {currentProject.outcome}
          </p>
        </div>

      </div>
    );
  };

  return (
    <section
      id="work"
      className="w-full"
    >
      <div className="w-full">

        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}

        <div className="mb-10">

          <p
            className="
              mb-6
              text-[10px]
              uppercase
              tracking-[0.4em]
              opacity-40
            "
          >
            02 / Work
          </p>

          <h2
            className="
              text-4xl
              sm:text-5xl
              tracking-tight
              mb-4
            "
          >
            Selected Work
          </h2>

          <p className="text-sm opacity-50">
            Designed. Developed. Deployed.
          </p>

        </div>


        {/* ================================================= */}
        {/* PROJECT LIST */}
        {/* ================================================= */}

        <div className="space-y-1">

          {(
            Object.keys(projects) as
              (keyof typeof projects)[]
          ).map((category) => (

            <div
              key={category}
              className="
                border-t
                border-white/15
                py-5
              "
            >

              <p
                className="
                  mb-4
                  text-[9px]
                  uppercase
                  tracking-[0.3em]
                  opacity-40
                "
              >
                {category}
              </p>

              <div className="space-y-2">

                {projects[category].map(
                  (project) => (

                    <div
                      key={project}
                    >

                      <motion.button
                        onClick={() =>
                          setSelectedProject(
                            selectedProject === project
                              ? ""
                              : project
                          )
                        }
                        whileHover={{
                          x: 8,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 25,
                        }}
                        className={`
                          flex
                          w-full
                          items-center
                          justify-between
                          text-left
                          py-1
                          ${
                            selectedProject === project
                              ? "opacity-100"
                              : "opacity-50 hover:opacity-100"
                          }
                        `}
                      >

                        <span
                          className="
                            text-sm
                            sm:text-base
                          "
                        >
                          {project}
                        </span>

                        <span
                          className={`
                            text-xs
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

                    </div>

                  )
                )}

              </div>

            </div>

          ))}

        </div>


        {/* ================================================= */}
        {/* SELECTED PROJECT */}
        {/* ================================================= */}

        {selectedProject && currentProject && (

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.4,
            }}
            className="
              mt-10
              pt-8
              border-t
              border-white/20
            "
          >

            <h3
              className="
                text-2xl
                tracking-wide
              "
            >
              {selectedProject}
            </h3>

            <p
              className="
                mt-2
                text-[9px]
                uppercase
                tracking-[0.35em]
                opacity-40
              "
            >
              {currentProject.type}
            </p>


            {/* MEDIA */}

            <div className="mt-8">
              <ProjectMedia />
            </div>


            {/* LINKS */}

            <ProjectLinks />


            {/* INFO */}

            <ProjectInfo />

          </motion.div>

        )}

      </div>
    </section>
  );
}