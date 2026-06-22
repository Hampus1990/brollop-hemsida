"use client"

import { useLanguage } from "@/components/language-provider"

export function SiteFooter() {
  const { t } = useLanguage()

  return (
    <footer className="bg-background py-20 text-center md:py-28">
      <div className="mx-auto max-w-2xl px-6">
        <p className="text-[0.7rem] font-medium uppercase tracking-[0.3em] text-muted-foreground">
          {t.footer.tagline}
        </p>
        <h2 className="mt-6 font-serif text-5xl font-light tracking-tight text-foreground md:text-6xl">
          {t.footer.names}
        </h2>
        <div className="mx-auto mt-7 flex max-w-xs items-center justify-center gap-4">
          <span className="h-px flex-1 bg-border" aria-hidden />
          <span className="h-1.5 w-1.5 rotate-45 bg-accent" aria-hidden />
          <span className="h-px flex-1 bg-border" aria-hidden />
        </div>
        <p className="mt-7 text-sm uppercase tracking-[0.25em] text-muted-foreground">
          {t.footer.date}
        </p>
        <p className="mt-2 font-serif text-xl italic text-foreground">
          {t.footer.venue}
        </p>
      </div>
    </footer>
  )
}
