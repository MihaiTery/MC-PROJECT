import { clsx } from 'clsx'
import { Module } from '@/config/modules'
import ModuleIcon from './ModuleIcon'

interface ModuleCardProps {
  module: Module
}

export default function ModuleCard({ module }: ModuleCardProps) {
  return (
    <div
      className={clsx(
        'bg-white rounded-2xl border p-6 shadow-sm',
        module.borderColor
      )}
    >
      <div className={clsx('p-3 rounded-xl inline-flex mb-4', module.bgColor)}>
        <ModuleIcon name={module.icon} className={clsx('w-6 h-6', module.accentColor)} />
      </div>
      <h3 className="font-bold text-slate-800 mb-2">{module.shortTitle}</h3>
      <p className="text-slate-500 text-sm leading-relaxed mb-4">{module.description}</p>
      <ul className="space-y-1.5">
        {module.features.slice(0, 3).map((f) => (
          <li key={f} className="flex items-start gap-2 text-xs text-slate-600">
            <span className={clsx('mt-0.5 shrink-0 font-bold', module.accentColor)}>—</span>
            {f}
          </li>
        ))}
      </ul>
    </div>
  )
}
