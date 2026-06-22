"use client"

import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { Plus } from "lucide-react"
import { cn } from "@/lib/utils"

export function Faq() {
  const { t } = useLanguage()
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section
      id="faq"
      className="scroll-mt-20 border-t border-border bg-secondary/40 py-24 md:py-36"
    >
      <div className="mx-auto max-w-3xl px-6 md:px-8">
        <div className="text-center">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.32em] text-primary">
            {t.faq.kicker}
          </p>
          <h2 className="mt-5 font-serif text-5xl font-light tracking-tight text-foreground text-balance md:text-6xl">
            {t.faq.title}
          </h2>
        </div>

        <div className="mt-14 border-t border-border">
          {t.faq.items.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={i} className="border-b border-border">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-serif text-xl text-foreground md:text-2xl">
                    {item.q}
                  </span>
                  <Plus
                    className={cn(
                      "h-5 w-5 shrink-0 text-primary transition-transform duration-300",
                      isOpen && "rotate-45",
                    )}
                    strokeWidth={1.5}
                    aria-hidden
                  />
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-300 ease-out",
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-prose pb-6 pr-10 leading-relaxed text-muted-foreground">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
