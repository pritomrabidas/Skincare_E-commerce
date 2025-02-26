import Link from "next/link";
import React, { useState } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
const BlogCart = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const menuItems = [
    { label: "Blog-Standard", path: "/blog-standard" },
    { label: "Blog-Gridview", path: "/blog-gridview" },
    { label: "Blog-Listview", path: "/blog-listview" },
    { label: "SinglePost", path: "/singlePostl" },
  ];
 
  return (
    <div>
      <div className="flex items-center gap-[133px] pb-3">
        <Link
          href="/blog"
          className="hover:text-secandari text-xl font-medium font-Raleway"
        >
          Blog
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

export default BlogCart;
