import type { Language } from "../i18n/translations";

export interface Destination {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  propertyCount: number;
  highlights: string[];
  practicalInfo: {
    airport: string;
    flightDuration: string;
    bestSeason: string;
  };
  translations?: Partial<
    Record<
      Language,
      {
        description: string;
        highlights: string[];
        practicalInfo: {
          airport: string;
          flightDuration: string;
          bestSeason: string;
        };
      }
    >
  >;
}

export const DESTINATIONS: Destination[] = [
  {
    id: "1",
    name: "Sal",
    slug: "sal",
    description: "L'île la plus touristique du Cap-Vert, célèbre pour ses plages de sable blanc à perte de vue et ses eaux turquoises. Un paradis pour les amateurs de sports nautiques et de farniente.",
    image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop",
    propertyCount: 45,
    highlights: ["Plages de Santa Maria", "Salines de Pedra de Lume", "Kitesurf & Windsurf"],
    practicalInfo: {
      airport: "Aéroport International Amílcar Cabral (SID)",
      flightDuration: "6h depuis Paris",
      bestSeason: "Toute l'année, idéal de novembre à juin"
    },
    translations: {
      en: {
        description:
          "The most touristic island, famous for endless white-sand beaches and turquoise waters. A paradise for water sports and relaxation.",
        highlights: ["Santa Maria beaches", "Pedra de Lume salt flats", "Kitesurf & Windsurf"],
        practicalInfo: {
          airport: "Amílcar Cabral International Airport (SID)",
          flightDuration: "6h from Paris",
          bestSeason: "All year, best November to June",
        },
      },
      pt: {
        description:
          "A ilha mais turística de Cabo Verde, famosa pelas praias de areia branca e águas turquesa. Um paraíso para desportos náuticos e descanso.",
        highlights: ["Praias de Santa Maria", "Salinas de Pedra de Lume", "Kitesurf & Windsurf"],
        practicalInfo: {
          airport: "Aeroporto Internacional Amílcar Cabral (SID)",
          flightDuration: "6h desde Paris",
          bestSeason: "Todo o ano, ideal de novembro a junho",
        },
      },
      cv: {
        description:
          "Ilha más turístiku, famoz pa práia di areia branku sem fin i água turkeza. Paraizu pa sport na mar i relax.",
        highlights: ["Práia di Santa Maria", "Salinas di Pedra de Lume", "Kitesurf & Windsurf"],
        practicalInfo: {
          airport: "Aerpórtu Internasional Amílcar Cabral (SID)",
          flightDuration: "6 ora desde Paris",
          bestSeason: "Tudu anu, más txeu di Novémbru té Junhu",
        },
      },
    }
  },
  {
    id: "2",
    name: "Boa Vista",
    slug: "boa-vista",
    description: "L'île aux dunes, offrant des paysages désertiques spectaculaires et des plages vierges. Une destination idéale pour ceux qui recherchent la tranquillité et la nature.",
    image: "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?q=80&w=2070&auto=format&fit=crop",
    propertyCount: 32,
    highlights: ["Désert de Viana", "Plage de Santa Monica", "Observation des tortues"],
    practicalInfo: {
      airport: "Aéroport International Aristides Pereira (BVC)",
      flightDuration: "6h depuis Paris",
      bestSeason: "Octobre à Juillet"
    },
    translations: {
      en: {
        description:
          "The island of dunes with spectacular desert landscapes and pristine beaches. Ideal for those seeking tranquility and nature.",
        highlights: ["Viana Desert", "Santa Monica Beach", "Turtle watching"],
        practicalInfo: {
          airport: "Aristides Pereira International Airport (BVC)",
          flightDuration: "6h from Paris",
          bestSeason: "October to July",
        },
      },
      pt: {
        description:
          "A ilha das dunas, com paisagens desérticas e praias virgens. Destino ideal para quem procura tranquilidade e natureza.",
        highlights: ["Deserto de Viana", "Praia de Santa Monica", "Observação de tartarugas"],
        practicalInfo: {
          airport: "Aeroporto Internacional Aristides Pereira (BVC)",
          flightDuration: "6h desde Paris",
          bestSeason: "Outubro a Julho",
        },
      },
      cv: {
        description:
          "Ilha di duna ku paisajen dezértiku i práia virjém. Destinu ideal pa kem ta buska trankilidade i naturéza.",
        highlights: ["Dezertu di Viana", "Práia Santa Monica", "Observason di tartaruga"],
        practicalInfo: {
          airport: "Aerpórtu Internasional Aristides Pereira (BVC)",
          flightDuration: "6 ora desde Paris",
          bestSeason: "Outubru té Julhu",
        },
      },
    }
  },
  {
    id: "3",
    name: "Santiago",
    slug: "santiago",
    description: "L'île principale, abritant la capitale Praia. Un mélange fascinant de culture, d'histoire et de paysages montagneux verdoyants.",
    image: "https://images.unsplash.com/photo-1584284496181-229475899292?q=80&w=2070&auto=format&fit=crop",
    propertyCount: 28,
    highlights: ["Cidade Velha (UNESCO)", "Marché de Sucupira", "Serra Malagueta"],
    practicalInfo: {
      airport: "Aéroport International Nelson Mandela (RAI)",
      flightDuration: "6h depuis Lisbonne",
      bestSeason: "Toute l'année"
    },
    translations: {
      en: {
        description:
          "The main island and home to the capital Praia. A fascinating mix of culture, history, and lush mountain landscapes.",
        highlights: ["Cidade Velha (UNESCO)", "Sucupira Market", "Serra Malagueta"],
        practicalInfo: {
          airport: "Nelson Mandela International Airport (RAI)",
          flightDuration: "6h from Lisbon",
          bestSeason: "All year round",
        },
      },
      pt: {
        description:
          "A ilha principal, onde se encontra a capital Praia. Mistura fascinante de cultura, história e paisagens montanhosas verdes.",
        highlights: ["Cidade Velha (UNESCO)", "Mercado de Sucupira", "Serra Malagueta"],
        practicalInfo: {
          airport: "Aeroporto Internacional Nelson Mandela (RAI)",
          flightDuration: "6h desde Lisboa",
          bestSeason: "Todo o ano",
        },
      },
      cv: {
        description:
          "Ilha prinsipal ku kapital Praia. Mistura di kultura, stória i montanha verdinhot.",
        highlights: ["Cidade Velha (UNESCO)", "Merkadu di Sucupira", "Serra Malagueta"],
        practicalInfo: {
          airport: "Aerpórtu Internasional Nelson Mandela (RAI)",
          flightDuration: "6 ora desde Lisbôa",
          bestSeason: "Tudu anu",
        },
      },
    }
  },
  {
    id: "4",
    name: "São Vicente",
    slug: "sao-vicente",
    description: "Le cœur culturel du Cap-Vert, patrie de Cesária Évora. Mindelo, sa capitale, est réputée pour sa musique, son carnaval et son architecture coloniale.",
    image: "https://images.unsplash.com/photo-1580666726284-5264b38d302b?q=80&w=2070&auto=format&fit=crop",
    propertyCount: 15,
    highlights: ["Baie de Mindelo", "Monte Verde", "Festival Baía das Gatas"],
    practicalInfo: {
      airport: "Aéroport International Cesária Évora (VXE)",
      flightDuration: "Via Sal ou Lisbonne",
      bestSeason: "Toute l'année, Carnaval en Février"
    },
    translations: {
      en: {
        description:
          "Cape Verde's cultural heart and home of Cesária Évora. Mindelo is famous for music, carnival, and colonial architecture.",
        highlights: ["Mindelo Bay", "Monte Verde", "Baía das Gatas Festival"],
        practicalInfo: {
          airport: "Cesária Évora International Airport (VXE)",
          flightDuration: "Via Sal or Lisbon",
          bestSeason: "All year, Carnival in February",
        },
      },
      pt: {
        description:
          "O coração cultural de Cabo Verde, terra de Cesária Évora. Mindelo é famosa pela música, carnaval e arquitetura colonial.",
        highlights: ["Baía do Mindelo", "Monte Verde", "Festival da Baía das Gatas"],
        practicalInfo: {
          airport: "Aeroporto Internacional Cesária Évora (VXE)",
          flightDuration: "Via Sal ou Lisboa",
          bestSeason: "Todo o ano, Carnaval em fevereiro",
        },
      },
      cv: {
        description:
          "Koraçon kultural di Kabu Verdi, tchon di Cesária Évora. Mindelo é famoz pa músika, karnaval i arquitetúra kolonial.",
        highlights: ["Baía di Mindelo", "Monte Verde", "Festival Baía das Gatas"],
        practicalInfo: {
          airport: "Aerpórtu Internasional Cesária Évora (VXE)",
          flightDuration: "Via Sal ô Lisbôa",
          bestSeason: "Tudu anu, Karnaval na Fevereru",
        },
      },
    }
  }
];
