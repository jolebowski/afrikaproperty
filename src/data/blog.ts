import type { Language } from "../i18n/translations";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
  translations?: Partial<
    Record<
      Language,
      {
        title: string;
        excerpt: string;
        content: string;
        category: string;
      }
    >
  >;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "pourquoi-investir-cap-vert-2024",
    title: "Pourquoi investir au Cap-Vert en 2024 ?",
    excerpt: "Découvrez les atouts économiques et touristiques qui font de l'archipel une destination privilégiée pour les investisseurs.",
    content: "Le Cap-Vert connaît une croissance touristique exponentielle...",
    image: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?q=80&w=2070&auto=format&fit=crop",
    author: "Sophie Martin",
    date: "15 Nov 2024",
    category: "Investissement",
    translations: {
      en: {
        title: "Why invest in Cape Verde in 2024?",
        excerpt:
          "Discover the economic and tourism strengths that make the archipelago a prime destination for investors.",
        content: "Cape Verde is experiencing exponential tourism growth...",
        category: "Investment",
      },
      pt: {
        title: "Por que investir em Cabo Verde em 2024?",
        excerpt:
          "Descubra os pontos fortes económicos e turísticos que fazem do arquipélago um destino privilegiado para investidores.",
        content: "Cabo Verde está a viver um crescimento turístico exponencial...",
        category: "Investimento",
      },
      cv: {
        title: "Pamodi invisti na Kabu Verdi na 2024?",
        excerpt:
          "Diskubri forsa ekonómiku i turístiku ki ta fazi arquipélagu destinu pruméru pa investidor.",
        content: "Kabu Verdi sta pasa pa un krésimentu turístiku rapidu...",
        category: "Investimentu",
      },
    },
  },
  {
    id: "2",
    slug: "guide-achat-immobilier-etranger",
    title: "Guide complet de l'achat immobilier pour les étrangers",
    excerpt: "Toutes les étapes juridiques et administratives pour acquérir un bien en toute sérénité.",
    content: "L'achat d'un bien immobilier au Cap-Vert est ouvert aux étrangers...",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop",
    author: "Marc Dubois",
    date: "02 Nov 2024",
    category: "Juridique",
    translations: {
      en: {
        title: "Complete guide to buying property as a foreigner",
        excerpt: "Every legal and administrative step to purchase with peace of mind.",
        content: "Buying property in Cape Verde is open to foreign buyers...",
        category: "Legal",
      },
      pt: {
        title: "Guia completo para compra de imóvel por estrangeiros",
        excerpt: "Todas as etapas legais e administrativas para comprar com tranquilidade.",
        content: "A compra de um imóvel em Cabo Verde está aberta a estrangeiros...",
        category: "Jurídico",
      },
      cv: {
        title: "Guia kompletu pa stranjeiru kómpra kaza",
        excerpt: "Tudu pásu legal i administrativu pa kómpra sen stress.",
        content: "Kompra di imobíliariu na Kabu Verdi sta abertu pa stranjeiru...",
        category: "Juridiku",
      },
    },
  },
  {
    id: "3",
    slug: "top-5-plages-sal",
    title: "Les 5 plus belles plages de l'île de Sal",
    excerpt: "Un tour d'horizon des spots incontournables pour la baignade et les sports nautiques.",
    content: "Santa Maria reste la plage la plus emblématique...",
    image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop",
    author: "Julie Roux",
    date: "28 Oct 2024",
    category: "Tourisme",
    translations: {
      en: {
        title: "The 5 most beautiful beaches on Sal Island",
        excerpt: "A tour of the must-see spots for swimming and watersports.",
        content: "Santa Maria remains the most emblematic beach...",
        category: "Tourism",
      },
      pt: {
        title: "As 5 praias mais bonitas da ilha do Sal",
        excerpt: "Um roteiro pelos locais imperdíveis para banho e desportos náuticos.",
        content: "Santa Maria continua a ser a praia mais emblemática...",
        category: "Turismo",
      },
      cv: {
        title: "5 práia más bonita na ilha di Sal",
        excerpt: "Un volta pa lugár obrigatório pa báia i sport na mar.",
        content: "Santa Maria kontínua é práia más emblemátiku...",
        category: "Turismu",
      },
    },
  }
];
