import { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[64px] flex flex-col items-center justify-center px-4 text-gray-300 bg-transparent z-50">
   <ul className="hidden md:flex justify-center items-center space-x-8 -mt-2">
    <li>
      <Link to="home" smooth={true} duration={500} className="text-xl font-bold text-blue-700">
        Home
      </Link>
    </li>
    <li>
      <Link to="about" smooth={true} duration={500} className="text-xl font-bold text-blue-700">
        About
      </Link>
    </li>
    <li>
      <Link to="skills" smooth={true} duration={500} className="text-xl font-bold text-blue-700">
        Skills
      </Link>
    </li>
    <li>
      <Link to="work" smooth={true} duration={500} className="text-xl font-bold text-blue-700">
        Work
      </Link>
    </li>
    <li>
      <Link to="contact" smooth={true} duration={500} className="text-xl font-bold text-blue-700">
        Contact
      </Link>
    </li>
  </ul>
      {/* hamburger */}
      <div onClick={handleClick} className="md:hidden z-10 py-6 ">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* mobile menu  */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* scoial icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-30 bg-blue-500">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/sathvika-chekuri-78161419b/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-30 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/sathvikavarma"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-30 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:sathvika.chekuri@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-30 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/Sathvika_resume.pdf"
            >
              CV <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
