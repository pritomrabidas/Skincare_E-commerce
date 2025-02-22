import Link from "next/link";
import React from "react";

const NotfoundPage = () => {
  return (
    <div className="py-16 flex flex-col justify-center items-center bg-gray-50 p-6">
      <div className="max-w-lg text-center">
        <div className="mb-6">
          <img
            src="https://demo2.wpopal.com/smartic/wp-content/themes/smartic/assets/images/404/404.png"
            alt="404 Page"
            className="mx-auto"
          />
        </div>
        <h1 className="text-4xl font-semibold text-primary font-Popins mb-4">
          Oops! That link is broken.
        </h1>
        <p className="text-gray-600 text-sm font-NunitoFont font-normal mb-6">
          Page does not exist or some other error occurred. Go to our
          <Link
            href="/"
            className="inline-block px-2 text-secandari hover:underline "
          >
            Home Page
          </Link>
        </p>
        <div className="mt-6">
          <form
            role="search"
            method="get"
            className="flex justify-center items-center gap-2"
            action="/search"
          >
            <input
              type="search"
              className="border border-gray-300 py-2 px-3 rounded-md w-64 focus:outline-none "
              placeholder="Search …"
              name="s"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-secandari text-white rounded-md hover:bg-[#248424] duration-100 text-sm font-NunitoFont font-normal"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NotfoundPage;
