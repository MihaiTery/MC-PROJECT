import { Phone, FileX, AlertCircle, Clock, Building2, Frown } from 'lucide-react'

const problems = [
  {
    icon: FileX,
    title: 'Hârtie și dosare fizice',
    description: 'Tone de cereri, registre și dosare care necesită ore de căutare și risc de pierdere.',
    color: 'text-red-500',
    bg: 'bg-red-50',
  },
  {
    icon: Phone,
    title: 'Telefoane repetitive',
    description: 'Aceleași întrebări despre program, taxe și acte, care consumă timpul echipelor.',
    color: 'text-orange-500',
    bg: 'bg-orange-50',
  },
  {
    icon: AlertCircle,
    title: 'Solicitări pierdute',
    description: 'Reclamații și sesizări care ajung pe hârtii volante și dispar fără rezolvare.',
    color: 'text-rose-500',
    bg: 'bg-rose-50',
  },
  {
    icon: Clock,
    title: 'Timp pierdut la ghișeu',
    description: 'Beneficiari care vin fizic pentru cereri simple ce pot fi rezolvate online.',
    color: 'text-amber-500',
    bg: 'bg-amber-50',
  },
  {
    icon: Building2,
    title: 'Presiunea digitalizării',
    description: 'Reglementări care impun digitalizarea, fără buget sau suport tehnic adecvat.',
    color: 'text-violet-500',
    bg: 'bg-violet-50',
  },
  {
    icon: Frown,
    title: 'Beneficiari nemulțumiți',
    description: 'Lipsa comunicării clare și a transparenței duce la frustrare și neîncredere.',
    color: 'text-slate-500',
    bg: 'bg-slate-50',
  },
]

export default function ProblemSection() {
  return (
    <section className="section bg-white" id="problema">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-block text-red-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Provocarea
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Instituțiile sunt prinse între{' '}
            <span className="text-red-600">hârtie, telefoane</span> și presiunea digitalizării
          </h2>
          <p className="text-lg text-slate-600">
            Echipele din organizații publice — primării, instituții locale, entități administrative
            — se confruntă zilnic cu o realitate dificilă: solicitări în creștere, resurse limitate
            și o nevoie urgentă de modernizare, fără soluții accesibile și rapide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((p) => (
            <div
              key={p.title}
              className="flex items-start gap-4 p-5 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`p-2.5 rounded-xl ${p.bg} shrink-0`}>
                <p.icon className={`w-5 h-5 ${p.color}`} />
              </div>
              <div>
                <h3 className="font-semibold text-slate-800 mb-1">{p.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{p.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-red-50 to-orange-50 border border-red-100 rounded-2xl p-8 text-center max-w-3xl mx-auto">
          <p className="text-xl font-bold text-slate-800 mb-2">
            „Știm că digitalizarea e necesară, dar nu știm de unde să începem."
          </p>
          <p className="text-slate-600">
            Aceasta este realitatea majorității organizațiilor publice cu care lucrăm — primării,
            instituții locale, entități administrative. Suntem aici tocmai pentru a schimba asta.
          </p>
        </div>
      </div>
    </section>
  )
}
