import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, GraduationCap, Clock, MapPin } from "lucide-react"

export function Programs() {
  return (
    <section id="programs" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Targeted Training Tracks</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Programmes designed to strengthen institutional capacity and develop Kenya's next generation of Earth Observation experts.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-8 max-w-6xl mx-auto">
          <Card className="border-blue-500/20 bg-gradient-to-br from-card to-blue-950/10">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Users className="h-6 w-6 text-blue-400" />
                <Badge variant="secondary">Public Officers</Badge>
              </div>
              <CardTitle className="text-2xl">SPARKme Programme</CardTitle>
              <CardDescription className="text-base">
                Strengthening institutional capacity through satellite data
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Tailored for officers in agriculture, urban planning, environment, security, and public administration. Build practical capability to turn EO insights into territorial analysis and data-driven policies.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-blue-400" />
                  <span>25 hours (3 days training)</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-blue-400" />
                  <span>SDIC, Nairobi</span>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold">Programme Highlights</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Hands-on virtual labs and digital platforms</li>
                  <li>• Customized analytical reports for policy insights</li>
                  <li>• Real use cases across agriculture, urban development, and environmental management</li>
                  <li>• Blended delivery with in-person and remote expert support</li>
                </ul>
              </div>

              <a
                href="mailto:contactpoint@sparkme.space?subject=SPARKme%20Public%20Officers%20Application"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                Apply Here
              </a>
            </CardContent>
          </Card>

          <Card className="border-green-500/20 bg-gradient-to-br from-card to-green-950/10">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <GraduationCap className="h-6 w-6 text-green-400" />
                <Badge variant="secondary">Students</Badge>
              </div>
              <CardTitle className="text-2xl">SPARKme Training Programme</CardTitle>
              <CardDescription className="text-base">
                Empowering Kenya's next generation of EO experts
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Intensive pathway for university graduates to master EO, AI, drones, IoT, and satellite data integration. Gain global exposure through interactive labs and real field assignments.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-green-400" />
                  <span>8 months duration</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-green-400" />
                  <span>SDIC, Nairobi & remote</span>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold">Programme Highlights</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• 240 hours blended instruction with live experts</li>
                  <li>• 120 hours access to digital tools and virtual platforms</li>
                  <li>• Real-time SATCOM operations and field applications</li>
                  <li>• Two-month internships in Kenya or Italy</li>
                </ul>
              </div>

              <a
                href="mailto:contactpoint@sparkme.space?subject=SPARKme%20Student%20Programme%20Application"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                Apply Here
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
