import Image from "next/image";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";

import {
  FaSearchPlus,
  FaTimes,
  FaCaretLeft,
  FaCaretRight,
} from "react-icons/fa";

const Connected = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const portfolioItems = [
    { id: 1, image: "/home-12.webp", title: "home" },
    { id: 2, image: "/home-13.webp", title: "home" },
    { id: 3, image: "/home-14.webp", title: "home" },
    { id: 4, image: "/home-15.webp", title: "home" },
    { id: 5, image: "/home-16.webp", title: "home" },
    { id: 6, image: "/home-17.webp", title: "home" },
  ];

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? portfolioItems.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === portfolioItems.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="relative py-20 bg-[#fdecf7]">
      <div className="container mx-auto px-4">
        <h3 className="text-lg text-secandari font-medium font-Popins text-center">
          Our Photos.
        </h3>
        <h2 className="text-3xl text-primary font-Raleway font-bold py-2 text-center">
          Stay Connected
        </h2>
        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-6 sm:grid-cols-3 grid-cols-2 gap-3 pt-10">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className="relative group overflow-hidden rounded-lg shadow"
            >
              <Image
                src={item.image}
                alt={item.title}
                height={100}
                width={100}
                className="w-full h-[200px] object-cover"
              />
              <div className="absolute inset-0 bg-[rgba(0,0,0,0.31)] bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center transition-all duration-300">
                <button
                  onClick={() => openModal(index)}
                  className="text-white text-xl"
                >
                  <FiPlus className="text-3xl font-normal" />
                </button>
                <h4 className="text-white text-lg font-semibold mt-2">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-[rgba(6,5,5,0.87)] bg-opacity-90 z-50 flex items-center justify-center">
          <button
            className="absolute top-4 right-4 text-white text-xl p-2 cursor-pointer"
            onClick={closeModal}
          >
            <FaTimes />
          </button>
          <button
            className="absolute left-4 text-white text-2xl p-2 cursor-pointer"
            onClick={prevImage}
          >
            <FaCaretLeft />
          </button>
          <Image
            src={portfolioItems[currentIndex].image}
            alt={portfolioItems[currentIndex].title}
            width={100}
            height={100}
            className="h-96 w-96 cursor-default rounded-md"
          />
          <button
            className="absolute right-4 text-white text-2xl font-Montez p-2 cursor-pointer"
            onClick={nextImage}
          >
            <FaCaretRight />
          </button>
        </div>
      )}
    </section>
  );
};

export default Connected;
