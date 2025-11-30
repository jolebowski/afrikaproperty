export interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  currency: string;
  type: "sale" | "rent";
  status: "available" | "reserved" | "sold";
  bedrooms: number;
  bathrooms: number;
  area: number;
  images: string[];
  isNew?: boolean;
  isExclusive?: boolean;
  isPremium?: boolean;
}

export interface FilterState {
  type: "sale" | "rent" | "all";
  location: string;
  minPrice: number;
  maxPrice: number;
  bedrooms: number | null;
  propertyType: string[];
}
