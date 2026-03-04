export interface Book {
    title: string;
    author: string;
    year: number;
    description: string;
    cover: string | null;
    rating: number;
    genres: string[];
}