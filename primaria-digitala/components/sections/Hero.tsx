import Link from 'next/link'
import { ArrowRight, CheckCircle, Star } from 'lucide-react'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'

const stats = [
  { value: '8', label: 'module disponibile' },
  { value: '30 zile', label: 'implementare rapidă' },
  { value: '0', label: 'training complex' },
  { value: '24/7', label: 'suport dedicat' },
]

const highlights = [
  'Funcționează pe WhatsApp și Telegram',
  'Prețuri accesibile pentru organizații mici',
  'Implementare fără echipă IT internă',
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white">
      <div className="absolute inset-0 bg-grid-pattern opacity-100" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className="relative container py-20 lg:py-28">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="green" className="mb-6 bg-green-500/20 border-green-400/30 text-green-300">
            <Star className="w-3.5 h-3.5" />
            Soluție pentru instituții și organizații publice din România
          </Badge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
            Digitalizăm instituțiile{' '}
            <span className="text-green-400">rapid și fără complicații</span>
          </h1>

          <p className="text-xl md:text-2xl text-blue-200 mb-4 max-w-3xl mx-auto leading-relaxed">
            Fără infrastructură complicată. Fără training lung. Fără costuri mari.
          </p>

          <p className="text-blue-300 mb-10 max-w-2xl mx-auto">
            O suită de module digitale plug & play care transformă modul în care organizațiile
            publice comunică cu cetățenii și gestionează activitatea internă.
            Primăriile sunt printre primii noștri clienți.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button
              href="/contact"
              size="xl"
              variant="secondary"
              className="bg-green-500 hover:bg-green-400 text-white font-bold shadow-lg shadow-green-500/30"
            >
              Solicită o prezentare
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              href="/#module"
              size="xl"
              variant="outline"
              className="border-white/40 text-white hover:bg-white/10 hover:border-white/60"
            >
              Explorează modulele
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {highlights.map((h) => (
              <span key={h} className="flex items-center gap-2 text-sm text-blue-200">
                <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
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
              <div className="text-3xl font-extrabold text-green-400 mb-1">{s.value}</div>
              <div className="text-blue-200 text-sm">{s.label}</div>
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
