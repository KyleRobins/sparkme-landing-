"use client"

import * as React from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const partnerData = [
  {
    name: "OPENET Technologies S.p.A.",
    logo: "/assets/Logo_Openet.png",
    description: "Lead implementer bringing EO platforms to Kenya",
  },
  {
    name: "EagleProjects S.p.A.",
    logo: "/assets/eagleprojects-400x400.png",
    description: "Sub-contractor delivering digital platforms and remote sensing solutions",
  },
  {
    name: "Italian Space Agency",
    logo: "/assets/Agenzia_Spaziale_Italiana.webp",
    description: "Programme supporter providing satellite expertise",
  },
  {
    name: "European Space Agency",
    logo: "/assets/european-space-agency.png",
    description: "Strategic backing for EO innovation",
  },
  {
    name: "I.T.S. Academy Foundation of Basilicata",
    logo: "/assets/nuovo_logo_its.png",
    description: "Certification partner for energy efficiency",
  },
  {
    name: "E4Impact Foundation",
    logo: "/assets/e4impact-logo.png",
    description: "Hosts the Entrepreneurship Centre and SDIC in Nairobi",
  },
]

const scrollOffsetRatio = 0.8
const autoScrollInterval = 5000

export function Partners() {
  const scrollerRef = React.useRef<HTMLDivElement>(null)
  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(false)

  const updateScrollState = React.useCallback(() => {
    const container = scrollerRef.current
    if (!container) return
    const { scrollLeft, scrollWidth, clientWidth } = container
    setCanScrollPrev(scrollLeft > 8)
    setCanScrollNext(scrollLeft < scrollWidth - clientWidth - 8)
  }, [])

  React.useEffect(() => {
    const container = scrollerRef.current
    if (!container) return

    updateScrollState()

    const handleScroll = () => updateScrollState()
    container.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleScroll)

    return () => {
      container.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [updateScrollState])

  const scrollBy = React.useCallback((direction: "left" | "right") => {
    const container = scrollerRef.current
    if (!container) return

    const distance = container.clientWidth * scrollOffsetRatio
    const maxScroll = container.scrollWidth - container.clientWidth
    const current = container.scrollLeft

    if (direction === "right" && current >= maxScroll - 4) {
      container.scrollTo({ left: 0, behavior: "smooth" })
      window.requestAnimationFrame(updateScrollState)
      return
    }

    if (direction === "left" && current <= 4) {
      container.scrollTo({ left: maxScroll, behavior: "smooth" })
      window.requestAnimationFrame(updateScrollState)
      return
    }

    const target = direction === "left" ? current - distance : current + distance

    container.scrollTo({
      left: Math.min(Math.max(target, 0), maxScroll),
      behavior: "smooth",
    })
    window.requestAnimationFrame(updateScrollState)
  }, [updateScrollState])

  React.useEffect(() => {
    const id = window.setInterval(() => {
      scrollBy("right")
    }, autoScrollInterval)

    return () => window.clearInterval(id)
  }, [scrollBy])

  return (
    <section id="partners" className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">SPARKme</span>
            <span className="text-primary"> Partnership Network</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Implemented by OpenET Technologies S.p.A. with the support of ASI and ESA, alongside academic, industry, and government partners committed to advancing space innovation in Kenya.
          </p>
        </div>

        <div className="relative">
          <button
            type="button"
            className="absolute left-2 top-1/2 hidden -translate-y-1/2 rounded-full bg-background/80 p-2 text-muted-foreground shadow-sm transition hover:text-foreground disabled:cursor-not-allowed disabled:opacity-40 md:inline-flex"
            onClick={() => scrollBy("left")}
            disabled={!canScrollPrev}
            aria-label="Scroll to previous partners"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div
            ref={scrollerRef}
            className="flex overflow-x-auto gap-6 py-8 px-2 sm:px-6 md:px-12 scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            role="list"
            aria-label="Partner logos"
          >
            {partnerData.map((partner) => (
              <div
                key={partner.name}
                role="listitem"
                className="flex min-w-[150px] flex-col items-center gap-4 snap-start"
              >
                <div className="flex h-20 w-36 items-center justify-center rounded-2xl bg-transparent p-4 sm:h-24 sm:w-40">
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={`${partner.name} logo`}
                    width={160}
                    height={96}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <p className="text-center text-sm font-medium text-foreground">{partner.name}</p>
              </div>
            ))}
          </div>
          <button
            type="button"
            className="absolute right-2 top-1/2 hidden -translate-y-1/2 rounded-full bg-background/80 p-2 text-muted-foreground shadow-sm transition hover:text-foreground disabled:cursor-not-allowed disabled:opacity-40 md:inline-flex"
            onClick={() => scrollBy("right")}
            disabled={!canScrollNext}
            aria-label="Scroll to next partners"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-16 relative">
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <img
              src="/satellite-view-of-earth-from-space-with-city-light.jpg"
              alt="Earth from space"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="relative bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">Collaborating for Impact</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                This ecosystem pairs European space agencies with Kenyan institutions to deliver hands-on Earth Observation training, digital platforms, and mentorship that accelerate national innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
