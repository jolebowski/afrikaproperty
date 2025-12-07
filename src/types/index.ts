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
  agencyId: string;
  agency?: Agency;
}

export interface Agency {
  id: string;
  name: string;
  type: 'agency' | 'promoter';
  email: string;
  phone?: string;
  address?: string;
  description?: string;
  logoUrl?: string;
  coverImageUrl?: string;
  website?: string;
  status: 'pending' | 'active' | 'suspended';
  createdAt: string;
  updatedAt: string;
}

export interface User {
  id: string;
  agencyId: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'owner' | 'admin' | 'agent';
  avatarUrl?: string;
}

export interface FilterState {
  type: "sale" | "rent" | "all";
  location: string;
  minPrice: number;
  maxPrice: number;
  bedrooms: number | null;
  propertyType: string[];
}
