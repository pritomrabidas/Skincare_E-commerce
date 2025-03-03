"use client";
import React from "react";
import Breadcrumb from "../Components/Pages/Breadcrumb";
import ProductCart from "../Components/ViewCart/ProductCart";

const Page = () => {
  return (
    <div className="pt-20">
      <Breadcrumb heading={"Cart"} bread={"cart"} />
      <ProductCart />
    </div>
  );
};

export default Page;
