import {
  BsArrowRightCircleFill,
  BsLinkedin,
  BsGithub,
  BsEnvelope,
  BsFileEarmarkArrowDown,
} from "react-icons/bs";
import heroImage from "../assets/heroImage.jpg";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-white via-gray-100 to-gray-300 dark:bg-gradient-to-b dark:from-black dark:via-black dark:to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-black dark:text-white">
            I&apos;m a Frontend Developer
          </h2>
          <p className="text-gray-700 dark:text-gray-500 py-4 max-w-md">
            Hello, I&apos;m Himanshu Suchak, and I am a frontend developer and I
            loved making beautiful websites that have a ability to work on every
            devices from Desktops to Mobile Phones.
          </p>
          <div className="flex flex-col items-start space-y-4">
            {/* Show the Buttons in Mobile View only */}
            <div className="flex space-x-4 md:hidden">
              <a
                href="https://www.linkedin.com/in/himanshu-d-suchak-2a0633256/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-blue-700 p-2 rounded-full"
              >
                <BsLinkedin size={20} />
              </a>
              <a
                href="https://github.com/Himanshu-Suchak7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-gray-800 p-2 rounded-full"
              >
                <BsGithub size={20} />
              </a>
              <a
                href="mailto:himanshusuchak.hs@gmail.com"
                className="text-white bg-red-600 p-2 rounded-full"
              >
                <BsEnvelope size={20} />
              </a>
              <a
                href="/resume.pdf"
                download
                className="text-white bg-green-600 p-2 rounded-full"
              >
                <BsFileEarmarkArrowDown size={20} />
              </a>
            </div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white rounded-md w-fit px-6 py-3 my-2 flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <BsArrowRightCircleFill size={20} className="ml-2" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={heroImage}
            alt="my-profile-pic"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
