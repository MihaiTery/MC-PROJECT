'use client'

import { useState } from 'react'
import { Check, Zap } from 'lucide-react'
import { clsx } from 'clsx'
import Link from 'next/link'
import { modules } from '@/config/modules'
import { bundlePricing, pricingFeatures, annualBenefits } from '@/config/pricing'
import ModuleIcon from '@/components/ui/ModuleIcon'

export default function PricingGrid() {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly')

  const bundlePrice = billing === 'annual' ? bundlePricing.annual : bundlePricing.monthly
  const savings =
    billing === 'annual' ? bundlePricing.savingsAnnual : bundlePricing.savingsMonthly
  const savingsPercent =
    billing === 'annual'
      ? bundlePricing.savingsPercentAnnual
      : bundlePricing.savingsPercentMonthly

  return (
    <div>
      {/* Toggle */}
      <div className="flex justify-center mb-10">
        <div className="relative flex bg-slate-100 p-1 rounded-2xl gap-1">
          <button
            onClick={() => setBilling('monthly')}
            className={clsx(
              'px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200',
              billing === 'monthly'
                ? 'bg-white shadow-sm text-slate-800'
                : 'text-slate-500 hover:text-slate-700'
            )}
          >
            Lunar
          </button>
          <button
            onClick={() => setBilling('annual')}
            className={clsx(
              'px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-2',
              billing === 'annual'
                ? 'bg-white shadow-sm text-slate-800'
                : 'text-slate-500 hover:text-slate-700'
            )}
          >
            Anual
            <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full font-bold">
              -17%
            </span>
          </button>
        </div>
      </div>

      {/* Annual benefits banner */}
      {billing === 'annual' && (
        <div className="bg-green-50 border border-green-200 rounded-2xl p-4 mb-8 flex flex-wrap gap-3 justify-center">
          {annualBenefits.map((b) => (
            <span key={b} className="flex items-center gap-1.5 text-sm text-green-700">
              <Check className="w-4 h-4 text-green-500" />
              {b}
            </span>
          ))}
        </div>
      )}

      {/* Bundle card - hero */}
      <div className="relative bg-gradient-to-br from-blue-800 to-blue-950 rounded-2xl p-8 text-white shadow-2xl overflow-hidden mb-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24 pointer-events-none" />

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-white/15 rounded-xl">
                <Zap className="w-6 h-6 text-yellow-400" />
              </div>
              <span className="bg-yellow-400 text-blue-900 text-xs font-bold px-3 py-1.5 rounded-full">
                ECONOMISEȘTI {savingsPercent}%
              </span>
            </div>
            <h3 className="text-3xl font-extrabold mb-2">Bundle Complet</h3>
            <p className="text-blue-200 mb-4">Toate cele 8 module · Implementare prioritară</p>

            <div className="flex items-end gap-2 mb-2">
              <span className="text-5xl font-extrabold">{bundlePrice} €</span>
              <span className="text-blue-300 mb-2">/lună</span>
            </div>
            <p className="text-blue-300 text-sm mb-1">
              Față de {bundlePrice + savings} € cumulate individual · Economisești {savings} €/lună
            </p>
            {billing === 'annual' && (
              <p className="text-green-400 text-sm font-semibold">✓ Plătești 10 luni, primești 12</p>
            )}
          </div>

          <div>
            <p className="text-blue-200 text-sm font-semibold uppercase tracking-wide mb-3">
              Include:
            </p>
            <ul className="space-y-2 mb-6">
              {pricingFeatures.bundle.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-blue-100">
                  <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="block text-center bg-white text-blue-800 font-bold py-3.5 px-6 rounded-xl hover:bg-yellow-50 transition-colors"
            >
              Cere demo complet gratuit
            </Link>
          </div>
        </div>
      </div>

      {/* Individual modules grid */}
      <h3 className="text-center text-lg font-bold text-slate-800 mb-6">
        Sau alege module individuale
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {modules.map((module) => {
          const price = billing === 'annual' ? module.price.annual : module.price.monthly
          return (
            <div
              key={module.id}
              className={clsx(
                'relative bg-white rounded-2xl border p-5 flex flex-col shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5',
                module.popular ? 'border-blue-400 ring-1 ring-blue-400' : 'border-slate-200'
              )}
            >
              {module.popular && (
                <div className="absolute -top-3 left-4">
                  <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Popular
                  </span>
                </div>
              )}

              <div className={clsx('p-2.5 rounded-xl inline-flex mb-3', module.bgColor)}>
                <ModuleIcon name={module.icon} className={clsx('w-5 h-5', module.accentColor)} />
              </div>

              <h4 className="font-bold text-slate-800 text-sm mb-1 leading-snug">
                {module.shortTitle}
              </h4>
              <p className="text-slate-500 text-xs mb-4 flex-1">{module.description}</p>

              <div className="border-t border-slate-100 pt-3 mb-3">
                <div className="flex items-end gap-1">
                  <span className="text-2xl font-extrabold text-slate-900">{price} €</span>
                  <span className="text-slate-400 text-xs mb-0.5">/lună</span>
                </div>
                {billing === 'annual' && (
                  <p className="text-xs text-green-600 font-medium">
                    -{module.price.monthly - module.price.annual} € față de lunar
                  </p>
                )}
                {module.price.note && (
                  <p className="text-xs text-slate-400 mt-0.5">{module.price.note}</p>
                )}
              </div>

              <Link
                href="/contact"
                className={clsx(
                  'block text-center py-2 px-3 rounded-lg text-xs font-semibold transition-colors',
                  module.popular
                    ? 'bg-blue-700 text-white hover:bg-blue-800'
                    : 'bg-slate-100 text-slate-700 hover:bg-blue-50 hover:text-blue-700'
                )}
              >
                Solicită ofertă
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}
