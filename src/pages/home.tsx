import RetroPoster from "../components/book";
import Header from "../components/header";
import Search from "../components/search";
import EyebrowTag from "../components/tag";

const Home = () => {
    return (
        <>
       <div>
        <Header />
    <section className="px-12 py-16 max-w-7xl mx-auto grid grid-cols-2 gap-12 items-center">
  
  <div>
    <EyebrowTag icon={<span>📖</span>} text="Page to Screen" variant="primary" />
    
    <h1 className="font-['Fraunces'] text-7xl font-bold leading-[0.95] tracking-tight mt-5 mb-6">
      Every book. <br />
      <em className="text-[#E8560A]">Every screen.</em> <br />
      Every corner <br />
      of the world.
    </h1>

    <p className="text-[#5C3A1E] text-sm leading-relaxed max-w-sm mb-8">
      Discover how your favorite books were adapted across 
      decades and continents - from
      hollywood blockbusters to hidden gems. 
      Explore the stories behind the stories, and find your next great read or watch.
    </p>
  
    <Search />


  </div>

  <div className="flex items-center justify-center">
    <RetroPoster />
  </div>

</section>
       </div>
        </>
    )
}
export default Home;