/**
 * KohChang Business Domains — Zentrale Datendatei
 *
 * PREISE: Alle auf 0 gesetzt → "Auf Anfrage" wird angezeigt.
 * Typische Marktpreise: 250 – 5.000 € je nach Domain-Wert.
 *
 * UPDATE-WORKFLOW:
 *   1. Diese Datei öffnen und Daten anpassen
 *   2. Browser-Seite neu laden → Änderungen erscheinen sofort
 *
 * HINWEIS: Dieses Projekt ist ein privates Hobby-Projekt.
 * Bis auf eigene Aufwände wie Pflege, Wartung der Website und
 * Einkaufskosten der Domains geht der verbleibende Erlös abzüglich
 * der Kosten komplett und ohne Umwege an gemeinnützige Organisationen
 * auf Koh Chang. Ich erwirtschafte damit keinen Gewinn.
 */

const CATEGORIES = {
  platform:   { de: 'Plattform / Community',       en: 'Platform / Community',        th: 'แพลตฟอร์ม / ชุมชน'  },
  biz:        { de: 'Business',                     en: 'Business',                    th: 'ธุรกิจ'              },
  realestate: { de: 'Immobilien / Hotel / Resorts', en: 'Real Estate / Hotel / Resorts',th: 'อสังหาริมทรัพย์'     },
  wellness:   { de: 'Wellness / Beauty / Health',   en: 'Wellness / Beauty / Health',  th: 'สุขภาพ / ความงาม'    },
  marketing:  { de: 'Marketing',                    en: 'Marketing',                   th: 'การตลาด'             }
};

