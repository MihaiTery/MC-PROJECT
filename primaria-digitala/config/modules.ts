export type ModuleId =
  | 'helpdesk'
  | 'whatsapp'
  | 'telegram'
  | 'docgen'
  | 'lex-advisor'
  | 'ocr-archive'
  | 'mail-cloud'
  | 'monitoring'

export interface ModulePrice {
  monthly: number
  annual: number
  note?: string
  custom?: boolean
}

export interface Module {
  id: ModuleId
  slug: string
  title: string
  shortTitle: string
  icon: string
  accentColor: string
  bgColor: string
  borderColor: string
  description: string
  longDescription: string
  features: string[]
  benefits: string[]
  forWho: string[]
  price: ModulePrice
  tag?: string
  popular?: boolean
  hardwareOptional?: boolean
}

export const modules: Module[] = [
  {
    id: 'helpdesk',
    slug: 'helpdesk-cetateni',
    title: 'Helpdesk Cetățeni / Primărie',
    shortTitle: 'Helpdesk Cetățeni',
    icon: 'headphones',
    accentColor: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    description:
      'Sistem de ticketing pentru sesizări, cereri și comunicare între cetățeni și primărie.',
    longDescription:
      'Transformați haosul sesizărilor și cererilor cetățenilor într-un flux organizat și transparent. Fiecare sesizare devine un ticket urmărit, asignat și rezolvat eficient de echipa potrivită din primărie.',
    features: [
      'Primire sesizări cu poză și locație GPS',
      'Transformare automată în ticket numerotat',
      'Asignare internă către departamente',
      'Istoric complet al solicitărilor',
      'Comunicare directă cu cetățeanul',
      'Dashboard pentru primar și secretar',
      'Notificări automate la actualizare status',
    ],
    benefits: [
      'Ordine clară în fluxul de solicitări',
      'Răspuns mai rapid la cetățeni',
      'Vizibilitate totală pentru administrație',
      'Comunitate mai mulțumită',
      'Dovezi concrete pentru rapoarte de activitate',
    ],
    forWho: ['Primar', 'Viceprimar', 'Secretar general', 'Funcționari publici'],
    price: { monthly: 99, annual: 82, note: 'per primărie' },
    popular: true,
    tag: 'Cel mai solicitat',
  },
  {
    id: 'whatsapp',
    slug: 'whatsapp-business',
    title: 'WhatsApp Business Automatizat',
    shortTitle: 'WhatsApp Business',
    icon: 'message-circle',
    accentColor: 'text-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    description: 'Canal oficial de comunicare al primăriei prin WhatsApp Business.',
    longDescription:
      'Transformați primăria într-un canal de comunicare modern, folosind aplicația pe care cetățenii deja o știu. Automatizați răspunsurile frecvente și comunicați rapid cu întreaga comunitate.',
    features: [
      'Mesaj automat de bun venit',
      'Anunțuri locale cu un click',
      'Comunicări rapide către cetățeni',
      'Informații automate despre program, taxe, documente',
      'Automatizare conversații simple (FAQ)',
      'Număr verificat oficial WhatsApp Business',
    ],
    benefits: [
      'Folosește o aplicație deja instalată de cetățeni',
      'Reduce apelurile telefonice repetitive',
      'Comunicare modernă și accesibilă',
      'Primăria devine vizibilă și reactivă',
    ],
    forWho: ['Primar', 'Departament comunicare', 'Secretariat'],
    price: { monthly: 79, annual: 66 },
  },
  {
    id: 'telegram',
    slug: 'telegram-bot',
    title: 'Telegram Bot Primărie',
    shortTitle: 'Telegram Bot',
    icon: 'send',
    accentColor: 'text-sky-600',
    bgColor: 'bg-sky-50',
    borderColor: 'border-sky-200',
    description:
      'Bot Telegram ca principal canal digital pentru sesizări, cereri și interacțiuni rapide.',
    longDescription:
      'Un bot Telegram dedicat primăriei, activ 24/7, care preia sesizări, cereri și documente de la cetățeni și le transmite automat către departamentele corecte.',
    features: [
      'Sesizări cu poză și locație',
      'Cereri și adeverințe digitale',
      'Transmitere documente',
      'Colectare informații structurată',
      'Notificări automate',
      'Meniu interactiv cu opțiuni clare',
    ],
    benefits: [
      'Rapid de implementat (sub 24h)',
      'Ușor de folosit pentru orice vârstă',
      'Potrivit pentru comunități locale mici',
      'Automatizează relația cetățean–primărie',
    ],
    forWho: ['Funcționari publici', 'Departament comunicare', 'Secretariat'],
    price: { monthly: 69, annual: 57 },
  },
  {
    id: 'docgen',
    slug: 'generator-documente',
    title: 'Generator Cereri și Documente',
    shortTitle: 'Generator Documente',
    icon: 'file-text',
    accentColor: 'text-violet-600',
    bgColor: 'bg-violet-50',
    borderColor: 'border-violet-200',
    description:
      'Sistem care colectează datele cetățeanului și generează automat documente conform modelelor primăriei.',
    longDescription:
      'Eliminați erorile și timpul pierdut la ghișeu. Cetățenii completează un formular simplu, iar sistemul generează automat cererile și documentele conform modelelor oficiale ale primăriei dvs.',
    features: [
      'Integrarea modelelor existente de cereri',
      'Completare automată câmpuri standard',
      'Generare PDF instant',
      'Trimitere automată către departamente',
      'Arhivare digitală indexată',
      'Semnătură electronică opțională',
    ],
    benefits: [
      'Mai puține erori de completare',
      'Mai puțin timp pierdut la ghișeu',
      'Procese administrative mai clare',
      'Cetățenii pot trimite cereri de acasă',
    ],
    forWho: ['Funcționari publici', 'Secretariat', 'Cetățeni'],
    price: { monthly: 89, annual: 74 },
  },
  {
    id: 'lex-advisor',
    slug: 'lex-advisor',
    title: 'Lex Advisor pentru Funcționari',
    shortTitle: 'Lex Advisor AI',
    icon: 'scale',
    accentColor: 'text-amber-600',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    description:
      'Asistent AI intern pentru funcționarii primăriei, alimentat cu legi, proceduri și documente relevante.',
    longDescription:
      'Funcționarii primăriei au acum un asistent juridic și procedural disponibil instant. Lex Advisor răspunde rapid la întrebări legislative, ajută la redactarea răspunsurilor și reduce timpul de documentare.',
    features: [
      'Răspunsuri rapide la întrebări juridice/procedurale',
      'Căutare inteligentă în legislație actualizată',
      'Suport pentru redactare răspunsuri oficiale',
      'Explicații clare pe înțelesul funcționarilor',
      'Actualizări automate la modificări legislative',
      'Istoric interogări per utilizator',
    ],
    benefits: [
      'Reduce timpul de documentare cu până la 70%',
      'Crește acuratețea răspunsurilor oficiale',
      'Sprijin pentru funcționarii fără training complex',
      'Conformitate legislativă îmbunătățită',
    ],
    forWho: ['Secretar general', 'Funcționari publici', 'Jurist primărie'],
    price: { monthly: 119, annual: 99 },
    tag: 'Inovație AI',
  },
  {
    id: 'ocr-archive',
    slug: 'ocr-arhiva-digitala',
    title: 'OCR & Arhivă Digitală',
    shortTitle: 'OCR & Arhivă',
    icon: 'scan',
    accentColor: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
    borderColor: 'border-indigo-200',
    description:
      'Scanare, OCR și indexare digitală pentru documentele fizice din primărie.',
    longDescription:
      'Digitalizați arhiva fizică a primăriei și accesați orice document în câteva secunde. Sistemul scanează, recunoaște textul și indexează automat fiecare document.',
    features: [
      'Scanare documente fizice',
      'Recunoaștere text OCR de precizie',
      'Indexare automată inteligentă',
      'Căutare rapidă full-text în arhivă',
      'Reducerea erorilor umane',
      'Hardware scanner inclus opțional',
    ],
    benefits: [
      'Documente găsite în câteva secunde',
      'Arhivă organizată și securizată',
      'Mai puțin timp pierdut în căutări fizice',
      'Conformitate cu normele de arhivare electronică',
    ],
    forWho: ['Secretar general', 'Funcționari arhivă', 'IT local'],
    price: { monthly: 89, annual: 74, note: 'hardware scanner – ofertă separată' },
    hardwareOptional: true,
  },
  {
    id: 'mail-cloud',
    slug: 'mail-hosting-cloud',
    title: 'Mail, Hosting & Cloud pentru Primărie',
    shortTitle: 'Mail & Cloud',
    icon: 'cloud',
    accentColor: 'text-teal-600',
    bgColor: 'bg-teal-50',
    borderColor: 'border-teal-200',
    description:
      'Infrastructură digitală de bază: email instituțional, hosting și stocare cloud.',
    longDescription:
      'Infrastructura digitală minimă pe care orice primărie ar trebui să o aibă. Email instituțional profesional, hosting securizat și cloud cu backup automat – fără nicio echipă IT internă.',
    features: [
      'Email instituțional @primaria-[localitate].ro',
      'Hosting securizat și rapid',
      'Spațiu cloud organizat pe departamente',
      'Backup automat zilnic',
      'Configurare rapidă în 48 ore',
      'Suport tehnic inclus',
    ],
    benefits: [
      'Comunicare oficială profesionalizată',
      'Siguranță și organizare a datelor',
      'Infrastructură simplă fără echipă IT',
      'Conformitate GDPR',
    ],
    forWho: ['Primar', 'Secretar general', 'Toți angajații primăriei'],
    price: { monthly: 49, annual: 41, note: 'include până la 20 conturi email' },
  },
  {
    id: 'monitoring',
    slug: 'monitorizare-online',
    title: 'Monitorizare Online & Alerte Mențiuni',
    shortTitle: 'Monitorizare Online',
    icon: 'bell',
    accentColor: 'text-rose-600',
    bgColor: 'bg-rose-50',
    borderColor: 'border-rose-200',
    description:
      'Sistem de monitorizare a webului, grupurilor și mențiunilor despre primărie, primar sau comunitate.',
    longDescription:
      'Fiți primul care știe când se vorbește despre primărie online. Monitorizare automată a presei locale, grupurilor de Facebook și altor canale digitale, cu alerte instant pentru situații sensibile.',
    features: [
      'Monitorizare continuă web și presă locală',
      'Monitorizare grupuri publice Facebook',
      'Alerte instant pe email/telefon',
      'Raport săptămânal pentru primar',
      'Identificare teme și subiecte sensibile',
      'Istoric mențiuni exportabil',
    ],
    benefits: [
      'Reacție rapidă la crize de comunicare',
      'Control mai bun al imaginii publice',
      'Primarul știe primul ce se întâmplă',
      'Comunicare proactivă, nu reactivă',
    ],
    forWho: ['Primar', 'Viceprimar', 'Departament comunicare'],
    price: { monthly: 89, annual: 74 },
  },
]

export function getModuleBySlug(slug: string): Module | undefined {
  return modules.find((m) => m.slug === slug)
}

export function getModuleSlugs(): string[] {
  return modules.map((m) => m.slug)
}

export const totalMonthlyIndividual = modules.reduce(
  (sum, m) => sum + m.price.monthly,
  0
)
export const totalAnnualIndividual = modules.reduce(
  (sum, m) => sum + m.price.annual,
  0
)
