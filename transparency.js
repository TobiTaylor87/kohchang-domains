/**
 * KohChang Business Domains — Transparenz & Spenden
 *
 * UPDATE-WORKFLOW:
 *   Wenn eine Domain verkauft oder vermietet wurde:
 *   1. Eintrag in TRANSACTIONS hinzufügen
 *   2. STATS aktualisieren
 *   3. Wenn 5 Domains erreicht: DONATIONS-Eintrag hinzufügen
 *      und currentRound zurücksetzen
 *   4. Browser-Seite neu laden → alles aktualisiert sich
 *
 * TRIGGER FÜR SPENDE:
 *   Nach je 5 verkauften/gemieteten Domains werden die
 *   gesammelten Erlöse (mind. 25%) an lokale Non-Profits
 *   auf Koh Chang ausgezahlt.
 */

const TRANSPARENCY = {

  /* ── Spendenziele ──────────────────────────────────
     Neue Organisation hinzufügen: einfach Eintrag
     kopieren und Felder ausfüllen. Seite neu laden → fertig.
  ─────────────────────────────────────────────────── */
  donationTargets: [
    {
      id:    'rescue',
      emoji: '🚑',
      name:  { de: 'Koh Chang Rescue', en: 'Koh Chang Rescue', th: 'กู้ภัยเกาะช้าง' },
      desc:  {
        de: 'Ehrenamtlicher Rettungsdienst, der täglich Leben auf der Insel rettet — rund um die Uhr, ohne Bezahlung.',
        en: 'Volunteer rescue service saving lives on the island every day — around the clock, unpaid.',
        th: 'หน่วยกู้ภัยอาสาสมัครที่ช่วยชีวิตผู้คนบนเกาะทุกวัน ตลอด 24 ชั่วโมง โดยไม่ได้รับค่าตอบแทน'
      },
      website:       '',   /* optional: Link zur Organisation */
      totalReceived: 0     /* wird automatisch aus donations berechnet */
    },
    {
      id:    'animal-welfare',
      emoji: '🐾',
      name:  { de: 'Tierwohl Koh Chang', en: 'Animal Welfare Koh Chang', th: 'สวัสดิภาพสัตว์เกาะช้าง' },
      desc:  {
        de: 'Projekte für den Schutz, die Versorgung und Kastration von Straßentieren auf der Insel.',
        en: 'Projects protecting, caring for and neutering street animals on the island.',
        th: 'โครงการคุ้มครอง ดูแล และทำหมันสัตว์จรจัดบนเกาะ'
      },
      website:       '',
      totalReceived: 0
    }
    /* ── Weitere Spendenziele hier einfügen: ──────────
    ,{
      id:    'mein-ziel-id',
      emoji: '🌿',
      name:  { de: 'Name auf Deutsch', en: 'Name in English', th: 'ชื่อภาษาไทย' },
      desc:  { de: 'Beschreibung...', en: 'Description...', th: 'คำอธิบาย...' },
      website: 'https://...',
      totalReceived: 0
    }
    ─────────────────────────────────────────────────── */
  ],

  /* ── Gesamtstatistik ───────────────────────────── */
  stats: {
    totalDomainsSold:   0,   // Gesamt verkaufte Domains
    totalDomainsRented: 0,   // Gesamt vermietete Domains
    totalRaisedEur:     0,   // Gesamt eingenommene Erlöse (EUR)
    totalDonatedEur:    0,   // Gesamt gespendete Betrag (EUR)
    currentRound:       0,   // Domains in aktueller Runde (von 5)
    currentRoundEur:    0,   // Erlöse der aktuellen Runde (EUR)
    donateTrigger:      5    // Anzahl Domains pro Spendenrunde
  },

  /* ── Abgeschlossene Spendenaktionen ───────────────
     Nach je 5 Domains werden Spenden ausgezahlt.
     Hier wird jede Aktion dokumentiert.
  ─────────────────────────────────────────────────── */
  donations: [
    /* Beispiel-Eintrag (löschen sobald echte Daten vorhanden):
    {
      date:         '2025-06-01',
      organisation: 'Koh Chang Rescue',
      amountEur:    125,
      note:         '25% aus 5 Domain-Transaktionen (Runde 1)',
      proof:        ''   // optionaler Link zu Nachweis/Foto
    }
    */
  ],

  /* ── Abgeschlossene Transaktionen ─────────────────
     Jede verkaufte oder gemietete Domain wird hier
     dokumentiert — für volle Transparenz.
  ─────────────────────────────────────────────────── */
  transactions: [
    /* Beispiel-Eintrag (löschen sobald echte Daten vorhanden):
    {
      date:        '2025-06-01',
      domain:      'kohchang.spa',
      type:        'sale',            // 'sale' oder 'rent'
      amountEur:   500,
      donationEur: 125,               // mind. 25%
      note:        'Verkauf an lokales Wellnessstudio'
    }
    */
  ]
};
