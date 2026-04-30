import { Zap, Users, Bell, Settings } from 'lucide-react'

const cards = [
  {
    icon: Zap,
    title: 'Răspuns automat',
    description: 'Mesaje automate de întâmpinare și direcționare, active permanent.',
  },
  {
    icon: Users,
    title: 'Canale familiare',
    description: 'Comunicare prin interfețe de mesagerie deja utilizate de cetățeni și angajați.',
  },
  {
    icon: Bell,
    title: 'Distribuire informații',
    description: 'Transmiterea rapidă a anunțurilor și actualizărilor relevante.',
  },
  {
    icon: Settings,
    title: 'Configurare adaptată',
    description: 'Fluxuri personalizate după structura și nevoile instituției.',
  },
]

export default function CommunicationSection() {
  return (
    <section className="section bg-slate-50" id="comunicare">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
            {cards.map((card) => (
              <div key={card.title} className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                <div className="p-2.5 bg-blue-50 rounded-xl inline-flex mb-3">
                  <card.icon className="w-5 h-5 text-blue-700" />
                </div>
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{card.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>

          <div className="order-1 lg:order-2">
            <span className="inline-block text-blue-700 font-semibold text-sm uppercase tracking-widest mb-3">
              Comunicare digitală
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-5 leading-tight">
              Canale digitale de comunicare automatizată
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              Canale oficiale de comunicare prin aplicații de mesagerie utilizate deja de cetățeni
              și angajați, configurate pentru transmiterea rapidă a informațiilor și automatizarea
              interacțiunilor de bază.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
              <p className="text-sm text-slate-700 leading-relaxed">
                <strong className="text-blue-800">Fără adoptare nouă.</strong>{' '}
                Platforma utilizează canale de comunicare deja familiare utilizatorilor, eliminând
                bariera de adoptare și necesitatea instalării de aplicații suplimentare.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
