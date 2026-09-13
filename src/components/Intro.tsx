export default function Intro() {
  return (
    <section
      id="intro"
      className="w-full"
    >
      <div className="max-w-xl">

        {/* MAIN STATEMENT */}

        <h1
          className="
            text-1xl
            sm:text-2xl
            lg:text-[3.2rem]
            leading-[1.08]
            tracking-[-0.02em]
            font-medium
            text-white
            mb-12
          "
        >
          Creating has always been
          my favorite way of learning,
          exploring, and expressing
          ideas.
        </h1>


        {/* DIVIDER */}

        <div
          className="
            h-px
            w-full
            bg-white/20
            mb-10
          "
        />


        {/* DESCRIPTION */}

        <div
          className="
            max-w-lg
            space-y-9
          "
        >

          <p
            className="
              text-sm
              sm:text-base
              leading-[2]
              font-normal
              text-white/70
            "
          >
            Somewhere between creativity
            and technology is where I do
            my best work—turning ideas
            into things I can design,
            build, and bring to life.
          </p>


          <p
            className="
              text-sm
              sm:text-base
              leading-[2]
              font-normal
              text-white/70
            "
          >
            This portfolio, from design
            to development and everything
            within it, was built by me
            from scratch.
          </p>

        </div>


        {/* BOTTOM INFORMATION */}

        <div
          className="
            mt-16
            text-[10px]
            uppercase
            tracking-[0.3em]
            font-normal
            text-white/35
            space-y-3
          "
        >
          
        </div>

      </div>
    </section>
  );
}