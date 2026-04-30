'use client'

import { useState } from 'react'
import { CheckCircle, Send, Loader2 } from 'lucide-react'

interface FormData {
  name: string
  email: string
  phone: string
  institution: string
  role: string
  message: string
  requestType: 'presentation' | 'details' | 'consultant'
}

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  institution: '',
  role: '',
  message: '',
  requestType: 'presentation',
}

const roleOptions = [
  'Director / Manager',
  'Primar',
  'Secretar general',
  'Funcționar public',
  'Responsabil comunicare',
  'Consilier juridic',
  'Alt rol',
]

const requestTypeLabels = {
  presentation: 'Solicită o prezentare',
  details: 'Cere detalii',
  consultant: 'Discută cu un consultant',
}

interface ContactFormProps {
  defaultRequestType?: 'presentation' | 'details' | 'consultant'
}

export default function ContactForm({ defaultRequestType = 'presentation' }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    ...initialFormData,
    requestType: defaultRequestType,
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!formData.name || !formData.email || !formData.institution) {
      setError('Completați câmpurile obligatorii.')
      return
    }

    setLoading(true)
    await new Promise((r) => setTimeout(r, 1500))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-12 px-6">
        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-9 h-9 text-blue-600" />
        </div>
        <h3 className="text-2xl font-bold text-slate-800 mb-2">Solicitarea a fost înregistrată</h3>
        <p className="text-slate-600 mb-2">
          Mulțumim, <strong>{formData.name}</strong>.
        </p>
        <p className="text-slate-500 text-sm">
          Un consultant va lua legătura cu <strong>{formData.institution}</strong> în maximum 24 de ore.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="flex gap-2 p-1 bg-slate-100 rounded-xl">
        {(['presentation', 'details', 'consultant'] as const).map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => setFormData((prev) => ({ ...prev, requestType: type }))}
            className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all ${
              formData.requestType === type
                ? 'bg-white shadow-sm text-blue-700'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            {requestTypeLabels[type]}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Nume complet <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
            placeholder="Ion Popescu"
            className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
            placeholder="ion.popescu@organizatie.ro"
            className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Organizație / Instituție <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.institution}
            onChange={(e) => setFormData((p) => ({ ...p, institution: e.target.value }))}
            placeholder="ex. Instituția / Organizația"
            className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Telefon</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))}
            placeholder="07xx xxx xxx"
            className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Funcție / Rol</label>
        <select
          value={formData.role}
          onChange={(e) => setFormData((p) => ({ ...p, role: e.target.value }))}
          className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
        >
          <option value="">Selectați funcția</option>
          {roleOptions.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Mesaj / Întrebări
        </label>
        <textarea
          rows={3}
          value={formData.message}
          onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
          placeholder="Descrieți pe scurt situația actuală a organizației și ce doriți să îmbunătățiți..."
          className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
        />
      </div>

      {error && (
        <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-3 py-2">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 bg-blue-800 text-white font-bold py-3.5 px-6 rounded-xl hover:bg-blue-900 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Se trimite...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Trimite solicitarea
          </>
        )}
      </button>

      <p className="text-xs text-slate-400 text-center">
        Datele sunt securizate și nu vor fi partajate cu terți. Răspundem în maximum 24 de ore.
      </p>
    </form>
  )
}
