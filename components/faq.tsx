import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is SPARKme?",
    answer:
      "SPARKme is an international training initiative equipping public officers and university graduates in Kenya with skills in Earth Observation (EO), satellite data, robotics, IoT, and emerging technologies through hands-on labs, mentorship, and digital platforms.",
  },
  {
    question: "Who can participate?",
    answer:
      "Public Officers Programme: Officers in sectors such as agriculture, urban planning, environment, security, and public administration. Students Programme: University graduates seeking careers in EO, space technologies, and digital innovation.",
  },
  {
    question: "Where is the training held?",
    answer:
      "All sessions take place at the Space Information Data Centre (SDIC) located at the Entrepreneurship Centre in Nairobi, hosted by the E4Impact Foundation.",
  },
  {
    question: "When does the programme start and how long does it run?",
    answer:
      "Public Officers Programme: Starts October 2025 and is delivered over 3 intensive days (25 hours total). Students Programme: Starts October 2025 and runs for 8 months.",
  },
  {
    question: "What will I learn?",
    answer:
      "Public Officers focus on EO-driven policy-making, territorial analysis, tailored analytical reports, and virtual labs with real case studies. Students cover EO and satellite data analysis, AI, drones, IoT, SATCOM operations, and field applications.",
  },
  {
    question: "How is the training delivered?",
    answer:
      "Both programmes combine in-person sessions with remote access to digital tools, virtual labs, and continuous expert mentorship.",
  },
  {
    question: "Will I get a certificate?",
    answer:
      "Yes. Successful participants receive a certificate issued by I.T.S. Academy di Basilicata – Efficienza Energetica.",
  },
  {
    question: "Are there internship opportunities?",
    answer:
      "Student participants gain access to two-month internships in Kenya or Italy for international practical experience.",
  },
  {
    question: "Why should I join?",
    answer:
      "Develop strategic EO skills, gain access to advanced analytical platforms, expand professional networks, and accelerate careers in public policy and space technology.",
  },
  {
    question: "How do I apply or learn more?",
    answer:
      "Send inquiries or application requests to contactpoint@sparkme.space to receive detailed admission guidance.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Key information about eligibility, delivery, certification, and next steps for SPARKme applicants.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`item-${index}`} className="border border-border/50 rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
