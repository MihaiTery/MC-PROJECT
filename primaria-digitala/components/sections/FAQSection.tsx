'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { clsx } from 'clsx'
import { faqItems, FAQItem } from '@/config/faq'
import Button from '@/components/ui/Button'

interface FAQItemProps {
  item: FAQItem
  isOpen: boolean
  onToggle: () => void
}

function FAQItemComponent({ item, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-slate-50 transition-colors"
      >
        <span className="font-semibold text-slate-800 text-sm md:text-base leading-snug">
          {item.question}
        </span>
        <ChevronDown
          className={clsx(
            'w-5 h-5 text-slate-400 shrink-0 mt-0.5 transition-transform duration-200',
            isOpen && 'rotate-180'
          )}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-5 bg-white border-t border-slate-100">
          <p className="text-slate-600 text-sm leading-relaxed pt-3">{item.answer}</p>
        </div>
      )}
    </div>
  )
}

interface FAQSectionProps {
  items?: FAQItem[]
  title?: string
  subtitle?: string
  showCTA?: boolean
}

export default function FAQSection({
  items = faqItems,
  title = 'Întrebări frecvente',
  subtitle = 'Răspunsuri clare la cele mai frecvente întrebări despre platformă și implementare.',
  showCTA = true,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="section bg-slate-50" id="faq">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{title}</h2>
          <p className="text-lg text-slate-600">{subtitle}</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {items.map((item, index) => (
            <FAQItemComponent
              key={item.question}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        {showCTA && (
          <div className="text-center mt-12">
            <p className="text-slate-600 mb-4">Nu ai găsit răspuns la întrebarea ta?</p>
            <Button href="/contact" variant="primary" size="lg">
              Discută cu un consultant
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
