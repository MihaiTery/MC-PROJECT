import type { Metadata } from 'next'
import { Phone, Mail, Clock, Shield } from 'lucide-react'
import ContactForm from '@/components/ui/ContactForm'

export const metadata: Metadata = {
  title: 'Contact & Demo',
  description:
    'Solicită un demo gratuit sau o ofertă personalizată pentru digitalizarea primăriei tale.',
}

const trustItems = [
  { icon: Clock, text: 'Răspundem în max. 24 ore' },
  { icon: Shield, text: 'Date securizate GDPR' },
  { icon: Phone, text: 'Consultant dedicat în română' },
  { icon: Mail, text: 'Fără spam, fără obligații' },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-14 md:py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Hai să vorbim despre primăria ta
            </h1>
            <p className="text-blue-200 text-lg">
              Fără jargon tehnic, fără presiune. Doar o discuție despre ce poți îmbunătăți și cum te
              putem ajuta.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
            {/* Left info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-xl font-bold text-slate-800 mb-2">Contactează-ne direct</h2>
                <p className="text-slate-600 text-sm">
                  Preferi să vorbim direct? Suntem disponibili în zilele lucrătoare.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="tel:+40700000000"
                  className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-300 transition-colors group"
                >
                  <div className="p-2.5 bg-blue-50 rounded-xl">
                    <Phone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Telefon</p>
                    <p className="font-semibold text-slate-800 group-hover:text-blue-700">
                      +40 700 000 000
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:contact@primariadigitala.ro"
                  className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-300 transition-colors group"
                >
                  <div className="p-2.5 bg-blue-50 rounded-xl">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Email</p>
                    <p className="font-semibold text-slate-800 group-hover:text-blue-700 text-sm">
                      contact@primariadigitala.ro
                    </p>
                  </div>
                </a>
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-700 mb-3">De ce să ne contactezi?</p>
                <div className="space-y-2.5">
                  {trustItems.map((item) => (
                    <div key={item.text} className="flex items-center gap-2.5">
                      <div className="p-1.5 bg-green-50 rounded-lg">
                        <item.icon className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-sm text-slate-600">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
                <p className="text-sm font-semibold text-blue-800 mb-1">Program consultanți</p>
                <p className="text-sm text-blue-700">Luni – Vineri: 09:00 – 18:00</p>
                <p className="text-xs text-blue-500 mt-2">
                  Formularele trimise în weekend sunt procesate luni dimineața.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8">
                <h2 className="text-xl font-bold text-slate-800 mb-1">Trimite-ne o solicitare</h2>
                <p className="text-slate-500 text-sm mb-6">
                  Completează formularul și te contactăm în maximum 24 de ore.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
