"use client"
import dynamic from "next/dynamic";

// Dynamically import components using Next.js's dynamic import
const Breadcrumb = dynamic(() => import("../Components/Pages/Breadcrumb"), {
  ssr: false, // Disable SSR if necessary
});
const FAQSection = dynamic(() => import("../Components/Pages/FAQ/FAQSection"), {
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
      {/* Directly render dynamically imported components */}
      <Breadcrumb heading={"FAQ"} bread={"FAQ"} />
      <FAQSection />
      <RevolutionSection />
    </div>
  );
};

export default Page;
