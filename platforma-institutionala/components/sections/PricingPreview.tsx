import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'
import { subscriptionTiers, annualBenefits, packageFeatures } from '@/config/pricing'

export default function SubscriptionSection() {
  return (
    <section className="section bg-slate-50" id="abonament">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-block text-blue-700 font-semibold text-sm uppercase tracking-widest mb-3">
            Abonament
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Structura abonamentului
          </h2>
          <p className="text-lg text-slate-600">
            Un singur abonament care include toate componentele platformei. Prețul evoluează
            progresiv pe măsura consolidării relației.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {subscriptionTiers.map((tier, i) => (
            <div
              key={tier.year}
              className={`rounded-2xl p-7 ${
                i === 0
                  ? 'bg-blue-900 text-white shadow-xl ring-2 ring-blue-700'
                  : 'bg-white border border-slate-200 shadow-sm'
              }`}
            >
              <p
                className={`text-xs font-semibold uppercase tracking-widest mb-3 ${
                  i === 0 ? 'text-blue-300' : 'text-slate-500'
                }`}
              >
                {tier.year}
              </p>
              <div className="flex items-end gap-1 mb-2">
                <span
                  className={`text-4xl font-extrabold ${
                    i === 0 ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {tier.monthly} €
                </span>
                <span
                  className={`mb-1 text-sm ${i === 0 ? 'text-blue-300' : 'text-slate-400'}`}
                >
                  /lună
                </span>
              </div>
              {tier.note && (
                <p className={`text-xs mt-2 ${i === 0 ? 'text-blue-300' : 'text-slate-500'}`}>
                  {tier.note}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto mb-10">
          <div className="bg-white rounded-2xl border border-slate-200 p-7 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-5">Plată anuală</h3>
            <ul className="space-y-3">
              {annualBenefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                  <span className="text-slate-700 text-sm">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-7 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-5">Ce include abonamentul</h3>
            <ul className="space-y-3">
              {packageFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                  <span className="text-slate-700 text-sm">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:gap-3 transition-all"
          >
            Detalii complete despre structura de prețuri
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
