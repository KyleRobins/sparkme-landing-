"use client"

import { InteractiveButton } from "@/components/ui/interactive-button"
import { ArrowRight, Satellite, Users } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
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

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="pointer-events-none absolute hidden lg:block top-28 left-[6%] z-10"
      >
        <motion.div
          animate={{ y: [0, -16, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-60 h-60"
        >
          <Image
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=520&q=80"
            alt="Researcher working with satellite imagery"
            fill
            sizes="240px"
            className="rounded-[28px] border border-white/40 object-cover shadow-[0_40px_80px_rgba(15,30,50,0.25)]"
          />
          <div className="absolute bottom-4 left-4 rounded-full bg-white/85 px-4 py-2 text-xs font-semibold text-slate-700 shadow-lg">Mission Control Deck</div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="pointer-events-none absolute hidden xl:block right-[6%] bottom-24 z-10"
      >
        <motion.div
          animate={{ y: [0, 18, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-64 h-64"
        >
          <Image
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=520&q=80"
            alt="Students collaborating on technology project"
            fill
            sizes="260px"
            className="rounded-[32px] border border-white/35 object-cover shadow-[0_40px_90px_rgba(10,25,60,0.24)]"
          />
          <div className="absolute top-4 right-4 rounded-full bg-background/80 px-3 py-1 text-xs font-semibold text-primary shadow-lg ring-1 ring-primary/30">Cohort Lab</div>
        </motion.div>
      </motion.div>

      <motion.span
        aria-hidden="true"
        className="absolute hidden lg:block -right-20 top-24 h-80 w-80 rounded-full bg-primary/20 blur-3xl"
        animate={{ opacity: [0.35, 0.6, 0.35], scale: [0.9, 1.05, 0.9] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

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
            SPARKme 2: <span className="text-primary">Harnessing Earth Observation</span> for Public Policy Impact
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground text-balance mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            International training in Nairobi equipping Public Officers and young talent with advanced Earth Observation,
            satellite data, robotics, IoT, and space technology skills to power evidence-based innovation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <InteractiveButton
              size="lg"
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground"
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
              className="text-lg px-8 py-6 border-primary/30 text-foreground hover:bg-primary/10"
              asChild
            >
              <a href="mailto:contactpoint@sparkme.space?subject=SPARKme%202%20Student%20Programme%20Application">
                <Satellite className="h-5 w-5" />
                Apply for Students Programme
              </a>
            </InteractiveButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
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
