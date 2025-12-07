export type Language = "fr" | "en" | "pt" | "cv";

export const LANGUAGES: Record<
  Language,
  { label: string; locale: string; shortLabel: string }
> = {
  fr: { label: "Français", locale: "fr-FR", shortLabel: "FR" },
  en: { label: "English", locale: "en-US", shortLabel: "EN" },
  pt: { label: "Português", locale: "pt-PT", shortLabel: "PT" },
  cv: { label: "Kabuverdianu", locale: "kea-CV", shortLabel: "CV" },
};

type TranslationValue =
  | string
  | number
  | boolean
  | TranslationValue[]
  | { [key: string]: TranslationValue };

export type TranslationDict = Record<string, TranslationValue>;

export const translations: Record<Language, TranslationDict> = {
  fr: {
    common: {
      brand: "Afrika Property",
      viewAll: "Voir tout",
      search: "Rechercher",
      back: "Retour",
      backToDashboard: "Retour au tableau de bord",
      close: "Fermer",
      learnMore: "En savoir plus",
      send: "Envoyer",
      language: "Langue",
      emailOrPhone: "Email ou téléphone",
      firstName: "Prénom",
      lastName: "Nom",
      project: "Votre Projet",
      consent: "En cliquant sur envoyer, vous acceptez d'être recontacté par nos équipes.",
      watchFilm: "Regarder le film",
      cancel: "Annuler",
      optional: "optionnel",
      today: "Aujourd'hui",
      yesterday: "Hier",
      daysAgo: "jours",
      selected: "sélectionné(s)",
      all: "Tous",
      filter: "Filtrer",
      actions: "Actions",
    },
    nav: {
      buy: "Acheter",
      invest: "Investir",
      promoters: "Promoteurs",
      destinations: "Destinations",
      blog: "Blog",
      favorites: "Favoris",
      profile: "Mon Profil",
      services: "Services",
      about: "À propos",
      contact: "Contact",
      promoterSpace: "Espace Pro",
    },
    promoter: {
      login: {
        title: "Espace Promoteur",
        subtitle: "Connectez-vous pour gérer vos annonces",
        email: "Adresse email",
        emailPlaceholder: "Adresse email",
        password: "Mot de passe",
        passwordPlaceholder: "Mot de passe",
        rememberMe: "Se souvenir de moi",
        forgotPassword: "Mot de passe oublié ?",
        submit: "Se connecter",
        submitting: "Connexion...",
        orEmail: "Ou avec votre email",
        google: "Se connecter avec Google",
        apple: "Se connecter avec Apple",
        noAccount: "Pas encore de compte ?",
        becomePartner: "Devenir partenaire",
        success: "Connexion réussie",
        error: "Erreur de connexion",
      },
    },
    footer: {
      description:
        "Le premier portail immobilier premium dédié au Cap-Vert. Découvrez des propriétés d'exception et des opportunités d'investissement uniques.",
      navigation: "Navigation",
      contact: "Contact",
      links: {
        properties: "Propriétés à vendre",
        invest: "Investir au Cap-Vert",
        destinations: "Nos destinations",
        blog: "Le Blog",
      },
      address: "Av. Amílcar Cabral, Praia, Santiago, Cap-Vert",
      phone: "+238 999 99 99",
      email: "contact@luxecv.com",
      rights: "Tous droits réservés.",
      legal: "Mentions légales",
      privacy: "Confidentialité",
      cookies: "Cookies",
    },
    promotion: {
      title: "Options de Mise en Avant",
      totalToPay: "Total à payer",
      payAndPublish: "Payer et Publier",
      publish: "Publier l'annonce",
      options: {
        "boost-7": {
          label: "Boost 7 jours",
          description: "Remontez votre annonce en tête de liste chaque jour pendant 7 jours.",
          duration: "7 jours",
        },
        "boost-30": {
          label: "Boost 30 jours",
          description: "Visibilité maximale avec une remontée quotidienne pendant 30 jours.",
          duration: "30 jours",
        },
        pinned: {
          label: "Annonce épinglée",
          description: "Votre annonce reste fixée en haut des résultats de recherche.",
        },
        homepage: {
          label: "Mise en avant page d'accueil",
          description: "Apparaissez dans la section 'À la une' de la page d'accueil haute visibilité.",
        },
      },
    },
    createListing: {
      backToDashboard: "Retour au tableau de bord",
      title: "Créer une nouvelle annonce",
      subtitle: "Remplissez les informations ci-dessous pour publier votre bien.",
      general: {
        title: "Informations Générales",
        listingTitle: "Titre de l'annonce",
        listingTitlePlaceholder: "Ex: Villa de luxe avec vue mer",
        transactionType: "Type de transaction",
        propertyType: "Type de bien",
        price: "Prix (€)",
        surface: "Surface (m²)",
        types: {
          sale: "Vente",
          apartment: "Appartement",
          house: "Maison / Villa",
          land: "Terrain",
          commercial: "Local commercial"
        }
      },
      location: {
        title: "Localisation",
        island: "Île",
        city: "Ville / Quartier",
        cityPlaceholder: "Ex: Santa Maria",
        address: "Adresse exacte (masquée)",
        addressPlaceholder: "Rue, numéro...",
      },
      details: {
        title: "Détails & Équipements",
        bedrooms: "Chambres",
        bathrooms: "Salles de bain",
        amenities: "Équipements",
        description: "Description",
        descriptionPlaceholder: "Décrivez votre bien en détail...",
        list: {
          pool: "Piscine",
          garden: "Jardin",
          garage: "Garage",
          seaview: "Vue Mer",
          ac: "Climatisation",
          furnished: "Meublé",
          elevator: "Ascenseur",
          security: "Sécurité"
        }
      },
      media: {
        title: "Photos & Documents",
        dragDrop: "Cliquez ou glissez vos photos ici",
        format: "JPG, PNG jusqu'à 5MB",
        documents: "Documents légaux (Optionnel)",
        docTypes: "Plans, diagnostics, etc.",
        add: "Ajouter"
      },
      draft: "Enregistrer en brouillon"
    },
    home: {
      hero: {
        title: "L'Immobilier d'Exception",
        accent: "au Cap-Vert",
        subtitle:
          "Découvrez une sélection exclusive de propriétés de luxe, villas en bord de mer et opportunités d'investissement uniques.",
        locationLabel: "Localisation",
        locationPlaceholder: "Toutes les îles",
        typeLabel: "Type de bien",
        typeAny: "Tous types",
        typeVilla: "Villa",
        typeApartment: "Appartement",
        typeLand: "Terrain",
        budgetLabel: "Budget",
        budgetAny: "Tout budget",
        budget1: "100k - 250k €",
        budget2: "250k - 500k €",
        budget3: "500k € +",
        search: "Rechercher",
        islands: {
          sal: "Sal",
          boaVista: "Boa Vista",
          santiago: "Santiago",
          saoVicente: "São Vicente",
          santoAntao: "Santo Antão",
          maio: "Maio",
          fogo: "Fogo",
          saoNicolau: "São Nicolau",
          brava: "Brava",
        },
      },
      featured: {
        tag: "Sélection Exclusive",
        title: "Propriétés à la Une",
        viewCollection: "Voir toute la collection",
      },
      promoter: {
        tag: "Espace Promoteurs",
        title: "Donnez une envergure",
        accent: "internationale",
        suffix: "à vos projets",
        description:
          "Rejoignez le réseau exclusif Luxe CV. Publiez vos biens, accédez à une clientèle d'investisseurs qualifiés et gérez votre activité depuis un tableau de bord performant.",
        becomePartner: "Devenir Partenaire",
        login: "Se connecter",
      },
      invest: {
        tag: "Opportunité",
        title: "Pourquoi investir",
        accent: "au Cap-Vert ?",
        description:
          "Une destination d'exception alliant cadre de vie paradisiaque, stabilité politique et opportunités économiques uniques.",
        cta: "Découvrir les avantages",
        benefits: {
          yieldTitle: "Rendement Locatif",
          yieldDesc:
            "Des rendements attractifs entre 5% et 9% portés par une demande touristique croissante.",
          safetyTitle: "Stabilité & Sécurité",
          safetyDesc:
            "Un cadre politique stable et une sécurité juridique totale pour les investisseurs étrangers.",
          taxTitle: "Fiscalité Douce",
          taxDesc:
            "Un impôt unique de 20% sur les revenus locatifs et de nombreuses conventions fiscales.",
          geoTitle: "Position Stratégique",
          geoDesc:
            "Un carrefour incontournable entre l'Europe, l'Afrique et les Amériques.",
        },
      },
      video: {
        tag: "Découverte",
        title: "L'âme du Cap-Vert",
        watch: "Regarder le film",
        close: "Fermer",
      },
      map: {
        tag: "Exploration",
        title: "Choisissez votre destination",
        description:
          "Chaque île a son caractère unique. Survolez la carte (ou cliquez) pour découvrir les opportunités de chaque région.",
        price: "Prix Moyen",
        vibe: "Ambiance",
        explore: "Explorer",
        legendTitle: "Guide de l'investisseur",
        legendText: "Survolez les points pour comparer rapidement les zones d'investissement.",
        islands: {
          sal: { vibe: "Tourisme & Plages", price: "2 200 €/m²" },
          boavista: { vibe: "Dunes & Nature", price: "1 900 €/m²" },
          santiago: { vibe: "Capitale & Business", price: "1 500 €/m²" },
          saovicente: { vibe: "Culture & Musique", price: "1 700 €/m²" },
        },
      },
      destinations: {
        tag: "Explorer",
        title: "Destinations Phares",
        viewAll: "Voir toutes les îles",
        propertiesCount: "propriétés",
        cards: {
          sal: {
            description: "L'île du soleil éternel et des plages infinies.",
            tag: "Balnéaire",
          },
          boaVista: {
            description: "Des dunes de sable blanc à perte de vue.",
            tag: "Nature",
          },
          santiago: {
            description: "Le cœur culturel et historique de l'archipel.",
            tag: "Culture",
          },
          saoVicente: {
            description: "L'âme musicale et festive du Cap-Vert.",
            tag: "Art de vivre",
          },
        },
      },
      faq: {
        tag: "Questions Fréquentes",
        title: "Tout savoir sur votre investissement",
        description: "Des réponses claires pour avancer sereinement dans votre projet.",
        items: [
          {
            question: "Peut-on acheter en tant qu’étranger ?",
            answer:
              "Absolument. Le Cap-Vert garantit la pleine propriété aux investisseurs étrangers, avec exactement les mêmes droits et protections juridiques que les citoyens nationaux. Il n'y a aucune restriction sur l'achat de biens immobiliers.",
          },
          {
            question: "Quelles sont les taxes et la fiscalité ?",
            answer:
              "La fiscalité est très attractive. L'impôt sur les revenus locatifs est un taux forfaitaire unique de 20%. La taxe foncière annuelle (IUP) est d'environ 1.5% de la valeur fiscale du bien. De plus, il existe des conventions fiscales pour éviter la double imposition avec de nombreux pays.",
          },
          {
            question: "Comment gérer mon bien à distance ?",
            answer:
              "C'est notre spécialité. Nous vous mettons en relation avec des sociétés de gestion locative de confiance qui s'occupent de tout : marketing, check-in/out, ménage et maintenance. Vous percevez vos loyers sans avoir à gérer le quotidien.",
          },
          {
            question: "Quelles sont les garanties juridiques ?",
            answer:
              "Le système juridique cap-verdien est basé sur le droit civil (similaire au Portugal et à la France). Toutes les transactions passent par notaire et sont enregistrées au Registre Foncier (Registo Predial), ce qui vous assure un titre de propriété incontestable.",
          },
          {
            question: "Je suis promoteur, comment diffuser mes projets ?",
            answer:
              "Nous sélectionnons rigoureusement nos partenaires. Si vous proposez des biens d'exception, vous pouvez soumettre votre dossier via notre {{promoterSpace}}. Une fois validé, vous accéderez à notre clientèle d'investisseurs internationaux.",
          },
        ],
      },
      contactBanner: {
        tag: "Consultation Offerte",
        title: "Votre vision, notre expertise.",
        description:
          "Discutons de vos ambitions immobilières au Cap-Vert. Nos directeurs de projet sont à votre disposition pour une étude personnalisée.",
        placeholders: {
          firstName: "Votre prénom",
          lastName: "Votre nom",
          project: "Je souhaite investir dans...",
        },
        submit: "Envoyer ma demande",
      },
    },
    property: {
      badges: {
        new: "Nouveau",
        exclusive: "Exclusif",
        sold: "Vendu",
        sale: "Achat",
      },
      metrics: {
        bedrooms: "Chambres",
        bathrooms: "Salles de bain",
        area: "Surface",
        areaUnit: "m²",
      },
      list: {
        resultsLabel: "résultats",
        emptyTitle: "Aucune propriété trouvée",
        emptyDescription: "Essayez de modifier vos filtres de recherche.",
        pagination: {
          previous: "Précédent",
          next: "Suivant",
        },
      },
      sort: {
        label: "Trier par",
        newest: "Nouveautés",
        priceAsc: "Prix croissant",
        priceDesc: "Prix décroissant",
        areaDesc: "Surface décroissante",
      },
      detail: {
        notFound: "Propriété non trouvée",
        back: "Retour aux propriétés",
        share: "Partager",
        descriptionTitle: "Description",
        descriptionParagraph1:
          "Découvrez cette magnifique propriété située au cœur de {{location}}. Offrant des prestations haut de gamme et une architecture moderne, ce bien est idéal pour un investissement locatif ou une résidence secondaire. Profitez d'une vue imprenable et d'un cadre de vie exceptionnel.",
        descriptionParagraph2:
          "Les finitions sont soignées, avec des matériaux nobles importés. La résidence dispose de toutes les commodités nécessaires pour un confort optimal.",
        locationTitle: "Localisation",
        mapPlaceholder: "Carte interactive indisponible dans la maquette",
      },
      amenities: {
        title: "Équipements",
        defaults: [
          "Climatisation",
          "Piscine",
          "Vue Mer",
          "Jardin",
          "Parking",
          "Sécurité 24/7",
          "Wi-Fi",
          "Terrasse",
        ],
      },
      contact: {
        title: "Intéressé par ce bien ?",
        subtitle: "Laissez-nous vos coordonnées, un conseiller vous recontactera sous 24h.",
        placeholders: {
          firstName: "Prénom",
          lastName: "Nom",
          email: "Email",
          phone: "Téléphone",
          message: "Bonjour, je souhaiterais avoir plus d'informations sur ce bien...",
        },
        submit: "Envoyer la demande",
        consent: "En envoyant ce formulaire, vous acceptez notre politique de confidentialité.",
      },
      investment: {
        title: "Projection d'Investissement",
        purchasePrice: "Prix d'acquisition",
        monthlyRent: "Loyer mensuel estimé",
        grossYield: "Rendement Brut",
        disclaimer:
          "Ces chiffres sont des estimations basées sur le marché actuel et ne constituent pas une garantie de revenus.",
      },
    },
    contactPage: {
      title: "Contactez-nous",
      subtitle: "Notre équipe est à votre écoute pour concrétiser votre projet.",
      sectionTitle: "Parlons de votre projet",
      sectionDescription:
        "Que vous souhaitiez acheter, vendre ou investir, nos conseillers sont là pour répondre à toutes vos questions.",
      officesTitle: "Nos Bureaux",
      officesAddress: "Av. Amílcar Cabral\nPraia, Santiago, Cap-Vert",
      phoneTitle: "Téléphone",
      phoneNumber: "+238 999 99 99",
      phoneHours: "Du lundi au vendredi, 9h-18h",
      emailTitle: "Email",
      emailAddress: "contact@luxecv.com",
    },
    blog: {
      tag: "Actualités",
      title: "Le Blog",
      subtitle: "Actualités, conseils et guides pour réussir votre investissement au Cap-Vert.",
      readMore: "Lire la suite",
      back: "Retour au blog",
      articleNotFound: "Article non trouvé",
      share: "Partager",
      keywordsLabel: "Mots-clés :",
      keywords: "Investissement, Immobilier, Tourisme",
      articleHeading: "Un marché en pleine expansion",
      articleQuote:
        "\"Le Cap-Vert représente aujourd'hui l'une des meilleures opportunités d'investissement en Afrique de l'Ouest.\"",
    },
    about: {
      title: "À Propos de Luxe CV",
      subtitle: "Votre partenaire de confiance pour l'immobilier de prestige au Cap-Vert.",
      missionTitle: "Notre Mission",
      missionCopy:
        "Luxe CV est né d'une passion pour le Cap-Vert et d'une volonté d'offrir un service d'excellence aux investisseurs internationaux. Nous sélectionnons rigoureusement les meilleures opportunités immobilières pour vous garantir un investissement sûr et rentable.",
      values: [
        {
          title: "Expertise Locale",
          description: "Une connaissance approfondie du marché cap-verdien et de ses spécificités juridiques.",
        },
        {
          title: "Sélection Premium",
          description: "Un catalogue exclusif de biens haut de gamme, vérifiés et validés par nos experts.",
        },
        {
          title: "Accompagnement Global",
          description: "De la recherche du bien à la gestion locative, nous sommes à vos côtés à chaque étape.",
        },
      ],
    },
    faqPage: {
      title: "Questions Fréquentes",
      subtitle: "Tout ce que vous devez savoir sur l'investissement immobilier au Cap-Vert.",
      items: [
        {
          question: "Est-il possible d'acheter un bien au Cap-Vert en tant qu'étranger ?",
          answer:
            "Oui, absolument. Le Cap-Vert est très ouvert aux investisseurs étrangers. Les droits de propriété sont garantis et le processus est similaire à celui des pays européens.",
        },
        {
          question: "Quels sont les frais d'acquisition ?",
          answer:
            "Les frais d'acquisition (notaire, enregistrement, taxes) s'élèvent généralement à environ 3-5% du prix du bien.",
        },
        {
          question: "Comment se déroule la gestion locative ?",
          answer:
            "Nous proposons un service de gestion locative complet. Nous nous occupons de tout : recherche de locataires, check-in/out, ménage, maintenance. Vous recevez vos revenus locatifs trimestriellement.",
        },
        {
          question: "Quelle est la fiscalité sur les revenus locatifs ?",
          answer:
            "La fiscalité est avantageuse avec un impôt unique sur les revenus locatifs (IUR) de 20%, après déduction des charges d'entretien (jusqu'à 30% des revenus).",
        },
      ],
    },
    legal: {
      privacyTitle: "Politique de Confidentialité",
      privacyText: "Détails sur la collecte et l'utilisation de vos données...",
      termsTitle: "Mentions Légales",
      termsText: "Informations légales sur l'éditeur du site...",
      cookiesTitle: "Gestion des Cookies",
      cookiesText: "Explication sur l'utilisation des cookies...",
    },
    notFound: {
      title: "Page non trouvée",
      message: "Désolé, la page que vous recherchez n'existe pas ou a été déplacée.",
      cta: "Retour à l'accueil",
    },
    destinationsPage: {
      tag: "Évasion",
      title: "Nos Destinations",
      subtitle: "Explorez les îles du Cap-Vert et trouvez le lieu idéal pour votre investissement.",
      discover: "Découvrir",
      detail: {
        notFound: "Destination non trouvée",
        back: "Retour aux destinations",
        aboutTitle: "À propos de {{name}}",
        highlightsTitle: "Points Forts",
        practicalTitle: "Infos Pratiques",
        airport: "Aéroport",
        flightDuration: "Durée de vol",
        bestSeason: "Meilleure saison",
        propertiesTitle: "Propriétés à {{name}}",
        viewAll: "Voir tout",
        empty: "Aucune propriété disponible pour le moment à {{name}}.",
      },
    },
    investPage: {
      tag: "Investissement",
      title: "Votre Patrimoine, Horizon Océan",
      subtitle:
        "Alliez rentabilité et art de vivre dans une destination d'avenir. Le Cap-Vert, votre nouvelle terre d'opportunités.",
      ctaTitle: "Prêt à lancer votre projet ?",
      ctaText:
        "Nos conseillers sont à votre disposition pour étudier votre projet et vous proposer les meilleures opportunités.",
      ctaButton: "Demander une consultation gratuite",
    },
    commission: {
      commissions: "Commissions",
      myCommissions: "Mes Commissions",
      trackYourEarnings: "Suivez vos gains et commissions",
      recordSale: "Enregistrer une Vente",
      property: "Propriété",
      listPrice: "Prix affiché",
      salePrice: "Prix de vente",
      commissionRate: "Taux de commission",
      amount: "Montant",
      saleDate: "Date de vente",
      status: "Statut",
      calculation: "Calcul",
      yourCommission: "Votre commission",
      confirmSale: "Confirmer la vente",
      notes: "Notes",
      notesPlaceholder: "Notes optionnelles sur cette vente...",
      fillAllFields: "Veuillez remplir tous les champs",
      totalCommissions: "Total des commissions",
      pendingPayment: "En attente de paiement",
      paid: "Payé",
      pending: "En attente",
      markAsPaid: "Marquer comme payé",
      markedAsPaid: "Commission marquée comme payée",
      markedAsPending: "Commission marquée comme en attente",
      noCommissions: "Aucune commission trouvée",
      export: "Exporter",
      exportToCSV: "Export en CSV en cours...",
      exportSuccess: "Export réussi",
      totalSales: "Ventes totales",
      totalEarned: "Total gagné",
      received: "Reçu",
      allTime: "Depuis le début",
      transactions: "transactions",
      recentActivity: "Activité récente",
      noRecentSales: "Aucune vente récente",
      viewAllCommissions: "Voir toutes les commissions",
      completedSales: "ventes réalisées",
      rate: "Taux",
    },
    services: {
      title: "Services Professionnels",
      subtitle: "Des experts à vos côtés pour réussir votre investissement",
      hero: {
        title: "Services Professionnels",
        subtitle: "Banques, avocats et conseillers : les meilleurs experts pour réussir votre investissement au Cap-Vert."
      },
      section: {
        title: "Des experts pour sécuriser votre projet",
        subtitle: "Nous avons sélectionné les meilleurs partenaires bancaires, juridiques et conseils pour vous accompagner."
      },
      types: {
        bank: "Banques Partenaires",
        consultant: "Cabinet de Conseil",
        lawyer: "Avocats Spécialisés"
      },
      filters: {
        all: "Tous",
        bank: "Banques",
        consultant: "Conseil",
        lawyer: "Avocats"
      },
      descriptions: {
        bank: "Financements adaptés aux non-résidents avec taux préférentiels",
        consultant: "Accompagnement personnalisé pour la diaspora cap-verdienne",
        lawyer: "Sécurité juridique et expertise en droit immobilier local"
      },
      commission: {
        rate: "Commission",
        earned: "Commissions gagnées",
        pending: "En attente",
        paid: "Payées",
        noFees: "Sans frais pour vous",
        explanation: "Nos partenaires nous rémunèrent directement en tant qu'apporteur d'affaires. Vous bénéficiez de tarifs négociés."
      },
      lead: {
        form: {
          title: "Demander un devis gratuit",
          name: "Votre nom",
          email: "Email",
          phone: "Téléphone",
          amount: "Montant souhaité",
          country: "Pays de résidence",
          message: "Message (optionnel)",
          submit: "Envoyer la demande",
          consent: "J'accepte que mes données soient transmises au partenaire"
        },
        tracking: {
          code: "Code de suivi",
          status: "Statut",
          created: "Créé le",
          expectedCommission: "Commission estimée"
        }
      },
      stats: {
        totalPartners: "{count} partenaires de confiance",
        satisfiedClients: "{count} clients satisfaits",
        partners: "{count} partenaires certifiés",
        clients: "Plus de 500 clients accompagnés",
        savedMoney: "{amount}€ économisés pour nos clients"
      },
      cta: {
        viewPartners: "Voir les partenaires",
        requestQuote: "Demander un devis",
        becomePartner: "Devenir partenaire",
        viewDetails: "Voir détails",
        contactService: "Contacter",
        viewAll: "Voir tous les experts",
        start: "Commencer mes démarches",
        partner: {
          title: "Vous êtes un professionnel ?",
          desc: "Rejoignez notre réseau de partenaires certifiés et développez votre clientèle internationale."
        }
      },
      howItWorks: {
        title: "Comment ça marche ?",
      },
      list: {
        results: "partenaires disponibles"
      }
    },
    leads: {
      services: {
        title: "Suivi des Apporteurs"
      },
      search: {
        placeholder: "Rechercher par nom ou code..."
      }
    },
    dashboard: {
      services: {
        title: "Services & Apporteur",
        subtitle: "Suivez vos commissions partenaires",
        activeLeads: "Leads Actifs",
        pendingCommissions: "Commissions à venir"
      }
    },
  },
  en: {
    common: {
      brand: "Afrika Property",
      viewAll: "View all",
      search: "Search",
      back: "Back",
      backToDashboard: "Back to dashboard",
      close: "Close",
      learnMore: "Learn more",
      send: "Send",
      language: "Language",
      emailOrPhone: "Email or phone",
      firstName: "First name",
      lastName: "Last name",
      project: "Your Project",
      consent: "By clicking send, you agree to be contacted by our team.",
      watchFilm: "Watch the film",
      cancel: "Cancel",
      optional: "optional",
      today: "Today",
      yesterday: "Yesterday",
      daysAgo: "days ago",
      selected: "selected",
      all: "All",
      filter: "Filter",
      actions: "Actions",
    },
    nav: {
      buy: "Buy",
      invest: "Invest",
      promoters: "Developers",
      destinations: "Destinations",
      blog: "Blog",
      favorites: "Favorites",
      profile: "My Profile",
      services: "Services",
      about: "About",
      contact: "Contact",
      promoterSpace: "Pro Area",
    },
    promoter: {
      login: {
        title: "Promoter Area",
        subtitle: "Log in to manage your listings",
        email: "Email address",
        emailPlaceholder: "Email address",
        password: "Password",
        passwordPlaceholder: "Password",
        rememberMe: "Remember me",
        forgotPassword: "Forgot password?",
        submit: "Log in",
        submitting: "Logging in...",
        orEmail: "Or with your email",
        google: "Sign in with Google",
        apple: "Sign in with Apple",
        noAccount: "No account yet?",
        becomePartner: "Become a partner",
        success: "Login successful",
        error: "Login error",
      },
    },
    footer: {
      description:
        "The first premium real estate portal dedicated to Cape Verde. Discover exceptional properties and unique investment opportunities.",
      navigation: "Navigation",
      contact: "Contact",
      links: {
        properties: "Properties for sale",
        invest: "Invest in Cape Verde",
        destinations: "Our destinations",
        blog: "The Blog",
      },
      address: "Av. Amílcar Cabral, Praia, Santiago, Cape Verde",
      phone: "+238 999 99 99",
      email: "contact@luxecv.com",
      rights: "All rights reserved.",
      legal: "Legal notice",
      privacy: "Privacy",
      cookies: "Cookies",
    },
    promotion: {
      title: "Promotion Options",
      totalToPay: "Total to pay",
      payAndPublish: "Pay and Publish",
      publish: "Publish listing",
      options: {
        "boost-7": {
          label: "7-Day Boost",
          description: "Bump your listing to the top every day for 7 days.",
          duration: "7 days",
        },
        "boost-30": {
          label: "30-Day Boost",
          description: "Maximum visibility with a daily bump for 30 days.",
          duration: "30 days",
        },
        pinned: {
          label: "Pinned Listing",
          description: "Your listing stays pinned at the top of search results.",
        },
        homepage: {
          label: "Homepage Feature",
          description: "Appear in the 'Featured' section of the homepage for high visibility.",
        },
      },
    },
    createListing: {
      backToDashboard: "Back to dashboard",
      title: "Create a new listing",
      subtitle: "Fill in the information below to publish your property.",
      general: {
        title: "General Information",
        listingTitle: "Listing Title",
        listingTitlePlaceholder: "Ex: Luxury Villa with Sea View",
        transactionType: "Transaction Type",
        propertyType: "Property Type",
        price: "Price (€)",
        surface: "Surface (sqm)",
        types: {
          sale: "Sale",
          apartment: "Apartment",
          house: "House / Villa",
          land: "Land",
          commercial: "Commercial Space"
        }
      },
      location: {
        title: "Location",
        island: "Island",
        city: "City / District",
        cityPlaceholder: "Ex: Santa Maria",
        address: "Exact Address (hidden)",
        addressPlaceholder: "Street, Number...",
      },
      details: {
        title: "Details & Amenities",
        bedrooms: "Bedrooms",
        bathrooms: "Bathrooms",
        amenities: "Amenities",
        description: "Description",
        descriptionPlaceholder: "Describe your property in detail...",
        list: {
          pool: "Pool",
          garden: "Garden",
          garage: "Garage",
          seaview: "Sea View",
          ac: "Air Conditioning",
          furnished: "Furnished",
          elevator: "Elevator",
          security: "Security"
        }
      },
      media: {
        title: "Photos & Documents",
        dragDrop: "Click or drag your photos here",
        format: "JPG, PNG up to 5MB",
        documents: "Legal Documents (Optional)",
        docTypes: "Plans, diagnostics, etc.",
        add: "Add"
      },
      draft: "Save as Draft"
    },
    home: {
      hero: {
        title: "Exceptional Real Estate",
        accent: "in Cape Verde",
        subtitle:
          "Discover an exclusive selection of luxury properties, beachfront villas, and unique investment opportunities.",
        locationLabel: "Location",
        locationPlaceholder: "All islands",
        typeLabel: "Property type",
        typeAny: "All types",
        typeVilla: "Villa",
        typeApartment: "Apartment",
        typeLand: "Land",
        budgetLabel: "Budget",
        budgetAny: "Any budget",
        budget1: "100k - 250k €",
        budget2: "250k - 500k €",
        budget3: "500k € +",
        search: "Search",
        islands: {
          sal: "Sal",
          boaVista: "Boa Vista",
          santiago: "Santiago",
          saoVicente: "São Vicente",
          santoAntao: "Santo Antão",
          maio: "Maio",
          fogo: "Fogo",
          saoNicolau: "São Nicolau",
          brava: "Brava",
        },
      },
      featured: {
        tag: "Exclusive Selection",
        title: "Featured Properties",
        viewCollection: "See the full collection",
      },
      promoter: {
        tag: "Developer Area",
        title: "Give your projects",
        accent: "global",
        suffix: "reach",
        description:
          "Join the Luxe CV network. Publish your listings, reach qualified investors, and manage everything from a powerful dashboard.",
        becomePartner: "Become a partner",
        login: "Sign in",
      },
      invest: {
        tag: "Opportunity",
        title: "Why invest",
        accent: "in Cape Verde?",
        description:
          "An exceptional destination combining paradise living, political stability, and unique economic opportunities.",
        cta: "Discover the benefits",
        benefits: {
          yieldTitle: "Rental Yield",
          yieldDesc:
            "Attractive yields between 5% and 9% driven by strong tourist demand.",
          safetyTitle: "Stability & Safety",
          safetyDesc:
            "A stable political environment and full legal protection for foreign investors.",
          taxTitle: "Gentle Taxation",
          taxDesc:
            "A single 20% tax on rental income and multiple tax treaties to avoid double taxation.",
          geoTitle: "Strategic Location",
          geoDesc:
            "A key crossroads between Europe, Africa, and the Americas.",
        },
      },
      video: {
        tag: "Discovery",
        title: "The soul of Cape Verde",
        watch: "Watch the film",
        close: "Close",
      },
      map: {
        tag: "Exploration",
        title: "Choose your destination",
        description:
          "Each island has its own character. Hover over the map (or tap) to discover opportunities in every region.",
        price: "Average price",
        vibe: "Vibe",
        explore: "Explore",
        legendTitle: "Investor guide",
        legendText: "Hover over the dots to quickly compare investment zones.",
        islands: {
          sal: { vibe: "Tourism & Beaches", price: "€2,200/sqm" },
          boavista: { vibe: "Dunes & Nature", price: "€1,900/sqm" },
          santiago: { vibe: "Capital & Business", price: "€1,500/sqm" },
          saovicente: { vibe: "Culture & Music", price: "€1,700/sqm" },
        },
      },
      destinations: {
        tag: "Explore",
        title: "Signature Destinations",
        viewAll: "See all islands",
        propertiesCount: "properties",
        cards: {
          sal: {
            description: "The island of endless sun and beaches.",
            tag: "Seaside",
          },
          boaVista: {
            description: "White sand dunes as far as the eye can see.",
            tag: "Nature",
          },
          santiago: {
            description: "The cultural and historical heart of the archipelago.",
            tag: "Culture",
          },
          saoVicente: {
            description: "The musical and festive soul of Cape Verde.",
            tag: "Art de vivre",
          },
        },
      },
      faq: {
        tag: "Frequently Asked Questions",
        title: "Everything about your investment",
        description: "Clear answers to help you move forward with confidence.",
        items: [
          {
            question: "Can foreigners buy property?",
            answer:
              "Absolutely. Cape Verde guarantees full ownership to foreign investors with the same rights and legal protections as nationals. There are no restrictions on purchasing real estate.",
          },
          {
            question: "What about taxes and fiscal rules?",
            answer:
              "Taxation is attractive. Rental income is taxed at a flat 20% rate. Annual property tax (IUP) is around 1.5% of the assessed value. There are also tax treaties with many countries to avoid double taxation.",
          },
          {
            question: "How do I manage my property remotely?",
            answer:
              "That's our specialty. We connect you with trusted property managers who handle everything: marketing, check-in/out, cleaning, and maintenance. You collect rent without managing day-to-day tasks.",
          },
          {
            question: "What legal guarantees are in place?",
            answer:
              "Cape Verde's legal system is based on civil law (similar to Portugal and France). All transactions are notarized and recorded in the Land Registry (Registo Predial), ensuring an indisputable title.",
          },
          {
            question: "I'm a developer. How can I showcase my projects?",
            answer:
              "We carefully select our partners. If you offer exceptional properties, you can submit your file via our {{promoterSpace}}. Once validated, you will access our international investor clientele.",
          },
        ],
      },
      contactBanner: {
        tag: "Complimentary Consultation",
        title: "Your vision, our expertise.",
        description:
          "Let's discuss your real estate ambitions in Cape Verde. Our project directors are available for a tailored review.",
        placeholders: {
          firstName: "Your first name",
          lastName: "Your last name",
          project: "I want to invest in...",
        },
        submit: "Send my request",
      },
    },
    property: {
      badges: {
        new: "New",
        exclusive: "Exclusive",
        sold: "Sold",
        sale: "For Sale",
      },
      metrics: {
        bedrooms: "Bedrooms",
        bathrooms: "Bathrooms",
        area: "Area",
        areaUnit: "sqm",
      },
      list: {
        resultsLabel: "results",
        emptyTitle: "No properties found",
        emptyDescription: "Try adjusting your search filters.",
        pagination: {
          previous: "Previous",
          next: "Next",
        },
      },
      sort: {
        label: "Sort by",
        newest: "Newest",
        priceAsc: "Price: Low to High",
        priceDesc: "Price: High to Low",
        areaDesc: "Area: Largest first",
      },
      detail: {
        notFound: "Property not found",
        back: "Back to properties",
        share: "Share",
        descriptionTitle: "Description",
        descriptionParagraph1:
          "Discover this beautiful property located in the heart of {{location}}. Offering high-end amenities and modern architecture, it is perfect for rental investment or a second home. Enjoy stunning views and an exceptional living environment.",
        descriptionParagraph2:
          "Finishes are meticulous with premium imported materials. The residence includes all the conveniences needed for optimal comfort.",
        locationTitle: "Location",
        mapPlaceholder: "Interactive map not available in the mockup",
      },
      amenities: {
        title: "Amenities",
        defaults: [
          "Air conditioning",
          "Pool",
          "Sea view",
          "Garden",
          "Parking",
          "24/7 security",
          "Wi-Fi",
          "Terrace",
        ],
      },
      contact: {
        title: "Interested in this property?",
        subtitle: "Leave us your details and an advisor will contact you within 24h.",
        placeholders: {
          firstName: "First name",
          lastName: "Last name",
          email: "Email",
          phone: "Phone",
          message: "Hello, I would like more information about this property...",
        },
        submit: "Send request",
        consent: "By sending this form, you accept our privacy policy.",
      },
      investment: {
        title: "Investment Projection",
        purchasePrice: "Purchase price",
        monthlyRent: "Estimated monthly rent",
        grossYield: "Gross yield",
        disclaimer:
          "These figures are estimates based on the current market and do not constitute guaranteed returns.",
      },
    },
    contactPage: {
      title: "Contact us",
      subtitle: "Our team is here to bring your project to life.",
      sectionTitle: "Let's discuss your project",
      sectionDescription:
        "Whether you want to buy, sell, or invest, our advisors are here to answer all your questions.",
      officesTitle: "Our Offices",
      officesAddress: "Av. Amílcar Cabral\nPraia, Santiago, Cape Verde",
      phoneTitle: "Phone",
      phoneNumber: "+238 999 99 99",
      phoneHours: "Monday to Friday, 9am-6pm",
      emailTitle: "Email",
      emailAddress: "contact@luxecv.com",
    },
    blog: {
      tag: "News",
      title: "The Blog",
      subtitle: "News, tips, and guides to succeed with your Cape Verde investment.",
      readMore: "Read more",
      back: "Back to blog",
      articleNotFound: "Article not found",
      share: "Share",
      keywordsLabel: "Keywords:",
      keywords: "Investment, Real estate, Tourism",
      articleHeading: "A market on the rise",
      articleQuote:
        "\"Cape Verde is now one of the best investment opportunities in West Africa.\"",
    },
    about: {
      title: "About Luxe CV",
      subtitle: "Your trusted partner for premium real estate in Cape Verde.",
      missionTitle: "Our Mission",
      missionCopy:
        "Luxe CV was born from a passion for Cape Verde and the desire to offer excellence to international investors. We carefully select the best opportunities to guarantee a secure and profitable investment.",
      values: [
        {
          title: "Local Expertise",
          description: "Deep knowledge of the Cape Verdean market and its legal specificities.",
        },
        {
          title: "Premium Selection",
          description: "An exclusive catalogue of high-end properties, vetted and validated by our experts.",
        },
        {
          title: "End-to-End Support",
          description: "From property search to rental management, we are by your side at every step.",
        },
      ],
    },
    faqPage: {
      title: "Frequently Asked Questions",
      subtitle: "Everything you need to know about real estate investment in Cape Verde.",
      items: [
        {
          question: "Is it possible to buy property in Cape Verde as a foreigner?",
          answer:
            "Yes, absolutely. Cape Verde is very open to foreign investors. Property rights are guaranteed and the process is similar to European countries.",
        },
        {
          question: "What are the acquisition fees?",
          answer:
            "Acquisition costs (notary, registration, taxes) are generally around 3-5% of the property price.",
        },
        {
          question: "How is rental management handled?",
          answer:
            "We offer full rental management: tenant search, check-in/out, cleaning, maintenance. You receive your rental income quarterly.",
        },
        {
          question: "What is the taxation on rental income?",
          answer:
            "Taxation is favorable with a single rental income tax (IUR) of 20% after deducting maintenance costs (up to 30% of income).",
        },
      ],
    },
    legal: {
      privacyTitle: "Privacy Policy",
      privacyText: "Details about how we collect and use your data...",
      termsTitle: "Legal Notice",
      termsText: "Legal information about the site publisher...",
      cookiesTitle: "Cookie Management",
      cookiesText: "Explanation of how we use cookies...",
    },
    notFound: {
      title: "Page not found",
      message: "Sorry, the page you are looking for doesn't exist or has been moved.",
      cta: "Back to home",
    },
    destinationsPage: {
      tag: "Getaway",
      title: "Our Destinations",
      subtitle: "Explore the Cape Verde islands and find the ideal place for your investment.",
      discover: "Discover",
      detail: {
        notFound: "Destination not found",
        back: "Back to destinations",
        aboutTitle: "About {{name}}",
        highlightsTitle: "Highlights",
        practicalTitle: "Practical Info",
        airport: "Airport",
        flightDuration: "Flight time",
        bestSeason: "Best season",
        propertiesTitle: "Properties in {{name}}",
        viewAll: "View all",
        empty: "No properties available for now in {{name}}.",
      },
    },
    investPage: {
      tag: "Investment",
      title: "Your Portfolio, Ocean Horizon",
      subtitle:
        "Combine profitability and lifestyle in a destination of the future. Cape Verde, your new land of opportunity.",
      ctaTitle: "Ready to start your project?",
      ctaText:
        "Our advisors are available to study your project and present the best opportunities.",
      ctaButton: "Request a free consultation",
    },
    commission: {
      commissions: "Commissions",
      myCommissions: "My Commissions",
      trackYourEarnings: "Track your earnings and commissions",
      recordSale: "Record Sale",
      property: "Property",
      listPrice: "List price",
      salePrice: "Sale price",
      commissionRate: "Commission rate",
      amount: "Amount",
      saleDate: "Sale date",
      status: "Status",
      calculation: "Calculation",
      yourCommission: "Your commission",
      confirmSale: "Confirm sale",
      notes: "Notes",
      notesPlaceholder: "Optional notes about this sale...",
      fillAllFields: "Please fill all fields",
      totalCommissions: "Total commissions",
      pendingPayment: "Pending payment",
      paid: "Paid",
      pending: "Pending",
      markAsPaid: "Mark as paid",
      markedAsPaid: "Commission marked as paid",
      markedAsPending: "Commission marked as pending",
      noCommissions: "No commissions found",
      export: "Export",
      exportToCSV: "Exporting to CSV...",
      exportSuccess: "Export successful",
      totalSales: "Total sales",
      totalEarned: "Total earned",
      received: "Received",
      allTime: "All time",
      transactions: "transactions",
      recentActivity: "Recent activity",
      noRecentSales: "No recent sales",
      viewAllCommissions: "View all commissions",
      completedSales: "completed sales",
      rate: "Rate",
    },
  },
  pt: { // Inserting into PT
    common: {
      brand: "Afrika Property",
      viewAll: "Ver tudo",
      search: "Pesquisar",
      back: "Voltar",
      close: "Fechar",
      learnMore: "Saber mais",
      send: "Enviar",
      language: "Idioma",
      emailOrPhone: "Email ou telefone",
      firstName: "Nome",
      lastName: "Apelido",
      project: "O Seu Projeto",
      consent: "Ao clicar em enviar, aceita ser contactado pela nossa equipa.",
      watchFilm: "Ver o filme",
    },
    nav: {
      buy: "Comprar",
      invest: "Investir",
      promoters: "Promotores",
      services: "Serviços",
      destinations: "Destinos",
      blog: "Blog",
      favorites: "Favoritos",
      profile: "Meu Perfil",
      about: "Sobre",
      contact: "Contacto",
      promoterSpace: "Espaço Promotor",
    },
    promoter: {
      login: {
        title: "Espaço Promotor",
        subtitle: "Inicie sessão para gerir os seus anúncios",
        email: "Endereço de email",
        emailPlaceholder: "Endereço de email",
        password: "Palavra-passe",
        passwordPlaceholder: "Palavra-passe",
        rememberMe: "Lembrar-me",
        forgotPassword: "Esqueceu-se da palavra-passe?",
        submit: "Entrar",
        submitting: "A entrar...",
        orEmail: "Ou com o seu email",
        google: "Entrar com Google",
        apple: "Entrar com Apple",
        noAccount: "Ainda não tem conta?",
        becomePartner: "Tornar-se parceiro",
        success: "Login com sucesso",
        error: "Erro de login",
      },
    },
    footer: {
      description:
        "O primeiro portal imobiliário premium dedicado a Cabo Verde. Descubra propriedades de exceção e oportunidades únicas de investimento.",
      navigation: "Navegação",
      contact: "Contacto",
      links: {
        properties: "Propriedades à venda",
        invest: "Investir em Cabo Verde",
        destinations: "Os nossos destinos",
        blog: "Blog",
      },
      address: "Av. Amílcar Cabral, Praia, Santiago, Cabo Verde",
      phone: "+238 999 99 99",
      email: "contact@luxecv.com",
      rights: "Todos os direitos reservados.",
      legal: "Aviso legal",
      privacy: "Privacidade",
      cookies: "Cookies",
    },
    promotion: {
      title: "Opções de Destaque",
      totalToPay: "Total a pagar",
      payAndPublish: "Pagar e Publicar",
      publish: "Publicar anúncio",
      options: {
        "boost-7": {
          label: "Destaque 7 dias",
          description: "Coloque o seu anúncio no topo da lista todos os dias durante 7 dias.",
          duration: "7 dias",
        },
        "boost-30": {
          label: "Destaque 30 dias",
          description: "Visibilidade máxima com destaque diário durante 30 dias.",
          duration: "30 dias",
        },
        pinned: {
          label: "Anúncio fixado",
          description: "O seu anúncio permanece fixo no topo dos resultados de pesquisa.",
        },
        homepage: {
          label: "Destaque na página inicial",
          description: "Apareça na secção 'Em Destaque' da página inicial para alta visibilidade.",
        },
      },
    },
    createListing: {
      backToDashboard: "Voltar ao painel",
      title: "Criar novo anúncio",
      subtitle: "Preencha as informações abaixo para publicar o seu imóvel.",
      general: {
        title: "Informações Gerais",
        listingTitle: "Título do anúncio",
        listingTitlePlaceholder: "Ex: Villa de luxo com vista mar",
        transactionType: "Tipo de transação",
        propertyType: "Tipo de imóvel",
        price: "Preço (€)",
        surface: "Área (m²)",
        types: {
          sale: "Venda",
          apartment: "Apartamento",
          house: "Casa / Villa",
          land: "Terreno",
          commercial: "Espaço comercial"
        }
      },
      location: {
        title: "Localização",
        island: "Ilha",
        city: "Cidade / Bairro",
        cityPlaceholder: "Ex: Santa Maria",
        address: "Morada exata (oculta)",
        addressPlaceholder: "Rua, número...",
      },
      details: {
        title: "Detalhes & Comodidades",
        bedrooms: "Quartos",
        bathrooms: "Casas de banho",
        amenities: "Comodidades",
        description: "Descrição",
        descriptionPlaceholder: "Descreva o seu imóvel em detalhe...",
        list: {
          pool: "Piscina",
          garden: "Jardim",
          garage: "Garagem",
          seaview: "Vista Mar",
          ac: "Ar Condicionado",
          furnished: "Mobilado",
          elevator: "Elevador",
          security: "Segurança"
        }
      },
      media: {
        title: "Fotos & Documentos",
        dragDrop: "Clique ou arraste as suas fotos aqui",
        format: "JPG, PNG até 5MB",
        documents: "Documentos Legais (Opcional)",
        docTypes: "Plantas, diagnósticos, etc.",
        add: "Adicionar"
      },
      draft: "Guardar como rascunho"
    },
    home: {
      hero: {
        title: "Imobiliário de Exceção",
        accent: "em Cabo Verde",
        subtitle:
          "Descubra uma seleção exclusiva de propriedades de luxo, vilas à beira-mar e oportunidades únicas de investimento.",
        locationLabel: "Localização",
        locationPlaceholder: "Todas as ilhas",
        typeLabel: "Tipo de imóvel",
        typeAny: "Todos os tipos",
        typeVilla: "Moradia",
        typeApartment: "Apartamento",
        typeLand: "Terreno",
        budgetLabel: "Orçamento",
        budgetAny: "Qualquer orçamento",
        budget1: "100k - 250k €",
        budget2: "250k - 500k €",
        budget3: "500k € +",
        search: "Pesquisar",
        islands: {
          sal: "Sal",
          boaVista: "Boa Vista",
          santiago: "Santiago",
          saoVicente: "São Vicente",
          santoAntao: "Santo Antão",
          maio: "Maio",
          fogo: "Fogo",
          saoNicolau: "São Nicolau",
          brava: "Brava",
        },
      },
      featured: {
        tag: "Seleção Exclusiva",
        title: "Propriedades em Destaque",
        viewCollection: "Ver a coleção completa",
      },
      promoter: {
        tag: "Espaço Promotor",
        title: "Dê aos seus projetos",
        accent: "alcance internacional",
        suffix: "",
        description:
          "Junte-se à rede Luxe CV. Publique os seus imóveis, alcance investidores qualificados e faça a gestão num painel poderoso.",
        becomePartner: "Tornar-se parceiro",
        login: "Iniciar sessão",
      },
      invest: {
        tag: "Oportunidade",
        title: "Por que investir",
        accent: "em Cabo Verde?",
        description:
          "Um destino excecional que alia qualidade de vida paradisíaca, estabilidade política e oportunidades económicas únicas.",
        cta: "Descobrir as vantagens",
        benefits: {
          yieldTitle: "Rendimento de Arrendamento",
          yieldDesc:
            "Rendimentos atrativos entre 5% e 9% impulsionados pela forte procura turística.",
          safetyTitle: "Estabilidade e Segurança",
          safetyDesc:
            "Um ambiente político estável e proteção jurídica total para investidores estrangeiros.",
          taxTitle: "Fiscalidade Suave",
          taxDesc:
            "Imposto único de 20% sobre rendimentos de arrendamento e vários acordos para evitar dupla tributação.",
          geoTitle: "Posição Estratégica",
          geoDesc:
            "Um cruzamento chave entre a Europa, África e Américas.",
        },
      },
      video: {
        tag: "Descoberta",
        title: "A alma de Cabo Verde",
        watch: "Ver o filme",
        close: "Fechar",
      },
      map: {
        tag: "Exploração",
        title: "Escolha o seu destino",
        description:
          "Cada ilha tem a sua personalidade. Passe o rato (ou toque) para descobrir oportunidades em cada região.",
        price: "Preço médio",
        vibe: "Ambiente",
        explore: "Explorar",
        legendTitle: "Guia do investidor",
        legendText: "Passe o rato pelos pontos para comparar rapidamente as zonas de investimento.",
        islands: {
          sal: { vibe: "Turismo e Praias", price: "2 200 €/m²" },
          boavista: { vibe: "Dunas e Natureza", price: "1 900 €/m²" },
          santiago: { vibe: "Capital e Negócios", price: "1 500 €/m²" },
          saovicente: { vibe: "Cultura e Música", price: "1 700 €/m²" },
        },
      },
      destinations: {
        tag: "Explorar",
        title: "Destinos de Referência",
        viewAll: "Ver todas as ilhas",
        propertiesCount: "propriedades",
        cards: {
          sal: {
            description: "A ilha do sol eterno e de praias infinitas.",
            tag: "Balnear",
          },
          boaVista: {
            description: "Dunas de areia branca sem fim.",
            tag: "Natureza",
          },
          santiago: {
            description: "O coração cultural e histórico do arquipélago.",
            tag: "Cultura",
          },
          saoVicente: {
            description: "A alma musical e festiva de Cabo Verde.",
            tag: "Arte de viver",
          },
        },
      },
      faq: {
        tag: "Perguntas Frequentes",
        title: "Tudo sobre o seu investimento",
        description: "Respostas claras para avançar com confiança no seu projeto.",
        items: [
          {
            question: "Estrangeiros podem comprar?",
            answer:
              "Sim. Cabo Verde garante plena propriedade a investidores estrangeiros, com os mesmos direitos e proteções legais que os nacionais. Não há restrições para comprar imóveis.",
          },
          {
            question: "Quais são os impostos e fiscalidade?",
            answer:
              "A tributação é atrativa. Os rendimentos de arrendamento são taxados a uma taxa fixa de 20%. O imposto anual sobre propriedade (IUP) ronda 1,5% do valor fiscal. Existem ainda acordos para evitar dupla tributação com muitos países.",
          },
          {
            question: "Como gerir o imóvel à distância?",
            answer:
              "É a nossa especialidade. Ligamo-lo a empresas de gestão de confiança que tratam de tudo: marketing, check-in/out, limpeza e manutenção. Recebe as rendas sem gerir o dia-a-dia.",
          },
          {
            question: "Quais as garantias jurídicas?",
            answer:
              "O sistema jurídico cabo-verdiano baseia-se no direito civil (semelhante a Portugal e França). Todas as transações são feitas em cartório e registadas no Registo Predial, garantindo-lhe um título indiscutível.",
          },
          {
            question: "Sou promotor, como divulgar os meus projetos?",
            answer:
              "Selecionamos os nossos parceiros com rigor. Se propõe imóveis de exceção, pode submeter o seu dossiê através do {{promoterSpace}}. Depois de validado, terá acesso à nossa carteira de investidores internacionais.",
          },
        ],
      },
      contactBanner: {
        tag: "Consulta Oferecida",
        title: "A sua visão, a nossa expertise.",
        description:
          "Vamos falar das suas ambições imobiliárias em Cabo Verde. Os nossos diretores de projeto estão disponíveis para um estudo personalizado.",
        placeholders: {
          firstName: "O seu nome",
          lastName: "O seu apelido",
          project: "Quero investir em...",
        },
        submit: "Enviar o meu pedido",
      },
    },
    property: {
      badges: {
        new: "Novo",
        exclusive: "Exclusivo",
        sold: "Vendido",
        sale: "Compra",
      },
      metrics: {
        bedrooms: "Quartos",
        bathrooms: "Casas de banho",
        area: "Área",
        areaUnit: "m²",
      },
      list: {
        resultsLabel: "resultados",
        emptyTitle: "Nenhuma propriedade encontrada",
        emptyDescription: "Tente ajustar os seus filtros de pesquisa.",
        pagination: {
          previous: "Anterior",
          next: "Seguinte",
        },
      },
      sort: {
        label: "Ordenar por",
        newest: "Novidades",
        priceAsc: "Preço crescente",
        priceDesc: "Preço decrescente",
        areaDesc: "Área: maior primeiro",
      },
      detail: {
        notFound: "Propriedade não encontrada",
        back: "Voltar às propriedades",
        share: "Partilhar",
        descriptionTitle: "Descrição",
        descriptionParagraph1:
          "Descubra esta magnífica propriedade localizada no coração de {{location}}. Com acabamentos premium e arquitetura moderna, é ideal para investimento de arrendamento ou segunda residência. Aproveite uma vista incrível e um estilo de vida excecional.",
        descriptionParagraph2:
          "Os acabamentos são cuidados, com materiais nobres importados. A residência tem todas as comodidades necessárias para máximo conforto.",
        locationTitle: "Localização",
        mapPlaceholder: "Mapa interativo indisponível na maquete",
      },
      amenities: {
        title: "Comodidades",
        defaults: [
          "Ar condicionado",
          "Piscina",
          "Vista mar",
          "Jardim",
          "Estacionamento",
          "Segurança 24/7",
          "Wi-Fi",
          "Terraço",
        ],
      },
      contact: {
        title: "Interessado neste imóvel?",
        subtitle: "Deixe-nos os seus dados e um consultor entrará em contacto em 24h.",
        placeholders: {
          firstName: "Nome",
          lastName: "Apelido",
          email: "Email",
          phone: "Telefone",
          message: "Olá, gostaria de mais informações sobre este imóvel...",
        },
        submit: "Enviar pedido",
        consent: "Ao enviar este formulário, aceita a nossa política de privacidade.",
      },
      investment: {
        title: "Projeção de Investimento",
        purchasePrice: "Preço de aquisição",
        monthlyRent: "Renda mensal estimada",
        grossYield: "Rentabilidade bruta",
        disclaimer:
          "Estes números são estimativas baseadas no mercado atual e não garantem rendimentos.",
      },
    },
    contactPage: {
      title: "Contacte-nos",
      subtitle: "A nossa equipa está disponível para concretizar o seu projeto.",
      sectionTitle: "Falemos do seu projeto",
      sectionDescription:
        "Quer comprar, vender ou investir, os nossos conselheiros estão aqui para responder a todas as suas perguntas.",
      officesTitle: "Os Nossos Escritórios",
      officesAddress: "Av. Amílcar Cabral\nPraia, Santiago, Cabo Verde",
      phoneTitle: "Telefone",
      phoneNumber: "+238 999 99 99",
      phoneHours: "De segunda a sexta, 9h-18h",
      emailTitle: "Email",
      emailAddress: "contact@luxecv.com",
    },
    blog: {
      tag: "Atualidades",
      title: "O Blog",
      subtitle: "Notícias, conselhos e guias para ter sucesso ao investir em Cabo Verde.",
      readMore: "Ler mais",
      back: "Voltar ao blog",
      articleNotFound: "Artigo não encontrado",
      share: "Partilhar",
      keywordsLabel: "Palavras-chave:",
      keywords: "Investimento, Imobiliário, Turismo",
      articleHeading: "Um mercado em forte expansão",
      articleQuote:
        "\"Cabo Verde representa hoje uma das melhores oportunidades de investimento na África Ocidental.\"",
    },
    about: {
      title: "Sobre a Luxe CV",
      subtitle: "O seu parceiro de confiança para imobiliário de prestígio em Cabo Verde.",
      missionTitle: "A Nossa Missão",
      missionCopy:
        "A Luxe CV nasceu da paixão por Cabo Verde e da vontade de oferecer um serviço de excelência a investidores internacionais. Selecionamos rigorosamente as melhores oportunidades para garantir um investimento seguro e rentável.",
      values: [
        {
          title: "Especialização Local",
          description: "Conhecimento profundo do mercado cabo-verdiano e das suas especificidades jurídicas.",
        },
        {
          title: "Seleção Premium",
          description: "Um catálogo exclusivo de imóveis de alto padrão, verificados e validados pelos nossos especialistas.",
        },
        {
          title: "Acompanhamento Total",
          description: "Da procura do imóvel à gestão de arrendamento, estamos consigo em todas as etapas.",
        },
      ],
    },
    faqPage: {
      title: "Perguntas Frequentes",
      subtitle: "Tudo o que precisa saber sobre investir em imobiliário em Cabo Verde.",
      items: [
        {
          question: "É possível comprar um imóvel em Cabo Verde como estrangeiro?",
          answer:
            "Sim, absolutamente. Cabo Verde é muito aberto a investidores estrangeiros. Os direitos de propriedade são garantidos e o processo é semelhante ao dos países europeus.",
        },
        {
          question: "Quais são as taxas de aquisição?",
          answer:
            "Os custos de aquisição (notário, registo, impostos) situam-se geralmente entre 3-5% do preço do imóvel.",
        },
        {
          question: "Como funciona a gestão de arrendamento?",
          answer:
            "Oferecemos um serviço completo de gestão de arrendamento: procura de inquilinos, check-in/out, limpeza, manutenção. Recebe os rendimentos de arrendamento trimestralmente.",
        },
        {
          question: "Qual é a tributação sobre os rendimentos de arrendamento?",
          answer:
            "A tributação é vantajosa com um imposto único sobre rendimentos de arrendamento (IUR) de 20%, após dedução dos custos de manutenção (até 30% dos rendimentos).",
        },
      ],
    },
    legal: {
      privacyTitle: "Política de Privacidade",
      privacyText: "Detalhes sobre como recolhemos e utilizamos os seus dados...",
      termsTitle: "Menções Legais",
      termsText: "Informações legais sobre o editor do site...",
      cookiesTitle: "Gestão de Cookies",
      cookiesText: "Explicação sobre a utilização de cookies...",
    },
    notFound: {
      title: "Página não encontrada",
      message: "Desculpe, a página que procura não existe ou foi movida.",
      cta: "Voltar ao início",
    },
    destinationsPage: {
      tag: "Escapadela",
      title: "Os Nossos Destinos",
      subtitle: "Explore as ilhas de Cabo Verde e encontre o local ideal para o seu investimento.",
      discover: "Descobrir",
      detail: {
        notFound: "Destino não encontrado",
        back: "Voltar aos destinos",
        aboutTitle: "Sobre {{name}}",
        highlightsTitle: "Pontos Fortes",
        practicalTitle: "Informações Práticas",
        airport: "Aeroporto",
        flightDuration: "Duração do voo",
        bestSeason: "Melhor época",
        propertiesTitle: "Propriedades em {{name}}",
        viewAll: "Ver tudo",
        empty: "Nenhuma propriedade disponível de momento em {{name}}.",
      },
    },
    investPage: {
      tag: "Investimento",
      title: "O Seu Património, Horizonte Atlântico",
      subtitle:
        "Una rentabilidade e qualidade de vida num destino de futuro. Cabo Verde, a sua nova terra de oportunidades.",
      ctaTitle: "Pronto para iniciar o seu projeto?",
      ctaText:
        "Os nossos conselheiros estão disponíveis para estudar o seu projeto e apresentar as melhores oportunidades.",
      ctaButton: "Pedir uma consulta gratuita",
    },
  },
  cv: {
    common: {
      brand: "Afrika Property",
      viewAll: "Bisti tudu",
      search: "Buska",
      back: "Volta",
      close: "Txa",
      learnMore: "Sabi más",
      send: "Manda",
      language: "Lingu",
      emailOrPhone: "Email ô telefone",
      firstName: "Prenome",
      lastName: "Apelidu",
      project: "Bu Projeta",
      consent: "Kliká pa manda i nu ta kontatá-bu.",
      watchFilm: "Olhá filme",
    },
    nav: {
      buy: "Kompra",
      invest: "Invisti",
      promoters: "Promotóris",
      services: "Servisus",
      destinations: "Destinu",
      blog: "Blog",
      favorites: "Favoritu",
      profile: "Nha Perfil",
      about: "Sôbre",
      contact: "Kontatu",
      promoterSpace: "Espasu pa Promotór",
    },
    promoter: {
      login: {
        title: "Espasu Promotór",
        subtitle: "Entra pa jere bus anúncius",
        email: "Inderesu di email",
        emailPlaceholder: "Inderesu di email",
        password: "Palavra-pasi",
        passwordPlaceholder: "Palavra-pasi",
        rememberMe: "Lenbra di mi",
        forgotPassword: "Skese palavra-pasi?",
        submit: "Entra",
        submitting: "A entrar...",
        orEmail: "Ô ku bu email",
        google: "Entra ku Google",
        apple: "Entra ku Apple",
        noAccount: "Ainda bu ka tem konta?",
        becomePartner: "Ser partneri",
        success: "Entrada ku susesu",
        error: "Erru na entrada",
      },
    },
    footer: {
      description:
        "Primer portal di imobíliariu prémium pa Kabu Verdi. Diskubri propiedade spesial i opurtunidade di investi únika.",
      navigation: "Navigason",
      contact: "Kontatu",
      links: {
        properties: "Propiedadis pa venda",
        invest: "Invisti na Kabu Verdi",
        destinations: "Nhos destinus",
        blog: "Blog",
      },
      address: "Av. Amílcar Cabral, Praia, Santiago, Kabu Verdi",
      phone: "+238 999 99 99",
      email: "contact@luxecv.com",
      rights: "Tudu dirétu rezervadu.",
      legal: "Notisia legal",
      privacy: "Privasidade",
      cookies: "Cookies",
    },
    promotion: {
      title: "Opçon di Destaque",
      totalToPay: "Total a paga",
      payAndPublish: "Paga i Publika",
      publish: "Publika anúnciu",
      options: {
        "boost-7": {
          label: "Boost 7 dia",
          description: "Pói bu anúnciu na topo di lista tudu dia duranti 7 dia.",
          duration: "7 dia",
        },
        "boost-30": {
          label: "Boost 30 dia",
          description: "Vizibilidade másimu ku subida diáriu duranti 30 dia.",
          duration: "30 dia",
        },
        pinned: {
          label: "Anúnciu fixadu",
          description: "Bu anúnciu ta fika fixu na topo di rezultadu di buska.",
        },
        homepage: {
          label: "Destaque na pájina inisial",
          description: "Parse na sekçon 'Destaque' di pájina inisial pa txeu vizibilidade.",
        },
      },
    },
    createListing: {
      backToDashboard: "Volta pa painel",
      title: "Kria novu anúnciu",
      subtitle: "Preenxe informason abaxu pa publika bu propiedade.",
      general: {
        title: "Informason Geral",
        listingTitle: "Títulu di anúnciu",
        listingTitlePlaceholder: "Ex: Vila di lusu ku vista mar",
        transactionType: "Tipu di transason",
        propertyType: "Tipu di propiedade",
        price: "Prizu (€)",
        surface: "Área (m²)",
        types: {
          sale: "Venda",
          apartment: "Apartamentu",
          house: "Kaza / Vila",
          land: "Terrenu",
          commercial: "Espasu komérsial"
        }
      },
      location: {
        title: "Lokalizason",
        island: "Ilha",
        city: "Sidadi / Bairru",
        cityPlaceholder: "Ex: Santa Maria",
        address: "Morada izatu (skundidu)",
        addressPlaceholder: "Rua, númeru...",
      },
      details: {
        title: "Detalhis & Komodidadis",
        bedrooms: "Kwartus",
        bathrooms: "Kaza banhu",
        amenities: "Komodidadis",
        description: "Diskrison",
        descriptionPlaceholder: "Diskrévi bu propiedade ku detalhi...",
        list: {
          pool: "Pisina",
          garden: "Jardim",
          garage: "Garajen",
          seaview: "Vista Mar",
          ac: "Ar Kondisonadu",
          furnished: "Mobiladu",
          elevator: "Elevador",
          security: "Siguransa"
        }
      },
      media: {
        title: "Fotu & Dokumentu",
        dragDrop: "Kleka ô rasta bu fotu li",
        format: "JPG, PNG ti 5MB",
        documents: "Dokumentu Legal (Opsional)",
        docTypes: "Planta, diagnóstiku, etc.",
        add: "Adisiona"
      },
      draft: "Guarda komu rascunhu"
    },
    home: {
      hero: {
        title: "Imobíliariu d'Esepsion",
        accent: "na Kabu Verdi",
        subtitle:
          "Diskubri seleçon esclusivu di kaza di lusu, vila na mar i opurtunidade uniku di investi.",
        locationLabel: "Lokalizason",
        locationPlaceholder: "Tudu ilha",
        typeLabel: "Tipu di propiedade",
        typeAny: "Tudu tipu",
        typeVilla: "Vila",
        typeApartment: "Apartamentu",
        typeLand: "Terrenu",
        budgetLabel: "Orsamentu",
        budgetAny: "Kel ki ten",
        budget1: "100k - 250k €",
        budget2: "250k - 500k €",
        budget3: "500k € +",
        search: "Buska",
      },
      featured: {
        tag: "Seleçon Ekskluzivu",
        title: "Propiedade na Desti",
        viewCollection: "Odja tudu koleçon",
      },
      promoter: {
        tag: "Espasu pa Promotór",
        title: "Da bu projetu",
        accent: "un alkanse internasonal",
        suffix: "",
        description:
          "Junta na rede Luxe CV. Públika bu bens, tchiga investidor kvalifikadu i djubi tud na un dashboard poderozu.",
        becomePartner: "Dja parséru",
        login: "Intra",
      },
      invest: {
        tag: "Oportunidade",
        title: "Pamodi investi",
        accent: "na Kabu Verdi?",
        description:
          "Un destinu espezial ku mistura morabeza, stabilidade polítika i opurtunidade ekonómiku uniku.",
        cta: "Konxi bôntadi",
        benefits: {
          yieldTitle: "Rendimentu di Arrendaméntu",
          yieldDesc:
            "Rendimentu atraente entre 5% i 9% ku demanda turístika na krési.",
          safetyTitle: "Stabilidade i Siguransa",
          safetyDesc:
            "Ambiente polítiku stabil i proteçon jurídica total pa investidor stranjeiru.",
          taxTitle: "Impostu Suavi",
          taxDesc:
            "Impostu úniku di 20% riba renda di aluguer i vários akordu pa evitá dupla taxason.",
          geoTitle: "Pozison Strategika",
          geoDesc:
            "Un kaminhu di Europá, África i Amérikas.",
        },
      },
      video: {
        tag: "Deskuberta",
        title: "Alma di Kabu Verdi",
        watch: "Olhá filme",
        close: "Txa",
      },
      map: {
        tag: "Explorasom",
        title: "Skolhe bu destinu",
        description:
          "Kada ilha ten karáter propiu. Pasa ratu (ô kleka) pa odja opurtunidade di kada zona.",
        price: "Prixu médiu",
        vibe: "Ambiente",
        explore: "Explora",
        legendTitle: "Guia di investidor",
        legendText: "Pasa riba punti pa kompara rapidu zona di invistimentu.",
        islands: {
          sal: { vibe: "Turismu & Praia", price: "2 200 €/m²" },
          boavista: { vibe: "Dunas & Naturéza", price: "1 900 €/m²" },
          santiago: { vibe: "Kapital & Biznes", price: "1 500 €/m²" },
          saovicente: { vibe: "Kultura & Músika", price: "1 700 €/m²" },
        },
      },
      destinations: {
        tag: "Explora",
        title: "Destinu di Referénsia",
        viewAll: "Odja tudu ilha",
        propertiesCount: "propiedadis",
        cards: {
          sal: {
            description: "Ilha di sol sem fin i práia grandi.",
            tag: "Mar",
          },
          boaVista: {
            description: "Dunas di areia branka até fim.",
            tag: "Natureza",
          },
          santiago: {
            description: "Koraçon kultural i históliku di arquipélagu.",
            tag: "Kultura",
          },
          saoVicente: {
            description: "Alma di músika i festa di Kabu Verdi.",
            tag: "Art di vivi",
          },
        },
      },
      faq: {
        tag: "Pérgunta Freqënti",
        title: "Tudu sobra bu investimentu",
        description: "Respostu klaru pa bu andá ku konfiança.",
        items: [
          {
            question: "Stranjeiru pode komprá?",
            answer:
              "Si. Kabu Verdi ta dâ titulu di propietáriu kompletu pa investidor stranjeiru, ku mesmu dirétu i proteçon di nasonal. Ka ten restrison pa kómpra imobíliariu.",
          },
          {
            question: "Kua ta impuesto i fiskalidadi?",
            answer:
              "Impostu é atraente. Renda di aluguer ta paga 20% fixu. Impostu anual (IUP) é volta di 1.5% di valor fiskal. Ten akordu pa evitá dupla taxason ku munchi país.",
          },
          {
            question: "Kuma ta jere kaza di lonji?",
            answer:
              "É nos spésialidadi. Nu ta ligá-bu ku empréza di jeston fidjável ki ta trata di tudu: marketing, check-in/out, limpa i manutenção. Bu ta risibi renda sen estréss.",
          },
          {
            question: "Ki garántia jurídica ten?",
            answer:
              "Sistéma jurídiku di Kabu Verdi é di direitu sivil (parese ku Portugal i Franssa). Tudu tranzason ta pasa na notáriu i ta fika registradu na Registu Predial, garanti titulu klaru.",
          },
          {
            question: "Sôn promotor, kuma ta difundi projetu?",
            answer:
              "Nu ta skoljé nos parceru ku kudiadu. Si bu ten ben di esepson, bu pode mandaba na {{promoterSpace}}. Kantu aprobadu, bu ta ten asesu a nos klenti internasonal.",
          },
        ],
      },
      contactBanner: {
        tag: "Konsulta Gratís",
        title: "Bu bison, nos esperiénsia.",
        description:
          "Nô ta papia di bu ambison imobíliariu na Kabu Verdi. Nos dretór di projetu sta dispunível pa un studi personalizadu.",
        placeholders: {
          firstName: "Bu prenome",
          lastName: "Bu apelidu",
          project: "N kre invisti na...",
        },
        submit: "Manda nha pedidu",
      },
    },
    property: {
      badges: {
        new: "Nôvu",
        exclusive: "Ekskluzivu",
        sold: "Vendid",
        sale: "Kompra",
      },
      metrics: {
        bedrooms: "Kwartu",
        bathrooms: "Kasa di baniu",
        area: "Área",
        areaUnit: "m²",
      },
      list: {
        resultsLabel: "rezultadu",
        emptyTitle: "N ka tene propiedade",
        emptyDescription: "Txa mudja búska ô filtru.",
        pagination: {
          previous: "Antériur",
          next: "Seginte",
        },
      },
      sort: {
        label: "Ordena pa",
        newest: "Nôvidadi",
        priceAsc: "Prisu: baxu pa autu",
        priceDesc: "Prisu: autu pa baxu",
        areaDesc: "Área: más grandi",
      },
      detail: {
        notFound: "Propiedade ka atxadu",
        back: "Volta pa propiedade",
        share: "Partilha",
        descriptionTitle: "Diskrison",
        descriptionParagraph1:
          "Diskubri es magnífiku propiedade sta na korason di {{location}}. Ku akabamentu di lusu i arquitetúra mudernu, ideal pa aluguér ô segundu kaza. Gosi vista magnífika i un stilu di vida spesial.",
        descriptionParagraph2:
          "Akabamentu sta ben kuidadu ku materiál nobri. Rezedénsia ten tudu komodidadi pa konfortu ótimu.",
        locationTitle: "Lokalizason",
        mapPlaceholder: "Mapa interativu inda indisponível na maketa",
      },
      amenities: {
        title: "Kondisaun",
        defaults: [
          "Ar kondisonadu",
          "Pisina",
          "Vista mar",
          "Jardím",
          "Parkamentu",
          "Siguransa 24/7",
          "Wi-Fi",
          "Teraçu",
        ],
      },
      contact: {
        title: "Interesadu na es ben?",
        subtitle: "Deixa bu kontaktu i konselhéru ta liga-bu den 24 ora.",
        placeholders: {
          firstName: "Prenome",
          lastName: "Apelidu",
          email: "Email",
          phone: "Telefon",
          message: "Ola, n kre sabi más informason sobra es propiedade...",
        },
        submit: "Manda pedidu",
        consent: "Kantu manda formuláriu, bu ta aseta nos polítika di privasidade.",
      },
      investment: {
        title: "Projéson di Investimentu",
        purchasePrice: "Prisu di kompra",
        monthlyRent: "Renda mensal estimadu",
        grossYield: "Rendimentu brutu",
        disclaimer:
          "Es númeru é só estimativa di merkadu atual, ka é garansia di rendimentu.",
      },
    },
    contactPage: {
      title: "Kontata-nu",
      subtitle: "Nos ekipa sta pronto pa da vida na bu projetu.",
      sectionTitle: "Nô ta papia di bu projetu",
      sectionDescription:
        "Si bu kre komprá, bende ô invisti, nos konselhéru sta li pa responde tudu bu pergunta.",
      officesTitle: "Nos Sede",
      officesAddress: "Av. Amílcar Cabral\nPraia, Santiago, Kabu Verdi",
      phoneTitle: "Telefon",
      phoneNumber: "+238 999 99 99",
      phoneHours: "Segunda a sexta, 9h-18h",
      emailTitle: "Email",
      emailAddress: "contact@luxecv.com",
    },
    blog: {
      tag: "Notísia",
      title: "Blog",
      subtitle: "Notísia, konseyu i guida pa bu investimentu na Kabu Verdi.",
      readMore: "Lê más",
      back: "Volta pa blog",
      articleNotFound: "Artigu ka atxadu",
      share: "Partilha",
      keywordsLabel: "Palavra-xavi:",
      keywords: "Investimentu, Imobíliariu, Turismu",
      articleHeading: "Merkadu na krési",
      articleQuote:
        "\"Kabu Verdi óji é un di médjor opurtunidade di investimentu na Afrika Osidental.\"",
    },
    about: {
      title: "Sôbre Luxe CV",
      subtitle: "Bu parseiru di konfiansa pa imobíliariu di prestíjiu na Kabu Verdi.",
      missionTitle: "Nos Mison",
      missionCopy:
        "Luxe CV nase di pasion pa Kabu Verdi i dezéju di ofrese servis di eselénsia pa investidor internasonal. Nu ta skoljé ku kudiadu tudu melhór opurtunidade pa garanti investimentu sigur i rentável.",
      values: [
        {
          title: "Esperiénsia Lokal",
          description: "Konesementu profundu di merkadu kabu-verdianu i se spesifisidadi jurídica.",
        },
        {
          title: "Seleçon Prémium",
          description: "Un katalogu esclusivu di ben di altu nivel, verifikadu i validadu pa nos spisialista.",
        },
        {
          title: "Akompanhamentu Total",
          description: "Di buska di ben té jeston di aluguer, nu ta fika ku bo na tudu pásu.",
        },
      ],
    },
    faqPage: {
      title: "Pérgunta Freqënti",
      subtitle: "Tudu ki bu presiza sabi pa investe na imobíliariu na Kabu Verdi.",
      items: [
        {
          question: "Sta possível kómpra propiedade na Kabu Verdi komu stranjeiru?",
          answer:
            "Si, txeu. Kabu Verdi sta bem abertu pa investidor stranjeiru. Dirétu di propietáriu é garantidu i prusesu é parese ku país european.",
        },
        {
          question: "Kantu é kustu di akwizison?",
          answer:
            "Kustu di akwizison (notáriu, rejistu, impostu) geralmente é volta di 3-5% di preço di ben.",
        },
        {
          question: "Kuma ta funsiona jeston di aluguer?",
          answer:
            "Nu ofrese servisu kompletu di jeston: buska di inkinu, check-in/out, limpa, manutenção. Bu ta risibi renda trimestralmenti.",
        },
        {
          question: "Kantu é impostu riba renda di aluguer?",
          answer:
            "Impostu é vantajozu ku taxa únika (IUR) di 20% riba renda di aluguer, depois di dedusi gastu di manutenção (té 30% di renda).",
        },
      ],
    },
    legal: {
      privacyTitle: "Polítika di Privasidade",
      privacyText: "Detalhi di modi nu ta kolekta i uzá bu dadus...",
      termsTitle: "Mintson Légal",
      termsText: "Informason légal sobra editór di site...",
      cookiesTitle: "Jestón di Cookies",
      cookiesText: "Esplikason di modi nu ta uza cookies...",
    },
    notFound: {
      title: "Pajina ka atxadu",
      message: "Diskulpa, pájina ki bu sta buska ka ezisti ô djâ muda di lóku.",
      cta: "Volta pa iniciu",
    },
    destinationsPage: {
      tag: "Skapada",
      title: "Nos Destinu",
      subtitle: "Skopri ilhas di Kabu Verdi i atxa lugar idéal pa bu investimentu.",
      discover: "Deskubri",
      detail: {
        notFound: "Destinu ka atxadu",
        back: "Volta pa destinu",
        aboutTitle: "Sôbre {{name}}",
        highlightsTitle: "Puntu forte",
        practicalTitle: "Informaçon Prátiku",
        airport: "Aerpórtu",
        flightDuration: "Durason di vôi",
        bestSeason: "Méliô época",
        propertiesTitle: "Propiedade na {{name}}",
        viewAll: "Odja tudu",
        empty: "N ka ten propiedade disponível gosi na {{name}}.",
      },
    },
    investPage: {
      tag: "Investimentu",
      title: "Bu Patrimóniu, Orizonti di Mar",
      subtitle:
        "Junta rendimentu ku stilu di vida na un destinu di futuru. Kabu Verdi, bu nova tchon di opurtunidade.",
      ctaTitle: "Prontu pa kumesa bu projetu?",
      ctaText:
        "Nos konselhéru sta disponívl pa studa bu projetu i propozi melhór opurtunidade.",
      ctaButton: "Pidi konsulta gratís",
    },
  },
};
