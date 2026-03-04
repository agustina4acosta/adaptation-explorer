import type { Book } from "../types/book";

export const fetchGoogleBooks = async (query: string): Promise<Book> => {
    const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&key=${import.meta.env.VITE_GOOGLE_BOOKS_KEY}`
    )
    if (!res.ok) throw new Error(`Google Books error: ${res.status}`)

    const data = await res.json()
    if (!data.items?.length) throw new Error(`No results found for "${query}"`)

    const item = data.items[0].volumeInfo

    return {
        title:       item.title,
        author:      item.authors?.[0] ?? "Unknown",
        year:        parseInt(item.publishedDate) || 0,
        description: item.description ?? "",
        cover:       item.imageLinks?.thumbnail ?? null,
        rating:      item.averageRating ?? 0,
        genres:      item.categories ?? [],
    }
}