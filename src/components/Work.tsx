"use client";

import { useEffect, useRef, useState } from "react";
import { projectDetails } from "../data/projectDetails";

type Project = {
  type: string;
  overview: string;
  tools: string;
  process: string;
  outcome: string;
  images?: string[];
  video?: string;
  gif?: string;
  github?: string;
  links?: {
    title: string;
    url: string;
  }[];
};

type GalleryProject = {
  title: string;
  image?: string;
  gif?: string;
  video?: string;
};

const projectGroups: {
  title: string;
  projects: GalleryProject[];
}[] = [
  {
    title: "Adobe Creative Suite",
    projects: [
      {
        title: "Self Portrait",
        image: "/images/SelfPortrait1.jpg",
      },
      {
        title: "Heart",
        gif: "/videos/GIFHeart.gif",
      },
      {
        title: "Stranger Things",
        image: "/images/StrangerThings1.jpg",
      },
      {
        title: "The Wave",
        video: "/videos/Thewave.mp4",
      },
      {
        title: "SHE",
        video: "/videos/TheFeelingOfBeingShe.mp4",
      },
    ],
  },

  {
    title: "HTML5",
    projects: [
      {
        title: "Northern Lights",
        video: "/videos/NorthernLights.mov",
      },
      {
        title: "Vector Mandala",
        video: "/videos/VectorMandala.mov",
      },
      {
        title: "Sanskrit",
        video: "/videos/Sanskrit.mov",
      },
      {
        title: "Brain vs Heart",
        video: "/videos/BrainHeart.mov",
      },
      {
        title: "Catch some Butterflies",
        video: "/videos/ButterflyGame.mov",
      },
      {
        title: "Typography",
        video: "/videos/Typography.mov",
      },
    ],
  },

  {
    title: "Research / Development",
    projects: [
      {
        title: "When Fans Get Too Attached",
        video: "/videos/Research.mov",
      },
      {
        title: "Tampa City Ballet",
      },
      {
        title: "Open Spot",
        video: "/videos/Parking.mp4",
      },
    ],
  },
];

/* =====================================================
   PROJECT ROW
===================================================== */

