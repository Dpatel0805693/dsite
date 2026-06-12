export default function Contact() {
    return (
      <section
        id="contact"
        className="min-h-screen ml-[380px] relative scroll-mt-32"
      >
        <div className="h-screen flex items-center">
  
          <div className="w-full max-w-5xl px-10 font-mono">
  
            <div className="grid grid-cols-[320px_320px] gap-12 items-center justify-center">
  
              {/* TEXT */}
              <div>
  
                <h2 className="text-4xl mb-4 tracking-wide">
                  Let's Connect
                </h2>
  
                <p className="max-w-xs text-sm leading-8 opacity-70">
                  Creating thoughtful digital
                  experiences through design,
                  development, and storytelling.
                </p>
  
              </div>
  
              {/* IMAGE */}
              <div>
  
                <img
                  src="/contact.jpg"
                  alt="Dhwani Patel"
                  className="w-[320px] h-[420px] object-cover"
                />
  
              </div>
  
            </div>
  
          </div>
  
        </div>
  
        {/* FOOTER */}
        <div className="absolute bottom-20 left-32 right-10 font-mono text-sm">
  
          <div className="flex items-center gap-6 opacity-70">
  
            <a
              href="mailto:dhwanipatel7788@gmail.com"
              className="transition-all duration-300 hover:opacity-100 hover:text-white hover:-translate-y-0.5 hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.5)]"
            >
              dhwanipatel7788@gmail.com
            </a>
  
            <a
              href="https://www.linkedin.com/in/dhwanipatel08"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:opacity-100 hover:text-white hover:-translate-y-0.5 hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.5)]"
            >
              LinkedIn
            </a>
  
  
            <a
              href="https://www.instagram.com/patel.dhwanii"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:opacity-100 hover:text-white hover:-translate-y-0.5 hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.5)]"
            >
              Instagram
            </a>
  
          </div>
  
        </div>
  
      </section>
    );
  }