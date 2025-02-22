import Banner from "../Components/Pages/About4/Banner";
import Reality from "../Components/Pages/About4/Reality";
import StatsSection from "../Components/Pages/About4/StatsSection";
import WhatWeDo from "../Components/Pages/About4/WhatWeDo";
import RevolutionSection from "../Components/Pages/RevolutionSection";

const Page = () => {
  return (
    <div className="pt-20">
      <Banner />
      <StatsSection/>
      <Reality />
      <WhatWeDo />
      <RevolutionSection />
    </div>
  );
};

export default Page;
