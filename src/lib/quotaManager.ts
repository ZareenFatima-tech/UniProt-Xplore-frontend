// Quota & Subscription Management Helper

const STORAGE_KEY_PROTEINS = 'uniprot_xplore_analyzed_proteins';
const STORAGE_KEY_SUBSCRIBED = 'uniprot_xplore_lab_plan_active';

export interface QuotaStatus {
  count: number;
  max: number;
  isExceeded: boolean;
  isSubscribed: boolean;
  proteins: string[];
}

export function getQuotaStatus(): QuotaStatus {
  if (typeof window === 'undefined') {
    return { count: 0, max: 3, isExceeded: false, isSubscribed: false, proteins: [] };
  }

  const isSubscribed = localStorage.getItem(STORAGE_KEY_SUBSCRIBED) === 'true';
  const rawProteins = localStorage.getItem(STORAGE_KEY_PROTEINS);
  const proteins: string[] = rawProteins ? JSON.parse(rawProteins) : [];

  const count = proteins.length;
  const max = 3;
  const isExceeded = !isSubscribed && count >= max;

  return {
    count,
    max,
    isExceeded,
    isSubscribed,
    proteins
  };
}

export function canAnalyzeProtein(proteinId: string): boolean {
  if (typeof window === 'undefined') return true;

  const { isSubscribed, count, max, proteins } = getQuotaStatus();
  if (isSubscribed) return true;

  const formattedId = proteinId.trim().toUpperCase();
  const alreadyAnalyzed = proteins.includes(formattedId);

  if (alreadyAnalyzed) return true;
  return count < max;
}

export function recordProteinAnalysis(proteinId: string): boolean {
  if (typeof window === 'undefined') return true;

  const { isSubscribed, proteins } = getQuotaStatus();
  const formattedId = proteinId.trim().toUpperCase();

  if (proteins.includes(formattedId)) return true;

  if (!isSubscribed && proteins.length >= 3) {
    return false; // Quota exceeded
  }

  const updated = [...proteins, formattedId];
  localStorage.setItem(STORAGE_KEY_PROTEINS, JSON.stringify(updated));
  return true;
}

export function activateLabPlanSubscription(): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY_SUBSCRIBED, 'true');
}
