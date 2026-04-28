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
    'Prețuri transparente pentru digitalizarea organizației. Module individuale sau bundle complet. Plată lunară sau anuală cu 17% reducere.',
}

export default function PricingPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-16 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-green-500/20 border border-green-400/30 text-green-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
              Prețuri transparente
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Clientul alege exact ce are nevoie
            </h1>
            <p className="text-blue-200 text-xl mb-6">
              Module individuale sau toate împreună cu discount semnificativ.
              Fără costuri ascunse, fără surprize.
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {annualBenefits.map((b) => (
                <span key={b} className="flex items-center gap-2 text-sm text-blue-200">
                  <Check className="w-4 h-4 text-green-400" />
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

      <section className="section-sm bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">
              Ce primește clientul față de soluțiile tradiționale
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr>
                    <th className="text-left py-3 px-4 text-slate-600 font-semibold w-2/5"></th>
                    <th className="text-center py-3 px-4 text-slate-600 font-semibold">
                      Soluții tradiționale
                    </th>
                    <th className="text-center py-3 px-4 bg-blue-700 text-white font-semibold rounded-t-xl">
                      Platforma noastră
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Timp implementare', '6–24 luni', '14–30 zile'],
                    ['Cost inițial', '10.000–100.000 €', '0 €'],
                    ['Training necesar', '2–6 săptămâni', '2 ore'],
                    ['Departament IT intern', 'Necesar', 'Nu e necesar'],
                    ['Contract minim', '3–5 ani', 'Lunar / anual'],
                    ['Personalizare', 'Scumpă și lentă', 'Inclusă'],
                    ['Suport', 'Prin bilete', 'Telefon + email'],
                    ['Upgrade module', 'Reproiect nou', 'Cu un click'],
                  ].map(([feature, traditional, ours], i) => (
                    <tr key={feature} className={i % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                      <td className="py-3 px-4 font-medium text-slate-700">{feature}</td>
                      <td className="py-3 px-4 text-center text-slate-500">{traditional}</td>
                      <td className="py-3 px-4 text-center bg-blue-50 text-blue-700 font-semibold">
                        {ours}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        items={faqItems.filter((f) => f.category === 'pricing')}
        title="Întrebări despre prețuri"
        subtitle="Transparență totală. Dacă ai o altă întrebare, suntem la un apel distanță."
        showCTA={true}
      />

      <CTASection
        title="Solicită o ofertă personalizată"
        subtitle="Dimensiunea organizației, modulele necesare și bugetul disponibil — construim o ofertă adaptată fiecărui client."
      />
    </>
  )
}
