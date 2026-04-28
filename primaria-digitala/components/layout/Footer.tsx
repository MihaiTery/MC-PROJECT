import Link from 'next/link'
import { Building2, Phone, Mail, MapPin } from 'lucide-react'
import { modules } from '@/config/modules'

const footerLinks = {
  platform: [
    { label: 'Toate modulele', href: '/#module' },
    { label: 'Prețuri', href: '/pricing' },
    { label: 'Implementare', href: '/#plug-play' },
    { label: 'Beneficii', href: '/#beneficii' },
    { label: 'FAQ', href: '/#faq' },
  ],
  company: [
    { label: 'Despre noi', href: '/contact' },
    { label: 'Contact', href: '/contact' },
    { label: 'Solicită prezentare', href: '/contact' },
    { label: 'Cere ofertă', href: '/contact' },
  ],
  legal: [
    { label: 'Politică de confidențialitate', href: '#' },
    { label: 'Termeni și condiții', href: '#' },
    { label: 'GDPR & Date personale', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="container">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-extrabold text-white text-sm leading-tight">
                  Primăria Digitală
                </p>
                <p className="text-blue-400 text-xs font-semibold">Ușor de implementat</p>
              </div>
            </Link>

            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              Platformă SaaS modulară pentru digitalizarea instituțiilor și organizațiilor publice
              din România. Primăriile sunt clientul nostru principal — dar nu singurul.
            </p>

            <div className="space-y-2.5">
              <a
                href="tel:+40700000000"
                className="flex items-center gap-2.5 text-sm hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                +40 700 000 000
              </a>
              <a
                href="mailto:contact@primariadigitala.ro"
                className="flex items-center gap-2.5 text-sm hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                contact@primariadigitala.ro
              </a>
              <div className="flex items-start gap-2.5 text-sm">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>România</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Module</h4>
            <ul className="space-y-2.5">
              {modules.map((m) => (
                <li key={m.id}>
                  <Link
                    href={`/module/${m.slug}`}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {m.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Platformă</h4>
            <ul className="space-y-2.5">
              {footerLinks.platform.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-white font-semibold text-sm mt-7 mb-4">Companie</h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="bg-blue-900/50 border border-blue-800/50 rounded-2xl p-5">
              <h4 className="text-white font-bold mb-2">Lucrăm împreună?</h4>
              <p className="text-sm text-blue-300 mb-4">
                Solicită o prezentare gratuită și discutăm despre nevoile organizației tale.
              </p>
              <Link
                href="/contact"
                className="block text-center bg-blue-600 text-white text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-500 transition-colors"
              >
                Solicită prezentare
              </Link>
            </div>

            <h4 className="text-white font-semibold text-sm mt-6 mb-3">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-xs hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs">
            © {new Date().getFullYear()} Primăria Digitală Plug & Play. Toate drepturile rezervate.
          </p>
          <p className="text-xs">
            Construit cu ❤️ pentru administrația publică din România
          </p>
        </div>
      </div>
    </footer>
  )
}
