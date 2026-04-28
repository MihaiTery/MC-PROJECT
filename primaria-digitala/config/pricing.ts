import { totalMonthlyIndividual, totalAnnualIndividual } from './modules'

export interface BundlePricing {
  monthly: number
  annual: number
  savingsMonthly: number
  savingsAnnual: number
  savingsPercentMonthly: number
  savingsPercentAnnual: number
}

export const bundlePricing: BundlePricing = {
  monthly: 399,
  annual: 332,
  savingsMonthly: totalMonthlyIndividual - 399,
  savingsAnnual: totalAnnualIndividual - 332,
  savingsPercentMonthly: Math.round(((totalMonthlyIndividual - 399) / totalMonthlyIndividual) * 100),
  savingsPercentAnnual: Math.round(((totalAnnualIndividual - 332) / totalAnnualIndividual) * 100),
}

export const pricingFeatures = {
  bundle: [
    'Toate cele 8 module incluse',
    'Implementare prioritară în 14 zile',
    'Manager de cont dedicat',
    'Training online pentru echipă',
    'Suport tehnic premium 24/7',
    'Actualizări gratuite incluse',
    'Rapoarte lunare de activitate',
    'Personalizare după modelele primăriei',
  ],
  individual: [
    'Implementare în 30 de zile',
    'Training online inclus',
    'Suport tehnic în zile lucrătoare',
    'Actualizări incluse',
    'Posibilitate de upgrade oricând',
  ],
}

export const annualBenefits = [
  'Plătești 10 luni, primești 12',
  'Economisești 2 luni pe an per modul',
  'Factură anuală unică, fără griji',
  'Prioritate la funcționalități noi',
]

export const startingPrice = 49
