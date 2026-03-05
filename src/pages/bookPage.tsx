import BookInfo from "../components/bookInfo";
import { useBookSearch } from "../hooks/useBookSearch";

const BookPage = () => {
  const { data: book } = useBookSearch();


  return (
    <main className="max-w-7xl mx-auto px-12 py-12">
      <div className="flex gap-10">
        {book && <BookInfo book={book} />}
        <div className="flex-1">
          <h2 className="font-fraunces text-2xl font-bold">All Adaptations</h2>
        </div>
      </div>
    </main>
  );
};
export default BookPage;
