import { Crown, Briefcase, Heart } from 'lucide-react'

const benefitGroups = [
  {
    icon: Crown,
    audience: 'Primari și viceprimari',
    color: 'text-blue-600',
    bg: 'bg-blue-600',
    lightBg: 'bg-blue-50',
    border: 'border-blue-200',
    benefits: [
      'Vizibilitate totală asupra activității primăriei',
      'Rapoarte automate de activitate lunară',
      'Imagine publică modernă și profesionistă',
      'Răspuns rapid la sesizări și probleme comunitare',
      'Argumente concrete pentru consiliul local',
      'Demonstrezi digitalizarea în fața cetățenilor',
    ],
    quote: '"Primarul vede rezultate concrete, nu promisiuni."',
  },
  {
    icon: Briefcase,
    audience: 'Funcționari publici',
    color: 'text-green-600',
    bg: 'bg-green-600',
    lightBg: 'bg-green-50',
    border: 'border-green-200',
    benefits: [
      'Mai puține telefoane repetitive și cereri la ghișeu',
      'Asistent AI juridic pentru întrebări procedurale',
      'Documente generate automat, fără erori',
      'Arhivă digitală – găsești orice în câteva secunde',
      'Flux clar pentru sesizări, nu haos',
      'Mai puțin stres, mai mult timp pentru muncă reală',
    ],
    quote: '"Funcționarii câștigă 2–3 ore productive în fiecare zi."',
  },
  {
    icon: Heart,
    audience: 'Cetățeni',
    color: 'text-rose-600',
    bg: 'bg-rose-600',
    lightBg: 'bg-rose-50',
    border: 'border-rose-200',
    benefits: [
      'Trimit sesizări din telefon, din orice loc',
      'Văd statusul sesizărilor în timp real',
      'Primesc informații pe WhatsApp și Telegram',
      'Nu mai stau la coadă pentru cereri simple',
      'Răspunsuri mai rapide la probleme',
      'Simt că primăria îi ascultă și reacționează',
    ],
    quote: '"Cetățenii devin parteneri activi ai comunității."',
  },
]

export default function BenefitsSection() {
  return (
    <section className="section bg-white" id="beneficii">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Beneficii
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Câștigă toată lumea din primărie
          </h2>
          <p className="text-lg text-slate-600">
            Digitalizarea nu e doar despre tehnologie. E despre timp câștigat, probleme rezolvate și
            o comunitate mai mulțumită.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
          {benefitGroups.map((group) => (
            <div
              key={group.audience}
              className={`rounded-2xl border ${group.border} overflow-hidden`}
            >
              {/* Header */}
              <div className={`${group.bg} px-6 py-5 flex items-center gap-3`}>
                <div className="p-2.5 bg-white/20 rounded-xl">
                  <group.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-white text-lg">{group.audience}</h3>
              </div>

              {/* Benefits */}
              <div className={`${group.lightBg} px-6 py-5`}>
                <ul className="space-y-3">
                  {group.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <span className={`${group.color} font-bold mt-0.5 shrink-0`}>✓</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quote */}
              <div className="bg-white px-6 py-4 border-t border-slate-100">
                <p className={`text-sm font-medium italic ${group.color}`}>{group.quote}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
