// store/useFilterStore.ts
import { create } from "zustand"
import type { Filter } from "../types/filter"


interface FilterStore {
  filters: Filter
  setType:    (type: Filter["type"])    => void
  setSort:    (sort: Filter["sort"])    => void
  reset:      () => void
}

const defaultFilters: Filter = {
  type:    "all",
  sort:    "rating",
}

export const useFilterStore = create<FilterStore>((set) => ({
  filters: defaultFilters,
  setType:    (type)    => set((s) => ({ filters: { ...s.filters, type } })),
 
  setSort:    (sort)    => set((s) => ({ filters: { ...s.filters, sort } })),
  reset:      ()        => set({ filters: defaultFilters }),
}))