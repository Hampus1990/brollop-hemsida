"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function DayDetails() {
  const { t } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const sections = t.dayDetails.sections

  return (
    <section
      id="day-details"
      className="scroll-mt-20 bg-background py-24 md:py-36 border-b border-border"
    >
      <div className="mx-auto max-w-3xl px-6 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.32em] text-primary">
            {t.dayDetails.kicker}
          </p>
          <h2 className="mt-5 font-serif text-5xl font-light tracking-tight text-foreground text-balance md:text-6xl">
            {t.dayDetails.title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            {t.dayDetails.subtitle}
          </p>
        </div>

        <div className="mt-16 md:mt-20 divide-y divide-border border-t border-b border-border">
          {sections.map((section, i) => {
            const isOpen = openIndex === i
            return (
              <div key={i}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-xl text-foreground md:text-2xl">
                    {section.heading}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="pb-8 pr-8 text-pretty leading-relaxed text-muted-foreground">
                    {section.paragraphs?.map((p, pi) => (
                      <p key={pi} className={pi > 0 ? "mt-4" : ""}>
                        {p}
                      </p>
                    ))}

                    {section.list && (
                      <ul className="mt-4 space-y-2">
                        {section.list.map((item, li) => (
                          <li key={li} className="flex gap-3">
                            <span
                              className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                              aria-hidden
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.groups && (
                      <div className="mt-4 space-y-6">
                        {section.groups.map((group, gi) => (
                          <div key={gi}>
                            <p className="font-medium text-foreground">
                              {group.label}
                            </p>
                            <ul className="mt-2 space-y-2">
                              {group.items.map((item, ii) => (
                                <li key={ii} className="flex gap-3">
                                  <span
                                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                                    aria-hidden
                                  />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
