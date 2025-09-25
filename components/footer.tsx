import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react"

const usefulLinks = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Partners", href: "#partners" },
  { label: "FAQ", href: "#faq" },
  { label: "Apply", href: "#apply" },
]

const programmeHighlights = [
  { label: "Public Officers Programme", href: "#apply" },
  { label: "Students Programme", href: "#apply" },
  { label: "Remote Labs Access", href: "#programs" },
  { label: "Internship Placements", href: "#programs" },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 text-slate-100">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/assets/footer.png"
          alt="Space themed background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/80">
                <span className="text-lg font-bold text-white">S2</span>
              </div>
              <span className="text-2xl font-semibold tracking-tight text-white">SPARKme 2</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-200/90">
              Building Kenya's space innovation capacity through immersive Earth Observation training, strategic
              partnerships, and mission-driven mentorship for public officers and emerging talent.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://twitter.com"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:info@sparkme2.org"
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <p className="mt-4 text-sm text-slate-200/90">
              Nairobi Satellite &amp; Digital Innovation Centre<br />Accelerator Hub, SDIC Complex
            </p>
            <ul className="mt-6 space-y-4 text-sm text-slate-200/90">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 text-primary" />
                <span>P.O. Box 15635 – 00509 Nairobi, Kenya</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-1 h-4 w-4 text-primary" />
                <a href="mailto:info@sparkme2.org" className="hover:text-white transition">
                  info@sparkme2.org
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-1 h-4 w-4 text-primary" />
                <span>+254 712 000 000</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Useful Links</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-200/90">
              {usefulLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white transition">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Programme Highlights</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-200/90">
              {programmeHighlights.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-white transition">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/15 pt-8 text-sm text-slate-200/80 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p>© 2025 SPARKme 2. All rights reserved. Powered by OpenET Technologies S.p.A.</p>
          <div className="flex flex-wrap gap-6 text-slate-200/80">
            <a href="#privacy" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-white transition">
              Terms of Service
            </a>
            <a href="#program-guidelines" className="hover:text-white transition">
              Programme Guidelines
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
