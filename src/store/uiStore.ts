import { create } from 'zustand';

interface UiState {
  isMobileMenuOpen: boolean;
  selectedProteinId: string | null;
  toggleMobileMenu: () => void;
  setMobileMenuOpen: (val: boolean) => void;
  setSelectedProteinId: (id: string | null) => void;
}

export const useUiStore = create<UiState>((set) => ({
  isMobileMenuOpen: false,
  selectedProteinId: null,
  toggleMobileMenu: () => set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
  setMobileMenuOpen: (val) => set({ isMobileMenuOpen: val }),
  setSelectedProteinId: (id) => set({ selectedProteinId: id }),
}));

export default useUiStore;
