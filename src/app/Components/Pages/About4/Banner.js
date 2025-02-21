import React from 'react'

const Banner = () => {
  return (
    <section
      className=" w-full flex justify-center py-40 px-4 bg-cover bg-center bg-no-repeat"
      style={{ background: "url('./about4/about-3.jpg')" }}
    >
      <div className=" text-center">
        <h3 className="text-2xl font-bold text-gray-900">
          The World's No.1 Device Provider
        </h3>
        <p className="mt-4 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor
          <br />
          incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </section>
  );
}

export default Banner
