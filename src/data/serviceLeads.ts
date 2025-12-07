import type { ServiceLead } from '../types/professionalServices';

// Helper to generate dates relative to today
const daysAgo = (days: number) => {
  const d = new Date();
  d.setDate(d.getDate() - days);
  return d.toISOString();
};

export const mockServiceLeads: ServiceLead[] = [
  // Bank Leads
  {
    id: 'lead_001',
    trackingCode: 'CAPVERT-2024-12-001',
    serviceId: 'bank_bca',
    serviceName: 'Banco Comercial do Atlântico',
    serviceType: 'bank',
    clientName: 'Jean De Pina',
    clientEmail: 'jean.depina@gmail.com',
    clientPhone: '+33 6 12 34 56 78',
    clientMessage: 'Je souhaite financer une villa à Sal.',
    estimatedAmount: 250000,
    expectedCommissionRate: 0.5,
    expectedCommissionAmount: 1250, // 0.5% of 250k
    actualCommissionAmount: 1250,
    status: 'completed',
    commissionStatus: 'paid',
    dateCreated: daysAgo(45),
    dateContacted: daysAgo(44),
    dateCompleted: daysAgo(15),
    datePaid: daysAgo(2),
  },
  {
    id: 'lead_002',
    trackingCode: 'CAPVERT-2024-12-002',
    serviceId: 'bank_caixa',
    serviceName: 'Caixa Económica',
    serviceType: 'bank',
    clientName: 'Marie Monteiro',
    clientEmail: 'm.monteiro@hotmail.com',
    clientPhone: '+1 508 555 0199',
    estimatedAmount: 180000,
    expectedCommissionRate: 0.6,
    expectedCommissionAmount: 1080,
    status: 'in_progress',
    commissionStatus: 'pending',
    dateCreated: daysAgo(10),
    dateContacted: daysAgo(9),
  },
  {
    id: 'lead_003',
    trackingCode: 'CAPVERT-2024-12-003',
    serviceId: 'bank_bca',
    serviceName: 'Banco Comercial do Atlântico',
    serviceType: 'bank',
    clientName: 'Pedro Silva',
    clientEmail: 'pedro.silva@yahoo.fr',
    clientPhone: '+33 6 98 76 54 32',
    clientMessage: 'Renégociation de prêt immobilier.',
    estimatedAmount: 150000,
    expectedCommissionRate: 0.5,
    expectedCommissionAmount: 750,
    status: 'new',
    commissionStatus: 'pending',
    dateCreated: daysAgo(1),
  },
  {
    id: 'lead_004',
    trackingCode: 'CAPVERT-2024-12-004',
    serviceId: 'bank_bi',
    serviceName: 'Banco Interatlântico',
    serviceType: 'bank',
    clientName: 'Carlos Andrade',
    clientEmail: 'c.andrade@cv.cv',
    clientPhone: '+238 991 11 22',
    estimatedAmount: 500000,
    expectedCommissionRate: 0.55,
    expectedCommissionAmount: 2750,
    status: 'contacted',
    commissionStatus: 'pending',
    dateCreated: daysAgo(5),
    dateContacted: daysAgo(3),
  },

  // Consultant Leads
  {
    id: 'lead_005',
    trackingCode: 'CAPVERT-2024-12-005',
    serviceId: 'cons_caboverde_invest',
    serviceName: 'CV Invest Partners',
    serviceType: 'consultant',
    clientName: 'Sophie Pereira',
    clientEmail: 'sophie.p@gmail.com',
    clientPhone: '+33 6 11 22 33 44',
    clientMessage: 'Besoin d\'aide pour structurer mon investissement locatif.',
    estimatedAmount: 2000, // Honoraires estimés
    expectedCommissionRate: 10,
    expectedCommissionAmount: 200,
    status: 'completed',
    commissionStatus: 'invoiced',
    dateCreated: daysAgo(20),
    dateContacted: daysAgo(19),
    dateCompleted: daysAgo(5),
  },
  {
    id: 'lead_006',
    trackingCode: 'CAPVERT-2024-12-006',
    serviceId: 'cons_diaspora_connect',
    serviceName: 'Diaspora Connect USA',
    serviceType: 'consultant',
    clientName: 'John Brito',
    clientEmail: 'jbrito@comcast.net',
    clientPhone: '+1 617 555 9988',
    estimatedAmount: 3000,
    expectedCommissionRate: 12,
    expectedCommissionAmount: 360,
    status: 'new',
    commissionStatus: 'pending',
    dateCreated: daysAgo(0),
  },

  // Lawyer Leads
  {
    id: 'lead_007',
    trackingCode: 'CAPVERT-2024-12-007',
    serviceId: 'law_santos_associados',
    serviceName: 'Santos & Associados',
    serviceType: 'lawyer',
    clientName: 'Michel Vieira',
    clientEmail: 'm.vieira@outlook.com',
    clientPhone: '+351 912 345 678',
    clientMessage: 'Achat d\'un terrain à Boa Vista, besoin de vérifications.',
    estimatedAmount: 1500, // Honoraires
    expectedCommissionRate: 15,
    expectedCommissionAmount: 225,
    status: 'in_progress',
    commissionStatus: 'pending',
    dateCreated: daysAgo(8),
    dateContacted: daysAgo(7),
  },
  {
    id: 'lead_008',
    trackingCode: 'CAPVERT-2024-12-008',
    serviceId: 'law_evora_legal',
    serviceName: 'Évora Legal Group',
    serviceType: 'lawyer',
    clientName: 'Sarah Mendes',
    clientEmail: 's.mendes@gmail.com',
    clientPhone: '+238 555 66 77',
    estimatedAmount: 2500,
    expectedCommissionRate: 15,
    expectedCommissionAmount: 375,
    status: 'cancelled',
    commissionStatus: 'pending',
    dateCreated: daysAgo(30),
    dateContacted: daysAgo(28),
    internalNotes: 'Client a annulé l\'achat.',
  },
  {
    id: 'lead_009',
    trackingCode: 'CAPVERT-2024-12-009',
    serviceId: 'law_santos_associados',
    serviceName: 'Santos & Associados',
    serviceType: 'lawyer',
    clientName: 'Robert Johnson',
    clientEmail: 'r.johnson@corporate.com',
    clientPhone: '+44 7700 900000',
    estimatedAmount: 5000,
    expectedCommissionRate: 15,
    expectedCommissionAmount: 750,
    status: 'completed',
    commissionStatus: 'paid',
    dateCreated: daysAgo(60),
    dateCompleted: daysAgo(20),
    datePaid: daysAgo(5),
  },
  {
    id: 'lead_010',
    trackingCode: 'CAPVERT-2024-12-010',
    serviceId: 'bank_bca',
    serviceName: 'Banco Comercial do Atlântico',
    serviceType: 'bank',
    clientName: 'Elena Gomes',
    clientEmail: 'elena.g@gmail.com',
    clientPhone: '+33 6 00 00 00 00',
    estimatedAmount: 100000,
    expectedCommissionRate: 0.5,
    expectedCommissionAmount: 500,
    status: 'new',
    commissionStatus: 'pending',
    dateCreated: daysAgo(2),
  }
];

export const getLeadsByService = (serviceId: string) => {
  return mockServiceLeads.filter(l => l.serviceId === serviceId);
};

export const calculateTotalCommissions = (status?: 'paid' | 'pending' | 'invoiced') => {
  let leads = mockServiceLeads;
  if (status) {
    leads = leads.filter(l => l.commissionStatus === status);
  } else {
    // If no status specified, verify confirmed leads usually
    // But for a dashboard total, we might want "earned" (paid) or "potential" (all)
    // Let's assume this calculates ALL commissions regardless of status unless specified
  }

  return leads.reduce((acc, lead) => {
    // Use actual if available, otherwise expected
    const amount = lead.actualCommissionAmount || lead.expectedCommissionAmount || 0;
    // Don't count cancelled
    if (lead.status === 'cancelled') return acc;
    return acc + amount;
  }, 0);
};

export const getPendingCommissions = () => {
  return calculateTotalCommissions('pending');
};

export const getPaidCommissions = () => {
  return calculateTotalCommissions('paid');
};
