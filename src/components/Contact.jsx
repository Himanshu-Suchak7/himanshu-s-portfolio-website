const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full py-24 bg-gradient-to-b from-white to-gray-300 dark:bg-gradient-to-b dark:from-black dark:to-gray-800 p-4 dark:text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-700 dark:border-gray-500">
            Contact
          </p>
          <p className="py-6">
            Submit the below form to get in touch with me regarding freelancing
            or full time opportunities
          </p>
          <div className="flex justify-center items-center">
            <form
              action="https://formspree.io/f/mldrrvvd"
              method="POST"
              className="flex flex-col w-full md:w-1/2 "
            >
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="p-2 bg-transparent border-2 rounded-md text-black dark:text-white focus:outline-none placeholder-gray-700 border-gray-500 dark:placeholder-current"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="my-4 p-2 bg-transparent border-2 rounded-md text-black dark:text-white focus:outline-none placeholder-gray-700 border-gray-500 dark:placeholder-current"
                required
              />
              <textarea
                name="message"
                rows={10}
                placeholder="Enter your message"
                className="p-2 bg-transparent border-2 rounded-md text-black dark:text-white focus:outline-none placeholder-gray-700 border-gray-500 dark:placeholder-current"
                required
              ></textarea>
              <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                Let&apos;s Talk
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
