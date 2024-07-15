import { useEffect, useState } from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import sass from "../assets/sass.png";
// import nextjs from "../assets/next.png";
// import nextjs1 from "../assets/next1.png";
import bootstrap from "../assets/bootstrap.png";
import firebase from "../assets/firebase.png";
// import node from "../assets/node.png";
// import mongodb from "../assets/mongodb.png";
import mysql from "../assets/mysql.png";
import github from "../assets/github.png";
import github1 from "../assets/github1.png";

const Experience = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    setIsDarkMode(root.classList.contains("dark"));

    const observer = new MutationObserver(() => {
      setIsDarkMode(root.classList.contains("dark"));
    });

    observer.observe(root, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const experiences = [
    { id: 1, src: html, title: "HTML", style: "shadow-orange-500" },
    { id: 2, src: css, title: "CSS", style: "shadow-blue-500" },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React.js",
      style: "shadow-sky-500",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind CSS",
      style: "shadow-sky-600",
    },
    { id: 6, src: sass, title: "SASS", style: "shadow-pink-500" },
    // {
    //   id: 7,
    //   src: isDarkMode ? nextjs : nextjs1,
    //   title: "Next.js",
    //   style: isDarkMode ? "shadow-white" : "shadow-black",
    // },
    {
      id: 8,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-purple-500",
    },
    {
      id: 9,
      src: firebase,
      title: "Firebase",
      style: "shadow-orange-500",
    },
    // {
    //   id: 10,
    //   src: node,
    //   title: "Node.js/Express.js",
    //   style: "shadow-green-500",
    // },
    // {
    //   id: 11,
    //   src: mongodb,
    //   title: "MongoDB",
    //   style: "shadow-green-700",
    // },
    { id: 12, src: mysql, title: "MySQL", style: "shadow-sky-500" },
    {
      id: 13,
      src: isDarkMode ? github : github1,
      title: "GitHub",
      style: "shadow-gray-500",
    },
  ];

  return (
    <div
      name="techstack"
      className="bg-gradient-to-b from-gray-300 to-white dark:bg-gradient-to-b dark:from-gray-800 dark:to-black w-full py-24"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-black dark:text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-700 dark:border-gray-500 p-2 inline">
            Techstack
          </p>
          <p className="py-6">
            These are the technologies I&apos;ve worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {experiences.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg bg-transparent ${style}`}
            >
              <img
                src={src}
                alt={title}
                className="w-20 h-20 object-contain mx-auto"
              />
              <p className="text-xs overflow-auto sm:mt-4 sm:text-base">
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
