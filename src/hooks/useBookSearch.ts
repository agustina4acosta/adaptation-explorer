// hooks/useBookSearch.ts
import { useQuery } from "@tanstack/react-query"
import { fetchGoogleBooks } from "../lib/googleBooks"
import { useSearchStore } from "../store/useSearchStore"

export const useBookSearch = () => {
  const query = useSearchStore((s) => s.query)

  return useQuery({
    queryKey:  ["book", query],
    queryFn:   () => fetchGoogleBooks(query),
    enabled:   !!query,
    staleTime: 1000 * 60 * 5,
  })
}