import Link from 'next/link'
import { modules } from '@/config/modules'
import ModuleCard from '@/components/ui/ModuleCard'

export default function PackageSection() {
  return (
    <section className="section bg-slate-50" id="pachet">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-block text-blue-700 font-semibold text-sm uppercase tracking-widest mb-3">
            Pachet unic — Platformă Digitală Instituțională
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Un singur pachet. Toate componentele incluse.
          </h2>
          <p className="text-lg text-slate-600">
            Platforma reunește 7 componente integrate într-un abonament unic. Nu există module
            separate sau costuri adiționale per funcționalitate.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-12">
          {modules.map((module) => (
            <ModuleCard key={module.id} module={module} />
          ))}
        </div>

        <div className="bg-blue-900 text-white rounded-2xl p-8 md:p-10 max-w-3xl mx-auto text-center">
          <p className="text-blue-300 text-sm font-semibold uppercase tracking-wide mb-3">
            Abonament lunar · Pachet complet
          </p>
          <h3 className="text-2xl md:text-3xl font-extrabold mb-4">
            Toate cele 7 componente incluse
          </h3>
          <p className="text-blue-200 mb-8 leading-relaxed">
            Implementare, configurare și personalizare gestionate de echipa noastră. Platforma
            devine operațională în 14–30 de zile, fără implicare tehnică din partea instituției.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/pricing"
              className="bg-white text-blue-900 font-bold py-3 px-6 rounded-xl hover:bg-blue-50 transition-colors text-sm"
            >
              Vezi structura abonamentului
            </Link>
            <Link
              href="/contact"
              className="border border-white/40 text-white font-semibold py-3 px-6 rounded-xl hover:bg-white/10 transition-colors text-sm"
            >
              Solicită o prezentare
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
