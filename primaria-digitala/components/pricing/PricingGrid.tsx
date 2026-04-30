import { Check } from 'lucide-react'
import Link from 'next/link'
import { subscriptionTiers, annualBenefits, packageFeatures, hardwarePricing, scanningPricing } from '@/config/pricing'

export default function PricingGrid() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Abonament platformă</h2>
        <p className="text-slate-600 mb-8">
          Un singur abonament lunar care include toate cele 7 componente ale platformei.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {subscriptionTiers.map((tier, i) => (
            <div
              key={tier.year}
              className={`rounded-2xl p-8 ${
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
              <div className="flex items-end gap-1 mb-3">
                <span
                  className={`text-5xl font-extrabold ${
                    i === 0 ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {tier.monthly} €
                </span>
                <span
                  className={`mb-1.5 text-sm ${i === 0 ? 'text-blue-300' : 'text-slate-400'}`}
                >
                  /lună
                </span>
              </div>
              <p
                className={`text-sm font-medium mb-2 ${
                  i === 0 ? 'text-blue-200' : 'text-slate-600'
                }`}
              >
                {tier.label}
              </p>
              {tier.note && (
                <p className={`text-xs mt-2 ${i === 0 ? 'text-blue-300' : 'text-slate-500'}`}>
                  {tier.note}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl border border-slate-200 p-7 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-5">Plată anuală — avantaje</h3>
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
      </div>

      <div className="border-t border-slate-200 pt-12">
        <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Hardware & Scanare (opțional)</h2>
        <p className="text-slate-600 mb-8">
          Componenta de arhivă digitală poate fi completată cu echipament fizic instalat în locație.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-7 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-2">Pachet hardware</h3>
            <p className="text-slate-500 text-sm mb-5">Abonament lunar</p>
            <div className="mb-5">
              <span className="text-4xl font-extrabold text-slate-900">{hardwarePricing.monthly} €</span>
              <span className="text-slate-400 text-sm ml-1">/lună</span>
            </div>
            <ul className="space-y-3">
              {hardwarePricing.includes.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-slate-700">
                  <Check className="w-4 h-4 text-slate-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-7 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-2">Serviciu de scanare fizică</h3>
            <p className="text-slate-500 text-sm mb-5">Taxă inițială per volum</p>
            <div className="space-y-4">
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-semibold text-slate-700">Pachet inițial</span>
                  <span className="font-extrabold text-slate-900">{scanningPricing.initial} €</span>
                </div>
                <p className="text-xs text-slate-500">
                  Până la {scanningPricing.initialDocs.toLocaleString('ro')} documente
                </p>
              </div>
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-semibold text-slate-700">Documente suplimentare</span>
                  <span className="font-extrabold text-slate-900">{scanningPricing.extraPer} €</span>
                </div>
                <p className="text-xs text-slate-500">
                  Per tranșă de {scanningPricing.extraDocs.toLocaleString('ro')} documente
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-900 text-white rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-extrabold mb-3">Solicitați o ofertă personalizată</h3>
        <p className="text-blue-200 mb-6 max-w-xl mx-auto">
          Discutăm despre dimensiunea organizației, nevoile specifice și structura de implementare potrivită.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-blue-900 font-bold py-3 px-8 rounded-xl hover:bg-blue-50 transition-colors"
        >
          Cere detalii despre implementare
        </Link>
      </div>
    </div>
  )
}
