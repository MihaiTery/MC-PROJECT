'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Building2 } from 'lucide-react'
import { clsx } from 'clsx'

const navLinks = [
  { label: 'Acasă', href: '/' },
  { label: 'Pachet', href: '/#pachet' },
  { label: 'Prețuri', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-blue-800 rounded-xl flex items-center justify-center group-hover:bg-blue-900 transition-colors">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <div className="hidden sm:block">
              <p className="font-extrabold text-slate-900 text-sm leading-tight">
                CityDock Digital
              </p>
              <p className="text-blue-700 text-xs font-medium">Platformă Digitală Instituțională</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                  pathname === link.href.split('#')[0] && !link.href.includes('#')
                    ? 'text-blue-700 bg-blue-50'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              href="/contact"
              className="bg-blue-800 text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-blue-900 transition-colors shadow-sm"
            >
              Solicită o prezentare
            </Link>
          </div>

          <button
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t border-slate-100 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-700"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 px-4">
              <Link
                href="/contact"
                className="block text-center bg-blue-800 text-white text-sm font-semibold px-5 py-3 rounded-xl hover:bg-blue-900 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Solicită o prezentare
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
