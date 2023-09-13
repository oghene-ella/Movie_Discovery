import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import vidTest from "../../assets/watch.svg";
import star from "../../assets/icons/Star.svg";
import moviesImg from "../../assets/movies.png";
import tickets from "../../assets/icons/Tickets.svg";
import menu from "../../assets/icons/List.svg";

const MainContent = () => {
	const { id } = useParams();
	const [movieInfo, setMovieInfo] = useState([]);

	useEffect(() => {
		const apiKey = import.meta.env.VITE_API_KEY;
		const apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`;

		axios
			.get(apiUrl)
			.then((response) => {
				console.log((response.data.results));
				setMovieInfo(response.data.results);
			})
			.catch((error) => {
				console.error("Error fetching data: ", error);
			});
	}, [id]);

	if (!movieInfo){
		return <section>Loading...</section>
	}

	return (
		<section className="w-5/6 flex items-center px-5">
			<main className="w-full h-[54rem] flex flex-col py-4">
				<img src={vidTest} className="w-screen bg-cover cursor-pointer" />
				<section className="w-full h-2/3 flex">
					{/* movie info */}
					<section className="w-2/3 p-5 flex flex-col gap-4">
						{/* movie header */}
						<section className="flex flex-col gap-5">
							{/* movie title */}
							<span className="flex gap-3 font-medium text-2xl text-header-black items-center">
								{/* movie title */}
								<h1 data-testid="movie-title">{movieInfo.original_title}</h1>
								<p>•</p>
								<p data-testid="movie-release-date">2022 </p>
								<p>•</p>
								<p data-testid="movie-runtime">2h 10m</p>

								{/* movie genre */}
								<span className="flex gap-4 px-3">
									<p className="text-sm px-5 py-1 border border-pink-200 rounded-2xl text-my-pink font-semibold">
										Action
									</p>
									<p className="text-sm px-5 py-1 border border-pink-200 rounded-2xl text-my-pink font-semibold">
										Drama
									</p>
								</span>
							</span>

							{/* movie description */}
							<p
								className="text-xl font-light w-11/12"
								data-testid="movie-overview">
								After thirty years, Maverick is still pushing the envelope as a
								top naval aviator, but must confront ghosts of his past when he
								leads TOP GUNs elite graduates on a mission that demands the
								ultimate sacrifice from those chosen to fly it.
							</p>
						</section>

						{/* director, writers, stars */}
						<section className="flex flex-col gap-4">
							<span className="flex gap-2 font-light text-xl">
								<h2>Director :</h2>
								<p className="text-my-pink">Joseph Kosinski</p>
							</span>

							<span className="flex gap-2 font-light text-xl">
								<h2>Writers :</h2>
								<p className="text-my-pink">
									Jim Cash, Jack Epps Jr, Peter Craig
								</p>
							</span>

							<span className="flex gap-2 font-light text-xl">
								<h2>Stars :</h2>
								<p className="text-my-pink">
									Tom Cruise, Jennifer Connelly, Miles Teller
								</p>
							</span>
						</section>

						<section className="rounded-xl border border-zinc-300 flex items-center">
							<input
								type="submit"
								value="Top rated movie #65"
								className="bg-my-pink rounded-xl px-4 py-3 text-white text-lg"
							/>
							<span className="flex justify-between w-full px-8 py-3 items-center">
								<p className="text-lg font-medium">Award 9 norminations</p>

								<FontAwesomeIcon icon={faAngleDown} />
							</span>
						</section>
					</section>

					{/* watch options */}
					<section className="w-1/3 h-[24rem] flex flex-col gap-5 p-6">
						{/* rating and buttons */}
						<section className="flex flex-col gap-4">
							{/* rating and population */}
							<span className="flex items-center gap-5 justify-end">
								<img src={star} />
								<span className="flex gap-2 text-my-gray text-lg items-center">
									<p className="opacity-60 text-2xl">8.5</p>
									<p className="font-bold">|</p>
									<p className="font-bold">350K</p>
								</span>
							</span>

							{/* buttons */}
							<section className="flex flex-col gap-3 w-full ">
								<button className="bg-my-pink text-white font-semibold w-full py-3 rounded-lg text-lg flex items-center justify-center gap-2">
									<img src={tickets} />
									See Showtimes
								</button>
								<button className="border border-my-pink bg-my-light-pink text-lg font-semibold w-full py-3 rounded-lg flex items-center justify-center gap-2 ">
									<img src={menu} />
									More watch options
								</button>
							</section>
						</section>

						{/* best movies */}
						<section className="w-full h-1/2">
							<img src={moviesImg} className="w-full h-full bg-cover" />
						</section>
					</section>
				</section>
			</main>
		</section>
	);
};

export default MainContent;
