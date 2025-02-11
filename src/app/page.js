"use client"
import Benefit from "./Components/Home/Benefit";
import HomeBanner from "./Components/Home/HomeBanner";
import Introducing from "./Components/Home/Introducing";

export default function Home() {
  return (
    <div className="pt-20">
      <HomeBanner />
      <Introducing />
      <Benefit/>
    </div>
  );
}
