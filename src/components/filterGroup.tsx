const FilterGroup = <T extends string>({
  options,
  active,
  onChange,
}: {
  options:  { label: string; value: T }[]
  active:   T
  onChange: (value: T) => void
}) => (
  <div className="flex gap-2 flex-wrap">
    {options.map(({ label, value }) => (
      <button
        key={value}
        onClick={() => onChange(value)}
        className={`
          px-4 py-1.5
          rounded-sm
          text-xs font-bold
          uppercase tracking-widest
          border-2 border-[#5C3A1E]
          transition-all duration-150
          ${active === value
            ? "bg-[#5C3A1E] text-[#F0B429]"
            : "bg-transparent text-[#5C3A1E] hover:bg-[#F0B429] hover:border-[#5C3A1E]"
          }
        `}
      >
        {label}
      </button>
    ))}
  </div>
)
export default FilterGroup