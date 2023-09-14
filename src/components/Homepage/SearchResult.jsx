/* eslint-disable react/prop-types */
// import { useState } from "react";
import { Link, Outlet } from "react-router-dom";


const SearchResult = ({ movie }) => {
	const {id}  = movie.id;

	return (
		<section
			className="movie-card font-dm_sans flex flex-col gap-2 relative"
			data-testid="movie-card"
		>
			<Link to={`/movies/${id}`} key={movie.id} className="flex flex-col gap-3">
				<h2 data-testid="movie-title" className="text-xl font-bold ">
					{movie.title}
				</h2>

				<span className="flex gap-2">
					<h3>Release Date: </h3>
					<p data-testid="movie-release-date">{movie.release_date}</p>
				</span>
				<hr></hr>
			</Link>
			<Outlet />
		</section>
	);
};

export default SearchResult;
