export default function Experience() {
  const experiences = [
    {
      number: "01",
      title: "Junior Web Developer & Designer",
      company:
        "University of Tampa · Dec 2024 — Present",
      description:
        "Updated and maintained university website content to improve clarity, accessibility, and user experience. Collaborated with cross-functional teams to deliver digital content that enhances student engagement and communication.",
      skills:
        "AEM • Quality Assurance • Web Accessibility • UX",
    },
    {
      number: "02",
      title: "Math & Computer Science Peer Tutor",
      company:
        "UTampa Center for Mathematics · University of Tampa · Jan 2024 — Present",
      description:
        "Provided individual and group tutoring in mathematics and computer science courses. Simplified complex concepts and supported students in developing confidence, problem-solving abilities, and academic success.",
      skills:
        "Problem Solving • Debugging • Technical Communication • Analytical Thinking",
    },
    {
      number: "03",
      title: "Social Media Manager",
      company:
        "Girls Who Code · Aug 2024 — Present",
      description:
        "Created and managed social media content and marketing campaigns to promote events and increase student engagement. Collaborated on outreach initiatives and analyzed engagement metrics to strengthen content strategy and community growth.",
      skills:
        "Content Strategy • Graphic Design • Digital Marketing • Community Engagement",
    },
    {
      number: "04",
      title: "Supplemental Instructor",
      company:
        "UTampa College of Social Sciences, Mathematics & Education · Jan 2024 — May 2024",
      description:
        "Assisted the professor during College Algebra classes, supported students through personalized guidance and test corrections, and facilitated academic success by reinforcing key mathematical concepts.",
      skills:
        "Mathematics • Instruction • Problem Solving • Mentorship • Communication",
    },
  ];

  return (
    <section
      id="experience"
      className="w-full"
    >
      <div className="max-w-2xl">

        <p
          className="
            mb-8
            text-[10px]
            uppercase
            tracking-[0.4em]
            opacity-40
          "
        >
          03 / Experience
        </p>

        <div className="space-y-8">

          {experiences.map((experience) => (
            <div
              key={experience.number}
              className="
                border-b
                border-white/15
                pb-8
              "
            >

              <div className="flex gap-5">

                <span
                  className="
                    text-[10px]
                    opacity-40
                    pt-1
                  "
                >
                  {experience.number}
                </span>

                <div>

                  <h2
                    className="
                      text-lg
                      sm:text-xl
                      uppercase
                      tracking-wide
                    "
                  >
                    {experience.title}
                  </h2>

                  <p
                    className="
                      mt-2
                      text-[10px]
                      uppercase
                      tracking-[0.2em]
                      opacity-40
                      leading-5
                    "
                  >
                    {experience.company}
                  </p>

                  <p
                    className="
                      mt-5
                      text-sm
                      leading-7
                      opacity-70
                    "
                  >
                    {experience.description}
                  </p>

                  <p
                    className="
                      mt-4
                      text-[9px]
                      uppercase
                      tracking-[0.2em]
                      opacity-40
                      leading-5
                    "
                  >
                    {experience.skills}
                  </p>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}