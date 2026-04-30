import { ArrowRight, Phone, Mail } from 'lucide-react'
import Button from '@/components/ui/Button'

interface CTASectionProps {
  title?: string
  subtitle?: string
  variant?: 'default' | 'light'
}

export default function CTASection({
  title = 'Programați o discuție despre organizația dvs.',
  subtitle = 'Fără angajamente, fără jargon tehnic. O discuție despre nevoile reale ale instituției și despre cum poate fi implementată platforma.',
  variant = 'default',
}: CTASectionProps) {
  if (variant === 'light') {
    return (
      <section className="section-sm bg-blue-50 border-y border-blue-100">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">{title}</h2>
            <p className="text-slate-600 mb-8">{subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary" size="lg">
                Solicită o prezentare
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button href="/pricing" variant="outline" size="lg">
                Vezi prețurile
              </Button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      className="section relative overflow-hidden bg-gradient-to-br from-blue-900 to-blue-950 text-white"
      id="contact"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-100" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />

      <div className="relative container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">{title}</h2>
          <p className="text-xl text-blue-200 mb-10 max-w-2xl mx-auto">{subtitle}</p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-12">
            <Button
              href="/contact"
              size="xl"
              className="bg-white text-blue-900 hover:bg-blue-50 font-bold shadow-lg"
            >
              Solicită o prezentare
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              href="/contact"
              size="xl"
              variant="outline"
              className="border-white/40 text-white hover:bg-white/10"
            >
              Discută cu un consultant
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm text-blue-200">
            <a
              href="tel:+40700000000"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              +40 700 000 000
            </a>
            <a
              href="mailto:contact@citydock.ro"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              contact@citydock.ro
            </a>
          </div>

          <p className="text-blue-300 text-xs mt-6">
            Răspundem în maximum 24 de ore · Fără obligații · Propunere adaptată fiecărei organizații
          </p>
        </div>
      </div>
    </section>
  )
}
