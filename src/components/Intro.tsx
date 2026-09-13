export default function Intro() {
  return (
    <section
      id="intro"
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
          01 / Introduction
        </p>

        <h1
          className="
            text-2xl
            sm:text-4xl
            leading-[1.08]
            tracking-tight
            mb-10
          "
        >
          Creating has always been
          my favorite way of learning,
          exploring, and expressing
          ideas.
        </h1>

        <div
          className="
            h-px
            w-full
            bg-white/20
            mb-8
          "
        />

        <p
          className="
            text-xs
            sm:text-sm
            leading-7
            opacity-65
            max-w-lg
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
            mt-8
            text-xs
            sm:text-sm
            leading-7
            opacity-65
            max-w-lg
          "
        >
          This portfolio, from design
          to development and everything
          within it, was built by me
          from scratch.
        </p>

        <div
          className="
            mt-12
            text-[10px]
            uppercase
            tracking-[0.3em]
            opacity-40
            space-y-2
          "
        >
          <p>Computer Science</p>
          <p>New Media</p>
          <p>Creative Development</p>
        </div>

      </div>
    </section>
  );
}