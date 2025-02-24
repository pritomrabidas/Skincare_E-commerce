import React from "react";
import {
  FaUserShield,
  FaUserTie,
  FaShieldAlt,
  FaDollarSign,
} from "react-icons/fa";
const FeaturesSection = () => {
  const features = [
    {
      icon: <FaUserShield  />,
      title: "Verified professionals",
      description: "Cur tantas regiones barbarorum pedibus obiit, tot maria.",
    },
    {
      icon: <FaUserTie  />,
      title: "Trusted & Experienced",
      description: "Cur tantas regiones barbarorum pedibus obiit, tot maria.",
    },
    {
      icon: <FaShieldAlt  />,
      title: "Reliable & Fully Insured",
      description: "Cur tantas regiones barbarorum pedibus obiit, tot maria.",
    },
    {
      icon: <FaDollarSign  />,
      title: "Money-back guarantee",
      description: "Cur tantas regiones barbarorum pedibus obiit, tot maria.",
    },
  ];
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto">
        <div className="w-full mx-auto px-10 py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  lg:grid-cols-4 gap-8 text-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg transform transition duration-300 hover:scale-105"
            >
              <div className="mb-4 text-[#212121c3] text-4xl  justify-center flex">
                {feature.icon}
              </div>
              <h3 className="text-lg text-primary font-Montserrat font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm font-normal font-NunitoFont">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
