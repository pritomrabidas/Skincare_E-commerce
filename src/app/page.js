"use client"
import Benefit from "./Components/Home/Benefit";
import Connected from "./Components/Home/Connected";
import FeatureSection from "./Components/Home/FeatureSection";
import HomeBanner from "./Components/Home/HomeBanner";
import Introducing from "./Components/Home/Introducing";
import Product from "./Components/Home/Product";
import SpecialFormula from "./Components/Home/SpecialFormula";

export default function Home() {
  return (
    <div className="pt-20">
      <HomeBanner />
      <Introducing />
      <Benefit />
      <SpecialFormula />
      <FeatureSection />
      <Product />
      <Connected/>
    </div>
  );
}
