const Search = () => {
    return (
        <div className="flex flex-col gap-3 max-w-120">
            <div className="flex bg-white border-[2.5px] border-[#5C3A1E] rounded overflow-hidden">
                <input
                    type="text"
                    placeholder="Search a book..."
                    className="flex-1 border-none outline-none px-4.5 py-3.5 font-syne text-[0.95rem] text-[#2B1A0E] bg-transparent placeholder:text-[#C49A6C]"
                />
                <button className="
                    bg-[#5C3A1E] text-[#F0B429]
                    border-none px-6 py-3.5
                    font-syne text-[0.8rem] font-bold tracking-widest uppercase
                    cursor-pointer transition-colors duration-200
                    hover:bg-[#E8560A] hover:text-white
                ">
                    Explore →
                </button>
            </div>
        </div>
    )
}
export default Search