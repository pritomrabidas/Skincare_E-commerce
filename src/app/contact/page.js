"use client";

import dynamic from "next/dynamic";

const dynamicImport = (path) =>
  dynamic(() => import(`../Components/Contact/Contact-1/${path}`), {
    loading: () => <div>Loading...</div>,
  });

const ContactSection1 = dynamicImport("ContactSection1");
const HelpSection = dynamicImport("HelpSection");
const Showroom = dynamicImport("Showroom");

const Page = () => (
  <div className="pt-20">
    <HelpSection />
    <ContactSection1 />
    <Showroom />
  </div>
);

export default Page;
