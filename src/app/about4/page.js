"use client"
import dynamic from "next/dynamic";

// Dynamically import components using Next.js's dynamic import
const Banner = dynamic(() => import("../Components/Pages/About4/Banner"), {
  ssr: false, // Disable SSR for this component if needed
});
const Reality = dynamic(() => import("../Components/Pages/About4/Reality"), {
  ssr: false,
});
const StatsSection = dynamic(
  () => import("../Components/Pages/About4/StatsSection"),
  {
    ssr: false,
  }
);
const WhatWeDo = dynamic(() => import("../Components/Pages/About4/WhatWeDo"), {
  ssr: false,
});
const RevolutionSection = dynamic(
  () => import("../Components/Pages/RevolutionSection"),
  {
    ssr: false,
  }
);

const Page = () => {
  return (
    <div className="pt-20">
      {/* You don't need Suspense in Next.js with dynamic import */}
      <Banner />
      <StatsSection />
      <Reality />
      <WhatWeDo />
      <RevolutionSection />
    </div>
  );
};

export default Page;
