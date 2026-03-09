export type FilterType = "all" | "film" | "tv" | "mini-series"
export type FilterSort = "rating" | "oldest" | "newest"

export interface Filter {
    type: FilterType
    sort: FilterSort
}