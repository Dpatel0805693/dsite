export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full"
    >
      <div className="max-w-xl">

        {/* ================================= */}
        {/* TOP LABEL */}
        {/* ================================= */}

        <p
          className="
            mb-8
            text-[10px]
            uppercase
            tracking-[0.4em]
            text-[#D4A900]
          "
        >
          
        </p>


        {/* ================================= */}
        {/* DIVIDER */}
        {/* ================================= */}

        <div
          className="
            h-px
            w-full
            bg-white/20
            mb-9
          "
        />


        {/* ================================= */}
        {/* IDENTITY */}
        {/* ================================= */}

        <div className="space-y-3">

          {/* NAME */}

          <p
            className="
              font-mono
              text-[30px]
              sm:text-[34px]
              font-medium
              tracking-[0.02em]
              text-white
            "
          >
            DHWANI PATEL
          </p>


          {/* DEGREE */}

          <p
            className="
              font-mono
              text-[14px]
              sm:text-[15px]
              tracking-[0.08em]
              text-[#D4A900]
            "
          >
            B.S. COMPUTER SCIENCE × NEW MEDIA
          </p>


          {/* UNIVERSITY */}

          <p
            className="
              font-mono
              text-[12px]
              sm:text-[13px]
              tracking-[0.16em]
              text-white/50
            "
          >
            UNIVERSITY OF TAMPA
          </p>

        </div>


        {/* ================================= */}
        {/* CONTACT */}
        {/* ================================= */}

        <div
          className="
            mt-14
          "
        >

          {/* SECTION LABEL */}

          <p
            className="
              mb-6
              font-mono
              text-[10px]
              uppercase
              tracking-[0.4em]
              text-[#D4A900]
            "
          >
            Contact
          </p>


          {/* LINKS */}

          <div
            className="
              flex
              flex-col
              gap-5
              font-mono
              text-[15px]
              sm:text-[16px]
            "
          >

            {/* EMAIL */}

            <a
              href="mailto:dhwanipatel7788@gmail.com"
              className="
                group
                flex
                w-fit
                items-center
                gap-3
                text-white/70
                transition-all
                duration-300
                hover:text-white
              "
            >
              <span>
                dhwanipatel7788@gmail.com
              </span>

              <span
                className="
                  text-[#D4A900]
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              >
                ↗
              </span>
            </a>


            {/* LINKEDIN */}

            <a
              href="https://www.linkedin.com/in/dhwanipatel08"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                flex
                w-fit
                items-center
                gap-3
                text-white/70
                transition-all
                duration-300
                hover:text-white
              "
            >
              <span>
                LinkedIn
              </span>

              <span
                className="
                  text-[#D4A900]
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              >
                ↗
              </span>
            </a>


            {/* INSTAGRAM */}

            <a
              href="https://www.instagram.com/patel.dhwanii"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                flex
                w-fit
                items-center
                gap-3
                text-white/70
                transition-all
                duration-300
                hover:text-white
              "
            >
              <span>
                Instagram
              </span>

              <span
                className="
                  text-[#D4A900]
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              >
                ↗
              </span>
            </a>

          </div>

        </div>


        {/* ================================= */}
        {/* SMALL METADATA */}
        {/* ================================= */}

        <div
          className="
            mt-16
            flex
            flex-col
            gap-1
            font-mono
            text-[9px]
            uppercase
            tracking-[0.3em]
            text-white/30
          "
        >
        

         
        </div>

      </div>
    </section>
  );
}