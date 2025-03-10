"use client";
import dynamic from "next/dynamic";

// Dynamically import components using Next.js's dynamic import
const Breadcrumb = dynamic(() => import("../Components/Pages/Breadcrumb"), {
  ssr: false, // Disable SSR for this component if needed
});
const ProductCart = dynamic(
  () => import("../Components/ViewCart/ProductCart"),
  {
    ssr: false,
  }
);
const ViewRelativeProduct = dynamic(
  () => import("../Components/ViewCart/ViewRelativeProduct"),
  {
    ssr: false,
  }
);

const Page = () => {
  return (
    <div className="pt-20">
      {/* Directly render dynamically imported components */}
      <Breadcrumb heading="Cart" bread="cart" />
      <ProductCart />
      <ViewRelativeProduct />
    </div>
  );
};

export default Page;
