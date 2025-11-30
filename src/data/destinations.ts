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
    }
  }
];
