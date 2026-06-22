"use client"

import { useLanguage } from "@/components/language-provider"
import { MapPin } from "lucide-react"

export function Venue() {
  const { t } = useLanguage()

  return (
    <section
      id="venue"
      className="scroll-mt-20 border-y border-border bg-secondary/40 py-24 md:py-36"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.32em] text-primary">
              {t.venue.kicker}
            </p>
            <h2 className="mt-5 font-serif text-5xl font-light tracking-tight text-foreground text-balance md:text-6xl">
              {t.venue.title}
            </h2>
            <p className="mt-7 text-pretty leading-relaxed text-muted-foreground">
              {t.venue.history}
            </p>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              {t.venue.chapel}
            </p>

            <div className="mt-8 flex items-start gap-3 border-t border-border pt-7">
              <MapPin
                className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                strokeWidth={1.5}
                aria-hidden
              />
              <div>
                <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-muted-foreground">
                  {t.venue.addressLabel}
                </p>
                <p className="mt-1 font-serif text-xl text-foreground">
                  {t.venue.address}
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=M%C3%A4ls%C3%A5kers+Slott+Str%C3%A4ngn%C3%A4s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm text-primary underline-offset-4 transition-colors hover:text-foreground hover:underline"
                >
                  {t.venue.mapLabel}
                </a>
              </div>
            </div>
          </div>

          <div className="order-1 flex flex-col gap-4 lg:order-2">
            <div className="overflow-hidden rounded-sm border border-border">
              <img
                src="/images/venue-castle.png"
                alt="Mälsåkers Slott and its gardens in summer light"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-sm border border-border">
                <img
                  src="/images/venue-chapel.png"
                  alt="The intimate castle chapel interior"
                  className="aspect-[3/4] w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-sm border border-border">
                <iframe
                  title={t.venue.title}
                  src="https://www.openstreetmap.org/export/embed.html?layer=mapnik&marker=59.3106%2C17.1619"
                  className="h-full min-h-[200px] w-full grayscale-[0.2]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
