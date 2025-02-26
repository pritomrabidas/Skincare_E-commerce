import Link from "next/link";
import React, { useState } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

const PageCart = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const menuItems = [
    { label: "About 1", path: "/about1" },
    { label: "About 2", path: "/about2" },
    { label: "About 3", path: "/about3" },
    { label: "About 4", path: "/about4" },
    { label: "FAQ", path: "/faq" },
    { label: "404", path: "/404" },
  ];
  return (
    <div>
      <div className="flex items-center gap-[120px] pb-3">
        <Link
          href="/about1"
          className="hover:text-secandari text-xl font-medium font-Raleway"
        >
          Pages
        </Link>
        <div onClick={toggleMenu} className="cursor-pointer justify-end">
          {isOpen ? (
            <CiCircleMinus className="text-2xl text-secandari" />
          ) : (
            <CiCirclePlus className="text-2xl text-secandari" />
          )}
        </div>
      </div>
      {isOpen && (
        <ul className="flex flex-col text-base font-semibold font-Raleway pb-5">
          {menuItems.map(({ path, label }) => (
            <li key={path} className="py-2">
              <Link
                href={path}
                className="hover:text-secandari relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-secandari after:bottom-0 after:left-0 hover:after:w-full after:transition-width after:duration-200"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PageCart;
