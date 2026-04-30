import { PhoneCall, Settings, Rocket, Monitor } from 'lucide-react'

const steps = [
  {
    step: '01',
    icon: PhoneCall,
    title: 'Discuție inițială',
    description:
      'Contactați-ne sau completați formularul. Analizăm nevoile organizației și propunem configurația potrivită.',
    duration: '30 minute',
  },
  {
    step: '02',
    icon: Settings,
    title: 'Configurare și personalizare',
    description:
      'Echipa noastră configurează platforma cu datele și modelele instituției. Fără implicare tehnică din partea dvs.',
    duration: '5–10 zile',
  },
  {
    step: '03',
    icon: Rocket,
    title: 'Sesiune de prezentare',
    description:
      'O sesiune online de 2 ore cu echipa instituției. Prezentăm funcționalitățile și răspundem la orice întrebări.',
    duration: '1–2 zile',
  },
  {
    step: '04',
    icon: Monitor,
    title: 'Platforma în funcțiune',
    description:
      'Platforma este activă. Monitorizăm funcționarea și suntem disponibili prin telefon și email.',
    duration: 'Permanent',
  },
]

export default function ImplementationSection() {
  return (
    <section className="section bg-white" id="implementare">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-block text-blue-700 font-semibold text-sm uppercase tracking-widest mb-3">
            Implementare
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            De la prima discuție la instituție digitalizată{' '}
            <span className="text-blue-700">în 30 de zile</span>
          </h2>
          <p className="text-lg text-slate-600">
            Procesul de implementare este complet gestionat de echipa noastră. Instituția se
            concentrează pe activitatea sa, noi ne ocupăm de configurare și tehnologie.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-slate-200 via-blue-300 to-slate-200" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={s.step} className="relative text-center">
                <div className="flex justify-center mb-5">
                  <div className="relative">
                    <div className="w-16 h-16 bg-blue-800 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200">
                      <s.icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-6 h-6 bg-slate-700 rounded-full text-white text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>
                </div>

                <span className="inline-block bg-slate-100 text-slate-600 text-xs font-bold px-3 py-1 rounded-full mb-3">
                  {s.duration}
                </span>

                <h3 className="font-bold text-slate-800 mb-2">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 max-w-3xl mx-auto">
          {[
            { label: 'Zile de implementare', value: '14–30' },
            { label: 'Ore de prezentare necesare', value: '2' },
            { label: 'Infrastructură IT la client', value: '0' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center bg-slate-50 rounded-2xl p-6 border border-slate-100"
            >
              <div className="text-4xl font-extrabold text-blue-800 mb-1">{stat.value}</div>
              <div className="text-slate-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
