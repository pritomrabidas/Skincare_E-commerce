import { useState } from "react";

const CartTools = () => {
  const [shippingVisible, setShippingVisible] = useState(false);
  const [formData, setFormData] = useState({
    country: "default",
    city: "",
    postcode: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Cart Totals</h2>
      <table className="w-full text-left border-collapse">
        <tbody>
          <tr className="border-b">
            <th className="p-2">Subtotal</th>
            <td className="p-2 font-semibold">$1,896.16</td>
          </tr>
          <tr className="border-b">
            <th className="p-2">Shipping</th>
            <td className="p-2">
              <label className="flex items-center">
                <input type="radio" checked readOnly className="mr-2" /> Free
                Shipping
              </label>
              <p className="text-sm text-gray-600">
                Shipping options will be updated during checkout.
              </p>
              <button
                className="mt-2 text-blue-600 hover:underline"
                onClick={() => setShippingVisible(!shippingVisible)}
              >
                Calculate shipping
              </button>
              {shippingVisible && (
                <div className="mt-4 space-y-2">
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                  >
                    <option value="default">Select a country...</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="UK">United Kingdom</option>
                  </select>
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                  />
                  <input
                    type="text"
                    name="postcode"
                    placeholder="Postcode / ZIP"
                    value={formData.postcode}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                  />
                  <button className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                    Update
                  </button>
                </div>
              )}
            </td>
          </tr>
          <tr>
            <th className="p-2">Total</th>
            <td className="p-2 font-bold text-lg">$1,896.16</td>
          </tr>
        </tbody>
      </table>
      <div className="mt-4">
        <a
          href="/checkout"
          className="block w-full text-center bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Proceed to Checkout
        </a>
      </div>
    </div>
  );
};

export default CartTools;
