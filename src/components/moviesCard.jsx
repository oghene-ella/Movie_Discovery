const moviesCard = ({ movie }) => {
	return (
		<section
			className="movie-card font-dm_sans flex flex-col gap-2"
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
		</section>
	);
};

export default moviesCard;
