import { useState, useEffect } from 'react';
import axios from 'axios';
import search from "../assets/icons/search.svg"

const SearchBar = () => {
	const [searchQuery, setSearchQuery] = useState('');
	const [searchResults, setSearchResults] = useState([]);

	useEffect(() => {
    if (searchQuery) {
		const apiKey = '329676d84f34a8fa40b316a1fb6712a6';
		const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}`;

		axios
			.get(apiUrl)
			.then((response) => {
			setSearchResults(response.data.results);
			})
			.catch((error) => {
			console.error('Error fetching data: ', error);
			});
		} 
	else {
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

			{/* working on this */}
			<main className="movie-container">
				{searchResults.map((movie) => (
					<section key={movie.id} className='absolute' >
						<h2 data-testid="movie-title" className="text-xl font-bold ">
							{movie.title}
						</h2>

						<p data-testid="movie-release-date">{movie.release_date}</p>
					</section>
				))}
			</main>
		</section>
	);
};

export default SearchBar;
