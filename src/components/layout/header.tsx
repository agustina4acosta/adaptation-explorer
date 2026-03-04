const Header = () => {
    const sections = [
        { name: "discover", href: "/" },
        { name: "by author", href: "/by-author" },
        { name: "by era", href: "/by-era" },
        { name: "saved ★", href: "/saved" },
    ]
    return (
        <>
        <div className="bg-[#E8560A] w-full h-full flex flex-row items-center justify-between">
            <h1 className="font-fraunces font-bold text-xl text-[#EAD9BC] p-5 ml-10 gap-10">Adaptation <br />
                Explorer</h1>

             <nav>
                <ul className="flex gap-7 list-none mr-10">
                    {sections.map((section, index)=> (
                        <li key={section.name} className={`text-[0.78rem] font-bold tracking-[0.12em] uppercase last:cursor-pointer ${index === sections.length - 1 ? 'text-[#FFD166]' : 'text-[rgba(242,232,213,0.75)]'}`}>
                            <a href={section.href}>{section.name}</a>
                        </li>
                    ))}
                </ul>
             </nav>
        </div>
        </>
    )
}
export default Header;