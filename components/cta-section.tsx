import { InteractiveButton } from "@/components/ui/interactive-button"
import { ArrowRight, Rocket, Users } from "lucide-react"
import Image from "next/image"

const highlightImages = [
  {
    src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=720&q=80",
    alt: "Specialists analysing satellite feeds",
    title: "Hands-on Data Labs",
    description: "Process live Copernicus imagery with mission mentors",
  },
  {
    src: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=720&q=80",
    alt: "Trainees collaborating during a workshop",
    title: "Collaborative Studios",
    description: "Co-design policy responses with peers and domain experts",
  },
  {
    src: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=720&q=80",
    alt: "Nairobi skyline at dusk",
    title: "SDIC Nairobi Hub",
    description: "Access entrepreneurship labs and prototyping facilities",
  },
]

export function CtaSection() {
  return (
    <section id="apply" className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/satellite-view-of-earth-from-space-with-city-light.jpg"
          alt="Earth from space"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-background/92 via-background/75 to-background/92 z-10"></div>

      <div className="container mx-auto px-4 text-center relative z-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium glow-cyan">
              <Rocket className="w-4 h-4" />
              Submit Your Application Today
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-balance mb-6">SPARKme 2 Applications</h2>

          <p className="text-xl text-muted-foreground text-balance mb-8 max-w-3xl mx-auto leading-relaxed">
            Applications for the October 2025 intake are open for both the Public Officers track and the Students programme. Reach out to the SPARKme team to confirm eligibility and reserve a seat.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <InteractiveButton
              size="lg"
              className="w-full sm:w-auto text-base sm:text-lg px-8 py-5 bg-primary hover:bg-primary/90 text-primary-foreground glow-cyan"
              asChild
            >
              <a href="mailto:contactpoint@sparkme.space?subject=SPARKme%202%20Public%20Officers%20Application">
                <Users className="h-5 w-5" />
                Apply for Public Officers Programme
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </InteractiveButton>
            <InteractiveButton
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-base sm:text-lg px-8 py-5 bg-transparent border-secondary text-secondary-foreground hover:bg-secondary hover:text-secondary-foreground glow-orange"
              asChild
            >
              <a href="mailto:contactpoint@sparkme.space?subject=SPARKme%202%20Student%20Programme%20Application">
                <Rocket className="h-5 w-5" />
                Apply for Students Programme
              </a>
            </InteractiveButton>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto">
            <div className="text-center p-4 rounded-lg bg-card/50 border border-border/50">
              <div className="text-2xl font-bold text-primary mb-1">Free</div>
              <div className="text-sm text-muted-foreground">Training Program</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-card/50 border border-border/50">
              <div className="text-2xl font-bold text-secondary mb-1">October 2025</div>
              <div className="text-sm text-muted-foreground">Next Cohorts Begin</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-card/50 border border-border/50">
              <div className="text-2xl font-bold text-primary mb-1">SDIC Nairobi</div>
              <div className="text-sm text-muted-foreground">Entrepreneurship Centre</div>
            </div>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {highlightImages.map((image) => (
              <div
                key={image.title}
                className="group relative overflow-hidden rounded-3xl border border-white/40 bg-white/70 shadow-[0_18px_55px_rgba(15,35,65,0.18)] backdrop-blur-lg transition-transform duration-500 hover:-translate-y-2 dark:border-border/40 dark:bg-background/70"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={420}
                  height={280}
                  className="h-48 w-full object-cover"
                  sizes="(min-width: 640px) 33vw, 90vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/10 to-transparent transition-opacity duration-500 group-hover:opacity-90 dark:from-slate-950/80" />
                <div className="absolute bottom-4 left-4 right-4 text-left text-white">
                  <p className="text-sm font-semibold tracking-wide">{image.title}</p>
                  <p className="text-xs text-white/80 mt-1 leading-relaxed">{image.description}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-sm text-muted-foreground mt-10">
            Contact the team at accelerator.kenya@e4impact.org for detailed briefings and documentation.
          </p>
        </div>
      </div>
    </section>
  )
}
