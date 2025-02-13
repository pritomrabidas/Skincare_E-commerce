import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Product = () => {
  const products = [
    {
      id: 75,
      name: "Medicated Acne Masque",
      image:
        "https://demo2.wpopal.com/smartic/wp-content/uploads/2020/09/01_product_3-500x600.jpg",
      price: "$118.10",
      link: "https://demo2.wpopal.com/smartic/product/medicated-acne-masque/",
    },
    {
      id: 85,
      name: "Clear Cell Mattifying Moisturizer",
      image:
        "https://demo2.wpopal.com/smartic/wp-content/uploads/2020/09/01_product_1-500x600.jpg",
      price: "$199.99",
      link: "https://demo2.wpopal.com/smartic/product/clear-cell-mattifying-moisturizer-for-oily-skin/",
    },
    {
      id: 76,
      name: "Intense Brightening Exfoliating Powder",
      image:
        "https://demo2.wpopal.com/smartic/wp-content/uploads/2020/09/01_product_2-500x600.jpg",
      price: "$74.52 - $903.20",
      link: "https://demo2.wpopal.com/smartic/product/intense-brightening-exfoliating-powder/",
    },
  ];
  return (
    <section className="w-full max-w-4xl mx-auto p-4 bg-white rounded-xl shadow-lg text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Our Best Sellers
      </h2>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        showThumbs={false}
      >
        {products.map((product) => (
          <div key={product.id} className="text-center p-4">
            <Image
              src={product.image}
              alt={product.name}
              className="mx-auto rounded-lg"
            />
            <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
            <a
              href={product.link}
              className="mt-2 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              View Product
            </a>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Product;
