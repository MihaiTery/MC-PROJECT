import { Puzzle, Zap, Shield, Users } from 'lucide-react'

const pillars = [
  {
    icon: Puzzle,
    title: 'Modular',
    description: 'Clientul alege doar modulele de care are nevoie. Plătește doar ce folosește.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: Zap,
    title: 'Rapid',
    description: 'Implementare în 14–30 de zile. Zero infrastructură complexă necesară.',
    color: 'text-green-600',
    bg: 'bg-green-50',
  },
  {
    icon: Shield,
    title: 'Sigur',
    description: 'Date stocate în UE, conformitate GDPR, backup automat zilnic.',
    color: 'text-violet-600',
    bg: 'bg-violet-50',
  },
  {
    icon: Users,
    title: 'Familiar',
    description: 'Funcționează pe WhatsApp și Telegram — canale deja cunoscute de utilizatori.',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
]

export default function SolutionSection() {
  return (
    <section className="section bg-slate-50" id="solutie">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-green-600 font-semibold text-sm uppercase tracking-widest mb-3">
                Soluția
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-5 leading-tight">
                O suită modulară pe care o implementăm rapid,{' '}
                <span className="text-green-600">pe canale deja cunoscute</span>
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Platforma noastră oferă module digitale pe care le activăm pentru clienți pe rând,
                fără a schimba tot ce funcționează deja. Fiecare modul rezolvă o problemă concretă,
                imediat. Primăriile sunt printre clienții noștri principali — dar nu singurii.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  'Nu e nevoie de un departament IT intern la client',
                  'Echipele învață în 2 ore, nu 2 săptămâni',
                  'Beneficiarii folosesc WhatsApp și Telegram, deja instalate',
                  'Prețuri clare, fără surprize, fără costuri ascunse',
                  'Scalabil: adăugăm module pe măsură ce clientul crește',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {pillars.map((p) => (
                <div
                  key={p.title}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                >
                  <div className={`p-3 rounded-xl ${p.bg} inline-flex mb-4`}>
                    <p.icon className={`w-6 h-6 ${p.color}`} />
                  </div>
                  <h3 className="font-bold text-slate-800 mb-1">{p.title}</h3>
                  <p className="text-slate-500 text-sm">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
