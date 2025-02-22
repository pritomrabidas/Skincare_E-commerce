
const Banner = () => {
  return (
    <section
      className="relative w-full flex justify-center items-center bg-cover bg-center bg-no-repeat py-60"
      style={{ backgroundImage: "url('./about4/about-1.jpg')" }}
    >
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.35)] bg-opacity-60 flex justify-center items-center px-4">
        <div className="text-center">
          <h3 className="text-5xl font-bold text-white font-Popins">
            The World's No.1 Device <br /> Provider
          </h3>
          <p className="mt-4 text-gray-100 text-base font-normal font-Opensans">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor
            <br />
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
