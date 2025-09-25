import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { Programs } from "@/components/programs"
import { Features } from "@/components/features"
import { Partners } from "@/components/partners"
import { FAQ } from "@/components/faq"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <Programs />
        <Features />
        <Partners />
        <FAQ />
        
      </main>
      <Footer />
    </div>
  )
}
