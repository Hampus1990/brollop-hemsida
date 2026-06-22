import { LanguageProvider } from "@/components/language-provider"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { OurDay } from "@/components/our-day"
import { Venue } from "@/components/venue"
import { PracticalInfo } from "@/components/practical-info"
import { Gifts } from "@/components/gifts"
import { Faq } from "@/components/faq"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        <OurDay />
        <Venue />
        <PracticalInfo />
        <Gifts />
        <Faq />
      </main>
      <SiteFooter />
    </LanguageProvider>
  )
}
