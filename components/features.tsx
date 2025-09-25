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
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About SPARKme 2</h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            SPARKme 2 is an international initiative delivered in Nairobi to empower Public Officers and young talent in Kenya. The programme blends advanced Earth Observation, satellite data, robotics, IoT, and emerging space technologies, providing practical skills, hands-on labs, and strategic knowledge for evidence-based decision-making.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
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
