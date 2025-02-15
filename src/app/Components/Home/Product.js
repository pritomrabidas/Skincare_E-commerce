import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react"; // Import Star icon from Lucide

const Product = () => {
  const products = [
    {
      id: 75,
      name: "home-4",
      image: "/home-6.jpg",
      head: "Clear Cell mattifying moisturizer for oily skin",
      price: "$118.10",
      link: "home",
      rating: 5,
    },
    {
      id: 85,
      name: "home-4",
      image: "/home-6.jpg",
      head: "Medicated acne masque",
      price: "$199.99",
      link: "home",
      rating: 4,
    },
    {
      id: 76,
      name: "home-4",
      image: "/home-6.jpg",
      head: "Intense brightening exfoliating powder",
      price: "$74.52 - $903.20",
      link: "home",
      rating: 4.5,
    },
  ];

  // Function to generate star icons based on rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating); // Get full stars
    const hasHalfStar = rating % 1 !== 0; // Check if half star needed

    return (
      <div className="flex space-x-1">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
        ))}
        {hasHalfStar && (
          <Star
            size={18}
            className="text-yellow-400 fill-yellow-400 opacity-50"
          />
        )}
      </div>
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center px-2">
        <h3 className="text-lg text-secandari font-medium font-Popins">
          Order Now.
        </h3>
        <h2 className="text-3xl text-primary font-Raleway font-bold py-2">
          Our Best Sellers
        </h2>
        <div className="grid grid-cols-3 gap-9 w-full justify-center pt-16 rounded-xl">
          {products.map((pro) => (
            <div key={pro.id} className="flex flex-col items-center">
              <Link href={pro.link} className="">
                <Image
                  src={pro.image}
                  alt={pro.name}
                  width={200}
                  height={200}
                  className="rounded-lg w-[400px] h-[430px] object-cover relative"
                />
                <h3 className="text-base text-primary font-normal font-Popins py-2">
                  {pro.head}
                </h3>

                {/* Star Rating Section */}
                <p className=" justify-center flex">
                  {renderStars(pro.rating)}
                </p>
                <p className="text-lg text-primary font-NunitoFont font-medium py-1.5">
                  {pro.price}
                </p>
                <button className="text-sm text-white font-Monrope font-normal py-3 px-7 bg-secandari duration-300 hover:bg-[#297929] rounded-md">
                  Select Options
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
