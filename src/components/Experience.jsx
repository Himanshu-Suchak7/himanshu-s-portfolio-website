// import React from 'react'
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import sass from "../assets/sass.png";
import nextjs from "../assets/nextjs.png";
import bootstrap from "../assets/bootstrap.png";
import firebase from "../assets/firebase.png";
import node from "../assets/node.png";
import mongodb from "../assets/mongodb.png";
import mysql from "../assets/mysql.png";
import github from "../assets/github.png";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
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
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind CSS",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: sass,
      title: "SASS",
      style: "shadow-pink-500",
    },
    {
      id: 7,
      src: nextjs,
      title: "Next.js",
      style: "shadow-white",
    },
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
    {
      id: 10,
      src: node,
      title: "Node.js/Express.js",
      style: "shadow-green-500",
    },
    {
      id: 11,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-green-500",
    },
    {
      id: 12,
      src: mysql,
      title: "MySQL",
      style: "shadow-sky-500",
    },
    {
      id: 13,
      src: github,
      title: "GitHub",
      style: "shadow-gray-500",
    },
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold p-2 inline border-b-4 border-gray-500">
            Experience
          </p>
          <p className="py-6">
            These are the technologies I&apos;ve have worked with
          </p>
        </div>
        {experiences.map(({ id, src, title, style }) => (
          <div
            key={id}
            className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0"
          >
            <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg">
              <img src={src} alt="" className={"w-20 mx-auto" + "" + style} />
              <p className="mt-4">{title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
