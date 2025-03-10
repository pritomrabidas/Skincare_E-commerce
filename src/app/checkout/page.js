"use client"
import dynamic from "next/dynamic";

// Dynamically import components using Next.js's dynamic import
const BillingDetails = dynamic(
  () => import("../Components/Checkout/BillingDetails"),
  {
    ssr: false, // Disable SSR for this component if needed
  }
);
const Breadcrumb = dynamic(() => import("../Components/Pages/Breadcrumb"), {
  ssr: false, // Disable SSR for this component if needed
});

const Page = () => {
  return (
    <div className="pt-20">
      {/* Directly render dynamically imported components */}
      <Breadcrumb heading="Checkout" bread="checkout" />
      <BillingDetails />
    </div>
  );
};

export default Page;