function ProjectRow({
  group,
  onSelect,
}: {
  group: {
    title: string;
    projects: GalleryProject[];
  };
  onSelect: (title: string) => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = () => {
    const element = scrollRef.current;

    if (!element) return;

    setCanScrollLeft(element.scrollLeft > 5);

    setCanScrollRight(
      element.scrollLeft + element.clientWidth <
        element.scrollWidth - 5
    );
  };

  useEffect(() => {
    updateScrollState();

    const element = scrollRef.current;

    if (!element) return;

    element.addEventListener("scroll", updateScrollState);
    window.addEventListener("resize", updateScrollState);

    return () => {
      element.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    const element = scrollRef.current;

    if (!element) return;

    element.scrollBy({
      left: direction === "left" ? -220 : 220,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {/* CATEGORY HEADING */}

      <div className="flex items-center justify-between mb-4">
        <p
          className="
            text-[9px]
            uppercase
            tracking-[0.35em]
            font-bold
            text-yellow-400
          "
        >
          {group.title}
        </p>

        <p
          className="
            text-[8px]
            font-mono
            text-white/25
          "
        >
          {String(group.projects.length).padStart(2, "0")}
        </p>
      </div>

      {/* PROJECT SCROLL AREA */}

      <div className="relative">
        {/* LEFT ARROW */}

        <button
          type="button"
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          aria-label="Scroll projects left"
          className={`
            absolute
            left-[-14px]
            top-[43%]
            z-20
            -translate-y-1/2
            flex
            h-7
            w-7
            items-center
            justify-center
            border
            border-white/15
            bg-black/70
            backdrop-blur-sm
            text-sm
            transition-all
            duration-300
            ${
              canScrollLeft
                ? "text-white/60 hover:border-yellow-400 hover:text-yellow-400"
                : "pointer-events-none opacity-0"
            }
          `}
        >
          ←
        </button>

        {/* PROJECTS */}

        <div
          ref={scrollRef}
          className="
            flex
            gap-3
            overflow-x-auto
            pb-3
            snap-x
            scroll-smooth
            [scrollbar-width:thin]
          "
        >
          {group.projects.map((project) => (
            <button
              key={project.title}
              type="button"
              onClick={() => onSelect(project.title)}
              className="
                group
                shrink-0
                w-[105px]
                sm:w-[115px]
                text-left
                snap-start
              "
            >
              {/* THUMBNAIL */}

              <div
                className="
                  relative
                  aspect-square
                  w-full
                  overflow-hidden
                  border
                  border-white/10
                  bg-black/50
                  cursor-pointer
                  transition-all
                  duration-300
                  group-hover:border-yellow-400
                "
              >
                {/* IMAGE */}

                {project.image && (
                  <img
                    src={project.image}
                    alt=""
                    className="
                      h-full
                      w-full
                      object-cover
                      grayscale
                      opacity-65
                      transition-all
                      duration-500
                      group-hover:grayscale-0
                      group-hover:opacity-80
                      group-hover:scale-[1.02]
                      group-hover:blur-[2px]
                    "
                  />
                )}

                {/* GIF */}

                {project.gif && (
                  <img
                    src={project.gif}
                    alt=""
                    className="
                      h-full
                      w-full
                      object-cover
                      grayscale
                      opacity-65
                      transition-all
                      duration-500
                      group-hover:grayscale-0
                      group-hover:opacity-80
                      group-hover:scale-[1.02]
                      group-hover:blur-[2px]
                    "
                  />
                )}

                {/* VIDEO */}

                {project.video && (
                  <video
                    src={project.video}
                    muted
                    autoPlay
                    loop
                    playsInline
                    className="
                      h-full
                      w-full
                      object-cover
                      grayscale
                      opacity-65
                      transition-all
                      duration-500
                      group-hover:grayscale-0
                      group-hover:opacity-80
                      group-hover:scale-[1.02]
                      group-hover:blur-[2px]
                    "
                  />
                )}

                {/* DARK HOVER */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-black/20
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  "
                />

                {/* VIEW PROJECT */}

                <div
                  className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  "
                >
                  <span
                    className="
                      font-mono
                      text-[8px]
                      uppercase
                      tracking-[0.25em]
                      text-yellow-400
                    "
                  >
                    View Project ↗
                  </span>
                </div>
              </div>

              {/* PROJECT NAME */}

              <p
                className="
                  mt-2
                  text-[9px]
                  uppercase
                  tracking-[0.08em]
                  leading-4
                  font-semibold
                  text-white/70
                  transition-opacity
                  duration-300
                  group-hover:text-white
                "
              >
                {project.title}
              </p>
            </button>
          ))}
        </div>

        {/* RIGHT ARROW */}

        <button
          type="button"
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          aria-label="Scroll projects right"
          className={`
            absolute
            right-[-14px]
            top-[43%]
            z-20
            -translate-y-1/2
            flex
            h-7
            w-7
            items-center
            justify-center
            border
            border-white/15
            bg-black/70
            backdrop-blur-sm
            text-sm
            transition-all
            duration-300
            ${
              canScrollRight
                ? "text-white/60 hover:border-yellow-400 hover:text-yellow-400"
                : "pointer-events-none opacity-0"
            }
          `}
        >
          →
        </button>
      </div>
    </div>
  );
}

/* =====================================================
   PROJECT DETAIL MEDIA
===================================================== */

function ProjectMedia({
  project,
}: {
  project: Project;
}) {
  const media: {
    type: "image" | "gif" | "video";
    src: string;
  }[] = [];

  /* IMAGES */

  if (project.images) {
    project.images.forEach((image) => {
      media.push({
        type: "image",
        src: image,
      });
    });
  }

  /* GIF */

  if (project.gif) {
    media.push({
      type: "gif",
      src: project.gif,
    });
  }

  /* VIDEO */

  if (project.video) {
    media.push({
      type: "video",
      src: project.video,
    });
  }

  if (media.length === 0) {
    return null;
  }

  return (
    <div
      className="
        mt-6
        flex
        flex-wrap
        items-start
        gap-4
      "
    >
      {media.map((item, index) => {
        /* VIDEO */

        if (item.type === "video") {
          return (
            <div
              key={`${item.src}-${index}`}
              className="
                w-full
                sm:w-[calc(50%-8px)]
                border
                border-white/10
                bg-black/20
                overflow-hidden
              "
            >
              <video
                src={item.src}
                controls
                playsInline
                className="
                  block
                  w-full
                  h-auto
                  object-contain
                "
              />
            </div>
          );
        }

        /* IMAGE / GIF */

        return (
          <div
            key={`${item.src}-${index}`}
            className="
              w-full
              sm:w-[calc(50%-8px)]
              border
              border-white/10
              bg-black/20
              overflow-hidden
            "
          >
            <img
              src={item.src}
              alt=""
              className="
                block
                w-full
                h-auto
                object-contain
              "
            />
          </div>
        );
      })}
    </div>
  );
}

/* =====================================================
   WORK
===================================================== */

export default function Work() {
  const [selectedProject, setSelectedProject] =
    useState<string | null>(null);

  const selectedData = selectedProject
    ? (projectDetails[selectedProject] as Project)
    : null;

  /* ===================================================
     PROJECT DETAIL
  =================================================== */

  if (selectedProject && selectedData) {
    return (
      <section
        id="work"
        className="w-full"
      >
        <div className="max-w-3xl">
          {/* BACK */}

          <button
            type="button"
            onClick={() => setSelectedProject(null)}
            className="
              group
              mb-6
              flex
              items-center
              gap-2
              text-[9px]
              uppercase
              tracking-[0.25em]
              text-white/45
              transition-colors
              duration-300
              hover:text-white
            "
          >
            <span
              className="
                transition-transform
                duration-300
                group-hover:-translate-x-1
              "
            >
              ←
            </span>

            Back to Work
          </button>

          {/* TYPE — YELLOW */}

          <p
            className="
              mb-3
              text-[9px]
              uppercase
              tracking-[0.3em]
              font-bold
              text-yellow-400
            "
          >
            {selectedData.type}
          </p>

          {/* MAIN PROJECT HEADING */}

          <h1
            className="
              text-2xl
              sm:text-3xl
              lg:text-[2.5rem]
              leading-none
              tracking-[-0.035em]
              font-medium
              text-white
            "
          >
            {selectedProject}
          </h1>

          {/* MEDIA */}

          <ProjectMedia
            project={selectedData}
          />

          {/* PROJECT INFORMATION */}

          <div
            className="
              mt-7
              grid
              grid-cols-1
              sm:grid-cols-2
              gap-x-10
              gap-y-6
            "
          >
            {/* OVERVIEW */}

            <div className="sm:col-span-2">
              <p
                className="
                  mb-2
                  text-[9px]
                  uppercase
                  tracking-[0.3em]
                  font-bold
                  text-yellow-400
                "
              >
                Overview
              </p>

              <p
                className="
                  max-w-3xl
                  text-xs
                  sm:text-[13px]
                  leading-6
                  text-white/65
                "
              >
                {selectedData.overview}
              </p>
            </div>

            {/* TOOLS */}

            <div>
              <p
                className="
                  mb-2
                  text-[9px]
                  uppercase
                  tracking-[0.3em]
                  font-bold
                  text-yellow-400
                "
              >
                Tools
              </p>

              <p
                className="
                  text-xs
                  sm:text-[13px]
                  leading-6
                  text-white/65
                "
              >
                {selectedData.tools}
              </p>
            </div>

            {/* PROCESS */}

            <div>
              <p
                className="
                  mb-2
                  text-[9px]
                  uppercase
                  tracking-[0.3em]
                  font-bold
                  text-yellow-400
                "
              >
                Process
              </p>

              <p
                className="
                  text-xs
                  sm:text-[13px]
                  leading-6
                  text-white/65
                "
              >
                {selectedData.process}
              </p>
            </div>

            {/* OUTCOME */}

            <div className="sm:col-span-2">
              <p
                className="
                  mb-2
                  text-[9px]
                  uppercase
                  tracking-[0.3em]
                  font-bold
                  text-yellow-400
                "
              >
                Outcome
              </p>

              <p
                className="
                  max-w-3xl
                  text-xs
                  sm:text-[13px]
                  leading-6
                  text-white/65
                "
              >
                {selectedData.outcome}
              </p>
            </div>
          </div>

          {/* LINKS */}

          {(selectedData.github ||
            selectedData.links) && (
            <div
              className="
                mt-7
                border-t
                border-white/10
                pt-5
              "
            >
              <p
                className="
                  mb-4
                  text-[9px]
                  uppercase
                  tracking-[0.3em]
                  font-bold
                  text-yellow-400
                "
              >
                Links
              </p>

              <div
                className="
                  grid
                  grid-cols-1
                  sm:grid-cols-2
                  gap-x-10
                  gap-y-2
                "
              >
                {/* GITHUB */}

                {selectedData.github && (
                  <a
                    href={selectedData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group
                      flex
                      items-center
                      justify-between
                      border-b
                      border-white/10
                      pb-2
                      text-xs
                      text-white/55
                      transition-colors
                      hover:text-white
                    "
                  >
                    <span>
                      GitHub
                    </span>

                    <span
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    >
                      ↗
                    </span>
                  </a>
                )}

                {/* OTHER LINKS */}

                {selectedData.links?.map(
                  (link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        group
                        flex
                        items-center
                        justify-between
                        border-b
                        border-white/10
                        pb-2
                        text-xs
                        text-white/55
                        transition-colors
                        hover:text-white
                      "
                    >
                      <span>
                        {link.title}
                      </span>

                      <span
                        className="
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                        "
                      >
                        ↗
                      </span>
                    </a>
                  )
                )}
              </div>
            </div>
          )}

          {/* BACK */}

          <button
            type="button"
            onClick={() => setSelectedProject(null)}
            className="
              group
              mt-8
              mb-6
              flex
              items-center
              gap-2
              text-[9px]
              uppercase
              tracking-[0.25em]
              text-white/35
              transition-colors
              hover:text-white
            "
          >
            <span
              className="
                transition-transform
                duration-300
                group-hover:-translate-x-1
              "
            >
              ←
            </span>

            Back to Work
          </button>
        </div>
      </section>
    );
  }

  /* ===================================================
     PROJECT GALLERY
  =================================================== */

  return (
    <section
      id="work"
      className="w-full"
    >
      <div className="max-w-3xl">
        {/* PROJECTS HEADING */}

        <h1
          className="
            text-4xl
            sm:text-5xl
            lg:text-[4rem]
            leading-none
            tracking-[-0.04em]
            font-medium
            text-white
          "
        >
          Projects
        </h1>

        {/* SUBTITLE */}

        <p
          className="
            mt-3
            text-xs
            sm:text-sm
            font-mono
            text-white/45
          "
        >
          Designed. Developed. Deployed.
        </p>

        {/* PROJECT GROUPS */}

        <div
          className="
            mt-8
            space-y-8
          "
        >
          {projectGroups.map(
            (group, index) => (
              <div
                key={group.title}
                className={
                  index !== 0
                    ? "border-t border-white/15 pt-7"
                    : ""
                }
              >
                <ProjectRow
                  group={group}
                  onSelect={(title) =>
                    setSelectedProject(title)
                  }
                />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}