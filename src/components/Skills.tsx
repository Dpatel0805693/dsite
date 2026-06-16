export default function Skills() {
  return (
    <section
      id="skills"
      className="ml-[500px] py-10 scroll-mt-32"
    >
      <div className="w-full max-w-2xl px-20 font-mono">

        {/* DESIGN */}
        <div className="mb-6">
          <p className="mb-3 text-xs uppercase tracking-[0.4em] opacity-50">
            Design
          </p>

          <div className="h-px bg-white/20 mb-4" />

          <div className="grid grid-cols-2 gap-y-2 text-sm">
            <p>Adobe Creative Suite</p>
            <p>Figma</p>
            <p>Canva</p>
            <p>UI Design & Analysis</p>
            <p>Wireframing</p>
            <p>Prototyping</p>
          </div>
        </div>

        {/* DEVELOPMENT */}
        <div className="mb-6">
          <p className="mb-3 text-xs uppercase tracking-[0.4em] opacity-50">
            Development
          </p>

          <div className="h-px bg-white/20 mb-4" />

          <div className="grid grid-cols-3 gap-y-2 text-sm">
            <p>HTML5 / CSS3</p>
            <p>JavaScript</p>
            <p>Python</p>
            <p>Java</p>
            <p>React</p>
            <p>Next.js</p>
            <p>GitHub</p>
          </div>
        </div>

        {/* CREATIVE TECHNOLOGY */}
        <div className="mb-6">
          <p className="mb-3 text-xs uppercase tracking-[0.4em] opacity-50">
            Creative Technology
          </p>

          <div className="h-px bg-white/20 mb-4" />

          <div className="grid grid-cols-2 gap-y-2 text-sm">
            <p>User Research</p>
            <p>3D Modeling</p>
            <p>2D Animation</p>
            <p>Interactive Media</p>
            <p>Motion Design</p>
            <p>Creative Coding</p>
          </div>
        </div>

        {/* LANGUAGES */}
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.4em] opacity-50">
            Languages
          </p>

          <div className="h-px bg-white/20 mb-4" />

          <div className="space-y-2 text-sm">
            <p>English</p>
            <p>Hindi</p>
            <p>Gujarati</p>
            <p>Spanish(Learning)</p>
          </div>
        </div>

      </div>
    </section>
  );
}