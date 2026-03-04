import RetroPoster from "../components/book";
import Header from "../components/layout/header";
import Search from "../components/search";
import EyebrowTag from "../components/ui/tag";
import StatsRibbon from "../components/statsRibbon";
import { useAdaptations } from "../hooks/useAdaptations";
import { useIMDbData } from "../hooks/useIMDbData";

const Home = () => {
  const { data: adaptations } = useAdaptations();
  const { data: imdbData } = useIMDbData();

  const years = (adaptations ?? []).map((a) => a.year ?? 0).filter(Boolean);
  const ratings = (imdbData ?? []).map((d) => d.rating).filter(Boolean);

  const stats = {
    total: adaptations?.length ?? 0,
    countries: new Set(adaptations?.map((a) => a.country)).size,
    yearMin: years.length ? Math.min(...years) : 0,
    yearMax: years.length ? Math.max(...years) : 0,
    avgRating: ratings.length
      ? (ratings.reduce((acc, r) => acc + r, 0) / ratings.length).toFixed(1)
      : "N/A",
  };

  return (
    <>
      <div>
        <Header />
        <section className="px-12 py-16 max-w-7xl mx-auto grid grid-cols-2 gap-12 items-center">
          <div>
            <EyebrowTag
              icon={<span>📖</span>}
              text="Page to Screen"
              variant="primary"
            />

            <h1 className="font-['Fraunces'] text-7xl font-bold leading-[0.95] tracking-tight mt-5 mb-6">
              Every book. <br />
              <em className="text-[#E8560A]">Every screen.</em> <br />
              Every corner <br />
              of the world.
            </h1>

            <p className="text-[#5C3A1E] text-sm leading-relaxed max-w-sm mb-8">
              Discover how your favorite books were adapted across decades and
              continents - from hollywood blockbusters to hidden gems. Explore
              the stories behind the stories, and find your next great read or
              watch.
            </p>

            <Search />
          </div>

          <div className="flex items-center justify-center">
            <RetroPoster />
          </div>
        </section>
        <StatsRibbon stats={stats} />
      </div>
    </>
  );
};
export default Home;
