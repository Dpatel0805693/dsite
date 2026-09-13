"use client";

import { useState } from "react";

export default function Experience() {
  const [openExperience, setOpenExperience] = useState<string | null>(null);

  const experiences = [
    {
      number: "01",
      title: "Junior Web Developer & Designer",
      company: "University of Tampa · Dec 2024 — Present",
      description: [
        "Updated and maintained university website content to improve clarity, accessibility, and user experience.",
        "Collaborated with cross-functional teams to deliver digital content that enhances student engagement and communication.",
      ],
      skills:
        "AEM • Quality Assurance • Web Accessibility • UX",
    },
    {
      number: "02",
      title: "Math & Computer Science Peer Tutor",
      company:
        "UTampa Center for Mathematics · University of Tampa · Jan 2024 — Present",
      description: [
        "Provided individual and group tutoring in mathematics and computer science courses.",
        "Simplified complex concepts and supported students in developing confidence, problem-solving abilities, and academic success.",
      ],
      skills:
        "Problem Solving • Debugging • Technical Communication • Analytical Thinking",
    },
    {
      number: "03",
      title: "Social Media Manager",
      company: "Girls Who Code · Aug 2024 — Present",
      description: [
        "Created and managed social media content and marketing campaigns to promote events and increase student engagement.",
        "Collaborated on outreach initiatives and analyzed engagement metrics to strengthen content strategy and community growth.",
      ],
      skills:
        "Content Strategy • Graphic Design • Digital Marketing • Community Engagement",
    },
    {
      number: "04",
      title: "Supplemental Instructor",
      company:
        "UTampa College of Social Sciences, Mathematics & Education · Jan 2024 — May 2024",
      description: [
        "Assisted the professor during College Algebra classes and supported students through personalized guidance and test corrections.",
        "Reinforced key mathematical concepts to help students strengthen their understanding and academic performance.",
      ],
      skills:
        "Mathematics • Instruction • Problem Solving • Mentorship • Communication",
    },
  ];

  return (
    <section id="experience" className="w-full">
      <div className="max-w-2xl">

        {/* EXPERIENCE LIST */}

        <div className="border-t border-white/15">

          {experiences.map((experience) => {
            const isOpen = openExperience === experience.number;

            return (
              <div
                key={experience.number}
                className="border-b border-white/15"
                onMouseEnter={() =>
                  setOpenExperience(experience.number)
                }
                onMouseLeave={() =>
                  setOpenExperience(null)
                }
              >

                {/* EXPERIENCE HEADER */}

                <div
                  className="
                    group
                    w-full
                    py-6
                    flex
                    items-start
                    gap-5
                    cursor-default
                  "
                >

                  {/* NUMBER */}

                  <span
                    className="
                      text-[10px]
                      opacity-40
                      pt-1
                      shrink-0
                    "
                  >
                    {experience.number}
                  </span>


                  {/* TITLE + COMPANY */}

                  <div className="flex-1">

                    <div
                      className="
                        flex
                        items-start
                        justify-between
                        gap-6
                      "
                    >

                      {/* JOB TITLE */}

                      <h2
                        className="
                          text-base
                          sm:text-lg
                          uppercase
                          tracking-wide
                          font-medium
                          text-yellow-400
                          transition-opacity
                          duration-300
                          group-hover:opacity-70
                        "
                      >
                        {experience.title}
                      </h2>


                      {/* PLUS / MINUS */}

                      <span
                        className="
                          text-lg
                          font-light
                          opacity-50
                          shrink-0
                          transition-all
                          duration-300
                        "
                      >
                        {isOpen ? "−" : "+"}
                      </span>

                    </div>


                    {/* COMPANY / DATE */}

                    <p
                      className="
                        mt-2
                        text-[11px]
                        uppercase
                        tracking-[0.16em]
                        text-white
                        leading-5
                        transition-opacity
                        duration-300
                      "
                    >
                      {experience.company}
                    </p>

                  </div>

                </div>


                {/* DROPDOWN */}

                <div
                  className={`
                    grid
                    transition-[grid-template-rows]
                    duration-500
                    ease-out
                    ${
                      isOpen
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                    }
                  `}
                >

                  <div className="overflow-hidden">

                    <div
                      className="
                        ml-[30px]
                        pb-7
                        pr-8
                      "
                    >

                      {/* DESCRIPTION BULLETS */}

                      <ul
                        className="
                          space-y-3
                          text-sm
                          leading-7
                          text-white/50
                          max-w-xl
                          list-disc
                          pl-5
                        "
                      >
                        {experience.description.map((item, index) => (
                          <li key={index}>
                            {item}
                          </li>
                        ))}
                      </ul>


                      {/* SKILLS / TOOLS */}

                      <p
                        className="
                          mt-5
                          text-[10px]
                          uppercase
                          tracking-[0.18em]
                          text-white
                          leading-5
                        "
                      >
                        {experience.skills}
                      </p>

                    </div>

                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}