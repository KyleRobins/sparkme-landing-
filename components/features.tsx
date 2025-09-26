import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const officerReasons = [
  "Acquire strategic skills in spatial data and digital tools",
  "Enhance evidence-based public policies with actionable EO insights",
  "Access analytical platforms, expert mentorship, and tailored reports",
  "Connect with a global network of institutions driving innovation",
  "Empower excellence across Kenyan public service",
  "Earn certification on completion",
]

const studentReasons = [
  "Earn certification in cutting-edge space and EO technologies",
  "Work hands-on with real satellite data, AI, drones, and IoT",
  "Build an international career path in space innovation",
  "Access global internship placements in Kenya or Italy",
  "Contribute to Kenya's leadership in EO applications",
]

export function Features() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16 text-left md:text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About SPARKme</h2>
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p>
              An international initiative conceived by OPENET Technologies S.p.A. (IT) in collaboration with EagleProjects S.p.A. (IT), with the support of the Italian Space Agency (ASI) and the European Space Agency (ESA), realised alongside ITS Academy Foundation of Basilicata (IT) and the operational involvement of E4Impact Foundation (IT).
            </p>
            <p>
              The project establishes and operates the Space Data Information Centre (SDIC) in Nairobi (KE) to foster the utilisation of space data, expertise, and knowledge that catalyse commercial services across multiple sectors. The programme blends advanced Earth Observation, satellite data, robotics and drones, IoT, and emerging space technologies, providing practical skills, hands-on labs, and strategic knowledge for evidence-based decision-making.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
          <Card className="h-full border-primary/20">
            <CardHeader>
              <CardTitle className="text-xl">Why Participate? (Public Officers)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                {officerReasons.map((reason) => (
                  <li key={reason}>• {reason}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="h-full border-primary/20">
            <CardHeader>
              <CardTitle className="text-xl">Why Join? (Students)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                {studentReasons.map((reason) => (
                  <li key={reason}>• {reason}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
