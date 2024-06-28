import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { Link } from "react-scroll";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toogleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const [nav, setNav] = useState(false);
  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "experience" },
    { id: 5, link: "contact" },
  ];

  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="flex justify-between items-center bg-white text-black dark:bg-black dark:text-white w-full h-20 px-4 fixed">
      <div>
        <Link to="home" smooth duration={500}>
          <h1 className="text-4xl sm:text-5xl font-signature ml-5 cursor-pointer dark:text-white">
            Himanshu
          </h1>
        </Link>
      </div>
      <div onClick={toogleDarkMode}>
        {darkMode ? (
          <MdLightMode className="text-2xl cursor-pointer" />
        ) : (
          <MdDarkMode className="text-2xl cursor-pointer" />
        )}
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="cursor-pointer capitalize px-4 font-medium text-gray-700 dark:text-gray-500 hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 text-gray-700 dark:text-gray-500 z-10 md:hidden"
      >
        {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-white to-gray-300 dark:bg-gradient-to-b dark:from-black dark:to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="cursor-pointer capitalize px-4 py-6 text-4xl font-medium text-gray-700 dark:text-gray-500 hover:scale-105 duration-200"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
    </div>
  );
};

export default Navbar;
