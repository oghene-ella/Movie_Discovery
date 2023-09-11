import Navbar from "./components/navbar";
import MovieHeroData from "./components/movie_hero_data"
import Movies from "./components/theMovies"
import Footer from "./components/footer"

const App = () => {

  return (
    // wrapper
		<section className="h-fit">

      {/* hero-section */}
      <section className="h-[37.5rem] bg-hero_bg flex flex-col gap-10">
        <Navbar />
        <MovieHeroData />
      </section>

      {/* List of Movies */}
      <section>
        <Movies />
      </section>

      {/* footer-section */}
      <Footer />

    </section>
	);
}

export default App
