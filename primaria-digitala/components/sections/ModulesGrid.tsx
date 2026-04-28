import { modules } from '@/config/modules'
import ModuleCard from '@/components/ui/ModuleCard'
import Button from '@/components/ui/Button'

export default function ModulesGrid() {
  return (
    <section className="section bg-white" id="module">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Modulele platformei
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            8 module care transformă primăria ta
          </h2>
          <p className="text-lg text-slate-600">
            Fiecare modul rezolvă o problemă reală, imediat. Poți activa unul sau toate. Plătești
            doar ce folosești.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {modules.map((module) => (
            <ModuleCard key={module.id} module={module} />
          ))}
        </div>

        <div className="text-center flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/pricing" variant="primary" size="lg">
            Vezi prețurile
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Solicită ofertă personalizată
          </Button>
        </div>
      </div>
    </section>
  )
}
