import type { IMDbData } from "../types/imdb"

export const fetchIMDbData = async (imdbIds: string[]): Promise<IMDbData[]> => {
  const results = await Promise.all(
    imdbIds.map(async (id) => {
      const res = await fetch(
        `https://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_OMDB_KEY}`
      )
      if (!res.ok) throw new Error(`OMDb error ${res.status} for ${id}`)

      const data = await res.json()
      return {
        imdbId:  id,
        rating:  parseFloat(data.imdbRating) || 0,
        votes:   parseInt(data.imdbVotes?.replace(",", "")) || 0,
        runtime: parseInt(data.Runtime) || 0,
        poster:  data.Poster !== "N/A" ? data.Poster : null,
      }
    })
  )
  return results
}