import dynamic from "next/dynamic";

// Dynamically import components using Next.js dynamic
const Breadcrumb = dynamic(() => import("../Components/Pages/Breadcrumb"), {
  loading: () => <div>Loading...</div>,
});
const RevolutionSection = dynamic(
  () => import("../Components/Pages/RevolutionSection"),
  {
    loading: () => <div>Loading...</div>,
  }
);
const HeroSection = dynamic(
  () => import("../Components/Pages/About3/HeroSection"),
  {
    loading: () => <div>Loading...</div>,
  }
);
const FeatureSection = dynamic(
  () => import("../Components/Pages/About3/FeatureSection"),
  {
    loading: () => <div>Loading...</div>,
  }
);
const BestTeam = dynamic(() => import("../Components/Pages/About3/BestTeam"), {
  loading: () => <div>Loading...</div>,
});

const Page = () => {
  return (
    <div className="pt-20">
      <Breadcrumb heading="About 3" bread="About 3" />
      <HeroSection />
      <FeatureSection />
      <BestTeam />
      <RevolutionSection />
    </div>
  );
};

export default Page;
