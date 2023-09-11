import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./moviesCard";

import chervon from "../assets/icons/Chevron right.svg"

const Movies = () => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		// Replace 'YOUR_API_KEY' with your actual TMDb API key
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
		<section className="font-dm_sans w-full py-14 flex flex-col gap-16">
			{/* movie list header */}
			<header className="flex w-10/12 justify-between mx-auto">
				<h1 className="text-4xl font-semibold">Top 10 Movies</h1>
				<span className="flex items-center gap-4">
					<p className="text-my-pink">See more</p>
					<img src={chervon} />
				</span>
			</header>

			{/* movie list body */}
			<main className="movie-container w-10/12 mx-auto grid grid-cols-4 gap-10">
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
