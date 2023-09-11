import Navbar from "./components/navbar";
import MovieHeroData from "./components/movie_hero_data"
const App = () => {

  return (
    // wrapper
		<section className="border border-red-500 h-[120rem]">

      {/* hero-section */}
      <section className="h-[37.5rem] bg-hero_bg flex flex-col gap-10">
        <Navbar />
        <MovieHeroData />
      </section>

    </section>
	);
}

export default App
