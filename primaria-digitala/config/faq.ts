export interface FAQItem {
  question: string
  answer: string
  category?: 'general' | 'technical' | 'pricing'
}

export const faqItems: FAQItem[] = [
  {
    question: 'Platforma se adresează doar primăriilor?',
    answer:
      'Nu. Este destinată instituțiilor publice și organizațiilor cu rol administrativ sau juridic. Poate fi implementată în primării, instituții publice locale, organizații cu atribuții administrative, entități cu rol juridic sau orice structură care gestionează relații cu beneficiari și documente.',
    category: 'general',
  },
  {
    question: 'Se folosesc aplicații cunoscute de utilizatori?',
    answer:
      'Da. Platforma utilizează canale digitale deja familiare utilizatorilor, fără a necesita adoptarea unor sisteme complexe noi. Beneficiarii interacționează prin interfețe pe care le știu deja să le folosească, eliminând bariera de adoptare.',
    category: 'technical',
  },
  {
    question: 'Este nevoie de training?',
    answer:
      'Nu. Platforma este concepută pentru utilizare rapidă. Organizăm o singură sesiune de prezentare de maximum 2 ore pentru echipa clientului, după care sistemul este operațional. Nu sunt necesare cunoștințe tehnice.',
    category: 'general',
  },
  {
    question: 'Ce include abonamentul?',
    answer:
      'Abonamentul include toate cele 7 componente ale platformei într-un singur pachet: comunicare digitală automatizată, interfață pentru cetățeni/beneficiari, interfață pentru angajați, sistem de sesizări, monitorizare publică, motor de căutare documente și raportare loguri. Nu există costuri suplimentare per componentă.',
    category: 'pricing',
  },
  {
    question: 'Există plată anuală?',
    answer:
      'Da. La plata anuală clientul primește acces pentru 12 luni plătind echivalentul a 10 luni — economisind efectiv 2 luni de abonament. Se emite o singură factură anuală, eliminând procesarea lunară.',
    category: 'pricing',
  },
  {
    question: 'Cât durează implementarea?',
    answer:
      'Implementarea completă se realizează în 14–30 de zile calendaristice. Echipa noastră gestionează întregul proces: configurare, personalizare după modelele instituției și sesiunea de prezentare pentru angajați. Nu sunt necesare modificări în infrastructura existentă.',
    category: 'general',
  },
  {
    question: 'Ce se întâmplă cu datele?',
    answer:
      'Toate datele sunt stocate pe servere securizate în Uniunea Europeană, cu respectarea deplină a reglementărilor GDPR. Instituția rămâne operatorul de date, platforma acționând ca procesator. Oferim documentație completă pentru conformitate.',
    category: 'technical',
  },
  {
    question: 'Include și hardware?',
    answer:
      'Opțional. Componenta de motor de căutare pentru documente scanate poate fi completată cu un pachet hardware: scanner profesional în locație și soluție de backup fizic, la 100 €/lună, cu garanție și mentenanță incluse. Restul platformei funcționează integral în cloud.',
    category: 'technical',
  },
]
