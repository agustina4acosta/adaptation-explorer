export interface Adaptation {
    wikiID: string;
    imdbID: string | null;
    title: string;
    year: number | null;
    country: string;
    language: string;
    poster: string | null;
    type: "film" | "tv" | "mini-series";
}

export interface CountryCount {
    country: string;
    count: number;
}