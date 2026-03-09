import { SORT_FILTERS, TYPE_FILTERS } from "../../constants/filter"
import { useFilterStore } from "../../store/useFilterStore"
import FilterGroup from "../filterGroup"

const FilterBar = () => {
    const { filters, setType, setSort, reset } = useFilterStore()
    return(
     <div className="flex flex-col gap-3">
        <FilterGroup
        options={TYPE_FILTERS}
        active={filters.type}
        onChange={setType}
      />

       <FilterGroup
        options={SORT_FILTERS}
        active={filters.sort}
        onChange={setSort}
      />
     {(filters.type !== "all" ) && (
        <button
          onClick={reset}
          className="self-start text-xs text-[#C49A6C] underline font-mono uppercase tracking-widest"
        >
          Clear filters
        </button>
      )}
        
     </div>
    )
}
export default FilterBar