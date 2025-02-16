import Image from "next/image";
import React from "react";
import { FaLeaf } from "react-icons/fa";
import { LuSunMedium } from "react-icons/lu";

const Benefit = () => {
  const benefits = [
    {
      icon: <FaLeaf />,
      text: "100% Pure natural hemp seed oil",
    },
    { icon: <FaLeaf />, text: "Provides a deep cleansing" },
    { icon: <FaLeaf />, text: "Skin is restored with radiance" },
    {
      icon: <FaLeaf />,
      text: "Preserves the natural moisture level",
    },
    { icon: <LuSunMedium />, text: "Protect your skin from the sun" },
    { icon: <FaLeaf />, text: "Avoid direct heat exposure" },
    { icon: <FaLeaf />, text: "Keep irritants off your skin" },
    { icon: <FaLeaf />, text: "Follow makeup best practices" },
  ];
  return (
    <section>
      <div className="container mx-auto px-10 py-16">
        <div className="flex md:flex-row flex-col xl:gap-14 lg:gap-10 gap-10 justify-center items-center m-auto">
          {/* Left Column */}
          <div className="xl:w-[40%] md:w-[45%] sm:w-[60%] w-[87%]">
            <Image
              className="rounded-2xl h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px] w-full"
              src="/home-6.jpg"
              alt="home-6"
              width={500}
              height={500}
            />
          </div>
          <div className="xl:w-[50%] md:w-[55%] w-full md:text-start sm:text-center">
            <div className="space-y-4">
              <h2 className="text-lg text-secandari font-medium font-Popins">
                Product Benefits
              </h2>

              <h2 className="text-3xl text-primary font-Raleway font-bold">
                Protect and Repair
              </h2>

              <p className="text-brand text-sm font-normal font-NunitoFont w-full sm:w-[90%]">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit.
              </p>

              {/* Benefits List (Right to Left Animation) */}
            </div>
            {benefits.map((stat, index) => (
              <div key={index} className=" pt-5 w-full">
                <div className="flex items-center gap-5">
                  <span className="text-secandari text-4xl">{stat.icon}</span>
                  <p className=" text-primary text-base font-NunitoFont font-normal">
                    {stat.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefit;
