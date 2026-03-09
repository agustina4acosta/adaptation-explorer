import type { Adaptation } from "../types/adaptation";
import type { WikidataBinding, WikidataResponse } from "../types/wikidata";

const WIKIDATA_ENDPOINT = "https://query.wikidata.org/sparql";

const SMALL_WORDS = new Set(['a','an','the','and','but','or','for','nor','on','at','to','by','in','of','up','as','if','so','yet']);

const toTitleCase = (str: string): string =>
  str
    .split(' ')
    .map((word, i) =>
      i === 0 || !SMALL_WORDS.has(word.toLowerCase())
        ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        : word.toLowerCase()
    )
    .join(' ');

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
  poster:   null,
  type:     "film",
});

export const fetchAdaptations = async (bookTitle: string): Promise<Adaptation[]> => {
  const normalizedTitle = toTitleCase(bookTitle);
  const url = `${WIKIDATA_ENDPOINT}?query=${encodeURIComponent(buildAdaptationsQuery(normalizedTitle))}&format=json`;

  const res = await fetch(url);
  if (!res.ok) throw new Error(`Wikidata error: ${res.status}`);

  const data: WikidataResponse = await res.json();
  const seen = new Set<string>();
  return data.results.bindings.reduce<Adaptation[]>((acc, item) => {
    const adaptation = toAdaptation(item);
    if (!seen.has(adaptation.wikiID)) {
      seen.add(adaptation.wikiID);
      acc.push(adaptation);
    }
    return acc;
  }, []);
};
