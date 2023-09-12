/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

// eslint-disable-next-line react/prop-types
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
				src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
				alt={movie.title}
				data-testid="movie-poster"
			/>

			<h2 data-testid="movie-title" className="text-xl font-bold ">
				{movie.title}
			</h2>

			<p data-testid="movie-release-date">{movie.release_date}</p>

			<span className="absolute bg-zinc-400 flex px-2 p-2 rounded-full w-fit cursor-pointer top-4 right-0 mx-3">
				<FontAwesomeIcon
					icon={faHeart}
					size="lg"
					style={{ color: isClicked ? "#E68A9F" : "#D1D5DB" }}
					onClick={handleClick}
				/>
			</span>
		</section>
	);
};

export default MovieCard;
