"use client"

export function Hero() {
  return (
    <section
      className="relative h-screen w-full flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: "url('/malsaker.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        transform: "none",
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* content */}
      <div className="relative z-10 px-6">
        <h1 className="text-5xl md:text-7xl font-serif">
          Hampus & Kelsi
        </h1>

        <p className="mt-4 text-lg md:text-xl">
          22 augusti 2026 · Mälsåkers Slott
        </p>

        <p className="mt-6 text-sm md:text-base opacity-90">
          Välkommen att fira med oss
        </p>
      </div>
    </section>
  )
}
