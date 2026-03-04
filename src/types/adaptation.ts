export interface Adaptation {
    wikiID: string;
    imdbID: string | null;
    title: string;
    year: number | null;
    country: string;
    language: string;
    type: "film" | "tv" | "mini-series";
}