import BillingDetails from "../Components/Checkout/BillingDetails";
import Breadcrumb from "../Components/Pages/Breadcrumb";

const Page = () => {
  return (
    <div className="pt-20">
      <Breadcrumb heading="Checkout" bread="checkout" />
      <BillingDetails />
    </div>
  );
};

export default Page;
