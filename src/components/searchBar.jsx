import { useState, useEffect } from "react";
import axios from "axios";
// import MovieCard from "./Homepage/moviesCard";
import search from "../assets/icons/search.svg";

const SearchBar = () => {
	const [searchQuery, setSearchQuery] = useState("");
	// eslint-disable-next-line no-unused-vars
	const [searchResults, setSearchResults] = useState([]);

	useEffect(() => {
		if (searchQuery) {
			const apiKey = "329676d84f34a8fa40b316a1fb6712a6";
			const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}`;

			axios
				.get(apiUrl)
				.then((response) => {
					setSearchResults(response.data.results);
				})
				.catch((error) => {
					console.error("Error fetching data: ", error);
				});
		} else {
			setSearchResults([]);
		}
	}, [searchQuery]);

	return (
		<section className="flex justify-between w-1/2 border border-gray-100 rounded-md">
			<input
				type="search"
				className="w-full bg-transparent placeholder-white placeholder-opacity-70 px-5 py-1"
				placeholder="What do you want to watch?"
				value={searchQuery}
				onChange={(e) => setSearchQuery(e.target.value)}
			/>
			<img src={search} className="px-4" />

			{/* Still unable to fix the searchbar [Disable it for now] */}

			{/* <main className="movie-container">
				{searchResults.map((movie) => (
					<MovieCard key={movie.id} movie={movie} />
				))}
			</main> */}
		</section>
	);
};

export default SearchBar;
