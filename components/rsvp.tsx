"use client"
import { useState } from "react"
import { useLanguage } from "@/components/language-provider"

export function Rsvp() {
  const { t } = useLanguage()
  const [attending, setAttending] = useState<"yes" | "no" | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    const form = e.currentTarget
    const data = new FormData(form)

    const res = await fetch("https://formspree.io/f/xwvdpaan", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    })

    if (res.ok) {
      setSubmitted(true)
    }
    setLoading(false)
  }

  return (
    <section
      id="rsvp"
      className="scroll-mt-20 border-t border-border py-24 md:py-36"
    >
      <div className="mx-auto max-w-2xl px-6 md:px-8">
        <div className="text-center">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.32em] text-primary">
            {t.rsvp.kicker}
          </p>
          <h2 className="mt-5 font-serif text-5xl font-light tracking-tight text-foreground text-balance md:text-6xl">
            {t.rsvp.title}
          </h2>
          <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
            {t.rsvp.subtitle}
          </p>
        </div>

        {submitted ? (
          <div className="mt-14 rounded-sm border border-border bg-secondary/40 p-10 text-center">
            <p className="font-serif text-2xl text-foreground">{t.rsvp.thanks}</p>
            <p className="mt-3 text-muted-foreground">{t.rsvp.thanksSubtitle}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-14 flex flex-col gap-6">
            {/* Name */}
            <div className="flex flex-col gap-2">
              <label className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-muted-foreground">
                {t.rsvp.nameLabel}
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder={t.rsvp.namePlaceholder}
                className="border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            {/* Attending */}
            <div className="flex flex-col gap-2">
              <label className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-muted-foreground">
                {t.rsvp.attendingLabel}
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setAttending("yes")}
                  className={`border px-4 py-3 text-sm font-medium uppercase tracking-[0.22em] transition-colors ${
                    attending === "yes"
                      ? "border-primary bg-primary text-background"
                      : "border-border text-muted-foreground hover:border-primary hover:text-foreground"
                  }`}
                >
                  {t.rsvp.attendingYes}
                </button>
                <button
                  type="button"
                  onClick={() => setAttending("no")}
                  className={`border px-4 py-3 text-sm font-medium uppercase tracking-[0.22em] transition-colors ${
                    attending === "no"
                      ? "border-primary bg-primary text-background"
                      : "border-border text-muted-foreground hover:border-primary hover:text-foreground"
                  }`}
                >
                  {t.rsvp.attendingNo}
                </button>
              </div>
              <input type="hidden" name="attending" value={attending ?? ""} />
            </div>

            {/* Number of guests — only if attending */}
            {attending === "yes" && (
              <div className="flex flex-col gap-2">
                <label className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-muted-foreground">
                  {t.rsvp.guestsLabel}
                </label>
                <input
                  type="number"
                  name="guests"
                  min={1}
                  max={10}
                  defaultValue={1}
                  className="border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            )}

            {/* Allergies — only if attending */}
            {attending === "yes" && (
              <div className="flex flex-col gap-2">
                <label className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-muted-foreground">
                  {t.rsvp.allergiesLabel}
                </label>
                <textarea
                  name="allergies"
                  rows={3}
                  placeholder={t.rsvp.allergiesPlaceholder}
                  className="border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                />
              </div>
            )}

            {/* Additional notes */}
            <div className="flex flex-col gap-2">
              <label className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-muted-foreground">
                {t.rsvp.notesLabel}
              </label>
              <textarea
                name="notes"
                rows={3}
                placeholder={t.rsvp.notesPlaceholder}
                className="border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={!attending || loading}
              className="mt-2 inline-flex items-center justify-center border border-foreground px-9 py-3.5 text-[0.7rem] font-medium uppercase tracking-[0.25em] text-foreground transition-colors duration-300 hover:bg-foreground hover:text-background disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {loading ? t.rsvp.sending : t.rsvp.submit}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
