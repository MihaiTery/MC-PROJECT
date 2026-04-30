import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Check, ArrowLeft, Users } from 'lucide-react'
import { clsx } from 'clsx'
import { getModuleBySlug, getModuleSlugs } from '@/config/modules'
import ModuleIcon from '@/components/ui/ModuleIcon'
import Button from '@/components/ui/Button'
import CTASection from '@/components/sections/CTASection'
import FAQSection from '@/components/sections/FAQSection'
import ContactForm from '@/components/ui/ContactForm'
import { faqItems } from '@/config/faq'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return getModuleSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const module = getModuleBySlug(params.slug)
  if (!module) return { title: 'Componentă negăsită' }

  return {
    title: module.title,
    description: module.longDescription,
  }
}

export default function ModulePage({ params }: Props) {
  const module = getModuleBySlug(params.slug)
  if (!module) notFound()

  const moduleFaq = faqItems.filter(
    (f) => f.category === 'general' || f.category === 'technical'
  )

  return (
    <>
      <section className={clsx('relative overflow-hidden py-16 md:py-20', module.bgColor)}>
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="relative container">
          <Link
            href="/#pachet"
            className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-800 mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Înapoi la pachet
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="p-3 bg-white rounded-2xl shadow-sm border border-white/50">
                  <ModuleIcon name={module.icon} className={clsx('w-8 h-8', module.accentColor)} />
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
                {module.title}
              </h1>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">{module.longDescription}</p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button href="/contact" variant="primary" size="lg">
                  Solicită o prezentare
                </Button>
                <Button href="/pricing" variant="outline" size="lg">
                  Vezi abonamentul
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-7">
              <div className="flex items-center gap-2 mb-5">
                <div className={clsx('p-2 rounded-lg', module.bgColor)}>
                  <ModuleIcon name={module.icon} className={clsx('w-5 h-5', module.accentColor)} />
                </div>
                <span className="text-sm font-semibold text-slate-700">Componentă inclusă în pachetul complet</span>
              </div>

              <div className="space-y-2.5 mb-6">
                {module.features.map((f) => (
                  <div key={f} className="flex items-start gap-2.5">
                    <Check className={clsx('w-4 h-4 mt-0.5 shrink-0', module.accentColor)} />
                    <span className="text-sm text-slate-700">{f}</span>
                  </div>
                ))}
              </div>

              <div className="bg-slate-50 rounded-xl p-4 text-sm text-slate-600">
                Această componentă face parte din abonamentul unic al platformei. Nu există cost
                separat per componentă.{' '}
                <Link href="/pricing" className={clsx('font-semibold hover:underline', module.accentColor)}>
                  Vezi structura de prețuri.
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-6">
                Funcționalități
              </h2>
              <div className="space-y-3">
                {module.features.map((f, i) => (
                  <div
                    key={f}
                    className={clsx(
                      'flex items-start gap-4 p-4 rounded-xl border',
                      module.bgColor,
                      module.borderColor
                    )}
                  >
                    <span
                      className={clsx(
                        'w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0',
                        module.accentColor.replace('text-', 'bg-')
                      )}
                    >
                      {i + 1}
                    </span>
                    <span className="text-slate-800 text-sm font-medium">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-base font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-slate-400" />
                Potrivit pentru:
              </h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {module.forWho.map((role) => (
                  <span
                    key={role}
                    className={clsx('px-3 py-1.5 rounded-lg text-sm font-medium', module.bgColor, module.accentColor)}
                  >
                    {role}
                  </span>
                ))}
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                <p className="text-sm font-semibold text-slate-700 mb-2">Parte din pachetul complet</p>
                <p className="text-sm text-slate-600 mb-4">
                  Această componentă este inclusă împreună cu celelalte 6 componente ale platformei
                  într-un abonament lunar unic.
                </p>
                <Link
                  href="/pricing"
                  className="text-sm font-semibold text-blue-700 hover:underline"
                >
                  Consultați structura de abonament →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm bg-slate-50">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-2">
                Solicitați o prezentare
              </h2>
              <p className="text-slate-600">
                Completați formularul și vă contactăm în maximum 24 de ore.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8">
              <ContactForm defaultRequestType="presentation" />
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        items={moduleFaq.slice(0, 5)}
        title="Întrebări frecvente"
        showCTA={false}
      />

      <CTASection
        title="Discutați despre implementare"
        subtitle="Prezentăm platforma complet și discutăm configurația potrivită pentru organizația dvs."
        variant="light"
      />
    </>
  )
}
