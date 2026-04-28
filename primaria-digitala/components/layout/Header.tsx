'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, Building2 } from 'lucide-react'
import { clsx } from 'clsx'
import { modules } from '@/config/modules'

const navLinks = [
  { label: 'Acasă', href: '/' },
  { label: 'Prețuri', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [modulesOpen, setModulesOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-blue-700 rounded-xl flex items-center justify-center group-hover:bg-blue-800 transition-colors">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <div className="hidden sm:block">
              <p className="font-extrabold text-slate-900 text-sm leading-tight">
                CityDock Digital
              </p>
              <p className="text-blue-600 text-xs font-semibold">Ușor de implementat</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              href="/"
              className={clsx(
                'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                pathname === '/' ? 'text-blue-700 bg-blue-50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              )}
            >
              Acasă
            </Link>

            {/* Modules dropdown */}
            <div className="relative">
              <button
                onClick={() => setModulesOpen(!modulesOpen)}
                onBlur={() => setTimeout(() => setModulesOpen(false), 150)}
                className={clsx(
                  'flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                  pathname.startsWith('/module')
                    ? 'text-blue-700 bg-blue-50'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                )}
              >
                Module
                <ChevronDown
                  className={clsx('w-4 h-4 transition-transform', modulesOpen && 'rotate-180')}
                />
              </button>

              {modulesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-72 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 z-50">
                  <div className="grid grid-cols-1 gap-0.5">
                    {modules.map((m) => (
                      <Link
                        key={m.id}
                        href={`/module/${m.slug}`}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                      >
                        <div className={clsx('p-1.5 rounded-lg', m.bgColor, 'shrink-0')}>
                          <span className={clsx('text-base', m.accentColor)}>•</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-700 group-hover:text-blue-700">
                            {m.shortTitle}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/pricing"
              className={clsx(
                'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                pathname === '/pricing' ? 'text-blue-700 bg-blue-50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              )}
            >
              Prețuri
            </Link>

            <Link
              href="/contact"
              className={clsx(
                'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                pathname === '/contact' ? 'text-blue-700 bg-blue-50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              )}
            >
              Contact
            </Link>
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-blue-800 transition-colors shadow-sm"
            >
              Solicită demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
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
            <p className="px-4 py-1 text-xs font-semibold text-slate-400 uppercase tracking-wide">
              Module
            </p>
            {modules.map((m) => (
              <Link
                key={m.id}
                href={`/module/${m.slug}`}
                className="block px-4 py-2 rounded-lg text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-700"
                onClick={() => setMobileOpen(false)}
              >
                {m.shortTitle}
              </Link>
            ))}
            <div className="pt-2 px-4">
              <Link
                href="/contact"
                className="block text-center bg-blue-700 text-white text-sm font-semibold px-5 py-3 rounded-xl hover:bg-blue-800 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Solicită demo gratuit
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
