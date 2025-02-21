import { IoIosCheckboxOutline } from "react-icons/io";
import { FaHeadphones } from "react-icons/fa";
import { BsShieldCheck } from "react-icons/bs";

const FeatureSection = () => {
  const features = [
    {
      icon: <IoIosCheckboxOutline/>,
      title: "Free Shipping",
      description:
        "Cur tantas regiones barbarorum pedibus obiit, tot maria transmisit? Uterque enim summo bono fruitur, id est voluptate barbarorum pedibu",
    },
    {
      icon: <BsShieldCheck/>,
      title: "Secure Payments",
      description:
        "Cur tantas regiones barbarorum pedibus obiit, tot maria transmisit? Uterque enim summo bono fruitur, id est voluptate barbarorum pedibu",
    },
    {
      icon: <FaHeadphones/>,
      title: "Support Customer",
      description:
        "Cur tantas regiones barbarorum pedibus obiit, tot maria transmisit? Uterque enim summo bono fruitur, id est voluptate barbarorum pedibu",
    },
  ];
  return (
    <section className=" bg-gray-100 py-20">
      <div className="container mx-auto flex flex-wrap gap-6 justify-center">
        {features.map((feature, index) => (
          <div
            key={index}
            className="w-full md:w-1/3 bg-gray-50 p-6 rounded-lg shadow-md transform transition-all duration-300 hover:-translate-y-2"
          >
            <div className="flex flex-col items-center text-center">
              <div className=" mb-4">
                <p className="text-4xl duration-200 hover:text-secandari text-primary">{feature.icon}</p>
              </div>
              <h3 className="text-xl text-primary font-Raleway font-semibold mb-2">{feature.title}</h3>
              <p className="text-primary text-sm font-NunitoFont font-normal">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
