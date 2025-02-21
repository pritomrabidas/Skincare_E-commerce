import React from "react";
import Breadcrumb from "../Components/Pages/Breadcrumb";
import RevolutionSection from "../Components/Pages/RevolutionSection";
import HeroSection from "../Components/Pages/About3/HeroSection";
import FeatureSection from "../Components/Pages/About3/FeatureSection";
import BestTeam from "../Components/Pages/About3/BestTeam";

const Page = () => {
  return (
    <div className="pt-20">
      <Breadcrumb heading="About 4" bread="About 4" />
      <HeroSection />
      <FeatureSection />
      <BestTeam/>
      <RevolutionSection />
    </div>
  );
};

export default Page;
