import Link from 'next/link';
import React, { useState } from 'react'
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
const ShopCart = () => {
  const [page, setpage] = useState(true);

  const HandleMenupage = () => {
    setpage(false);
  };
  return (
    <div className="">
      <div className="flex items-center  gap-[124px] pb-3">
        <Link
          href="page"
          className={({ isActive }) =>
            `hover:text-secandari relative duration-300 text-xl font-medium font-Raleway ${
              isActive ? "text-secandari" : ""
            }`
          }
        >
          Shop
        </Link>
        {page ? (
          <div onClick={HandleMenupage}>
            <CiCirclePlus className="text-2xl text-secandari " />
          </div>
        ) : (
          <div onClick={() => setpage(true)}>
            <CiCircleMinus className="text-2xl text-secandari " />
          </div>
        )}
      </div>
      {page ? (
        ""
      ) : (
        <div className="">
          <ul className="flex flex-col text-base font-semibold font-Raleway  pb-5">
            <li className=" py-2">
              <Link
                href="/option1"
                className={({ isActive }) =>
                  `hover:text-secandari relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-secandari after:bottom-0 after:left-0 hover:after:w-full after:transition-width after:duration-200 ${
                    isActive ? "text-secandari" : ""
                  }`
                }
              >
                About Us
              </Link>
            </li>
            <li className="py-2">
              <Link
                href="/option1"
                className={({ isActive }) =>
                  `hover:text-secandari relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-secandari after:bottom-0 after:left-0 hover:after:w-full after:transition-width after:duration-200 ${
                    isActive ? "text-secandari" : ""
                  }`
                }
              >
                What We Offer
              </Link>
            </li>
            <li className=" py-2">
              <Link
                href="/option1"
                className={({ isActive }) =>
                  `hover:text-secandari relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-secandari after:bottom-0 after:left-0 hover:after:w-full after:transition-width after:duration-200 ${
                    isActive ? "text-secandari" : ""
                  }`
                }
              >
                Our Team
              </Link>
            </li>
            <li className=" py-2">
              <Link
                href="/option1"
                className={({ isActive }) =>
                  `hover:text-secandari relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-secandari after:bottom-0 after:left-0 hover:after:w-full after:transition-width after:duration-200 ${
                    isActive ? "text-secandari" : ""
                  }`
                }
              >
                Get In Touch
              </Link>
            </li>
            <li className=" py-2">
              <Link
                href="/option1"
                className={({ isActive }) =>
                  `hover:text-secandari relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-secandari after:bottom-0 after:left-0 hover:after:w-full after:transition-width after:duration-200 ${
                    isActive ? "text-secandari" : ""
                  }`
                }
              >
                FAQ Page
              </Link>
            </li>
            <li className=" py-2">
              <Link
                href="/option1"
                className={({ isActive }) =>
                  `hover:text-secandari relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-secandari after:bottom-0 after:left-0 hover:after:w-full after:transition-width after:duration-200 ${
                    isActive ? "text-secandari" : ""
                  }`
                }
              >
                Comming Soon
              </Link>
            </li>
            <li className=" py-2">
              <Link
                href="/option1"
                className={({ isActive }) =>
                  `hover:text-secandari relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-secandari after:bottom-0 after:left-0 hover:after:w-full after:transition-width after:duration-200 ${
                    isActive ? "text-secandari" : ""
                  }`
                }
              >
                Error Page
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default ShopCart
