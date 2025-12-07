export interface ProfessionalService {
  id: string;
  type: 'bank' | 'consultant' | 'lawyer';
  name: string;
  description: string;
  logoUrl?: string; // We'll use lucide icons in the UI if this is missing, or placeholder text
  coverImageUrl?: string;
  email: string;
  phone: string;
  website?: string;
  address: string;
  specialties: string[];
  commissionRate: number; // Percentage, e.g., 0.5 for 0.5%
  featured: boolean;
  status: 'active' | 'inactive';
  partneredSince: string;
  totalLeadsGenerated?: number;
  totalCommissionsEarned?: number;
}

export interface ServiceLead {
  id: string;
  trackingCode: string; // Format: CAPVERT-YYYY-MM-XXX
  serviceId: string;
  serviceName: string;
  serviceType: 'bank' | 'consultant' | 'lawyer';

  // Client info
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  clientMessage?: string;

  // Property related
  propertyId?: string;
  propertyTitle?: string;
  estimatedAmount?: number; // Montant du prêt ou service

  // Commission tracking
  expectedCommissionRate: number;
  expectedCommissionAmount: number;
  actualCommissionAmount?: number;

  // Status
  status: 'new' | 'contacted' | 'in_progress' | 'completed' | 'cancelled';
  commissionStatus: 'pending' | 'invoiced' | 'paid';

  // Dates
  dateCreated: string;
  dateContacted?: string;
  dateCompleted?: string;
  datePaid?: string;

  // Notes
  internalNotes?: string;
  partnerFeedback?: string;
}
