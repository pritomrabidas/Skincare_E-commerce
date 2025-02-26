const HelpSection = () => {
  return (
    <section
      className="relative w-full flex justify-center items-center bg-cover bg-center bg-no-repeat sm:py-60 py-48"
      style={{ backgroundImage: "url('./contact.jpg')" }}
    >
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.35)] bg-opacity-60 flex justify-center items-center px-4">
        <div className="text-center">
          <h3 className="md:text-5xl sm:text-4xl text-2xl font-bold text-white font-Popins">
            We are here to help
          </h3>
          <p className="mt-4 text-gray-100 text-sm sm:text-base font-normal font-Opensans w-full sm:w-[480px] md:w-[500px] text-center mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt
          </p>
        </div>
      </div>
    </section>
  );
};

export default HelpSection;
