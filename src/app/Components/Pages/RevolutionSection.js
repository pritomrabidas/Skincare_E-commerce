import Link from "next/link";

const RevolutionSection = () => {
  return (
    <section
      className="mx-auto px-6 py-40 flex items-center justify-center bg-cover bg-no-repeat bg-center relative"
      style={{ backgroundImage: "url('/about1/about-5.jpg')" }}
    >
      <div className="absolute inset-0 bg-[#0000004a] bg-opacity-50 flex items-center justify-center">
        <div className="text-center px-6">
          <h2 className="md:text-4xl text-3xl font-bold text-white font-NunitoFont mb-6">
            Ready to revolutionize
            <br />
            your website?
          </h2>
          <Link
            href="/contact"
            className="bg-white text-primary md:px-6 px-4 md:py-3 py-2.5 rounded-md text-base font-Popins font-medium hover:bg-secandari hover:text-white duration-400"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RevolutionSection;
