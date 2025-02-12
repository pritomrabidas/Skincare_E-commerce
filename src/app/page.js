"use client"
import Benefit from "./Components/Home/Benefit";
import HomeBanner from "./Components/Home/HomeBanner";
import Introducing from "./Components/Home/Introducing";
import SpecialFormula from "./Components/Home/SpecialFormula";

export default function Home() {
  return (
    <div className="pt-20">
      <HomeBanner />
      <Introducing />
      <Benefit />
      <SpecialFormula/>
    </div>
  );
}
