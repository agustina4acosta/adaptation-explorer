import type { Adaptation } from "../types/adaptation";
import type { WikidataBinding, WikidataResponse } from "../types/wikidata";

const WIKIDATA_ENDPOINT = "https://query.wikidata.org/sparql";

const buildAdaptationsQuery = (bookTitle: string): string => `
  SELECT ?film ?filmLabel ?imdbId ?countryLabel ?langLabel ?year WHERE {
    ?film wdt:P144 ?book .
    ?book rdfs:label "${bookTitle}"@en .
    OPTIONAL { ?film wdt:P345 ?imdbId }
    OPTIONAL { ?film wdt:P495 ?country }
    OPTIONAL { ?film wdt:P364 ?lang }
    OPTIONAL { ?film wdt:P577 ?date . BIND(YEAR(?date) AS ?year) }
    SERVICE wikibase:label { bd:serviceParam wikibase:language "en" }
  }
`;

const toAdaptation = (item: WikidataBinding): Adaptation => ({
  wikiID:   item.film.value,
  imdbID:   item.imdbId?.value ?? null,
  title:    item.filmLabel.value,
  year:     item.year ? Number(item.year.value) : null,
  country:  item.countryLabel?.value ?? "Unknown",
  language: item.langLabel?.value ?? "Unknown",
  type:     "film",
});

export const fetchAdaptations = async (bookTitle: string): Promise<Adaptation[]> => {
  const url = `${WIKIDATA_ENDPOINT}?query=${encodeURIComponent(buildAdaptationsQuery(bookTitle))}&format=json`;

  const res = await fetch(url);
  if (!res.ok) throw new Error(`Wikidata error: ${res.status}`);

  const data: WikidataResponse = await res.json();
  return data.results.bindings.map(toAdaptation);
};
