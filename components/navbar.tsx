"use client"

import { useEffect, useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { cn } from "@/lib/utils"

export function Navbar() {
  const { lang, setLang, t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const links = [
    { href: "#our-day", label: t.nav.day },
    { href: "#venue", label: t.nav.venue },
    { href: "#information", label: t.nav.info },
    { href: "#gifts", label: t.nav.gifts },
    { href: "#faq", label: t.nav.faq },
  ]

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        scrolled
          ? "border-b border-border/70 bg-background/85 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-20 md:px-8">
        <a
          href="#top"
          className="font-serif text-lg tracking-wide text-foreground md:text-xl"
        >
          H <span className="text-accent">&</span> K
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1 text-[0.7rem] font-medium uppercase tracking-[0.2em]">
          <button
            type="button"
            onClick={() => setLang("sv")}
            aria-pressed={lang === "sv"}
            className={cn(
              "rounded-sm px-2 py-1 transition-colors",
              lang === "sv"
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            SV
          </button>
          <span aria-hidden className="text-border">
            /
          </span>
          <button
            type="button"
            onClick={() => setLang("en")}
            aria-pressed={lang === "en"}
            className={cn(
              "rounded-sm px-2 py-1 transition-colors",
              lang === "en"
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            EN
          </button>
        </div>
      </nav>
    </header>
  )
}
