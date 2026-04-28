import { Crown, Briefcase, Heart } from 'lucide-react'

const benefitGroups = [
  {
    icon: Crown,
    audience: 'Conducerea organizației',
    color: 'text-blue-600',
    bg: 'bg-blue-600',
    lightBg: 'bg-blue-50',
    border: 'border-blue-200',
    benefits: [
      'Vizibilitate totală asupra activității organizației',
      'Rapoarte automate de activitate lunară',
      'Imagine publică modernă și profesionistă',
      'Răspuns rapid la solicitări și probleme',
      'Argumente concrete pentru stakeholders și finanțatori',
      'Dovezi vizibile ale modernizării în fața comunității',
    ],
    quote: '"Conducerea vede rezultate concrete, nu promisiuni."',
    example: 'Ex. client: primar, viceprimar, director instituție',
  },
  {
    icon: Briefcase,
    audience: 'Echipele operative',
    color: 'text-green-600',
    bg: 'bg-green-600',
    lightBg: 'bg-green-50',
    border: 'border-green-200',
    benefits: [
      'Mai puține apeluri repetitive și vizite fizice',
      'Asistent AI pentru întrebări juridice și procedurale',
      'Documente generate automat, fără erori',
      'Arhivă digitală — găsești orice în câteva secunde',
      'Flux clar pentru solicitări, nu haos',
      'Mai puțin stres, mai mult timp pentru muncă reală',
    ],
    quote: '"Echipele câștigă 2–3 ore productive în fiecare zi."',
    example: 'Ex. client: funcționari, secretariat, departamente',
  },
  {
    icon: Heart,
    audience: 'Beneficiarii finali',
    color: 'text-rose-600',
    bg: 'bg-rose-600',
    lightBg: 'bg-rose-50',
    border: 'border-rose-200',
    benefits: [
      'Trimit solicitări din telefon, din orice loc',
      'Văd statusul cererilor în timp real',
      'Primesc informații pe WhatsApp și Telegram',
      'Nu mai stau la coadă pentru cereri simple',
      'Răspunsuri mai rapide la probleme',
      'Simt că organizația îi ascultă și reacționează',
    ],
    quote: '"Beneficiarii devin parteneri activi, nu spectatori."',
    example: 'Ex. client: cetățeni ai comunei, publicul larg',
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
            Câștigă toate părțile implicate
          </h2>
          <p className="text-lg text-slate-600">
            Digitalizarea nu e doar despre tehnologie. E despre timp câștigat, probleme rezolvate
            și o relație mai bună între organizație și beneficiarii săi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
          {benefitGroups.map((group) => (
            <div
              key={group.audience}
              className={`rounded-2xl border ${group.border} overflow-hidden`}
            >
              <div className={`${group.bg} px-6 py-5 flex items-center gap-3`}>
                <div className="p-2.5 bg-white/20 rounded-xl">
                  <group.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">{group.audience}</h3>
                  <p className="text-white/70 text-xs mt-0.5">{group.example}</p>
                </div>
              </div>

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
