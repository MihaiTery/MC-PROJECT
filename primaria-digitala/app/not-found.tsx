import Link from 'next/link'
import { Building2, Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center px-4">
        <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Building2 className="w-8 h-8 text-blue-600" />
        </div>
        <h1 className="text-5xl font-extrabold text-slate-900 mb-3">404</h1>
        <h2 className="text-xl font-bold text-slate-700 mb-4">Pagina nu a fost găsită</h2>
        <p className="text-slate-500 mb-8 max-w-sm mx-auto">
          Pagina pe care o cauți nu există sau a fost mutată.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-800 transition-colors"
        >
          <Home className="w-4 h-4" />
          Înapoi acasă
        </Link>
      </div>
    </div>
  )
}
