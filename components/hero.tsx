"use client"

import { useLanguage } from "@/components/language-provider"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section id="top" className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      <img
        src="/images/hero-malsaker-graded.jpg"
        alt="Mälsåkers Slott, a white Swedish baroque castle, leveled and composed for editorial balance"
       className="absolute inset-0 h-full w-full object-cover"
        style={{ 
          filter: "brightness(1.08) saturate(1.04) contrast(1.01) sepia(0.08)",
          transform: "rotate(+2deg) scale(1.05)"
        }}
      />
      {/* Warm editorial tint */}
      <div
        className="absolute inset-0 bg-[oklch(0.78_0.09_72)] opacity-15 mix-blend-soft-light"
        aria-hidden
      />
      {/* Reduced dark overlay for typography readability */}
      <div className="absolute inset-0 bg-foreground/15" aria-hidden />
      {/* Top scrim for navigation legibility */}
      <div
        className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-foreground/45 to-transparent"
        aria-hidden
      />
      {/* Vertical gradient + soft center vignette behind the headline */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-foreground/10 via-foreground/20 to-foreground/40"
        aria-hidden
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 45% at 50% 48%, oklch(0.27 0.018 140 / 0.32), transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center text-background">
        <p className="mb-6 text-[0.7rem] font-medium uppercase tracking-[0.32em] text-background/85 md:text-xs">
          {t.hero.intro}
        </p>
        <h1 className="font-serif text-6xl font-light leading-[0.95] tracking-tight text-balance sm:text-7xl md:text-8xl lg:text-9xl">
          {t.hero.names}
        </h1>
        <div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-5">
          <span className="h-px flex-1 bg-background/40" aria-hidden />
          <span className="text-xs uppercase tracking-[0.3em] text-background/90 md:text-sm">
            {t.hero.date}
          </span>
          <span className="h-px flex-1 bg-background/40" aria-hidden />
        </div>
        <p className="mt-4 font-serif text-2xl italic text-background/95 md:text-3xl">
          {t.hero.venue}
        </p>
        <p className="mx-auto mt-5 max-w-md text-pretty text-sm leading-relaxed text-background/85 md:text-base">
          {t.hero.subtitle}
        </p>

        <a
          href="#our-day"
          className="mt-12 inline-flex items-center justify-center border border-background/60 px-9 py-3.5 text-[0.7rem] font-medium uppercase tracking-[0.25em] text-background transition-colors duration-300 hover:bg-background hover:text-foreground"
        >
          {t.hero.cta}
        </a>
      </div>
    </section>
  )
}
