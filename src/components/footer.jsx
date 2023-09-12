import facebook from "../assets/icons/facebook.svg"
import instagram from "../assets/icons/instagram.svg"
import twitter from "../assets/icons/twitter.svg"
import youtube from "../assets/icons/youtube.svg"

const footer = () => {
    return (
        <footer className="h-[17rem] flex justify-center items-center">
            <main className="w-3/4 md:-1/2 h-fit flex flex-col gap-7">
                {/* social media icons */}
                <span className="flex gap-10 justify-center">
                    <img src={facebook} />
                    <img src={instagram} />
                    <img src={twitter} />
                    <img src={youtube} />
                </span>

                {/* footer lists*/}
                <ul className="text-sm md:text-base flex gap-7 md:gap-10 justify-center text-my-black font-semibold">
                    <li>Conditions of Use</li>
                    <li>Privacy & Policy</li>
                    <li>Press Room</li>
                </ul>

                {/* footer copyright */}
                <p className="text-center text-my-gray font-semibold">
                    © 2021 MovieBox by Adriana Eka Prayudha
                    <br />
                    Coded by Ellahhh ❤✨
                </p>
            </main>
        </footer>
	);
}

export default footer