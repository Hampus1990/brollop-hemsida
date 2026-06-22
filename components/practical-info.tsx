"use client"

import { useLanguage } from "@/components/language-provider"
import { Car, BedDouble, UtensilsCrossed, Shirt, Baby, Mail } from "lucide-react"

const icons = [Car, BedDouble, UtensilsCrossed, Shirt, Baby, Mail]

export function PracticalInfo() {
  const { t } = useLanguage()

  return (
    <section
      id="information"
      className="scroll-mt-20 border-y border-border bg-secondary/40 py-24 md:py-36"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div className="lg:sticky lg:top-28">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.32em] text-primary">
              {t.info.kicker}
            </p>
            <h2 className="mt-5 font-serif text-5xl font-light tracking-tight text-foreground text-balance md:text-6xl">
              {t.info.title}
            </h2>
            <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
              {t.info.subtitle}
            </p>
            <div className="mt-10 overflow-hidden rounded-sm border border-border">
              <img
                src="/images/details-table.png"
                alt="Elegant wedding dinner table setting"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>

          <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2">
            {t.info.cards.map((card, i) => {
              const Icon = icons[i] ?? Car
              return (
                <div
                  key={card.heading}
                  className="flex flex-col bg-card p-7 md:p-8"
                >
                  <Icon
                    className="h-5 w-5 text-primary"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  <h3 className="mt-5 font-serif text-2xl text-foreground">
                    {card.heading}
                  </h3>
                  <ul className="mt-4 flex flex-col gap-2.5">
                    {card.items.map((item, j) => (
                      <li
                        key={j}
                        className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                          aria-hidden
                        />
                        <span className="whitespace-pre-line">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
