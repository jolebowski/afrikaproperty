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
  // Commission tracking fields
  soldBy?: string; // Agent/Promoter ID who made the sale
  saleDate?: string; // Date when the property was sold
  soldPrice?: number; // Actual sale price (may differ from listing price)
  commissionId?: string; // Link to commission record
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
  // Commission tracking
  totalCommissionsEarned?: number;
  totalSales?: number;
}

export interface FilterState {
  type: "sale" | "rent" | "all";
  location: string;
  minPrice: number;
  maxPrice: number;
  bedrooms: number | null;
  propertyType: string[];
}

// Commission tracking system
export interface Commission {
  id: string;
  propertyId: string; // ID of the property sold
  agentId: string; // ID of the agent/promoter who made the sale
  agencyId: string; // ID of the agency
  propertyTitle: string; // Title of the property (for display)
  salePrice: number; // Final sale price
  commissionRate: number; // Commission percentage (e.g., 2.5 for 2.5%)
  commissionAmount: number; // Calculated commission amount
  currency: string; // Currency (EUR, USD, etc.)
  status: 'pending' | 'paid'; // Payment status
  saleDate: string; // Date of sale
  paidDate?: string; // Date when commission was paid
  paymentMethod?: 'virement' | 'cheque' | 'especes' | 'autre'; // How it was paid
  notes?: string; // Any additional notes
  createdAt: string; // When the commission record was created
  updatedAt: string; // Last update time
}
