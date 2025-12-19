import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// =====================================================
// GERMAN TRANSLATIONS (COMPLETE)
// =====================================================
const de = {
  // ========== NAVIGATION ==========
  nav: {
    home: "Startseite",
    companies: "Unternehmen",
    talents: "Fachkräfte",
    services: "Leistungen",
    contact: "Kontakt",
    login: "Login",
    register: "Kostenlos registrieren",
    signIn: "Anmelden"
  },

  // ========== HERO SECTION ==========
  hero: {
    badge: "Live Recruiting Platform",
    titleLine1: "Internationale",
    titleLine2: "Fachkräfte finden",
    subtitleLine1: "Rekrutierung",
    subtitleLine2: "smart gestalten",
    description: "Worknova verbindet digitale Intelligenz mit persönlicher Begleitung und unterstützt Unternehmen bei der Gewinnung internationaler Fachkräfte, während Bewerber einen sicheren Einstieg finden.",
    forCompanies: "FÜR FIRMEN",
    forApplicants: "FÜR BEWERBER",
    startAsCompany: "Als Unternehmer starten",
    findTalents: "Passende Talente effizient finden",
    startNow: "Jetzt starten",
    startAsTalent: "Als Fachkraft starten",
    secureDreamJob: "Traumjob in Deutschland sichern",
    applyNow: "Jetzt bewerben"
  },

  // ========== DASHBOARD PREVIEW ==========
  dashboard: {
    overview: "Übersicht",
    pipeline: "Pipeline",
    documents: "Dokumente",
    recruitingCentral: "Recruiting Central",
    globalTalentFeed: "Global Talent Feed v4.0",
    startDemo: "Demo starten",
    activePipeline: "Aktive Pipeline",
    aiMatchRate: "KI Match-Rate",
    optimal: "Optimal",
    integrations: "Integrationen",
    live: "Live",
    intelligentSourcing: "Intelligent Sourcing Engine",
    searchQuery: "Suche Profile für Cloud-Engineers aus Südamerika.",
    foundCandidates: "Gefunden: 12 Kandidaten",
    verifiedVisa: "8 verfügen über verifizierte Visa-Historie.",
    viewMatches: "Matches anzeigen",
    analyzeScore: "Score analysieren",
    realTimeUpdates: "Echtzeit-Updates",
    visaRequest: "Visa-Antrag",
    interview: "Interview",
    docCheck: "Dokument-Check",
    matching: "Matching",
    complianceSecured: "Compliance gesichert",
    latency: "Latenz",
    smartDashboard: "Ein smart aufgebautes Dashboard für",
    maxOverview: "maximale Übersicht",
    dashboardDesc: "Verschaffen Sie sich einen ersten Eindruck von einer Oberfläche, die Komplexität reduziert, Orientierung in Echtzeit schafft und jeden Schritt Ihres Rekrutierungsprozesses sichtbar macht.",
    searchTalent: "Fachkraft suchen",
    company: "Unternehmen",
    jobTitle: "Berufsbezeichnung",
    location: "Einsatzort",
    search: "Suchen",
    myTalents: "Meine Fachkräfte",
    documentsCloud: "Dokumente & Cloud",
    powerOfAttorney: "Vollmacht",
    employerQuestionnaire: "Unternehmerfragebogen",
    postJob: "Stellenanzeige aufgeben",
    companyProfile: "Unternehmensprofil",
    companyDocuments: "Unternehmensdokumente",
    serviceContracts: "Dienstleistungsverträge",
    officialTranslations: "Amtliche Übersetzungen",
    chat: "Chat",
    invoicesPayments: "Rechnungen & Zahlungen",
    processMonitoring: "Prozessüberwachung",
    requestDemo: "Jetzt Demo anfragen",
    learnMorePlatform: "Mehr über die Plattform erfahren"
  },

  // ========== TARGET GROUPS ==========
  targetGroups: {
    headline: "Gemeinsam erreichen Unternehmen und Fachkräfte",
    headlineHighlight: "neue Höhen mit digitaler Kompetenz",
    description: "Wir verbinden persönliche Unterstützung mit effizientem Wachstum für eine erfolgreiche, gemeinsame Zukunft.",
    applicants: "Bewerber",
    applicantsIntroStart: "Setzen Sie auf",
    applicantsHighlight: "klare Perspektiven",
    applicantsIntroEnd: ", persönliche Begleitung und einen sicheren Einstieg in das neue Arbeitsumfeld.",
    learnMore: "Mehr erfahren",
    showLess: "Weniger anzeigen",
    applicantsText1: "Mit Worknova erhalten Sie Zugang zu sorgfältig ausgewählten Stellen bei deutschen Unternehmen. Sie können sich digital und einfach im Bewerbungsprozess orientieren und Ihre Fähigkeiten gezielt einbringen.",
    applicantsText2: "Unsere Plattform unterstützt Sie mit klaren Informationen, hilfreichen Funktionen und einer verlässlichen Begleitung durch wichtige Schritte, damit Sie Ihren beruflichen Weg in Deutschland sicher planen und Ihren Neustart gut vorbereitet gestalten können.",
    applicantsHighlightBox: "Entdecken Sie passende Stellenangebote und verschaffen Sie sich einen ersten Eindruck Ihrer beruflichen Möglichkeiten.",
    toTalentPage: "Zur Fachkräfte-Seite",
    companies: "Unternehmen",
    companiesIntroStart: "Setzen Sie auf",
    companiesHighlight: "maßgeschneiderte Rekrutierungslösungen",
    companiesIntroEnd: ", digitale Effizienz und nachhaltige Begleitung.",
    companiesText1: "Mit Worknova erhalten Sie Zugang zu einem sorgfältig geprüften Pool internationaler Fachkräfte. Über die Plattform steuern Sie Auswahl, Kommunikation und Prozessschritte übersichtlich und effizient.",
    companiesText2: "Worknova unterstützt Unternehmen bei wichtigen Verfahren wie Anerkennung, Visum und der Kommunikation mit den zuständigen Stellen und begleitet alle Beteiligten durch den gesamten Rekrutierungsweg.",
    companiesHighlightBox: "Schaffen Sie eine solide Grundlage für nachhaltiges Wachstum und stärken Sie Ihr Profil als attraktiver Arbeitgeber.",
    requestDemo: "Demo anfragen"
  },

  // ========== PROCESS TIMELINE ==========
  process: {
    liveTracking: "Live Tracking",
    processMonitoring: "Fachkraft Prozess-Überwachung",
    processDesc: "Übersicht aller Fachkräfte mit aktuellem Status in den vier Prozessschritten.",
    step1Title: "Vertragsbündelung",
    step1Tooltip: "Alle erforderlichen Unterlagen gesammelt, geprüft und für die nächsten Schritte vorbereitet.",
    step2Title: "Behördenprüfung und Preboarding",
    step2Tooltip: "Alle notwendigen Anträge beantragt und koordiniert, Fachkräfte erhalten wichtige Informationen.",
    step3Title: "Arbeitsbeginn und Onboarding",
    step3Tooltip: "Strukturierte Vorbereitung auf den Arbeitsbeginn, Orientierung für Fachkräfte.",
    step4Title: "Abgeschlossene Probezeit",
    step4Tooltip: "Start im Unternehmen und Integration begleitet, erste Monate überwacht.",
    workStart: "Arbeitsaufnahme",
    reference: "Referenz",
    assistant: "Assistentin",
    informatics: "Informatik",
    softwareTech: "Softwaretechnik",
    phase: "Phase",
    mobileApp: "Mobile App",
    pocketTitle: "Worknova für die",
    pocketHighlight: "Hosentasche.",
    pocketDesc: "Die gesamte Power unserer Plattform in einer App. Probieren Sie den Chat auf dem Handy rechts aus – wir antworten in Echtzeit.",
    releaseNotify: "Benachrichtigung beim Release?",
    emailPlaceholder: "Ihre E-Mail Adresse",
    weWillContact: "Wir melden uns!",
    worknova: "Worknova Support",
    respondsImmediately: "Antwortet sofort",
    today: "Heute",
    writeMessage: "Nachricht schreiben...",
    quickReply1: "Ist mein Visum da? 📄",
    quickReply2: "Wann ist Arbeitsbeginn? 📅",
    quickReply3: "Dokumente hochladen 📤",
    chatGreeting: "Hallo! 👋 Gibt es ein Update zu meinem Visumsantrag?",
    chatResponse1: "Gute Nachrichten! ✅ Die Vorabzustimmung ist soeben eingetroffen.",
    chatVisaApproved: "Dein Visum wurde genehmigt! 🎉 Bestätigung ist per Mail raus.",
    chatWorkStart: "Dein erster Arbeitstag ist der 01. November. 🚀",
    chatUploadDocs: "Lade Dokumente einfach hier hoch.",
    chatDefault: "Ich habe deine Anfrage weitergeleitet."
  },

  // ========== FOOTER ==========
  footer: {
    address: "Karlstr. 68",
    city: "76137 Karlsruhe",
    country: "Deutschland",
    scrollToTop: "Nach oben",
    platform: "Plattform",
    aboutWorknova: "Über Worknova",
    imprint: "Impressum",
    privacy: "Datenschutzerklärung",
    terms: "Nutzungsbedingungen",
    paymentInfo: "Zahlungsinformationen",
    links: "Links",
    contact: "Kontakt",
    faq: "FAQ",
    requestDemo: "Demo anfragen",
    appVersion: "App Version",
    comingSoon: "Bald verfügbar",
    socialMedia: "Soziale Medien",
    visitLinkedin: "Worknova auf LinkedIn besuchen",
    visitInstagram: "Worknova auf Instagram besuchen",
    copyright: "Morsnova GmbH. Alle Rechte vorbehalten.",
    madeWith: "Made with ❤️ in Karlsruhe"
  },

  // ========== CONTACT SECTION ==========
  contact: {
    writeUs: "Schreiben Sie uns",
    weAreHere: "Wir sind für Sie da.",
    personalDirect: "Persönlich & Direkt.",
    contactText: "Ob Sie ein Unternehmen sind, das Fachkräfte sucht, oder eine Fachkraft, die in Deutschland arbeiten möchte: Unser Team berät Sie gerne. Persönlich, kompetent und in Ihrer Sprache.",
    responseTime: "Antwort innerhalb von 24 Stunden",
    emailContact: "E-Mail Kontakt",
    headquarters: "Hauptsitz",
    supportTeam: "Unser Support-Team spricht",
    languages: "Deutsch, Englisch & Türkisch",
    tellUs: "Teilen Sie uns Ihr Anliegen mit.",
    getBack: "Wir melden uns schnellstmöglich bei Ihnen zurück.",
    firstName: "Vorname",
    lastName: "Nachname",
    email: "E-Mail Adresse",
    company: "Firma",
    phone: "Telefonnummer",
    subject: "Betreff",
    subjectPlaceholder: "Worum geht es?",
    message: "Nachricht",
    messagePlaceholder: "Ihre Nachricht an uns...",
    privacyText: "Ich akzeptiere die",
    privacyLink: "Datenschutzerklärung",
    privacyPolicy: "Datenschutzerklärung",
    privacyEnd: "und stimme der Verarbeitung meiner Daten zu.",
    sendMessage: "Nachricht senden",
    sending: "Wird gesendet...",
    successTitle: "Nachricht gesendet!",
    successMessage: "Vielen Dank für Ihre Anfrage. Wir melden uns in Kürze bei Ihnen.",
    newMessage: "Neue Nachricht"
  },

  // ========== FAQ SECTION ==========
  faq: {
    badge: "FAQ & Support",
    title: "Häufig gestellte",
    titleHighlight: "Fragen.",
    questionNotFound: "Frage nicht gefunden?",
    supportHelp: "Unser Support-Team hilft Ihnen gerne persönlich weiter.",
    contactUs: "Kontakt aufnehmen",
    helpCenter: "Hilfe-Center",
    questionsAnswers: "Fragen &",
    answers: "Antworten.",
    faqDescription: "Alles, was Sie über den Rekrutierungsprozess, die Anerkennung und den Start mit Worknova wissen müssen.",
    forCompanies: "Für Unternehmen",
    forTalents: "Für Fachkräfte",
    stillQuestions: "Noch Fragen offen?",
    stillQuestionsDesc: "Unser Team berät Sie gerne persönlich. Wir antworten in der Regel innerhalb von 24 Stunden.",
    contactNow: "Jetzt Kontakt aufnehmen",
    companyFaqSubtitle: "Strategische Einblicke in unseren Rekrutierungsprozess und die Zusammenarbeit.",
    talentFaqSubtitle: "Informationen zu deinem Weg nach Deutschland, Anerkennung und Integration.",
    // Company FAQ
    companyQ1: "Wie lange dauert es, bis ich passende Kandidaten finde?",
    companyA1: "Nach der Registrierung erhalten Sie innerhalb von 24 bis 48 Stunden die ersten passenden Profile. Die KI arbeitet rund um die Uhr und durchsucht kontinuierlich unseren internationalen Talentpool.",
    companyQ2: "Sind die Qualifikationen wirklich anerkannt?",
    companyA2: "Ja. Alle Kandidaten durchlaufen eine Anabin Prüfung. Wir prüfen, ob die Qualifikation in Deutschland anerkannt ist oder anerkannt werden kann. Sie sehen nur Kandidaten mit positiver Prognose.",
    companyQ3: "Was kostet die Nutzung?",
    companyA3: "Die Registrierung und Kandidatensuche sind kostenlos. Sie zahlen nur bei erfolgreicher Vermittlung. Transparente Preise ohne versteckte Kosten.",
    companyQ4: "Übernehmen Sie Visum und Einreise?",
    companyA4: "Ja, komplett. Wir begleiten den gesamten Prozess: Visumsantrag, Terminvereinbarung, Dokumentenvorbereitung, Einreise. Sie müssen sich um nichts kümmern.",
    companyQ5: "Was passiert nach der Einstellung?",
    companyA5: "Unser Integrationssupport begleitet Ihre Mitarbeiter in den ersten 6 Monaten. Behördengänge, Wohnungssuche, kulturelle Integration. Für langfristigen Erfolg.",
    companyQ6: "Welche Branchen deckt Worknova ab?",
    companyA6: "Alle Branchen: IT, Pflege, Handwerk, Ingenieurwesen, Gastronomie, Logistik und mehr. Unser Talentpool ist breit aufgestellt.",
    companyQ7: "Wie gewährleisten Sie Qualität?",
    companyA7: "Dreistufiger Prozess: Dokumentenprüfung, Qualifikationscheck, Sprachtest. Nur 15% der Bewerber werden akzeptiert. Hohe Qualitätsstandards.",
    // Talent FAQ
    talentQ1: "Muss mein Abschluss in Deutschland anerkannt werden?",
    talentA1: "Ja, alle Berufe müssen geprüft und anerkannt werden. Worknova unterstützt dich bei diesem Prozess durch automatisierte Checks (ZAB/ZAV).",
    talentQ2: "Wie läuft die Anerkennung ab?",
    talentA2: "Wir prüfen Ihre Qualifikation bei den zuständigen Behörden (z. B. ZAB/ZAV), um festzustellen, ob sie einer deutschen Qualifikation entspricht. Sollte dies nicht der Fall sein, kann eine ergänzende Weiterbildung erforderlich sein.",
    talentQ3: "Darf ich sofort nach meiner Einreise arbeiten?",
    talentA3: "Ja, sobald Sie die Aufenthaltserlaubnis als Fachkraft erhalten haben und alle Sozialversicherungen rechtlich angemeldet sind.",
    talentQ4: "Was passiert, wenn ich meinen Job verliere?",
    talentA4: "Sie müssen dies der Ausländerbehörde melden. Sie haben dann in der Regel 3–6 Monate Zeit, einen neuen Arbeitsplatz zu finden, bevor Ihr Aufenthaltstitel erlischt.",
    talentQ5: "Kann meine Familie mit nach Deutschland kommen?",
    talentA5: "Ja, Ehepartner und Kinder können im Rahmen des Familiennachzugs nachkommen. Ehepartner müssen in der Regel einfache Deutschkenntnisse (A1) nachweisen – es gibt aber Ausnahmen, z. B. bei Blaue-Karte-Inhabern.",
    talentQ6: "Fallen für die Nutzung der Plattform Zahlungen an?",
    talentA6: "Die Nutzung unserer Plattform ist grundsätzlich kostenfrei. Für zusätzliche Dienstleistungen wie Übersetzungen, Sprachkurse oder externe Qualifizierungen können Gebühren anfallen. Diese Leistungen werden jedoch über unsere Partner und das externe Netzwerk abgewickelt, nicht direkt über die Plattform.",
    talentQ7: "Unterstützt die Plattform bei Integration oder Orientierung in Deutschland?",
    talentA7: "Ja! Wir bereiten Fachkräfte von Anfang an auf Leben und Arbeiten in Deutschland vor, mit Onboarding-Kursen, direktem Austausch vor der Einreise und praktischen Tipps für den Start."
  },

  // ========== LOGIN PAGE ==========
  login: {
    welcomeBack: "Willkommen",
    back: "zurück.",
    description: "Melden Sie sich an, um auf Ihr Dashboard zuzugreifen und Ihre Rekrutierungsprozesse zu verwalten.",
    feature1: "Echtzeit-Updates zu Ihren Kandidaten",
    feature2: "Sichere Kommunikation über die Plattform",
    feature3: "Volle Kontrolle über Ihre Prozesse",
    signIn: "Anmelden",
    accountAccess: "Zugang zu Ihrem Konto",
    emailLabel: "E-Mail-Adresse",
    emailPlaceholder: "ihre@email.de",
    passwordLabel: "Passwort",
    forgotPassword: "Passwort vergessen?",
    rememberMe: "Angemeldet bleiben",
    loginButton: "Anmelden",
    loggingIn: "Wird angemeldet...",
    noAccount: "Noch kein Konto?",
    registerNow: "Jetzt registrieren",
    ssl: "256-bit SSL",
    gdpr: "DSGVO-konform",
    loginInfoMessage: "Die Login-Funktion wird nach dem Launch aktiviert. Kontaktieren Sie uns für einen Demo-Zugang."
  },

  // ========== REGISTER PAGE ==========
  register: {
    startToday: "Starten Sie",
    today: "noch heute.",
    description: "Erstellen Sie Ihr kostenloses Konto und erleben Sie die Zukunft des internationalen Recruitings.",
    feature1: "KI-gestütztes Matching in 24 Stunden",
    feature2: "Rechtssichere Abwicklung garantiert",
    feature3: "Kostenlose Registrierung",
    registerTitle: "Registrieren",
    chooseAccountType: "Wählen Sie Ihren Kontotyp",
    companyAccount: "Unternehmenskonto",
    talentProfile: "Fachkraft-Profil",
    fillForm: "Füllen Sie das Formular aus",
    company: "Unternehmen",
    companyDesc: "Qualifizierte Fachkräfte finden",
    talent: "Fachkraft",
    talentDesc: "Karriere in Deutschland starten",
    alreadyAccount: "Bereits ein Konto?",
    loginHere: "Hier einloggen",
    internationalPool: "Internationaler Talentpool",
    aiMatching: "KI-Matching in 24h",
    legallySecure: "Rechtssicher",
    personalSupport: "Persönliche Betreuung",
    topEmployers: "Top-Arbeitgeber",
    visaSupport: "Visa-Support",
    integrationSupport: "Integrationsbegleitung",
    freeOfCharge: "100% kostenlos",
    contactPerson: "Ansprechpartner",
    fullName: "Vollständiger Name",
    companyName: "Firmenname",
    emailLabel: "E-Mail-Adresse",
    emailPlaceholder: "ihre@email.de",
    passwordLabel: "Passwort",
    minChars: "Min. 8 Zeichen",
    acceptTerms: "Ich akzeptiere die",
    termsLink: "AGB",
    and: "und",
    privacyLink: "Datenschutzerklärung",
    registerButton: "Kostenlos registrieren",
    creating: "Wird erstellt...",
    backToSelection: "← Zurück zur Auswahl",
    welcomeTitle: "🎉 Willkommen!",
    successCreated: "Erfolgreich erstellt",
    successTitle: "Erfolgreich registriert!",
    successMessage: "Wir haben Ihnen eine Bestätigungs-E-Mail gesendet. Prüfen Sie Ihr Postfach.",
    toHomepage: "Zur Startseite",
    gdpr: "DSGVO-konform",
    ssl: "256-bit SSL"
  },

  // ========== NOT FOUND PAGE ==========
  notFound: {
    badge: "Fehler 404",
    title: "Seite nicht",
    titleLine2: "gefunden.",
    description: "Die angeforderte Seite existiert leider nicht. Es tut uns leid für die Unannehmlichkeiten.",
    toHome: "Zur Startseite",
    helpFaq: "Hilfe & FAQ"
  },

  // ========== LANGUAGE ==========
  language: {
    de: "Deutsch",
    en: "English",
    tr: "Türkçe",
    select: "Sprache wählen",
    label: "Sprache"
  },

  // ========== COMMON ==========
  common: {
    learnMore: "Mehr erfahren",
    getStarted: "Jetzt starten",
    close: "Schließen",
    loading: "Laden...",
    error: "Fehler",
    success: "Erfolg",
    cancel: "Abbrechen",
    confirm: "Bestätigen",
    save: "Speichern",
    delete: "Löschen",
    edit: "Bearbeiten",
    view: "Ansehen",
    back: "Zurück",
    next: "Weiter",
    previous: "Zurück",
    yes: "Ja",
    no: "Nein",
    or: "oder",
    and: "und"
  },

  // ========== TALENT PAGE ==========
  talentPage: {
    heroTitle1: "Dein Traumjob",
    heroTitle2: "findet dich.",
    heroDescription: "Erstelle einmal dein Profil. Unsere KI matcht dich mit Top-Unternehmen in Deutschland. Kein Anschreiben, keine endlose Suche.",
    inquireNow: "Jetzt anfragen",
    howItWorks: "So funktioniert's",
    verified: "Verifiziert",
    qualification: "Qualifikation",
    language: "Sprache",
    perfectMatch: "Perfect Match",
    aiMatchingActive: "KI-Matching Aktiv",
    systemStandby: "System Standby",
    free: "Kostenlos",
    setup: "Setup",
    matchRate: "Match-Rate",
    support: "Support",
    yourWayToDE: "Dein Weg nach DE.",
    digitalSecure: "Digital & Sicher.",
    processDescription: "Wir haben den gesamten Rekrutierungsprozess digitalisiert und vereinfacht.",
    userJourney: "User Journey",
    in3Steps: "In 3 Schritten",
    toSuccess: "zum Erfolg.",
    step01: "Schritt 01",
    step02: "Schritt 02",
    step03: "Schritt 03",
    smartUpload: "Smart Upload",
    smartUploadDesc: "Unsere KI erkennt Ihre Dokumente automatisch und prüft sie in Echtzeit.",
    myDocuments: "Meine Unterlagen",
    documentsReady: "3 von 5 Dokumenten bereit",
    validated: "Validiert",
    analyzing: "Analysiere...",
    profileBoost: "Profil-Boost",
    profileBoostDesc: "Erhalten Sie einen Match-Score und erfahren Sie, wie Sie Ihr Profil optimieren.",
    strong: "Stark",
    aiRecommendation: "KI-Empfehlung",
    addCertificate: "Zertifikat \"Deutsch B2\" hinzufügen (+10%).",
    liveMatches: "Live Matches",
    liveMatchesDesc: "Werden Sie direkt von Arbeitgebern gefunden, die zu Ihren Wünschen passen.",
    topSuggestions: "Top-Vorschläge",
    newNow: "JETZT NEU",
    match: "Match",
    pushInfo: "Push-Info",
    newInvitation: "1 neue Einladung erhalten!",
    jobOverview: "Ihre Stellenangebote im Überblick",
    jobOverviewDesc: "einfach finden, markieren und Chancen nutzen",
    markFavorites: "Favoriten mit einem Klick markieren",
    markFavoritesDesc: "Speichern Sie interessante Stellen einfach per Herz-Icon in Ihrer persönlichen Merkliste.",
    keepOverview: "Alle Angebote im Überblick behalten",
    keepOverviewDesc: "Ihr persönliches Dashboard zeigt Ihnen alle passenden Matches sortiert nach Relevanz.",
    decideChances: "Selbst entscheiden, welche Chancen Sie nutzen",
    decideChancesDesc: "Sie haben die Kontrolle. Entscheiden Sie, bei wem Sie sich mit Ihrem Profil vorstellen möchten.",
    fullTime: "Vollzeit",
    permanent: "Unbefristet",
    salary: "Gehalt: Tarif +",
    details: "Details",
    freeMaterial: "Kostenloses Material",
    supportForTalents: "Unterstützung für Fachkräfte:",
    workLiveUnderstand: "Arbeiten & Leben verstehen",
    brochureText1: "Unsere Informationsmappe unterstützt Sie dabei, Arbeiten und Leben in Deutschland besser einzuordnen. Sie ist kompakt, übersichtlich und verständlich aufbereitet.",
    brochureText2: "Mit dem ergänzenden Selbsttest können Sie Ihr Wissen prüfen und vertiefen. Fachkräfte, die die Mappe nutzen und den Test absolvieren, verbessern die Qualität ihres Profils und erhöhen ihre Chancen bei Unternehmen.",
    contactNow: "Jetzt Kontakt aufnehmen",
    brochureBottom: "Wir stellen hilfreiche Informationen zu wesentlichen Schritten bereit, damit Sie sich gut orientieren und den Start in Deutschland strukturiert vorbereiten können.",
    exclusiveJobs: "Exklusive Jobs",
    exclusiveJobsDesc: "Erhalte Zugriff auf Premium-Stellen, die nicht auf öffentlichen Börsen gelistet sind.",
    verifiedCompanies: "Verifizierte Firmen",
    verifiedCompaniesDesc: "Wir prüfen jedes Partner-Unternehmen auf Qualität und Fairness für deine Sicherheit.",
    arrivalSupport: "Ankunfts-Support",
    arrivalSupportDesc: "Unser Team unterstützt dich persönlich bei Visum, Wohnungssuche und der Integration.",
    faqTitle: "Häufige Fragen",
    faqSubtitle: "Alles Wissenswerte für Fachkräfte kompakt zusammengefasst.",
    readyForNextStep: "Bereit für den nächsten Schritt?",
    ctaDescription: "Registriere dich noch heute kostenlos und werde Teil unseres internationalen Talent-Pools.",
    talentFaqQ1: "Muss mein Abschluss in Deutschland anerkannt werden?",
    talentFaqA1: "Ja, alle Berufe müssen geprüft und anerkannt werden. Worknova unterstützt dich bei diesem Prozess durch automatisierte Checks (ZAB/ZAV).",
    talentFaqQ2: "Wie läuft die Anerkennung ab?",
    talentFaqA2: "Wir prüfen Ihre Qualifikation bei den zuständigen Behörden (z. B. ZAB/ZAV), um festzustellen, ob sie einer deutschen Qualifikation entspricht. Sollte dies nicht der Fall sein, kann eine ergänzende Weiterbildung erforderlich sein.",
    talentFaqQ3: "Darf ich sofort nach meiner Einreise arbeiten?",
    talentFaqA3: "Ja, sobald Sie die Aufenthaltserlaubnis als Fachkraft erhalten haben und alle Sozialversicherungen rechtlich angemeldet sind.",
    talentFaqQ4: "Was passiert, wenn ich meinen Job verliere?",
    talentFaqA4: "Sie müssen dies der Ausländerbehörde melden. Sie haben dann in der Regel 3–6 Monate Zeit, einen neuen Arbeitsplatz zu finden, bevor Ihr Aufenthaltstitel erlischt.",
    talentFaqQ5: "Kann meine Familie mit nach Deutschland kommen?",
    talentFaqA5: "Ja, Ehepartner und Kinder können im Rahmen des Familiennachzugs nachkommen. Ehepartner müssen in der Regel einfache Deutschkenntnisse (A1) nachweisen – es gibt aber Ausnahmen, z. B. bei Blaue-Karte-Inhabern.",
    talentFaqQ6: "Fallen für die Nutzung der Plattform Zahlungen an?",
    talentFaqA6: "Die Nutzung unserer Plattform ist grundsätzlich kostenfrei. Für zusätzliche Dienstleistungen wie Übersetzungen, Sprachkurse oder externe Qualifizierungen können Gebühren anfallen. Diese Leistungen werden jedoch über unsere Partner und das externe Netzwerk abgewickelt, nicht direkt über die Plattform.",
    talentFaqQ7: "Unterstützt die Plattform bei Integration oder Orientierung in Deutschland?",
    talentFaqA7: "Ja! Wir bereiten Fachkräfte von Anfang an auf Leben und Arbeiten in Deutschland vor, mit Onboarding-Kursen, direktem Austausch vor der Einreise und praktischen Tipps für den Start.",
    worknovaGuide: "Worknova Guide",
    liveAndWork: "Leben & Arbeiten",
    germany: "Deutschland",
    orientationHelp: "Orientierungshilfe für Ihren Start",
    guideSpine: "WORKNOVA GUIDE 2024",
    sampleJob1: "Anlagenmechaniker SHK",
    sampleCompany1: "Hanseatic Energy • Hamburg",
    sampleJobFull: "Anlagenmechaniker SHK (m/w/d)",
    sampleCompanyFull: "Hanseatic Energy GmbH",
    sampleJob2: "Pflegefachkraft (m/w/d)",
    sampleCompany2: "Klinikum Nord"
  },

  // ========== UNTERNEHMEN PAGE ==========
  unternehmenPage: {
    badge: "Next Gen Recruiting",
    heroTitle1: "Talente finden.",
    heroTitle2: "Automatisiert.",
    heroDescription: "Worknova verwandelt Ihren Rekrutierungsprozess in einen digitalen Wettbewerbsvorteil. KI-gestütztes Matching trifft auf rechtssichere Abwicklung.",
    findTalentsNow: "Jetzt Talente finden",
    scheduleDemo: "Demo vereinbaren",
    timeToHire: "Ø Time-to-Hire",
    successfulMatches: "Erfolgreiche Matches",
    partnersWorldwide: "Partner weltweit",
    digitalProcess: "Digitaler Prozess",
    smarterRecruit: "Smarter rekrutieren.",
    betterGrow: "Besser wachsen.",
    featureDescription: "Die Worknova Engine nimmt Ihnen die Komplexität. Wir automatisieren die Suche, Prüfung und Bürokratie, damit Sie sich auf das Wesentliche konzentrieren können: Ihr Team.",
    aiMatching: "KI-Matching",
    aiMatchingDesc: "Unser Algorithmus analysiert Hard- & Softskills für den perfekten Cultural Fit.",
    legalSecurity: "Rechtssicherheit",
    legalSecurityDesc: "Automatisierte Prüfung aller Visa- und Anerkennungsunterlagen.",
    speedRecruiting: "Speed-Recruiting",
    speedRecruitingDesc: "Verkürzen Sie Ihre Time-to-Hire um bis zu 60% durch digitale Prozesse.",
    filterActive: "Filter: Aktiv",
    liveSearch: "Live Suche",
    viewProfile: "Profil ansehen",
    available: "Verfügbar",
    inConversation: "Im Gespräch",
    newCandidateMatch: "Neuer Kandidat matcht zu 99% mit Ihrer Suche!",
    deepLearning: "Deep Learning",
    weSeeTitlePart1: "Wir sehen, was",
    weSeeTitlePart2: "Lebensläufe verschweigen.",
    weSeeDescription: "Herkömmliche Keyword-Suche reicht nicht. Unsere Engine versteht Zusammenhänge, Transfer-Skills und das Potenzial eines Kandidaten. Wir matchen nicht nur auf die Stelle, sondern auf Ihr Unternehmen.",
    dataPoints: "Datenpunkte",
    analysisTime: "Analysezeit",
    liveMatching: "Live Matching",
    matchFound: "Match Found",
    fullTransparency: "Volle Transparenz in",
    realTime: "Echtzeit.",
    transparencyDescription: "Sie erhalten jederzeit einen übersichtlichen Einblick in den Fortschritt Ihrer rekrutierten Fachkräfte. Unser System bildet alle wesentlichen Prozessschritte transparent ab und dokumentiert externe Verfahrensabläufe klar nachvollziehbar.",
    processMonitoring: "Prozess-Überwachung",
    realTimeStatus: "Echtzeit-Status aller aktiven Verfahren",
    liveUpdated: "Live Updated",
    skilledWorker: "Fachkraft",
    contracts: "1. Verträge",
    visa: "2. Visum",
    onboarding: "3. Onboarding",
    integration: "4. Integration",
    currentStatus: "Aktueller Status",
    workStart: "Arbeitsbeginn",
    authorityCheck: "Behördenprüfung",
    inProgress: "In Bearbeitung",
    contractCreation: "Vertragserstellung",
    actionRequired: "Aktion erforderlich",
    overviewStructured: "Übersichtlich strukturiert",
    documentsSecure: "Dokumente sicher verwaltet",
    statusVisible: "Status jederzeit sichtbar",
    reliableTraceability: "Verlässliche Nachvollziehbarkeit",
    dashboard: {
      processes: "Prozesse",
      candidates: "Kandidaten",
      documents: "Dokumente",
      jobs: "Jobs",
      settings: "Einstellungen"
    },
    whyWorknova: "Warum Worknova?",
    yourBenefits: "Ihre Vorteile im Überblick",
    sustainableEmployment: "Nachhaltiger Mitarbeitereinsatz",
    sustainableEmploymentDesc: "Wir setzen auf langfristige Bindung durch perfektes Matching und kulturelle Integration.",
    adminRelief: "Administrative Prozessentlastung",
    adminReliefDesc: "Visa, Anerkennung, Behörden – wir übernehmen den Papierkram komplett für Sie.",
    professionalProcess: "Professionelle Prozesssteuerung",
    professionalProcessDesc: "Digitale Workflows sorgen für Geschwindigkeit und vermeiden Fehler im Ablauf.",
    reliablePlanning: "Verlässlich planbare Besetzung",
    reliablePlanningDesc: "Klare Timelines und Status-Updates geben Ihnen Planungssicherheit für Ihre Projekte.",
    focusCore: "Fokus aufs Kerngeschäft",
    focusCoreDesc: "Sie kümmern sich um Ihr Business, wir kümmern uns um das Recruiting neuer Talente.",
    clearProcesses: "Kontinuierlich klare Abläufe",
    clearProcessesDesc: "Transparenz von Tag 1 an. Keine Blackbox, sondern volle Einsicht in jeden Schritt.",
    faqTitle: "Häufig gestellte Fragen",
    faqSubtitle: "Alles, was Sie als Unternehmen über den Recruiting-Prozess wissen müssen.",
    readyForUpgrade: "Bereit für das Upgrade?",
    ctaDescription: "Starten Sie noch heute Ihre 30-tägige kostenlose Testphase und erleben Sie, wie einfach internationales Recruiting sein kann.",
    startFreeNow: "Jetzt kostenlos starten",
    cancelAnytime: "Jederzeit kündbar",
    companyFaqQ1: "Wie lange dauert es, bis ich passende Kandidaten finde?",
    companyFaqA1: "Nach der Registrierung erhalten Sie innerhalb von 24 bis 48 Stunden die ersten passenden Profile. Die KI arbeitet rund um die Uhr und durchsucht kontinuierlich unseren internationalen Talentpool.",
    companyFaqQ2: "Sind die Qualifikationen wirklich anerkannt?",
    companyFaqA2: "Ja. Alle Kandidaten durchlaufen eine Anabin Prüfung. Wir prüfen, ob die Qualifikation in Deutschland anerkannt ist oder anerkannt werden kann. Sie sehen nur Kandidaten mit positiver Prognose.",
    companyFaqQ3: "Was kostet die Nutzung?",
    companyFaqA3: "Die Registrierung und Kandidatensuche sind kostenlos. Sie zahlen nur bei erfolgreicher Vermittlung. Transparente Preise ohne versteckte Kosten.",
    companyFaqQ4: "Übernehmen Sie Visum und Einreise?",
    companyFaqA4: "Ja, komplett. Wir begleiten den gesamten Prozess: Visumsantrag, Terminvereinbarung, Dokumentenvorbereitung, Einreise. Sie müssen sich um nichts kümmern.",
    companyFaqQ5: "Was passiert nach der Einstellung?",
    companyFaqA5: "Unser Integrationssupport begleitet Ihre Mitarbeiter in den ersten 6 Monaten. Behördengänge, Wohnungssuche, kulturelle Integration. Für langfristigen Erfolg.",
    companyFaqQ6: "Welche Branchen deckt Worknova ab?",
    companyFaqA6: "Alle Branchen: IT, Pflege, Handwerk, Ingenieurwesen, Gastronomie, Logistik und mehr. Unser Talentpool ist breit aufgestellt.",
    companyFaqQ7: "Wie gewährleisten Sie Qualität?",
    companyFaqA7: "Dreistufiger Prozess: Dokumentenprüfung, Qualifikationscheck, Sprachtest. Nur 15% der Bewerber werden akzeptiert. Hohe Qualitätsstandards."
  },

  // ========== APP LANDING PAGE ==========
  appLanding: {
    badge: "Worknova App Ecosystem",
    heroTitle1: "Karriere in",
    heroTitle2: "deiner Hand.",
    heroDescription: "Smarte Prozesse, maximale Übersicht. Mit der Worknova App managen Unternehmen und Fachkräfte ihre gemeinsame Zukunft direkt vom Smartphone.",
    onTheList: "Sie sind auf der Liste!",
    notifyRelease: "Wir benachrichtigen Sie zum App-Release.",
    earlyAccess: "Für Early Access anmelden",
    enterEmail: "E-Mail eingeben",
    privacyNote: "Wir respektieren Ihre Privatsphäre. Kein Spam.",
    validationActive: "Validierung Aktiv",
    visaProcess: "Visa-Verfahren",
    scanner: "Scanner",
    support: "Support",
    topMatch: "Top Match",
    featureSecurity: "Höchste Sicherheit",
    featureSecurityDesc: "FaceID Integration und biometrischer Schutz für Ihre sensiblen Fachkräfte-Daten und Dokumente.",
    featureNetwork: "Globales Netzwerk",
    featureNetworkDesc: "Direkte Verbindung zu verifizierten Arbeitgebern aus ganz Deutschland – ortsunabhängig und transparent.",
    featureLegal: "Rechtssichere Prozesse",
    featureLegalDesc: "Digitale Checklisten für Visum und Anerkennung führen alle Beteiligten sicher durch den Rekrutierungsweg.",
    howItWorks: "So funktioniert die App",
    allInOne: "Alles in einer App.",
    simpleOverview: "Einfach & Übersichtlich.",
    allInOneDesc: "Von der Dokumentenerfassung bis zur Jobzusage – die Worknova App begleitet Sie durch jeden Schritt Ihrer Karriere.",
    docScanTitle: "Intelligenter Dokumenten-Scan",
    docScanDesc: "Fotografieren Sie Zeugnisse und Nachweise. Die KI erkennt, sortiert und validiert automatisch.",
    jobMatchTitle: "Sofortige Job-Matches",
    jobMatchDesc: "Erhalten Sie passende Stellenangebote basierend auf Ihren Qualifikationen – in Echtzeit.",
    statusTrackTitle: "Live Status-Tracking",
    statusTrackDesc: "Verfolgen Sie Visum, Anerkennung und Bewerbung auf einen Blick. Push-Benachrichtigungen halten Sie informiert.",
    directContactTitle: "Direkter Kontakt",
    directContactDesc: "Kommunizieren Sie verschlüsselt mit Arbeitgebern und dem Worknova-Support direkt in der App.",
    ctaTitle1: "Recruiting-Zentrale",
    ctaTitle2: "in der Hosentasche.",
    ctaDesc: "Starten Sie noch heute und erleben Sie die Zukunft des Recruitings auf Ihrem Smartphone.",
    ctaButton: "Zum Release benachrichtigen",
    ctaNote: "Tragen Sie Ihre E-Mail ein und wir informieren Sie, sobald die App verfügbar ist",
    intelligentAutomation: "Intelligente Automatisierung",
    docsToProfile: "Ihre Dokumente werden zum vollständigen Profil –",
    inUnder2Min: "in unter 2 Minuten.",
    step01: "01",
    step02: "02",
    step03: "03",
    step04: "04",
    photograph: "Fotografieren",
    photographDesc: "Halten Sie Ihre Zeugnisse und Nachweise einfach vor die Kamera.",
    recognize: "Erkennen",
    recognizeDesc: "Die KI liest alle relevanten Daten aus – fehlerfrei und in Sekunden.",
    create: "Erstellen",
    createDesc: "Ihr vollständiges Profil entsteht automatisch, optimiert für Recruiter.",
    match: "Matchen",
    matchDesc: "Passende Stellen finden Sie – nicht umgekehrt. Push bei jedem Match.",
    result: "Ergebnis",
    profileExcites: "Ein Profil, das Recruiter begeistert.",
    noManualInput: "Keine manuellen Eingaben. Keine vergessenen Details. Die KI erfasst alles – von Qualifikationen über Sprachkenntnisse bis zu Soft Skills. Ihr Profil ist vom ersten Moment an vollständig und professionell.",
    accuracy: "Genauigkeit",
    profileTime: "Profilzeit",
    scanDocument: "Dokument scannen",
    aiRecognition: "KI-gestützte Erkennung",
    beingAnalyzed: "Wird analysiert...",
    format: "Format",
    valid: "Gültig",
    quality: "Qualität",
    optimal: "Optimal",
    receiveMatch: "Match erhalten",
    findJobs: "Passende Stellen finden",
    trackStatus: "Status verfolgen",
    realTimeUpdates: "Echtzeit-Updates",
    submitted: "Eingereicht",
    inProgress: "In Bearbeitung",
    approved: "Genehmigt",
    active: "Aktiv",
    newNotification: "Neue Benachrichtigung: Dokument geprüft ✓",
    companyFeature1: "Dashboard in Echtzeit",
    companyFeature2: "Push bei neuen Matches",
    companyFeature3: "Dokumenten-Upload",
    talentFeature1: "Profil immer dabei",
    talentFeature2: "Job-Benachrichtigungen",
    talentFeature3: "Chat mit Unternehmen"
  },

  // ========== SERVICES PAGE ==========
  servicesPage: {
    badge: "Dienstleistungen",
    heroTitle1: "Fachkräfte sicher",
    heroTitle2: "und erfolgreich",
    heroTitle3: "nach Deutschland bringen.",
    heroDescription: "Worknova steuert Ihren Erfolg: Koordination von Vorbereitung bis Integration. Zusatzleistungen wie Übersetzungen, Sprachkurse oder Ankunftsservice per Mausklick organisiert.",
    inquireNow: "Jetzt anfragen",
    relocationService: "Relocation Service",
    serviceMatrix: "Service Matrix",
    modularSystem: "Modulares Leistungs-System",
    serviceMatrixDesc: "Wählen Sie einen Bereich, um die detaillierten Prozessschritte zu analysieren.",
    clickTabs: "(Klicken Sie auf die Reiter links)",
    navigation: "Navigation",
    moduleActive: "Modul Active",
    highlight: "Highlight",
    includedServices: "Enthaltene Leistungen",
    hardSkill: "HARD SKILL",
    softSkill: "SOFT SKILL",
    adminSupport: "Administrative Begleitung",
    adminSupportDesc: "Worknova begleitet Fachkräfte und Unternehmen zentral durch die relevanten administrativen Schritte und sorgt für eine geordnete Vorbereitung und Abwicklung der erforderlichen Verfahren.",
    adminSupportNote: "Zentrale Prozesssteuern.\nMehr Fokus auf Ihr Kerngeschäft.",
    adminSub1: "Prüfung & Aufbereitung von",
    adminSub2: "Termin- und Dokumentenmanagement",
    adminSub3: "Koordination von Visumsprozessen",
    adminSub4: "Beantragung der Arbeitserlaubnis",
    preOnboarding: "Pre- und Onboarding",
    preOnboardingDesc: "Unser geschulter Integrationsbeauftragter begleitet Fachkräfte Schritt für Schritt",
    preSub1: "Individuelle Beratung rund um Arbeits- und Lebensalltag",
    preSub2: "Vermittlung deutscher Arbeits- und Alltagskultur",
    preSub3: "Flexible Unterstützung in direktem Austausch",
    translation: "Übersetzungsdienstleistungen",
    translationDesc: "Übersetzungsbüros zentral über Worknova anfragen und Übersetzungen direkt hochladen",
    translationSub1: "Übersetzungsbüro anfragen",
    translationSub2: "Dokumente hochladen",
    translationSub3: "Angebot annehmen",
    translationSub4: "Schnell zur fertigen Übersetzung",
    languageCourses: "Sprachkurse",
    languageCoursesDesc: "Unsere Kurse fördern Fachkräfte gezielt. Über unser Partnernetzwerke können Sie flexible Sprachkurse nach Bedarf buchen.",
    langSub1: "Integration fördern",
    langSub2: "Beruflichen Erfolg sichern",
    langSub3: "Sprachqualifikation sicherstellen",
    arrivalService: "Ankunftsservice",
    arrivalServiceDesc: "Von der Flugbuchung bis zur ersten Unterkunft unterstützen wir Sie gerne, für einen reibungslosen Start in Deutschland.",
    arrivalSub1: "Flugbuchung",
    arrivalSub2: "Persönliche Transfer",
    arrivalSub3: "Unterkunft für die ersten 30 Tage",
    integrationService: "Integration",
    integrationDesc: "Worknova begleitet Fachkräfte auch nach dem Arbeitsstart durch die wichtigsten Schritte der Eingewöhnung. Unterstützend, orientierend und stets ansprechbar bis zum Ende der Probezeit.",
    integrationSub1: "Unterstützung bei organisatorischen",
    integrationSub2: "Orientierung zu Integration – und Lernangeboten",
    integrationSub3: "Beratung im Alltag und bei Herausforderungen",
    adminShort: "ADMIN",
    onboardingShort: "ONBOARDING",
    translationShort: "ÜBERSETZUNG",
    languageShort: "SPRACHE",
    arrivalShort: "ANKUNFT",
    integrationShort: "INTEGRATION",
    readyToStart: "Bereit für den Start?",
    ctaDescription: "Lassen Sie uns gemeinsam Ihren Rekrutierungsprozess revolutionieren.",
    matrix: {
      badge: "Service Matrix",
      title: "Modulares Leistungs-System",
      description: "Wählen Sie einen Bereich, um die detaillierten Prozessschritte zu analysieren.",
      hint: "(Klicken Sie auf die Reiter links)"
    }
  },

  // ========== IMPRESSUM PAGE ==========
  impressumPage: {
    title: "Impressum",
    address: "Karlstr. 68",
    city: "76137 Karlsruhe",
    country: "Deutschland",
    email: "E-Mail:",
    internet: "Internet:",
    ceo: "Vertretungsberechtigte Geschäftsführerin:",
    ceoName: "Beritan Duyar",
    registerNumber: "Handelsregisternummer: HRB 756458",
    registerCourt: "Registergericht: Amtsgericht Mannheim",
    vatId: "Umsatzsteuer-Identifikationsnummer: DE",
    vatIdLaw: "Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz",
    section1Title: "1. Inhalt des Onlineangebotes",
    section1Text1: "WORKNOVA übernimmt keine Gewähr für die Aktualität, Korrektheit, Vollständigkeit oder Qualität der bereitgestellten Informationen. Haftungsansprüche für Schäden materieller oder immaterieller Art, die durch die Nutzung oder Nichtnutzung der Informationen entstehen, sind ausgeschlossen, sofern WORKNOVA kein nachweislich vorsätzliches oder grob fahrlässiges Verschulden trifft.",
    section1Text2: "Alle Angebote sind freibleibend und unverbindlich. WORKNOVA behält sich vor, Inhalte jederzeit ohne Ankündigung zu ändern, zu ergänzen oder zu entfernen.",
    section2Title: "2. Verweise und Links",
    section2Text: "WORKNOVA ist nicht verantwortlich für Inhalte externer Webseiten, auf die direkt oder indirekt verwiesen wird. Eine Haftung tritt nur ein, wenn WORKNOVA von rechtswidrigen Inhalten Kenntnis hat und deren Nutzung technisch verhindern könnte. WORKNOVA distanziert sich ausdrücklich von allen Inhalten verlinkter Seiten, die nach der Linksetzung verändert wurden.",
    section3Title: "3. Zahlungen",
    seePaymentInfo: "siehe Zahlungsinformationen",
    subscriptions: "Abonnements:",
    subscriptionText1: "Zahlungen für Abos erfolgen sicher über unseren Zahlungsdienstleister (z. B. Kreditkarte, Lastschrift, PayPal).",
    subscriptionText2: "WORKNOVA speichert dabei keine sensiblen Bank- oder Kreditkartendaten.",
    singleInvoices: "Einzelrechnungen:",
    singleInvoiceText1: "Zahlungen für einzelne Positionen erfolgen direkt auf das Bankkonto von WORKNOVA.",
    singleInvoiceText2: "Bankdaten finden Sie auf der Rechnung oder in Ihrem Kundenkonto.",
    section4Title: "4. Rechtswirksamkeit",
    section4Text: "Dieser Haftungsausschluss ist Teil des Onlineangebotes von WORKNOVA. Sollten einzelne Formulierungen nicht der aktuellen Rechtslage entsprechen, bleiben die übrigen Inhalte in ihrer Gültigkeit unberührt."
  },

  // ========== ZAHLUNGSINFORMATIONEN PAGE ==========
  paymentPage: {
    title: "Zahlungsinformationen",
    section1Title: "1. Abonnements über Zahlungsdienstleister:",
    section1Intro: "Für unsere Abonnements erfolgt die Zahlung sicher über unseren Zahlungsdienstleister Stripe. Sie können bequem per:",
    creditCard: "Kreditkarte",
    directDebit: "Lastschrift",
    paypal: "PayPal",
    section1Text1: "Die Abrechnung erfolgt automatisch zum Beginn Ihres Abos. Ihre Bankdaten werden nicht bei uns gespeichert, sondern direkt über den Zahlungsdienstleister verarbeitet.",
    section1Text2: "Weitere Informationen zu Abos und Zahlungsbedingungen finden Sie in unseren",
    termsLink: "AGB",
    section2Title: "2. Einzelrechnungen für Rekrutierungsprozess oder Zusatzdienstleistungen:",
    section2Intro: "Für einzelne Rekrutierungspositionen erhalten Sie von uns eine Rechnung, die direkt auf unser Bankkonto überwiesen werden muss:",
    bankConnection: "Bankverbindung",
    bank: "Bank",
    iban: "IBAN",
    bic: "BIC",
    accountHolder: "Kontoinhaber"
  },

  // ========== NUTZUNGSBEDINGUNGEN PAGE ==========
  // ========== NUTZUNGSBEDINGUNGEN PAGE ==========
  termsPage: {
    legalFramework: "Rechtliche Rahmenbedingungen",
    titlePart1: "Nutzungs-",
    titlePart2: "bedingungen.",
    subtitle: "Morsnova • Recruiting mit worknova.de",
    version: "Version 1.0 • Stand Nov. 2025",
    scroll: "Scroll",
    tableOfContents: "Inhaltsverzeichnis",
    sections: {
      sec1: {
        title: "Gegenstand der Teilnahme- und Nutzungsbedingungen",
        content: {
          p1: "(1) Die Morsnova GmbH, Karlstraße 68, 76137 Karlsruhe (nachfolgend „Diensteanbieter“ genannt) stellt auf www.worknova.de eine Plattform zur Verfügung (nachfolgend „WorkNova“ genannt), die der digitalen Fachkräfterekrutierung dient.",
          companyTitle: "UNTERNEHMER",
          companyText: "Unternehmer (nachfolgend „Unternehmer“ oder „Nutzer“ genannt) erhalten über die Plattform Zugriff auf Bewerberprofile, können Bewerbungsunterlagen einsehen, mit Fachkräften kommunizieren und Rekrutierungsprozesse initiieren.",
          applicantTitle: "BEWERBER",
          applicantText: "Bewerbern und Bewerberinnen (nachfolgend „Bewerber“ oder „Nutzer“ genannt) wird ermöglicht, Profile zu erstellen, Bewerbungsunterlagen hochzuladen, mit potenziellen Arbeitgebern in Kontakt zu treten und den Fortschritt laufender Rekrutierungs-, Anerkennungs- und Integrationsverfahren zu verfolgen.",
          p2: "(2) Die vorliegenden Nutzungsbedingungen regeln die Zurverfügungstellung der Dienste durch den Diensteanbieter und die Nutzung dieser Dienste durch die Nutzer. Sie finden Anwendung auf sämtliche Funktionen und Services, die über WorkNova im Rahmen der digitalen Rekrutierung und Qualifizierungsbegleitung zur Verfügung gestellt werden und gelten sowohl gegenüber Unternehmern im Sinne von § 14 BGB als auch gegenüber von Verbrauchern im Sinne von § 13 BGB.",
          p3: "(3) Verbraucher im Sinne von § 13 BGB ist jede natürliche Person, die ein Rechtsgeschäft zu Zwecken abschließt, die überwiegend weder ihrer gewerblichen noch ihrer selbständigen beruflichen Tätigkeit zugerechnet werden können. Unternehmer im Sinne von § 14 BGB ist eine natürliche oder juristische Person oder eine rechtsfähige Personengesellschaft, die bei Abschluss eines Rechtsgeschäfts in Ausübung ihrer gewerblichen oder selbständigen beruflichen Tätigkeit handelt.",
          p4: "(4) Für Unternehmer gilt: Entgegenstehende, ergänzende oder abweichende Geschäftsbedingungen des Nutzers gelten nicht, es sei denn der Diensteanbieter hat ihrer Geltung ausdrücklich und schriftlich zugestimmt. Dieser Zustimmungsvorbehalt gilt in jedem Fall, insbesondere auch dann, wenn der Diensteanbieter in Kenntnis entgegenstehender oder abweichender Bedingungen des Nutzers Leistungen ohne weiteren Vorbehalt oder Widerspruch erbringt oder vom Nutzer annimmt.",
          p5: "(5) Zur besseren Lesbarkeit wird in diesen Nutzungsbedingungen die männliche Form (z. B. „Nutzer“, „Bewerber“) verwendet. Die gewählten Begriffe gelten jedoch gleichermaßen für alle Geschlechter und umfassen sämtliche Personenbezeichnungen unabhängig vom jeweiligen Geschlecht."
        }
      },
      sec2: {
        title: "Änderungen der Nutzungsbedingungen",
        content: {
          p1: "(1) Der Diensteanbieter behält sich vor, diese Nutzungsbedingungen jederzeit mit Wirksamkeit auch innerhalb der bestehenden Vertragsverhältnisse zu ändern. Über derartige Änderungen wird der Diensteanbieter mindestens 30 Kalendertage vor dem geplanten Inkrafttreten der Änderungen informieren. Sofern der Nutzer nicht innerhalb von 30 Tagen ab Zugang der Mitteilung widerspricht und die Inanspruchnahme der Dienste auch nach Ablauf der Widerspruchsfrist fortsetzt, so gelten die Änderungen ab Fristablauf als wirksam vereinbart. Im Falle eines Widerspruchs wird der Vertrag zu den bisherigen Bedingungen fortgesetzt. In der Änderungsmitteilung wird der Diensteanbieter den Nutzer auf das Widerspruchsrecht und auf die Folgen hinweisen.",
          p2: "(2) Bei Änderungen der Umsatzsteuer ist der Diensteanbieter zu einer dieser Änderung entsprechenden Anpassung der Vergütung berechtigt, ohne dass das vorgenannte Widerspruchsrecht besteht."
        }
      },
      sec3: {
        title: "Registrierungsberechtigung",
        content: {
          p1: "(1) Die Nutzung der auf WorkNova verfügbaren Dienste setzt die Registrierung als Nutzer voraus. Ein Anspruch auf die Nutzung besteht nicht. Der Diensteanbieter ist berechtigt, Nutzungsanträge ohne Angabe von Gründen zurückzuweisen.",
          p2: "(2) Die Registrierung ist dem Nutzer nur erlaubt, wenn er volljährig und unbeschränkt geschäftsfähig ist. Minderjährigen Personen ist eine Anmeldung untersagt. Bei einer juristischen Person muss die Anmeldung durch eine unbeschränkt geschäftsfähige und vertretungsberechtigte natürliche Person erfolgen."
        }
      },
      sec4: {
        title: "Registrierung/Vertragsschluss",
        content: {
          p1: "(1) Für Bewerber gilt: Sofern die Beantragung des Zugangs zu einem Zweck erfolgt, der weder der gewerblichen noch Ihrer selbständigen beruflichen Tätigkeit zugerechnet werden kann, so steht dem Bewerber ein gesetzliches Widerrufsrecht zu. Näheres zum Widerrufsrecht sowie die Widerrufsbelehrung finden Sie hier.",
          p2: "(2) Die während des Anmeldevorgangs vom Diensteanbieter erfragten Kontaktdaten und sonstigen Angaben müssen vom Nutzer vollständig und korrekt angegeben werden. Bei der Anmeldung einer juristischen Person ist zusätzlich die vertretungsberechtigte natürliche Person anzugeben.",
          p3: "(3) Nach Angabe aller erfragten Daten werden diese vom Diensteanbieter auf Vollständigkeit und Plausibilität überprüft. Dazu erhält der Nutzer eine Verifizierungs-E-Mail. Sind die Angaben aus Sicht des Diensteanbieters korrekt und bestehen aus Sicht des Diensteanbieters keine sonstigen Bedenken, schaltet der Diensteanbieter den beantragten Zugang frei und benachrichtigt den Nutzer hiervon per E-Mail. Der Registrierungsvorgang stellt den Antrag des Nutzers auf Abschluss eines Vertrages zur Nutzung der Dienste auf WorkNova an den Diensteanbieter dar. Die E-Mail des Diensteanbieters an den Nutzer mit der Bestätigung der Registrierung stellt die Annahme des Antrags des Nutzers dar. Ab Zugang der E-Mail ist der Nutzer zur Nutzung der Funktionen und Leistungen auf WorkNova im Rahmen dieser Nutzungsbedingungen berechtigt."
        }
      },
      sec5: {
        title: "Verantwortung für die Zugangsdaten",
        content: {
          p1: "(1) Im Verlauf des Registrierungsvorgangs wird der Nutzer gebeten, einen Benutzernamen und ein Passwort anzugeben. Mit diesen Daten kann der Nutzer sich nach der Freischaltung des Zugangs auf WorkNova einloggen. Es liegt in der Verantwortung des Nutzers, dass der Benutzername nicht Rechte Dritter, insbesondere keine Namens- oder Markenrechte verletzt und nicht gegen die guten Sitten verstößt.",
          p2: "(2) Die Zugangsdaten einschließlich des Passworts sind vom Nutzer geheim zu halten und unbefugten Dritten nicht zugänglich zu machen.",
          p3: "(3) Es liegt weiter in der Verantwortung des Nutzers, sicher zu stellen, dass der Zugang zu WorkNova und die Nutzung der hier zur Verfügung stehenden Dienste ausschließlich durch den Nutzer bzw. durch vom Nutzer bevollmächtigten Personen erfolgt. Steht zu befürchten, dass unbefugte Dritte von den Zugangsdaten Kenntnis erlangt haben oder erlangen werden, ist der Diensteanbieter unverzüglich zu informieren.",
          alert: "Der Nutzer haftet für jedwede Nutzung und/oder sonstige Aktivität, die unter seinen Zugangsdaten ausgeführt werde, nach den gesetzlichen Bestimmungen."
        }
      },
      sec6: {
        title: "Aktualisierung der Teilnehmerdaten",
        content: {
          p1: "Der Nutzer ist dazu verpflichtet, seine angegebenen Daten (einschließlich der Kontaktdaten) aktuell zu halten. Tritt während der Dauer der Nutzung von WorkNova eine Änderung der angegebenen Daten ein, so sind die Angaben unverzüglich auf WorkNova in den persönlichen Einstellungen zu korrigieren."
        }
      },
      sec7: {
        title: "Vertragslaufzeit/Kündigung",
        content: {
          applicantTitle: "BEWERBER",
          applicantText: "(1) Für Bewerber gilt: Die Nutzung von WorkNova ist für unbestimmte Zeit gestattet. Der Nutzer kann die Nutzung jederzeit kündigen.",
          companyTitle: "UNTERNEHMEN",
          companyText: "(2) Für Unternehmen gilt: Die kostenlose Testphase endet automatisch 30 Tage nach Vertragsschluss. Sofern der Unternehmer nicht zum Ende der Testphase kündigt, verlängert sich der Vertrag kostenpflichtig um jeweils einen Monat. Die Kündigungsfrist beträgt 7 Tage zum Monatsende.",
          p3: "(3) Mit Wirksamwerden der Kündigung endet das Vertragsverhältnis und der Nutzer darf seinen Zugang nicht mehr nutzen. Der Diensteanbieter behält sich vor, den Benutzernamen sowie das Passwort mit Wirksamwerden der Kündigung zu sperren.",
          p4: "(4) Die Kündigung hat schriftlich oder per E-Mail an support@worknova.de zu erfolgen.",
          p5: "(5) Das Recht der Vertragsparteien zur außerordentlichen fristlosen Kündigung aus wichtigem Grund bleibt unberührt.",
          p6: "(6) Der Diensteanbieter ist berechtigt, mit Ablauf von 30 Kalendertagen nach Wirksamwerden der Kündigung und nach Ablauf etwaiger gesetzlicher Vorhaltungsfristen sämtliche im Rahmen Ihrer Teilnahme entstandenen Daten unwiederbringlich zu löschen."
        }
      },
      sec8: {
        title: "Diensteangebot/Umgehungsverbot",
        content: {
          p1: "Der Diensteanbieter stellt den Nutzern auf WorkNova unterschiedliche Informations- und sonstige Dienste zur befristeten Nutzung zur Verfügung. Solche Dienste können z.B. das Verfügbarmachen von Daten, Beiträgen, Bild- und Tondokumenten, Informationen und sonstigen Inhalten (nachfolgend zusammenfassend „Inhalte“ genannt) sein, weiter die Möglichkeit, individuelle Profile anzulegen und mit anderen Nutzern durch das Verfassen von persönlichen Mitteilungen in Kontakt zu treten. Inhalt und Umfang der Dienste bestimmen sich nach den jeweiligen vertraglichen Vereinbarungen, im Übrigen nach den jeweils aktuell auf dem Portal verfügbaren Funktionalitäten. Auf dem Portal stehen sowohl unentgeltliche als auch kostenpflichtige Dienste zur Verfügung. Die Nutzung der Leistungen auf WorkNova ist für Bewerber unentgeltlich.",
          p2: "(2) Der Diensteanbieter gewährt registrierten Unternehmern Zugriff auf Bewerberprofile, Qualifikationsnachweise, Lebensläufe und weitere Unterlagen, die zur Auswahl und Kontaktaufnahme mit potenziellen Fachkräften erforderlich sind. Der Unternehmer kann geeignete Bewerber favorisieren, direkt über die integrierte Kommunikationsfunktion kontaktieren und Rekrutierungsprozesse initiieren. Nach der Kontaktaufnahme können erforderliche Vollmachten, Unterlagen und Vertragsdokumente über WorkNova übermittelt werden.",
          p3: "(3) Bewerber wird auf WorkNova eine digitale Umgebung zur Verfügung gestellt, in der sie persönliche Daten, Qualifikationen, berufliche Nachweise und Bewerbungsunterlagen hinterlegen können. Nach Zustimmung des Bewerbers wird sein Profil für registrierte Unternehmer im Bewerberpool sichtbar gemacht. Die Sichtbarkeit kann jederzeit selbstständig aktiviert oder deaktiviert werden. Außerdem wird dem Bewerber die Nutzung ergänzender (ggf. kostenpflichtiger) Unterstützungsangebote, insbesondere Sprachförderung, Anerkennungsbegleitung, Übersetzungsdienste und Integrationsmaßnahmen ermöglicht.",
          p4: "(4) Zu den auf WorkNova verfügbaren Diensten können auch Dienste Dritter gehören, zu welchen der Diensteanbieter lediglich den Zugang vermittelt. Für die Inanspruchnahme derartiger Dienste - die jeweils als Dienste Dritter kenntlich gemacht sind - können von diesen Nutzungsbedingungen abweichende oder zusätzliche Regelungen gelten, auf die der Diensteanbieter den Nutzer jeweils hinweisen wird.",
          p5: "(5) Im Übrigen besteht ein Anspruch auf die Nutzung der auf WorkNova verfügbaren Dienste nur im Rahmen der technischen und betrieblichen Möglichkeiten beim Diensteanbieter. Der Diensteanbieter bemüht sich um eine möglichst unterbrechungsfreie Nutzbarkeit seiner Dienste. Jedoch können durch technische Störungen (wie z.B. Unterbrechung der Stromversorgung, Hardware- und Softwarefehler, technische Probleme in den Datenleitungen) zeitweilige Beschränkungen oder Unterbrechungen auftreten.",
          subtitle: "Wichtige Provisionsregelung & Umgehungsverbot",
          p6: "(6) Der Unternehmer hat die Möglichkeit, den Diensteanbieter über die auf WorkNova verfügbare Funktion „Rekrutierung starten“ kostenpflichtig mit der Unterstützung bei der Gewinnung, Auswahl und Vermittlung qualifizierter Arbeits- und Fachkräfte aus Drittstaaten zu beauftragen und den ausgewählten Bewerber vom Auswahlprozess bis zur erfolgreichen Arbeitsaufnahme in Deutschland zu begleiten. Der Diensteanbieter handelt dann als Personalvermittler und Verfahrenskoordinator, jedoch nicht als Arbeitgeber der vermittelten Fachkräfte und nicht als Inhaber einer Erlaubnis zur Arbeitnehmerüberlassung im Sinne des AÜG. Die Vergütung für die Durchführung des Rekrutierungs und Integrationsprozesses bemisst sich pro vermittelte Fachkraft auf Grundlage des im Arbeitsvertrag vereinbarten Bruttojahresgehalts und beträgt 20 % dieses Betrages zuzüglich der jeweils geltenden gesetzlichen Umsatzsteuer.",
          p7: "(7) Die Nutzer verpflichten sich, ausschließlich über WorkNova miteinander zu kommunizieren und im Falle eines Interesses am Abschluss eines Arbeitsvertrages miteinander hierzu ausschließlich die auf WorkNova bereitgestellten Funktionen zu nutzen. Der Unternehmer verpflichtet sich, Bewerber nicht ohne vorherige Mitwirkung des Diensteanbieters direkt anzusprechen, zu beschäftigen, zu beauftragen oder dessen Kontaktdaten an Dritte weiterzugeben.",
          alert: "Dies gilt auch für den Fall, dass der Unternehmer während oder nach Abschluss des Rekrutierungsverfahrens auf anderem Wege mit dem Bewerber in Kontakt tritt. Bei schuldhaftem Verstoß gegen dieses Verbot wird eine Vertragsstrafe in Höhe von 20 % des mit dem Bewerber vereinbarten oder - sofern eine derartige Vereinbarung fehlt- des üblichen Bruttojahresgehalts für die beworbene Tätigkeit des Bewerbers pro betroffenen Bewerber verwirkt und ist an den Diensteanbieter zu leisten. Die Geltendmachung weitergehender Schadensersatzansprüche bleibt hiervon unberührt. Die Vertragsstrafe wird hierauf nicht angerechnet."
        }
      },
      sec9: {
        title: "Änderungen von Diensten",
        content: {
          p1: "Der Diensteanbieter ist jederzeit berechtigt, auf WorkNova unentgeltlich bereitgestellte Dienste zu ändern, neue Dienste unentgeltlich oder entgeltlich verfügbar zu machen und die Bereitstellung unentgeltlicher Dienste einzustellen. Der Diensteanbieter wird hierbei jeweils auf Ihre berechtigten Interessen Rücksicht nehmen."
        }
      },
      sec10: {
        title: "Schutz der Inhalte, Verantwortlichkeit für Inhalte Dritter",
        content: {
          p1: "(1) Die WorkNova verfügbaren Inhalte sind überwiegend geschützt durch das Urheberrecht oder durch sonstige Schutzrechte und stehen jeweils im Eigentum des Diensteanbieters, der anderen Nutzer oder sonstiger Dritter, welche die jeweiligen Inhalte zur Verfügung gestellt haben. Die Zusammenstellung der Inhalte als Solche ist ggf. geschützt als Datenbank oder Datenbankwerk iSd. §§ 4 Abs. 2, 87a Abs. 1 UrhG. Der Nutzer darf diese Inhalte lediglich gemäß diesen Nutzungsbedingungen sowie im auf WorkNova vorgegebenen Rahmen nutzen.",
          p2: "(2) Die auf WorkNova verfügbaren Inhalte stammen teilweise vom Diensteanbieter und teilweise von Nutzern bzw. sonstigen Dritten. Inhalte der Nutzer sowie sonstiger Dritter werden nachfolgend zusammenfassend „Drittinhalte“ genannt. Der Diensteanbieter führt bei Drittinhalten keine Prüfung auf Vollständigkeit, Richtigkeit und Rechtmäßigkeit durch und übernimmt daher keinerlei Verantwortung oder Gewährleistung für die Vollständigkeit, Richtigkeit, Rechtmäßigkeit und Aktualität der Drittinhalte. Dies gilt auch im Hinblick auf die Qualität der Drittinhalte und deren Eignung für einen bestimmten Zweck, und auch, soweit es sich um Drittinhalte auf verlinkten externen Webseiten handelt. Sämtliche Inhalte auf dem Portal sind Drittinhalte, ausgenommen diejenigen Inhalte, die mit einem Urheberrechtsvermerk des Diensteanbieters versehen sind."
        }
      },
      sec11: {
        title: "Umfang der erlaubten Nutzung, Überwachung der Nutzungsaktivitäten",
        content: {
          p1: "(1) Die Nutzungsberechtigung beschränkt sich auf den Zugang zu WorkNova sowie auf die Nutzung der hier jeweils verfügbaren Dienste im Rahmen der Regelungen dieser Nutzungsbedingungen.",
          p2: "(2) Für die Schaffung der im Verantwortungsbereich des Nutzers zur vertragsgemäßen Nutzung der Dienste notwendigen technischen Voraussetzungen ist der Nutzer selbst verantwortlich. Der Diensteanbieter schuldet keine diesbezügliche Beratung.",
          p3: "(3) Der Diensteanbieter weist darauf hin, dass die Nutzungsaktivitäten im gesetzlich zulässigen Umfang überwacht werden können. Dies beinhaltet ggf. auch die Protokollierung von IP-Verbindungsdaten und Gesprächsverläufen sowie deren Auswertungen bei einem konkreten Verdacht eines Verstoßes gegen die vorliegenden Nutzungsbedingungen und/oder bei einem konkreten Verdacht auf das Vorliegen einer sonstigen rechtswidrigen Handlung oder Straftat."
        }
      },
      sec12: {
        title: "Vergütung und Zahlungsbedingungen",
        content: {
          p1: "(1) Die Abrechnung des kostenpflichtigen Zugangs für Unternehmen erfolgt monatlich im Voraus. Die Zahlung kann über die angebotenen Zahlungsmethoden (z. B. SEPA- Lastschrift, Kreditkarte oder PayPal) erfolgen.",
          p2: "(2) Sämtliche angegebenen Entgelte verstehen sich zuzüglich der jeweils geltenden gesetzlichen Mehrwertsteuer.",
          p3: "(4) Bei Verzug ist der Diensteanbieter berechtigt, den Zugang zu WorkNova bis zum vollständigen Ausgleich aller offenen Forderungen zu sperren.",
          p4: "(6) Die Aufrechnung ist nur mit unbestrittenen oder rechtskräftig festgestellten Gegenforderungen möglich. Ein Zurückbehaltungsrecht kann der Nutzer nur geltend machen, wenn es auf demselben Vertragsverhältnis beruht."
        }
      },
      sec13: {
        title: "Erstellung von Benutzerprofilen",
        content: {
          p1: "(1) Soweit als Funktionalität auf dem Portal verfügbar, kann der Nutzer sein Benutzerprofil im Rahmen der vorliegenden Nutzungsbedingungen individuell gestalten. Dabei gelten die Beschränkungen des § 16.",
          p2: "(2) Der Diensteanbieter führt im Regelfall keine Überprüfung der Identität der Profilinhaber und der Angaben in den Profilen durch. Der Diensteanbieter leistet daher keine Gewähr dafür, dass es sich bei jedem Profilinhaber jeweils um die Person handelt, für die der jeweilige Profilinhaber sich ausgibt."
        }
      },
      sec14: {
        title: "Einstellen von eigenen Inhalten durch Nutzer",
        content: {
          p1: "(1) Soweit als Funktionalität auf dem Portal verfügbar, können unter Beachtung der nachfolgenden Regelungen Inhalte auf dem Portal eingestellt und damit für Dritte verfügbar machen.",
          p2: "(2) Mit dem Einstellen von Inhalten räumt der Nutzer dem Diensteanbieter jeweils ein unentgeltliches und übertragbares Nutzungsrecht an den jeweiligen Inhalten ein, insbesondere",
          li1: "zur Speicherung der Inhalte auf dem Server des Diensteanbieters sowie deren Veröffentlichung, insbesondere deren öffentlicher Zugänglichmachung (z.B. durch Anzeige der Inhalte auf dem Portal),",
          li2: "zur Bearbeitung und Vervielfältigung, soweit dies für die Vorhaltung bzw. Veröffentlichung der jeweiligen Inhalte erforderlich ist, und",
          li3: "zur Einräumung von Nutzungsrechten gegenüber Dritten an den Inhalten entsprechend § 15.",
          note: "Soweit der Nutzer die eingestellten Inhalte wieder von WorkNova entfernt, erlischt das vorstehend eingeräumte Nutzungs- und Verwertungsrecht. Der Diensteanbieter bleibt jedoch berechtigt, zu Sicherungs- und/oder Nachweiszwecken erstellte Kopien aufzubewahren. Die den anderen Nutzern an eingestellten Inhalten bereits eingeräumten Nutzungsrechte bleiben ebenfalls unberührt.",
          p3: "(3) Der Nutzer ist für die von ihm eingestellten Inhalte voll verantwortlich. Der Diensteanbieter übernimmt keine Überprüfung der Inhalte auf Vollständigkeit, Richtigkeit, Rechtmäßigkeit, Aktualität, Qualität und Eignung für einen bestimmten Zweck. Der Nutzer erklärt und gewährleistet gegenüber dem Diensteanbieter daher, dass er der alleinige Inhaber sämtlicher Rechte an den von ihm auf WorkNova eingestellten Inhalten ist, oder aber anderweitig berechtigt ist (zB durch eine wirksame Erlaubnis des Rechteinhabers), die Inhalte auf WorkNova einzustellen und die Nutzungs- und Verwertungsrechte nach dem vorstehenden Absatz (2) zu gewähren.",
          p4: "(4) Der Diensteanbieter behält sich das Recht vor, das Einstellen von Inhalten abzulehnen und/oder bereits eingestellte Inhalte ohne vorherige Ankündigung zu bearbeiten, zu sperren oder zu entfernen, sofern das Einstellen der Inhalte durch den Nutzer oder die eingestellten Inhalte selbst zu einem Verstoß gegen § 16 geführt haben oder konkrete Anhaltspunkte dafür vorliegen, dass es zu einem schwerwiegenden Verstoß gegen § 16 kommen wird."
        }
      },
      sec15: {
        title: "Nutzungsrecht an auf Worknova verfügbaren Inhalten",
        content: {
          p1: "(1) Soweit nicht in diesen Nutzungsbedingungen oder auf WorkNova eine weitergehende Nutzung ausdrücklich erlaubt oder durch eine entsprechende Funktionalität (z.B. Download-Button) ermöglicht wird,",
          li1: "dürfen die auf dem Portal verfügbaren Inhalte ausschließlich für eigene Zwecke online abgerufen und angezeigt werden. Dieses Nutzungsrecht ist auf die Dauer der vertragsgemäßen Registrierung auf WorkNova beschränkt;",
          li2: "ist es untersagt, die auf WorkNova verfügbaren Inhalte ganz oder teilweise zu bearbeiten, zu verändern, zu übersetzen, vorzuzeigen oder vorzuführen, zu veröffentlichen, auszustellen, zu vervielfältigen oder zu verbreiten. Ebenso ist es untersagt, Urhebervermerke, Logos und sonstige Kennzeichen oder Schutzvermerke zu entfernen oder zu verändern.",
          p2: "(2) Zum Herunterladen von Inhalten („Download“) sowie zum Ausdrucken von Inhalten ist der Nutzer nur berechtigt, soweit eine Möglichkeit zum Download bzw. zum Ausdrucken als Funktionalität (zB mittels eines Download-Buttons) zur Verfügung steht.",
          note: "An den vom Nutzer ordnungsgemäß herunter geladenen bzw. ausgedruckten Inhalten erhält der Nutzer jeweils ein zeitlich unbefristetes und nicht ausschließliches Nutzungsrecht für die Nutzung zu eigenen Zwecken. Soweit es sich um Inhalte handelt, die entgeltlich überlassen werden, ist weitere Voraussetzung für diese Rechteeinräumung die vollständige Bezahlung der jeweiligen Inhalte. Im Übrigen verbleiben sämtliche Rechte an den Inhalten beim ursprünglichen Rechteinhaber (dem Diensteanbieter oder dem jeweiligen Dritten)."
        }
      },
      sec16: {
        title: "Verbotene Aktivitäten",
        content: {
          p1: "(1) Zur unerlaubten Nutzung zählen insbesondere",
          ul1: {
            li1: "alle Angebote und Bewerbungen entgeltlicher Inhalte, Dienste und/oder Produkte und zwar sowohl eigner als auch solche Dritten,",
            li2: "alle Angebote, Bewerbungen und Durchführungen von Aktivitäten mit kommerziellem Hintergrund wie Preisausschreiben, Verlosungen, Tauschgeschäfte, Inserate oder Schneeballsysteme, und",
            li3: "jedwede elektronische bzw. anderweitige Sammlung von Identitäts- und/oder Kontaktdaten (einschließlich E-Mail-Adressen) von Mitgliedern (z.B. für den Versand unaufgeforderter E-Mails)."
          },
          p2: "(2) Dem Nutzer sind jegliche Aktivitäten auf bzw. im Zusammenhang mit WorkNova untersagt, die gegen geltendes Recht verstoßen, Rechte Dritter verletzen oder gegen die Grundsätze des Jugendschutzes verstoßen. Insbesondere ist es untersagt:",
          ul2: {
            li1: "das Einstellen, die Verbreitung, das Angebot und die Bewerbung pornografischer, gegen Jugendschutzgesetze, gegen Datenschutzrecht und/oder gegen sonstiges Recht verstoßender und/oder betrügerischer Inhalte, Dienste und/oder Produkte;",
            li2: "die Verwendung von Inhalten, durch die andere Nutzer oder Dritte beleidigt oder verleumdet werden;",
            li3: "die Nutzung, das Bereitstellen und das Verbreiten von Inhalten, Diensten und/oder Produkten, die gesetzlich geschützt oder mit Rechten Dritter (z.B. Urheberrechte) belastet sind, ohne hierzu ausdrücklich berechtigt zu sein."
          },
          p3: "(3) Des Weiteren ist dem Nutzer auch unabhängig von einem eventuellen Gesetzesverstoß bei der Einstellung eigener Inhalte auf WorkNova sowie bei der Kommunikation mit anderen Nutzern (z.B. durch Versenden von persönlichen Mitteilungen) die folgenden Aktivitäten untersagt:",
          ul3: {
            li1: "Die Verbreitung von Viren, Trojanern und anderen schädlichen Dateien;",
            li2: "Die Versendung von Junk- oder Spam-Mails sowie von Kettenbriefen;",
            li3: "Die Verbreitung anzüglicher, anstößiger, sexuell geprägter, obszöner oder diffamierender Inhalte;",
            li4: "Die Belästigung anderer Nutzer (Stalking, mehrfache Kontaktierung);",
            li5: "Aufforderung zur Preisgabe von Kennwörtern;",
            li6: "Verbreitung von Inhalten ohne ausdrückliche Gestattung."
          },
          p4: "(4) Ebenfalls untersagt ist jede Handlung, die geeignet ist, den reibungslosen Betrieb von WorkNova zu beeinträchtigen, insbesondere die Systeme des Diensteanbieters übermäßig zu belasten.",
          p5: "(5) Bei Vorliegen eines Verdachts auf rechtswidrige bzw. strafbare Handlungen ist der Diensteanbieter berechtigt und ggf. auch verpflichtet, diese Aktivitäten zu überprüfen und ggf. geeignete rechtliche Schritte einzuleiten. Hierzu kann auch die Zuleitung eines Sachverhalts an die Staatsanwaltschaft gehören."
        }
      },
      sec17: {
        title: "Sperrung von Zugängen",
        content: {
          p1: "(1) Der Diensteanbieter kann den Zugang zu WorkNova vorübergehend oder dauerhaft sperren, wenn konkrete Anhaltspunkte vorliegen, dass gegen diese Nutzungsbedingungen und/oder geltendes Recht verstoßen wird, oder wenn der Diensteanbieter ein sonstiges berechtigtes Interesse an der Sperrung hat.",
          p2: "(2) Im Falle der vorübergehenden bzw. dauerhaften Sperrung sperrt der Diensteanbieter die Zugangsberechtigung und benachrichtigt den Nutzer hierüber per E-Mail.",
          p3: "(3) Im Falle einer vorübergehenden Sperrung reaktiviert der Diensteanbieter nach Ablauf der Sperrzeit die Zugangsberechtigung und benachrichtigt den Nutzer hierüber per E-Mail. Eine dauerhaft gesperrte Zugangsberechtigung kann nicht wiederhergestellt werden. Dauerhaft gesperrte Nutzer sind von der Nutzung dauerhaft ausgeschlossen und dürfen sich nicht erneut anmelden."
        }
      },
      sec18: {
        title: "Datenschutz",
        content: {
          p1: "(1) Zu den Qualitätsansprüchen des Diensteanbieters gehört es, verantwortungsbewusst mit den persönlichen Daten der Nutzer (diese Daten werden nachfolgend „personenbezogene Daten“ genannt) umzugehen. Die sich aus der Registrierung auf WorkNova sowie aus der Nutzung der verfügbaren Dienste ergebenden personenbezogenen Daten werden vom Diensteanbieter daher nur erhoben, gespeichert und verarbeitet, soweit dies zur vertragsgemäßen Leistungserbringung erforderlich und durch gesetzliche Vorschriften erlaubt, oder vom Gesetzgeber angeordnet ist. Der Diensteanbieter wird personenbezogene Daten vertraulich sowie entsprechend den Bestimmungen des geltenden Datenschutzrechts behandeln und nicht an Dritte weitergeben, sofern dies nicht zur Vertragserfüllung erforderlich ist oder eine gesetzliche Verpflichtung vorliegt oder eine Einwilligung des Nutzers.",
          p2: "(2) Hierüber hinaus verwendet der Diensteanbieter personenbezogene Daten nur, soweit der Nutzer hierzu ausdrücklich eingewilligt hat. Eine erteilte Einwilligung kann jederzeit widerrufen werden."
        }
      },
      sec19: {
        title: "Haftungsbeschränkung",
        content: {
          p1: "Der Diensteanbieter haftet ausschließlich nach Maßgabe der nachfolgenden Regelungen:",
          p2: "(1) Für Schäden, die durch den Diensteanbieter oder durch dessen gesetzlichen Vertreter, leitende Angestellte oder einfache Erfüllungsgehilfen vorsätzlich oder grob fahrlässig verursacht wurde, haftet der Diensteanbieter unbeschränkt.",
          p3: "(2) In Fällen der leicht fahrlässigen Verletzung von nur unwesentlichen Vertragspflichten haftet der Diensteanbieter nicht. Wesentliche Vertragspflichten – auch „Kardinalpflichten“ genannt – sind diejenigen Pflichten, deren Erfüllung für die ordnungsgemäße Durchführung des Vertrags erforderlich ist und auf deren Einhaltung der Vertragspartner regelmäßig vertrauen darf. Im Übrigen ist die Haftung des Diensteanbieters für leicht fahrlässig verursachte Schäden auf die diejenigen Schäden beschränkt, mit deren Entstehung im Rahmen des jeweiligen Vertragsverhältnisses typischerweise gerechnet werden muss (vertragstypisch vorhersehbare Schäden). Dies gilt auch bei leicht fahrlässigen Pflichtverletzungen der gesetzlichen Vertreter, leitenden Angestellten bzw. einfachen Erfüllungsgehilfen des Diensteanbieters.",
          p4: "(3) Die vorstehende Haftungsbeschränkung gilt nicht im Falle von Arglist, im Falle von Körper- bzw. Personenschäden, für die Verletzung von Garantien sowie für Ansprüche aus Produkthaftung."
        }
      },
      sec20: {
        title: "Schriftform",
        content: {
          p1: "Sofern in diesen Nutzungsbedingungen nicht ausdrücklich etwas Anderes angegeben ist, sind sämtliche Erklärungen, die im Rahmen der Nutzung von WorkNova abgegeben werden, in Schriftform oder per E-Mail abzugeben."
        }
      },
      sec21: {
        title: "Salvatorische Klausel",
        content: {
          p1: "Sollte eine Bestimmung dieser Nutzungsbedingungen unwirksam sein oder werden, so bleibt die Rechtswirksamkeit der übrigen Bestimmungen hiervon unberührt. An Stelle der unwirksamen Bestimmung gilt eine wirksame Bestimmung als vereinbart, die der von den Parteien gewollten wirtschaftlich am nächsten kommt."
        }
      },
      sec22: {
        title: "Anwendbares Recht",
        content: {
          p1: "Diese Nutzungsbedingungen unterliegen dem Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts (Convention of Contracts for the International Sales of Goods, CISG).",
          p2: "Bei Verbrauchern gilt diese Rechtswahl nur insoweit, als nicht der gewährte Schutz durch zwingende Bestimmungen des Rechts des Staates, in dem der Verbraucher seinen gewöhnlichen Aufenthalt hat, entzogen wird."
        }
      },
      sec23: {
        title: "Gerichtsstand",
        content: {
          p1: "Ausschließlicher Gerichtsstand für alle sich aus diesen Nutzungsbedingungen ergebenden Streitigkeiten ist der Sitz des Diensteanbieters soweit der Nutzer Unternehmer, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist. Hat der Verbraucher keinen Wohnsitz in Deutschland oder in einem anderen Land der Europäischen Union, so ist unser Geschäftssitz ebenfalls Gerichtsstand. In allen anderen Fällen gilt der gesetzliche Gerichtsstand."
        }
      }
    }
  },



  // ========== DATENSCHUTZ PAGE ==========
  privacyPage: {
    badge: "Rechtliches",
    title: "Datenschutz",
    titlePart2: "Erklärung.",
    subtitle: "Für die digitale Rekrutierungsplattform „Worknova“",
    version: "Version 1.0 • Stand Nov. 2025",
    navigation: "Navigation",
    responsibleParty: "Verantwortliche Stelle",
    principles: "Grundsätze",
    collection: "Erhebung & Verarbeitung",
    cookies: "Cookies & Tracking",
    storage: "Speicherung & Löschung",
    dataSharing: "Weitergabe von Daten",
    rights: "Betroffenenrechte",
    fullDocument: "Vollständiges Dokument nach DSGVO",
    sections: {
      preamble: {
        text: "Diese Datenschutzerklärung informiert Bewerber, Unternehmer und sonstige Nutzer der digitalen Rekrutierungsplattform worknova.de (nachfolgend „Plattform“ genannt) über die Erhebung, Verarbeitung und Nutzung personenbezogener Daten im Rahmen der Nutzung der Plattform und der durch sie vermittelten Dienstleistungen.",
        operatedBy: "Die Plattform wird betrieben von der:",
        address: "Karlstraße 68, 76137 Karlsruhe"
      },
      sec1: {
        title: "Verantwortliche Stelle",
        content: {
          p1: "Verantwortlich im Sinne der Datenschutz-Grundverordnung (DSGVO) und des Bundesdatenschutzgesetzes (BDSG) ist die Morsnova GmbH, Karlstraße 68, 76137 Karlsruhe."
        }
      },
      sec2: {
        title: "Grundsätze der Datenverarbeitung",
        content: {
          p1: "Die Morsnova GmbH verarbeitet personenbezogene Daten ausschließlich im Einklang mit den Bestimmungen der DSGVO, des BDSG sowie weiterer einschlägiger datenschutzrechtlicher Vorschriften.",
          p2: "Personenbezogene Daten werden nur verarbeitet, soweit dies für die Bereitstellung und Nutzung der Plattform, die Durchführung von Rekrutierungsverfahren, die Kommunikation zwischen Bewerbern und Unternehmern, die Vertragserfüllung oder zur Wahrung berechtigter Interessen der Morsnova GmbH erforderlich ist.",
          articles: [
            { art: "Art. 6 Abs. 1 lit. a", desc: "Grundlage einer freiwilligen Einwilligung" },
            { art: "Art. 6 Abs. 1 lit. b", desc: "Erfüllung vertraglicher Pflichten" },
            { art: "Art. 6 Abs. 1 lit. f", desc: "Grundlage berechtigter Interessen" }
          ]
        }
      },
      sec3: {
        title: "Erhebung und Verarbeitung personenbezogener Daten",
        content: {
          sub1: {
            title: "(1) Registrierung auf der Plattform",
            intro: "Im Rahmen der Registrierung werden je nach Nutzerart folgende Daten erhoben und gespeichert:",
            companyLabel: "Unternehmer",
            companyText: "Unternehmensname, Branche, Ansprechpartner, Kontaktdaten, E-Mail-Adresse, Passwort, Rechnungsanschrift und ggf. Zahlungsinformationen.",
            applicantLabel: "Bewerber",
            applicantText: "Name, Kontaktdaten, Qualifikationen, Lebenslauf, Zeugnisse, Sprachkenntnisse und weitere berufsrelevante Nachweise.",
            legalBasis: "Rechtsgrundlage: Art. 6 Abs. 1 lit b DSGVO."
          },
          sub2: {
            title: "(2) Nutzung der Plattform",
            p1: "Während der aktiven Nutzung werden automatisiert technische Nutzungsdaten erfasst, insbesondere IP-Adresse, Zeitpunkt des Zugriffs, Browsertyp, Betriebssystem, Geräteinformationen und aufgerufene Seiten. Diese Verarbeitung dient der Systemsicherheit, der Fehleranalyse und der statistischen Auswertung.",
            legalBasis: "Rechtsgrundlage: Art. 6 Abs. 1 lit f DSGVO."
          },
          sub3: {
            title: "(3) Kommunikation und Bewerberdaten",
            p1: "Morsnova GmbH verarbeitet Kommunikationsinhalte (Nachrichten, Anhänge, Terminabsprachen), Bewerbungsunterlagen, Lebensläufe, Zertifikate und Qualifikationsnachweise ausschließlich zur Durchführung des Bewerbungs-, Anerkennungs- und Rekrutierungsverfahrens.",
            legalBasis: "Rechtsgrundlage: Art. 6 Abs. 1 lit b DSGVO."
          },
          sub4: {
            title: "(4) Zahlungsdaten",
            p1: "Zur Abwicklung kostenpflichtiger Leistungen binden wir über sichere Schnittstellen zugelassene Zahlungsdienstleister (z. B. Stripe, PayPal oder Bankinstitute) ein. Personenbezogene Daten an den Zahlungsdienstleister werden nicht übermittelt. Der Nutzer selbst legt seine personenbezogenen Daten den Zahlungsdienstleistern gegenüber offen."
          },
          sub5: {
            title: "(5) & (6) Cookies & Tracking-Technologien",
            p1: "Unsere Webseite verwendet Cookies. Bei Cookies handelt es sich um Textdateien, die im Internetbrowser bzw. vom Internetbrowser auf dem Computersystem des Nutzers gespeichert werden. Ruft ein Nutzer eine Website auf, so kann ein Cookie auf dem Betriebssystem des Nutzers gespeichert werden. Dieser Cookie enthält eine charakteristische Zeichenfolge, die eine eindeutige Identifizierung des Browsers beim erneuten Aufrufen der Website ermöglicht.",
            p2: "Wir setzen Cookies ein, um unsere Website funktionsfähig zu gestalten. Einige Elemente unserer Internetseite erfordern es, dass der aufrufende Browser auch nach einem Seitenwechsel identifiziert werden kann. Die Rechtsgrundlage für technisch erforderlichen Cookies ist Art. 6 Abs. 1 lit. f DSGVO i.S.d. § 25 Abs. 2 TDDDG.",
            thirdPartyTitle: "Third Part Cookies & EU-USA Data Privacy Framework",
            thirdPartyText1: "Die Europäische Kommission hat den Angemessenheitsbeschluss für den Datenschutzrahmen EU-USA angenommen. US-Unternehmen können sich dem Rahmen anschließen, indem sie sich zur Einhaltung detaillierter Datenschutzpflichten verpflichten. Das US-Handelsministerium führt eine Liste zertifizierter Unternehmen.",
            thirdPartyText2: "Google Analytics 4 & Firebase: Wir nutzen diese Dienste nur bei ausdrücklicher Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Google nutzt Cookies zur Analyse der Website-Nutzung. Firebase dient der Stabilität, Performance-Optimierung und User Experience. Daten sind pseudonymisiert."
          }
        }
      },
      sec4: {
        title: "Zusatzfunktionen",
        content: {
          p1: "Unternehmer können optionale Zusatzleistungen (z. B. Sprachförderung, Integrationshilfen) für Bewerber initiieren. Hierfür werden Daten an beauftragte Partnerunternehmen weitergegeben, die gemäß Art. 28 DSGVO vertraglich zur Einhaltung der Datenschutzvorgaben verpflichtet sind."
        }
      },
      sec5: {
        title: "Speicherung & Löschung",
        content: {
          p1: "Personenbezogene Daten werden nur solange gespeichert, wie sie zur Erfüllung des jeweiligen Zwecks erforderlich sind. Nach Konto-Löschung erfolgt die Entfernung innerhalb von 30 Tagen, sofern keine gesetzlichen Aufbewahrungspflichten (Handels-/Steuerrecht) bestehen."
        }
      },
      sec6: {
        title: "Weitergabe von Daten",
        content: {
          intro: "Eine Weitergabe personenbezogener Daten erfolgt ausschließlich:",
          list: [
            { icon: "UserCheck", text: "An Bewerber oder Unternehmer zur Durchführung des Verfahrens" },
            { icon: "Scale", text: "An Behörden (z. B. ZAV, ZAB) für Visa- oder Anerkennungsverfahren" },
            { icon: "Database", text: "An technische Dienstleister (IT-Support, Hosting) im Auftrag" },
            { icon: "Globe", text: "Übermittlung in Drittländer nur bei Erfüllung der Art. 44 ff. DSGVO" }
          ],
          legalBasis: "Rechtsgrundlage: Art. 6 Abs. 1 lit b DSGVO (Vertragserfüllung) & Art. 6 Abs. 1 lit f DSGVO (berechtigtes Interesse)."
        }
      },
      sec7: {
        title: "Statistische Auswertung",
        content: {
          p1: "Daten werden in anonymisierter Form zur Erstellung von Statistiken (Vermittlungsquoten, Marktentwicklung) genutzt. Ein Rückschluss auf einzelne Personen ist ausgeschlossen. Grundlage: Art. 6 Abs. 1 lit f DSGVO."
        }
      },
      sec8: {
        title: "Datensicherheit",
        content: {
          p1: "Verschlüsselung per SSL/TLS (Sicherer Server-Standort: Deutschland).",
          p2: "Wir treffen umfangreiche technische Maßnahmen zum Schutz vor Verlust oder unbefugtem Zugriff."
        }
      },
      sec9: {
        title: "Betroffenenrechte",
        content: {
          rights: [
            "Auskunftsrecht (Art. 15 DSGVO)",
            "Recht auf Berichtigung (Art. 16 DSGVO)",
            "Recht auf Löschung (Art. 17 DSGVO)",
            "Einschränkung der Verarbeitung (Art. 18 DSGVO)",
            "Recht auf Datenübertragbarkeit (Art. 20 DSGVO)",
            "Widerspruchsrecht (Art. 21 DSGVO)",
            "Recht auf Widerruf der Einwilligung",
            "Beschwerderecht bei Aufsichtsbehörde (Art. 77)"
          ],
          contact: "Zur Ausübung dieser Rechte genügt eine formlose Mitteilung per E-Mail an:"
        }
      },
      sec10: {
        title: "Widerruf von Einwilligungen",
        content: {
          p1: "Sofern die Verarbeitung personenbezogener Daten auf einer Einwilligung beruht, kann diese jederzeit mit Wirkung für die Zukunft widerrufen werden. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung bleibt davon unberührt."
        }
      },
      sec11: {
        title: "Änderungen dieser Datenschutzerklärung",
        content: {
          p1: "Morsnova behält sich vor, diese Datenschutzerklärung jederzeit zu ändern oder zu aktualisieren, um sie an neue gesetzliche Vorgaben, technische Entwicklungen oder organisatorische Anpassungen anzupassen. Die jeweils aktuelle Fassung ist abrufbar unter:"
        }
      },
      footer: {
        verification: "Verification Signature",
        authorized: "Authorized by Legal Department"
      }
    }
  }
};

