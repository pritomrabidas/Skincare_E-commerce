import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io";

const SpecialFormula = () => {
  const ingredients = [
    {
      title: "Mint Extract",
      desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
      img: "/home-7.jpg",
    },
    {
      title: "Green Tea",
      desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
      img: "/home-8.webp",
    },
    {
      title: "Rose Extract",
      desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
      img: "/home-9.webp",
    },
    {
      title: "Alpha Hydroxy Acid",
      desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
      img: "/home-10.jpg",
    },
    {
      title: "Beta Hydroxy Acid",
      desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
      img: "/home-11.jpg",
    },
  ];
  const PrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 text-secandari p-1 bg-white rounded-full shadow-sm justify-center items-center flex"
    >
      <IoMdArrowDropleft size={25} />
    </button>
  );

  // Custom Next Arrow
  const NextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 text-secandari p-1 bg-white rounded-full shadow-sm justify-center items-center flex"
    >
      <IoMdArrowDropright size={25} />
    </button>
  );
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow: <PrevArrow />, // ✅ No error now
    nextArrow: <NextArrow />,
  };
  return (
    <section className="w-full bg-[#fff7fb] py-16 px-5 text-center">
      <div className="container mx-auto px-2">
        <div className="text-center mx-auto">
          <p className="text-lg text-secandari font-medium font-Popins">
            Ingredients.
          </p>
          <h2 className="text-3xl text-primary font-Raleway font-bold py-2">
            The Special Formula
          </h2>
          <p className="text-brand text-center justify-center mx-auto flex text-sm font-normal font-NunitoFont w-full sm:w-[70%] md:w-[60%] lg:w-[40%]">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center pt-12">
          <div className=" md:w-1/2 w-full flex justify-center pb-9">
            <Image
              src="/home-6.jpg"
              alt="Decoration"
              width={423}
              height={309}
              className="xl:h-[400px] lg:h-[380px] md:h-[350px] sm:h-[380px] h-[350px] xl:w-[65%] lg:w-[75%] md:w-[85%] sm:w-[65%] w-[80%] rounded-2xl shadow-md "
            />
          </div>
          <div className="w-full md:w-1/2 justify-center items-center flex">
            <Slider
              {...settings}
              className="text-center flex xl:w-[70%] lg:w-[80%] md:w-[85%] sm:w-[80%] w-[95%]  rounded-lg shadow-sm"
            >
              {ingredients.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-5 flex rounded-lg items-center m-auto "
                >
                  <div>
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={170}
                      height={170}
                      className="mx-auto w-20 h-20 rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg text-primary font-Popins font-medium mt-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-brand font-NunitoFont font-normal w-[70%] text-center m-auto ">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialFormula;
