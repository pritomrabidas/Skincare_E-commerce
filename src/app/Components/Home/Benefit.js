import React from "react";
import { FaLeaf } from "react-icons/fa";

const Benefit = () => {
  const benefits = [
    {
      icon: <FaLeaf />,
      text: "100% Pure natural hemp seed oil",
    },
    // { icon: "smartic-icon-cleasing", text: "Provides a deep cleansing" },
    // { icon: "smartic-icon-skin", text: "Skin is restored with radiance" },
    // {
    //   icon: "smartic-icon-preserves",
    //   text: "Preserves the natural moisture level",
    // },
    // { icon: "smartic-icon-protect", text: "Protect your skin from the sun" },
    // { icon: "smartic-icon-avoid", text: "Avoid direct heat exposure" },
    // { icon: "smartic-icon-skin-2", text: "Keep irritants off your skin" },
    // { icon: "smartic-icon-makeup", text: "Follow makeup best practices" },
  ];
  return (
    <section>
      <div className="container mx-auto px-2 py-16">
        <div className="flex gap-0">
          {/* Left Column */}
          <div className="w-[60%] ">
            <div className="space-y-4">
              <h2 className="text-lg text-secandari font-medium font-Popins">
                Product Benefits
              </h2>

              <h2 className="text-3xl text-primary font-Raleway font-bold">
                Protect and Repair
              </h2>

              <p className="text-brand text-sm font-normal font-NunitoFont w-[90%]">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit.
              </p>

              {/* Benefits List (Right to Left Animation) */}
            </div>
            {benefits.map((stat, index) => (
              <div key={index} className="w-full grid grid-cols-2 pt-5">
                <div className="flex items-center gap-5">
                  <span>{stat.icon}</span>
                  <p className="w-1/2">{stat.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Hidden Column */}
          <div className="w-[40%] hidden md:block">
            {/* Any content you'd like for the second column */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefit;
