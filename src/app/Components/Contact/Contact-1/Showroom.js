import Image from "next/image";
import Link from "next/link";

const Showroom = () => {
    const showrooms = [
      {
        id: 1,
        image: "/contact-4.jpg",
        title: "Showroom New York",
        address: "One Chase Manhattan Plaza New York, NY 10005, USA",
        phone: "+ 844 1800 – 333 55",
      },
      {
        id: 2,
        image: "/contact-5.jpg",
        title: "Showroom New York",
        address: "One Chase Manhattan Plaza New York, NY 10005, USA",
        phone: "+ 844 1800 – 333 55",
      },
      {
        id: 3,
        image: "/contact-6.webp",
        title: "Showroom New York",
        address: "One Chase Manhattan Plaza New York, NY 10005, USA",
        phone: "+ 844 1800 – 333 55",
      },
    ];
  return (
    <section className=" bg-gray-100 mx-auto px-4 py-20">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-2 lg:gap-8">
        {showrooms.map(({ id, image, title, address, phone }) => (
          <div
            key={id}
            className="bg-white shadow rounded-lg text-center w-full sm:w-[450px] md:w-full justify-center mx-auto items-center"
          >
            <Image
              src={image}
              alt={title}
              width={410}
              height={240}
              className="rounded-lg h-80 sm:h-96 md:h-72 w-full"
            />
            <h2 className="text-xl font-semibold text-primary font-NunitoFont mt-6">
              {title}
            </h2>
            <p className="text-gray-600 text-sm font-Opensans font-medium mt-2 w-[80%] mx-auto text-center">
              {address}
            </p>
            <p className="text-secandari text-sm font-Popins font-normal mt-2 pb-7">
              {phone}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Showroom
