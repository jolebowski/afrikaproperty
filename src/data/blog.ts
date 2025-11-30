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
    category: "Investissement"
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
    category: "Juridique"
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
    category: "Tourisme"
  }
];
