import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin', 'latin-ext'] })

export const metadata: Metadata = {
  title: {
    default: 'Platformă Digitală Instituțională',
    template: '%s | Platformă Digitală Instituțională',
  },
  description:
    'Platformă SaaS modulară pentru digitalizarea instituțiilor publice și a organizațiilor cu rol administrativ sau juridic. Implementare rapidă, fără infrastructură complexă.',
  keywords: [
    'digitalizare instituții publice',
    'software administrație publică',
    'platformă SaaS instituțională',
    'digitalizare organizații',
    'e-guvernare',
    'sesizări digitale',
    'monitorizare publică',
    'arhivă digitală',
  ],
  openGraph: {
    title: 'Platformă Digitală Instituțională',
    description:
      'Platformă SaaS modulară pentru digitalizarea instituțiilor publice și a organizațiilor cu rol administrativ sau juridic.',
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
