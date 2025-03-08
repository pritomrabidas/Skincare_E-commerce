import Link from "next/link";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className=" text-black pt-10 pb-3">
      <div className="container mx-auto px-4 ">
        {/* Logo & Address */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <Link
              className="2xl:text-3xl xl:text-3xl lg:text-3xl md:text-3xl
            sm:text-2xl text-xl font-bold text-orange-700"
              href="/"
            >
              SkinCare
            </Link>
            <p className="text-sm text-primary font-Popins font-medium pt-3">
              01929712201
            </p>
            <p className="text-sm text-primary font-Popins font-medium pt-1">
              Gazipur ,Dhaka, Bangladesh
            </p>
          </div>
          {/* Useful Links */}
          <div>
            <h2 className="text-xl font-NunitoFont text-primary font-semibold mb-2">
              Useful Links
            </h2>
            <ul className="space-y-2 flex flex-col">
              <Link
                href="/about"
                className="hover:text-secandari duration-200  text-primary text-base font-normal font-Popins"
              >
                About
              </Link>
              <Link
                href="/blog"
                className="hover:text-secandari duration-200  text-primary text-base font-normal font-Popins"
              >
                News
              </Link>
              <Link
                href="/about2"
                className="hover:text-secandari duration-200  text-primary text-base font-normal font-Popins"
              >
                Partners
              </Link>
            </ul>
          </div>
          {/* Policies */}
          <div>
            <h2 className="text-xl font-NunitoFont text-primary font-semibold mb-2">
              Policies
            </h2>
            <ul className="space-y-2 flex flex-col">
              <Link
                href="/about"
                className="hover:text-secandari duration-200  text-primary text-base font-normal font-Popins"
              >
                Delivery and Payment
              </Link>
              <Link
                href="/about"
                className="hover:text-secandari duration-200  text-primary text-base font-normal font-Popins"
              >
                Terms of Sale
              </Link>
              <Link
                href="/contact"
                className="hover:text-secandari duration-200  text-primary text-base font-normal font-Popins"
              >
                Contacts
              </Link>
            </ul>
          </div>
          {/* Social Media */}
          <div>
            <h2 className="text-xl font-NunitoFont text-primary font-semibold mb-2">
              Follow Us
            </h2>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/"
                target="_blank"
                className="text-white bg-secandari p-3 rounded-full shadow cursor-pointer"
              >
                <FaFacebook size={18} />
              </Link>
              <Link
                href="https://twitter.com/"
                target="_blank"
                className="text-white  bg-secandari p-3 rounded-full shadow cursor-pointer"
              >
                <FaTwitter size={18} />
              </Link>
              <Link
                href="https://www.instagram.com/"
                target="_blank"
                className="text-white  bg-secandari p-3 rounded-full shadow cursor-pointer"
              >
                <FaInstagram size={18} />
              </Link>
              <Link
                href="https://www.youtube.com/"
                target="_blank"
                className="text-white  bg-secandari p-3 rounded-full shadow cursor-pointer"
              >
                <FaYoutube size={18} />
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center text-xs mt-6 border-t border-brand pt-4"></div>
        <p className="text-center text-primary font-normal font-Montserrat ">
          Copyright © 2024{" "}
          <Link
            href="https://pritomrabidas.vercel.app/"
            className="hover:underline"
          >
            pritom
          </Link>
          . All Rights Reserved.
        </p>
      </div>

      {/* Copyright */}
    </footer>
  );
};

export default Footer;
