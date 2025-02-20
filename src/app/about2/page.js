import React from "react";
import HeroSection from "../Components/Pages/About2/HeroSection";
import FeaturesSection from "../Components/Pages/About2/FeaturesSection";
import Team from "../Components/Pages/About2/Team";
import RevolutionSection from "../Components/Pages/RevolutionSection";

const Page = () => {
  return (
    <div className="pt-20">
          <HeroSection />
          <FeaturesSection />
          <Team />
          <RevolutionSection/>
    </div>
  );
};

export default Page;
