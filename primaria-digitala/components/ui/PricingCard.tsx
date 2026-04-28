import { Check, Zap, Star } from 'lucide-react'
import { clsx } from 'clsx'
import Link from 'next/link'
import { Module } from '@/config/modules'

interface PricingCardProps {
  module: Module
  billingPeriod: 'monthly' | 'annual'
  featured?: boolean
}

interface BundleCardProps {
  monthly: number
  annual: number
  billingPeriod: 'monthly' | 'annual'
  features: string[]
  savingsMonthly: number
  savingsPercent: number
}

export function ModulePricingCard({ module, billingPeriod, featured }: PricingCardProps) {
  const price = billingPeriod === 'annual' ? module.price.annual : module.price.monthly

  return (
    <div
      className={clsx(
        'relative bg-white rounded-2xl border p-6 flex flex-col transition-all duration-200',
        featured
          ? 'border-blue-500 shadow-lg shadow-blue-100 scale-105'
          : 'border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1'
      )}
    >
      {featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
            <Star className="w-3 h-3" /> Cel mai solicitat
          </span>
        </div>
      )}

      <div className="flex items-center gap-3 mb-4">
        <div className={clsx('p-2.5 rounded-xl', module.bgColor)}>
          <span className={clsx('text-xl', module.accentColor)}>
            {/* icon placeholder */}
          </span>
        </div>
        <h3 className="font-bold text-slate-800 text-sm leading-tight">{module.shortTitle}</h3>
      </div>

      <p className="text-slate-500 text-xs mb-5 flex-1">{module.description}</p>

      <div className="mb-5">
        <div className="flex items-end gap-1">
          <span className="text-3xl font-extrabold text-slate-900">{price} €</span>
          <span className="text-slate-500 text-sm mb-1">/lună</span>
        </div>
        {billingPeriod === 'annual' && (
          <p className="text-xs text-green-600 font-medium mt-1">
            Economisești {module.price.monthly - module.price.annual} €/lună · facturat anual
          </p>
        )}
        {module.price.note && (
          <p className="text-xs text-slate-400 mt-1">{module.price.note}</p>
        )}
      </div>

      <Link
        href="/contact"
        className={clsx(
          'block text-center py-2.5 px-4 rounded-xl font-semibold text-sm transition-all duration-200',
          featured
            ? 'bg-blue-700 text-white hover:bg-blue-800'
            : 'bg-slate-100 text-slate-700 hover:bg-blue-50 hover:text-blue-700'
        )}
      >
        Solicită ofertă
      </Link>
    </div>
  )
}

export function BundlePricingCard({
  monthly,
  annual,
  billingPeriod,
  features,
  savingsMonthly,
  savingsPercent,
}: BundleCardProps) {
  const price = billingPeriod === 'annual' ? annual : monthly

  return (
    <div className="relative bg-gradient-to-br from-blue-800 to-blue-900 rounded-2xl p-8 text-white shadow-2xl overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24" />

      <div className="relative">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-white/15 rounded-xl">
            <Zap className="w-5 h-5 text-yellow-300" />
          </div>
          <span className="bg-yellow-400 text-blue-900 text-xs font-bold px-3 py-1 rounded-full">
            ECONOMISEȘTI {savingsPercent}%
          </span>
        </div>

        <h3 className="text-2xl font-extrabold mt-4 mb-1">Bundle Complet</h3>
        <p className="text-blue-200 text-sm mb-6">
          Toate cele 8 module · Implementare prioritară · Suport premium
        </p>

        <div className="mb-6">
          <div className="flex items-end gap-2">
            <span className="text-5xl font-extrabold">{price} €</span>
            <span className="text-blue-300 mb-2">/lună</span>
          </div>
          <p className="text-blue-300 text-sm mt-1">
            față de {billingPeriod === 'annual' ? annual + savingsMonthly : monthly + savingsMonthly} € cumulative individual
          </p>
          {billingPeriod === 'annual' && (
            <p className="text-green-400 text-sm font-medium mt-1">
              ✓ Plătești 10 luni, primești 12
            </p>
          )}
        </div>

        <ul className="space-y-2.5 mb-8">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-sm">
              <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
              <span className="text-blue-100">{f}</span>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="block text-center bg-white text-blue-800 font-bold py-3.5 px-6 rounded-xl hover:bg-yellow-50 transition-colors text-base"
        >
          Cere demo complet gratuit
        </Link>

        <p className="text-blue-300 text-xs text-center mt-3">
          Fără obligații · Ofertă personalizată per comună
        </p>
      </div>
    </div>
  )
}
