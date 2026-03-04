export interface WikidataBinding {
  film:          { value: string };
  filmLabel:     { value: string };
  imdbId?:       { value: string };
  countryLabel?: { value: string };
  langLabel?:    { value: string };
  year?:         { value: string };
}

export interface WikidataResponse {
  results: {
    bindings: WikidataBinding[];
  };
}
