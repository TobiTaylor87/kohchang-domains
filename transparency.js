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
      name:  { de: 'Koh Chang Rescue — Tong', en: 'Koh Chang Rescue — Tong', th: 'กู้ภัยเกาะช้าง — ต้อง' },
      desc:  {
        de: 'Ehrenamtlicher Rettungsdienst unter der Leitung von Tong, der täglich Leben auf der Insel rettet — rund um die Uhr, ohne Bezahlung.',
        en: 'Volunteer rescue service led by Tong, saving lives on the island every day — around the clock, unpaid.',
        th: 'หน่วยกู้ภัยอาสาสมัครนำโดยต้อง ช่วยชีวิตผู้คนบนเกาะทุกวัน ตลอด 24 ชั่วโมง โดยไม่ได้รับค่าตอบแทน'
      },
      website:       'https://www.facebook.com/TongRescuekohchang',
      totalReceived: 0
    },
    {
      id:    'animal-project',
      emoji: '🐾',
      name:  { de: 'Koh Chang Animal Project', en: 'Koh Chang Animal Project', th: 'โครงการสัตว์เกาะช้าง' },
      desc:  {
        de: 'Schutz, Versorgung und Kastration von Straßentieren auf Koh Chang. Eine der wichtigsten Tierschutzorganisationen der Insel.',
        en: 'Protecting, caring for and neutering street animals on Koh Chang. One of the island\'s most important animal welfare organisations.',
        th: 'คุ้มครอง ดูแล และทำหมันสัตว์จรจัดบนเกาะช้าง หนึ่งในองค์กรสวัสดิภาพสัตว์ที่สำคัญที่สุดของเกาะ'
      },
      website:       'http://www.kohchanganimalproject.org/',
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
