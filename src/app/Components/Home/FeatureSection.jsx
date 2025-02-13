import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineWorkspacePremium } from "react-icons/md";

const FeatureSection = () => {
  const features = [
    {
      icon: <MdOutlineWorkspacePremium/>,
      title: "Premium Quality",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
    },
    {
      icon: <TbTruckDelivery/>,
      title: "Free Delivery",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
    },
    {
      icon: <MdOutlineWorkspacePremium/>,
      title: "2 Years Warranty",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
    },
  ];
  return (
    <section className="w-full bg-secandari py-24 px-4">
      <div className="container gap-10 mx-auto grid grid-cols-1 md:grid-cols-3 px-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className=" p-6 shadow rounded-lg text-center"
          >
            <div className=" mb-4">
              <span className="text-4xl flex justify-center text-primary">{feature.icon}</span>
            </div>
            <h3 className="text-base text-primary font-Popins font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm text-primary font-NunitoFont font-normal">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
