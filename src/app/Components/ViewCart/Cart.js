import Image from "next/image";
import { useState } from "react";

const Cart = () => {
     const [cartItems, setCartItems] = useState([
       {
         id: "956adf8f21dff76b502290b42a69ee07",
         name: "Intense brightening exfoliating powder - 13",
         price: 270.88,
         quantity: 7,
         image:
           "/contact-4.jpg",
       },
     ]);

     const handleQuantityChange = (id, newQuantity) => {
       setCartItems((prevItems) =>
         prevItems.map((item) =>
           item.id === id ? { ...item, quantity: newQuantity } : item
         )
       );
     };

     const handleRemove = (id) => {
       setCartItems(cartItems.filter((item) => item.id !== id));
     };
  return (
    <div className="container mx-auto p-4">
      <form className="bg-white rounded-lg p-6">
        <table className=" ">
          <tr className="w-full ">
            <th className="p-3 text-primary font-Popins text-sm font-medium">
              Remove
            </th>
            <th className="p-3 text-primary font-Popins text-sm font-medium">
              Thumbnail
            </th>
            <th className="p-3 text-primary font-Popins text-sm font-medium">
              Product
            </th>
            <th className="p-3 text-primary font-Popins text-sm font-medium">
              Price
            </th>
            <th className="p-3 text-primary font-Popins text-sm font-medium">
              Quantity
            </th>
            <th className="p-3 text-primary font-Popins text-sm font-medium">
              Subtotal
            </th>
          </tr>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="border-t border-gray-300">
                <td className="p-2 text-center">
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-red-500 text-xl"
                  >
                    ×
                  </button>
                </td>
                <td className="p-2">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="rounded"
                  />
                </td>
                <td className="p-2 text-primary font-NunitoFont text-sm font-normal">
                  {item.name}
                </td>
                <td className="p-2 text-primary font-Monrope text-sm font-normal">
                  ${item.price.toFixed(2)}
                </td>
                <td className="p-2 text-primary font-Monrope text-sm font-normal">
                  <input
                    type="number"
                    className="border p-1 w-16"
                    value={item.quantity}
                    min="0"
                    onChange={(e) =>
                      handleQuantityChange(item.id, Number(e.target.value))
                    }
                  />
                </td>
                <td className="p-2 text-primary font-Monrope text-sm font-normal">
                  ${(item.price * item.quantity).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-4 flex justify-between items-center">
          <div>
            <input
              type="text"
              placeholder="Coupon code"
              className="border focus:outline-secandari duration-200 p-2.5 mr-2  text-primary font-NunitoFont text-sm font-normal w-60 rounded"
            />
            <button className="bg-gray-700 text-sm text-white px-6 py-2.5 rounded">
              Apply Coupon
            </button>
          <button className="bg-blue-600 text-white px-4 py-2.5 rounded text-sm font-medium font-NunitoFont ml-5">
            Update Cart
          </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Cart
