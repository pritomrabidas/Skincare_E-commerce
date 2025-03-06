import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io";
const ViewRelativeProduct = () => {
  const ingredients = [
    {
      title: "Mint Extract",
      price: "$604,77",
      img: "/home-7.jpg",
    },
    {
      title: "Green Tea",
      price: "$604,77",
      img: "/home-8.webp",
    },
    {
      title: "Rose Extract",
      price: "$604,77",
      img: "/home-9.webp",
    },
    {
      title: "Alpha Hydroxy Acid",
      price: "$604,77",
      img: "/home-10.jpg",
    },
    {
      title: "Beta Hydroxy Acid",
      price: "$604,77",
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
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: true,
    prevArrow: <PrevArrow />, // ✅ Custom arrows
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024, // For tablets & small desktops
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // For mobile landscape
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // For mobile portrait
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="w-full justify-center items-center flex">
          <Slider
            {...settings}
            className="text-center flex w-[95%]  rounded-lg shadow-sm"
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
                    className="mx-auto w-60 h-48 rounded object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg text-primary font-Popins font-medium mt-2">
                    {item.title}
                  </h4>
                  <p className="text-base text-brand font-NunitoFont font-normal w-[70%] text-center m-auto ">
                    {item.price}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ViewRelativeProduct;
