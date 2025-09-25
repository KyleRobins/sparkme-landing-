"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Satellite, Globe, BarChart3, Users, BookOpen, Award } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

const features = [
  {
    icon: Satellite,
    title: "Satellite Data Analysis",
    description:
      "Master the fundamentals of satellite imagery interpretation, data processing, and analysis using cutting-edge Earth Observation technologies and platforms.",
  },
  {
    icon: Globe,
    title: "Environmental Monitoring",
    description:
      "Learn to monitor environmental changes, track deforestation, assess climate impacts, and support sustainable development goals through EO data.",
  },
  {
    icon: BarChart3,
    title: "Policy Impact Assessment",
    description:
      "Develop skills to translate Earth Observation insights into actionable policy recommendations and evidence-based decision making for public administration.",
  },
  {
    icon: Users,
    title: "Collaborative Learning",
    description:
      "Engage with fellow public officers and students in hands-on workshops, case studies, and real-world project implementations across Africa.",
  },
  {
    icon: BookOpen,
    title: "Comprehensive Curriculum",
    description:
      "Access structured learning modules covering remote sensing, GIS applications, data visualization, and policy integration methodologies.",
  },
  {
    icon: Award,
    title: "Professional Certification",
    description:
      "Earn recognized certification in Earth Observation applications for public policy, enhancing your professional credentials and career prospects.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://res.cloudinary.com/dzw5pskk1/image/upload/v1758545453/space-8381874_1920_igybxo.jpg"
          alt="Deep space with stars and nebula"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/95 to-background/90" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-balance mb-6">Comprehensive Earth Observation Training</h2>
          <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto leading-relaxed">
            SPARKme 2 provides cutting-edge training in Earth Observation technologies, empowering public officers and
            students to harness satellite data for sustainable development and policy innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/50 border-border hover:bg-card/80 transition-all duration-300 backdrop-blur-sm h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
