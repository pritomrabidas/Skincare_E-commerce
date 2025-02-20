import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="relative w-full px-4 py-12">
      <div className="container mx-auto">
        <div className="w-full justify-center mx-auto">
          {/* Heading */}
          <div className="w-full justify-center mx-auto text-center pb-14">
            <h3 className="text-5xl font-bold font-Raleway text-primary">
              Who We Are
            </h3>
            <p className="text-lg mt-4 w-1/2 text-primary font-NunitoFont font-normal  mx-auto">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          {/* Images Section */}
          <div className="w-full  flex flex-col lg:flex-row gap-6">
            {/* Image 1 */}
            <div className="w-1/4 relative">
              <Image
                src="/about1/about-2.webp"
                alt="home-10"
                width={410}
                height={490}
                loading="lazy"
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-[rgba(0,0,0,0.2)]"></div>
            </div>

            {/* Image 2 */}
            <div className="w-3/4 relative">
              <Image
                src="/about1/about-1.webp"
                alt="home-10"
                width={850}
                height={490}
                loading="lazy"
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-[rgba(0,0,0,0.21)]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection
