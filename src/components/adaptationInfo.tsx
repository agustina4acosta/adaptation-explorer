import type { Adaptation } from "../types/adaptation";
import type { IMDbData } from "../types/imdb";

interface AdaptationFeaturedProps {
  adaptation: Adaptation;
  imdb: IMDbData;
}

const AdaptationInfo = ({ adaptation, imdb }: AdaptationFeaturedProps) => (
  <div className="bg-[#5C3A1E] border-2 border-[#2B1A0E] rounded p-5 flex gap-5 items-start shadow-[4px_4px_0_#E8560A]">
    {/* Poster */}
    <div className="w-28 h-40 rounded shrink-0 bg-[#E8560A] border-2 border-white/15 flex items-center justify-center text-3xl overflow-hidden">
      {imdb.poster
        ? <img src={imdb.poster} alt={adaptation.title} className="w-full h-full object-cover" />
        : <span>🎬</span>
      }
    </div>

    {/* Info */}
    <div className="flex flex-col gap-2">
      <span className="font-mono text-[0.6rem] uppercase tracking-widest text-[#F0B429]">
        ⭐ Featured adaptation
      </span>
      <h3 className="font-['Fraunces'] text-xl font-bold text-white leading-tight">
        {adaptation.title}
      </h3>
      <p className="font-mono text-xs text-[#C49A6C]">
        {adaptation.year} · {adaptation.country} · {adaptation.type}
      </p>
      <div className="flex items-center gap-3 mt-1">
        <span className="font-['Fraunces'] text-3xl font-bold text-[#F0B429]">
          {imdb.rating}
        </span>
        <div className="flex flex-col">
          <span className="font-mono text-[0.6rem] uppercase tracking-widest text-[#C49A6C]">IMDb rating</span>
          <span className="font-mono text-xs text-[#C49A6C]">{imdb.votes.toLocaleString()} votes</span>
        </div>
      </div>
      {adaptation.imdbID && (
        <a
          href={`https://www.imdb.com/title/${adaptation.imdbID}`}
          target="_blank"
          rel="noreferrer"
          className="self-start font-mono text-xs text-[#E8560A] border border-[#E8560A] px-2 py-0.5 rounded hover:bg-[#E8560A] hover:text-white transition-all mt-1"
        >
          View on IMDb →
        </a>
      )}
    </div>
  </div>
);

export default AdaptationInfo;
