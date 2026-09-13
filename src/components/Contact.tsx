export default function Contact() {
  return (
    <section
      id="contact"
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
          05 / Contact
        </p>

        <h2
          className="
            text-4xl
            sm:text-6xl
            leading-none
            tracking-tight
            mb-10
          "
        >
          Let's make
          <br />
          something.
        </h2>

        <div
          className="
            h-px
            w-full
            bg-white/20
            mb-8
          "
        />

        <div
          className="
            space-y-3
            text-sm
            opacity-70
          "
        >

          <p>
            Dhwani Patel
          </p>

          <p>
            B.S. Computer Science & New Media
          </p>

          <p>
            University of Tampa
          </p>

        </div>

        <div
          className="
            mt-12
            flex
            flex-col
            gap-4
            text-sm
          "
        >

          <a
            href="mailto:dhwanipatel7788@gmail.com"
            className="
              w-fit
              opacity-60
              hover:opacity-100
              transition-opacity
              duration-300
            "
          >
            dhwanipatel7788@gmail.com ↗
          </a>

          <a
            href="https://www.linkedin.com/in/dhwanipatel08"
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-fit
              opacity-60
              hover:opacity-100
              transition-opacity
              duration-300
            "
          >
            LinkedIn ↗
          </a>

          <a
            href="https://www.instagram.com/patel.dhwanii"
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-fit
              opacity-60
              hover:opacity-100
              transition-opacity
              duration-300
            "
          >
            Instagram ↗
          </a>

        </div>

      </div>
    </section>
  );
}