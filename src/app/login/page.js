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
      <div className="flex py-4 bg-gray-300 h-screen pt-24">
        <div className=" w-1/2 justify-center mx-auto ">
          <div className=" ">
            <p className="title">Sign up</p>
            <div className="form">
              <div className="flex w-fit">
                <div className="">
                  <input
                    type="text"
                    className="input mr-4"
                    placeholder="Fast Name"
                  />
                  <p className=" font-extralight text-base text-red-800">
                    error
                  </p>
                </div>
                <div>
                  <input
                    type="text"
                    className="input"
                    placeholder="Last Name"
                  />
                  <p className=" font-extralight text-base text-red-800">
                    error
                  </p>
                </div>
              </div>
              <div>
                <input
                  type="email"
                  className="input w-[440px]"
                  placeholder="Email"
                />
                <p className=" font-extralight text-base text-red-800">error</p>
              </div>
              <div>
                <div className="flex items-center justify-end relative">
                  <div className="">
                    <input
                      type={showPass ? "text" : "Password"}
                      className="input w-[440px]"
                      placeholder="Password"
                    />
                  </div>
                  <div
                    onClick={() => setShowPass(!showPass)}
                    className="absolute mr-2 cursor-pointer"
                  >
                    {showPass ? <FaEye /> : <FaEyeSlash />}
                  </div>
                </div>
                <p className=" font-extralight text-base text-red-800">error</p>
              </div>
              <button className="form-btn">Sign up</button>
            </div>
            <p className="sign-up-label">
              do not have an account?
              <span>
                <Link href="/register">Sign In</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
