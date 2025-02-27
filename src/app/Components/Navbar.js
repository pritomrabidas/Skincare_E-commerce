"use client";
import { FiAlignRight } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { LiaSearchSolid } from "react-icons/lia";
import { IoCartSharp } from "react-icons/io5";
import { useState } from "react";
import Link from "next/link";
import ShopCart from "./Navbar/CartNav/ShopCart";
import BlogMenu from "./Navbar/HomeNav/BlogMenu";
import PageMenu from "./Navbar/HomeNav/PageMenu";
import ShopMenu from "./Navbar/HomeNav/ShopMenu";
import { usePathname } from "next/navigation";
import PageCart from "./Navbar/CartNav/PageCart";
import BlogCart from "./Navbar/CartNav/BlogCart";
import ShoppingCart from "./Navbar/ShoppingCart";

const Navbar = () => {
  const [cross, setCross] = useState(true);
  const [shop, setShop] = useState(true);
  const pathname = usePathname();
  const HandleClick = () => {
    setCross(false);
  };

  return (
    <nav className="bg-[#fff] text-[#212121] py-3 shadow fixed w-full z-30">
      <div className="container mx-auto font-Popins ">
        <div className=" px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link
                href="/"
                className="2xl:text-3xl xl:text-3xl lg:text-3xl md:text-3xl sm:text-2xl text-xl font-bold text-secandari cursor-pointer"
              >
                SkinCare
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="2xl:block xl:block lg:block md:hidden sm:hidden hidden">
              <div className="2xl:gap-12 xl:gap-10 lg:gap-8 text-primary flex font-semibold text-base ">
                <ShopMenu />
                <PageMenu />
                <BlogMenu />
                <Link
                  href="/contact"
                  className={`hover:text-secandari relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-secandari after:bottom-0 after:left-0 hover:after:w-full after:transition-width after:duration-100 ${
                    pathname === "/contact" ? "text-secandari" : ""
                  }`}
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="">
              <ul className="flex gap-5 text-2xl">
                <li>
                  <LiaSearchSolid className="hover:text-secandari" />
                </li>
                {shop ? (
                  <li
                    onClick={() => setShop(false)}
                    className="hover:text-secandari relative flex items-center"
                  >
                    <IoCartSharp />
                    <span className="text-[8px] absolute -top-1 -right-2 flex items-center justify-center rounded-full bg-secandari text-white w-4 h-4">
                      2
                    </span>
                  </li>
                ) : (
                  <ShoppingCart setShop={setShop} />
                )}
                <li className="duration-500 lg:hidden">
                  {cross ? (
                    <FiAlignRight
                      onClick={HandleClick}
                      className="hover:text-secandari transition-all duration-500 cursor-pointer"
                    />
                  ) : (
                    <div className="absolute w-full top-0 left-0 bg-[rgba(0,0,0,0.1)] flex transition-all duration-500 h-screen">
                      <div
                        onClick={() => setCross(true)}
                        className="md:w-[50%] sm:w-[40%] w-[5%]"
                      ></div>
                      <div className="fixed right-0  bg-white md:w-[50%] sm:w-[60%] w-[85%] h-full items-center top-0  shadow-md rounded-l-2xl px-1 sm:px-4 md:px-8 py-4 z-50">
                        <p
                          onClick={() => setCross(true)}
                          className=" absolute -left-5 border-[4px] text-white bg-secandari duration-100 p-2 w-fit rounded-full drop-shadow-sm cursor-pointer"
                        >
                          <RxCross2 className=" text-xl  animate-slide" />
                        </p>
                        <div className="flex px-5 pt-16">
                          <Link
                            href="/"
                            className="text-3xl font-bold text-orange-600 cursor-pointer"
                          >
                            TravelAgency
                          </Link>
                        </div>
                        <div className="py-0 overflow-y-auto h-4/6 m-7 SideNavScroll text-primary">
                          <ShopCart />
                          <PageCart />
                          <BlogCart />
                          <Link
                            href="/contact"
                            className="hover:text-secandari text-xl font-medium font-Raleway"
                          >
                            Contact
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
