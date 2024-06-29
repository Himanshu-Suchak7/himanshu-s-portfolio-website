import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const root = window.document.documentElement;
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
    } else {
      root.classList.add("dark"); // Default to dark mode
      localStorage.setItem("theme", "dark");
    }
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "experience" },
    { id: 5, link: "contact" },
  ];

  return (
    <div className="flex z-50 justify-between items-center bg-white text-black dark:bg-black dark:text-white w-full h-20 px-4 fixed">
      <div>
        <Link to="home" smooth duration={500}>
          <h1 className="text-4xl sm:text-5xl font-signature ml-5 cursor-pointer text-black dark:text-white">
            Himanshu
          </h1>
        </Link>
      </div>
      <ul className="hidden md:flex items-center">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="mr-5 text-gray-700 dark:text-orange-400 "
        >
          {darkMode ? <MdLightMode size={25} /> : <MdDarkMode size={25} />}
        </button>
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
      <div className="flex items-center md:hidden">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="mr-5 text-gray-700 dark:text-orange-400"
        >
          {darkMode ? <MdLightMode size={25} /> : <MdDarkMode size={25} />}
        </button>
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 text-gray-700 dark:text-gray-500 z-10"
        >
          {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>
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
  );
};

export default Navbar;
