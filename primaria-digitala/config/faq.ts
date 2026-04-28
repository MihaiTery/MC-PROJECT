export interface FAQItem {
  question: string
  answer: string
  category?: 'general' | 'technical' | 'pricing'
}

export const faqItems: FAQItem[] = [
  {
    question: 'Cât durează implementarea?',
    answer:
      'Un modul individual se implementează în 14–30 de zile calendaristice, în funcție de complexitate și disponibilitatea echipei din primărie. Pachetul complet are o implementare prioritară de 14–21 de zile. Nu sunt necesare modificări tehnice majore în infrastructura existentă.',
    category: 'general',
  },
  {
    question: 'Este nevoie de training?',
    answer:
      'Nu este nevoie de training tehnic complex. Organizăm 1–2 sesiuni online de max. 2 ore pentru echipa primăriei, cu materiale video și ghiduri PDF în română. Sistemele sunt intuitive și pot fi folosite de oricine știe să trimită un email sau să lucreze cu un smartphone.',
    category: 'general',
  },
  {
    question: 'Cetățenii trebuie să instaleze aplicații noi?',
    answer:
      'Nu. Modulele WhatsApp Business și Telegram Bot folosesc aplicații deja instalate pe telefoanele cetățenilor. Modulul Helpdesk funcționează prin browser, fără instalare. Soluțiile noastre sunt gândite pentru zero fricțiune din partea cetățeanului.',
    category: 'technical',
  },
  {
    question: 'Se pot cumpăra module separat?',
    answer:
      'Da, absolut. Fiecare modul poate fi achiziționat independent. Puteți începe cu un singur modul și adăuga altele oricând, fără costuri suplimentare de integrare. Recomandăm să începeți cu Helpdesk sau WhatsApp Business pentru impact rapid.',
    category: 'pricing',
  },
  {
    question: 'Există reducere pentru plata anuală?',
    answer:
      'Da. La plata anuală primiți acces pentru 12 luni dar plătiți doar 10 – economisiți practic 2 luni pe an. Reducerea se aplică atât pentru module individuale cât și pentru pachetul complet Bundle.',
    category: 'pricing',
  },
  {
    question: 'Includeți hardware?',
    answer:
      'Modulul OCR & Arhivă Digitală poate include opțional un scanner de birou profesional, cu ofertă personalizată. Restul modulelor funcționează integral în cloud, fără hardware suplimentar. Tot ce aveți nevoie este o conexiune la internet.',
    category: 'technical',
  },
  {
    question: 'Sistemul poate fi adaptat după modelele de cereri ale primăriei?',
    answer:
      'Da. Generatorul de Cereri și Documente este configurat cu modelele oficiale specifice primăriei dvs. Importăm și digitalizăm orice formular sau cerere tipizată existentă. Adaptarea se face în faza de implementare, fără costuri suplimentare.',
    category: 'technical',
  },
  {
    question: 'Este potrivit pentru comune mici?',
    answer:
      'Este construit special pentru comune și orașe mici din România. Prețurile, complexitatea și abordarea sunt gândite pentru primării cu resurse limitate – fără departament IT intern, fără bugete mari, fără timp de training îndelungat. Câteva comune cu sub 3.000 de locuitori folosesc deja soluțiile noastre cu rezultate vizibile în primele 30 de zile.',
    category: 'general',
  },
  {
    question: 'Ce se întâmplă cu datele cetățenilor?',
    answer:
      'Toate datele sunt stocate pe servere securizate în UE, conform GDPR. Primăria rămâne operatorul de date, noi suntem procesatorul. Oferim DPA (Data Processing Agreement) semnat și documentație completă pentru conformitate.',
    category: 'technical',
  },
  {
    question: 'Există un contract de lungă durată?',
    answer:
      'Abonamentul lunar nu implică un contract pe termen lung – puteți renunța oricând cu 30 de zile preaviz. Pentru abonamentul anual, contractul este pe 12 luni cu preaviz de 30 de zile la finalul perioadei. Nu există costuri de ieșire.',
    category: 'pricing',
  },
]
