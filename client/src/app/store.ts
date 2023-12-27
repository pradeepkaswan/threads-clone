import { create } from 'zustand'

const useBearStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((space) => ({ bears: state.bears + 1 })),
}))
