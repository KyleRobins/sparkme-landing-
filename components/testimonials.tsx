import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Dr. Sarah Kimani",
      role: "Senior Policy Analyst, Ministry of Environment",
      content:
        "SPARKme transformed how we approach environmental monitoring. The satellite data analysis skills I gained are now integral to our climate policy decisions.",
      rating: 5,
    },
    {
      name: "James Mwangi",
      role: "Urban Planning Officer, Nairobi County",
      content:
        "The practical applications of Earth Observation data in urban development planning have been game-changing for our department's strategic initiatives.",
      rating: 5,
    },
    {
      name: "Grace Wanjiku",
      role: "JKUAT Graduate, Space Technology",
      content:
        "The hands-on experience with cutting-edge space technologies and expert mentorship opened doors to opportunities I never imagined possible.",
      rating: 5,
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from our program participants who are making real impact in their fields
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border/50">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
