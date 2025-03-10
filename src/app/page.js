"use client";

import dynamic from "next/dynamic";

const dynamicImport = (path) =>
  dynamic(() => import(`./Components/Home/${path}`), {
    loading: () => <div>Loading...</div>,
  });

const HomeBanner = dynamicImport("HomeBanner");
const Introducing = dynamicImport("Introducing");
const Benefit = dynamicImport("Benefit");
const SpecialFormula = dynamicImport("SpecialFormula");
const FeatureSection = dynamicImport("FeatureSection");
const Product = dynamicImport("Product");
const Connected = dynamicImport("Connected");

export default function Home() {
  return (
    <div className="pt-20">
      <HomeBanner />
      <Introducing />
      <Benefit />
      <SpecialFormula />
      <FeatureSection />
      <Product />
      <Connected />
    </div>
  );
}
