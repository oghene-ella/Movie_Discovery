import { useState, useEffect } from "react";
import axios from "axios";
import SearchCard from "./Homepage/SearchResult";
import search from "../assets/icons/search.svg";

const SearchBar = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [searchResults, setSearchResults] = useState([]);

	useEffect(() => {
		if (searchQuery) {
			const apiKey = import.meta.env.VITE_API_KEY;
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
		<section className="flex flex-col justify-between w-1/2 relative">
			<section className="flex justify-between w-full border border-gray-100 rounded-md">
				<input
					type="search"
					className="w-full bg-transparent placeholder-white placeholder-opacity-70 px-5 py-1"
					placeholder="What do you want to watch?"
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
				/>
				<img src={search} className="px-4" />
			</section>

			<main className="bg-white text-my-black absolute w-full px-3 rounded-b-xl top-10 ">
				{searchResults.map(function (movie, index) {
					if (index < 2) {
						return (
							<section key={index}>
								<SearchCard key={movie.id} movie={movie} />
							</section>
						);
					}
				})}
			</main>
		</section>
	);
};

export default SearchBar;
