import { BarChart2, Bell, Search, TrendingUp } from 'lucide-react'

const cards = [
  {
    icon: BarChart2,
    title: 'Analiză structurată',
    description: 'Date organizate despre mențiunile instituției în spațiul public digital.',
  },
  {
    icon: Bell,
    title: 'Alerte automate',
    description: 'Notificări imediate la apariția unor mențiuni relevante sau sensibile.',
  },
  {
    icon: Search,
    title: 'Monitorizare continuă',
    description: 'Scanare automată a surselor relevante: social media și presă online.',
  },
  {
    icon: TrendingUp,
    title: 'Teme recurente',
    description: 'Identificarea subiectelor care apar frecvent în discuțiile publice.',
  },
]

export default function MonitoringSection() {
  return (
    <section
      className="section bg-gradient-to-br from-slate-900 to-blue-950 text-white relative overflow-hidden"
      id="monitorizare"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-100" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="relative container">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-blue-300 font-semibold text-sm uppercase tracking-widest mb-3">
                Monitorizare publică
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-5 leading-tight">
                Barometru instituțional și monitorizare a spațiului public digital
              </h2>
              <p className="text-slate-300 text-lg mb-6">
                Sistem de monitorizare a mențiunilor relevante din spațiul public digital, care
                furnizează informații structurate pentru luarea deciziilor de comunicare.
              </p>
              <ul className="space-y-3">
                {[
                  'Monitorizare social media',
                  'Monitorizare presă online',
                  'Alerte de mențiuni relevante',
                  'Identificare teme recurente',
                  'Suport pentru decizie și comunicare',
                  'Raport periodic de activitate',
                ].map((f) => (
                  <li key={f} className="flex items-center gap-3 text-slate-300 text-sm">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {cards.map((card) => (
                <div
                  key={card.title}
                  className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-5"
                >
                  <div className="p-2.5 bg-white/15 rounded-xl inline-flex mb-3">
                    <card.icon className="w-5 h-5 text-blue-300" />
                  </div>
                  <h3 className="font-bold text-white mb-1 text-sm">{card.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
