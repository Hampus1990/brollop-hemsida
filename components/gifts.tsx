"use client"

import { useLanguage } from "@/components/language-provider"
import {
  Plane,
  TrainFront,
  Landmark,
  UtensilsCrossed,
  Sunset,
  Palmtree,
  Sailboat,
  BedDouble,
  Martini,
  Camera,
  type LucideIcon,
} from "lucide-react"

const iconMap: Record<string, LucideIcon> = {
  Plane,
  TrainFront,
  Landmark,
  UtensilsCrossed,
  Sunset,
  Palmtree,
  Sailboat,
  BedDouble,
  Martini,
  Camera,
}

export function Gifts() {
  const { t } = useLanguage()

  return (
    <section id="gifts" className="scroll-mt-20 bg-background py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.32em] text-primary">
            {t.gifts.kicker}
          </p>
          <h2 className="mt-5 font-serif text-5xl font-light tracking-tight text-foreground text-balance md:text-6xl">
            {t.gifts.title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            {t.gifts.intro}
          </p>
          <p className="mt-6 font-serif text-lg italic text-primary">
            {t.gifts.note}
          </p>
        </div>

        <ul className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {t.gifts.cards.map((card) => {
            const Icon = iconMap[card.icon] ?? Plane
            return (
              <li key={card.title}>
                <div className="group flex h-full flex-col items-start rounded-sm border border-border bg-card p-7 transition-colors duration-300 hover:border-accent">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-border text-primary transition-colors duration-300 group-hover:border-accent group-hover:text-accent-foreground group-hover:bg-accent">
                    <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden />
                  </span>
                  <h3 className="mt-6 font-serif text-2xl text-foreground">
                    {card.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {card.text}
                  </p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
