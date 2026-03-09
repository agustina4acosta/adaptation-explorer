import { useQuery, keepPreviousData } from "@tanstack/react-query"
import { fetchAdaptations } from "../lib/wikidata"
import { useSearchStore } from "../store/useSearchStore"

export const useAdaptations = () => {
  const query = useSearchStore((s) => s.query)  

  return useQuery({
    queryKey: ["adaptations", query],
    queryFn:  () => fetchAdaptations(query),    
    enabled:  !!query,
    placeholderData: keepPreviousData,
  })
}