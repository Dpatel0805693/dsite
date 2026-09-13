export default function Skills() {
  const sections = [
    {
      title: "Design",
      skills: [
        "Adobe Creative Suite",
        "Figma",
        "Canva",
        "UI Design & Analysis",
        "Wireframing",
        "Prototyping",
      ],
    },
    {
      title: "Development",
      skills: [
        "HTML5 / CSS3",
        "JavaScript",
        "Python",
        "Java",
        "React",
        "Next.js",
        "GitHub",
      ],
    },
    {
      title: "Creative Technology",
      skills: [
        "User Research",
        "3D Modeling",
        "2D Animation",
        "Interactive Media",
        "Motion Design",
        "Creative Coding",
      ],
    },
    {
      title: "Languages",
      skills: [
        "English",
        "Hindi",
        "Gujarati",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="w-full"
    >
      <div className="max-w-xl">

        <p
          className="
            mb-8
            text-[10px]
            uppercase
            tracking-[0.4em]
            opacity-40
          "
        >
        </p>

        <div className="space-y-10">

          {sections.map((section) => (
            <div key={section.title}>

              <div
                className="
                  flex
                  items-center
                  justify-between
                  mb-4
                "
              >
                <p
                  className="
                    text-xs
                    uppercase
                    tracking-[0.3em]
                    text-yellow-400
                  "
                >
                  {section.title}
                </p>

                <div
                  className="
                    h-px
                    flex-1
                    bg-white/15
                    ml-5
                  "
                />
              </div>

              <div
                className="
                  grid
                  grid-cols-2
                  gap-y-3
                  text-sm
                  opacity-75
                "
              >
                {section.skills.map((skill) => (
                  <p key={skill}>
                    {skill}
                  </p>
                ))}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}