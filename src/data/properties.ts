import type { Property } from "../types";

export const PROPERTIES: Property[] = [
  {
    id: "1",
    title: "Villa Océane Premium",
    location: "Santa Maria, Sal",
    price: 450000,
    currency: "EUR",
    type: "sale",
    status: "available",
    bedrooms: 4,
    bathrooms: 3,
    area: 250,
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070&auto=format&fit=crop"
    ],
    isExclusive: true,
    isNew: true
  },
  {
    id: "2",
    title: "Penthouse Vue Mer",
    location: "Praia, Santiago",
    price: 280000,
    currency: "EUR",
    type: "sale",
    status: "available",
    bedrooms: 3,
    bathrooms: 2,
    area: 180,
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
    ],
    isPremium: true
  },
  {
    id: "3",
    title: "Résidence Palm Beach",
    location: "Boa Vista",
    price: 195000,
    currency: "EUR",
    type: "sale",
    status: "reserved",
    bedrooms: 2,
    bathrooms: 2,
    area: 120,
    images: [
      "https://images.unsplash.com/photo-1600596542815-2495db9dc2c3?q=80&w=2070&auto=format&fit=crop"
    ]
  },
  {
    id: "4",
    title: "Appartement Moderne Mindelo",
    location: "Mindelo, São Vicente",
    price: 125000,
    currency: "EUR",
    type: "sale",
    status: "available",
    bedrooms: 2,
    bathrooms: 1,
    area: 85,
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop"
    ]
  },
  {
    id: "5",
    title: "Villa de Luxe Tarrafal",
    location: "Tarrafal, Santiago",
    price: 350000,
    currency: "EUR",
    type: "sale",
    status: "available",
    bedrooms: 3,
    bathrooms: 3,
    area: 200,
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
    ],
    isNew: true
  },
  {
    id: "6",
    title: "Duplex Centre-Ville",
    location: "Praia, Santiago",
    price: 160000,
    currency: "EUR",
    type: "sale",
    status: "sold",
    bedrooms: 2,
    bathrooms: 2,
    area: 110,
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop"
    ]
  }
];
