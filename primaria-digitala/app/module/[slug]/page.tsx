import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Check, ArrowRight, ArrowLeft, Users, Star, Package } from 'lucide-react'
import { clsx } from 'clsx'
import { getModuleBySlug, getModuleSlugs, modules } from '@/config/modules'
import ModuleIcon from '@/components/ui/ModuleIcon'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import CTASection from '@/components/sections/CTASection'
import FAQSection from '@/components/sections/FAQSection'
import ModuleCard from '@/components/ui/ModuleCard'
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
  if (!module) return { title: 'Modul negăsit' }

  return {
    title: module.title,
    description: module.longDescription,
  }
}

export default function ModulePage({ params }: Props) {
  const module = getModuleBySlug(params.slug)
  if (!module) notFound()

  const otherModules = modules.filter((m) => m.slug !== params.slug).slice(0, 3)
  const moduleFaq = faqItems.filter(
    (f) => f.category === 'general' || f.category === 'technical'
  )

  return (
    <>
      {/* Hero */}
      <section className={clsx('relative overflow-hidden py-16 md:py-20', module.bgColor)}>
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="relative container">
          <Link
            href="/#module"
            className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-800 mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Toate modulele
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="p-3 bg-white rounded-2xl shadow-sm border border-white/50">
                  <ModuleIcon name={module.icon} className={clsx('w-8 h-8', module.accentColor)} />
                </div>
                {module.tag && (
                  <Badge variant="amber">
                    <Star className="w-3 h-3" />
                    {module.tag}
                  </Badge>
                )}
                {module.popular && !module.tag && <Badge variant="blue">Cel mai solicitat</Badge>}
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
                {module.title}
              </h1>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">{module.longDescription}</p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button href="/contact" variant="primary" size="lg">
                  Solicită demo gratuit
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button href="/pricing" variant="outline" size="lg">
                  Vezi prețul
                </Button>
              </div>
            </div>

            {/* Price card */}
            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-7">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm text-slate-500 mb-1">Preț lunar</p>
                  <div className="flex items-end gap-1.5">
                    <span className="text-4xl font-extrabold text-slate-900">
                      {module.price.monthly} €
                    </span>
                    <span className="text-slate-400 mb-1">/lună</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-green-600 font-semibold">Cu plată anuală:</p>
                  <p className="text-2xl font-bold text-green-700">{module.price.annual} €</p>
                  <p className="text-xs text-slate-400">/lună · 2 luni gratuite</p>
                </div>
              </div>

              {module.price.note && (
                <p className="text-xs text-slate-500 mb-4 bg-slate-50 rounded-lg px-3 py-2">
                  ℹ️ {module.price.note}
                </p>
              )}

              <div className="space-y-2 mb-6">
                {module.features.map((f) => (
                  <div key={f} className="flex items-start gap-2.5">
                    <Check className={clsx('w-4 h-4 mt-0.5 shrink-0', module.accentColor)} />
                    <span className="text-sm text-slate-700">{f}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className={clsx(
                  'block text-center font-bold py-3.5 px-6 rounded-xl transition-colors',
                  'bg-blue-700 text-white hover:bg-blue-800'
                )}
              >
                Activează modulul
              </Link>

              <div className="mt-3 flex items-center gap-2">
                <Package className="w-4 h-4 text-slate-400" />
                <p className="text-xs text-slate-500">
                  Sau ia-l inclus în{' '}
                  <Link href="/pricing" className="text-blue-600 hover:underline">
                    Bundle-ul complet
                  </Link>{' '}
                  cu 40% reducere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Features */}
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-6 flex items-center gap-2">
                <span className={clsx('w-1 h-7 rounded-full inline-block', module.bgColor.replace('bg-', 'bg-').replace('-50', '-400'))}></span>
                Ce poți face cu acest modul
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

            {/* Benefits */}
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-6 flex items-center gap-2">
                <span className="w-1 h-7 rounded-full inline-block bg-green-400"></span>
                Beneficii concrete
              </h2>
              <div className="space-y-4">
                {module.benefits.map((b) => (
                  <div key={b} className="flex items-start gap-3">
                    <div className="p-1.5 bg-green-50 rounded-lg shrink-0">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <p className="text-slate-700">{b}</p>
                  </div>
                ))}
              </div>

              {/* For who */}
              <div className="mt-8">
                <h3 className="text-base font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <Users className="w-5 h-5 text-slate-400" />
                  Potrivit pentru:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {module.forWho.map((role) => (
                    <span
                      key={role}
                      className="px-3 py-1.5 bg-slate-100 text-slate-700 text-sm rounded-lg font-medium"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact form inline */}
      <section className="section-sm bg-slate-50">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-2">
                Solicită demo pentru {module.shortTitle}
              </h2>
              <p className="text-slate-600">
                Completează formularul și te contactăm în maximum 24 de ore.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8">
              <ContactForm defaultModuleId={module.id} defaultRequestType="demo" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        items={moduleFaq.slice(0, 5)}
        title={`Întrebări frecvente despre ${module.shortTitle}`}
        showCTA={false}
      />

      {/* Other modules */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="text-2xl font-extrabold text-slate-900 text-center mb-8">
            Alte module disponibile
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {otherModules.map((m) => (
              <ModuleCard key={m.id} module={m} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Button href="/#module" variant="outline" size="md">
              Vezi toate modulele
            </Button>
          </div>
        </div>
      </section>

      <CTASection
        title={`Activează ${module.shortTitle} pentru primăria ta`}
        subtitle="Implementare rapidă, suport dedicat, rezultate vizibile din prima lună."
      />
    </>
  )
}
