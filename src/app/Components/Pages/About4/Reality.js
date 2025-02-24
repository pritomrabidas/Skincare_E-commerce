import Image from "next/image";
import React from "react";

const Reality = () => {
  return (
    <section className=" py-16 px-4">
      <div className="container mx-auto ">
        <div className="grid md:grid-cols-2 grid-cols-1 items-center justify-center">
          <div className="flex gap-4 p-4">
            <div
              className="w-1/2 sm:h-[450px] h-[350px] bg-cover bg-no-repeat bg-center rounded-md"
              style={{ backgroundImage: "url('/about4/about-2.jpg')" }}
            ></div>
            <div
              className="w-1/2 sm:h-[450px] h-[350px] bg-cover bg-no-repeat bg-center rounded-md mt-10"
              style={{ backgroundImage: "url('/about4/about-3.jpg')" }}
            ></div>
          </div>
          <div className=" p-4">
            <h2 className="md:text-4xl text-3xl font-bold text-primary font-NunitoFont">
              We convert your idea <br></br> into a reality
            </h2>
            <p className="mt-4 text-gray-700 text-sm font-normal font-Opensans">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="mt-2 text-gray-700 text-sm font-normal font-Opensans">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum. Sed
              ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium.
            </p>
            <div className="mt-6 flex items-center">
              <span className=" text-lg font-Monrope font-bold text-gray-900">
                James Frank
              </span>
              <span className="ml-2 text-gray-600">/ CEO</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reality;
