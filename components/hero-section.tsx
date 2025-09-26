"use client"

import { InteractiveButton } from "@/components/ui/interactive-button"
import { ArrowRight, Satellite, Users } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-32">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://res.cloudinary.com/dzw5pskk1/image/upload/v1758545453/space-8381874_1920_igybxo.jpg"
          alt="Deep space with stars and nebula"
          fill
          className="object-cover brightness-100"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/55 to-white/80 dark:from-background/80 dark:via-background/60 dark:to-background/80 backdrop-blur-sm" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm text-primary mb-6">
              <Satellite className="h-4 w-4" />
              Advanced Earth Observation Training Programme
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance mb-6"
          >
            Building Kenya’s Future in Space: <span className="text-primary">Inclusive Training</span> for Students &amp; Policy Makers
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl text-muted-foreground text-balance mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            International training in Nairobi equipping Public Officers and young talent with advanced Earth Observation,
            satellite data, robotics, IoT, and space technology skills to power evidence-based innovation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 sm:mb-16"
          >
            <InteractiveButton
              size="lg"
              className="w-full sm:w-auto text-base sm:text-lg px-8 py-5 bg-primary hover:bg-primary/90 text-primary-foreground"
              asChild
            >
              <a href="mailto:contactpoint@sparkme.space?subject=SPARKme%20Public%20Officers%20Application">
                <Users className="h-5 w-5" />
                Apply for Public Officers Programme
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </InteractiveButton>
            <InteractiveButton
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-base sm:text-lg px-8 py-5 border-primary/30 text-foreground hover:bg-primary/10"
              asChild
            >
              <a href="mailto:contactpoint@sparkme.space?subject=SPARKme%20Student%20Programme%20Application">
                <Satellite className="h-5 w-5" />
                Apply for Students Programme
              </a>
            </InteractiveButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4 md:gap-8 mt-12 sm:mt-16"
          >
            <div className="bg-card/60 border border-border rounded-lg p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold text-primary mb-2">4 Months</div>
              <div className="text-sm text-muted-foreground">Public Officers Track</div>
              <div className="text-xs text-muted-foreground mt-1">25 HOURS / MONTH</div>
            </div>
            <div className="bg-card/60 border border-border rounded-lg p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold text-primary mb-2">8 Months</div>
              <div className="text-sm text-muted-foreground">Student Programme</div>
              <div className="text-xs text-muted-foreground mt-1">BLENDED DELIVERY</div>
            </div>
            <div className="bg-card/60 border border-border rounded-lg p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold text-primary mb-2">120 Hours</div>
              <div className="text-sm text-muted-foreground">Remote Labs Access
              </div>
              <div className="text-xs text-muted-foreground mt-1">VIRTUAL PLATFORMS</div>
            </div>
            <div className="bg-card/60 border border-border rounded-lg p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold text-primary mb-2">2 Months</div>
              <div className="text-sm text-muted-foreground">Internship Placements</div>
              <div className="text-xs text-muted-foreground mt-1">KENYA OR ITALY</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
