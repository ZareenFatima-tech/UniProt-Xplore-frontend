import { create } from 'zustand';

interface ScrollState {
  scrollYProgress: number;
  activeStage: number;
  setScrollYProgress: (val: number) => void;
  setActiveStage: (val: number) => void;
}

export const useScrollStore = create<ScrollState>((set) => ({
  scrollYProgress: 0,
  activeStage: 0,
  setScrollYProgress: (val) => set({ scrollYProgress: val }),
  setActiveStage: (val) => set({ activeStage: val }),
}));

export default useScrollStore;
