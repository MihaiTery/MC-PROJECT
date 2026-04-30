import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'
import Button from '@/components/ui/Button'

const highlights = [
  'Implementare rapidă, fără infrastructură complexă',
  'Fără training dificil pentru echipă',
  'Trasabilitate și control operațional complet',
  'Canale digitale familiare utilizatorilor',
]

const stats = [
  { value: '14–30', label: 'zile de implementare' },
  { value: '7', label: 'componente integrate' },
  { value: '0', label: 'echipament IT necesar' },
  { value: '24/7', label: 'trasabilitate automată' },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white">
      <div className="absolute inset-0 bg-grid-pattern opacity-100" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-slate-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className="relative container py-20 lg:py-28">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-300 text-sm font-semibold uppercase tracking-widest mb-5">
            Platformă SaaS modulară pentru instituții publice
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
            Digitalizare clară și controlată{' '}
            <span className="text-blue-300">
              pentru instituții publice și organizații cu rol administrativ
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-blue-200 mb-6 max-w-3xl mx-auto leading-relaxed">
            O platformă SaaS modulară care centralizează comunicarea, sesizările, monitorizarea publică
            și accesul la documente, folosind canale digitale deja familiare utilizatorilor.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button
              href="/contact"
              size="xl"
              className="bg-white text-blue-900 hover:bg-blue-50 font-bold shadow-lg"
            >
              Solicită o prezentare
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              href="/#pachet"
              size="xl"
              variant="outline"
              className="border-white/40 text-white hover:bg-white/10 hover:border-white/60"
            >
              Ce include pachetul
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {highlights.map((h) => (
              <span key={h} className="flex items-center gap-2 text-sm text-blue-200">
                <CheckCircle className="w-4 h-4 text-blue-300 shrink-0" />
                {h}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {stats.map((s) => (
            <div
              key={s.label}
              className="text-center bg-white/10 backdrop-blur-sm rounded-2xl py-5 px-4 border border-white/10"
            >
              <div className="text-3xl font-extrabold text-white mb-1">{s.value}</div>
              <div className="text-blue-300 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80L1440 80L1440 20C1200 70 720 -10 0 40L0 80Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
