 interface Stats {
    total: number;
    countries: number;
    yearMin: number;
    yearMax: number;
    avgRating: string;
 }
 interface StatsRibbonProps {
    stats: Stats;
 }

const StatsRibbon = ({stats}: StatsRibbonProps) => {

    return (
        <>
        <div className="bg-[#5C3A1E] flex justify-center">
            <StateItem value={stats.total} label="total" />
            <StateItem value={stats.countries} label="countries" />
            <StateItem value={`${stats.yearMin} - ${stats.yearMax}`} label="years range" />
            <StateItem value={stats.avgRating} label="avg. rating" />

            
        </div>
        
        </>

    )
}

const StateItem = ({value, label}: {value: string | number, label: string}) => (
    <div className="
    flex flex-col items-center
    px-12 py-5 flex-1 max-w-55
    border-r border-[#C49A6C]/30 last:border-r-0
    ">
        <span className="font-fraunces text-3xl font-bold text-[#F0B429] leading-none" >{value}</span>
        <span className="font-mono text-[0.65rem] text-[#C49A6C] uppercase tracking-widest mt-1 font-bold">{label}</span>
    </div>
)
export default StatsRibbon