import Logo from "../../assets/logo/logo-svg.svg"
import homeIcon from "../../assets/icons/Home.svg"
import moviesIcon from "../../assets/icons/movies.svg"
import tvShow from "../../assets/icons/TVShow.svg"
import calendar from "../../assets/icons/Calendar.svg"
import logout from "../../assets/icons/Logout.svg"

const Sidebar = () => {
	return (
		<section className="w-fit lg:w-1/6 h-screen border-2 border-zinc-200 rounded-e-[3rem] font-dm_sans flex items-center fixed z-50 bg-white">
			<main className="flex flex-col gap-14 items-center">
				{/* header & logo */}
				<a href="/" className="flex items-star lg:items-center lg:gap-4 ">
					<img src={Logo} />
					<h2 className="hidden lg:block text-2xl font-semibold">MovieBox</h2>
				</a>

				{/* navbar section */}
				<nav className="flex flex-col w-full gap-y-2">
					{/* home route */}
					<span className="lg:flex lg:gap-4 px-7 py-5">
						<img src={homeIcon} className="w-fit lg:w-6" />
						<a
							href="/"
							className="hidden lg:block text-lg text-my-light-gray font-semibold"
						>
							Home
						</a>
					</span>

					{/* movies route */}
					<span className="lg:flex lg:gap-4 px-7 py-5 bg-my-light-pink border-0 border-my-pink border-r-4">
						<img src={moviesIcon} className="w-fit lg:w-6" />
						<a
							href="#"
							className="hidden lg:block text-lg text-my-pink font-semibold"
						>
							Movies
						</a>
					</span>

					{/* tv shows route */}
					<span className="lg:flex lg:gap-4 px-7 py-5">
						<img src={tvShow} className="lg:w-6 w-fit" />
						<a
							href="/"
							className="hidden lg:block text-lg text-my-light-gray font-semibold "
						>
							TV Series
						</a>
					</span>

					{/* upcoming */}
					<span className="lg:flex lg:gap-4 px-7 py-5">
						<img src={calendar} className="lg:w-6 w-fit" />
						<a
							href=""
							className="hidden lg:block text-lg text-my-light-gray font-semibold"
						>
							Upcoming
						</a>
					</span>
				</nav>

				{/* start playing and log out */}
				<section className="flex flex-col items-center gap-8">
					{/* start playing */}
					<section className="border border-pink-border px-4 pb-2 w-4/5 bg-my-pink-bg rounded-3xl flex flex-col justify-center gap-3 text-my-gray hidden lg:block">
						<h3 className="pt-5 text-text-gray font-semibold">
							Play movie quizzes and earn free tickets
						</h3>
						<p className="text-sm font-semibold ">50k people are playing now</p>
						<button className="bg-button-pink px-4 py-1.5 rounded-3xl text-my-pink font-semibold">
							Start playing
						</button>
					</section>

					{/* logout */}
					<span className="lg:w-full lg:flex lg:gap-4 px-7 py-5">
						<img src={logout} className="w-fit lg:w-6" />
						<a
							href="#"
							className="text-lg text-my-light-gray font-semibold hidden lg:block"
						>
							Logout
						</a>
					</span>
				</section>
			</main>
		</section>
	);
}

export default Sidebar