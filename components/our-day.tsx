"use client"

import { useLanguage } from "@/components/language-provider"

export function OurDay() {
  const { t } = useLanguage()

  return (
    <section id="our-day" className="scroll-mt-20 bg-background py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.32em] text-primary">
            {t.day.kicker}
          </p>
          <h2 className="mt-5 font-serif text-5xl font-light tracking-tight text-foreground text-balance md:text-6xl">
            {t.day.title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            {t.day.subtitle}
          </p>
        </div>

        <ol className="relative mx-auto mt-16 max-w-2xl md:mt-20">
          <span
            className="absolute left-[6.5rem] top-2 bottom-2 hidden w-px bg-border md:block"
            aria-hidden
          />
          {t.day.timeline.map((item, i) => (
            <li
              key={i}
              className="relative grid grid-cols-[auto_1fr] items-baseline gap-x-6 py-5 md:grid-cols-[6.5rem_auto_1fr] md:gap-x-8 md:py-6"
            >
              <span className="font-serif text-xl text-foreground md:text-right md:text-2xl">
                {item.time}
              </span>
              <span
                className="relative hidden h-2 w-2 translate-y-2 rounded-full bg-accent ring-4 ring-background md:block"
                aria-hidden
              />
              <span className="col-span-2 mt-1 text-pretty leading-relaxed text-muted-foreground md:col-span-1 md:mt-0">
                {item.text}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
