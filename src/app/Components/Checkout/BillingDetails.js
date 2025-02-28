import Froms from "./Froms";
import OderReview from "./OderReview";

const BillingDetails = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-2">
        <div className="grid grid-cols-2 gap-16">
          <Froms />
          <OderReview />
        </div>
      </div>
    </section>
  );
};

export default BillingDetails;
