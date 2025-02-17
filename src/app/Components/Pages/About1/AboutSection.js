import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="relative w-full px-4 py-12">
      <div className="container mx-auto">
        <div className="w-full justify-center mx-auto">
          {/* Heading */}
          <div className="w-full justify-center mx-auto text-center">
            <h3 className="text-3xl font-semibold">Who We Are</h3>
            <p className="text-lg mt-4">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          {/* Images Section */}
          <div className="w-full lg:w-1/2 flex flex-col lg:flex-row gap-6">
            {/* Image 1 */}
            <div className="w-full lg:w-1/2">
              <Image
                src="/home-10.jpg"
                alt="home-10"
                width={410}
                height={490}
                loading="lazy"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Image 2 */}
            <div className="w-full lg:w-1/2">
              <Image
                src="/home-10.jpg"
                alt="home-10"
                width={850}
                height={490}
                loading="lazy"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection
