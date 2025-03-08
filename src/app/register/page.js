"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa6";
const Page = () => {
  const [showPass, setShowPass] = useState("");
  return (
    <div className="pt-20">
      <div className="flex py-4 bg-gray-50 h-screen pt-24">
        <div className="w-[500px] bg-[#f0efef37] shadow-md h-fit p-8 rounded-xl justify-center mx-auto ">
          <div className=" ">
            <p className="text-2xl text-primary font-medium font-NunitoFont">
              Register
            </p>
            <div className="pt-4">
              <div className="">
                <input
                  type="text"
                  className="outline-none px-3 py-2 rounded-md text-sm text-primary font-normal font-Opensans w-full"
                  placeholder="Full Name"
                />
                <p className=" font-NunitoFont font-normal text-sm text-red-700 py-0.5">
                  error
                </p>
              </div>
              <div>
                <input
                  type="email"
                  className="outline-none px-3 py-2 rounded-md text-sm text-primary font-normal font-Opensans w-full"
                  placeholder="Email"
                />
                <p className="font-NunitoFont font-normal text-sm text-red-700 py-0.5">
                  error
                </p>
              </div>
              <div>
                <div className="flex items-center justify-end relative">
                  <input
                    type={showPass ? "text" : "Password"}
                    className="outline-none px-3 py-2 rounded-md text-sm text-primary font-normal font-Opensans w-full"
                    placeholder="Password"
                  />
                  <div
                    onClick={() => setShowPass(!showPass)}
                    className="absolute mr-2 cursor-pointer"
                  >
                    {showPass ? <FaEye /> : <FaEyeSlash />}
                  </div>
                </div>
                <p className="font-NunitoFont font-normal text-sm text-red-700 py-0.5">
                  error
                </p>
              </div>
            </div>
            <p className="pt-2 font-medium font-NunitoFont text-base text-primary">
              do not have an account?
              <span>
                <Link href="/login" className="cursor-pointer hover:underline">
                  LogIn
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
