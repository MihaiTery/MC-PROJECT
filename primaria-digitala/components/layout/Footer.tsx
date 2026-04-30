import Link from 'next/link'
import { Building2, Phone, Mail, MapPin } from 'lucide-react'

const footerLinks = {
  platform: [
    { label: 'Ce include pachetul', href: '/#pachet' },
    { label: 'Sistem de sesizări', href: '/#sesizari' },
    { label: 'Comunicare digitală', href: '/#comunicare' },
    { label: 'Monitorizare publică', href: '/#monitorizare' },
    { label: 'Documente și arhivă', href: '/#documente' },
    { label: 'Hardware & Scanare', href: '/#hardware' },
    { label: 'Prețuri', href: '/pricing' },
    { label: 'Implementare', href: '/#implementare' },
    { label: 'FAQ', href: '/#faq' },
  ],
  company: [
    { label: 'Contact', href: '/contact' },
    { label: 'Solicită o prezentare', href: '/contact' },
    { label: 'Discută cu un consultant', href: '/contact' },
    { label: 'Cere detalii despre implementare', href: '/contact' },
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
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-blue-700 rounded-xl flex items-center justify-center">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-extrabold text-white text-sm leading-tight">
                  CityDock Digital
                </p>
                <p className="text-blue-400 text-xs font-medium">Platformă Digitală Instituțională</p>
              </div>
            </Link>

            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              Platformă SaaS modulară pentru digitalizarea instituțiilor publice și a
              organizațiilor cu rol administrativ sau juridic din România.
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
                href="mailto:contact@citydock.ro"
                className="flex items-center gap-2.5 text-sm hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                contact@citydock.ro
              </a>
              <div className="flex items-start gap-2.5 text-sm">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>România</span>
              </div>
            </div>
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
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Contact</h4>
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
            <div className="bg-blue-900/50 border border-blue-800/50 rounded-2xl p-5 mb-6">
              <h4 className="text-white font-bold mb-2">Programați o discuție</h4>
              <p className="text-sm text-blue-300 mb-4">
                Discutăm despre nevoile organizației și propunem o configurație potrivită.
              </p>
              <Link
                href="/contact"
                className="block text-center bg-blue-600 text-white text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-500 transition-colors"
              >
                Solicită o prezentare
              </Link>
            </div>

            <h4 className="text-white font-semibold text-sm mb-3">Legal</h4>
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
            © {new Date().getFullYear()} CityDock Digital. Toate drepturile rezervate.
          </p>
          <p className="text-xs">
            Platformă dedicată administrației publice din România
          </p>
        </div>
      </div>
    </footer>
  )
}
