// import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
// import installNode from "../assets/portfolio/installNode.jpg";
// import navbar from "../assets/portfolio/navbar.jpg";
// import reactParallax from "../assets/portfolio/reactParallax.jpg";
// import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
// import reactWeather from "../assets/portfolio/reactWeather.jpg";
// import usestate from "../assets/portfolio/usestate.jpg";
import project1 from "../assets/portfolio/project1.jpg";

const Portfolio = () => {
  const portfolios = [{ id: 1, src: project1 }];

  return (
    <div>
      <div
        name="portfolio"
        className="bg-gradient-to-b from-white to-gray-300 text-black dark:bg-gradient-to-b dark:from-black dark:to-gray-800 w-full dark:text-white py-24"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-700 dark:border-gray-500">
              Portfolio
            </p>
            <p className="py-6">Check out some of my work right here</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {portfolios.map(({ id, src }) => (
              <div
                key={id}
                className="shadow-md shadow-gray-400 dark:shadow-gray-600 rounded-lg"
              >
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    <a href="https://blog-website-himanshu.web.app/">Demo</a>
                  </button>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    <a
                      href="https://github.com/Himanshu-Suchak7/blog-website"
                      target="_blank"
                    >
                      Code
                    </a>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
