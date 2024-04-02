import { Link } from "react-scroll";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600 text-2xl">&nbsp; Hi, I am</p>
        <h1 className="text-4xl sm:text-6xl font-bold text-[#ccd6f6]">
          Anurakti Arora
        </h1>
        <h2 className="text-4xl sm:text-6xl font-bold text-[#8892b0] my-2">
          I'm a Front End Web Developer.
        </h2>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white border-2 px-6 py-3 my-4 flex items-center hover:bg-pink-600 hover:border-pink-600">
              View My Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Home;
