import search from "../assets/icons/search.svg"

const searchBar = () => {
	return (
		<section className="flex justify-between w-1/2 border border-gray-100 rounded-md px-5 py-1">
			<input
				type="search"
				className="w-3/4 bg-transparent placeholder-white placeholder-opacity-70"
				placeholder="What do you want to watch?"
			/>
            <img src={search}/>
		</section>
	);
};

export default searchBar;
