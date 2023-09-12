import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./moviesCard";

import chervon from "../assets/icons/Chevron right.svg"

const Movies = () => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		const apiKey = "329676d84f34a8fa40b316a1fb6712a6";
		const apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`;

		axios
			.get(apiUrl)
			.then((response) => {
				setMovies(response.data.results);
			})
			.catch((error) => {
				console.error("Error fetching data: ", error);
			});
	}, []);

	return (
		<section className="font-dm_sans w-full py-14 flex flex-col gap-6 md:gap-12">
			{/* movie list header */}
			<header className="flex w-10/12 justify-between mx-auto gap-8">
				<h1 className="text-2xl md:text-4xl font-semibold">Featured Movies</h1>
				<span className="flex items-center gap-1 sm:gap-4">
					<p className="text-my-pink">See more</p>
					<img src={chervon} />
				</span>
			</header>

			{/* movie list body */}
			<main className="movie-container w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-9">
				{movies.map(function (movie, index) {
					if (index < 10) {
						return (
							<section key={index}>
								<MovieCard key={movie.id} movie={movie} />
							</section>
						);
					}
				})}
			</main>
		</section>
	);
};

export default Movies;
