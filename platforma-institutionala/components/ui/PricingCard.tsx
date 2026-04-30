import { Check } from 'lucide-react'
import Link from 'next/link'
import { subscriptionTiers } from '@/config/pricing'

export default function PricingCard() {
  const firstTier = subscriptionTiers[0]

  return (
    <div className="bg-blue-900 text-white rounded-2xl p-8 shadow-xl">
      <p className="text-blue-300 text-xs font-semibold uppercase tracking-widest mb-3">
        {firstTier.year} — {firstTier.label}
      </p>
      <div className="flex items-end gap-1 mb-4">
        <span className="text-5xl font-extrabold">{firstTier.monthly} €</span>
        <span className="text-blue-300 mb-1.5">/lună</span>
      </div>
      {firstTier.note && (
        <p className="text-blue-300 text-sm mb-6">{firstTier.note}</p>
      )}
      <ul className="space-y-2.5 mb-8">
        {['Toate cele 7 componente incluse', 'Implementare în 14–30 de zile', 'Configurare completă', 'Sesiune de prezentare inclusă'].map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm">
            <Check className="w-4 h-4 text-blue-300 mt-0.5 shrink-0" />
            <span className="text-blue-100">{f}</span>
          </li>
        ))}
      </ul>
      <Link
        href="/contact"
        className="block text-center bg-white text-blue-900 font-bold py-3.5 px-6 rounded-xl hover:bg-blue-50 transition-colors"
      >
        Solicită o prezentare
      </Link>
    </div>
  )
}
