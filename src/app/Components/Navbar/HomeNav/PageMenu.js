"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const PageMenu = () => {
  const pathname = usePathname();

  const menuItems = [
    { label: "About 1", path:"/about1"},
    { label: "About 2", path: "/about2" },
    { label: "About 3", path: "/about3" },
    { label: "About 4", path: "/about4" },
    { label: "About 5", path: "/about5" },
    { label: "FAQ", path: "/faq" },
    { label: "404", path: "/404" },
    { label: "Icons", path: "/icons" },
  ];

  return (
    <div className="relative group w-full cursor-pointer">
      {/* Main "Home" link */}
      <li
        className="hover:text-secandari relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-secandari after:bottom-0 after:left-0 hover:after:w-full after:transition-width after:duration-100 list-none"
      >
        Pages
      </li>

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

export default PageMenu;
