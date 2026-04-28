import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin', 'latin-ext'] })

export const metadata: Metadata = {
  title: {
    default: 'Primăria Digitală Plug & Play',
    template: '%s | Primăria Digitală Plug & Play',
  },
  description:
    'Digitalizarea primăriei tale, fără infrastructură complicată, fără training greu, fără costuri mari. Soluții modulare pentru comune și orașe mici din România.',
  keywords: [
    'digitalizare primărie',
    'software primărie',
    'comune mici România',
    'administrație publică digitală',
    'e-guvernare',
    'SaaS B2G',
  ],
  openGraph: {
    title: 'Primăria Digitală Plug & Play',
    description: 'Digitalizarea primăriei tale, simplu și rapid.',
    locale: 'ro_RO',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
