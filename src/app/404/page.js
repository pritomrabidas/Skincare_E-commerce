"use client"
import dynamic from "next/dynamic";

// Dynamically import components using Next.js's dynamic import
const Breadcrumb = dynamic(() => import("../Components/Pages/Breadcrumb"), {
  ssr: false, // Disable SSR if necessary
});
const NotfoundPage = dynamic(
  () => import("../Components/Pages/FAQ/NotfoundPage"),
  {
    ssr: false,
  }
);

const Page = () => {
  return (
    <div className="pt-20">
      {/* Directly render dynamically imported components */}
      <Breadcrumb heading={"404"} bread={"404"} />
      <NotfoundPage />
    </div>
  );
};

export default Page;
