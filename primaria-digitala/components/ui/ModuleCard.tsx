import Link from 'next/link'
import { ArrowRight, Star } from 'lucide-react'
import { clsx } from 'clsx'
import { Module } from '@/config/modules'
import ModuleIcon from './ModuleIcon'
import Badge from './Badge'

interface ModuleCardProps {
  module: Module
  variant?: 'default' | 'compact' | 'detailed'
  showPrice?: boolean
  billingPeriod?: 'monthly' | 'annual'
}

export default function ModuleCard({
  module,
  variant = 'default',
  showPrice = false,
  billingPeriod = 'monthly',
}: ModuleCardProps) {
  const price = billingPeriod === 'annual' ? module.price.annual : module.price.monthly

  if (variant === 'compact') {
    return (
      <Link
        href={`/module/${module.slug}`}
        className={clsx(
          'group flex items-center gap-4 p-4 rounded-xl border transition-all duration-200',
          'bg-white hover:shadow-md hover:-translate-y-0.5',
          module.borderColor
        )}
      >
        <div className={clsx('p-2.5 rounded-lg', module.bgColor)}>
          <ModuleIcon name={module.icon} className={clsx('w-5 h-5', module.accentColor)} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-slate-800 text-sm">{module.shortTitle}</p>
          <p className="text-xs text-slate-500 truncate">{module.description}</p>
        </div>
        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors shrink-0" />
      </Link>
    )
  }

  if (variant === 'detailed') {
    return (
      <div className={clsx('bg-white rounded-2xl border p-6 shadow-sm', module.borderColor)}>
        <div className="flex items-start justify-between mb-4">
          <div className={clsx('p-3 rounded-xl', module.bgColor)}>
            <ModuleIcon name={module.icon} className={clsx('w-7 h-7', module.accentColor)} />
          </div>
          {module.tag && (
            <Badge variant="amber" size="sm">
              <Star className="w-3 h-3" />
              {module.tag}
            </Badge>
          )}
        </div>

        <h3 className="text-lg font-bold text-slate-800 mb-2">{module.title}</h3>
        <p className="text-slate-600 text-sm mb-4">{module.longDescription}</p>

        <div className="mb-4">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
            Funcționalități cheie
          </p>
          <ul className="space-y-1.5">
            {module.features.slice(0, 4).map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                <span className={clsx('mt-0.5 text-lg leading-none', module.accentColor)}>•</span>
                {f}
              </li>
            ))}
          </ul>
        </div>

        {showPrice && (
          <div className={clsx('p-3 rounded-xl mb-4', module.bgColor)}>
            <p className="text-2xl font-bold text-slate-800">
              {price} €<span className="text-sm font-normal text-slate-500">/lună</span>
            </p>
            {billingPeriod === 'annual' && (
              <p className="text-xs text-slate-500 mt-0.5">facturat anual</p>
            )}
            {module.price.note && (
              <p className="text-xs text-slate-500 mt-0.5">{module.price.note}</p>
            )}
          </div>
        )}

        <Link
          href={`/module/${module.slug}`}
          className={clsx(
            'group flex items-center justify-between w-full px-4 py-2.5 rounded-lg font-medium text-sm transition-all',
            module.bgColor,
            module.accentColor,
            'hover:opacity-80'
          )}
        >
          <span>Detalii modul</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    )
  }

  return (
    <Link
      href={`/module/${module.slug}`}
      className="group bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col"
    >
      <div className="flex items-start justify-between mb-4">
        <div className={clsx('p-3 rounded-xl', module.bgColor)}>
          <ModuleIcon name={module.icon} className={clsx('w-6 h-6', module.accentColor)} />
        </div>
        {module.tag && (
          <Badge variant="amber" size="sm">
            {module.tag}
          </Badge>
        )}
        {module.popular && !module.tag && (
          <Badge variant="blue" size="sm">
            Popular
          </Badge>
        )}
      </div>

      <h3 className="font-bold text-slate-800 mb-2 group-hover:text-blue-700 transition-colors">
        {module.shortTitle}
      </h3>
      <p className="text-slate-500 text-sm flex-1 mb-4">{module.description}</p>

      {showPrice && (
        <div className="mb-4 pt-4 border-t border-slate-100">
          <p className="text-xl font-bold text-slate-800">
            {price} €<span className="text-sm font-normal text-slate-500">/lună</span>
          </p>
        </div>
      )}

      <div className="flex items-center gap-1.5 text-sm font-semibold text-blue-700 group-hover:gap-2.5 transition-all">
        <span>Vezi detalii</span>
        <ArrowRight className="w-4 h-4" />
      </div>
    </Link>
  )
}
