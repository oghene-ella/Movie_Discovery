import vidTest from "../../assets/watch.svg"
const mainContent = () => {
  return (
		<section className="w-5/6 flex items-center p-5">
			<main className="w-full h-[52rem] flex flex-col">
				<img src={vidTest} className="w-full" />
				<section className="border border-red-500 w-full h-2/3 flex">
					<section className="w-2/3 border border-green-500 h-full"></section>

					<section className="w-2/3 border border-blue-500 h-full"></section>
				</section>
			</main>
		</section>
	);
}

export default mainContent