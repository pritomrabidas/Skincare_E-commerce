import Link from "next/link";
import React, { useState } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
const ShopCart = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { label: "Shop-Fullwidth", path: "/shop-fullwidth" },
    { label: "Shop-Sidebar", path: "/shop-sidebar" },
    { label: "Shop-Listview ", path: "/shop-listview" },
    { label: "Vertical-Thumbnail", path: "/vertical-thumbnail" },
    { label: "Horizontal-Thumbnail", path: "/horizontal-thumbnail" },
    { label: "Sticky-Detail", path: "/sticky-detail" },
    { label: "Gallery-Thumbnail", path: "gallery-thumbnail" },
    { label: "Video-Upolad", path: "/video-upload" },
    { label: "360 Viewer", path: "/landing" },
  ];
  return (
    <div>
      <div className="flex items-center gap-32 pb-3">
        <Link
          href="/shop"
          className="hover:text-secandari text-xl font-medium font-Raleway"
        >
          Shop
        </Link>
        <div onClick={toggleMenu} className="cursor-pointer ">
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

export default ShopCart;
