
const HeroSection = () => {
  return (
    <section className="relative w-full mx-auto px-4 py-20  items-center">
      <div className="container mx-auto ">
        <div className="px-20 pb-20 flex flex-wrap">
          <div className="w-full md:w-1/2">
            <h2 className="text-5xl font-bold text-primary font-Montserrat">
              We convert <br></br> your idea into a <br></br>reality
            </h2>
          </div>
          <div className="w-full md:w-1/2  mt-6 md:mt-0">
            <p className="text-gray-700 text-base font-normal font-NunitoFont mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <span></span>
            <p className="text-primary text-lg font-medium font-Raleway">
              James Frank{" "}
              <span className="text-gray-500 font-normal">/ CEO</span>
            </p>
          </div>
        </div>
          <div
            className="w-full h-[550px] bg-cover bg-no-repeat bg-center rounded-md"
            style={{ backgroundImage: "url('/about3/about-2.jpg')" }}
          ></div>
      </div>
    </section>
  );
};

export default HeroSection;
