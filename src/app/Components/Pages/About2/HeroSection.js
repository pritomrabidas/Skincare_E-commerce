import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="bg-white">
      {/* Left Content */}
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12 py-16">
        <div className="md:w-1/2 animate-fade-right">
          <div className="">
            <h2 className="text-5xl font-bold text-primary font-Raleway mb-4">
              Innovation and <br /> Simplicity
            </h2>
            <p className="text-base text-[#4b4d4f] font-medium font-NunitoFont mb-4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
            <p className="text-base text-[#4b4d4f] font-medium font-NunitoFont mt-4 mb-8">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
            <Link
              href="/about2"
              className="bg-secandari text-primary px-6 py-4 rounded-md text-sm font-Popins font-medium "
            >
              Get Started Now
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 animate-fade-left">
          <Image
            src="/about2/about-1.webp"
            alt="Smartic"
            width={630}
            height={410}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
