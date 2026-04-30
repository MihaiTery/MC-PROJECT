import { Server, Shield, Wrench } from 'lucide-react'
import { hardwarePricing, scanningPricing } from '@/config/pricing'

export default function HardwareSection() {
  return (
    <section className="section bg-slate-50" id="hardware">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-block text-slate-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Hardware & Scanare
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Echipament opțional pentru digitalizarea arhivei fizice
          </h2>
          <p className="text-lg text-slate-600">
            Componenta de arhivă digitală poate fi completată cu echipament hardware instalat
            în locație, cu garanție și mentenanță incluse.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-slate-100 rounded-xl">
                <Server className="w-6 h-6 text-slate-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-800">Pachet hardware</h3>
                <p className="text-slate-500 text-sm">Abonament lunar</p>
              </div>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-extrabold text-slate-900">{hardwarePricing.monthly} €</span>
              <span className="text-slate-400 text-sm ml-1">/lună</span>
            </div>
            <ul className="space-y-3">
              {hardwarePricing.includes.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-slate-700">
                  <Shield className="w-4 h-4 text-slate-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-slate-100 rounded-xl">
                <Wrench className="w-6 h-6 text-slate-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-800">Serviciu de scanare fizică</h3>
                <p className="text-slate-500 text-sm">Taxă inițială</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-semibold text-slate-700">Pachet inițial</span>
                  <span className="font-extrabold text-slate-900">{scanningPricing.initial} €</span>
                </div>
                <p className="text-xs text-slate-500">
                  Include scanarea a până la{' '}
                  {scanningPricing.initialDocs.toLocaleString('ro')} documente
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

        <p className="text-center text-slate-500 text-sm mt-8 max-w-xl mx-auto">
          Pachetul hardware este opțional. Platforma funcționează complet în cloud — dacă
          documentele sunt deja în format digital, nu este necesară nicio achiziție suplimentară.
        </p>
      </div>
    </section>
  )
}
