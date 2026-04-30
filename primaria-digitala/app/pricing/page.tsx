import type { Metadata } from 'next'
import { Check } from 'lucide-react'
import PricingGrid from '@/components/pricing/PricingGrid'
import CTASection from '@/components/sections/CTASection'
import FAQSection from '@/components/sections/FAQSection'
import { faqItems } from '@/config/faq'
import { annualBenefits } from '@/config/pricing'

export const metadata: Metadata = {
  title: 'Prețuri',
  description:
    'Structura de abonament pentru Platforma Digitală Instituțională. Un singur pachet complet cu toate componentele incluse.',
}

export default function PricingPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-16 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-blue-300 text-sm font-semibold uppercase tracking-widest mb-5">
              Structura de prețuri
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Un singur abonament, toate componentele incluse
            </h1>
            <p className="text-blue-200 text-xl mb-8">
              Fără costuri per funcționalitate, fără surprize. Prețul evoluează transparent
              de la un an la altul.
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {annualBenefits.map((b) => (
                <span key={b} className="flex items-center gap-2 text-sm text-blue-200">
                  <Check className="w-4 h-4 text-blue-300" />
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container">
          <PricingGrid />
        </div>
      </section>

      <FAQSection
        items={faqItems.filter((f) => f.category === 'pricing')}
        title="Întrebări despre prețuri și abonament"
        subtitle="Răspunsuri clare. Dacă aveți alte întrebări, suntem disponibili."
        showCTA={true}
      />

      <CTASection
        title="Discutați cu un consultant"
        subtitle="Prezentăm structura completă de prețuri și discutăm configurația potrivită pentru organizația dvs."
      />
    </>
  )
}
