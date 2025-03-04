"use client";
import React from "react";
import Breadcrumb from "../Components/Pages/Breadcrumb";
import ProductCart from "../Components/ViewCart/ProductCart";
import ViewRelativeProduct from "../Components/ViewCart/ViewRelativeProduct";

const Page = () => {
  return (
    <div className="pt-20">
      <Breadcrumb heading={"Cart"} bread={"cart"} />
      <ProductCart />
      <ViewRelativeProduct/>
    </div>
  );
};

export default Page;
