import Breadcrumb from "../Components/Pages/Breadcrumb";
import FAQSection from "../Components/Pages/FAQ/FAQSection";
import RevolutionSection from "../Components/Pages/RevolutionSection";

const Page = () => {
  return (
    <div className="pt-20">
      <Breadcrumb heading={"FAQ"} bread={"FAQ"} />
      <FAQSection />
      <RevolutionSection />
    </div>
  );
};

export default Page;
