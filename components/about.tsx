"use client"

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 py-24 md:py-36 border-b border-border"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">

        {/* Full-width landscape hero image */}
        <div className="overflow-hidden rounded-sm border border-border">
          <img
            src="/images/IMG_5381.jpeg"
            alt="Kelsi at the coast at sunset"
            className="w-full h-[420px] md:h-[540px] object-cover object-center"
          />
        </div>

        {/* Row 2: three equal images */}
        <div className="mt-3 grid grid-cols-3 gap-3">
          <div className="overflow-hidden rounded-sm border border-border">
            <img
              src="/images/IMG_5293.jpeg"
              alt="Kelsi hiking with the dog"
              className="w-full aspect-[3/4] object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-sm border border-border">
            <img
              src="/images/IMG_9445.jpeg"
              alt="Hampus and Kelsi on the cliffs"
              className="w-full aspect-[3/4] object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-sm border border-border">
            <img
              src="/images/IMG_0705.jpeg"
              alt="Tea ceremony in Japan"
              className="w-full aspect-[3/4] object-cover"
            />
          </div>
        </div>

        {/* Row 3: three equal images */}
        <div className="mt-3 grid grid-cols-3 gap-3">
          <div className="overflow-hidden rounded-sm border border-border">
            <img
              src="/images/IMG_0317.jpeg"
              alt="Hampus with a beer by Stockholm Palace"
              className="w-full aspect-square object-cover"
              style={{ objectPosition: "center 30%" }}
            />
          </div>
          <div className="overflow-hidden rounded-sm border border-border">
            <img
              src="/images/IMG_9904.jpeg"
              alt="Our dog by the water"
              className="w-full aspect-square object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-sm border border-border">
            <img
              src="/images/IMG_9728.jpeg"
              alt="Our dog"
              className="w-full aspect-square object-cover"
            />
          </div>
        </div>

        {/* Row 4: two images */}
        <div className="mt-3 grid grid-cols-2 gap-3">
          <div className="overflow-hidden rounded-sm border border-border">
            <img
              src="/images/IMG_0941.jpeg"
              alt="Half marathon finishers in Stockholm"
              className="w-full aspect-[4/3] object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-sm border border-border">
            <img
              src="/images/IMG_3258.jpeg"
              alt="Midsommar in the field"
              className="w-full aspect-[4/3] object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
