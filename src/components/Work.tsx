"use client";

export default function Work() {
  return (
    <section
      id="work"
      className="min-h-screen ml-[380px] flex items-center scroll-mt-32"
    >
      <div className="w-full max-w-6xl px-10 font-mono">

        <div className="grid grid-cols-[220px_1fr] gap-12">

          {/* LEFT SIDE */}
          <div className="space-y-5">

            <div className="cursor-pointer">
              <p className="text-lg">Adobe Creative Suite</p>
            </div>

            <div className="cursor-pointer opacity-50 hover:opacity-100 transition">
              <p className="text-lg">UI/UX Design Projects</p>
            </div>

            <div className="cursor-pointer opacity-50 hover:opacity-100 transition">
              <p className="text-lg">HTML5</p>
            </div>

            <div className="cursor-pointer opacity-50 hover:opacity-100 transition">
              <p className="text-lg">Python</p>
            </div>

            <div className="cursor-pointer opacity-50 hover:opacity-100 transition">
              <p className="text-lg">Research</p>
            </div>

            <div className="cursor-pointer opacity-50 hover:opacity-100 transition">
              <p className="text-lg">UTampa Parking System</p>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div>

            <h4 className="text-2xl mb-1">
              Self Portrait
            </h4>

            <p className="uppercase tracking-[0.3em] text-xs opacity-50 mb-4">
              Adobe Illustrator
            </p>

            {/* IMAGE */}
            <div className="h-[320px] w-full border border-white/20 flex items-center justify-center">
              <p className="opacity-40">
                PROJECT IMAGE
              </p>
            </div>

            {/* INFO */}
            <div className="flex gap-10 mt-6 text-left">

              <div className="max-w-[220px]">
                <p className="text-xs uppercase tracking-[0.3em] opacity-50 mb-2">
                  Overview
                </p>

                <p className="text-sm opacity-80 leading-relaxed">
                  Vector self portrait created in Adobe Illustrator
                  using shape building, pen tools, and custom
                  illustration techniques.
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.3em] opacity-50 mb-2">
                  Role
                </p>

                <p className="text-sm opacity-80">
                  Designer
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.3em] opacity-50 mb-2">
                  Tools
                </p>

                <p className="text-sm opacity-80">
                  Adobe Illustrator
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.3em] opacity-50 mb-2">
                  Highlights
                </p>

                <p className="text-sm opacity-80">
                  Vector Illustration
                  <br />
                  Shape Builder
                  <br />
                  Digital Art
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}