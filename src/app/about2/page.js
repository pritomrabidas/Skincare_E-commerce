import dynamic from "next/dynamic";

const HeroSection = dynamic(
  () => import("../Components/Pages/About2/HeroSection"),
  {
    loading: () => <div>Loading...</div>,
  }
);
const FeaturesSection = dynamic(
  () => import("../Components/Pages/About2/FeaturesSection"),
  {
    loading: () => <div>Loading...</div>,
  }
);
const Team = dynamic(() => import("../Components/Pages/About2/Team"), {
  loading: () => <div>Loading...</div>,
});
const RevolutionSection = dynamic(
  () => import("../Components/Pages/RevolutionSection"),
  {
    loading: () => <div>Loading...</div>,
  }
);

const Page = () => (
  <div className="pt-20">
    <HeroSection />
    <FeaturesSection />
    <Team />
    <RevolutionSection />
  </div>
);

export default Page;
