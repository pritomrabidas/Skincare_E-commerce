"use client";
import Image from "next/image";
import Link from "next/link";

const HomeBanner = () => {
  return (
    <section className="relative w-full h-[584px] bg-transparent flex items-center justify-center">
      <div className="relative w-full max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-4 text-left">
            <p className="text-secandari font-medium text-lg font-Popins">
              Skin Care Product
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold text-primary font-Raleway leading-tight py-1">
              Highly Effective Solution for Your Skin
            </h1>
            <Link
              href="/shop"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-secandari text-white font-medium font-Montserrat py-3 px-8 rounded-md text-base transition hover:bg-primary duration-300"
            >
              Shop now
            </Link>
          </div>

          {/* Right Image */}
          <div className="relative">
            <Image
              className="rounded-3xl w-[500px] h-[350px]"
              src="/Homebanner.webp"
              alt="Skincare"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
