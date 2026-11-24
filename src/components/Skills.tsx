
export default function Skills() {
  const sections = [
    {
      title: "Programming & Development",
      skills: [
        "HTML5 / CSS3",
        "JavaScript",
        "TypeScript",
        "Python",
        "Java",
        "React",
        "Next.js",
        "Tailwind CSS",
        "Framer Motion",
        "Git / GitHub",
        "Jira",
        "Adobe Experience Manager (AEM)",
        "Salesforce Experience Cloud",
        "Website Maintenance",
        "Content Management",
        "Cross-Browser Testing",
        "Quality Assurance (QA)",
      ],
    },
    {
      title: "Design",
      skills: [
        "UI/UX Design",
        "Responsive Web Design",
        "Web Accessibility",
        "Figma",
        "Canva",
        "Wireframing",
        "Prototyping",
        "User Research",
        "UI Design & Analysis",
      ],
    },
    {
      title: "Creative Technology & Digital Content",
      skills: [
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Adobe InDesign",
        "Adobe Premiere Pro",
        "Adobe Lightroom",
        "3D Modeling",
        "2D Animation",
        "Interactive Media",
        "Motion Design",
        "Creative Coding",
        "Digital Asset Creation",
        "Social Media Management",
        "Brand Consistency",
        "Microsoft Excel",
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
    <section id="skills" className="w-full">
      <div className="max-w-xl">
        <div className="space-y-10">
          {sections.map((section) => (
            <div key={section.title}>
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs uppercase tracking-[0.3em] text-yellow-400">
                  {section.title}
                </p>

                <div className="h-px flex-1 bg-white/15 ml-5" />
              </div>

              <div
                className="
                  grid
                  grid-cols-1
                  sm:grid-cols-2
                  gap-x-5
                  gap-y-3
                  text-sm
                  opacity-75
                "
              >
                {section.skills.map((skill) => (
                  <p key={skill}>{skill}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
