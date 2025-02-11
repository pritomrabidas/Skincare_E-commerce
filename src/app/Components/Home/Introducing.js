"use client";
import Link from "next/link";
import CounterUp from "./CounterUp";
import Image from "next/image";

const Introducing = () => {
  return (
    <section className="w-full bg-white px-4 py-8">
      <div className="container mx-auto flex gap-16 items-center m-auto">
        {/* Left Column - Hidden on Mobile */}
        <div className="w-[40%] hidden md:block scale-95 shadow-md">
          <Image
            className="h-[400px] rounded-2xl"
            src={"/Introducing.webp"}
            alt="Introducing.webp"
            width={500}
            height={500}
          />
        </div>

        {/* Right Column */}
        <div className="w-full md:w-[60%] flex flex-col items-start space-y-4">
          <p className="text-lg text-secandari font-medium font-Popins">
            Introducing.
          </p>
          <h2 className="text-3xl text-primary font-Raleway font-bold">
            Discover the Miracle
          </h2>
          <p className="text-brand text-sm font-normal font-NunitoFont w-[90%]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          {/* Stats Section */}
          <div className="flex gap-6">
            {[
              { value: 97, label: "Elasticity Increase" },
              { value: 85, label: "Moisture Increase" },
              { value: 83, label: "Wrinkle Decrease" },
            ].map((stat, index) => (
              <div key={index} className="w-1/3 text-center py-2">
                <p className="text-4xl font-semibold text-secandari font-Monrope border-t-[3px] pt-2 border-brand hover:border-secandari duration-200">
                  <CounterUp target={stat.value} duration={2000} />%
                </p>
                <p className="text-sm text-brand font-normal font-Opensans pt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Button */}
          <Link
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-secandari text-white font-medium font-Montserrat py-3 px-8 rounded-md text-base transition hover:bg-primary duration-300"
          >
            Try It Free
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Introducing;
