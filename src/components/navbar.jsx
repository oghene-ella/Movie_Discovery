import Logo from "../assets/logo/logo-svg.svg"
import menuIcon from "../assets/icons/Menu.svg"

import SearchBar from "./SearchBar"

const navbar = () => {
  return (
    <section className="flex text-white font-dm_sans h-[5rem] items-center">
      <main className="w-10/12 h-full m-auto flex items-center justify-between gap-14 md:gap-0">
        {/* logo */}
        <span className="flex gap-3 md:gap-5 w-fit items-center">
          <img src={Logo} loading="lazy"  className="w-8 md:w-10"/>
          <h2 className="text-sm sm:text-xl font-semibold">MovieBox</h2>
        </span>

        {/* searchbar */}
        <SearchBar />
        
        {/* sign in */}
        <span className="flex w-fit items-center gap-3 md:gap-5 font-medium">
          <p className="hidden md:block md:text-base">Sign in</p>
          <img src={menuIcon} className="w-8 md:w-10"/>
        </span>
      </main>
    </section>
  );
}

export default navbar;