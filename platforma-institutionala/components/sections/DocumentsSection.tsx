import { ScanLine, FileText, Search, Lock } from 'lucide-react'

const steps = [
  {
    step: '01',
    icon: ScanLine,
    title: 'Scanare',
    description: 'Documentele fizice sunt scanate cu echipamentul profesional din locație.',
  },
  {
    step: '02',
    icon: FileText,
    title: 'OCR & Indexare',
    description: 'Textul este recunoscut automat și documentul este indexat pentru căutare.',
  },
  {
    step: '03',
    icon: Search,
    title: 'Căutare rapidă',
    description: 'Orice document devine accesibil în câteva secunde prin căutare full-text.',
  },
  {
    step: '04',
    icon: Lock,
    title: 'Acces controlat',
    description: 'Accesul este gestionat pe categorii, cu istoric complet și trasabilitate.',
  },
]

export default function DocumentsSection() {
  return (
    <section className="section bg-white" id="documente">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-block text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Documente și arhivă digitală
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Motor de căutare pentru documente scanate
          </h2>
          <p className="text-lg text-slate-600">
            Sistem de indexare și căutare rapidă în documente scanate, cu acces controlat și
            trasabilitate completă. Arhiva fizică devine o resursă digitală accesibilă.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-14">
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-teal-100 z-0" />

          {steps.map((s) => (
            <div key={s.step} className="relative z-10 text-center">
              <div className="w-16 h-16 bg-teal-50 border-2 border-teal-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <s.icon className="w-7 h-7 text-teal-600" />
              </div>
              <span className="inline-block text-xs font-bold text-teal-500 mb-2 tracking-wide">
                {s.step}
              </span>
              <h3 className="font-bold text-slate-800 mb-2">{s.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-teal-50 border border-teal-200 rounded-2xl p-8 max-w-3xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              { value: 'Secunde', label: 'pentru găsirea unui document' },
              { value: 'Complet', label: 'istoric de acces și activitate' },
              { value: 'Automat', label: 'backup și securizare' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-xl font-extrabold text-teal-700 mb-1">{stat.value}</div>
                <div className="text-slate-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
