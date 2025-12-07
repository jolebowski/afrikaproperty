import { commissions as MOCK_COMMISSIONS } from '../data/commissions';
import type { Commission } from '../types';

const STORAGE_KEY = 'capvert_commissions';

// Initialize storage with mock data if empty
export function initCommissionStore() {
  if (!localStorage.getItem(STORAGE_KEY)) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(MOCK_COMMISSIONS));
  }
}

export function getStoredCommissions(agencyId: string): Commission[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    const allCommissions: Commission[] = stored ? JSON.parse(stored) : MOCK_COMMISSIONS;
    return allCommissions.filter(c => c.agencyId === agencyId);
  } catch (e) {
    console.error("Failed to load commissions", e);
    return [];
  }
}

export function addCommission(commission: Commission) {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    const allCommissions: Commission[] = stored ? JSON.parse(stored) : MOCK_COMMISSIONS;

    const newCommissions = [commission, ...allCommissions];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newCommissions));
    return true;
  } catch (e) {
    console.error("Failed to save commission", e);
    return false;
  }
}

export function updateCommissionStatus(id: string, status: 'pending' | 'paid') {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    let allCommissions: Commission[] = stored ? JSON.parse(stored) : MOCK_COMMISSIONS;

    allCommissions = allCommissions.map(c =>
      c.id === id
        ? { ...c, status, paidDate: status === 'paid' ? new Date().toISOString() : undefined, updatedAt: new Date().toISOString() }
        : c
    );

    localStorage.setItem(STORAGE_KEY, JSON.stringify(allCommissions));
    return true;
  } catch (e) {
    console.error("Failed to update commission", e);
    return false;
  }
}
