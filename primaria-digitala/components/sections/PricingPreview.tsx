import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { modules } from '@/config/modules'
import { bundlePricing } from '@/config/pricing'
import ModuleIcon from '@/components/ui/ModuleIcon'
import { clsx } from 'clsx'

export default function PricingPreview() {
  return (
    <section className="section bg-slate-50" id="pricing">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Prețuri
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Prețuri clare și accesibile
          </h2>
          <p className="text-lg text-slate-600">
            Plătești doar ce folosești. Fără costuri ascunse, fără contract pe termen lung forțat.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Module preview cards - first 3 */}
          {modules.slice(0, 2).map((module) => (
            <div
              key={module.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col"
            >
              <div className={clsx('p-3 rounded-xl inline-flex mb-4', module.bgColor)}>
                <ModuleIcon name={module.icon} className={clsx('w-6 h-6', module.accentColor)} />
              </div>
              <h3 className="font-bold text-slate-800 mb-1">{module.shortTitle}</h3>
              <p className="text-slate-500 text-sm mb-4 flex-1">{module.description}</p>
              <div className="border-t border-slate-100 pt-4">
                <p className="text-2xl font-extrabold text-slate-900">
                  {module.price.monthly} €
                  <span className="text-sm font-normal text-slate-400">/lună</span>
                </p>
                <p className="text-xs text-green-600 mt-1">
                  sau {module.price.annual} €/lună cu plată anuală
                </p>
              </div>
            </div>
          ))}

          {/* Bundle highlight */}
          <div className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-2xl p-6 text-white shadow-xl flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <span className="text-blue-200 text-sm font-semibold uppercase tracking-wide">
                Bundle Complet
              </span>
              <span className="bg-yellow-400 text-blue-900 text-xs font-bold px-2.5 py-1 rounded-full">
                -{bundlePricing.savingsPercentMonthly}%
              </span>
            </div>
            <p className="text-blue-200 text-sm mb-4">
              Toate 8 modulele + suport premium + implementare prioritară
            </p>
            <div className="mb-5">
              <p className="text-4xl font-extrabold">{bundlePricing.monthly} €</p>
              <p className="text-blue-300 text-sm mt-1">/lună · Economisești {bundlePricing.savingsMonthly} €</p>
            </div>
            <ul className="space-y-2 mb-6 flex-1">
              {['Toate 8 modulele', 'Manager dedicat', 'Suport premium', 'Training inclus'].map(
                (f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-blue-100">
                    <Check className="w-4 h-4 text-green-400 shrink-0" />
                    {f}
                  </li>
                )
              )}
            </ul>
            <Link
              href="/contact"
              className="block text-center bg-white text-blue-800 font-bold py-3 px-4 rounded-xl hover:bg-yellow-50 transition-colors text-sm"
            >
              Cere demo complet
            </Link>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:gap-3 transition-all"
          >
            Vezi toate prețurile și detaliile complete
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
