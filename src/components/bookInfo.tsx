import type { Book } from "../types/book";
import EyebrowTag from "./ui/tag";

interface BookCardProps {
    book: Book;
}
const BookInfo = ({ book }: BookCardProps) => (
  <aside className="w-72 shrink-0 sticky top-20 bg-white border-2 border-[#5C3A1E] rounded shadow-[5px_5px_0_#5C3A1E] overflow-hidden">
    <div className="p-5 flex flex-col gap-4">

      {/* Imagen directo acá */}
      {book.cover && (
        <img
          src={book.cover}
          alt={book.title}
          className="w-full h-64 object-cover rounded"
        />
      )}

      <div>
        <h2 className="font-['Fraunces'] text-xl font-bold leading-tight">
          {book.title}
        </h2>
        <p className="text-xs text-[#C49A6C] font-semibold mt-1">
          {book.author} · {book.year}
        </p>
      </div>

      <div className="flex gap-1.5 flex-wrap">
        {book.genres.map((genre, i) => (
          <EyebrowTag
            key={genre}
            text={genre}
            variant={i === 0 ? "primary" : "outline"}
          />
        ))}
      </div>

      <p className="text-xs text-[#6B4E30] leading-relaxed line-clamp-3">
        {book.description}
      </p>

      <div className="flex items-center justify-between bg-[#F2E8D5] border border-[#C49A6C] rounded p-3">
        <div className="flex flex-col gap-1">
          <span className="font-mono text-[0.6rem] uppercase tracking-widest text-[#C49A6C] font-bold">
            Google Books
          </span>
          <span className="text-[#F0B429] text-xs tracking-widest">
            {"★".repeat(Math.round(book.rating))}
            {"☆".repeat(5 - Math.round(book.rating))}
          </span>
        </div>
        <span className="font-['Fraunces'] text-2xl text-[#E8560A] font-bold">
          {book.rating}
        </span>
      </div>

    </div>
  </aside>
)
export default BookInfo;
