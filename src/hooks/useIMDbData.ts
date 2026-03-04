import { useQuery } from "@tanstack/react-query"
import { fetchIMDbData } from "../lib/imdb"
import { useAdaptations } from "./useAdaptations"

export const useIMDbData = () => {
  const { data: adaptations } = useAdaptations()

  const imdbIds = (adaptations ?? [])
    .map((a) => a.imdbID)
    .filter(Boolean) as string[]

  return useQuery({
    queryKey: ["imdb", imdbIds],
    queryFn:  () => fetchIMDbData(imdbIds),
    enabled:  imdbIds.length > 0,
  })
}