// =====================================================
// ENGLISH TRANSLATIONS (COMPLETE)
// =====================================================
const en = {
  nav: {
    home: "Home",
    companies: "Companies",
    talents: "Talents",
    services: "Services",
    contact: "Contact",
    login: "Login",
    register: "Register for free",
    signIn: "Sign in"
  },

  hero: {
    badge: "Live Recruiting Platform",
    titleLine1: "Find International",
    titleLine2: "Skilled Workers",
    subtitleLine1: "Smart",
    subtitleLine2: "Recruiting",
    description: "Worknova combines digital intelligence with personal guidance and supports companies in acquiring international skilled workers, while applicants find a secure start.",
    forCompanies: "FOR COMPANIES",
    forApplicants: "FOR APPLICANTS",
    startAsCompany: "Start as a Company",
    findTalents: "Find suitable talents efficiently",
    startNow: "Start now",
    startAsTalent: "Start as a Professional",
    secureDreamJob: "Secure your dream job in Germany",
    applyNow: "Apply now"
  },

  dashboard: {
    overview: "Overview",
    pipeline: "Pipeline",
    documents: "Documents",
    recruitingCentral: "Recruiting Central",
    globalTalentFeed: "Global Talent Feed v4.0",
    startDemo: "Start Demo",
    activePipeline: "Active Pipeline",
    aiMatchRate: "AI Match Rate",
    optimal: "Optimal",
    integrations: "Integrations",
    live: "Live",
    intelligentSourcing: "Intelligent Sourcing Engine",
    searchQuery: "Search for Cloud Engineer profiles from South America.",
    foundCandidates: "Found: 12 candidates",
    verifiedVisa: "8 have verified visa history.",
    viewMatches: "View Matches",
    analyzeScore: "Analyze Score",
    realTimeUpdates: "Real-Time Updates",
    visaRequest: "Visa Request",
    interview: "Interview",
    docCheck: "Doc Check",
    matching: "Matching",
    complianceSecured: "Compliance secured",
    latency: "Latency",
    smartDashboard: "A smartly designed dashboard for",
    maxOverview: "maximum overview",
    dashboardDesc: "Get a first impression of an interface that reduces complexity, provides real-time orientation and makes every step of your recruitment process visible.",
    searchTalent: "Search talent",
    company: "Company",
    jobTitle: "Job title",
    location: "Location",
    search: "Search",
    myTalents: "My Talents",
    documentsCloud: "Documents & Cloud",
    powerOfAttorney: "Power of Attorney",
    employerQuestionnaire: "Employer Questionnaire",
    postJob: "Post a job",
    companyProfile: "Company Profile",
    companyDocuments: "Company Documents",
    serviceContracts: "Service Contracts",
    officialTranslations: "Official Translations",
    chat: "Chat",
    invoicesPayments: "Invoices & Payments",
    processMonitoring: "Process Monitoring",
    requestDemo: "Request Demo Now",
    learnMorePlatform: "Learn more about the platform"
  },

  targetGroups: {
    headline: "Together, companies and skilled workers reach",
    headlineHighlight: "new heights with digital competence",
    description: "We combine personal support with efficient growth for a successful, shared future.",
    applicants: "Applicants",
    applicantsIntroStart: "Rely on",
    applicantsHighlight: "clear perspectives",
    applicantsIntroEnd: ", personal guidance and a secure start in your new work environment.",
    learnMore: "Learn more",
    showLess: "Show less",
    applicantsText1: "With Worknova, you get access to carefully selected positions at German companies. You can navigate the application process digitally and easily, and strategically apply your skills.",
    applicantsText2: "Our platform supports you with clear information, helpful features and reliable guidance through important steps, so you can confidently plan your professional path in Germany and prepare your fresh start.",
    applicantsHighlightBox: "Discover suitable job offers and get a first impression of your professional opportunities.",
    toTalentPage: "To Talent Page",
    companies: "Companies",
    companiesIntroStart: "Rely on",
    companiesHighlight: "tailored recruiting solutions",
    companiesIntroEnd: ", digital efficiency and sustainable support.",
    companiesText1: "With Worknova, you get access to a carefully vetted pool of international skilled workers. Through the platform, you manage selection, communication and process steps clearly and efficiently.",
    companiesText2: "Worknova supports companies with important procedures such as recognition, visa and communication with the relevant authorities and accompanies all parties through the entire recruitment process.",
    companiesHighlightBox: "Create a solid foundation for sustainable growth and strengthen your profile as an attractive employer.",
    requestDemo: "Request Demo"
  },

  process: {
    liveTracking: "Live Tracking",
    processMonitoring: "Talent Process Monitoring",
    processDesc: "Overview of all talents with current status in the four process steps.",
    step1Title: "Contract Bundling",
    step1Tooltip: "All required documents collected, reviewed and prepared for the next steps.",
    step2Title: "Authority Review and Preboarding",
    step2Tooltip: "All necessary applications submitted and coordinated, talents receive important information.",
    step3Title: "Work Start and Onboarding",
    step3Tooltip: "Structured preparation for work start, orientation for talents.",
    step4Title: "Completed Probation",
    step4Tooltip: "Start in the company and integration supported, first months monitored.",
    workStart: "Work Start",
    reference: "Reference",
    assistant: "Assistant",
    informatics: "Informatics",
    softwareTech: "Software Technology",
    phase: "Phase",
    mobileApp: "Mobile App",
    pocketTitle: "Worknova for your",
    pocketHighlight: "pocket.",
    pocketDesc: "The entire power of our platform in one app. Try the chat on the phone – we respond in real-time.",
    releaseNotify: "Notification on release?",
    emailPlaceholder: "Your email address",
    weWillContact: "We'll be in touch!",
    worknova: "Worknova Support",
    respondsImmediately: "Responds immediately",
    today: "Today",
    writeMessage: "Write a message...",
    quickReply1: "Is my visa here? 📄",
    quickReply2: "When do I start work? 📅",
    quickReply3: "Upload documents 📤",
    chatGreeting: "Hello! 👋 Is there an update on my visa application?",
    chatResponse1: "Good news! ✅ The pre-approval has just arrived.",
    chatVisaApproved: "Your visa has been approved! 🎉 Confirmation sent via email.",
    chatWorkStart: "Your first day of work is November 1st. 🚀",
    chatUploadDocs: "Simply upload your documents here.",
    chatDefault: "I've forwarded your request."
  },

  footer: {
    address: "Karlstr. 68",
    city: "76137 Karlsruhe",
    country: "Germany",
    scrollToTop: "Back to top",
    platform: "Platform",
    aboutWorknova: "About Worknova",
    imprint: "Imprint",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
    paymentInfo: "Payment Information",
    links: "Links",
    contact: "Contact",
    faq: "FAQ",
    requestDemo: "Request Demo",
    appVersion: "App Version",
    comingSoon: "Coming soon",
    socialMedia: "Social Media",
    visitLinkedin: "Visit Worknova on LinkedIn",
    visitInstagram: "Visit Worknova on Instagram",
    copyright: "Morsnova GmbH. All rights reserved.",
    madeWith: "Made with ❤️ in Karlsruhe"
  },

  contact: {
    writeUs: "Write to us",
    weAreHere: "We are here for you.",
    personalDirect: "Personal & Direct.",
    contactText: "Whether you are a company looking for skilled workers or a professional who wants to work in Germany: Our team is happy to advise you. Personal, competent and in your language.",
    responseTime: "Response within 24 hours",
    emailContact: "Email Contact",
    headquarters: "Headquarters",
    supportTeam: "Our support team speaks",
    languages: "German, English & Turkish",
    tellUs: "Tell us about your request.",
    getBack: "We will get back to you as soon as possible.",
    firstName: "First name",
    lastName: "Last name",
    email: "Email address",
    company: "Company",
    phone: "Phone number",
    subject: "Subject",
    subjectPlaceholder: "What is it about?",
    message: "Message",
    messagePlaceholder: "Your message to us...",
    privacyText: "I accept the",
    privacyLink: "Privacy Policy",
    privacyPolicy: "Privacy Policy",
    privacyEnd: "and consent to the processing of my data.",
    sendMessage: "Send message",
    sending: "Sending...",
    successTitle: "Message sent!",
    successMessage: "Thank you for your inquiry. We will get back to you shortly.",
    newMessage: "New message"
  },

  faq: {
    badge: "FAQ & Support",
    title: "Frequently asked",
    titleHighlight: "Questions.",
    questionNotFound: "Question not found?",
    supportHelp: "Our support team is happy to help you personally.",
    contactUs: "Contact us",
    helpCenter: "Help Center",
    questionsAnswers: "Questions &",
    answers: "Answers.",
    faqDescription: "Everything you need to know about the recruitment process, recognition and getting started with Worknova.",
    forCompanies: "For Companies",
    forTalents: "For Professionals",
    stillQuestions: "Still have questions?",
    stillQuestionsDesc: "Our team is happy to advise you personally. We usually respond within 24 hours.",
    contactNow: "Contact us now",
    companyFaqSubtitle: "Strategic insights into our recruitment process and collaboration.",
    talentFaqSubtitle: "Information about your path to Germany, recognition and integration.",
    companyQ1: "How long does it take to find suitable candidates?",
    companyA1: "After registration, you will receive the first matching profiles within 24 to 48 hours. The AI works around the clock and continuously searches our international talent pool.",
    companyQ2: "Are the qualifications really recognized?",
    companyA2: "Yes. All candidates undergo an Anabin check. We verify whether the qualification is recognized in Germany or can be recognized. You only see candidates with a positive prognosis.",
    companyQ3: "How much does it cost?",
    companyA3: "Registration and candidate search are free. You only pay upon successful placement. Transparent pricing with no hidden costs.",
    companyQ4: "Do you handle visa and entry?",
    companyA4: "Yes, completely. We accompany the entire process: visa application, appointment scheduling, document preparation, entry. You don't have to worry about anything.",
    companyQ5: "What happens after hiring?",
    companyA5: "Our integration support accompanies your employees for the first 6 months. Official appointments, apartment search, cultural integration. For long-term success.",
    companyQ6: "Which industries does Worknova cover?",
    companyA6: "All industries: IT, healthcare, trades, engineering, hospitality, logistics and more. Our talent pool is broadly positioned.",
    companyQ7: "How do you ensure quality?",
    companyA7: "Three-stage process: document verification, qualification check, language test. Only 15% of applicants are accepted. High quality standards.",
    talentQ1: "Does my degree need to be recognized in Germany?",
    talentA1: "Yes, all professions must be verified and recognized. Worknova supports you in this process through automated checks (ZAB/ZAV).",
    talentQ2: "How does the recognition process work?",
    talentA2: "We verify your qualification with the relevant authorities (e.g. ZAB/ZAV) to determine whether it corresponds to a German qualification. If not, additional training may be required.",
    talentQ3: "Can I work immediately after entering Germany?",
    talentA3: "Yes, once you have received the residence permit as a skilled worker and all social insurances are legally registered.",
    talentQ4: "What happens if I lose my job?",
    talentA4: "You must report this to the immigration office. You then usually have 3-6 months to find a new job before your residence permit expires.",
    talentQ5: "Can my family come to Germany with me?",
    talentA5: "Yes, spouses and children can follow through family reunification. Spouses usually need to prove basic German skills (A1) – but there are exceptions, e.g. for Blue Card holders.",
    talentQ6: "Are there fees for using the platform?",
    talentA6: "Using our platform is generally free. Fees may apply for additional services such as translations, language courses or external qualifications. However, these services are handled through our partners and external network, not directly through the platform.",
    talentQ7: "Does the platform support integration or orientation in Germany?",
    talentA7: "Yes! We prepare skilled workers for living and working in Germany from the beginning, with onboarding courses, direct exchange before entry and practical tips for getting started."
  },

  login: {
    welcomeBack: "Welcome",
    back: "back.",
    description: "Sign in to access your dashboard and manage your recruitment processes.",
    feature1: "Real-time updates on your candidates",
    feature2: "Secure communication via the platform",
    feature3: "Full control over your processes",
    signIn: "Sign in",
    accountAccess: "Access to your account",
    emailLabel: "Email address",
    emailPlaceholder: "your@email.com",
    passwordLabel: "Password",
    forgotPassword: "Forgot password?",
    rememberMe: "Remember me",
    loginButton: "Sign in",
    loggingIn: "Signing in...",
    noAccount: "Don't have an account?",
    registerNow: "Register now",
    ssl: "256-bit SSL",
    gdpr: "GDPR compliant",
    loginInfoMessage: "The login function will be activated after launch. Contact us for demo access."
  },

  register: {
    startToday: "Start",
    today: "today.",
    description: "Create your free account and experience the future of international recruiting.",
    feature1: "AI-powered matching in 24 hours",
    feature2: "Legally secure processing guaranteed",
    feature3: "Free registration",
    registerTitle: "Register",
    chooseAccountType: "Choose your account type",
    companyAccount: "Company Account",
    talentProfile: "Professional Profile",
    fillForm: "Fill out the form",
    company: "Company",
    companyDesc: "Find qualified skilled workers",
    talent: "Professional",
    talentDesc: "Start your career in Germany",
    alreadyAccount: "Already have an account?",
    loginHere: "Log in here",
    internationalPool: "International talent pool",
    aiMatching: "AI matching in 24h",
    legallySecure: "Legally secure",
    personalSupport: "Personal support",
    topEmployers: "Top employers",
    visaSupport: "Visa support",
    integrationSupport: "Integration support",
    freeOfCharge: "100% free",
    contactPerson: "Contact person",
    fullName: "Full name",
    companyName: "Company name",
    emailLabel: "Email address",
    emailPlaceholder: "your@email.com",
    passwordLabel: "Password",
    minChars: "Min. 8 characters",
    acceptTerms: "I accept the",
    termsLink: "Terms",
    and: "and",
    privacyLink: "Privacy Policy",
    registerButton: "Register for free",
    creating: "Creating...",
    backToSelection: "← Back to selection",
    welcomeTitle: "🎉 Welcome!",
    successCreated: "Successfully created",
    successTitle: "Successfully registered!",
    successMessage: "We have sent you a confirmation email. Check your inbox.",
    toHomepage: "To homepage",
    gdpr: "GDPR compliant",
    ssl: "256-bit SSL"
  },

  notFound: {
    badge: "Error 404",
    title: "Page not",
    titleLine2: "found.",
    description: "The requested page unfortunately does not exist. We apologize for the inconvenience.",
    toHome: "To Homepage",
    helpFaq: "Help & FAQ"
  },

  language: {
    de: "Deutsch",
    en: "English",
    tr: "Türkçe",
    select: "Select language",
    label: "Language"
  },

  common: {
    learnMore: "Learn more",
    getStarted: "Get started",
    close: "Close",
    loading: "Loading...",
    error: "Error",
    success: "Success",
    cancel: "Cancel",
    confirm: "Confirm",
    save: "Save",
    delete: "Delete",
    edit: "Edit",
    view: "View",
    back: "Back",
    next: "Next",
    previous: "Previous",
    yes: "Yes",
    no: "No",
    or: "or",
    and: "and"
  },

  // ========== TALENT PAGE ==========
  talentPage: {
    heroTitle1: "Your dream job",
    heroTitle2: "finds you.",
    heroDescription: "Create your profile once. Our AI matches you with top companies in Germany. No cover letter, no endless searching.",
    inquireNow: "Inquire now",
    howItWorks: "How it works",
    verified: "Verified",
    qualification: "Qualification",
    language: "Language",
    perfectMatch: "Perfect Match",
    aiMatchingActive: "AI Matching Active",
    systemStandby: "System Standby",
    free: "Free",
    setup: "Setup",
    matchRate: "Match Rate",
    support: "Support",
    yourWayToDE: "Your way to Germany.",
    digitalSecure: "Digital & Secure.",
    processDescription: "We have digitized and simplified the entire recruitment process.",
    userJourney: "User Journey",
    in3Steps: "In 3 steps",
    toSuccess: "to success.",
    step01: "Step 01",
    step02: "Step 02",
    step03: "Step 03",
    smartUpload: "Smart Upload",
    smartUploadDesc: "Our AI automatically recognizes your documents and checks them in real-time.",
    myDocuments: "My Documents",
    documentsReady: "3 of 5 documents ready",
    validated: "Validated",
    analyzing: "Analyzing...",
    profileBoost: "Profile Boost",
    profileBoostDesc: "Get a match score and learn how to optimize your profile.",
    strong: "Strong",
    aiRecommendation: "AI Recommendation",
    addCertificate: "Add certificate \"German B2\" (+10%).",
    liveMatches: "Live Matches",
    liveMatchesDesc: "Get found directly by employers who match your preferences.",
    topSuggestions: "Top Suggestions",
    newNow: "NEW NOW",
    match: "Match",
    pushInfo: "Push Info",
    newInvitation: "1 new invitation received!",
    jobOverview: "Your job offers at a glance",
    jobOverviewDesc: "find, bookmark and seize opportunities easily",
    markFavorites: "Mark favorites with one click",
    markFavoritesDesc: "Save interesting jobs to your personal list using the heart icon.",
    keepOverview: "Keep track of all offers",
    keepOverviewDesc: "Your personal dashboard shows all matching opportunities sorted by relevance.",
    decideChances: "Decide which opportunities to pursue",
    decideChancesDesc: "You are in control. Decide who you want to present your profile to.",
    fullTime: "Full-time",
    permanent: "Permanent",
    salary: "Salary: Collective agreement +",
    details: "Details",
    freeMaterial: "Free Material",
    supportForTalents: "Support for professionals:",
    workLiveUnderstand: "Understanding work & life",
    brochureText1: "Our information package helps you better understand working and living in Germany. It is compact, clear and easy to understand.",
    brochureText2: "With the supplementary self-test, you can check and deepen your knowledge. Professionals who use the brochure and complete the test improve their profile quality and increase their chances with companies.",
    contactNow: "Contact us now",
    brochureBottom: "We provide helpful information on essential steps so you can orient yourself well and prepare for your start in Germany in a structured way.",
    exclusiveJobs: "Exclusive Jobs",
    exclusiveJobsDesc: "Get access to premium positions not listed on public job boards.",
    verifiedCompanies: "Verified Companies",
    verifiedCompaniesDesc: "We check every partner company for quality and fairness for your safety.",
    arrivalSupport: "Arrival Support",
    arrivalSupportDesc: "Our team personally supports you with visa, housing search and integration.",
    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "All the essentials for professionals summarized.",
    readyForNextStep: "Ready for the next step?",
    ctaDescription: "Register today for free and become part of our international talent pool.",
    talentFaqQ1: "Does my degree need to be recognized in Germany?",
    talentFaqA1: "Yes, all professions need to be verified and recognized. Worknova supports you in this process through automated checks (ZAB/ZAV).",
    talentFaqQ2: "How does the recognition process work?",
    talentFaqA2: "We verify your qualification with the relevant authorities (e.g., ZAB/ZAV) to determine if it corresponds to a German qualification. If not, supplementary training may be required.",
    talentFaqQ3: "Can I work immediately after entering Germany?",
    talentFaqA3: "Yes, once you have received your residence permit as a skilled worker and all social insurances are legally registered.",
    talentFaqQ4: "What happens if I lose my job?",
    talentFaqA4: "You must report this to the immigration office. You typically have 3-6 months to find a new job before your residence permit expires.",
    talentFaqQ5: "Can my family come to Germany with me?",
    talentFaqA5: "Yes, spouses and children can follow through family reunification. Spouses usually need to prove basic German skills (A1) - but there are exceptions, e.g., for Blue Card holders.",
    talentFaqQ6: "Are there fees for using the platform?",
    talentFaqA6: "Using our platform is generally free. Fees may apply for additional services like translations, language courses or external qualifications. However, these services are handled through our partners and external network, not directly through the platform.",
    talentFaqQ7: "Does the platform support integration or orientation in Germany?",
    talentFaqA7: "Yes! We prepare professionals from the start for living and working in Germany, with onboarding courses, direct exchange before entry and practical tips for getting started.",
    worknovaGuide: "Worknova Guide",
    liveAndWork: "Live & Work",
    germany: "Germany",
    orientationHelp: "Orientation guide for your start",
    guideSpine: "WORKNOVA GUIDE 2024",
    sampleJob1: "HVAC Technician",
    sampleCompany1: "Hanseatic Energy • Hamburg",
    sampleJobFull: "HVAC Technician (m/f/d)",
    sampleCompanyFull: "Hanseatic Energy GmbH",
    sampleJob2: "Nurse (m/f/d)",
    sampleCompany2: "Klinikum Nord"
  },

  // ========== UNTERNEHMEN PAGE ==========
  unternehmenPage: {
    badge: "Next Gen Recruiting",
    heroTitle1: "Find talent.",
    heroTitle2: "Automated.",
    heroDescription: "Worknova transforms your recruitment process into a digital competitive advantage. AI-powered matching meets legally secure processing.",
    findTalentsNow: "Find talents now",
    scheduleDemo: "Schedule demo",
    timeToHire: "Avg. Time-to-Hire",
    successfulMatches: "Successful Matches",
    partnersWorldwide: "Partners worldwide",
    digitalProcess: "Digital Process",
    smarterRecruit: "Recruit smarter.",
    betterGrow: "Grow better.",
    featureDescription: "The Worknova Engine takes the complexity away from you. We automate the search, verification and bureaucracy so you can focus on what matters: your team.",
    aiMatching: "AI Matching",
    aiMatchingDesc: "Our algorithm analyzes hard & soft skills for the perfect cultural fit.",
    legalSecurity: "Legal Security",
    legalSecurityDesc: "Automated verification of all visa and recognition documents.",
    speedRecruiting: "Speed Recruiting",
    speedRecruitingDesc: "Reduce your time-to-hire by up to 60% through digital processes.",
    filterActive: "Filter: Active",
    liveSearch: "Live Search",
    viewProfile: "View profile",
    available: "Available",
    inConversation: "In conversation",
    newCandidateMatch: "New candidate matches 99% with your search!",
    deepLearning: "Deep Learning",
    weSeeTitlePart1: "We see what",
    weSeeTitlePart2: "resumes don't reveal.",
    weSeeDescription: "Traditional keyword search is not enough. Our engine understands connections, transferable skills and the potential of a candidate. We match not just to the position, but to your company.",
    dataPoints: "Data points",
    analysisTime: "Analysis time",
    liveMatching: "Live Matching",
    matchFound: "Match Found",
    fullTransparency: "Full transparency in",
    realTime: "real-time.",
    transparencyDescription: "You get a clear overview of the progress of your recruited professionals at any time. Our system transparently maps all essential process steps and clearly documents external procedures.",
    processMonitoring: "Process Monitoring",
    realTimeStatus: "Real-time status of all active procedures",
    liveUpdated: "Live Updated",
    skilledWorker: "Skilled worker",
    contracts: "1. Contracts",
    visa: "2. Visa",
    onboarding: "3. Onboarding",
    integration: "4. Integration",
    currentStatus: "Current status",
    workStart: "Work start",
    authorityCheck: "Authority check",
    inProgress: "In progress",
    contractCreation: "Contract creation",
    actionRequired: "Action required",
    overviewStructured: "Clearly structured overview",
    documentsSecure: "Documents securely managed",
    statusVisible: "Status visible anytime",
    reliableTraceability: "Reliable traceability",
    dashboard: {
      processes: "Processes",
      candidates: "Candidates",
      documents: "Documents",
      jobs: "Jobs",
      settings: "Settings"
    },
    whyWorknova: "Why Worknova?",
    yourBenefits: "Your benefits at a glance",
    sustainableEmployment: "Sustainable employment",
    sustainableEmploymentDesc: "We focus on long-term retention through perfect matching and cultural integration.",
    adminRelief: "Administrative process relief",
    adminReliefDesc: "Visa, recognition, authorities – we handle all the paperwork for you.",
    professionalProcess: "Professional process management",
    professionalProcessDesc: "Digital workflows ensure speed and avoid errors in the process.",
    reliablePlanning: "Reliably plannable placement",
    reliablePlanningDesc: "Clear timelines and status updates give you planning security for your projects.",
    focusCore: "Focus on core business",
    focusCoreDesc: "You focus on your business, we take care of recruiting new talent.",
    clearProcesses: "Continuously clear processes",
    clearProcessesDesc: "Transparency from day 1. No black box, but full insight into every step.",
    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Everything you need to know as a company about the recruiting process.",
    readyForUpgrade: "Ready for the upgrade?",
    ctaDescription: "Start your 30-day free trial today and experience how easy international recruiting can be.",
    startFreeNow: "Start free now",
    cancelAnytime: "Cancel anytime",
    companyFaqQ1: "How long does it take to find suitable candidates?",
    companyFaqA1: "After registration, you will receive the first matching profiles within 24 to 48 hours. The AI works around the clock and continuously searches our international talent pool.",
    companyFaqQ2: "Are the qualifications really recognized?",
    companyFaqA2: "Yes. All candidates go through an Anabin check. We verify if the qualification is recognized or can be recognized in Germany. You only see candidates with a positive prognosis.",
    companyFaqQ3: "What does it cost?",
    companyFaqA3: "Registration and candidate search are free. You only pay upon successful placement. Transparent prices without hidden costs.",
    companyFaqQ4: "Do you handle visa and entry?",
    companyFaqA4: "Yes, completely. We accompany the entire process: visa application, appointment scheduling, document preparation, entry. You don't have to worry about anything.",
    companyFaqQ5: "What happens after hiring?",
    companyFaqA5: "Our integration support accompanies your employees for the first 6 months. Official appointments, housing search, cultural integration. For long-term success.",
    companyFaqQ6: "Which industries does Worknova cover?",
    companyFaqA6: "All industries: IT, healthcare, skilled trades, engineering, hospitality, logistics and more. Our talent pool is broadly positioned.",
    companyFaqQ7: "How do you ensure quality?",
    companyFaqA7: "Three-step process: document verification, qualification check, language test. Only 15% of applicants are accepted. High quality standards."
  },

  // ========== APP LANDING PAGE ==========
  appLanding: {
    badge: "Worknova App Ecosystem",
    heroTitle1: "Career in",
    heroTitle2: "your hands.",
    heroDescription: "Smart processes, maximum overview. With the Worknova App, companies and professionals manage their shared future directly from their smartphone.",
    onTheList: "You're on the list!",
    notifyRelease: "We'll notify you about the app release.",
    earlyAccess: "Sign up for Early Access",
    enterEmail: "Enter email",
    privacyNote: "We respect your privacy. No spam.",
    validationActive: "Validation Active",
    visaProcess: "Visa Process",
    scanner: "Scanner",
    support: "Support",
    topMatch: "Top Match",
    featureSecurity: "Highest Security",
    featureSecurityDesc: "FaceID integration and biometric protection for your sensitive talent data and documents.",
    featureNetwork: "Global Network",
    featureNetworkDesc: "Direct connection to verified employers across Germany – location-independent and transparent.",
    featureLegal: "Legally Secure Processes",
    featureLegalDesc: "Digital checklists for visa and recognition guide all parties safely through the recruitment journey.",
    howItWorks: "How the app works",
    allInOne: "All in one app.",
    simpleOverview: "Simple & Clear.",
    allInOneDesc: "From document capture to job offer – the Worknova App guides you through every step of your career.",
    docScanTitle: "Intelligent Document Scan",
    docScanDesc: "Photograph certificates and documents. The AI recognizes, sorts and validates automatically.",
    jobMatchTitle: "Instant Job Matches",
    jobMatchDesc: "Receive matching job offers based on your qualifications – in real-time.",
    statusTrackTitle: "Live Status Tracking",
    statusTrackDesc: "Track visa, recognition and application at a glance. Push notifications keep you informed.",
    directContactTitle: "Direct Contact",
    directContactDesc: "Communicate encrypted with employers and Worknova support directly in the app.",
    ctaTitle1: "Recruiting HQ",
    ctaTitle2: "in your pocket.",
    ctaDesc: "Start today and experience the future of recruiting on your smartphone.",
    ctaButton: "Get notified on release",
    ctaNote: "Enter your email and we'll inform you when the app is available",
    intelligentAutomation: "Intelligent Automation",
    docsToProfile: "Your documents become a complete profile –",
    inUnder2Min: "in under 2 minutes.",
    step01: "01",
    step02: "02",
    step03: "03",
    step04: "04",
    photograph: "Photograph",
    photographDesc: "Simply hold your certificates and documents in front of the camera.",
    recognize: "Recognize",
    recognizeDesc: "The AI reads all relevant data – error-free and in seconds.",
    create: "Create",
    createDesc: "Your complete profile is created automatically, optimized for recruiters.",
    match: "Match",
    matchDesc: "Matching jobs find you – not the other way around. Push notification for every match.",
    result: "Result",
    profileExcites: "A profile that excites recruiters.",
    noManualInput: "No manual entries. No forgotten details. The AI captures everything – from qualifications to language skills to soft skills. Your profile is complete and professional from the first moment.",
    accuracy: "Accuracy",
    profileTime: "Profile time",
    scanDocument: "Scan document",
    aiRecognition: "AI-powered recognition",
    beingAnalyzed: "Being analyzed...",
    format: "Format",
    valid: "Valid",
    quality: "Quality",
    optimal: "Optimal",
    receiveMatch: "Receive match",
    findJobs: "Find matching jobs",
    trackStatus: "Track status",
    realTimeUpdates: "Real-time updates",
    submitted: "Submitted",
    inProgress: "In Progress",
    approved: "Approved",
    active: "Active",
    newNotification: "New notification: Document verified ✓",
    companyFeature1: "Real-time dashboard",
    companyFeature2: "Push on new matches",
    companyFeature3: "Document upload",
    talentFeature1: "Profile always with you",
    talentFeature2: "Job notifications",
    talentFeature3: "Chat with companies"
  },

  // ========== SERVICES PAGE ==========
  servicesPage: {
    badge: "Services",
    heroTitle1: "Bring professionals",
    heroTitle2: "safely and successfully",
    heroTitle3: "to Germany.",
    heroDescription: "Worknova manages your success: Coordination from preparation to integration. Additional services like translations, language courses or arrival service organized with one click.",
    inquireNow: "Inquire now",
    relocationService: "Relocation Service",
    serviceMatrix: "Service Matrix",
    modularSystem: "Modular Service System",
    serviceMatrixDesc: "Select an area to analyze the detailed process steps.",
    clickTabs: "(Click on the tabs on the left)",
    navigation: "Navigation",
    moduleActive: "Module Active",
    highlight: "Highlight",
    includedServices: "Included Services",
    hardSkill: "HARD SKILL",
    softSkill: "SOFT SKILL",
    adminSupport: "Administrative Support",
    adminSupportDesc: "Worknova guides professionals and companies centrally through the relevant administrative steps and ensures orderly preparation and processing of required procedures.",
    adminSupportNote: "Central process management.\nMore focus on your core business.",
    adminSub1: "Review & preparation of",
    adminSub2: "Appointment and document management",
    adminSub3: "Coordination of visa processes",
    adminSub4: "Work permit application",
    preOnboarding: "Pre- and Onboarding",
    preOnboardingDesc: "Our trained integration officer guides professionals step by step",
    preSub1: "Individual advice on work and daily life",
    preSub2: "Teaching German work and everyday culture",
    preSub3: "Flexible support in direct exchange",
    translation: "Translation Services",
    translationDesc: "Request translation offices centrally via Worknova and upload translations directly",
    translationSub1: "Request translation office",
    translationSub2: "Upload documents",
    translationSub3: "Accept offer",
    translationSub4: "Quick to finished translation",
    languageCourses: "Language Courses",
    languageCoursesDesc: "Our courses specifically support professionals. Through our partner networks, you can book flexible language courses as needed.",
    langSub1: "Promote integration",
    langSub2: "Ensure professional success",
    langSub3: "Ensure language qualification",
    arrivalService: "Arrival Service",
    arrivalServiceDesc: "From flight booking to first accommodation, we are happy to support you for a smooth start in Germany.",
    arrivalSub1: "Flight booking",
    arrivalSub2: "Personal transfer",
    arrivalSub3: "Accommodation for the first 30 days",
    integrationService: "Integration",
    integrationDesc: "Worknova also accompanies professionals through the most important steps of settling in after starting work. Supportive, orienting and always available until the end of the probation period.",
    integrationSub1: "Support with organizational",
    integrationSub2: "Orientation on integration and learning offers",
    integrationSub3: "Advice on daily life and challenges",
    adminShort: "ADMIN",
    onboardingShort: "ONBOARDING",
    translationShort: "TRANSLATION",
    languageShort: "LANGUAGE",
    arrivalShort: "ARRIVAL",
    integrationShort: "INTEGRATION",
    readyToStart: "Ready to start?",
    ctaDescription: "Let's revolutionize your recruitment process together.",
    matrix: {
      badge: "Service Matrix",
      title: "Modular Service System",
      description: "Select an area to analyze the detailed process steps.",
      hint: "(Click on the tabs on the left)"
    }
  },

  // ========== IMPRESSUM PAGE ==========
  impressumPage: {
    title: "Legal Notice",
    address: "Karlstr. 68",
    city: "76137 Karlsruhe",
    country: "Germany",
    email: "Email:",
    internet: "Internet:",
    ceo: "Authorized Managing Director:",
    ceoName: "Beritan Duyar",
    registerNumber: "Commercial register number: HRB 756458",
    registerCourt: "Registration court: Mannheim District Court",
    vatId: "VAT identification number: DE",
    vatIdLaw: "VAT identification number according to §27a Value Added Tax Act",
    section1Title: "1. Content of the online offering",
    section1Text1: "WORKNOVA assumes no guarantee for the timeliness, correctness, completeness or quality of the information provided. Liability claims for damages of a material or immaterial nature caused by the use or non-use of the information are excluded, unless WORKNOVA is proven to have acted with intent or gross negligence.",
    section1Text2: "All offers are non-binding. WORKNOVA reserves the right to change, supplement or remove content at any time without notice.",
    section2Title: "2. References and links",
    section2Text: "WORKNOVA is not responsible for the content of external websites that are linked directly or indirectly. Liability only arises if WORKNOVA is aware of illegal content and could technically prevent its use. WORKNOVA expressly distances itself from all content of linked pages that were changed after the link was set.",
    section3Title: "3. Payments",
    seePaymentInfo: "see Payment Information",
    subscriptions: "Subscriptions:",
    subscriptionText1: "Payments for subscriptions are made securely via our payment service provider (e.g. credit card, direct debit, PayPal).",
    subscriptionText2: "WORKNOVA does not store any sensitive bank or credit card data.",
    singleInvoices: "Individual invoices:",
    singleInvoiceText1: "Payments for individual items are made directly to WORKNOVA's bank account.",
    singleInvoiceText2: "Bank details can be found on the invoice or in your customer account.",
    section4Title: "4. Legal validity",
    section4Text: "This disclaimer is part of the online offering of WORKNOVA. If individual formulations do not correspond to the current legal situation, the remaining content remains unaffected in its validity."
  },

  // ========== ZAHLUNGSINFORMATIONEN PAGE ==========
  paymentPage: {
    title: "Payment Information",
    section1Title: "1. Subscriptions via payment service provider:",
    section1Intro: "For our subscriptions, payment is made securely via our payment service provider Stripe. You can conveniently pay by:",
    creditCard: "Credit card",
    directDebit: "Direct debit",
    paypal: "PayPal",
    section1Text1: "Billing is automatic at the start of your subscription. Your bank details are not stored by us, but processed directly via the payment service provider.",
    section1Text2: "For more information about subscriptions and payment terms, see our",
    termsLink: "Terms and Conditions",
    section2Title: "2. Individual invoices for recruitment process or additional services:",
    section2Intro: "For individual recruitment positions, you will receive an invoice from us that must be transferred directly to our bank account:",
    bankConnection: "Bank Details",
    bank: "Bank",
    iban: "IBAN",
    bic: "BIC",
    accountHolder: "Account holder"
  },

  // ========== NUTZUNGSBEDINGUNGEN PAGE ==========
  termsPage: {
    legalFramework: "Legal Framework",
    titlePart1: "Terms of",
    titlePart2: "Service.",
    subtitle: "Morsnova • Recruiting with worknova.de",
    version: "Version 1.0 • As of Nov. 2025",
    scroll: "Scroll",
    tableOfContents: "Table of Contents",
    sections: {
      sec1: {
        title: "Subject of the Terms of Participation and Use",
        content: {
          p1: "(1) Morsnova GmbH, Karlstraße 68, 76137 Karlsruhe (hereinafter referred to as \"Service Provider\") provides a platform on www.worknova.de (hereinafter referred to as \"WorkNova\"), which serves digital recruitment of skilled workers.",
          companyTitle: "ENTREPRENEURS",
          companyText: "Entrepreneurs (hereinafter referred to as \"Entrepreneurs\" or \"Users\") receive access to applicant profiles via the platform, can view application documents, communicate with skilled workers and initiate recruitment processes.",
          applicantTitle: "APPLICANTS",
          applicantText: "Applicants (hereinafter referred to as \"Applicants\" or \"Users\") are enabled to create profiles, upload application documents, contact potential employers and track the progress of ongoing recruitment, recognition and integration procedures.",
          p2: "(2) These Terms of Use govern the provision of services by the Service Provider and the use of these services by the Users. They apply to all functions and services provided via WorkNova in the context of digital recruitment and qualification support and apply both to entrepreneurs within the meaning of § 14 BGB and to consumers within the meaning of § 13 BGB.",
          p3: "(3) A consumer within the meaning of § 13 BGB is any natural person who enters into a legal transaction for purposes that are predominantly neither commercial nor self-employed. An entrepreneur within the meaning of § 14 BGB is a natural or legal person or a partnership with legal capacity who, when concluding a legal transaction, acts in the exercise of their commercial or independent professional activity.",
          p4: "(4) For entrepreneurs: Conflicting, supplementary or deviating terms and conditions of the user do not apply unless the Service Provider has expressly agreed to their validity in writing. This reservation of consent applies in any case, even if the Service Provider provides services or accepts services from the user without further reservation or objection in knowledge of conflicting or deviating terms and conditions of the user.",
          p5: "(5) For better readability, the masculine form (e.g. \"user\", \"applicant\") is used in these Terms of Use. However, the chosen terms apply equally to all genders and include all personal designations regardless of gender."
        }
      },
      sec2: {
        title: "Changes to the Terms of Use",
        content: {
          p1: "(1) The Service Provider reserves the right to change these Terms of Use at any time with effect also within existing contractual relationships. The Service Provider will inform about such changes at least 30 calendar days before the planned entry into force of the changes. If the user does not object within 30 days of receipt of the notification and continues to use the services even after the expiry of the objection period, the changes are deemed to be effectively agreed upon expiry of the period. In the event of an objection, the contract will continue under the previous conditions. In the notification of change, the Service Provider will inform the user of the right of objection and the consequences.",
          p2: "(2) In the event of changes in VAT, the Service Provider is entitled to adjust the remuneration corresponding to this change without the aforementioned right of objection existing."
        }
      },
      sec3: {
        title: "Registration Eligibility",
        content: {
          p1: "(1) Use of the services available on WorkNova requires registration as a user. There is no entitlement to use. The Service Provider is entitled to reject applications for use without giving reasons.",
          p2: "(2) Registration is only permitted to the user if he is of legal age and has unlimited legal capacity. Registration is prohibited for minors. In the case of a legal entity, registration must be carried out by a natural person with unlimited legal capacity and power of representation."
        }
      },
      sec4: {
        title: "Registration/Conclusion of Contract",
        content: {
          p1: "(1) For applicants: If access is requested for a purpose that can be attributed neither to your commercial nor your independent professional activity, the applicant has a statutory right of withdrawal. More information on the right of withdrawal and the cancellation policy can be found here.",
          p2: "(2) The contact details and other information requested by the Service Provider during the registration process must be provided completely and correctly by the user. When registering a legal entity, the authorized natural person must also be stated.",
          p3: "(3) After providing all requested data, the Service Provider checks it for completeness and plausibility. The user will receive a verification email for this purpose. If the information is correct from the Service Provider's point of view and there are no other concerns from the Service Provider's point of view, the Service Provider activates the requested access and notifies the user of this by email. The registration process represents the user's offer to conclude a contract for the use of the services on WorkNova to the Service Provider. The email from the Service Provider to the user confirming the registration constitutes the acceptance of the user's offer. Upon receipt of the email, the user is entitled to use the functions and services on WorkNova within the scope of these Terms of Use."
        }
      },
      sec5: {
        title: "Responsibility for Access Data",
        content: {
          p1: "(1) During the registration process, the user is asked to provide a username and password. With this data, the user can log in to WorkNova after access has been activated. It is the user's responsibility to ensure that the username does not violate the rights of third parties, in particular no name or trademark rights, and does not violate public decency.",
          p2: "(2) The access data, including the password, must be kept secret by the user and must not be made accessible to unauthorized third parties.",
          p3: "(3) It is further the user's responsibility to ensure that access to WorkNova and the use of the services available here is carried out exclusively by the user or by persons authorized by the user. If there is reason to fear that unauthorized third parties have obtained or will obtain knowledge of the access data, the Service Provider must be informed immediately.",
          alert: "The user is liable for any use and/or other activity carried out under his access data in accordance with statutory provisions."
        }
      },
      sec6: {
        title: "Update of Participant Data",
        content: {
          p1: "The user is obliged to keep the data provided (including contact details) up to date. If a change in the data provided occurs during the period of use of WorkNova, the information must be corrected immediately on WorkNova in the personal settings."
        }
      },
      sec7: {
        title: "Contract Term/Termination",
        content: {
          applicantTitle: "APPLICANT",
          applicantText: "(1) For applicants: Use of WorkNova is permitted for an indefinite period. The user can terminate the use at any time.",
          companyTitle: "COMPANY",
          companyText: "(2) For companies: The free trial phase ends automatically 30 days after conclusion of the contract. If the entrepreneur does not cancel at the end of the test phase, the contract is extended by one month at a time subject to a fee. The notice period is 7 days to the end of the month.",
          p3: "(3) Upon the termination becoming effective, the contractual relationship ends and the user may no longer use his access. The Service Provider reserves the right to block the username and password when the termination becomes effective.",
          p4: "(4) Termination must be made in writing or by email to support@worknova.de.",
          p5: "(5) The right of the contracting parties to extraordinary termination without notice for good cause remains unaffected.",
          p6: "(6) The Service Provider is entitled to irretrievably delete all data created within the scope of your participation upon expiry of 30 calendar days after the termination becomes effective and after expiry of any statutory retention periods."
        }
      },
      sec8: {
        title: "Service Offer/Prohibition of Circumvention",
        content: {
          p1: "The Service Provider makes various information and other services available to users on WorkNova for temporary use. Such services may include, for example, making data, contributions, image and sound documents, information and other content (hereinafter collectively referred to as \"Content\") available, as well as the possibility of creating individual profiles and contacting other users by writing personal messages. The content and scope of the services are determined by the respective contractual agreements, otherwise by the functionalities currently available on the portal. Both free and paid services are available on the portal. The use of services on WorkNova is free of charge for applicants.",
          p2: "(2) The Service Provider grants registered entrepreneurs access to applicant profiles, proof of qualification, CVs and other documents required for selection and contact with potential skilled workers. The entrepreneur can favorite suitable applicants, contact them directly via the integrated communication function and initiate recruitment processes. After contacting, necessary powers of attorney, documents and contract documents can be transmitted via WorkNova.",
          p3: "(3) Applicants are provided with a digital environment on WorkNova in which they can deposit personal data, qualifications, professional certificates and application documents. With the applicant's consent, his profile is made visible to registered entrepreneurs in the applicant pool. Visibility can be activated or deactivated independently at any time. In addition, the applicant is enabled to use supplementary (possibly chargeable) support offers, in particular language support, recognition support, translation services and integration measures.",
          p4: "(4) Services available on WorkNova may also include third-party services to which the Service Provider merely provides access. For the use of such services - which are identified as third-party services - regulations deviating from these Terms of Use or additional regulations may apply, to which the Service Provider will point out the user in each case.",
          p5: "(5) In other respects, there is a claim to the use of the services available on WorkNova only within the scope of the technical and operational possibilities at the Service Provider. The Service Provider strives for the most uninterrupted usability of its services possible. However, temporary restrictions or interruptions may occur due to technical faults (such as interruption of power supply, hardware and software errors, technical problems in data lines).",
          subtitle: "Important Commission Regulation & Prohibition of Circumvention",
          p6: "(6) The entrepreneur has the option of commissioning the Service Provider via the \"Start recruiting\" function available on WorkNova for a fee with support in the acquisition, selection and placement of qualified workers and skilled workers from third countries and accompanying the selected applicant from the selection process to successful employment in Germany. The Service Provider then acts as a personnel recruiter and process coordinator, but not as the employer of the placed skilled workers and not as the holder of a permit for temporary employment within the meaning of the AÜG. The remuneration for carrying out the recruitment and integration process is calculated per placed skilled worker on the basis of the gross annual salary agreed in the employment contract and amounts to 20% of this amount plus the applicable statutory VAT.",
          p7: "(7) Users undertake to communicate with each other exclusively via WorkNova and, in the event of an interest in concluding an employment contract with each other, to use exclusively the functions provided on WorkNova for this purpose. The entrepreneur undertakes not to approach, employ, commission the applicant directly or pass on his contact details to third parties without the prior involvement of the Service Provider.",
          alert: "This also applies in the event that the entrepreneur contacts the applicant by other means during or after the conclusion of the recruitment process. In the event of a culpable violation of this prohibition, a contractual penalty in the amount of 20% of the gross annual salary agreed with the applicant or - if such an agreement is missing - the usual gross annual salary for the advertised activity of the applicant per affected applicant is forfeited and must be paid to the Service Provider. The assertion of further claims for damages remains unaffected. The contractual penalty will not be offset against this."
        }
      },
      sec9: {
        title: "Changes to Services",
        content: {
          p1: "The Service Provider is entitled at any time to change services provided free of charge on WorkNova, to make new services available free of charge or for a fee and to discontinue the provision of free services. The Service Provider will take your legitimate interests into account in each case."
        }
      },
      sec10: {
        title: "Protection of Content, Responsibility for Third-Party Content",
        content: {
          p1: "(1) The content available on WorkNova is predominantly protected by copyright or other property rights and is owned by the Service Provider, other users or other third parties who have made the respective content available. The compilation of the content as such is possibly protected as a database or database work within the meaning of §§ 4 Para. 2, 87a Para. 1 UrhG. The user may only use this content in accordance with these Terms of Use and within the framework specified on WorkNova.",
          p2: "(2) The content available on WorkNova comes partly from the Service Provider and partly from users or other third parties. Content of users and other third parties is hereinafter collectively referred to as \"Third-Party Content\". The Service Provider does not check Third-Party Content for completeness, correctness and legality and therefore assumes no responsibility or warranty for the completeness, correctness, legality and timeliness of Third-Party Content. This also applies with regard to the quality of Third-Party Content and its suitability for a particular purpose, and also insofar as it concerns Third-Party Content on linked external websites. All content on the portal is Third-Party Content, except for those contents that are provided with a copyright notice of the Service Provider."
        }
      },
      sec11: {
        title: "Scope of Permitted Use, Monitoring of Usage Activities",
        content: {
          p1: "(1) The right of use is limited to access to WorkNova and the use of the services available here in each case within the framework of the regulations of these Terms of Use.",
          p2: "(2) The user is responsible for creating the technical requirements necessary in the user's area of responsibility for the contractual use of the services. The Service Provider owes no advice in this regard.",
          p3: "(3) The Service Provider points out that usage activities can be monitored to the extent permitted by law. This may also include the logging of IP connection data and conversation histories as well as their evaluation in the event of a concrete suspicion of a violation of these Terms of Use and/or in the event of a concrete suspicion of the existence of another illegal act or criminal offense."
        }
      },
      sec12: {
        title: "Remuneration and Payment Terms",
        content: {
          p1: "(1) Billing for fee-based access for companies takes place monthly in advance. Payment can be made via the offered payment methods (e.g. SEPA direct debit, credit card or PayPal).",
          p2: "(2) All stated fees are exclusive of the applicable statutory value added tax.",
          p3: "(4) In the event of default, the Service Provider is entitled to block access to WorkNova until all outstanding claims have been fully settled.",
          p4: "(6) Offsetting is only possible with undisputed or legally established counterclaims. The user can only assert a right of retention if it is based on the same contractual relationship."
        }
      },
      sec13: {
        title: "Creation of User Profiles",
        content: {
          p1: "(1) As far as available as a functionality on the portal, the user can customize his user profile within the framework of these Terms of Use. The restrictions of § 16 apply.",
          p2: "(2) The Service Provider generally does not check the identity of the profile owners and the information in the profiles. The Service Provider therefore gives no guarantee that each profile owner is the person the respective profile owner claims to be."
        }
      },
      sec14: {
        title: "Posting of Own Content by Users",
        content: {
          p1: "(1) As far as available as a functionality on the portal, content can be posted on the portal and thus made available to third parties in compliance with the following regulations.",
          p2: "(2) By posting content, the user grants the Service Provider a free and transferable right of use to the respective content, in particular",
          li1: "for storing the content on the Service Provider's server and publishing it, in particular making it publicly available (e.g. by displaying the content on the portal),",
          li2: "for editing and duplication, insofar as this is necessary for the provision or publication of the respective content, and",
          li3: "for granting rights of use to third parties to the content in accordance with § 15.",
          note: "If the user removes the posted content from WorkNova again, the right of use and exploitation granted above expires. However, the Service Provider remains entitled to keep copies created for backup and/or proof purposes. The rights of use already granted to other users to posted content also remain unaffected.",
          p3: "(3) The user is fully responsible for the content posted by him. The Service Provider does not check the content for completeness, correctness, legality, timeliness, quality and suitability for a particular purpose. The user therefore declares and warrants to the Service Provider that he is the sole owner of all rights to the content posted by him on WorkNova, or is otherwise entitled (e.g. by effective permission of the rights holder) to post the content on WorkNova and to grant the rights of use and exploitation according to the preceding paragraph (2).",
          p4: "(4) The Service Provider reserves the right to reject the posting of content and/or to edit, block or remove content already posted without prior notice if the posting of content by the user or the posted content itself has led to a violation of § 16 or there are concrete indications that a serious violation of § 16 will occur."
        }
      },
      sec15: {
        title: "Right of Use to Content Available on Worknova",
        content: {
          p1: "(1) Unless further use is expressly permitted in these Terms of Use or on WorkNova or enabled by a corresponding functionality (e.g. download button),",
          li1: "the content available on the portal may be accessed and displayed online exclusively for own purposes. This right of use is limited to the duration of the contractual registration on WorkNova;",
          li2: "it is prohibited to edit, change, translate, show or present, publish, exhibit, reproduce or distribute the content available on WorkNova in whole or in part. It is also prohibited to remove or change copyright notices, logos and other signs or protective notices.",
          p2: "(2) The user is only entitled to download content (\"Download\") and print content if a possibility for download or printing is available as a functionality (e.g. by means of a download button).",
          note: "The user receives a perpetual and non-exclusive right of use for use for own purposes to the content properly downloaded or printed by the user. As far as it concerns content that is provided for a fee, a further prerequisite for this granting of rights is the complete payment of the respective content. In other respects, all rights to the content remain with the original rights holder (the Service Provider or the respective third party)."
        }
      },
      sec16: {
        title: "Prohibited Activities",
        content: {
          p1: "(1) Unauthorized use specifically includes:",
          ul1: {
            li1: "all offers and promotions of paid content, services, and/or products, both own and those of third parties,",
            li2: "all offers, promotions, and execution of activities with a commercial background such as sweepstakes, raffles, barter transactions, advertisements, or pyramid schemes, and",
            li3: "any electronic or other collection of identity and/or contact data (including email addresses) of members (e.g., for sending unsolicited emails)."
          },
          p2: "(2) The user is prohibited from any activities on or in connection with WorkNova that violate applicable law, violate the rights of third parties or violate the principles of the protection of minors. In particular, it is prohibited:",
          ul2: {
            li1: "posting, disseminating, offering, and checking pornographic content, services, and/or products that violate youth protection laws, data protection laws, and/or other laws and/or are fraudulent;",
            li2: "using content that insults or defames other users or third parties;",
            li3: "using, providing, and disseminating content, services, and/or products that are legally protected or encumbered with third-party rights (e.g., copyrights) without being expressly authorized to do so."
          },
          p3: "(3) Furthermore, the user is also prohibited from the following activities regardless of a possible violation of the law when posting own content on WorkNova as well as when communicating with other users (e.g., by sending personal messages):",
          ul3: {
            li1: "Disseminating viruses, Trojans, and other harmful files;",
            li2: "Sending junk or spam mails as well as chain letters;",
            li3: "Disseminating suggestive, offensive, sexually explicit, obscene, or defamatory content;",
            li4: "Harassing other users (stalking, multiple contacting);",
            li5: "Requesting the disclosure of passwords;",
            li6: "Disseminating content without express permission."
          },
          p4: "(4) Also prohibited is any action capable of impairing the smooth operation of WorkNova, in particular excessively loading the Service Provider's systems.",
          p5: "(5) In the event of suspicion of illegal or criminal acts, the Service Provider is entitled and possibly also obliged to review these activities and initiate appropriate legal steps if necessary. This may also include forwarding a case to the public prosecutor's office."
        }
      },
      sec17: {
        title: "Blocking of Access",
        content: {
          p1: "(1) The Service Provider can temporarily or permanently block access to WorkNova if there are concrete indications that these Terms of Use and/or applicable law are being violated, or if the Service Provider has another legitimate interest in blocking.",
          p2: "(2) In the event of temporary or permanent blocking, the Service Provider blocks the access authorization and notifies the user of this by email.",
          p3: "(3) In the event of a temporary blocking, the Service Provider reactivates the access authorization after the blocking period has expired and notifies the user of this by email. A permanently blocked access authorization cannot be restored. Permanently blocked users are permanently excluded from use and may not register again."
        }
      },
      sec18: {
        title: "Data Protection",
        content: {
          p1: "(1) The Service Provider's quality standards include treating the personal data of users (hereinafter referred to as \"personal data\") responsibly. The personal data resulting from registration on WorkNova as well as from the use of the available services are therefore only collected, stored and processed by the Service Provider insofar as this is necessary for the contractual provision of services and permitted by statutory provisions, or ordered by the legislature. The Service Provider will treat personal data confidentially and in accordance with the provisions of applicable data protection law and will not pass it on to third parties unless this is necessary for the fulfillment of the contract or there is a legal obligation or the user has given consent.",
          p2: "(2) In addition, the Service Provider only uses personal data insofar as the user has expressly consented to this. A given consent can be revoked at any time."
        }
      },
      sec19: {
        title: "Limitation of Liability",
        content: {
          p1: "The Service Provider is liable exclusively in accordance with the following regulations:",
          p2: "(1) The Service Provider is liable without limitation for damages caused intentionally or by gross negligence by the Service Provider or by its legal representatives, executive employees or simple vicarious agents.",
          p3: "(2) In cases of slightly negligent breach of only insignificant contractual obligations, the Service Provider is not liable. Material contractual obligations – also called \"cardinal obligations\" – are those obligations whose fulfillment is necessary for the proper execution of the contract and on whose compliance the contractual partner may regularly rely. In other respects, the Service Provider's liability for damages caused by slight negligence is limited to those damages that must typically be expected within the framework of the respective contractual relationship (foreseeable damages typical for the contract). This also applies to slightly negligent breaches of duty by the legal representatives, executive employees or simple vicarious agents of the Service Provider.",
          p4: "(3) The above limitation of liability does not apply in the case of fraudulent intent, in the case of bodily or personal injury, for the violation of guarantees and for claims under product liability."
        }
      },
      sec20: {
        title: "Written Form",
        content: {
          p1: "Unless expressly stated otherwise in these Terms of Use, all declarations made within the framework of the use of WorkNova must be made in writing or by email."
        }
      },
      sec21: {
        title: "Severability Clause",
        content: {
          p1: "Should a provision of these Terms of Use be or become ineffective, the legal validity of the remaining provisions remains unaffected. Instead of the ineffective provision, an effective provision applies as agreed that comes closest economically to what the parties intended."
        }
      },
      sec22: {
        title: "Applicable Law",
        content: {
          p1: "These Terms of Use are subject to the law of the Federal Republic of Germany, excluding the UN Sales Convention (Convention of Contracts for the International Sales of Goods, CISG).",
          p2: "For consumers, this choice of law only applies insofar as the protection granted by mandatory provisions of the law of the state in which the consumer has his habitual residence is not withdrawn."
        }
      },
      sec23: {
        title: "Place of Jurisdiction",
        content: {
          p1: "The exclusive place of jurisdiction for all disputes arising from these Terms of Use is the registered office of the Service Provider insofar as the user is an entrepreneur, a legal entity under public law or a special fund under public law. If the consumer has no residence in Germany or in another country of the European Union, our registered office is also the place of jurisdiction. In all other cases, the statutory place of jurisdiction applies."
        }
      }
    }
  },

  // ========== DATENSCHUTZ PAGE ==========
  privacyPage: {
    badge: "Legal Information",
    title: "Privacy",
    titlePart2: "Policy.",
    subtitle: "For the digital recruitment platform \"Worknova\"",
    version: "Version 1.0 • As of November 2025",
    navigation: "Navigation",
    responsibleParty: "Responsible Party",
    principles: "Principles",
    collection: "Collection & Processing",
    cookies: "Cookies & Tracking",
    storage: "Storage & Deletion",
    dataSharing: "Data Sharing",
    rights: "Data Subject Rights",
    fullDocument: "Complete document according to GDPR",
    sections: {
      preamble: {
        text: "This privacy policy informs applicants, entrepreneurs and other users of the digital recruitment platform worknova.de (hereinafter referred to as \"Platform\") about the collection, processing and use of personal data in connection with the use of the Platform and the services provided through it.",
        operatedBy: "The platform is operated by:",
        address: "Karlstraße 68, 76137 Karlsruhe"
      },
      sec1: {
        title: "Responsible Party",
        content: {
          p1: "Responsible within the meaning of the General Data Protection Regulation (GDPR) and the Federal Data Protection Act (BDSG) is Morsnova GmbH, Karlstraße 68, 76137 Karlsruhe."
        }
      },
      sec2: {
        title: "Principles of Data Processing",
        content: {
          p1: "Morsnova GmbH processes personal data exclusively in accordance with the provisions of the GDPR, BDSG and other relevant data protection regulations.",
          p2: "Personal data is only processed to the extent necessary for the provision and use of the Platform, the execution of recruitment procedures, communication between applicants and entrepreneurs, contract fulfillment or to protect legitimate interests of Morsnova GmbH.",
          articles: [
            { art: "Art. 6 Para. 1 lit. a", desc: "Based on voluntary consent" },
            { art: "Art. 6 Para. 1 lit. b", desc: "Fulfillment of contractual obligations" },
            { art: "Art. 6 Para. 1 lit. f", desc: "Based on legitimate interests" }
          ]
        }
      },
      sec3: {
        title: "Collection and Processing of Personal Data",
        content: {
          sub1: {
            title: "(1) Registration on the Platform",
            intro: "The following data is collected and stored depending on the user type during registration:",
            companyLabel: "Entrepreneur",
            companyText: "Company name, industry, contact person, contact details, email address, password, billing address and, if applicable, payment information.",
            applicantLabel: "Applicant",
            applicantText: "Name, contact details, qualifications, resume, certificates, language skills and other job-relevant documents.",
            legalBasis: "Legal basis: Art. 6 Para. 1 lit b GDPR."
          },
          sub2: {
            title: "(2) Use of the Platform",
            p1: "During active use, technical usage data is automatically collected, including IP address, time of access, browser type, operating system, device information and pages visited. This processing serves system security, error analysis and statistical evaluation.",
            legalBasis: "Legal basis: Art. 6 Para. 1 lit f GDPR."
          },
          sub3: {
            title: "(3) Communication and Applicant Data",
            p1: "Morsnova GmbH processes communication content (messages, attachments, appointments), application documents, resumes, certificates and qualification documents exclusively for conducting the application, recognition and recruitment process.",
            legalBasis: "Legal basis: Art. 6 Para. 1 lit b GDPR."
          },
          sub4: {
            title: "(4) Payment Data",
            p1: "To process paid services, we integrate approved payment service providers (e.g., Stripe, PayPal or banking institutions) via secure interfaces. Personal data is not transmitted to the payment service provider. The user himself discloses his personal data to the payment service providers."
          },
          sub5: {
            title: "(5) & (6) Cookies & Tracking Technologies",
            p1: "Our website uses cookies. Cookies are text files that are stored in the internet browser or by the internet browser on the user's computer system. When a user visits a website, a cookie can be stored on the user's operating system. This cookie contains a characteristic string that enables the browser to be uniquely identified when the website is revisited.",
            p2: "We use cookies to make our website functional. Some elements of our website require that the calling browser can be identified even after a page change. The legal basis for technically required cookies is Art. 6 Para. 1 lit. f GDPR in conjunction with § 25 Para. 2 TDDDG.",
            thirdPartyTitle: "Third Party Cookies & EU-USA Data Privacy Framework",
            thirdPartyText1: "The European Commission has adopted the adequacy decision for the EU-US data privacy framework. US companies can join the framework by committing to comply with detailed data protection obligations. The US Department of Commerce maintains a list of certified companies.",
            thirdPartyText2: "Google Analytics 4 & Firebase: We use these services only with express consent (Art. 6 Para. 1 lit. a GDPR). Google uses cookies to analyze website usage. Firebase serves stability, performance optimization and user experience. Data is pseudonymized."
          }
        }
      },
      sec4: {
        title: "Additional Functions",
        content: {
          p1: "Entrepreneurs can initiate optional additional services (e.g., language support, integration assistance) for applicants. For this purpose, data is passed on to commissioned partner companies that are contractually obligated to comply with data protection requirements in accordance with Art. 28 GDPR."
        }
      },
      sec5: {
        title: "Storage & Deletion",
        content: {
          p1: "Personal data is only stored for as long as it is necessary to fulfill the respective purpose. After account deletion, removal takes place within 30 days, unless legal retention obligations (commercial/tax law) exist."
        }
      },
      sec6: {
        title: "Disclosure of Data",
        content: {
          intro: "Personal data is only disclosed:",
          list: [
            { icon: "UserCheck", text: "To applicants or entrepreneurs for conducting the procedure" },
            { icon: "Scale", text: "To authorities (e.g., ZAV, ZAB) for visa or recognition procedures" },
            { icon: "Database", text: "To technical service providers (IT support, hosting) on behalf" },
            { icon: "Globe", text: "Transfer to third countries only if Art. 44 ff. GDPR is fulfilled" }
          ],
          legalBasis: "Legal basis: Art. 6 Para. 1 lit b GDPR (Contract fulfillment) & Art. 6 Para. 1 lit f GDPR (Legitimate interest)."
        }
      },
      sec7: {
        title: "Statistical Evaluation",
        content: {
          p1: "Data is used in anonymized form to create statistics (placement rates, market development). A conclusion about individual persons is excluded. Basis: Art. 6 Para. 1 lit f GDPR."
        }
      },
      sec8: {
        title: "Data Security",
        content: {
          p1: "Encryption via SSL/TLS (Secure server location: Germany).",
          p2: "We take extensive technical measures to protect against loss or unauthorized access."
        }
      },
      sec9: {
        title: "§ 9 Data Subject Rights",
        content: {
          rights: [
            "Right to information (Art. 15 GDPR)",
            "Right to rectification (Art. 16 GDPR)",
            "Right to erasure (Art. 17 GDPR)",
            "Restriction of processing (Art. 18 GDPR)",
            "Right to data portability (Art. 20 GDPR)",
            "Right to object (Art. 21 GDPR)",
            "Right to withdraw consent",
            "Right to lodge a complaint with supervisory authority (Art. 77)"
          ],
          contact: "To exercise these rights, an informal notification by email is sufficient to:"
        }
      },
      sec10: {
        title: "Withdrawal of Consent",
        content: {
          p1: "If the processing of personal data is based on consent, this can be revoked at any time with effect for the future. The legality of the processing carried out until the revocation remains unaffected."
        }
      },
      sec11: {
        title: "Changes to this Privacy Policy",
        content: {
          p1: "Morsnova reserves the right to change or update this privacy policy at any time to adapt it to new legal requirements, technical developments or organizational adjustments. The current version is available at:"
        }
      },
      footer: {
        verification: "Verification Signature",
        authorized: "Authorized by Legal Department"
      }
    }
  }
};

