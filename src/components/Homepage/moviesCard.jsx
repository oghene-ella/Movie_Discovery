/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import { Link, Outlet } from "react-router-dom";


const MovieCard = ({ movie }) => {
	const [isClicked, setIsClicked] = useState(false);

	const handleClick = () => {
		setIsClicked(!isClicked);
	};

	return (
		<section
			className="movie-card font-dm_sans flex flex-col gap-2 relative"
			data-testid="movie-card"
		>
			<img
				src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
				alt={movie.title}
				data-testid="movie-poster"
			/>

			<Link to="/movies/238" key={movie.id}>
				<h2 data-testid="movie-title" className="text-xl font-bold ">
					{movie.title}
				</h2>

				<span className="flex gap-2">
					<h3>Release Date: </h3>
					<p data-testid="movie-release-date">{movie.release_date}</p>
				</span>
			</Link>

			<span className="absolute bg-zinc-400 flex px-2 p-2 rounded-full w-fit cursor-pointer top-4 right-0 mx-3">
				<FontAwesomeIcon
					icon={faHeart}
					size="lg"
					style={{ color: isClicked ? "#E68A9F" : "#D1D5DB" }}
					onClick={handleClick}
				/>
			</span>
			<Outlet />
		</section>
	);
};

export default MovieCard;
