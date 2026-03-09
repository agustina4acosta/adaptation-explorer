
import AdaptationInfo from "../components/adaptationInfo";
import BookInfo from "../components/bookInfo";
import FilterBar from "../components/filters/barFilter";
import { useAdaptations } from "../hooks/useAdaptations";
import { useBookSearch } from "../hooks/useBookSearch";
import { useIMDbData } from "../hooks/useIMDbData";
import type { Adaptation } from "../types/adaptation";
import type { IMDbData } from "../types/imdb";

type Featured = { adaptation: Adaptation; imdb: IMDbData };

const getFeatured = (adaptations: Adaptation[], imdbData: IMDbData[]): Featured | null =>
  adaptations
    .flatMap((a) => {
      const imdb = imdbData.find((d) => d.imdbId === a.imdbID);
      return imdb ? [{ adaptation: a, imdb }] : [];
    })
    .sort((a, b) => b.imdb.votes - a.imdb.votes)[0] ?? null;

const BookPage = () => {
  const { data: book } = useBookSearch();
  const { data: adaptations = [] } = useAdaptations();
  const { data: imdbData = [] } = useIMDbData();

  const featured = getFeatured(adaptations, imdbData);

  return (
    <main className="max-w-7xl mx-auto px-12 py-12">
      <div className="flex gap-10">
        {book && <BookInfo book={book} />}
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="font-['Fraunces'] text-2xl font-bold">All Adaptations</h2>
          <FilterBar />
          {featured && <AdaptationInfo adaptation={featured.adaptation} imdb={featured.imdb} />}
        </div>
      </div>
    </main>
  );
};
export default BookPage;
