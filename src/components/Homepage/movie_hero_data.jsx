import line_icon from "../../assets/icons/line-icon.svg"
import imdb_icon from "../../assets/icons/imdb-icon.svg"
import tomatoe from "../../assets/icons/tomatoe-icon.svg"
import play from "../../assets/icons/Play.svg"

const movie_hero_data = () => {
	return (
		<section className="text-white w-full h-2/3 flex justify-end">
			<main className="w-11/12 h-full flex">
				{/* hero_data */}
				<section className="w-2/3 h-full flex flex-col gap-4">
					<section className="w-full h-fit flex my-auto flex-col gap-4">
						<h1 className="text-3xl md:text-5xl font-semibold leading-8">
							John Wick 3 :
							<br />
							Parabellum
						</h1>
						<section className="flex flex-col md:flex-row gap-3 md:gap-5">
							<span className="flex gap-3">
								<img src={imdb_icon} />
								<p>86.0 / 100</p>
							</span>
							<span className="flex gap-3">
								<img src={tomatoe} />
								<p>86.0 / 100</p>
							</span>
						</section>
						<p className="text-sm lg:w-[21rem]">
							John Wick is on the run after killing a member of the
							international assassins guild, and with a $14 million price tag on
							his head, he is the target of hit men and women everywhere.
						</p>
						<button className="flex items-center bg-my-pink px-1 md:px-5 py-2 rounded-md w-fit gap-1 md:gap-3 uppercase font-semibold text-base">
							<img src={play} />
							Watch Trailer
						</button>
					</section>
				</section>

				{/* scroller */}
				<section className="w-1/3 h-full flex justify-end items-center px-10">
					<ul className="w-fit h-fit text-right text-gray-400">
						<li>1</li>
						<li>2</li>
						<li className="flex gap-3 opacity-100 text-white font-semibold">
							<img src={line_icon} />3
						</li>
						<li>4</li>
						<li>5</li>
					</ul>
				</section>
			</main>
		</section>
	);
}

export default movie_hero_data