// =====================================================
// TURKISH TRANSLATIONS (COMPLETE)
// =====================================================
const tr = {
  nav: {
    home: "Ana Sayfa",
    companies: "Şirketler",
    talents: "Uzmanlar",
    services: "Hizmetler",
    contact: "İletişim",
    login: "Giriş",
    register: "Ücretsiz kayıt ol",
    signIn: "Giriş yap"
  },

  hero: {
    badge: "Canlı İşe Alım Platformu",
    titleLine1: "Uluslararası",
    titleLine2: "Uzman Bul",
    subtitleLine1: "Akıllı",
    subtitleLine2: "İşe Alım",
    description: "Worknova, dijital zekayı kişisel rehberlikle birleştirerek şirketlerin uluslararası uzmanları bulmasını destekler ve başvuru sahiplerine güvenli bir başlangıç sunar.",
    forCompanies: "ŞİRKETLER İÇİN",
    forApplicants: "BAŞVURANLAR İÇİN",
    startAsCompany: "Şirket olarak başla",
    findTalents: "Uygun yetenekleri verimli bulun",
    startNow: "Şimdi başla",
    startAsTalent: "Uzman olarak başla",
    secureDreamJob: "Almanya'da hayalinizdeki işi güvenceye alın",
    applyNow: "Şimdi başvur"
  },

  dashboard: {
    overview: "Genel Bakış",
    pipeline: "Pipeline",
    documents: "Belgeler",
    recruitingCentral: "İşe Alım Merkezi",
    globalTalentFeed: "Global Yetenek Akışı v4.0",
    startDemo: "Demo başlat",
    activePipeline: "Aktif Pipeline",
    aiMatchRate: "Yapay Zeka Eşleşme Oranı",
    optimal: "Optimal",
    integrations: "Entegrasyonlar",
    live: "Canlı",
    intelligentSourcing: "Akıllı Kaynak Bulma Motoru",
    searchQuery: "Güney Amerika'dan Bulut Mühendisi profilleri ara.",
    foundCandidates: "Bulundu: 12 aday",
    verifiedVisa: "8 doğrulanmış vize geçmişine sahip.",
    viewMatches: "Eşleşmeleri Görüntüle",
    analyzeScore: "Puanı Analiz Et",
    realTimeUpdates: "Gerçek Zamanlı Güncellemeler",
    visaRequest: "Vize Talebi",
    interview: "Mülakat",
    docCheck: "Belge Kontrolü",
    matching: "Eşleştirme",
    complianceSecured: "Uyumluluk sağlandı",
    latency: "Gecikme",
    smartDashboard: "Maksimum genel bakış için",
    maxOverview: "akıllı tasarlanmış panel",
    dashboardDesc: "Karmaşıklığı azaltan, gerçek zamanlı yönlendirme sağlayan ve işe alım sürecinizin her adımını görünür kılan bir arayüzün ilk izlenimini edinin.",
    searchTalent: "Yetenek ara",
    company: "Şirket",
    jobTitle: "İş unvanı",
    location: "Konum",
    search: "Ara",
    myTalents: "Yeteneklerim",
    documentsCloud: "Belgeler & Bulut",
    powerOfAttorney: "Vekaletname",
    employerQuestionnaire: "İşveren Anketi",
    postJob: "İş ilanı ver",
    companyProfile: "Şirket Profili",
    companyDocuments: "Şirket Belgeleri",
    serviceContracts: "Hizmet Sözleşmeleri",
    officialTranslations: "Resmi Çeviriler",
    chat: "Sohbet",
    invoicesPayments: "Faturalar & Ödemeler",
    processMonitoring: "Süreç İzleme",
    requestDemo: "Şimdi Demo Talep Et",
    learnMorePlatform: "Platform hakkında daha fazla bilgi"
  },

  targetGroups: {
    headline: "Şirketler ve uzmanlar birlikte",
    headlineHighlight: "dijital yetkinlikle yeni zirvelere ulaşıyor",
    description: "Başarılı ve ortak bir gelecek için kişisel desteği verimli büyümeyle birleştiriyoruz.",
    applicants: "Başvuranlar",
    applicantsIntroStart: "",
    applicantsHighlight: "Net perspektifler",
    applicantsIntroEnd: ", kişisel rehberlik ve yeni çalışma ortamınıza güvenli bir başlangıç için bize güvenin.",
    learnMore: "Daha fazla bilgi",
    showLess: "Daha az göster",
    applicantsText1: "Worknova ile Alman şirketlerinde dikkatle seçilmiş pozisyonlara erişim elde edersiniz. Başvuru sürecini dijital olarak kolayca yönetebilir ve becerilerinizi stratejik olarak uygulayabilirsiniz.",
    applicantsText2: "Platformumuz, net bilgiler, faydalı özellikler ve önemli adımlarda güvenilir rehberlik ile sizi destekler, böylece Almanya'daki kariyer yolunuzu güvenle planlayabilir ve yeni başlangıcınızı hazırlayabilirsiniz.",
    applicantsHighlightBox: "Uygun iş tekliflerini keşfedin ve mesleki fırsatlarınız hakkında ilk izlenimi edinin.",
    toTalentPage: "Uzman Sayfasına",
    companies: "Şirketler",
    companiesIntroStart: "",
    companiesHighlight: "Özelleştirilmiş işe alım çözümleri",
    companiesIntroEnd: ", dijital verimlilik ve sürdürülebilir destek için bize güvenin.",
    companiesText1: "Worknova ile dikkatle incelenmiş uluslararası uzmanlar havuzuna erişim elde edersiniz. Platform üzerinden seçim, iletişim ve süreç adımlarını net ve verimli bir şekilde yönetirsiniz.",
    companiesText2: "Worknova, tanınma, vize ve ilgili makamlarla iletişim gibi önemli prosedürlerde şirketleri destekler ve tüm tarafları işe alım sürecinin tamamında eşlik eder.",
    companiesHighlightBox: "Sürdürülebilir büyüme için sağlam bir temel oluşturun ve cazip bir işveren olarak profilinizi güçlendirin.",
    requestDemo: "Demo Talep Et"
  },

  process: {
    liveTracking: "Canlı Takip",
    processMonitoring: "Yetenek Süreç İzleme",
    processDesc: "Dört süreç adımındaki mevcut durumla tüm yeteneklerin genel bakışı.",
    step1Title: "Sözleşme Paketleme",
    step1Tooltip: "Tüm gerekli belgeler toplanmış, incelenmiş ve sonraki adımlar için hazırlanmış.",
    step2Title: "Makam İncelemesi ve Ön Hazırlık",
    step2Tooltip: "Tüm gerekli başvurular sunulmuş ve koordine edilmiş, yetenekler önemli bilgileri alıyor.",
    step3Title: "İşe Başlama ve Oryantasyon",
    step3Tooltip: "İşe başlama için yapılandırılmış hazırlık, yetenekler için oryantasyon.",
    step4Title: "Deneme Süresi Tamamlandı",
    step4Tooltip: "Şirkette başlangıç ve entegrasyon desteklendi, ilk aylar izlendi.",
    workStart: "İşe Başlama",
    reference: "Referans",
    assistant: "Asistan",
    informatics: "Bilişim",
    softwareTech: "Yazılım Teknolojisi",
    phase: "Aşama",
    mobileApp: "Mobil Uygulama",
    pocketTitle: "Cebiniz için",
    pocketHighlight: "Worknova.",
    pocketDesc: "Platformumuzun tüm gücü tek bir uygulamada. Telefondaki sohbeti deneyin – gerçek zamanlı yanıt veriyoruz.",
    releaseNotify: "Yayın bildirimi alın mı?",
    emailPlaceholder: "E-posta adresiniz",
    weWillContact: "Sizinle iletişime geçeceğiz!",
    worknova: "Worknova Destek",
    respondsImmediately: "Hemen yanıt verir",
    today: "Bugün",
    writeMessage: "Mesaj yazın...",
    quickReply1: "Vizam geldi mi? 📄",
    quickReply2: "İşe ne zaman başlıyorum? 📅",
    quickReply3: "Belge yükle 📤",
    chatGreeting: "Merhaba! 👋 Vize başvurum hakkında bir güncelleme var mı?",
    chatResponse1: "İyi haberler! ✅ Ön onay az önce geldi.",
    chatVisaApproved: "Vizeniz onaylandı! 🎉 Onay e-posta ile gönderildi.",
    chatWorkStart: "İlk iş gününüz 1 Kasım. 🚀",
    chatUploadDocs: "Belgelerinizi buradan kolayca yükleyin.",
    chatDefault: "Talebinizi ilettim."
  },

  footer: {
    address: "Karlstr. 68",
    city: "76137 Karlsruhe",
    country: "Almanya",
    scrollToTop: "Yukarı dön",
    platform: "Platform",
    aboutWorknova: "Worknova Hakkında",
    imprint: "Künye",
    privacy: "Gizlilik Politikası",
    terms: "Kullanım Koşulları",
    paymentInfo: "Ödeme Bilgileri",
    links: "Bağlantılar",
    contact: "İletişim",
    faq: "SSS",
    requestDemo: "Demo Talep Et",
    appVersion: "Uygulama Sürümü",
    comingSoon: "Yakında",
    socialMedia: "Sosyal Medya",
    visitLinkedin: "Worknova'yı LinkedIn'de ziyaret edin",
    visitInstagram: "Worknova'yı Instagram'da ziyaret edin",
    copyright: "Morsnova GmbH. Tüm hakları saklıdır.",
    madeWith: "Karlsruhe'de ❤️ ile yapıldı"
  },

  contact: {
    writeUs: "Bize yazın",
    weAreHere: "Sizin için buradayız.",
    personalDirect: "Kişisel & Doğrudan.",
    contactText: "İster uzman arayan bir şirket olun, ister Almanya'da çalışmak isteyen bir uzman: Ekibimiz size yardımcı olmaktan mutluluk duyar. Kişisel, yetkin ve sizin dilinizde.",
    responseTime: "24 saat içinde yanıt",
    emailContact: "E-posta İletişimi",
    headquarters: "Merkez",
    supportTeam: "Destek ekibimiz konuşuyor:",
    languages: "Almanca, İngilizce & Türkçe",
    tellUs: "Talebinizi bize iletin.",
    getBack: "En kısa sürede size dönüş yapacağız.",
    firstName: "Ad",
    lastName: "Soyad",
    email: "E-posta adresi",
    company: "Şirket",
    phone: "Telefon numarası",
    subject: "Konu",
    subjectPlaceholder: "Konu nedir?",
    message: "Mesaj",
    messagePlaceholder: "Bize mesajınız...",
    privacyText: "Kabul ediyorum:",
    privacyLink: "Gizlilik Politikası",
    privacyPolicy: "Gizlilik Politikası",
    privacyEnd: "ve verilerimin işlenmesine izin veriyorum.",
    sendMessage: "Mesaj gönder",
    sending: "Gönderiliyor...",
    successTitle: "Mesaj gönderildi!",
    successMessage: "Talebiniz için teşekkürler. Kısa sürede size dönüş yapacağız.",
    newMessage: "Yeni mesaj"
  },

  faq: {
    badge: "SSS & Destek",
    title: "Sıkça sorulan",
    titleHighlight: "Sorular.",
    questionNotFound: "Soru bulunamadı mı?",
    supportHelp: "Destek ekibimiz size kişisel olarak yardımcı olmaktan mutluluk duyar.",
    contactUs: "Bize ulaşın",
    helpCenter: "Yardım Merkezi",
    questionsAnswers: "Sorular &",
    answers: "Cevaplar.",
    faqDescription: "İşe alım süreci, tanınma ve Worknova ile başlangıç hakkında bilmeniz gereken her şey.",
    forCompanies: "Şirketler İçin",
    forTalents: "Uzmanlar İçin",
    stillQuestions: "Hala sorularınız mı var?",
    stillQuestionsDesc: "Ekibimiz size kişisel olarak danışmaktan mutluluk duyar. Genellikle 24 saat içinde yanıt veririz.",
    contactNow: "Şimdi iletişime geç",
    companyFaqSubtitle: "İşe alım sürecimiz ve işbirliğimiz hakkında stratejik bilgiler.",
    talentFaqSubtitle: "Almanya'ya giden yolunuz, tanınma ve entegrasyon hakkında bilgiler.",
    companyQ1: "Uygun adayları bulmak ne kadar sürer?",
    companyA1: "Kayıt olduktan sonra 24 ila 48 saat içinde ilk eşleşen profilleri alırsınız. Yapay zeka 7/24 çalışır ve uluslararası yetenek havuzumuzu sürekli olarak tarar.",
    companyQ2: "Yeterlilikler gerçekten tanınmış mı?",
    companyA2: "Evet. Tüm adaylar bir Anabin kontrolünden geçer. Yeterliliğin Almanya'da tanınıp tanınmadığını veya tanınıp tanınamayacağını doğrularız. Yalnızca olumlu prognozlu adayları görürsünüz.",
    companyQ3: "Maliyeti nedir?",
    companyA3: "Kayıt ve aday arama ücretsizdir. Yalnızca başarılı yerleştirme durumunda ödeme yaparsınız. Gizli maliyet olmadan şeffaf fiyatlandırma.",
    companyQ4: "Vize ve giriş işlemlerini siz mi hallediyorsunuz?",
    companyA4: "Evet, tamamen. Tüm sürece eşlik ediyoruz: vize başvurusu, randevu planlama, belge hazırlama, giriş. Hiçbir şey için endişelenmenize gerek yok.",
    companyQ5: "İşe alımdan sonra ne olur?",
    companyA5: "Entegrasyon desteğimiz çalışanlarınıza ilk 6 ay boyunca eşlik eder. Resmi randevular, ev arama, kültürel entegrasyon. Uzun vadeli başarı için.",
    companyQ6: "Worknova hangi sektörleri kapsıyor?",
    companyA6: "Tüm sektörler: BT, sağlık, zanaat, mühendislik, otelcilik, lojistik ve daha fazlası. Yetenek havuzumuz geniş kapsamlıdır.",
    companyQ7: "Kaliteyi nasıl sağlıyorsunuz?",
    companyA7: "Üç aşamalı süreç: belge doğrulama, yeterlilik kontrolü, dil testi. Başvuranların yalnızca %15'i kabul edilir. Yüksek kalite standartları.",
    talentQ1: "Diplomamın Almanya'da tanınması gerekiyor mu?",
    talentA1: "Evet, tüm mesleklerin doğrulanması ve tanınması gerekir. Worknova, otomatik kontroller (ZAB/ZAV) aracılığıyla bu süreçte size destek olur.",
    talentQ2: "Tanınma süreci nasıl işliyor?",
    talentA2: "Yeterliliğinizi ilgili makamlarla (örn. ZAB/ZAV) doğruluyoruz ve Alman yeterliliğine karşılık gelip gelmediğini belirliyoruz. Gelmiyorsa, ek eğitim gerekebilir.",
    talentQ3: "Almanya'ya girdikten hemen sonra çalışabilir miyim?",
    talentA3: "Evet, nitelikli işçi olarak oturma izni aldıktan ve tüm sosyal sigortalar yasal olarak kaydedildikten sonra.",
    talentQ4: "İşimi kaybedersem ne olur?",
    talentA4: "Bunu yabancılar dairesine bildirmelisiniz. Oturma izniniz sona ermeden önce yeni bir iş bulmak için genellikle 3-6 ayınız olur.",
    talentQ5: "Ailem benimle Almanya'ya gelebilir mi?",
    talentA5: "Evet, eşler ve çocuklar aile birleşimi yoluyla gelebilir. Eşlerin genellikle temel Almanca bilgisini (A1) kanıtlaması gerekir – ancak istisnalar vardır, örn. Mavi Kart sahipleri için.",
    talentQ6: "Platformu kullanmak için ücret var mı?",
    talentA6: "Platformumuzu kullanmak genellikle ücretsizdir. Çeviri, dil kursu veya harici yeterlilikler gibi ek hizmetler için ücret uygulanabilir. Ancak bu hizmetler platform üzerinden değil, ortaklarımız ve harici ağımız aracılığıyla yürütülür.",
    talentQ7: "Platform Almanya'da entegrasyon veya oryantasyonu destekliyor mu?",
    talentA7: "Evet! Nitelikli işçileri başından itibaren Almanya'da yaşam ve çalışmaya hazırlıyoruz, oryantasyon kursları, giriş öncesi doğrudan iletişim ve başlangıç için pratik ipuçları ile."
  },

  login: {
    welcomeBack: "Tekrar hoş",
    back: "geldiniz.",
    description: "Panelinize erişmek ve işe alım süreçlerinizi yönetmek için giriş yapın.",
    feature1: "Adaylarınız hakkında gerçek zamanlı güncellemeler",
    feature2: "Platform üzerinden güvenli iletişim",
    feature3: "Süreçleriniz üzerinde tam kontrol",
    signIn: "Giriş yap",
    accountAccess: "Hesabınıza erişim",
    emailLabel: "E-posta adresi",
    emailPlaceholder: "sizin@email.com",
    passwordLabel: "Şifre",
    forgotPassword: "Şifremi unuttum?",
    rememberMe: "Beni hatırla",
    loginButton: "Giriş yap",
    loggingIn: "Giriş yapılıyor...",
    noAccount: "Hesabınız yok mu?",
    registerNow: "Şimdi kayıt ol",
    ssl: "256-bit SSL",
    gdpr: "KVKK uyumlu",
    loginInfoMessage: "Giriş fonksiyonu lansmandan sonra aktif olacak. Demo erişimi için bizimle iletişime geçin."
  },

  register: {
    startToday: "Bugün",
    today: "başlayın.",
    description: "Ücretsiz hesabınızı oluşturun ve uluslararası işe alımın geleceğini deneyimleyin.",
    feature1: "24 saat içinde yapay zeka destekli eşleştirme",
    feature2: "Yasal güvenli işlem garantili",
    feature3: "Ücretsiz kayıt",
    registerTitle: "Kayıt ol",
    chooseAccountType: "Hesap türünüzü seçin",
    companyAccount: "Şirket Hesabı",
    talentProfile: "Uzman Profili",
    fillForm: "Formu doldurun",
    company: "Şirket",
    companyDesc: "Nitelikli uzman bul",
    talent: "Uzman",
    talentDesc: "Almanya'da kariyer başlat",
    alreadyAccount: "Zaten hesabınız var mı?",
    loginHere: "Buradan giriş yap",
    internationalPool: "Uluslararası yetenek havuzu",
    aiMatching: "24 saatte yapay zeka eşleştirme",
    legallySecure: "Yasal güvenli",
    personalSupport: "Kişisel destek",
    topEmployers: "En iyi işverenler",
    visaSupport: "Vize desteği",
    integrationSupport: "Entegrasyon desteği",
    freeOfCharge: "%100 ücretsiz",
    contactPerson: "İletişim kişisi",
    fullName: "Tam ad",
    companyName: "Şirket adı",
    emailLabel: "E-posta adresi",
    emailPlaceholder: "sizin@email.com",
    passwordLabel: "Şifre",
    minChars: "Min. 8 karakter",
    acceptTerms: "Kabul ediyorum:",
    termsLink: "Kullanım Koşulları",
    and: "ve",
    privacyLink: "Gizlilik Politikası",
    registerButton: "Ücretsiz kayıt ol",
    creating: "Oluşturuluyor...",
    backToSelection: "← Seçime dön",
    welcomeTitle: "🎉 Hoş geldiniz!",
    successCreated: "Başarıyla oluşturuldu",
    successTitle: "Başarıyla kayıt olundu!",
    successMessage: "Size bir onay e-postası gönderdik. Gelen kutunuzu kontrol edin.",
    toHomepage: "Ana sayfaya",
    gdpr: "KVKK uyumlu",
    ssl: "256-bit SSL"
  },

  notFound: {
    badge: "Hata 404",
    title: "Sayfa",
    titleLine2: "bulunamadı.",
    description: "İstenen sayfa maalesef mevcut değil. Rahatsızlık için özür dileriz.",
    toHome: "Ana Sayfaya",
    helpFaq: "Yardım & SSS"
  },

  language: {
    de: "Deutsch",
    en: "English",
    tr: "Türkçe",
    select: "Dil seçin",
    label: "Dil"
  },

  common: {
    learnMore: "Daha fazla bilgi",
    getStarted: "Başla",
    close: "Kapat",
    loading: "Yükleniyor...",
    error: "Hata",
    success: "Başarılı",
    cancel: "İptal",
    confirm: "Onayla",
    save: "Kaydet",
    delete: "Sil",
    edit: "Düzenle",
    view: "Görüntüle",
    back: "Geri",
    next: "İleri",
    previous: "Önceki",
    yes: "Evet",
    no: "Hayır",
    or: "veya",
    and: "ve"
  },

  // ========== TALENT PAGE ==========
  talentPage: {
    heroTitle1: "Hayalindeki iş",
    heroTitle2: "seni buluyor.",
    heroDescription: "Profilini bir kez oluştur. Yapay zekamız seni Almanya'daki en iyi şirketlerle eşleştiriyor. Kapak mektubu yok, sonsuz arama yok.",
    inquireNow: "Şimdi başvur",
    howItWorks: "Nasıl çalışır",
    verified: "Doğrulanmış",
    qualification: "Yeterlilik",
    language: "Dil",
    perfectMatch: "Mükemmel Eşleşme",
    aiMatchingActive: "AI Eşleştirme Aktif",
    systemStandby: "Sistem Bekleme",
    free: "Ücretsiz",
    setup: "Kurulum",
    matchRate: "Eşleşme Oranı",
    support: "Destek",
    yourWayToDE: "Almanya'ya giden yolun.",
    digitalSecure: "Dijital & Güvenli.",
    processDescription: "Tüm işe alım sürecini dijitalleştirdik ve basitleştirdik.",
    userJourney: "Kullanıcı Yolculuğu",
    in3Steps: "3 adımda",
    toSuccess: "başarıya.",
    step01: "Adım 01",
    step02: "Adım 02",
    step03: "Adım 03",
    smartUpload: "Akıllı Yükleme",
    smartUploadDesc: "Yapay zekamız belgelerinizi otomatik olarak tanır ve gerçek zamanlı olarak kontrol eder.",
    myDocuments: "Belgelerim",
    documentsReady: "5 belgeden 3'ü hazır",
    validated: "Doğrulandı",
    analyzing: "Analiz ediliyor...",
    profileBoost: "Profil Güçlendirme",
    profileBoostDesc: "Bir eşleşme puanı alın ve profilinizi nasıl optimize edeceğinizi öğrenin.",
    strong: "Güçlü",
    aiRecommendation: "AI Önerisi",
    addCertificate: "\"Almanca B2\" sertifikası ekle (+%10).",
    liveMatches: "Canlı Eşleşmeler",
    liveMatchesDesc: "Tercihlerinize uyan işverenler tarafından doğrudan bulunun.",
    topSuggestions: "En İyi Öneriler",
    newNow: "YENİ",
    match: "Eşleşme",
    pushInfo: "Bildirim",
    newInvitation: "1 yeni davet alındı!",
    jobOverview: "İş teklifleriniz bir bakışta",
    jobOverviewDesc: "kolayca bulun, işaretleyin ve fırsatları değerlendirin",
    markFavorites: "Favorileri tek tıkla işaretle",
    markFavoritesDesc: "İlginç işleri kalp simgesiyle kişisel listenize kaydedin.",
    keepOverview: "Tüm teklifleri takip edin",
    keepOverviewDesc: "Kişisel panonuz tüm eşleşen fırsatları alaka düzeyine göre sıralı gösterir.",
    decideChances: "Hangi fırsatları değerlendireceğinize karar verin",
    decideChancesDesc: "Kontrol sizde. Profilinizi kime sunmak istediğinize siz karar verin.",
    fullTime: "Tam zamanlı",
    permanent: "Süresiz",
    salary: "Maaş: Toplu sözleşme +",
    details: "Detaylar",
    freeMaterial: "Ücretsiz Materyal",
    supportForTalents: "Profesyoneller için destek:",
    workLiveUnderstand: "Çalışma & yaşamı anlama",
    brochureText1: "Bilgi paketimiz Almanya'da çalışmayı ve yaşamayı daha iyi anlamanıza yardımcı olur. Kompakt, açık ve anlaşılır şekilde hazırlanmıştır.",
    brochureText2: "Ek öz test ile bilginizi kontrol edebilir ve derinleştirebilirsiniz. Broşürü kullanan ve testi tamamlayan profesyoneller profil kalitelerini artırır ve şirketlerdeki şanslarını yükseltir.",
    contactNow: "Şimdi iletişime geç",
    brochureBottom: "Almanya'da başlangıcınıza yapılandırılmış bir şekilde hazırlanmanız için temel adımlar hakkında yararlı bilgiler sağlıyoruz.",
    exclusiveJobs: "Özel İşler",
    exclusiveJobsDesc: "Halka açık iş portallarında listelenmeyen premium pozisyonlara erişin.",
    verifiedCompanies: "Doğrulanmış Şirketler",
    verifiedCompaniesDesc: "Güvenliğiniz için her ortak şirketi kalite ve adalet açısından kontrol ediyoruz.",
    arrivalSupport: "Varış Desteği",
    arrivalSupportDesc: "Ekibimiz vize, konut arama ve entegrasyonda size kişisel olarak destek olur.",
    faqTitle: "Sık Sorulan Sorular",
    faqSubtitle: "Profesyoneller için tüm temel bilgiler özetlenmiştir.",
    readyForNextStep: "Bir sonraki adıma hazır mısın?",
    ctaDescription: "Bugün ücretsiz kayıt ol ve uluslararası yetenek havuzumuzun bir parçası ol.",
    talentFaqQ1: "Diplomamın Almanya'da tanınması gerekiyor mu?",
    talentFaqA1: "Evet, tüm mesleklerin doğrulanması ve tanınması gerekir. Worknova, otomatik kontroller (ZAB/ZAV) aracılığıyla bu süreçte size destek olur.",
    talentFaqQ2: "Tanınma süreci nasıl işliyor?",
    talentFaqA2: "Yeterliliğinizi ilgili makamlarla (örn. ZAB/ZAV) doğruluyoruz ve Alman yeterliliğine karşılık gelip gelmediğini belirliyoruz. Gelmiyorsa, ek eğitim gerekebilir.",
    talentFaqQ3: "Almanya'ya girdikten hemen sonra çalışabilir miyim?",
    talentFaqA3: "Evet, nitelikli işçi olarak oturma izni aldıktan ve tüm sosyal sigortalar yasal olarak kaydedildikten sonra.",
    talentFaqQ4: "İşimi kaybedersem ne olur?",
    talentFaqA4: "Bunu yabancılar dairesine bildirmelisiniz. Oturma izniniz sona ermeden önce yeni bir iş bulmak için genellikle 3-6 ayınız olur.",
    talentFaqQ5: "Ailem benimle Almanya'ya gelebilir mi?",
    talentFaqA5: "Evet, eşler ve çocuklar aile birleşimi yoluyla gelebilir. Eşlerin genellikle temel Almanca bilgisini (A1) kanıtlaması gerekir – ancak istisnalar vardır, örn. Mavi Kart sahipleri için.",
    talentFaqQ6: "Platformu kullanmak için ücret var mı?",
    talentFaqA6: "Platformumuzu kullanmak genellikle ücretsizdir. Çeviri, dil kursu veya harici yeterlilikler gibi ek hizmetler için ücret uygulanabilir. Ancak bu hizmetler platform üzerinden değil, ortaklarımız ve harici ağımız aracılığıyla yürütülür.",
    talentFaqQ7: "Platform Almanya'da entegrasyon veya oryantasyonu destekliyor mu?",
    talentFaqA7: "Evet! Nitelikli işçileri başından itibaren Almanya'da yaşam ve çalışmaya hazırlıyoruz, oryantasyon kursları, giriş öncesi doğrudan iletişim ve başlangıç için pratik ipuçları ile.",
    worknovaGuide: "Worknova Rehberi",
    liveAndWork: "Yaşam & Çalışma",
    germany: "Almanya",
    orientationHelp: "Başlangıcınız için oryantasyon rehberi",
    guideSpine: "WORKNOVA REHBERİ 2024",
    sampleJob1: "Tesisat Teknisyeni",
    sampleCompany1: "Hanseatic Energy • Hamburg",
    sampleJobFull: "Tesisat Teknisyeni (e/k)",
    sampleCompanyFull: "Hanseatic Energy GmbH",
    sampleJob2: "Hemşire (e/k)",
    sampleCompany2: "Klinikum Nord"
  },

  // ========== UNTERNEHMEN PAGE ==========
  unternehmenPage: {
    badge: "Yeni Nesil İşe Alım",
    heroTitle1: "Yetenek bul.",
    heroTitle2: "Otomatik.",
    heroDescription: "Worknova, işe alım sürecinizi dijital bir rekabet avantajına dönüştürür. AI destekli eşleştirme, yasal güvenli işleme ile buluşuyor.",
    findTalentsNow: "Şimdi yetenek bul",
    scheduleDemo: "Demo planla",
    timeToHire: "Ort. İşe Alma Süresi",
    successfulMatches: "Başarılı Eşleşmeler",
    partnersWorldwide: "Dünya çapında ortaklar",
    digitalProcess: "Dijital Süreç",
    smarterRecruit: "Daha akıllı işe al.",
    betterGrow: "Daha iyi büyü.",
    featureDescription: "Worknova Motoru karmaşıklığı sizden alır. Arama, doğrulama ve bürokrasiyi otomatikleştiriyoruz, böylece önemli olana odaklanabilirsiniz: ekibinize.",
    aiMatching: "AI Eşleştirme",
    aiMatchingDesc: "Algoritmamız mükemmel kültürel uyum için sert ve yumuşak becerileri analiz eder.",
    legalSecurity: "Yasal Güvenlik",
    legalSecurityDesc: "Tüm vize ve tanınma belgelerinin otomatik doğrulaması.",
    speedRecruiting: "Hızlı İşe Alım",
    speedRecruitingDesc: "Dijital süreçlerle işe alma sürenizi %60'a kadar kısaltın.",
    filterActive: "Filtre: Aktif",
    liveSearch: "Canlı Arama",
    viewProfile: "Profili görüntüle",
    available: "Müsait",
    inConversation: "Görüşmede",
    newCandidateMatch: "Yeni aday aramanızla %99 eşleşiyor!",
    deepLearning: "Derin Öğrenme",
    weSeeTitlePart1: "Özgeçmişlerin",
    weSeeTitlePart2: "göstermediğini görüyoruz.",
    weSeeDescription: "Geleneksel anahtar kelime araması yeterli değil. Motorumuz bağlantıları, transfer edilebilir becerileri ve bir adayın potansiyelini anlıyor. Sadece pozisyonla değil, şirketinizle eşleştiriyoruz.",
    dataPoints: "Veri noktaları",
    analysisTime: "Analiz süresi",
    liveMatching: "Canlı Eşleştirme",
    matchFound: "Eşleşme Bulundu",
    fullTransparency: "Tam şeffaflık",
    realTime: "gerçek zamanlı.",
    transparencyDescription: "İşe aldığınız profesyonellerin ilerlemesine her zaman net bir genel bakış elde edersiniz. Sistemimiz tüm temel süreç adımlarını şeffaf bir şekilde haritalandırır ve dış prosedürleri açıkça belgeler.",
    processMonitoring: "Süreç İzleme",
    realTimeStatus: "Tüm aktif prosedürlerin gerçek zamanlı durumu",
    liveUpdated: "Canlı Güncellendi",
    skilledWorker: "Nitelikli işçi",
    contracts: "1. Sözleşmeler",
    visa: "2. Vize",
    onboarding: "3. Oryantasyon",
    integration: "4. Entegrasyon",
    currentStatus: "Mevcut durum",
    workStart: "İş başlangıcı",
    authorityCheck: "Makam kontrolü",
    inProgress: "İşlemde",
    contractCreation: "Sözleşme oluşturma",
    actionRequired: "Eylem gerekli",
    overviewStructured: "Açıkça yapılandırılmış genel bakış",
    documentsSecure: "Belgeler güvenle yönetiliyor",
    statusVisible: "Durum her zaman görünür",
    reliableTraceability: "Güvenilir izlenebilirlik",
    dashboard: {
      processes: "Süreçler",
      candidates: "Adaylar",
      documents: "Belgeler",
      jobs: "İşler",
      settings: "Ayarlar"
    },
    whyWorknova: "Neden Worknova?",
    yourBenefits: "Avantajlarınız bir bakışta",
    sustainableEmployment: "Sürdürülebilir istihdam",
    sustainableEmploymentDesc: "Mükemmel eşleştirme ve kültürel entegrasyon yoluyla uzun vadeli bağlılığa odaklanıyoruz.",
    adminRelief: "İdari süreç rahatlığı",
    adminReliefDesc: "Vize, tanınma, makamlar – tüm evrak işlerini sizin için hallediyoruz.",
    professionalProcess: "Profesyonel süreç yönetimi",
    professionalProcessDesc: "Dijital iş akışları hız sağlar ve süreçteki hataları önler.",
    reliablePlanning: "Güvenilir planlama",
    reliablePlanningDesc: "Net zaman çizelgeleri ve durum güncellemeleri projeleriniz için planlama güvenliği sağlar.",
    focusCore: "Çekirdek işe odaklanın",
    focusCoreDesc: "Siz işinize odaklanın, biz yeni yetenek bulmakla ilgilenelim.",
    clearProcesses: "Sürekli net süreçler",
    clearProcessesDesc: "1. günden itibaren şeffaflık. Kara kutu yok, her adıma tam görünürlük.",
    faqTitle: "Sık Sorulan Sorular",
    faqSubtitle: "İşe alım süreci hakkında şirket olarak bilmeniz gereken her şey.",
    readyForUpgrade: "Yükseltmeye hazır mısınız?",
    ctaDescription: "30 günlük ücretsiz denemenizi bugün başlatın ve uluslararası işe alımın ne kadar kolay olabileceğini deneyimleyin.",
    startFreeNow: "Şimdi ücretsiz başla",
    cancelAnytime: "İstediğiniz zaman iptal edin",
    companyFaqQ1: "Uygun adayları bulmak ne kadar sürer?",
    companyFaqA1: "Kayıt olduktan sonra 24 ila 48 saat içinde ilk eşleşen profilleri alırsınız. Yapay zeka 7/24 çalışır ve uluslararası yetenek havuzumuzu sürekli olarak tarar.",
    companyFaqQ2: "Yeterlilikler gerçekten tanınmış mı?",
    companyFaqA2: "Evet. Tüm adaylar bir Anabin kontrolünden geçer. Yeterliliğin Almanya'da tanınıp tanınmadığını veya tanınıp tanınamayacağını doğrularız. Yalnızca olumlu prognozlu adayları görürsünüz.",
    companyFaqQ3: "Maliyeti nedir?",
    companyFaqA3: "Kayıt ve aday arama ücretsizdir. Yalnızca başarılı yerleştirme durumunda ödeme yaparsınız. Gizli maliyet olmadan şeffaf fiyatlandırma.",
    companyFaqQ4: "Vize ve giriş işlemlerini siz mi hallediyorsunuz?",
    companyFaqA4: "Evet, tamamen. Tüm sürece eşlik ediyoruz: vize başvurusu, randevu planlama, belge hazırlama, giriş. Hiçbir şey için endişelenmenize gerek yok.",
    companyFaqQ5: "İşe alımdan sonra ne olur?",
    companyFaqA5: "Entegrasyon desteğimiz çalışanlarınıza ilk 6 ay boyunca eşlik eder. Resmi randevular, ev arama, kültürel entegrasyon. Uzun vadeli başarı için.",
    companyFaqQ6: "Worknova hangi sektörleri kapsıyor?",
    companyFaqA6: "Tüm sektörler: BT, sağlık, zanaat, mühendislik, otelcilik, lojistik ve daha fazlası. Yetenek havuzumuz geniş kapsamlıdır.",
    companyFaqQ7: "Kaliteyi nasıl sağlıyorsunuz?",
    companyFaqA7: "Üç aşamalı süreç: belge doğrulama, yeterlilik kontrolü, dil testi. Başvuranların yalnızca %15'i kabul edilir. Yüksek kalite standartları."
  },

  // ========== APP LANDING PAGE ==========
  appLanding: {
    badge: "Worknova Uygulama Ekosistemi",
    heroTitle1: "Kariyer",
    heroTitle2: "elinde.",
    heroDescription: "Akıllı süreçler, maksimum genel bakış. Worknova Uygulaması ile şirketler ve profesyoneller ortak geleceklerini doğrudan akıllı telefonlarından yönetir.",
    onTheList: "Listedesiniz!",
    notifyRelease: "Uygulama çıktığında size haber vereceğiz.",
    earlyAccess: "Erken Erişim için kaydolun",
    enterEmail: "E-posta girin",
    privacyNote: "Gizliliğinize saygı duyuyoruz. Spam yok.",
    validationActive: "Doğrulama Aktif",
    visaProcess: "Vize İşlemi",
    scanner: "Tarayıcı",
    support: "Destek",
    topMatch: "En İyi Eşleşme",
    featureSecurity: "En Yüksek Güvenlik",
    featureSecurityDesc: "Hassas yetenek verileriniz ve belgeleriniz için FaceID entegrasyonu ve biyometrik koruma.",
    featureNetwork: "Küresel Ağ",
    featureNetworkDesc: "Almanya genelinde doğrulanmış işverenlerle doğrudan bağlantı – konumdan bağımsız ve şeffaf.",
    featureLegal: "Yasal Güvenli Süreçler",
    featureLegalDesc: "Vize ve tanınma için dijital kontrol listeleri tüm tarafları işe alım yolculuğunda güvenle yönlendirir.",
    howItWorks: "Uygulama nasıl çalışır",
    allInOne: "Hepsi bir uygulamada.",
    simpleOverview: "Basit & Net.",
    allInOneDesc: "Belge yakalamadan iş teklifine kadar – Worknova Uygulaması kariyerinizin her adımında size rehberlik eder.",
    docScanTitle: "Akıllı Belge Tarama",
    docScanDesc: "Sertifikaları ve belgeleri fotoğraflayın. Yapay zeka otomatik olarak tanır, sıralar ve doğrular.",
    jobMatchTitle: "Anında İş Eşleşmeleri",
    jobMatchDesc: "Yeterliliklerinize göre eşleşen iş tekliflerini gerçek zamanlı olarak alın.",
    statusTrackTitle: "Canlı Durum Takibi",
    statusTrackDesc: "Vize, tanınma ve başvuruyu bir bakışta takip edin. Push bildirimleri sizi bilgilendirir.",
    directContactTitle: "Doğrudan İletişim",
    directContactDesc: "İşverenler ve Worknova desteğiyle doğrudan uygulamada şifreli iletişim kurun.",
    ctaTitle1: "İşe Alım Merkezi",
    ctaTitle2: "cebinizde.",
    ctaDesc: "Bugün başlayın ve akıllı telefonunuzda işe alımın geleceğini deneyimleyin.",
    ctaButton: "Yayınlandığında bildir",
    ctaNote: "E-postanızı girin, uygulama hazır olduğunda size haber verelim",
    intelligentAutomation: "Akıllı Otomasyon",
    docsToProfile: "Belgeleriniz eksiksiz bir profile dönüşür –",
    inUnder2Min: "2 dakikadan kısa sürede.",
    step01: "01",
    step02: "02",
    step03: "03",
    step04: "04",
    photograph: "Fotoğraflayın",
    photographDesc: "Sertifikalarınızı ve belgelerinizi kameranın önüne tutun.",
    recognize: "Tanıyın",
    recognizeDesc: "Yapay zeka tüm ilgili verileri okur – hatasız ve saniyeler içinde.",
    create: "Oluşturun",
    createDesc: "Eksiksiz profiliniz otomatik olarak oluşturulur, işe alım uzmanları için optimize edilir.",
    match: "Eşleştirin",
    matchDesc: "Eşleşen işler sizi bulur – tam tersi değil. Her eşleşmede push bildirimi.",
    result: "Sonuç",
    profileExcites: "İşe alım uzmanlarını heyecanlandıran bir profil.",
    noManualInput: "Manuel giriş yok. Unutulan detay yok. Yapay zeka her şeyi yakalar – yeterliliklerden dil becerilerine, sosyal becerilere kadar. Profiliniz ilk andan itibaren eksiksiz ve profesyonel.",
    accuracy: "Doğruluk",
    profileTime: "Profil süresi",
    scanDocument: "Belge tara",
    aiRecognition: "Yapay zeka destekli tanıma",
    beingAnalyzed: "Analiz ediliyor...",
    format: "Format",
    valid: "Geçerli",
    quality: "Kalite",
    optimal: "Optimal",
    receiveMatch: "Eşleşme al",
    findJobs: "Eşleşen işleri bul",
    trackStatus: "Durumu takip et",
    realTimeUpdates: "Gerçek zamanlı güncellemeler",
    submitted: "Gönderildi",
    inProgress: "İşlemde",
    approved: "Onaylandı",
    active: "Aktif",
    newNotification: "Yeni bildirim: Belge doğrulandı ✓",
    companyFeature1: "Gerçek zamanlı gösterge paneli",
    companyFeature2: "Yeni eşleşmelerde push",
    companyFeature3: "Belge yükleme",
    talentFeature1: "Profil her zaman yanınızda",
    talentFeature2: "İş bildirimleri",
    talentFeature3: "Şirketlerle sohbet"
  },

  // ========== SERVICES PAGE ==========
  servicesPage: {
    badge: "Hizmetler",
    heroTitle1: "Profesyonelleri güvenli",
    heroTitle2: "ve başarılı bir şekilde",
    heroTitle3: "Almanya'ya getirin.",
    heroDescription: "Worknova başarınızı yönetir: Hazırlıktan entegrasyona koordinasyon. Çeviri, dil kursu veya varış hizmeti gibi ek hizmetler tek tıkla organize edilir.",
    inquireNow: "Şimdi başvur",
    relocationService: "Taşınma Hizmeti",
    serviceMatrix: "Hizmet Matrisi",
    modularSystem: "Modüler Hizmet Sistemi",
    serviceMatrixDesc: "Ayrıntılı süreç adımlarını analiz etmek için bir alan seçin.",
    clickTabs: "(Soldaki sekmelere tıklayın)",
    navigation: "Navigasyon",
    moduleActive: "Modül Aktif",
    highlight: "Öne Çıkan",
    includedServices: "Dahil Edilen Hizmetler",
    hardSkill: "SERT BECERİ",
    softSkill: "YUMUŞAK BECERİ",
    adminSupport: "İdari Destek",
    adminSupportDesc: "Worknova, profesyonelleri ve şirketleri ilgili idari adımlardan merkezi olarak yönlendirir ve gerekli prosedürlerin düzenli hazırlanmasını ve işlenmesini sağlar.",
    adminSupportNote: "Merkezi süreç yönetimi.\nÇekirdek işinize daha fazla odaklanın.",
    adminSub1: "İnceleme ve hazırlık",
    adminSub2: "Randevu ve belge yönetimi",
    adminSub3: "Vize süreçlerinin koordinasyonu",
    adminSub4: "Çalışma izni başvurusu",
    preOnboarding: "Ön ve Oryantasyon",
    preOnboardingDesc: "Eğitimli entegrasyon görevlimiz profesyonellere adım adım rehberlik eder",
    preSub1: "İş ve günlük yaşam hakkında bireysel danışmanlık",
    preSub2: "Alman iş ve günlük kültürünün öğretilmesi",
    preSub3: "Doğrudan iletişimde esnek destek",
    translation: "Çeviri Hizmetleri",
    translationDesc: "Worknova üzerinden merkezi olarak çeviri büroları talep edin ve çevirileri doğrudan yükleyin",
    translationSub1: "Çeviri bürosu talep et",
    translationSub2: "Belgeleri yükle",
    translationSub3: "Teklifi kabul et",
    translationSub4: "Hızlı bir şekilde bitmiş çeviri",
    languageCourses: "Dil Kursları",
    languageCoursesDesc: "Kurslarımız profesyonelleri özellikle destekler. Ortak ağlarımız aracılığıyla ihtiyaca göre esnek dil kursları rezerve edebilirsiniz.",
    langSub1: "Entegrasyonu teşvik et",
    langSub2: "Mesleki başarıyı güvence altına al",
    langSub3: "Dil yeterliliğini sağla",
    arrivalService: "Varış Hizmeti",
    arrivalServiceDesc: "Uçuş rezervasyonundan ilk konaklamaya kadar, Almanya'da sorunsuz bir başlangıç için size yardımcı olmaktan mutluluk duyarız.",
    arrivalSub1: "Uçuş rezervasyonu",
    arrivalSub2: "Kişisel transfer",
    arrivalSub3: "İlk 30 gün için konaklama",
    integrationService: "Entegrasyon",
    integrationDesc: "Worknova, profesyonellere iş başladıktan sonra da yerleşmenin en önemli adımlarında eşlik eder. Destekleyici, yönlendirici ve deneme süresinin sonuna kadar her zaman ulaşılabilir.",
    integrationSub1: "Organizasyonel konularda destek",
    integrationSub2: "Entegrasyon ve öğrenme tekliflerine yönlendirme",
    integrationSub3: "Günlük yaşam ve zorluklarda danışmanlık",
    adminShort: "YÖNETİM",
    onboardingShort: "ORYANTASYON",
    translationShort: "ÇEVİRİ",
    languageShort: "DİL",
    arrivalShort: "VARIŞ",
    integrationShort: "ENTEGRASYON",
    readyToStart: "Başlamaya hazır mısınız?",
    ctaDescription: "İşe alım sürecinizi birlikte devrimleştirelim.",
    matrix: {
      badge: "Hizmet Matrisi",
      title: "Modüler Hizmet Sistemi",
      description: "Detaylı süreç adımlarını analiz etmek için bir alan seçin.",
      hint: "(Soldaki sekmelere tıklayın)"
    }
  },

  // ========== IMPRESSUM PAGE ==========
  impressumPage: {
    title: "Yasal Bildirim",
    address: "Karlstr. 68",
    city: "76137 Karlsruhe",
    country: "Almanya",
    email: "E-posta:",
    internet: "İnternet:",
    ceo: "Yetkili Genel Müdür:",
    ceoName: "Beritan Duyar",
    registerNumber: "Ticaret sicil numarası: HRB 756458",
    registerCourt: "Sicil mahkemesi: Mannheim Bölge Mahkemesi",
    vatId: "KDV kimlik numarası: DE",
    vatIdLaw: "§27a Katma Değer Vergisi Kanunu'na göre KDV kimlik numarası",
    section1Title: "1. Çevrimiçi teklifin içeriği",
    section1Text1: "WORKNOVA, sağlanan bilgilerin güncelliği, doğruluğu, eksiksizliği veya kalitesi için hiçbir garanti vermez. Bilgilerin kullanılması veya kullanılmamasından kaynaklanan maddi veya manevi zarar talepleri, WORKNOVA'nın kasıtlı veya ağır ihmalkar davrandığı kanıtlanmadıkça hariç tutulur.",
    section1Text2: "Tüm teklifler bağlayıcı değildir. WORKNOVA, içeriği herhangi bir zamanda önceden haber vermeksizin değiştirme, ekleme veya kaldırma hakkını saklı tutar.",
    section2Title: "2. Referanslar ve bağlantılar",
    section2Text: "WORKNOVA, doğrudan veya dolaylı olarak bağlantı verilen harici web sitelerinin içeriğinden sorumlu değildir. Sorumluluk ancak WORKNOVA'nın yasa dışı içerikten haberdar olması ve bunun kullanımını teknik olarak engelleyebilmesi durumunda ortaya çıkar. WORKNOVA, bağlantı verildikten sonra değiştirilen bağlantılı sayfaların tüm içeriklerinden açıkça kendini uzaklaştırır.",
    section3Title: "3. Ödemeler",
    seePaymentInfo: "Ödeme Bilgilerine bakın",
    subscriptions: "Abonelikler:",
    subscriptionText1: "Abonelik ödemeleri ödeme hizmet sağlayıcımız aracılığıyla güvenli bir şekilde yapılır (örn. kredi kartı, otomatik ödeme, PayPal).",
    subscriptionText2: "WORKNOVA hassas banka veya kredi kartı verilerini saklamaz.",
    singleInvoices: "Bireysel faturalar:",
    singleInvoiceText1: "Bireysel kalemlerin ödemeleri doğrudan WORKNOVA'nın banka hesabına yapılır.",
    singleInvoiceText2: "Banka bilgileri faturada veya müşteri hesabınızda bulunabilir.",
    section4Title: "4. Yasal geçerlilik",
    section4Text: "Bu sorumluluk reddi WORKNOVA'nın çevrimiçi teklifinin bir parçasıdır. Bireysel ifadeler mevcut yasal duruma uymuyorsa, kalan içerik geçerliliğini korur."
  },

  // ========== ZAHLUNGSINFORMATIONEN PAGE ==========
  paymentPage: {
    title: "Ödeme Bilgileri",
    section1Title: "1. Ödeme hizmet sağlayıcısı aracılığıyla abonelikler:",
    section1Intro: "Aboneliklerimiz için ödeme, ödeme hizmet sağlayıcımız Stripe aracılığıyla güvenli bir şekilde yapılır. Kolayca ödeme yapabilirsiniz:",
    creditCard: "Kredi kartı",
    directDebit: "Otomatik ödeme",
    paypal: "PayPal",
    section1Text1: "Faturalandırma, aboneliğinizin başlangıcında otomatik olarak yapılır. Banka bilgileriniz bizde saklanmaz, doğrudan ödeme hizmet sağlayıcısı aracılığıyla işlenir.",
    section1Text2: "Abonelikler ve ödeme koşulları hakkında daha fazla bilgi için",
    termsLink: "Şartlar ve Koşullar",
    section2Title: "2. İşe alım süreci veya ek hizmetler için bireysel faturalar:",
    section2Intro: "Bireysel işe alım pozisyonları için bizden bir fatura alacaksınız ve bu doğrudan banka hesabımıza aktarılmalıdır:",
    bankConnection: "Banka Bilgileri",
    bank: "Banka",
    iban: "IBAN",
    bic: "BIC",
    accountHolder: "Hesap sahibi"
  },

  // ========== NUTZUNGSBEDINGUNGEN PAGE ==========
  termsPage: {
    legalFramework: "Yasal Çerçeve",
    titlePart1: "Kullanım",
    titlePart2: "Koşulları.",
    subtitle: "Morsnova • worknova.de ile İşe Alım",
    version: "Sürüm 1.0 • Kasım 2025 itibariyle",
    scroll: "Kaydır",
    tableOfContents: "İçindekiler",
    sections: {
      sec1: {
        title: "Katılım ve Kullanım Koşullarının Konusu",
        content: {
          p1: "(1) Morsnova GmbH, Karlstraße 68, 76137 Karlsruhe (bundan böyle \"Hizmet Sağlayıcı\" olarak anılacaktır), www.worknova.de adresinde (bundan böyle \"WorkNova\" olarak anılacaktır) dijital nitelikli iş gücü alımına hizmet eden bir platform sunmaktadır.",
          companyTitle: "GİRİŞİMCİLER",
          companyText: "Girişimciler (bundan böyle \"Girişimciler\" veya \"Kullanıcılar\" olarak anılacaktır), platform üzerinden aday profillerine erişim sağlar, başvuru belgelerini görüntüleyebilir, nitelikli çalışanlarla iletişim kurabilir ve işe alım süreçlerini başlatabilir.",
          applicantTitle: "BAŞVURU SAHİPLERİ",
          applicantText: "Başvuru sahiplerine (bundan böyle \"Başvuru Sahipleri\" veya \"Kullanıcılar\" olarak anılacaktır), profiller oluşturma, başvuru belgeleri yükleme, potansiyel işverenlerle iletişime geçme ve devam eden işe alım, tanınma ve entegrasyon prosedürlerinin ilerlemesini takip etme imkanı sunulur.",
          p2: "(2) Bu Kullanım Koşulları, Hizmet Sağlayıcı tarafından hizmetlerin sağlanmasını ve bu hizmetlerin Kullanıcılar tarafından kullanımını düzenler. Dijital işe alım ve yeterlilik desteği kapsamında WorkNova üzerinden sunulan tüm işlevler ve hizmetler için geçerlidir ve hem § 14 BGB anlamındaki girişimciler hem de § 13 BGB anlamındaki tüketiciler için geçerlidir.",
          p3: "(3) § 13 BGB anlamında tüketici, ağırlıklı olarak ticari veya serbest meslek faaliyetine atfedilemeyecek amaçlarla yasal bir işlem yapan her gerçek kişidir. § 14 BGB anlamında girişimci, yasal bir işlem yaparken ticari veya serbest meslek faaliyetini icra eden gerçek veya tüzel kişi veya ehliyetli bir ortaklıktır.",
          p4: "(4) Girişimciler için: Kullanıcının çelişen, ek veya sapan hüküm ve koşulları, Hizmet Sağlayıcı açıkça ve yazılı olarak geçerliliğini kabul etmedikçe geçerli değildir. Bu onay rezervi her durumda geçerlidir, özellikle Hizmet Sağlayıcı kullanıcının çelişen veya sapan hüküm ve koşullarını bilerek hizmetleri çekincesiz veya itirazsız olarak sunsa veya kullanıcıdan kabul etse bile.",
          p5: "(5) Daha iyi okunabilirlik için, bu Kullanım Koşullarında erkek formu (örn. \"Kullanıcı\", \"Başvuru Sahibi\") kullanılmaktadır. Ancak, seçilen terimler tüm cinsiyetler için eşit olarak geçerlidir ve cinsiyetten bağımsız olarak tüm kişi tanımlarını kapsar."
        }
      },
      sec2: {
        title: "Kullanım Koşullarında Değişiklikler",
        content: {
          p1: "(1) Hizmet Sağlayıcı, bu Kullanım Koşullarını herhangi bir zamanda mevcut sözleşme ilişkileri içinde de geçerli olacak şekilde değiştirme hakkını saklı tutar. Hizmet Sağlayıcı, bu tür değişiklikler hakkında değişikliklerin planlanan yürürlüğe girmesinden en az 30 takvim günü önce bilgi verecektir. Kullanıcı, bildirimin alınmasından itibaren 30 gün içinde itiraz etmezse ve itiraz süresinin bitiminden sonra da hizmetleri kullanmaya devam ederse, değişiklikler sürenin bitiminde etkin bir şekilde kabul edilmiş sayılır. Bir itiraz durumunda, sözleşme önceki koşullarda devam edecektir. Değişiklik bildiriminde Hizmet Sağlayıcı, kullanıcıyı itiraz hakkı ve sonuçları hakkında bilgilendirecektir.",
          p2: "(2) KDV değişikliklerinde, Hizmet Sağlayıcı, yukarıda belirtilen itiraz hakkı olmaksızın bu değişikliğe karşılık gelen bir ücret ayarlaması yapma hakkına sahiptir."
        }
      },
      sec3: {
        title: "Kayıt Uygunluğu",
        content: {
          p1: "(1) WorkNova'da bulunan hizmetlerin kullanımı, kullanıcı olarak kayıt olmayı gerektirir. Kullanım hakkı yoktur. Hizmet Sağlayıcı, kullanım başvurularını sebep göstermeksizin reddetme hakkına sahiptir.",
          p2: "(2) Kayıt, kullanıcının reşit olması ve sınırsız fiil ehliyetine sahip olması durumunda izin verilir. Küçüklerin kaydı yasaktır. Bir tüzel kişilik durumunda, kayıt sınırsız fiil ehliyetine ve temsil yetkisine sahip bir gerçek kişi tarafından yapılmalıdır."
        }
      },
      sec4: {
        title: "Kayıt/Sözleşme Yapılması",
        content: {
          p1: "(1) Başvuru sahipleri için: Erişim, ne ticari ne de serbest meslek faaliyetinize atfedilebilecek bir amaçla talep edilirse, başvuru sahibinin yasal cayma hakkı vardır. Cayma hakkı ve iptal politikası hakkında daha fazla bilgi burada bulunabilir.",
          p2: "(2) Kayıt işlemi sırasında Hizmet Sağlayıcı tarafından talep edilen iletişim bilgileri ve diğer bilgiler kullanıcı tarafından eksiksiz ve doğru bir şekilde verilmelidir. Bir tüzel kişiliğin kaydı sırasında, yetkili gerçek kişi de belirtilmelidir.",
          p3: "(3) İstenen tüm verilerin girilmesinden sonra, Hizmet Sağlayıcı bunları eksiksizlik ve tutarlılık açısından kontrol eder. Kullanıcı bu amaçla bir doğrulama e-postası alır. Bilgiler Hizmet Sağlayıcının bakış açısından doğruysa ve Hizmet Sağlayıcının bakış açısından başka bir endişe yoksa, Hizmet Sağlayıcı istenen erişimi etkinleştirir ve kullanıcıyı e-posta ile bilgilendirir. Kayıt işlemi, kullanıcının WorkNova'daki hizmetlerin kullanımı için bir sözleşme imzalama teklifini Hizmet Sağlayıcıya sunmasını temsil eder. Hizmet Sağlayıcının kullanıcıya kaydı onaylayan e-postası, kullanıcının teklifinin kabulünü oluşturur. E-postanın alınmasından itibaren, kullanıcı bu Kullanım Koşulları kapsamında WorkNova'daki işlevleri ve hizmetleri kullanma hakkına sahiptir."
        }
      },
      sec5: {
        title: "Erişim Verileri İçin Sorumluluk",
        content: {
          p1: "(1) Kayıt işlemi sırasında, kullanıcıdan bir kullanıcı adı ve şifre belirlemesi istenir. Bu verilerle kullanıcı, erişim etkinleştirildikten sonra WorkNova'ya giriş yapabilir. Kullanıcı adının üçüncü şahısların haklarını, özellikle isim veya marka haklarını ihlal etmemesini ve genel ahlaka aykırı olmamasını sağlamak kullanıcının sorumluluğundadır.",
          p2: "(2) Şifre dahil erişim verileri kullanıcı tarafından gizli tutulmalı ve yetkisiz üçüncü şahıslara erişilebilir kılınmamalıdır.",
          p3: "(3) WorkNova'ya erişimin ve burada sunulan hizmetlerin kullanımının yalnızca kullanıcı veya kullanıcı tarafından yetkilendirilmiş kişiler tarafından gerçekleştirilmesini sağlamak da kullanıcının sorumluluğundadır. Yetkisiz üçüncü şahısların erişim verilerini ele geçirdiğinden veya ele geçireceğinden endişe ediliyorsa, Hizmet Sağlayıcı derhal bilgilendirilmelidir.",
          alert: "Kullanıcı, erişim verileri altında gerçekleştirilen her türlü kullanım ve/veya diğer faaliyetlerden yasal hükümlere göre sorumludur."
        }
      },
      sec6: {
        title: "Katılımcı Verilerinin Güncellenmesi",
        content: {
          p1: "Kullanıcı, sağladığı verileri (iletişim bilgileri dahil) güncel tutmakla yükümlüdür. WorkNova kullanım süresi boyunca sağlanan verilerde bir değişiklik meydana gelirse, bilgiler WorkNova'da kişisel ayarlarda derhal düzeltilmelidir."
        }
      },
      sec7: {
        title: "Sözleşme Süresi/Fesih",
        content: {
          applicantTitle: "BAŞVURU SAHİBİ",
          applicantText: "(1) Başvuru sahipleri için: WorkNova kullanımı süresiz olarak izin verilir. Kullanıcı kullanımı istediği zaman sonlandırabilir.",
          companyTitle: "ŞİRKET",
          companyText: "(2) Şirketler için: Ücretsiz deneme aşaması, sözleşmenin yapılmasından 30 gün sonra otomatik olarak sona erer. Girişimci deneme aşamasının sonunda iptal etmezse, sözleşme her seferinde bir ay süreyle ücretli olarak uzatılır. İptal süresi ay sonuna 7 gündür.",
          p3: "(3) Feshin yürürlüğe girmesiyle sözleşme ilişkisi sona erer ve kullanıcı erişimini artık kullanamaz. Hizmet Sağlayıcı, fesih yürürlüğe girdiğinde kullanıcı adını ve şifreyi engelleme hakkını saklı tutar.",
          p4: "(4) Fesih yazılı olarak veya support@worknova.de adresine e-posta ile yapılmalıdır.",
          p5: "(5) Tarafların haklı nedenle olağanüstü fesih hakkı saklıdır.",
          p6: "(6) Hizmet Sağlayıcı, feshin yürürlüğe girmesinden 30 takvim günü sonra ve yasal saklama sürelerinin sona ermesinden sonra katılımınız kapsamında oluşturulan tüm verileri geri getirilemez şekilde silme hakkına sahiptir."
        }
      },
      sec8: {
        title: "Hizmet Teklifi/Atlatma Yasağı",
        content: {
          p1: "Hizmet Sağlayıcı, WorkNova'da kullanıcılara geçici kullanım için çeşitli bilgi ve diğer hizmetler sunar. Bu tür hizmetler, örneğin verilerin, katkıların, resim ve ses belgelerinin, bilgilerin ve diğer içeriklerin (bundan böyle topluca \"İçerik\" olarak anılacaktır) kullanıma sunulmasını, ayrıca bireysel profiller oluşturma ve kişisel mesajlar yazarak diğer kullanıcılarla iletişim kurma imkanını içerebilir. Hizmetlerin içeriği ve kapsamı ilgili sözleşme anlaşmalarına, aksi takdirde portalda mevcut olan işlevlere göre belirlenir. Portalda hem ücretsiz hem de ücretli hizmetler mevcuttur. WorkNova'daki hizmetlerin kullanımı başvuru sahipleri için ücretsizdir.",
          p2: "(2) Hizmet Sağlayıcı, kayıtlı girişimcilere aday profillerine, yeterlilik kanıtlarına, özgeçmişlere ve potansiyel nitelikli çalışanlarla seçim ve iletişim için gerekli diğer belgelere erişim izni verir. Girişimci uygun adayları favorilere ekleyebilir, entegre iletişim işlevi aracılığıyla doğrudan iletişime geçebilir ve işe alım süreçlerini başlatabilir. İletişime geçildikten sonra gerekli vekaletnameler, belgeler ve sözleşme belgeleri WorkNova üzerinden iletilebilir.",
          p3: "(3) Başvuru sahiplerine WorkNova'da kişisel verilerini, yeterliliklerini, mesleki sertifikalarını ve başvuru belgelerini saklayabilecekleri dijital bir ortam sağlanır. Başvuru sahibinin onayı ile profili, aday havuzundaki kayıtlı girişimciler için görünür hale getirilir. Görünürlük herhangi bir zamanda bağımsız olarak etkinleştirilebilir veya devre dışı bırakılabilir. Ayrıca, başvuru sahibinin tamamlayıcı (muhtemelen ücretli) destek tekliflerini, özellikle dil desteği, tanınma desteği, çeviri hizmetleri ve entegrasyon önlemlerini kullanması sağlanır.",
          p4: "(4) WorkNova'da bulunan hizmetler, Hizmet Sağlayıcının yalnızca erişim sağladığı üçüncü taraf hizmetlerini de içerebilir. Her biri üçüncü taraf hizmeti olarak tanımlanan bu tür hizmetlerin kullanımı için, bu Kullanım Koşullarından sapan düzenlemeler veya ek düzenlemeler geçerli olabilir, Hizmet Sağlayıcı kullanıcıyı her durumda buna yönlendirecektir.",
          p5: "(5) Diğer hususlarda, WorkNova'da bulunan hizmetlerin kullanım hakkı yalnızca Hizmet Sağlayıcıdaki teknik ve operasyonel olanaklar kapsamındadır. Hizmet Sağlayıcı, hizmetlerinin mümkün olduğunca kesintisiz kullanılabilirliği için çaba gösterir. Ancak, teknik arızalar (güç kaynağının kesilmesi, donanım ve yazılım hataları, veri hatlarında teknik sorunlar gibi) nedeniyle geçici kısıtlamalar veya kesintiler meydana gelebilir.",
          subtitle: "Önemli Komisyon Düzenlemesi & Atlatma Yasağı",
          p6: "(6) Girişimci, WorkNova'da bulunan \"İşe alımı başlat\" işlevi aracılığıyla Hizmet Sağlayıcıyı, üçüncü ülkelerden nitelikli işçi ve uzmanların kazanılması, seçimi ve yerleştirilmesi konusunda destek ve seçilen adayın seçim sürecinden Almanya'da başarılı bir şekilde işe başlamasına kadar eşlik edilmesi için ücretli olarak görevlendirme seçeneğine sahiptir. Hizmet Sağlayıcı daha sonra personel avcısı ve süreç koordinatörü olarak hareket eder, ancak yerleştirilen nitelikli çalışanların işvereni ve AÜG anlamında geçici istihdam izni sahibi olarak değil. İşe alım ve entegrasyon sürecinin yürütülmesi için ücret, iş sözleşmesinde kararlaştırılan brüt yıllık maaş temelinde yerleştirilen nitelikli işçi başına hesaplanır ve bu tutarın %20'si artı geçerli yasal KDV tutarındadır.",
          p7: "(7) Kullanıcılar birbirleriyle yalnızca WorkNova üzerinden iletişim kurmayı ve birbirleriyle bir iş sözleşmesi imzalama konusunda ilgi duymaları durumunda, bu amaçla yalnızca WorkNova'da sağlanan işlevleri kullanmayı taahhüt ederler. Girişimci, Hizmet Sağlayıcının önceden katılımı olmaksızın başvuru sahibine doğrudan yaklaşmamayı, istihdam etmemeyi, görevlendirmemeyi veya iletişim bilgilerini üçüncü şahıslara vermemeyi taahhüt eder.",
          alert: "Bu, girişimcinin işe alım sürecinin sonuçlanması sırasında veya sonrasında başka yollarla başvuru sahibiyle iletişime geçmesi durumunda da geçerlidir. Bu yasağın kusurlu bir şekilde ihlal edilmesi durumunda, başvuru sahibiyle kararlaştırılan brüt yıllık maaşın %20'si tutarında veya - böyle bir anlaşma yoksa - etkilenen başvuru sahibi başına başvuru sahibinin ilan edilen faaliyeti için olağan brüt yıllık maaş tutarında bir cezai şart kaybedilir ve Hizmet Sağlayıcıya ödenmelidir. Daha fazla tazminat talebinin ileri sürülmesi bundan etkilenmez. Cezai şart buna mahsup edilmeyecektir."
        }
      },
      sec9: {
        title: "Hizmetlerde Değişiklikler",
        content: {
          p1: "Hizmet Sağlayıcı, WorkNova'da ücretsiz olarak sunulan hizmetleri herhangi bir zamanda değiştirme, yeni hizmetleri ücretsiz veya ücretli olarak sunma ve ücretsiz hizmetlerin sağlanmasını durdurma hakkına sahiptir. Hizmet Sağlayıcı her durumda meşru menfaatlerinizi dikkate alacaktır."
        }
      },
      sec10: {
        title: "İçeriğin Korunması, Üçüncü Taraf İçeriği İçin Sorumluluk",
        content: {
          p1: "(1) WorkNova'da bulunan içerik ağırlıklı olarak telif hakkı veya diğer mülkiyet hakları ile korunmaktadır ve Hizmet Sağlayıcıya, diğer kullanıcılara veya ilgili içeriği sağlayan diğer üçüncü şahıslara aittir. İçeriğin derlenmesi, §§ 4 Fıkra 2, 87a Fıkra 1 UrhG anlamında veritabanı veya veritabanı eseri olarak korunmaktadır. Kullanıcı bu içeriği yalnızca bu Kullanım Koşullarına uygun olarak ve WorkNova'da belirtilen çerçevede kullanabilir.",
          p2: "(2) WorkNova'da bulunan içerik kısmen Hizmet Sağlayıcıdan ve kısmen kullanıcılardan veya diğer üçüncü şahıslardan gelmektedir. Kullanıcıların ve diğer üçüncü şahısların içeriği bundan böyle topluca \"Üçüncü Taraf İçeriği\" olarak anılacaktır. Hizmet Sağlayıcı, Üçüncü Taraf İçeriğini eksiksizlik, doğruluk ve yasallık açısından kontrol etmez ve bu nedenle Üçüncü Taraf İçeriğinin eksiksizliği, doğruluğu, yasallığı ve güncelliği konusunda hiçbir sorumluluk veya garanti üstlenmez. Bu, Üçüncü Taraf İçeriğinin kalitesi ve belirli bir amaca uygunluğu ve ayrıca bağlantılı harici web sitelerindeki Üçüncü Taraf İçeriği ile ilgili olduğu ölçüde de geçerlidir. Portaldaki tüm içerik, Hizmet Sağlayıcının telif hakkı bildirimi ile sağlanan içerikler hariç olmak üzere Üçüncü Taraf İçeriğidir."
        }
      },
      sec11: {
        title: "İzin Verilen Kullanım Kapsamı, Kullanım Faaliyetlerinin İzlenmesi",
        content: {
          p1: "(1) Kullanım hakkı, WorkNova'ya erişim ve burada mevcut olan hizmetlerin bu Kullanım Koşullarının düzenlemeleri çerçevesinde kullanımı ile sınırlıdır.",
          p2: "(2) Kullanıcı, hizmetlerin sözleşmeye uygun kullanımı için kullanıcının sorumluluk alanında gerekli teknik gereksinimleri oluşturmaktan sorumludur. Hizmet Sağlayıcı bu konuda herhangi bir tavsiye borçlu değildir.",
          p3: "(3) Hizmet Sağlayıcı, kullanım faaliyetlerinin yasaların izin verdiği ölçüde izlenebileceğine dikkat çeker. Bu, IP bağlantı verilerinin ve konuşma geçmişlerinin kaydedilmesini ve ayrıca bu Kullanım Koşullarının ihlali şüphesinin somut olması ve/veya başka bir yasa dışı eylemin veya suçun varlığına dair somut şüphe olması durumunda bunların değerlendirilmesini de içerebilir."
        }
      },
      sec12: {
        title: "Ücret ve Ödeme Koşulları",
        content: {
          p1: "(1) Şirketler için ücretli erişimin faturalandırılması aylık olarak peşin yapılır. Ödeme, sunulan ödeme yöntemleri (örn. SEPA otomatik ödeme, kredi kartı veya PayPal) aracılığıyla yapılabilir.",
          p2: "(2) Belirtilen tüm ücretler, geçerli yasal katma değer vergisi hariçtir.",
          p3: "(4) Temerrüt durumunda, Hizmet Sağlayıcı tüm açık talepler tamamen ödenene kadar WorkNova'ya erişimi engelleme hakkına sahiptir.",
          p4: "(6) Mahsup etme ancak tartışmasız veya yasal olarak tespit edilmiş karşı taleplerle mümkündür. Kullanıcı, yalnızca aynı sözleşme ilişkisine dayanıyorsa bir alıkoyma hakkı ileri sürebilir."
        }
      },
      sec13: {
        title: "Kullanıcı Profillerinin Oluşturulması",
        content: {
          p1: "(1) Portalda bir işlevsellik olarak mevcut olduğu sürece, kullanıcı kullanıcı profilini bu Kullanım Koşulları çerçevesinde özelleştirebilir. § 16 kısıtlamaları geçerlidir.",
          p2: "(2) Hizmet Sağlayıcı genellikle profil sahiplerinin kimliğini ve profillerdeki bilgileri kontrol etmez. Bu nedenle Hizmet Sağlayıcı, her profil sahibinin ilgili profil sahibinin iddia ettiği kişi olduğu konusunda hiçbir garanti vermez."
        }
      },
      sec14: {
        title: "Kullanıcılar Tarafından Kendi İçeriğinin Gönderilmesi",
        content: {
          p1: "(1) Portalda bir işlevsellik olarak mevcut olduğu sürece, içerik portalda yayınlanabilir ve böylece aşağıdaki düzenlemelere uygun olarak üçüncü şahıslara sunulabilir.",
          p2: "(2) İçeriği göndererek, kullanıcı Hizmet Sağlayıcıya ilgili içerik üzerinde ücretsiz ve devredilebilir bir kullanım hakkı verir, özellikle",
          li1: "içeriği Hizmet Sağlayıcının sunucusunda saklamak ve yayınlamak, özellikle kamuya açık hale getirmek (örn. içeriği portalda görüntüleyerek),",
          li2: "düzenleme ve çoğaltma için, ilgili içeriğin sağlanması veya yayınlanması için gerekli olduğu ölçüde ve",
          li3: "içeriğe § 15 uyarınca üçüncü şahıslara kullanım hakları vermek için.",
          note: "Kullanıcı gönderilen içeriği WorkNova'dan tekrar kaldırırsa, yukarıda verilen kullanım ve yararlanma hakkı sona erer. Ancak, Hizmet Sağlayıcı yedekleme ve/veya kanıt amaçlı oluşturulan kopyaları saklama hakkına sahiptir. Diğer kullanıcılara gönderilen içerik üzerinde halihazırda verilmiş kullanım hakları da etkilenmez.",
          p3: "(3) Kullanıcı, kendisi tarafından gönderilen içerikten tamamen sorumludur. Hizmet Sağlayıcı içeriği eksiksizlik, doğruluk, yasallık, güncellik, kalite ve belirli bir amaca uygunluk açısından kontrol etmez. Bu nedenle kullanıcı, Hizmet Sağlayıcıya WorkNova'da kendisi tarafından gönderilen içeriğin tüm haklarının tek sahibi olduğunu veya içeriği WorkNova'da yayınlama ve yukarıdaki paragraf (2) uyarınca kullanım ve yararlanma haklarını verme hakkına (örn. hak sahibinin etkin izni ile) sahip olduğunu beyan ve garanti eder.",
          p4: "(4) Hizmet Sağlayıcı, kullanıcı tarafından içerik gönderilmesinin veya gönderilen içeriğin kendisinin § 16 ihlaline yol açması veya § 16'nın ciddi bir ihlalinin meydana geleceğine dair somut göstergeler olması durumunda, önceden haber vermeksizin içeriğin gönderilmesini reddetme ve/veya halihazırda gönderilen içeriği düzenleme, engelleme veya kaldırma hakkını saklı tutar."
        }
      },
      sec15: {
        title: "Worknova'da Bulunan İçerik Üzerindeki Kullanım Hakkı",
        content: {
          p1: "(1) Bu Kullanım Koşullarında veya WorkNova'da daha fazla kullanıma açıkça izin verilmedikçe veya ilgili bir işlevsellik (örn. indirme düğmesi) ile etkinleştirilmedikçe,",
          li1: "portalda bulunan içerik yalnızca kendi amaçları için çevrimiçi olarak erişilebilir ve görüntülenebilir. Bu kullanım hakkı, WorkNova'daki sözleşmeli kayıt süresiyle sınırlıdır;",
          li2: "WorkNova'da bulunan içeriği tamamen veya kısmen düzenlemek, değiştirmek, çevirmek, göstermek veya sunmak, yayınlamak, sergilemek, çoğaltmak veya dağıtmak yasaktır. Ayrıca telif hakkı bildirimlerini, logoları ve diğer işaretleri veya koruyucu bildirimleri kaldırmak veya değiştirmek yasaktır.",
          p2: "(2) Kullanıcı, yalnızca indirme veya yazdırma imkanı bir işlevsellik olarak mevcutsa (örn. bir indirme düğmesi aracılığıyla) içeriği indirme (\"İndirme\") ve içeriği yazdırma hakkına sahiptir.",
          note: "Kullanıcı, kullanıcı tarafından düzgün bir şekilde indirilen veya yazdırılan içeriğe kendi amaçları için kullanım üzere süresiz ve münhasır olmayan bir kullanım hakkı alır. Ücret karşılığında sağlanan içerik söz konusu olduğu sürece, bu hak devri için bir başka ön koşul da ilgili içeriğin tam olarak ödenmesidir. Diğer hususlarda, içeriğin tüm hakları orijinal hak sahibinde (Hizmet Sağlayıcı veya ilgili üçüncü taraf) kalır."
        }
      },
      sec16: {
        title: "Yasaklanmış Faaliyetler",
        content: {
          p1: "(1) İzin verilmeyen kullanım özellikle şunları içerir:",
          ul1: {
            li1: "hem kendi hem de üçüncü tarafların ücretli içerik, hizmet ve/veya ürünlerinin tüm teklifleri ve tanıtımları,",
            li2: "çekilişler, piyangolar, takas işlemleri, reklamlar veya piramit şemaları gibi ticari geçmişe sahip faaliyetlerin tüm teklifleri, tanıtımları ve yürütülmesi ve",
            li3: "üyelerin kimlik ve/veya iletişim verilerinin (e-posta adresleri dahil) her türlü elektronik veya diğer toplanması (örn. istenmeyen e-postalar göndermek için)."
          },
          p2: "(2) Kullanıcının WorkNova üzerinde veya bununla bağlantılı olarak yürürlükteki yasaları ihlal eden, üçüncü şahısların haklarını ihlal eden veya küçüklerin korunması ilkelerini ihlal eden herhangi bir faaliyette bulunması yasaktır. Özellikle şunlar yasaktır:",
          ul2: {
            li1: "gençleri koruma yasalarını, veri koruma yasalarını ve/veya diğer yasaları ihlal eden ve/veya hileli olan pornografik içerik, hizmet ve/veya ürünlerin yayınlanması, yayılması, sunulması ve kontrol edilmesi;",
            li2: "diğer kullanıcılara veya üçüncü şahıslara hakaret eden veya iftira atan içeriğin kullanılması;",
            li3: "açıkça yetkilendirilmeden yasal olarak korunan veya üçüncü taraf haklarıyla (örn. telif hakları) yükümlü olan içerik, hizmet ve/veya ürünlerin kullanılması, sağlanması ve yayılması."
          },
          p3: "(3) Ayrıca, kullanıcının WorkNova'da kendi içeriğini yayınlarken ve diğer kullanıcılarla iletişim kurarken (örn. kişisel mesajlar göndererek) olası bir yasa ihlalinden bağımsız olarak aşağıdaki faaliyetlerde bulunması da yasaktır:",
          ul3: {
            li1: "Virüslerin, Truva atlarının ve diğer zararlı dosyaların yayılması;",
            li2: "İstenmeyen veya spam postaların yanı sıra zincirleme mektupların gönderilmesi;",
            li3: "İma edici, saldırgan, cinsel içerikli, müstehcen veya karalayıcı içeriğin yayılması;",
            li4: "Diğer kullanıcıların taciz edilmesi (takip etme, çoklu iletişim);",
            li5: "Şifrelerin ifşa edilmesinin talep edilmesi;",
            li6: "Açık izin olmaksızın içeriğin yayılması."
          },
          p4: "(4) Ayrıca, WorkNova'nın sorunsuz çalışmasını bozabilecek, özellikle Hizmet Sağlayıcının sistemlerini aşırı yükleyebilecek her türlü eylem yasaktır.",
          p5: "(5) Yasa dışı veya suç teşkil eden eylemlerden şüphelenilmesi durumunda, Hizmet Sağlayıcı bu faaliyetleri inceleme ve gerekirse uygun yasal adımları başlatma yetkisine ve muhtemelen yükümlülüğüne sahiptir. Bu, bir davanın savcılığa iletilmesini de içerebilir."
        }
      },
      sec17: {
        title: "Erişimin Engellenmesi",
        content: {
          p1: "(1) Bu Kullanım Koşullarının ve/veya yürürlükteki yasaların ihlal edildiğine dair somut göstergeler varsa veya Hizmet Sağlayıcının engelleme konusunda başka bir meşru menfaati varsa, Hizmet Sağlayıcı WorkNova'ya erişimi geçici veya kalıcı olarak engelleyebilir.",
          p2: "(2) Geçici veya kalıcı engelleme durumunda, Hizmet Sağlayıcı erişim yetkisini engeller ve kullanıcıyı e-posta ile bilgilendirir.",
          p3: "(3) Geçici bir engelleme durumunda, Hizmet Sağlayıcı engelleme süresi sona erdikten sonra erişim yetkisini yeniden etkinleştirir ve kullanıcıyı e-posta ile bilgilendirir. Kalıcı olarak engellenen bir erişim yetkisi geri yüklenemez. Kalıcı olarak engellenen kullanıcılar kullanımdan kalıcı olarak hariç tutulur ve tekrar kayıt olamazlar."
        }
      },
      sec18: {
        title: "Veri Koruma",
        content: {
          p1: "(1) Hizmet Sağlayıcının kalite standartları, kullanıcıların kişisel verilerini (bundan böyle \"kişisel veriler\" olarak anılacaktır) sorumlu bir şekilde kullanmayı içerir. WorkNova'ya kayıttan ve mevcut hizmetlerin kullanımından kaynaklanan kişisel veriler, bu nedenle Hizmet Sağlayıcı tarafından yalnızca sözleşmeye dayalı hizmet sunumu için gerekli olduğu ve yasal hükümlerle izin verildiği veya yasa koyucu tarafından emredildiği ölçüde toplanır, saklanır ve işlenir. Hizmet Sağlayıcı, kişisel verileri gizli tutacak ve geçerli veri koruma yasası hükümlerine uygun olarak işleyecek ve sözleşmenin yerine getirilmesi için gerekli olmadıkça veya yasal bir zorunluluk bulunmadıkça veya kullanıcı onay vermedikçe üçüncü şahıslara aktarmayacaktır.",
          p2: "(2) Ayrıca, Hizmet Sağlayıcı kişisel verileri yalnızca kullanıcının buna açıkça rıza göstermesi durumunda kullanır. Verilen bir onay her zaman iptal edilebilir."
        }
      },
      sec19: {
        title: "Sorumluluk Sınırlaması",
        content: {
          p1: "Hizmet Sağlayıcı münhasıran aşağıdaki düzenlemeler uyarınca sorumludur:",
          p2: "(1) Hizmet Sağlayıcı, Hizmet Sağlayıcı veya yasal temsilcileri, yönetici çalışanları veya basit vekilleri tarafından kasıtlı veya ağır ihmal sonucu neden olunan zararlar için sınırsız sorumludur.",
          p3: "(2) Yalnızca önemsiz sözleşme yükümlülüklerinin hafif ihmalli ihlali durumunda, Hizmet Sağlayıcı sorumlu değildir. Esaslı sözleşme yükümlülükleri - \"kardinal yükümlülükler\" olarak da adlandırılır - yerine getirilmesi sözleşmenin düzgün bir şekilde yürütülmesi için gerekli olan ve sözleşme ortağının düzenli olarak güvenebileceği yükümlülüklerdir. Diğer hususlarda, Hizmet Sağlayıcının hafif ihmalden kaynaklanan zararlar için sorumluluğu, ilgili sözleşme ilişkisi çerçevesinde tipik olarak beklenmesi gereken zararlarla sınırlıdır (sözleşme için tipik öngörülebilir zararlar). Bu aynı zamanda Hizmet Sağlayıcının yasal temsilcileri, yönetici çalışanları veya basit vekillerinin hafif ihmalli görev ihlalleri için de geçerlidir.",
          p4: "(3) Yukarıdaki sorumluluk sınırlaması, hileli niyet durumunda, bedensel veya kişisel yaralanma durumunda, garantilerin ihlali ve ürün sorumluluğu kapsamındaki talepler için geçerli değildir."
        }
      },
      sec20: {
        title: "Yazılı Şekil",
        content: {
          p1: "Bu Kullanım Koşullarında aksi açıkça belirtilmedikçe, WorkNova kullanımı çerçevesinde yapılan tüm beyanlar yazılı veya e-posta ile yapılmalıdır."
        }
      },
      sec21: {
        title: "Bölünebilirlik Maddesi",
        content: {
          p1: "Bu Kullanım Koşullarının bir hükmü geçersiz olursa veya geçersiz hale gelirse, kalan hükümlerin yasal geçerliliği bundan etkilenmez. Geçersiz hükmün yerine, tarafların amaçladığına ekonomik olarak en yakın olan geçerli bir hüküm kararlaştırılmış sayılır."
        }
      },
      sec22: {
        title: "Uygulanacak Hukuk",
        content: {
          p1: "Bu Kullanım Koşulları, BM Satış Sözleşmesi (Uluslararası Mal Satımına İlişkin Sözleşmeler Hakkında Antlaşma, CISG) hariç olmak üzere Almanya Federal Cumhuriyeti yasalarına tabidir.",
          p2: "Tüketiciler için bu hukuk seçimi, yalnızca tüketicinin mutad meskeninin bulunduğu devletin yasalarının emredici hükümleri tarafından sağlanan korumanın geri çekilmemesi kaydıyla geçerlidir."
        }
      },
      sec23: {
        title: "Yargı Yeri",
        content: {
          p1: "Kullanıcının bir girişimci, kamu hukuku tüzel kişisi veya kamu hukuku özel fonu olması durumunda, bu Kullanım Koşullarından kaynaklanan tüm anlaşmazlıklar için münhasır yargı yeri Hizmet Sağlayıcının kayıtlı merkezidir. Tüketicinin Almanya'da veya Avrupa Birliği'nin başka bir ülkesinde ikametgahı yoksa kayıtlı merkezimiz de yargı yeridir. Diğer tüm durumlarda yasal yargı yeri geçerlidir."
        }
      }
    }
  },

  // ========== DATENSCHUTZ PAGE ==========
  privacyPage: {
    badge: "Yasal Bilgiler",
    title: "Gizlilik",
    titlePart2: "Politikası.",
    subtitle: "\"Worknova\" dijital işe alım platformu için",
    version: "Sürüm 1.0 • Kasım 2025 itibariyle",
    navigation: "Navigasyon",
    responsibleParty: "Sorumlu Taraf",
    principles: "İlkeler",
    collection: "Toplama & İşleme",
    cookies: "Çerezler & İzleme",
    storage: "Depolama & Silme",
    dataSharing: "Veri Paylaşımı",
    rights: "Veri Sahibi Hakları",
    fullDocument: "KVKK'ya göre tam belge",
    sections: {
      preamble: {
        text: "Bu gizlilik politikası, başvuru sahiplerini, girişimcileri ve dijital işe alım platformu worknova.de'nin (bundan böyle \"Platform\" olarak anılacaktır) diğer kullanıcılarını, Platformun kullanımı ve aracılığıyla sağlanan hizmetlerle bağlantılı olarak kişisel verilerin toplanması, işlenmesi ve kullanımı hakkında bilgilendirir.",
        operatedBy: "Platform şu tarafından işletilmektedir:",
        address: "Karlstraße 68, 76137 Karlsruhe"
      },
      sec1: {
        title: "Sorumlu Taraf",
        content: {
          p1: "Genel Veri Koruma Yönetmeliği (KVKK) ve Federal Veri Koruma Kanunu (BDSG) anlamında sorumlu olan Morsnova GmbH, Karlstraße 68, 76137 Karlsruhe."
        }
      },
      sec2: {
        title: "Veri İşleme İlkeleri",
        content: {
          p1: "Morsnova GmbH, kişisel verileri yalnızca KVKK, BDSG ve diğer ilgili veri koruma düzenlemelerinin hükümlerine uygun olarak işler.",
          p2: "Kişisel veriler yalnızca Platformun sağlanması ve kullanılması, işe alım prosedürlerinin yürütülmesi, başvuru sahipleri ve girişimciler arasındaki iletişim, sözleşmenin yerine getirilmesi veya Morsnova GmbH'nin meşru menfaatlerinin korunması için gerekli olduğu ölçüde işlenir.",
          articles: [
            { art: "Madde 6 Fıkra 1 lit. a", desc: "Gönüllü onay temelinde" },
            { art: "Madde 6 Fıkra 1 lit. b", desc: "Sözleşmesel yükümlülüklerin yerine getirilmesi" },
            { art: "Madde 6 Fıkra 1 lit. f", desc: "Meşru menfaatler temelinde" }
          ]
        }
      },
      sec3: {
        title: "Kişisel Verilerin Toplanması ve İşlenmesi",
        content: {
          sub1: {
            title: "(1) Platformda Kayıt",
            intro: "Kayıt sırasında kullanıcı türüne bağlı olarak aşağıdaki veriler toplanır ve saklanır:",
            companyLabel: "Girişimci",
            companyText: "Şirket adı, sektör, iletişim kişisi, iletişim bilgileri, e-posta adresi, şifre, fatura adresi ve varsa ödeme bilgileri.",
            applicantLabel: "Başvuru Sahibi",
            applicantText: "Ad, iletişim bilgileri, yeterlilikler, özgeçmiş, sertifikalar, dil becerileri ve diğer işle ilgili belgeler.",
            legalBasis: "Hukuki dayanak: Madde 6 Fıkra 1 lit b KVKK."
          },
          sub2: {
            title: "(2) Platformun Kullanımı",
            p1: "Aktif kullanım sırasında, IP adresi, erişim zamanı, tarayıcı türü, işletim sistemi, cihaz bilgileri ve ziyaret edilen sayfalar dahil olmak üzere teknik kullanım verileri otomatik olarak toplanır. Bu işleme, sistem güvenliği, hata analizi ve istatistiksel değerlendirme için kullanılır.",
            legalBasis: "Hukuki dayanak: Madde 6 Fıkra 1 lit f KVKK."
          },
          sub3: {
            title: "(3) İletişim ve Başvuru Sahibi Verileri",
            p1: "Morsnova GmbH, iletişim içeriklerini (mesajlar, ekler, randevular), başvuru belgelerini, özgeçmişleri, sertifikaları ve yeterlilik belgelerini yalnızca başvuru, tanınma ve işe alım sürecinin yürütülmesi için işler.",
            legalBasis: "Hukuki dayanak: Madde 6 Fıkra 1 lit b KVKK."
          },
          sub4: {
            title: "(4) Ödeme Verileri",
            p1: "Ücretli hizmetleri işlemek için, güvenli arayüzler aracılığıyla onaylı ödeme hizmet sağlayıcılarını (örn. Stripe, PayPal veya bankacılık kurumları) entegre ediyoruz. Kişisel veriler ödeme hizmet sağlayıcısına iletilmez. Kullanıcı, kişisel verilerini ödeme hizmet sağlayıcılarına kendisi açıklar."
          },
          sub5: {
            title: "(5) & (6) Çerezler & İzleme Teknolojileri",
            p1: "Web sitemiz çerezler kullanır. Çerezler, internet tarayıcısında veya internet tarayıcısı tarafından kullanıcının bilgisayar sisteminde depolanan metin dosyalarıdır. Bir kullanıcı bir web sitesini ziyaret ettiğinde, kullanıcının işletim sisteminde bir çerez saklanabilir. Bu çerez, web sitesi tekrar ziyaret edildiğinde tarayıcının benzersiz şekilde tanımlanmasını sağlayan karakteristik bir dize içerir.",
            p2: "Web sitemizi işlevsel hale getirmek için çerezler kullanıyoruz. Web sitemizin bazı öğeleri, çağıran tarayıcının sayfa değişikliğinden sonra bile tanımlanabilmesini gerektirir. Teknik olarak gerekli çerezlerin hukuki dayanağı, § 25 Fıkra 2 TDDDG ile bağlantılı olarak Madde 6 Fıkra 1 lit. f KVKK'dır.",
            thirdPartyTitle: "Üçüncü Taraf Çerezleri & AB-ABD Veri Gizliliği Çerçevesi",
            thirdPartyText1: "Avrupa Komisyonu, AB-ABD veri gizliliği çerçevesi için yeterlilik kararını kabul etti. ABD şirketleri, ayrıntılı veri koruma yükümlülüklerine uymayı taahhüt ederek çerçeveye katılabilir. ABD Ticaret Bakanlığı sertifikalı şirketlerin bir listesini tutar.",
            thirdPartyText2: "Google Analytics 4 & Firebase: Bu hizmetleri yalnızca açık rıza ile kullanıyoruz (Madde 6 Fıkra 1 lit. a KVKK). Google, web sitesi kullanımını analiz etmek için çerezler kullanır. Firebase, kararlılık, performans optimizasyonu ve kullanıcı deneyimi sağlar. Veriler takma adla işlenir."
          }
        }
      },
      sec4: {
        title: "Ek İşlevler",
        content: {
          p1: "Girişimciler, başvuru sahipleri için isteğe bağlı ek hizmetler (örn. dil desteği, entegrasyon yardımı) başlatabilir. Bu amaçla, veriler Madde 28 KVKK uyarınca veri koruma gerekliliklerine uymakla sözleşmesel olarak yükümlü olan görevlendirilmiş ortak şirketlere aktarılır."
        }
      },
      sec5: {
        title: "Depolama & Silme",
        content: {
          p1: "Kişisel veriler yalnızca ilgili amacın yerine getirilmesi için gerekli olduğu sürece saklanır. Hesap silindikten sonra, yasal saklama yükümlülükleri (ticaret/vergi hukuku) bulunmadığı sürece 30 gün içinde kaldırma gerçekleşir."
        }
      },
      sec6: {
        title: "Verilerin Açıklanması",
        content: {
          intro: "Kişisel veriler yalnızca şu durumlarda açıklanır:",
          list: [
            { icon: "UserCheck", text: "Prosedürün yürütülmesi için başvuru sahiplerine veya girişimcilere" },
            { icon: "Scale", text: "Vize veya tanınma prosedürleri için makamlara (örn. ZAV, ZAB)" },
            { icon: "Database", text: "Adına teknik hizmet sağlayıcılarına (BT desteği, barındırma)" },
            { icon: "Globe", text: "Üçüncü ülkelere aktarım yalnızca Madde 44 ff. KVKK yerine getirildiğinde" }
          ],
          legalBasis: "Hukuki dayanak: Madde 6 Fıkra 1 lit b KVKK (Sözleşme işleme) & Madde 6 Fıkra 1 lit f KVKK (Meşru menfaat)."
        }
      },
      sec7: {
        title: "İstatistiksel Değerlendirme",
        content: {
          p1: "Veriler, istatistikler (yerleştirme oranları, pazar gelişimi) oluşturmak için anonimleştirilmiş biçimde kullanılır. Bireysel kişilere ilişkin bir sonuç çıkarılması hariç tutulur. Dayanak: Madde 6 Fıkra 1 lit f KVKK."
        }
      },
      sec8: {
        title: "Veri Güvenliği",
        content: {
          p1: "SSL/TLS ile şifreleme (Güvenli sunucu konumu: Almanya).",
          p2: "Kayıp veya yetkisiz erişime karşı koruma için kapsamlı teknik önlemler alıyoruz."
        }
      },
      sec9: {
        title: "§ 9 Veri Sahibi Hakları",
        content: {
          rights: [
            "Bilgi hakkı (Madde 15 KVKK)",
            "Düzeltme hakkı (Madde 16 KVKK)",
            "Silme hakkı (Madde 17 KVKK)",
            "İşlemenin kısıtlanması (Madde 18 KVKK)",
            "Veri taşınabilirliği hakkı (Madde 20 KVKK)",
            "İtiraz hakkı (Madde 21 KVKK)",
            "Onayı geri çekme hakkı",
            "Denetim makamına şikayet hakkı (Madde 77)"
          ],
          contact: "Bu hakları kullanmak için e-posta ile gayri resmi bir bildirim yeterlidir:"
        }
      },
      sec10: {
        title: "Onayın Geri Çekilmesi",
        content: {
          p1: "Kişisel verilerin işlenmesi onaya dayanıyorsa, bu herhangi bir zamanda gelecek için geçerli olacak şekilde geri çekilebilir. Geri çekilmeye kadar gerçekleştirilen işlemenin yasallığı bundan etkilenmez."
        }
      },
      sec11: {
        title: "Bu Gizlilik Politikasında Değişiklikler",
        content: {
          p1: "Morsnova, bu gizlilik politikasını yeni yasal gerekliliklere, teknik gelişmelere veya organizasyonel düzenlemelere uyarlamak için herhangi bir zamanda değiştirme veya güncelleme hakkını saklı tutar. Güncel sürüm şu adreste mevcuttur:"
        }
      },
      footer: {
        verification: "Doğrulama İmzası",
        authorized: "Hukuk Departmanı tarafından yetkilendirildi"
      }
    }
  }
};

// =====================================================
// i18n INITIALIZATION
// =====================================================
const savedLanguage = typeof window !== 'undefined'
  ? localStorage.getItem('worknova-language') || 'de'
  : 'de';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      de: { translation: de },
      en: { translation: en },
      tr: { translation: tr }
    },
    lng: savedLanguage,
    fallbackLng: 'de',
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    }
  });

i18n.on('languageChanged', (lng) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('worknova-language', lng);
    document.documentElement.lang = lng;
  }
});

export default i18n;
