"use client"; 

import Link from "next/link";
import { usePathname } from "next/navigation"; 
import React from "react";

const ShopMenu = () => {
  const pathname = usePathname(); // Get the current route

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
    <div className="relative group w-full cursor-pointer">
      {/* Main "Home" link */}
      <Link
        href="/"
        className={`hover:text-secandari relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-secandari after:bottom-0 after:left-0 hover:after:w-full after:transition-width after:duration-100 ${
          pathname === "/" ? "text-secandari" : ""
        }`}
      >
        ShopMenu
      </Link>

      {/* Dropdown menu */}
      <div className="absolute -left-10 hidden w-56 bg-white shadow-sm group-hover:block">
        <ul className="flex flex-col text-sm font-semibold font-Raleway px-7 pt-10 pb-5">
          {menuItems.map((item, index) => {
            const isActive = pathname === item.path;
            return (
              <li key={index} className="py-2">
                <Link
                  href={item.path}
                  className={`hover:text-secandari relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-secandari after:bottom-0 after:left-0 hover:after:w-full after:transition-width after:duration-200 ${
                    isActive ? "text-secandari" : ""
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ShopMenu;
