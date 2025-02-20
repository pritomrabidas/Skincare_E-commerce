import Image from "next/image";

const OurStory = () => {
  return (
    <section className="w-full  px-6 py-12 bg-white">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
          <div>
            <h2 className="text-3xl font-bold text-primary font-Raleway mb-4">
              Our Story
            </h2>
            <p className="text-primary text-sm font-normal font-NunitoFont mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <h3 className="text-primary text-2xl font-NunitoFont font-semibold  mb-2">
              The History
            </h3>
            <p className="text-primary text-sm font-NunitoFont font-normal mb-4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <p className="text-primary text-base font-NunitoFont font-normal">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium. Totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <blockquote className="text-gray-600 italic text-sm font-Raleway font-medium mb-4">
              “Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit.”
            </blockquote>
            <p className="text-primary text-3xl font-medium font-Montez italic pt-12">
              pritom
            </p>
            <p className="text-gray-900 font-semibold pt-2 ">
              Pritom Rabidas / <span className="text-brand">CEO</span>
            </p>
          </div>
        </div>
        <div className="w-full  flex flex-col lg:flex-row gap-6 pt-20">
          <div className="w-3/4 relative">
            <Image
              src="/about1/about-4.jpg"
              alt="home-10"
              width={850}
              height={490}
              loading="lazy"
              className="w-full h-[450px] object-cover"
            />
            <div className="absolute inset-0 bg-[rgba(0,0,0,0.16)]"></div>
          </div>
          <div className="w-1/4 relative">
            <Image
              src="/about1/about-3.jpg"
              alt="home-10"
              width={410}
              height={490}
              loading="lazy"
              className="w-full h-[450px] object-cover"
            />
            <div className="absolute inset-0 bg-[rgba(0,0,0,0.28)]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
