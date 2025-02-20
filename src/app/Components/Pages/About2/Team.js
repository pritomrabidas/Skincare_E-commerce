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

const Team = () => {
  const teamMembers = [
    {
      name: "Jessica Twain",
      role: "CO FOUNDER",
      img: "/about2/about-1.webp",
    },
    {
      name: "Jin Yuanying",
      role: "CO FOUNDER",
      img: "/about2/about-1.webp",
    },
    {
      name: "Marc Tarpenning",
      role: "CO FOUNDER",
      img: "/about2/about-1.webp",
    },
    {
      name: "Evan Williams",
      role: "CO FOUNDER",
      img: "/about2/about-1.webp",
    },
  ];

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, dots: true } },
      { breakpoint: 639, settings: { slidesToShow: 1 } },
    ],
  };
  return (
    <section className="bg-slate-50 py-16 2xl:px-5 xl:px-5 lg:px-14 md:px-6">
      <div className="container mx-auto w-full px-10">
        <div className="text-center">
          <p
            data-aos="fade-left"
            data-aos-duration="1500"
            className="text-secandari block text-lg font-Nunito-font font-normal"
          >
            Quisque tellus risus, adipisci
          </p>
          <h3
            data-aos="fade-right"
            data-aos-duration="1500"
            className="text-5xl font-normal text-primary font-Montez mt-2 pb-16"
          >
            Meet Our Experts
          </h3>
        </div>
        <Slider {...settings}>
          {teamMembers.map((member, index) => (
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              key={index}
              className="item hover:scale-[1.02] duration-500 group rounded-3xl px-4 justify-center mx-auto flex border-none outline-none"
            >
              <Image
                width={100}
                height={100}
                src={member.img}
                alt="team"
                className=" 2xl:h-[370px] xl:h-[340px] lg:h-[360px] md:h-[300px] sm:h-[250px] h-[270px] sm:w-full w-[350px] rounded relative"
              />
              <div className="absolute bg-[rgba(0,0,0,0.60)] w-1/3 top-0 right-3 bottom-[35%] rounded-r flex transform scale-0 group-hover:scale-75 transition-transform duration-700 ease-in-out delay-100">
                <ul className="items-center m-auto justify-center text-center text-sm font-extralight text-[#384141] rounded-full">
                  <li className="w-10 h-10 rounded-full hover:border-[#16b5ca] bg-slate-75 hover:text-[#fff] bg-white hover:bg-[#16b5ca] text-primary duration-300 shadow-md items-center justify-center leading-10 flex mb-3">
                    <Link href="javascript:void(0)">
                      <TiSocialFacebook className="text-xl  " />
                    </Link>
                  </li>
                  <li className="w-10 h-10 rounded-full hover:border-[#16b5ca] bg-slate-75 hover:text-[#fff] bg-white hover:bg-[#16b5ca] text-primary duration-300 shadow-md items-center justify-center leading-10 flex mb-3">
                    <Link href="javascript:void(0)">
                      <TiSocialLinkedin className="text-xl  " />
                    </Link>
                  </li>
                  <li className="w-10 h-10 rounded-full hover:border-[#16b5ca] bg-slate-75 hover:text-[#fff] bg-white hover:bg-[#16b5ca] text-primary duration-300 shadow-md items-center justify-center leading-10 flex mb-3">
                    <Link href="javascript:void(0)">
                      <TiSocialTwitter className="text-xl  " />
                    </Link>
                  </li>
                  <li className="w-10 h-10 rounded-full hover:border-[#16b5ca] bg-slate-75 hover:text-[#fff] bg-white hover:bg-[#16b5ca] text-primary duration-300 shadow-md items-center justify-center leading-10 flex mb-3">
                    <Link href="javascript:void(0)">
                      <AiFillInstagram className="text-xl  " />
                    </Link>
                  </li>
                </ul>
              </div>
              <p className="text-[22px] font-medium text-primary font-Nunito-font pt-2">
                {member.name}
              </p>
              <span className="text-base font-medium font-Nunito-font text-primary">
                {member.role}
              </span>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Team;
