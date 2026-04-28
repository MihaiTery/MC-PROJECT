import { PhoneCall, Settings, Rocket, Smile } from 'lucide-react'

const steps = [
  {
    step: '01',
    icon: PhoneCall,
    title: 'Discuție inițială',
    description:
      'Clientul ne contactează sau completează formularul. Înțelegem nevoile organizației și propunem modulele potrivite.',
    duration: '30 minute',
  },
  {
    step: '02',
    icon: Settings,
    title: 'Configurare și personalizare',
    description:
      'Echipa noastră configurează modulele cu datele și modelele clientului. Fără implicare tehnică din partea acestuia.',
    duration: '5–10 zile',
  },
  {
    step: '03',
    icon: Rocket,
    title: 'Lansare și training scurt',
    description:
      'O sesiune online de 2 ore cu echipa clientului. Explicăm tot, răspundem la orice întrebare, fără jargon tehnic.',
    duration: '1–2 zile',
  },
  {
    step: '04',
    icon: Smile,
    title: 'Live. Rămânem alături.',
    description:
      'Organizația clientului e digitalizată. Monitorizăm sistemul și suntem disponibili oricând prin telefon și email.',
    duration: 'Ongoing',
  },
]

export default function PlugAndPlaySection() {
  return (
    <section className="section bg-slate-50" id="plug-play">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Plug & Play
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            De la prima discuție la organizație digitalizată{' '}
            <span className="text-blue-600">în 30 de zile</span>
          </h2>
          <p className="text-lg text-slate-600">
            Procesul nostru este simplu, rapid și complet gestionat de echipa noastră.
            Clientul se concentrează pe activitatea sa, noi ne ocupăm de tehnologie.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={s.step} className="relative text-center">
                <div className="flex justify-center mb-5">
                  <div className="relative">
                    <div className="w-16 h-16 bg-blue-700 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200">
                      <s.icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full text-white text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>
                </div>

                <span className="inline-block bg-blue-50 text-blue-600 text-xs font-bold px-3 py-1 rounded-full mb-3">
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
            { label: 'Ore de training necesar', value: '2' },
            { label: 'Echipamente de cumpărat', value: '0' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center bg-white rounded-2xl p-6 border border-slate-100 shadow-sm"
            >
              <div className="text-4xl font-extrabold text-blue-700 mb-1">{stat.value}</div>
              <div className="text-slate-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
