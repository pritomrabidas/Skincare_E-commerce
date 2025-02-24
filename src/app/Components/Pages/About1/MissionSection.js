const MissionSection = () => {
  return (
    <section className=" mx-auto px-6 py-10">
      <div className=" container mx-auto ">
        <div className="flex flex-wrap justify-center items-center mx-auto">
          {/* Left Column */}
          <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-primary font-Raleway mb-4">
              Our Mission
            </h2>
            <p className="text-primary text-sm font-normal font-NunitoFont mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-primary text-sm font-normal font-NunitoFont mb-4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <p className="text-primary text-sm font-normal font-NunitoFont mb-4">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium. Totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/2 px-4">
            <h2 className="text-primary text-2xl font-NunitoFont font-semibold  mb-2">
              Creative
            </h2>
            <p className="text-primary text-sm font-normal font-NunitoFont mb-4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
            <h2 className="text-primary text-2xl font-NunitoFont font-semibold  mb-2">
              Sustainability
            </h2>
            <p className="text-primary text-sm font-normal font-NunitoFont mb-4">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium. Totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
