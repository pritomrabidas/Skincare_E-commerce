import React from 'react'

const ContactSection1 = () => {
  return (
    <section className="  py-12 bg-gray-50">
      <div className=" container mx-auto px-6 flex flex-wrap justify-center items-center">
        {/* Left Column: Contact Form */}
        <div className="w-full md:w-1/2 px-4">
          <h2 className="text-3xl font-bold text-primary font-NunitoFont">
            Send us a message
          </h2>
          <p className="mt-4 text-gray-600 text-sm font-Opensans font-normal">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do{" "}
            <br />
            eiusmod tempor incididunt.
          </p>
          <form className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="Your name*"
              className="w-full p-3 border outline-none rounded-lg text-sm text-primary font-normal font-Monrope"
            />
            <input
              type="email"
              placeholder="Your email*"
              className="w-full p-3 border outline-none rounded-lg text-sm text-primary font-normal font-Monrope"
              required
            />
            <textarea
              placeholder="Message"
              rows="5"
              className="w-full p-3 border outline-none rounded-lg text-sm text-primary font-normal font-Monrope"
            ></textarea>
            <button
              type="submit"
              className="w-fit bg-secandari text-white py-3 px-6 rounded-lg text-sm font-Popins font-normal"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right Column: Contact Info */}
        <div className="w-full md:w-1/2 px-4 flex flex-col space-y-6 mt-8 md:mt-0">
          <div
            className="sm:h-[400px] h-[350px] bg-cover bg-no-repeat bg-center rounded-md w-[90%]"
            style={{ backgroundImage: "url('contact1.jpg')" }}
          ></div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection1
