// constants/filters.ts
import type { FilterType, FilterSort } from "../types/filter"

export const TYPE_FILTERS: { label: string; value: FilterType }[] = [
  { label: "All",         value: "all" },
  { label: "🎬 Film",     value: "film" },
  { label: "📺 TV Series", value: "tv" },
  { label: "Mini-Series", value: "mini-series" },
]



export const SORT_FILTERS: { label: string; value: FilterSort }[] = [
  { label: "⭐ Top Rated",   value: "rating" },
  { label: "🗓 Oldest First", value: "oldest" },
  { label: "🗓 Newest First", value: "newest" },
]