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
      <form className="bg-white shadow-md rounded-lg p-6">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2">Remove</th>
              <th className="p-2">Thumbnail</th>
              <th className="p-2">Product</th>
              <th className="p-2">Price</th>
              <th className="p-2">Quantity</th>
              <th className="p-2">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="border-t border-gray-300">
                <td className="p-2 text-center">
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-red-500"
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
                <td className="p-2">{item.name}</td>
                <td className="p-2">${item.price.toFixed(2)}</td>
                <td className="p-2">
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
                <td className="p-2">
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
              className="border p-2 mr-2"
            />
            <button className="bg-gray-700 text-white px-4 py-2 rounded">
              Apply Coupon
            </button>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Update Cart
          </button>
        </div>
      </form>
    </div>
  );
}

export default Cart
