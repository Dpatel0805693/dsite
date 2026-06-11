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
  
            <div className="grid grid-cols-2 gap-y-2 text-base">
              <p>Figma</p>
              <p>Photoshop</p>
              <p>InDesign</p>
              <p>Lightroom</p>
              <p>Premiere Pro</p>
              <p>Canva</p>
            </div>
          </div>
  
          {/* CREATIVE CORE */}
          <div className="mb-6">
            <p className="mb-3 text-xs uppercase tracking-[0.4em] opacity-50">
              Creative Core
            </p>
  
            <div className="h-px bg-white/20 mb-4" />
  
            <div className="grid grid-cols-2 gap-y-2 text-base">
              <p>HTML</p>
              <p>CSS</p>
              <p>JavaScript</p>
              <p>Python</p>
              <p>Java</p>
              <p>Git</p>
            </div>
          </div>
  
          {/* CREATIVE TECHNOLOGY */}
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.4em] opacity-50">
              Creative Technology
            </p>
  
            <div className="h-px bg-white/20 mb-4" />
  
            <div className="grid grid-cols-2 gap-y-2 text-base">
              <p>Blender</p>
              <p>Maya</p>
              <p>Fusion 360</p>
              <p>3D Modeling</p>
              <p>2D Animation</p>
              <p>Motion Design</p>
            </div>
          </div>
  
        </div>
      </section>
    );
  }