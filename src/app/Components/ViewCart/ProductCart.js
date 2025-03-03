import React from "react";
import Cart from "./Cart";
import CartTools from "./CartTools";

const ProductCart = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto flex">
        <Cart />
        <CartTools />
      </div>
    </section>
  );
};

export default ProductCart;
