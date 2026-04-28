import { TrendingUp, Wallet, Timer, ShieldCheck, BarChart3, Handshake } from 'lucide-react'

const reasons = [
  {
    icon: Wallet,
    title: 'Prețuri gândite pentru bugetele locale',
    description:
      'Nu ești o multinațională – știm asta. Prețurile noastre pornesc de la 49€/lună și se adaptează dimensiunii comunei tale.',
  },
  {
    icon: Timer,
    title: 'Implementare fără lungă pregătire',
    description:
      'Un modul se activează în 14–30 de zile. Fără proiecte de 2 ani, fără consultanți externi scumpi, fără nopți nedormite.',
  },
  {
    icon: ShieldCheck,
    title: 'Fără infrastructură IT internă',
    description:
      'Tot funcționează în cloud. Nu ai nevoie de servere, IT-ist sau rețea complicată. Noi gestionăm tot.',
  },
  {
    icon: TrendingUp,
    title: 'Rezultate vizibile imediat',
    description:
      'Sesizări tratate, cetățeni mai mulțumiți, funcționari mai eficienți – primarul vede și poate prezenta rezultate concrete.',
  },
  {
    icon: BarChart3,
    title: 'Transparență și raportare',
    description:
      'Dashboard-uri clare cu statistici: câte sesizări, câte rezolvate, timp mediu de răspuns – date reale pentru rapoarte de activitate.',
  },
  {
    icon: Handshake,
    title: 'Suport dedicat în limba română',
    description:
      'Nu ești singur. Ai un manager de cont și o echipă de suport care răspund în aceeași zi, în română, fără jargon tehnic.',
  },
]

export default function WhySmallTowns() {
  return (
    <section className="section bg-gradient-to-br from-blue-950 to-blue-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-100" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl" />

      <div className="relative container">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-block text-green-400 font-semibold text-sm uppercase tracking-widest mb-3">
            De ce pentru comune mici?
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Construit special pentru realitatea{' '}
            <span className="text-green-400">primăriilor mici din România</span>
          </h2>
          <p className="text-blue-200 text-lg">
            Nu suntem o soluție enterprise adaptată. Suntem o soluție gândită de la zero pentru
            comune cu 1.000–20.000 de locuitori.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-colors"
            >
              <div className="p-3 bg-white/15 rounded-xl inline-flex mb-4">
                <r.icon className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="font-bold text-white mb-2">{r.title}</h3>
              <p className="text-blue-200 text-sm leading-relaxed">{r.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-3xl mx-auto text-center">
          <p className="text-2xl font-bold text-white mb-2">
            &ldquo;Primăria noastră a redus apelurile telefonice cu 60% în prima lună.&rdquo;
          </p>
          <p className="text-blue-300 text-sm">
            — Primar, comună din județul Cluj, ~4.200 locuitori
          </p>
        </div>
      </div>
    </section>
  )
}
