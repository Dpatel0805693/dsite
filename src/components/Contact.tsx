export default function Contact() {
  return (
    <section
      id="contact"
      className="
        min-h-screen
        ml-0
        md:ml-[380px]
        relative
        scroll-mt-32
        w-full
      "
    >

      <div className="min-h-screen flex items-center">

        <div
          className="
            w-full
            max-w-5xl
            px-6
            sm:px-10
            md:px-10
            font-mono
          "
        >

          {/* MAIN CONTENT */}
          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-[320px_320px]
              gap-10
              md:gap-12
              items-center
              justify-center
            "
          >

            {/* TEXT */}
            <div>

              <h2 className="text-xl sm:text-2xl mb-2 tracking-wide">
                Dhwani Patel
              </h2>

              <div className="text-sm opacity-70 leading-relaxed space-y-1">

                <p>B.S. Computer Science & New Media</p>
                <p>University of Tampa</p>

              </div>

            </div>


            {/* IMAGE */}
            <div className="flex justify-start md:justify-center">

              <img
                src="/contact.jpg"
                alt="Dhwani Patel"
                className="
                  w-full
                  max-w-[280px]
                  sm:max-w-[320px]
                  h-auto
                  aspect-[320/420]
                  object-cover
                "
              />

            </div>

          </div>

        </div>

      </div>


      {/* FOOTER / LINKS */}
      <div
        className="
          absolute
          bottom-10
          md:bottom-40
          left-6
          sm:left-10
          md:left-32
          right-6
          sm:right-10
          font-mono
          text-sm
        "
      >

        <div
          className="
            flex
            flex-wrap
            items-center
            gap-x-6
            gap-y-3
            opacity-70
          "
        >

          <a
            href="mailto:dhwanipatel7788@gmail.com"
            className="
              transition-all
              duration-300
              hover:opacity-100
              hover:text-white
              hover:-translate-y-0.5
              hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.5)]
            "
          >
            dhwanipatel7788@gmail.com
          </a>


          <a
            href="https://www.linkedin.com/in/dhwanipatel08"
            target="_blank"
            rel="noopener noreferrer"
            className="
              transition-all
              duration-300
              hover:opacity-100
              hover:text-white
              hover:-translate-y-0.5
              hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.5)]
            "
          >
            LinkedIn
          </a>


          <a
            href="https://www.instagram.com/patel.dhwanii"
            target="_blank"
            rel="noopener noreferrer"
            className="
              transition-all
              duration-300
              hover:opacity-100
              hover:text-white
              hover:-translate-y-0.5
              hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.5)]
            "
          >
            Instagram
          </a>

        </div>

      </div>

    </section>
  );
}