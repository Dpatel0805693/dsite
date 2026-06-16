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
            src="/videos/EditorialHero.mp4"
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
      <section className="px-12 py-20">

        {/* Categories */}
        <div className="flex gap-8 mb-16 text-xs uppercase tracking-[0.3em]">

          <button>All</button>
          <button>Moodboards</button>
          <button>Fit Checks</button>
          <button>Fashion Notes</button>
          <button>The Petite Vision</button>

        </div>

        {/* Masonry Grid */}
        <div className="columns-3 gap-6">

          {cards.map((card) => (
            <div
              key={card.title}
              className="mb-6 break-inside-avoid cursor-pointer"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full rounded-xl"
              />

              <p className="mt-3 text-sm uppercase tracking-wide">
                {card.title}
              </p>

              <p className="text-xs opacity-50">
                {card.category}
              </p>
            </div>
          ))}

        </div>

      </section>
    </>
  );
}