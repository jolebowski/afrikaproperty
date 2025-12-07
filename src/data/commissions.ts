import type { Commission } from "../types";

export const commissions: Commission[] = [
  {
    id: "com1",
    propertyId: "prop1",
    agentId: "user1",
    agencyId: "agency1",
    propertyTitle: "Villa Moderne avec Piscine",
    salePrice: 450000,
    commissionRate: 2.5,
    commissionAmount: 11250,
    currency: "EUR",
    status: "paid",
    saleDate: "2024-11-15",
    paidDate: "2024-11-20",
    paymentMethod: "virement",
    notes: "Virement effectué le 20/11",
    createdAt: "2024-11-15T10:00:00Z",
    updatedAt: "2024-11-20T14:30:00Z",
  },
  {
    id: "com2",
    propertyId: "prop2",
    agentId: "user1",
    agencyId: "agency1",
    propertyTitle: "Appartement Vue Mer",
    salePrice: 280000,
    commissionRate: 3.0,
    commissionAmount: 8400,
    currency: "EUR",
    status: "pending",
    saleDate: "2024-12-01",
    notes: "En attente de paiement client",
    createdAt: "2024-12-01T09:15:00Z",
    updatedAt: "2024-12-01T09:15:00Z",
  },
  {
    id: "com3",
    propertyId: "prop3",
    agentId: "user2",
    agencyId: "agency1",
    propertyTitle: "Maison de Ville Rénovée",
    salePrice: 320000,
    commissionRate: 2.0,
    commissionAmount: 6400,
    currency: "EUR",
    status: "paid",
    saleDate: "2024-10-20",
    paidDate: "2024-10-25",
    paymentMethod: "cheque",
    notes: "Chèque n°4521789",
    createdAt: "2024-10-20T11:30:00Z",
    updatedAt: "2024-10-25T16:00:00Z",
  },
  {
    id: "com4",
    propertyId: "prop4",
    agentId: "user1",
    agencyId: "agency1",
    propertyTitle: "Terrain Constructible",
    salePrice: 150000,
    commissionRate: 4.0,
    commissionAmount: 6000,
    currency: "EUR",
    status: "pending",
    saleDate: "2024-12-05",
    createdAt: "2024-12-05T14:20:00Z",
    updatedAt: "2024-12-05T14:20:00Z",
  },
  {
    id: "com5",
    propertyId: "prop5",
    agentId: "user3",
    agencyId: "agency2",
    propertyTitle: "Studio Centre-Ville",
    salePrice: 95000,
    commissionRate: 3.5,
    commissionAmount: 3325,
    currency: "EUR",
    status: "paid",
    saleDate: "2024-09-10",
    paidDate: "2024-09-15",
    paymentMethod: "virement",
    notes: "Commission réglée rapidement",
    createdAt: "2024-09-10T10:45:00Z",
    updatedAt: "2024-09-15T09:00:00Z",
  },
  {
    id: "com6",
    propertyId: "prop6",
    agentId: "user2",
    agencyId: "agency1",
    propertyTitle: "Duplex avec Terrasse",
    salePrice: 380000,
    commissionRate: 2.5,
    commissionAmount: 9500,
    currency: "EUR",
    status: "pending",
    saleDate: "2024-12-03",
    notes: "Négociation en cours pour le paiement",
    createdAt: "2024-12-03T15:30:00Z",
    updatedAt: "2024-12-03T15:30:00Z",
  },
  {
    id: "com7",
    propertyId: "prop7",
    agentId: "user1",
    agencyId: "agency1",
    propertyTitle: "Villa Bord de Mer",
    salePrice: 850000,
    commissionRate: 2.0,
    commissionAmount: 17000,
    currency: "EUR",
    status: "paid",
    saleDate: "2024-08-25",
    paidDate: "2024-09-01",
    paymentMethod: "virement",
    notes: "Grosse vente, commission importante",
    createdAt: "2024-08-25T13:00:00Z",
    updatedAt: "2024-09-01T10:00:00Z",
  },
  {
    id: "com8",
    propertyId: "prop8",
    agentId: "user3",
    agencyId: "agency2",
    propertyTitle: "Appartement T3 Neuf",
    salePrice: 220000,
    commissionRate: 3.0,
    commissionAmount: 6600,
    currency: "EUR",
    status: "pending",
    saleDate: "2024-11-28",
    createdAt: "2024-11-28T09:00:00Z",
    updatedAt: "2024-11-28T09:00:00Z",
  },
];

// Helper function to get commissions by agent
export const getCommissionsByAgent = (agentId: string): Commission[] => {
  return commissions.filter((commission) => commission.agentId === agentId);
};

// Helper function to get commissions by agency
export const getCommissionsByAgency = (agencyId: string): Commission[] => {
  return commissions.filter((commission) => commission.agencyId === agencyId);
};

// Helper function to calculate total commissions for an agent
export const calculateTotalCommissions = (agentId: string): number => {
  const agentCommissions = getCommissionsByAgent(agentId);
  return agentCommissions.reduce((total, commission) => total + commission.commissionAmount, 0);
};

// Helper function to get pending commissions
export const getPendingCommissions = (agencyId?: string): Commission[] => {
  let pendingCommissions = commissions.filter((commission) => commission.status === "pending");
  if (agencyId) {
    pendingCommissions = pendingCommissions.filter((commission) => commission.agencyId === agencyId);
  }
  return pendingCommissions;
};

// Helper function to get paid commissions
export const getPaidCommissions = (agencyId?: string): Commission[] => {
  let paidCommissions = commissions.filter((commission) => commission.status === "paid");
  if (agencyId) {
    paidCommissions = paidCommissions.filter((commission) => commission.agencyId === agencyId);
  }
  return paidCommissions;
};

// Helper function to get recent commissions (last 30 days)
export const getRecentCommissions = (agencyId?: string): Commission[] => {
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

  let recentCommissions = commissions.filter((commission) => {
    const saleDate = new Date(commission.saleDate);
    return saleDate >= thirtyDaysAgo;
  });

  if (agencyId) {
    recentCommissions = recentCommissions.filter((commission) => commission.agencyId === agencyId);
  }

  return recentCommissions.sort((a, b) =>
    new Date(b.saleDate).getTime() - new Date(a.saleDate).getTime()
  );
};

// Helper function to calculate commission stats
export const getCommissionStats = (agencyId: string) => {
  const agencyCommissions = getCommissionsByAgency(agencyId);
  const pendingCommissions = agencyCommissions.filter(c => c.status === "pending");
  const paidCommissions = agencyCommissions.filter(c => c.status === "paid");

  const totalPending = pendingCommissions.reduce((sum, c) => sum + c.commissionAmount, 0);
  const totalPaid = paidCommissions.reduce((sum, c) => sum + c.commissionAmount, 0);
  const totalCommissions = totalPending + totalPaid;

  return {
    totalCommissions,
    totalPending,
    totalPaid,
    countPending: pendingCommissions.length,
    countPaid: paidCommissions.length,
    countTotal: agencyCommissions.length,
  };
};