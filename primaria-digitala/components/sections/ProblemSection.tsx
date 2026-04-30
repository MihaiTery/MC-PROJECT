import { Building2, Scale, Users, Landmark } from 'lucide-react'

const audiences = [
  {
    icon: Building2,
    title: 'Primării și consilii locale',
    description:
      'Instituții administrative locale care gestionează relația cu cetățenii, documentele oficiale și comunicarea publică.',
    color: 'text-blue-700',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
  },
  {
    icon: Landmark,
    title: 'Instituții publice locale',
    description:
      'Entități cu atribuții administrative la nivel local sau județean care procesează solicitări și gestionează arhive de documente.',
    color: 'text-indigo-700',
    bg: 'bg-indigo-50',
    border: 'border-indigo-200',
  },
  {
    icon: Scale,
    title: 'Organizații cu rol juridic',
    description:
      'Structuri cu responsabilități juridice sau administrative care necesită trasabilitate, control al documentelor și conformitate.',
    color: 'text-violet-700',
    bg: 'bg-violet-50',
    border: 'border-violet-200',
  },
  {
    icon: Users,
    title: 'Organizații cu beneficiari publici',
    description:
      'Orice organizație care gestionează o relație formalizată cu un public larg și are nevoi de comunicare, raportare și arhivare.',
    color: 'text-teal-700',
    bg: 'bg-teal-50',
    border: 'border-teal-200',
  },
]

export default function ForWhoSection() {
  return (
    <section className="section bg-white" id="cui-se-adreseaza">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-block text-blue-700 font-semibold text-sm uppercase tracking-widest mb-3">
            Cui se adresează
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            O soluție pentru orice instituție cu responsabilități publice
          </h2>
          <p className="text-lg text-slate-600">
            Platforma este destinată instituțiilor publice și organizațiilor cu rol administrativ
            sau juridic, indiferent de dimensiune sau structură internă.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {audiences.map((a) => (
            <div
              key={a.title}
              className={`flex items-start gap-5 p-6 rounded-2xl border ${a.border} ${a.bg}`}
            >
              <div className="p-3 bg-white rounded-xl shadow-sm shrink-0">
                <a.icon className={`w-6 h-6 ${a.color}`} />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 mb-2">{a.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{a.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-slate-50 border border-slate-200 rounded-2xl p-8 text-center max-w-3xl mx-auto">
          <p className="text-slate-700 text-lg leading-relaxed">
            Platforma se adaptează la structura și nevoile specifice ale fiecărei organizații.
            Fiecare implementare este configurată individual.
          </p>
        </div>
      </div>
    </section>
  )
}
