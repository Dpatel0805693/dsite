"use client";

const cards = [
  {
    title: "Blue & Brown",
    category: "Moodboard",
    image: "/editorial/one.jpeg",
  },
  {
    title: "Quiet Luxury",
    category: "Moodboard",
    image: "/editorial/two.jpeg",
  },

  {
    title: "Fashion Note",
    category: "Journal",
    note: "Petite dressing is less about trends and more about proportions.",
  },

  {
    title: "Fit Check 01",
    category: "Fit Check",
    image: "/editorial/three.jpeg",
  },
  {
    title: "Fit Check 02",
    category: "Fit Check",
    image: "/editorial/four.jpeg",
  },
  {
    title: "Rule of Thirds",
    category: "Fashion Note",
    image: "/editorial/five.jpeg",
  },
  {
    title: "The Petite Vision",
    category: "Future Brand",
    image: "/editorial/six.jpeg",
  },
];

const rotations = [
  "-rotate-4",
  "rotate-3",
  "-rotate-2",
  "rotate-1",
  "rotate-4",
  "-rotate-1",
];

export default function Editorial() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-screen overflow-hidden">

        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source
            src="/videos/EditorialHero.mov"
            type="video/mp4"
          />
        </video>

        <div className="relative z-10 flex h-full flex-col items-center justify-center">

          <h1 className="text-8xl font-editorial">
            Dhwani Patel
          </h1>

          <p className="mt-4 text-lg italic">
            Editorial Archive
          </p>

        </div>

      </section>

      {/* ARCHIVE */}
      <section className="px-12 py-20 bg-[#F8F4EE]">

        <div className="columns-4 gap-6">

          {cards.map((card, index) => (
            <div
              key={card.title}
              className={`
                relative
                mb-10
                break-inside-avoid
                cursor-pointer
                transition-all
                duration-300
                hover:scale-[1.02]
                ${
                    "note" in card
                      ? "-rotate-1"
                      : rotations[index % rotations.length]
                  }
              `}
            >

              {/* Tape */}
              <div
                className={`
                  absolute
                  top-2
                  left-1/2
                  -translate-x-1/2
                  w-20
                  h-6
                  bg-[#d9c9a5]
                  opacity-70
                  z-10
                  ${
                    index % 3 === 0
                      ? "-rotate-6"
                      : index % 3 === 1
                      ? "rotate-3"
                      : "-rotate-2"
                  }
                `}
              />

              {/* IMAGE CARD */}
              {"image" in card ? (
                <img
                  src={card.image}
                  alt={card.title}
                  className="
                    w-full
                    bg-white
                    p-2
                    shadow-lg
                    border
                    border-black/10
                  "
                />
              ) : (
                /* NOTE CARD */
                <div
                className="
                    relative
                    bg-[#fffaf2]
                    border
                    border-black/10
                    shadow-lg
                    p-12
                    min-h-[380px]
                "
                >
<>
  <p className="mb-8 text-xs uppercase tracking-[0.3em] opacity-40">
    Fashion Note
  </p>

  <p className="text-3xl italic leading-relaxed">
    {card.note}
  </p>
</>

                </div>
              )}

              {/* Archive Label */}
              <p className="mt-4 text-[10px] uppercase tracking-[0.25em] opacity-80">
                {card.title}
              </p>

              {/* Handwritten Note */}
              {card.title === "Blue & Brown" && (
                <p className="mt-1 text-lg italic opacity-70">
                  ↳ love this color combination
                </p>
              )}

              <p className="text-[11px] opacity-40 mt-1">
                {card.category}
              </p>

            </div>
          ))}

        </div>

      </section>
    </>
  );
}