const DOMAINS = [
  /* ── PORKBUN ──────────────────────────────────────────── */
  {
    name: 'kohchang.guide', catKey: 'platform', price: 0, yearlyRent: 0,
    emoji: '🗺️',
    uses: { de: ['Reiseführer & lokales Empfehlungsportal', 'Insider-Touren & Aktivitätsbuchungen'], en: ['Travel guide & local recommendations portal', 'Insider tours & activity bookings'] },
    desc: { de: 'Offizieller Reiseführer und Empfehlungsportal für Koh Chang.', en: 'Official travel guide and recommendations portal for Koh Chang.' }
  },
  {
    name: 'kohchang.fan', catKey: 'platform', price: 0, yearlyRent: 0,
    emoji: '⭐',
    uses: { de: ['Fan-Community & Forum für Koh-Chang-Liebhaber', 'Newsletter & Social-Media-Kanal'], en: ['Fan community & forum for Koh Chang enthusiasts', 'Newsletter & social media channel'] },
    desc: { de: 'Fan-Community für alle Koh-Chang-Liebhaber weltweit.', en: 'Fan community for all Koh Chang enthusiasts worldwide.' }
  },
  {
    name: 'kohchang.properties', catKey: 'realestate', price: 0, yearlyRent: 0,
    emoji: '🏗️',
    uses: { de: ['Immobilienmakler & Investorenplattform', 'Villen, Grundstücke & Gewerbeimmobilien'], en: ['Real estate agency & investor platform', 'Villas, land & commercial properties'] },
    desc: { de: 'Premium-Domain für Immobilien, Grundstücke und Gewerbeobjekte auf Koh Chang.', en: 'Premium domain for real estate, land and commercial properties on Koh Chang.' }
  },
  {
    name: 'kohchang.villas', catKey: 'realestate', price: 0, yearlyRent: 0,
    emoji: '🌴',
    uses: { de: ['Luxusvilla-Vermietung & Verkauf', 'Exklusive Ferienhäuser & Private Resorts'], en: ['Luxury villa rental & sales', 'Exclusive holiday homes & private resorts'] },
    desc: { de: 'Luxusvillen und hochwertige Ferienhäuser auf Koh Chang.', en: 'Luxury villas and high-end holiday homes on Koh Chang.' }
  },
  {
    name: 'kohchang.spa', catKey: 'wellness', price: 0, yearlyRent: 0,
    emoji: '🧖',
    uses: { de: ['Spa-Resort & professionelles Wellnesszentrum', 'Massage, Yoga & Detox-Retreats'], en: ['Spa resort & professional wellness centre', 'Massage, yoga & detox retreats'] },
    desc: { de: 'Spa-Resorts, Massagen und Wellness-Angebote auf Koh Chang.', en: 'Spa resorts, massages and wellness services on Koh Chang.' }
  },
  /* ── SPACESHIP ───────────────────────────────────────── */
  {
    name: 'kohchang.bar', catKey: 'biz', price: 0, yearlyRent: 0,
    emoji: '🍹',
    uses: { de: ['Strandbar & Cocktail-Lounge', 'Nightclub & Live-Entertainment'], en: ['Beach bar & cocktail lounge', 'Nightclub & live entertainment'] },
    desc: { de: 'Bars, Cocktail-Lounges und Nightlife-Betriebe auf Koh Chang.', en: 'Bars, cocktail lounges and nightlife venues on Koh Chang.' }
  },
  {
    name: 'kohchang.bike', catKey: 'biz', price: 0, yearlyRent: 0,
    emoji: '🚲',
    uses: { de: ['Fahrrad- & Motorradverleih auf der Insel', 'Geführte Touren & Abenteuer-Trips'], en: ['Bicycle & motorbike rental on the island', 'Guided tours & adventure trips'] },
    desc: { de: 'Fahrradverleih, Motorradtouren und Zweirad-Services auf Koh Chang.', en: 'Bicycle rentals, motorbike tours and two-wheel services on Koh Chang.' }
  },
  {
    name: 'kohchang.blog', catKey: 'platform', price: 0, yearlyRent: 0,
    emoji: '✍️',
    uses: { de: ['Reiseblog & persönliche Erfahrungsberichte', 'Vlogging & Content-Creator-Plattform'], en: ['Travel blog & personal experience reports', 'Vlogging & content creator platform'] },
    desc: { de: 'Reiseblog und Content-Plattform rund um das Leben auf Koh Chang.', en: 'Travel blog and content platform about life on Koh Chang.' }
  },
  {
    name: 'kohchang.club', catKey: 'biz', price: 0, yearlyRent: 0,
    emoji: '🎭',
    uses: { de: ['Exklusiver Mitgliederclub & Netzwerk', 'Sportverein & Freizeitorganisation'], en: ['Exclusive members club & network', 'Sports club & leisure organisation'] },
    desc: { de: 'Clubs, Vereine und exklusive Mitgliederorganisationen auf Koh Chang.', en: 'Clubs, associations and exclusive member organisations on Koh Chang.' }
  },
  {
    name: 'kohchang.date', catKey: 'biz', price: 0, yearlyRent: 0,
    emoji: '💕',
    uses: { de: ['Dating-App & Social-Events für Singles', 'Speed-Dating & Begegnungsangebote'], en: ['Dating app & social events for singles', 'Speed dating & meeting services'] },
    desc: { de: 'Dating, Social Events und Begegnungen auf Koh Chang.', en: 'Dating, social events and meetings on Koh Chang.' }
  },
  {
    name: 'kohchang.delivery', catKey: 'biz', price: 0, yearlyRent: 0,
    emoji: '📦',
    uses: { de: ['Essen- & Waren-Lieferservice auf der Insel', 'Express-Kurier & Last-Mile-Delivery'], en: ['Food & goods delivery service on the island', 'Express courier & last-mile delivery'] },
    desc: { de: 'Lieferdienste für Lebensmittel, Waren und Kurier auf Koh Chang.', en: 'Delivery services for food, goods and courier on Koh Chang.' }
  },
  {
    name: 'kohchang.events', catKey: 'platform', price: 0, yearlyRent: 0,
    emoji: '🎉',
    uses: { de: ['Event-Buchungsplattform & Veranstaltungskalender', 'Hochzeiten, Feste & Firmenevents'], en: ['Event booking platform & calendar', 'Weddings, celebrations & corporate events'] },
    desc: { de: 'Veranstaltungskalender und Event-Buchungen für Koh Chang.', en: 'Event calendar and bookings for activities on Koh Chang.' }
  },
  {
    name: 'kohchang.fit', catKey: 'biz', price: 0, yearlyRent: 0,
    emoji: '💪',
    uses: { de: ['Outdoor-Fitness & Sportprogramme', 'Personal Training & Gruppenangebote'], en: ['Outdoor fitness & sports programmes', 'Personal training & group classes'] },
    desc: { de: 'Fitness, Sport und aktive Freizeitgestaltung auf Koh Chang.', en: 'Fitness, sport and active leisure activities on Koh Chang.' }
  },
  {
    name: 'kohchang.fitness', catKey: 'biz', price: 0, yearlyRent: 0,
    emoji: '🏋️',
    uses: { de: ['Fitnessstudio & Yoga-Studio Betrieb', 'Online-Kurse & Fitness-Coaching'], en: ['Gym & yoga studio operation', 'Online courses & fitness coaching'] },
    desc: { de: 'Fitnessstudios, Personal Training und Sportkurse auf Koh Chang.', en: 'Gyms, personal training and sports classes on Koh Chang.' }
  },
  {
    name: 'kohchang.food', catKey: 'biz', price: 0, yearlyRent: 0,
    emoji: '🍜',
    uses: { de: ['Restaurantführer & Gastronomieblog', 'Street Food & lokale Cuisine-Plattform'], en: ['Restaurant guide & gastronomy blog', 'Street food & local cuisine platform'] },
    desc: { de: 'Restaurants, Street Food und Gastronomieführer für Koh Chang.', en: 'Restaurants, street food and gastronomy guide for Koh Chang.' }
  },
  {
    name: 'kohchang.fun', catKey: 'platform', price: 0, yearlyRent: 0,
    emoji: '🎪',
    uses: { de: ['Freizeitangebote & Unterhaltungsführer', 'Aktivitäten & Spaßerlebnisse buchen'], en: ['Leisure guide & entertainment listings', 'Book activities & fun experiences'] },
    desc: { de: 'Freizeittipps, Unterhaltung und Spaßangebote auf Koh Chang.', en: 'Leisure tips, entertainment and fun activities on Koh Chang.' }
  },
  {
    name: 'kohchang.guru', catKey: 'platform', price: 0, yearlyRent: 0,
    emoji: '🧘',
    uses: { de: ['Experten-Blog & Coaching-Plattform', 'Beratung, Mentoring & Insider-Wissen'], en: ['Expert blog & coaching platform', 'Consulting, mentoring & insider knowledge'] },
    desc: { de: 'Experten-Ratschläge und Insider-Tipps für Koh Chang.', en: 'Expert advice and insider tips for Koh Chang.' }
  },
  {
    name: 'kohchang.info', catKey: 'platform', price: 0, yearlyRent: 0,
    emoji: 'ℹ️',
    uses: { de: ['Umfassendes Informationsportal & FAQ', 'Reiseinformationen & lokale Services'], en: ['Comprehensive information portal & FAQ', 'Travel information & local services'] },
    desc: { de: 'Umfassendes Informationsportal über Koh Chang.', en: 'Comprehensive information portal about Koh Chang.' }
  },
  {
    name: 'kohchang.life', catKey: 'platform', price: 0, yearlyRent: 0,
    emoji: '🌺',
    uses: { de: ['Lifestyle-Magazin & Community für Expats', 'Alltagstipps & Lebensqualität auf der Insel'], en: ['Lifestyle magazine & expat community', 'Daily life tips & island living quality'] },
    desc: { de: 'Das Lebensgefühl auf Koh Chang — Magazin und Community.', en: 'The spirit of living on Koh Chang — magazine and community.' }
  },
  {
    name: 'kohchang.lifestyle', catKey: 'platform', price: 0, yearlyRent: 0,
    emoji: '🌅',
    uses: { de: ['Lifestyle-Magazin mit Mode, Wellness & Reise', 'Influencer-Plattform & Content-Hub'], en: ['Lifestyle magazine covering fashion, wellness & travel', 'Influencer platform & content hub'] },
    desc: { de: 'Lifestyle-Magazin, Trends und Lebensart auf Koh Chang.', en: 'Lifestyle magazine, trends and way of life on Koh Chang.' }
  },
  {
    name: 'kohchang.news', catKey: 'biz', price: 0, yearlyRent: 0,
    emoji: '📰',
    uses: { de: ['Lokales Nachrichtenportal & Updates', 'Veranstaltungskalender & Ticker'], en: ['Local news portal & updates', 'Event calendar & breaking news'] },
    desc: { de: 'Aktuelle Nachrichten, Events und Updates aus Koh Chang.', en: 'Latest news, events and updates from Koh Chang.' }
  },
  {
    name: 'kohchang.online', catKey: 'platform', price: 0, yearlyRent: 0,
    emoji: '🔗',
    uses: { de: ['E-Commerce & Online-Service-Plattform', 'Digitale Visitenkarte für Unternehmen'], en: ['E-commerce & online services platform', 'Digital business card for companies'] },
    desc: { de: 'Digitale Plattform und Online-Services für Koh Chang.', en: 'Digital platform and online services for Koh Chang.' }
  },
  {
    name: 'kohchang.party', catKey: 'biz', price: 0, yearlyRent: 0,
    emoji: '🎊',
    uses: { de: ['Party-Planung & Nightlife-Portal', 'DJ-Bookings & Event-Catering-Services'], en: ['Party planning & nightlife portal', 'DJ bookings & event catering services'] },
    desc: { de: 'Party-Planung, Nightlife und Events auf Koh Chang.', en: 'Party planning, nightlife and events on Koh Chang.' }
  },
  {
    name: 'kohchang.pro', catKey: 'platform', price: 0, yearlyRent: 0,
    emoji: '🎯',
    uses: { de: ['Professionelles Business-Netzwerk & B2B', 'Freelancer-Marktplatz & Experten-Matching'], en: ['Professional business network & B2B', 'Freelancer marketplace & expert matching'] },
    desc: { de: 'Professionelle Netzwerke und Business-Experten auf Koh Chang.', en: 'Professional networks and business experts on Koh Chang.' }
  },
  {
    name: 'kohchang.rent', catKey: 'biz', price: 0, yearlyRent: 0,
    emoji: '🔑',
    uses: { de: ['Ferienwohnungs- & Immobilienvermietung', 'Fahrzeug- & Ausrüstungsverleih'], en: ['Holiday apartment & property rental', 'Vehicle & equipment hire'] },
    desc: { de: 'Vermietungsservice für Ferienwohnungen, Fahrzeuge und Equipment.', en: 'Rental service for holiday apartments, vehicles and equipment.' }
  },
  {
    name: 'kohchang.rentals', catKey: 'biz', price: 0, yearlyRent: 0,
    emoji: '🚤',
    uses: { de: ['Verleih für Boote, Kayaks & Motorräder', 'Langzeit- & Saisonvermietung'], en: ['Boat, kayak & motorbike hire', 'Long-term & seasonal rentals'] },
    desc: { de: 'Allgemeiner Verleih für alle Arten von Ausrüstung und Fahrzeugen.', en: 'General rental for all types of equipment and vehicles.' }
  },
  {
    name: 'kohchang.restaurant', catKey: 'biz', price: 0, yearlyRent: 0,
    emoji: '🍽️',
    uses: { de: ['Restaurant-Buchungsplattform & Speisekarten', 'Online-Bestellungen & Lieferservice'], en: ['Restaurant booking platform & menus', 'Online orders & food delivery'] },
    desc: { de: 'Restaurantführer und Online-Buchungen für Gastronomie auf Koh Chang.', en: 'Restaurant guide and online bookings for dining on Koh Chang.' }
  },
  {
    name: 'kohchang.review', catKey: 'platform', price: 0, yearlyRent: 0,
    emoji: '💬',
    uses: { de: ['Bewertungsportal für Hotels & Restaurants', 'Erfahrungsberichte & Empfehlungen'], en: ['Review portal for hotels & restaurants', 'Experience reports & recommendations'] },
    desc: { de: 'Bewertungsplattform für Hotels, Restaurants und Dienstleistungen.', en: 'Review platform for hotels, restaurants and services on Koh Chang.' }
  },
  {
    name: 'kohchang.services', catKey: 'biz', price: 0, yearlyRent: 0,
    emoji: '🔧',
    uses: { de: ['Dienstleistungsverzeichnis & Handwerkerportal', 'B2B-Services & Outsourcing-Plattform'], en: ['Service directory & tradesman portal', 'B2B services & outsourcing platform'] },
    desc: { de: 'Dienstleistungsverzeichnis für alle Unternehmen auf Koh Chang.', en: 'Service directory for all businesses on Koh Chang.' }
  },
  {
    name: 'kohchang.space', catKey: 'biz', price: 0, yearlyRent: 0,
    emoji: '🖥️',
    uses: { de: ['Co-Working Space & kreatives Studio', 'Bürovermietung & Meeting-Räume'], en: ['Co-working space & creative studio', 'Office rental & meeting rooms'] },
    desc: { de: 'Co-Working Spaces, Kreativstudios und Shared Offices auf Koh Chang.', en: 'Co-working spaces, creative studios and shared offices on Koh Chang.' }
  },
  {
    name: 'kohchang.today', catKey: 'platform', price: 0, yearlyRent: 0,
    emoji: '📅',
    uses: { de: ['Tagesaktuelle News, Wetter & Events', 'Öffnungszeiten & lokale Aktionen'], en: ["Today's news, weather & events", 'Opening hours & local deals'] },
    desc: { de: 'Tagesaktuelle Infos und What\'s-on auf Koh Chang.', en: "Today's news, weather and what's on Koh Chang." }
  },
  {
    name: 'kohchang.beauty', catKey: 'wellness', price: 0, yearlyRent: 0,
    emoji: '💄',
    uses: { de: ['Beauty-Salon & professionelles Kosmetikstudio', 'Make-up, Nägel & Schönheitsbehandlungen'], en: ['Beauty salon & professional cosmetic studio', 'Make-up, nails & beauty treatments'] },
    desc: { de: 'Beauty-Salons, Kosmetikstudios und Schönheitsbehandlungen auf Koh Chang.', en: 'Beauty salons, cosmetic studios and beauty treatments on Koh Chang.' }
  },
  {
    name: 'kohchang.cafe', catKey: 'biz', price: 0, yearlyRent: 0,
    emoji: '☕',
    uses: { de: ['Café, Coffee Shop & gemütliches Bistro', 'Working Space & Frühstückslokal'], en: ['Café, coffee shop & cosy bistro', 'Working space & breakfast venue'] },
    desc: { de: 'Cafés, Coffee Shops und gemütliche Bistros auf Koh Chang.', en: 'Cafés, coffee shops and cosy bistros on Koh Chang.' }
  },
  {
    name: 'kohchang.care', catKey: 'wellness', price: 0, yearlyRent: 0,
    emoji: '🤗',
    uses: { de: ['Pflegedienst & Seniorenhilfe', 'Kinderbetreuung & Haushaltshilfe'], en: ['Care service & senior assistance', 'Childcare & household help'] },
    desc: { de: 'Pflegedienstleistungen, Kinderbetreuung und Seniorenassistenz auf Koh Chang.', en: 'Care services, childcare and senior assistance on Koh Chang.' }
  },
  {
    name: 'kohchang.clinic', catKey: 'wellness', price: 0, yearlyRent: 0,
    emoji: '🏥',
    uses: { de: ['Klinik, Arztpraxis & medizinische Einrichtung', 'Zahnmedizin & Spezialbehandlungen'], en: ['Clinic, medical practice & healthcare facility', 'Dentistry & specialist treatments'] },
    desc: { de: 'Kliniken, Arztpraxen und medizinische Einrichtungen auf Koh Chang.', en: 'Clinics, medical practices and healthcare facilities on Koh Chang.' }
  },
  {
    name: 'kohchang.digital', catKey: 'platform', price: 0, yearlyRent: 0,
    emoji: '💻',
    uses: { de: ['Digitalagentur & IT-Services', 'Web-Entwicklung, App-Design & SEO'], en: ['Digital agency & IT services', 'Web development, app design & SEO'] },
    desc: { de: 'Digitale Lösungen, IT-Services und Technologie auf Koh Chang.', en: 'Digital solutions, IT services and technology on Koh Chang.' }
  },
  {
    name: 'kohchang.expert', catKey: 'platform', price: 0, yearlyRent: 0,
    emoji: '👔',
    uses: { de: ['Experten-Marktplatz & Fachberatung', 'Juristen, Steuerberater & Business-Coaches'], en: ['Expert marketplace & professional consulting', 'Lawyers, tax advisors & business coaches'] },
    desc: { de: 'Expertennetzwerk und Fachberatung in allen Branchen auf Koh Chang.', en: 'Expert network and professional consultancy in all sectors on Koh Chang.' }
  },
  {
    name: 'kohchang.fashion', catKey: 'biz', price: 0, yearlyRent: 0,
    emoji: '👗',
    uses: { de: ['Modeboutique & Designer-Shop', 'Online-Mode & Accessoires für Touristen'], en: ['Fashion boutique & designer shop', 'Online fashion & accessories for tourists'] },
    desc: { de: 'Mode, Boutiquen und Designer auf Koh Chang.', en: 'Fashion, boutiques and designers on Koh Chang.' }
  },
  {
    name: 'kohchang.forum', catKey: 'platform', price: 0, yearlyRent: 0,
    emoji: '💭',
    uses: { de: ['Community-Forum & Diskussionsplattform', 'Expat-Austausch & Fragen & Antworten'], en: ['Community forum & discussion platform', 'Expat exchange & Q&A board'] },
    desc: { de: 'Diskussionsforum und Community für Koh-Chang-Fans und Expats.', en: 'Discussion forum and community for Koh Chang fans and expats.' }
  },
  {
    name: 'kohchang.hair', catKey: 'wellness', price: 0, yearlyRent: 0,
    emoji: '✂️',
    uses: { de: ['Friseursalon & professioneller Hairstylist', 'Haarverlängerung, Colorationen & Pflege'], en: ['Hair salon & professional hairstylist', 'Hair extensions, colouring & care'] },
    desc: { de: 'Friseursalons, Haarpflege und Stylisten auf Koh Chang.', en: 'Hair salons, hair care and stylists on Koh Chang.' }
  },
  {
    name: 'kohchang.health', catKey: 'wellness', price: 0, yearlyRent: 0,
    emoji: '❤️',
    uses: { de: ['Gesundheitsportal & Arztsuche auf der Insel', 'Prävention, Ernährungsberatung & Fitness'], en: ['Health portal & doctor search on the island', 'Prevention, nutrition consulting & fitness'] },
    desc: { de: 'Gesundheitsversorgung, Prävention und Wellness auf Koh Chang.', en: 'Healthcare, prevention and wellness services on Koh Chang.' }
  },
  {
    name: 'kohchang.help', catKey: 'platform', price: 0, yearlyRent: 0,
    emoji: '🤝',
    uses: { de: ['Support-Portal & Hilfe-Center für Besucher', 'Notrufnummern & Notfall-Assistenz'], en: ['Support portal & help centre for visitors', 'Emergency numbers & crisis assistance'] },
    desc: { de: 'Hilfe-Portal und Support für Besucher und Einwohner auf Koh Chang.', en: 'Help portal and support for visitors and residents on Koh Chang.' }
  },
  {
    name: 'kohchang.homes', catKey: 'realestate', price: 0, yearlyRent: 0,
    emoji: '🏠',
    uses: { de: ['Immobilienportal für Häuser & Wohnungen', 'Kauf, Miete & Ferienwohnungsvermittlung'], en: ['Property portal for houses & apartments', 'Buy, rent & holiday home listings'] },
    desc: { de: 'Häuser, Wohnungen und Ferienwohnungen zum Kauf oder zur Miete.', en: 'Houses, apartments and holiday homes for sale or rent on Koh Chang.' }
  },
  {
    name: 'kohchang.ink', catKey: 'biz', price: 0, yearlyRent: 0,
    emoji: '🎨',
    uses: { de: ['Tattoo-Studio & Kunstgalerie', 'Druckerei, Schilder & Designagentur'], en: ['Tattoo studio & art gallery', 'Print shop, signage & design agency'] },
    desc: { de: 'Tattoo-Studios, Druckereien und Designagenturen auf Koh Chang.', en: 'Tattoo studios, print shops and design agencies on Koh Chang.' }
  },
  {
    name: 'kohchang.living', catKey: 'platform', price: 0, yearlyRent: 0,
    emoji: '🏡',
    uses: { de: ['Wohn- & Lebensmagazin für Expats', 'Inneneinrichtung & Haushaltstipps'], en: ['Living & lifestyle magazine for expats', 'Interior design & household tips'] },
    desc: { de: 'Wohnen, Alltag und Lebensqualität auf Koh Chang — für Expats und Einheimische.', en: 'Living, daily life and quality of life on Koh Chang — for expats and locals.' }
  },
  {
    name: 'kohchang.marketing', catKey: 'marketing', price: 0, yearlyRent: 0,
    emoji: '📊',
    uses: { de: ['Marketingagentur & Werbedienstleistungen', 'SEO, Social Media & Kampagnen-Management'], en: ['Marketing agency & advertising services', 'SEO, social media & campaign management'] },
    desc: { de: 'Marketingagentur und Werbelösungen für Unternehmen auf Koh Chang.', en: 'Marketing agency and advertising solutions for businesses on Koh Chang.' }
  },
  {
    name: 'kohchang.pizza', catKey: 'biz', price: 0, yearlyRent: 0,
    emoji: '🍕',
    uses: { de: ['Pizzeria & Lieferdienst auf der Insel', 'Catering & Event-Restaurantservice'], en: ['Pizzeria & delivery service on the island', 'Catering & event restaurant service'] },
    desc: { de: 'Pizzerien, Lieferservice und Italian Food auf Koh Chang.', en: 'Pizzerias, delivery service and Italian food on Koh Chang.' }
  },
  {
    name: 'kohchang.sale', catKey: 'biz', price: 0, yearlyRent: 0,
    emoji: '🏷️',
    uses: { de: ['Sonderangebote, Rabattcodes & Flash-Sales', 'Auktionsplattform & Restposten-Marktplatz'], en: ['Special offers, discount codes & flash sales', 'Auction platform & clearance marketplace'] },
    desc: { de: 'Sonderangebote, Rabattaktionen und Flash-Sales auf Koh Chang.', en: 'Special offers, discount campaigns and flash sales on Koh Chang.' }
  },
  {
    name: 'kohchang.shop', catKey: 'biz', price: 0, yearlyRent: 0,
    emoji: '🛍️',
    uses: { de: ['Online-Shop & lokaler Marktplatz', 'Souvenirs, Mode & regionale Produkte'], en: ['Online shop & local marketplace', 'Souvenirs, fashion & regional products'] },
    desc: { de: 'Online-Shop und Einzelhandel für Produkte aus Koh Chang.', en: 'Online shop and retail for products from Koh Chang.' }
  },
  {
    name: 'kohchang.skin', catKey: 'wellness', price: 0, yearlyRent: 0,
    emoji: '🌸',
    uses: { de: ['Hautpflegeklinik & Dermatologie-Praxis', 'Anti-Aging & kosmetische Behandlungen'], en: ['Skincare clinic & dermatology practice', 'Anti-ageing & cosmetic treatments'] },
    desc: { de: 'Hautpflege, Dermatologie und Schönheitsbehandlungen auf Koh Chang.', en: 'Skincare, dermatology and beauty treatments on Koh Chang.' }
  },
  {
    name: 'kohchang.trade', catKey: 'biz', price: 0, yearlyRent: 0,
    emoji: '🤝',
    uses: { de: ['Import/Export & Handelsunternehmen', 'B2B-Marktplatz & Lieferantenverzeichnis'], en: ['Import/export & trading company', 'B2B marketplace & supplier directory'] },
    desc: { de: 'Handel, Import/Export und Business-to-Business auf Koh Chang.', en: 'Trade, import/export and business-to-business on Koh Chang.' }
  },
  {
    name: 'kohchang.wiki', catKey: 'platform', price: 0, yearlyRent: 0,
    emoji: '📚',
    uses: { de: ['Reise-Wiki & Community-Wissensdatenbank', 'Lokale Geschichte, Kultur & Infos'], en: ['Travel wiki & community knowledge base', 'Local history, culture & information'] },
    desc: { de: 'Wissensdatenbank und Community-Wiki über Koh Chang.', en: 'Knowledge base and community wiki about Koh Chang.' }
  },
  {
    name: 'kohchang.wine', catKey: 'biz', price: 0, yearlyRent: 0,
    emoji: '🍷',
    uses: { de: ['Weinhandlung & Sommelierberatung', 'Weinproben, Weinreisen & Event-Catering'], en: ['Wine merchant & sommelier consulting', 'Wine tastings, wine tours & event catering'] },
    desc: { de: 'Weinhandel, Weinproben und Sommelierberatung auf Koh Chang.', en: 'Wine merchant, wine tastings and sommelier consulting on Koh Chang.' }
  },
  {
    name: 'kohchang.work', catKey: 'platform', price: 0, yearlyRent: 0,
    emoji: '👩‍💻',
    uses: { de: ['Job-Board & Freelancer-Netzwerk', 'Remote-Work-Hub & Arbeitsangebote'], en: ['Job board & freelancer network', 'Remote work hub & job listings'] },
    desc: { de: 'Jobportal, Freelancer-Netzwerk und Arbeitsmarkt auf Koh Chang.', en: 'Job portal, freelancer network and labour market on Koh Chang.' }
  }
];
