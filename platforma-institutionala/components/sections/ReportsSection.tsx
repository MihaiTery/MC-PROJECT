import { MapPin, Camera, ClipboardList, MessageSquare } from 'lucide-react'

const cards = [
  {
    icon: MapPin,
    title: 'Locație exactă',
    description: 'Utilizatorul transmite sesizarea cu coordonate GPS precise, eliminând ambiguitatea localizării.',
  },
  {
    icon: Camera,
    title: 'Fotografie atașată',
    description: 'Problemele sunt documentate vizual, direct din dispozitiv, fără pași suplimentari.',
  },
  {
    icon: ClipboardList,
    title: 'Organizare internă',
    description: 'Sesizările sunt structurate automat și asignate intern, conform fluxurilor instituției.',
  },
  {
    icon: MessageSquare,
    title: 'Comunicare pentru clarificări',
    description: 'Instituția poate solicita informații suplimentare direct prin același canal.',
  },
]

export default function ReportsSection() {
  return (
    <section className="section bg-white" id="sesizari">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div>
            <span className="inline-block text-amber-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Sistem de sesizări
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-5 leading-tight">
              Sesizări clare, cu poză și locație
            </h2>
            <p className="text-lg text-slate-600 mb-7">
              Sistem prin care utilizatorii pot transmite sesizări însoțite de fotografie și locație,
              pentru identificarea rapidă a problemelor și gestionarea eficientă la nivel instituțional.
            </p>
            <ul className="space-y-3">
              {[
                'Transmitere sesizare cu locație precisă',
                'Atașare fotografie din dispozitiv',
                'Organizare internă a cazurilor',
                'Comunicare pentru clarificări',
                'Urmărire status sesizare',
                'Raportare periodică a sesizărilor rezolvate',
              ].map((f) => (
                <li key={f} className="flex items-center gap-3 text-slate-700 text-sm">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {cards.map((card) => (
              <div key={card.title} className="bg-amber-50 border border-amber-100 rounded-2xl p-5">
                <div className="p-2.5 bg-white rounded-xl inline-flex mb-3 shadow-sm">
                  <card.icon className="w-5 h-5 text-amber-600" />
                </div>
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{card.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
