export type ModuleId =
  | 'comunicare-digitala'
  | 'interfata-cetateni'
  | 'interfata-angajati'
  | 'sesizari-locatie'
  | 'barometru-institutional'
  | 'motor-cautare'
  | 'raportare-loguri'

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
  forWho: string[]
}

export const modules: Module[] = [
  {
    id: 'comunicare-digitala',
    slug: 'comunicare-digitala',
    title: 'Canale digitale de comunicare automatizată',
    shortTitle: 'Comunicare digitală',
    icon: 'message-square',
    accentColor: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    description:
      'Canale oficiale de comunicare prin aplicații de mesagerie utilizate deja de cetățeni și angajați, configurate pentru transmiterea rapidă a informațiilor.',
    longDescription:
      'Canale oficiale de comunicare prin aplicații de mesagerie utilizate deja de cetățeni și angajați, configurate pentru transmiterea rapidă a informațiilor și automatizarea interacțiunilor de bază. Instituția devine accesibilă pe canale digitale familiare, fără a impune utilizatorilor adoptarea unor sisteme noi.',
    features: [
      'Mesaje automate de întâmpinare',
      'Distribuire informații generale',
      'Direcționare către servicii',
      'Reducerea solicitărilor repetitive',
      'Actualizări automate pentru beneficiari',
      'Configurare după fluxurile instituției',
    ],
    forWho: ['Departament comunicare', 'Secretariat', 'Conducere instituție'],
  },
  {
    id: 'interfata-cetateni',
    slug: 'interfata-cetateni',
    title: 'Interfață digitală pentru cetățeni / beneficiari',
    shortTitle: 'Interfață cetățeni',
    icon: 'users',
    accentColor: 'text-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    description:
      'Interfață de comunicare prin care cetățenii sau beneficiarii pot transmite solicitări și informații către instituție.',
    longDescription:
      'Interfață de comunicare prin care cetățenii sau beneficiarii pot transmite solicitări și informații către instituție, accesibilă prin canale digitale deja familiare. Reduce vizitele fizice și apelurile telefonice repetitive, simplificând relația dintre beneficiar și instituție.',
    features: [
      'Transmitere solicitări',
      'Colectare date structurată',
      'Raportare nereguli',
      'Integrare cu sistemul intern',
      'Notificări automate la actualizare status',
      'Acces 24/7 fără instalare aplicație nouă',
    ],
    forWho: ['Cetățeni', 'Beneficiari servicii', 'Funcționari publici'],
  },
  {
    id: 'interfata-angajati',
    slug: 'interfata-angajati',
    title: 'Interfață digitală pentru angajați',
    shortTitle: 'Interfață angajați',
    icon: 'briefcase',
    accentColor: 'text-violet-600',
    bgColor: 'bg-violet-50',
    borderColor: 'border-violet-200',
    description:
      'Instrument intern de suport pentru angajați, care facilitează accesul rapid la informații și proceduri.',
    longDescription:
      'Instrument intern de suport pentru angajați, care facilitează accesul rapid la informații și proceduri. Reduce timpul de căutare a informației și oferă răspunsuri ghidate pentru situații frecvente, fără training complex.',
    features: [
      'Răspunsuri ghidate la întrebări frecvente',
      'Suport operațional intern',
      'Reducerea timpului de căutare a informației',
      'Acces la proceduri și documente interne',
      'Disponibil în orice moment',
      'Fără training tehnic suplimentar',
    ],
    forWho: ['Funcționari publici', 'Secretariat', 'Toți angajații instituției'],
  },
  {
    id: 'sesizari-locatie',
    slug: 'sesizari-locatie',
    title: 'Sistem de sesizări cu poză și locație',
    shortTitle: 'Sesizări cu locație',
    icon: 'map-pin',
    accentColor: 'text-amber-600',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    description:
      'Sistem prin care utilizatorii pot transmite sesizări clare, însoțite de fotografie și locație, pentru identificarea rapidă a problemelor.',
    longDescription:
      'Sistem prin care utilizatorii pot transmite sesizări clare, însoțite de fotografie și locație, pentru identificarea rapidă a problemelor. Sesizările sunt organizate intern și gestionate eficient de echipa instituției.',
    features: [
      'Transmitere sesizare cu locație precisă',
      'Atașare fotografie din dispozitiv',
      'Organizare internă a cazurilor',
      'Comunicare pentru clarificări',
      'Urmărire status sesizare',
      'Raportare periodică a sesizărilor rezolvate',
    ],
    forWho: ['Cetățeni', 'Beneficiari', 'Echipa internă de gestionare'],
  },
  {
    id: 'barometru-institutional',
    slug: 'barometru-institutional',
    title: 'Barometru instituțional și monitorizare publică',
    shortTitle: 'Monitorizare publică',
    icon: 'bar-chart-2',
    accentColor: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
    borderColor: 'border-indigo-200',
    description:
      'Sistem de monitorizare a mențiunilor relevante despre instituție din spațiul public digital.',
    longDescription:
      'Sistem de monitorizare a mențiunilor relevante despre instituție din spațiul public digital. Furnizează informații structurate pentru luarea deciziilor de comunicare și identificarea timpurie a subiectelor sensibile.',
    features: [
      'Monitorizare social media',
      'Monitorizare presă online',
      'Alerte de mențiuni relevante',
      'Identificare teme recurente',
      'Suport pentru decizie și comunicare',
      'Raport periodic de activitate',
    ],
    forWho: ['Conducere instituție', 'Departament comunicare', 'Responsabil relații publice'],
  },
  {
    id: 'motor-cautare',
    slug: 'motor-cautare',
    title: 'Motor de căutare pentru documente scanate',
    shortTitle: 'Căutare documente',
    icon: 'search',
    accentColor: 'text-teal-600',
    bgColor: 'bg-teal-50',
    borderColor: 'border-teal-200',
    description:
      'Sistem de indexare și căutare rapidă în documente scanate, cu acces controlat și trasabilitate completă.',
    longDescription:
      'Sistem de indexare și căutare rapidă în documente scanate, cu acces controlat și trasabilitate completă. Documentele fizice sunt digitalizate, indexate automat și accesibile în câteva secunde, reducând semnificativ timpul pierdut în căutări manuale.',
    features: [
      'Recunoaștere text OCR de precizie',
      'Indexare automată inteligentă',
      'Căutare rapidă full-text în arhivă',
      'Acces controlat pe categorii',
      'Istoric complet de acces',
      'Securizare și backup automat',
    ],
    forWho: ['Secretar general', 'Funcționari arhivă', 'Conducere instituție'],
  },
  {
    id: 'raportare-loguri',
    slug: 'raportare-loguri',
    title: 'Raportare săptămânală a logurilor',
    shortTitle: 'Raportare loguri',
    icon: 'file-text',
    accentColor: 'text-rose-600',
    bgColor: 'bg-rose-50',
    borderColor: 'border-rose-200',
    description:
      'Raport automat privind activitatea documentelor: cine a accesat, cine a scanat, când — trasabilitate completă.',
    longDescription:
      'Raport automat săptămânal privind activitatea documentelor din sistem: cine a accesat documente, cine a scanat, când și ce. Oferă trasabilitate completă și informații clare pentru conducere și auditori.',
    features: [
      'Raport automat săptămânal',
      'Evidență acces documente',
      'Evidență activitate de scanare',
      'Trasabilitate completă a activității',
      'Export în formate standard',
      'Arhivare automatizată a rapoartelor',
    ],
    forWho: ['Conducere instituție', 'Auditori interni', 'Responsabil securitate date'],
  },
]

export function getModuleBySlug(slug: string): Module | undefined {
  return modules.find((m) => m.slug === slug)
}

export function getModuleSlugs(): string[] {
  return modules.map((m) => m.slug)
}
