import React from "react";

const WhatWeDo = () => {
  const services = [
    {
      number: "01",
      title: "Creative Products",
      description:
        "Cur tantas regiones barbarorum pedibus obiit, tot maria transmisit? Uterque enim summo bono fruitur, id est voluptate barbarorum pedibu.",
    },
    {
      number: "02",
      title: "Marketing",
      description:
        "Cur tantas regiones barbarorum pedibus obiit, tot maria transmisit? Uterque enim summo bono fruitur, id est voluptate barbarorum pedibu.",
    },
    {
      number: "03",
      title: "Home Essentials",
      description:
        "Cur tantas regiones barbarorum pedibus obiit, tot maria transmisit? Uterque enim summo bono fruitur, id est voluptate barbarorum pedibu.",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold font-Raleway text-center mb-6">
          What we do
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 pt-10">
          {services.map((service) => (
            <div key={service.number} className="flex flex-col items-center">
              <div className="flex gap-2 items-center justify-center pb-2">
                <p className="text-gray-500 font-Popins text-lg font-medium ">
                  {service.number}
                </p>{" "}
                <span className="text-primary text-base font-medium font-NunitoFont">{service.title}</span>
              </div>
              <p className="text-center text-gray-600 text-sm font-Opensans w-[90%]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
