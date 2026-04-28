export interface FAQItem {
  question: string
  answer: string
  category?: 'general' | 'technical' | 'pricing'
}

export const faqItems: FAQItem[] = [
  {
    question: 'Cât durează implementarea?',
    answer:
      'Un modul individual se implementează în 14–30 de zile calendaristice, în funcție de complexitate și disponibilitatea echipei clientului. Pachetul complet beneficiază de implementare prioritară în 14–21 de zile. Nu sunt necesare modificări tehnice majore în infrastructura existentă. Primăriile, de exemplu, sunt operaționale în mai puțin de o lună.',
    category: 'general',
  },
  {
    question: 'Este nevoie de training?',
    answer:
      'Nu este nevoie de training tehnic complex. Organizăm 1–2 sesiuni online de maximum 2 ore pentru echipa clientului, cu materiale video și ghiduri PDF în română. Sistemele sunt intuitive și pot fi folosite de oricine știe să trimită un email sau să lucreze cu un smartphone.',
    category: 'general',
  },
  {
    question: 'Utilizatorii finali trebuie să instaleze aplicații noi?',
    answer:
      'Nu. Modulele WhatsApp Business și Telegram Bot folosesc aplicații deja instalate pe telefoanele utilizatorilor. Modulul Helpdesk funcționează prin browser, fără instalare. Soluțiile sunt gândite pentru zero fricțiune din partea beneficiarilor finali — fie că sunt cetățeni ai unei comune sau clienți ai unei instituții.',
    category: 'technical',
  },
  {
    question: 'Se pot cumpăra module separat?',
    answer:
      'Da, absolut. Fiecare modul poate fi achiziționat independent. Clientul poate începe cu un singur modul și adăuga altele oricând, fără costuri suplimentare de integrare. Pentru primării, recomandăm să înceapă cu Helpdesk sau WhatsApp Business pentru impact rapid.',
    category: 'pricing',
  },
  {
    question: 'Există reducere pentru plata anuală?',
    answer:
      'Da. La plata anuală clientul primește acces pentru 12 luni dar plătește doar 10 — economisește practic 2 luni pe an. Reducerea se aplică atât pentru module individuale cât și pentru pachetul complet Bundle.',
    category: 'pricing',
  },
  {
    question: 'Includeți hardware?',
    answer:
      'Modulul OCR & Arhivă Digitală poate include opțional un scanner de birou profesional, cu ofertă personalizată. Restul modulelor funcționează integral în cloud, fără hardware suplimentar. Tot ce este necesar este o conexiune la internet.',
    category: 'technical',
  },
  {
    question: 'Sistemul poate fi adaptat după modelele de documente ale clientului?',
    answer:
      'Da. Generatorul de Cereri și Documente este configurat cu modelele oficiale specifice fiecărui client. Importăm și digitalizăm orice formular sau cerere tipizată existentă — inclusiv modelele specifice primăriilor. Adaptarea se face în faza de implementare, fără costuri suplimentare.',
    category: 'technical',
  },
  {
    question: 'Este potrivit și pentru organizații mici?',
    answer:
      'Este construit special pentru organizații cu resurse limitate. Primăriile cu sub 3.000 de locuitori sunt un exemplu perfect — fără departament IT intern, fără bugete mari, fără timp de training îndelungat. Același principiu se aplică oricărei instituții sau organizații publice de dimensiuni reduse.',
    category: 'general',
  },
  {
    question: 'Ce se întâmplă cu datele beneficiarilor?',
    answer:
      'Toate datele sunt stocate pe servere securizate în UE, conform GDPR. Clientul rămâne operatorul de date, noi suntem procesatorul. Oferim DPA (Data Processing Agreement) semnat și documentație completă pentru conformitate.',
    category: 'technical',
  },
  {
    question: 'Există un contract de lungă durată?',
    answer:
      'Abonamentul lunar nu implică un contract pe termen lung — clientul poate renunța oricând cu 30 de zile preaviz. Pentru abonamentul anual, contractul este pe 12 luni cu preaviz de 30 de zile la finalul perioadei. Nu există costuri de ieșire.',
    category: 'pricing',
  },
]
