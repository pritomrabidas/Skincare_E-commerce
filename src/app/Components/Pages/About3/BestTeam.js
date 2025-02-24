"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from "next/link";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
} from "react-icons/ti";
import { AiFillInstagram } from "react-icons/ai";
import Image from "next/image";
const BestTeam = () => {
  const teamMembers = [
    {
      name: "John Aston Doe",
      role: "CO FOUNDER",
      img: "/about2/about-1.webp",
    },
    {
      name: "Fabian Hellgardt",
      role: "Photography",
      img: "/about2/about-1.webp",
    },
    {
      name: "Jane Stark",
      role: "designer",
      img: "/about2/about-1.webp",
    },
    {
      name: "Camelia Doe",
      role: "marketing",
      img: "/about2/about-1.webp",
    },
  ];

  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1,} },
      { breakpoint: 1023, settings: { slidesToShow: 3,} },
      { breakpoint: 768, settings: { slidesToShow: 2,} },
      { breakpoint: 639, settings: { slidesToShow: 1 } },
    ],
  };
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 grid-cols-1 pb-10 px-4">
          <h3 className="lg:text-5xl md:text-4xl text-3xl font-bold text-primary font-Montserrat pb-2.5">
            The best team <br></br> available
          </h3>
          <p className="text-gray-700 text-base font-normal font-NunitoFont mb-4 w-[90%]">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Sed ut perspiciatis unde omnis iste natus error
            sit voluptatem
          </p>
        </div>
        <div>
          <Slider {...settings}>
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="item hover:scale-[1.02] duration-500 group rounded-3xl px-4 justify-center mx-auto flex border-none outline-none"
              >
                <Image
                  width={100}
                  height={100}
                  src={member.img}
                  alt="team"
                  className=" 2xl:h-[370px] xl:h-[300px] lg:h-[360px] md:h-[300px] sm:h-[250px] h-[270px] sm:w-full w-[350px] rounded relative"
                />
                <div className="absolute bg-[rgba(0,0,0,0.60)] w-1/3 top-0 right-3 bottom-[20%] rounded-r flex transform scale-0 group-hover:scale-75 transition-transform duration-700 ease-in-out delay-100">
                  <ul className="items-center m-auto justify-center text-center text-sm font-extralight text-[#384141] rounded-full">
                    <li className="w-10 h-10 rounded-full hover:border-[#16b5ca] bg-slate-75 hover:text-[#fff] bg-white hover:bg-secandari text-primary duration-300 shadow-md items-center justify-center leading-10 flex mb-3">
                      <Link href="javascript:void(0)">
                        <TiSocialFacebook className="text-xl  " />
                      </Link>
                    </li>
                    <li className="w-10 h-10 rounded-full hover:border-[#16b5ca] bg-slate-75 hover:text-[#fff] bg-white hover:bg-secandari text-primary duration-300 shadow-md items-center justify-center leading-10 flex mb-3">
                      <Link href="javascript:void(0)">
                        <TiSocialLinkedin className="text-xl  " />
                      </Link>
                    </li>
                    <li className="w-10 h-10 rounded-full hover:border-[#16b5ca] bg-slate-75 hover:text-[#fff] bg-white hover:bg-secandari text-primary duration-300 shadow-md items-center justify-center leading-10 flex mb-3">
                      <Link href="javascript:void(0)">
                        <TiSocialTwitter className="text-xl  " />
                      </Link>
                    </li>
                    <li className="w-10 h-10 rounded-full hover:border-[#16b5ca] bg-slate-75 hover:text-[#fff] bg-white hover:bg-secandari text-primary duration-300 shadow-md items-center justify-center leading-10 flex mb-3">
                      <Link href="javascript:void(0)">
                        <AiFillInstagram className="text-xl  " />
                      </Link>
                    </li>
                  </ul>
                </div>
                <p className="text-[22px] font-medium text-primary font-NunitoFont text-center pt-2">
                  {member.name}
                </p>
                <p className="text-base font-medium font-Popins text-center text-primary">
                  {member.role}
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default BestTeam;
