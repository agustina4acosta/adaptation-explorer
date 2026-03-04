const RetroPoster = () => (
  <div className="flex items-center justify-center py-10">
    
    {/* Poster principal */}
    <div className="
      relative
      w-60 h-80 bg-[#5C3A1E] rounded
      border-[3px] border-[#2B1A0E]
      flex flex-col items-center justify-center p-6
      shadow-[8px_8px_0_#E8560A]
      animate-float
    ">
      {/* Arco superior */}
      <div className="w-full h-28 bg-[#E8560A] rounded-[60px_60px_0_0] flex items-center justify-center text-4xl mb-4">
        📽
      </div>

      <p className="font-['Fraunces'] italic text-[#F0B429] text-lg text-center leading-tight">
        Wuthering<br />Heights
      </p>

      <div className="w-3/5 h-px bg-[#C49A6C] my-2" />

      <p className="font-mono text-[0.55rem] text-[#C49A6C] uppercase tracking-widest text-center">
        24 Adaptations<br />14 Countries
      </p>

      <span className="absolute bottom-4 right-4 font-mono text-[#E8560A] text-xs font-bold">
        1847
      </span>

      {/* Badge top derecha */}
      <div className="
        absolute -top-8 -right-8
        w-16 h-16 bg-[#F0B429]
        border-2 border-[#5C3A1E]
        rounded-full flex flex-col items-center justify-center
        font-['Fraunces'] text-[0.6rem] font-bold text-[#5C3A1E] text-center leading-tight
        shadow-[2px_2px_0_#5C3A1E]
        rotate-12
      ">
        ★ IMDb<br />7.8
      </div>

      {/* Badge bottom izquierda */}
      <div className="
        absolute -bottom-8 -left-8
        w-16 h-16 bg-[#F0B429]
        border-2 border-[#5C3A1E]
        rounded-full flex flex-col items-center justify-center
        font-['Fraunces'] text-[0.6rem] font-bold text-[#5C3A1E] text-center leading-tight
        shadow-[2px_2px_0_#5C3A1E]
        -rotate-8
      ">
        🇯🇵 Japan<br />1988
      </div>

    </div>

  </div>
)

export default RetroPoster