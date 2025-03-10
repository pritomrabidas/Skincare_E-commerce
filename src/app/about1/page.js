"use client";

import dynamic from "next/dynamic";

// Ensure correct paths
const AboutSection = dynamic(
  () => import("../Components/Pages/About1/AboutSection"),
  {
    loading: () => <div>Loading...</div>,
  }
);
const OurStory = dynamic(() => import("../Components/Pages/About1/OurStory"), {
  loading: () => <div>Loading...</div>,
});
const MissionSection = dynamic(
  () => import("../Components/Pages/About1/MissionSection"),
  {
    loading: () => <div>Loading...</div>,
  }
);
const RevolutionSection = dynamic(
  () => import("../Components/Pages/RevolutionSection"),
  {
    loading: () => <div>Loading...</div>,
  }
);

const ClientAbout = () => (
  <div className="pt-20">
    <AboutSection />
    <OurStory />
    <MissionSection />
    <RevolutionSection />
  </div>
);

export default ClientAbout;
