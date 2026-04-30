export interface SubscriptionTier {
  year: string
  monthly: number
  label: string
  note?: string
}

export const subscriptionTiers: SubscriptionTier[] = [
  {
    year: 'Anul 1',
    monthly: 200,
    label: 'Abonament subvenționat',
    note: 'Primul an beneficiază de abonament subvenționat',
  },
  {
    year: 'Anul 2',
    monthly: 300,
    label: 'Abonament standard',
  },
  {
    year: 'Din anul 3',
    monthly: 400,
    label: 'Abonament complet',
  },
]

export interface HardwarePricing {
  monthly: number
  includes: string[]
}

export const hardwarePricing: HardwarePricing = {
  monthly: 100,
  includes: [
    'Scanner profesional în locație',
    'Backup fizic local',
    'Garanție hardware',
    'Mentenanță inclusă',
  ],
}

export interface ScanningPricing {
  initial: number
  initialDocs: number
  extraPer: number
  extraDocs: number
}

export const scanningPricing: ScanningPricing = {
  initial: 500,
  initialDocs: 25000,
  extraPer: 100,
  extraDocs: 5000,
}

export const annualBenefits = [
  'Plătești 10 luni, primești 12',
  'Factură anuală unică, fără griji administrative',
  'Prioritate la funcționalități noi',
  'Manager de cont dedicat',
]

export const packageFeatures = [
  'Toate cele 7 componente incluse',
  'Implementare în 14–30 de zile',
  'Configurare completă de către echipa noastră',
  'Sesiune de prezentare pentru echipă (2 ore)',
  'Suport tehnic în zile lucrătoare',
  'Actualizări incluse pe durata abonamentului',
  'Stocare date în UE, conformitate GDPR',
]
