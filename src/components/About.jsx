const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-300 to-white text-black dark:bg-gradient-to-b dark:from-gray-800 dark:to-black dark:text-white py-24"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-700 dark:border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Being a <span className="text-blue-500">Front-End Developer</span>{" "}
          opens up a world of content creation possibilities for me,{" "}
          <span className="font-semibold text-red-500">Himanshu Suchak</span>!
          In this portfolio website, I&apos;m showcasing some of my technical
          skills, building my personal brand, and engaging with my audience.
        </p>
        <p className="text-xl mt-20">
          I am pursuing my B.Tech. from{" "}
          <span className="text-blue-500">
            Government Engineering College GEC, Gandhinagar
          </span>{" "}
          in Computer Engineering (2022-2025)
        </p>

        <br />

        <p className="text-xl">
          I am passionate about creating visually appealing and user-friendly
          interfaces. With a strong foundation in{" "}
          <span className="font-semibold text-green-500">HTML</span>,{" "}
          <span className="font-semibold text-green-500">CSS</span>, and{" "}
          <span className="font-semibold text-green-500">JavaScript</span>, I
          aim to bring designs to life in the most efficient way possible.
        </p>

        <br />

        <p className="text-xl">
          In addition to front-end development, I have experience in working
          with modern frameworks such as{" "}
          <span className="font-semibold text-purple-500">React</span>.
          These tools enable me to build scalable and high-performance web
          applications.
        </p>

        <br />

        <p className="text-xl">
          I believe in continuous learning and improvement. Keeping up with the
          latest trends and technologies in the web development world is
          essential to staying ahead. I&apos;m always eager to explore new
          challenges and opportunities to grow as a developer.
        </p>
        <br />
      </div>
    </div>
  );
};

export default About;
