"use client";
import Cart from "@/assets/icons/Cart";
import profileIcon from "@/public/icons-svg/user.svg";
import { SearchIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const NavLink = ({ href, children }) => (
  <li className="relative">
    <a className="block p-2 cursor-pointer" href={href}>
      {children}
    </a>
  </li>
);

const ShopHeader = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="container py-10">
      <div className="flex justify-center items-center ">
        <div className="w-1/2 sm:w-1/6 sm:block hidden">
          <div className="logo ">
            <a href="/">
              <Image
                src={`https://htmlbeans.com/html/botanical/images/logo.png`}
                alt="Botanical"
                width={200}
                height={50}
                className="img-fluid"
              />
            </a>
          </div>
        </div>

        <div className="w-1/2 sm:w-7/12 lg:w-2/3 ">
          <div className="flex justify-center pt-10 lg:pt-5">
            <nav className="relative">
              <button
                type="button"
                className="relative sm:hidden block"
                onClick={toggleNav}
                aria-label="Toggle navigation"
              >
                <span className="block w-6 h-1 bg-gray-800 mb-1"></span>
                <span className="block w-6 h-1 bg-gray-800 mb-1"></span>
                <span className="block w-6 h-1 bg-gray-800"></span>
              </button>
              <div
                className={`absolute   top-full left-0 w-full  ${isNavOpen ? "block " : "hidden "} md:block`}
              >
                <ul className="flex flex-col justify-center items-center gap-5 font-bold md:flex-row mx-auto">
                  <NavLink href="/">Home</NavLink>
                  <NavLink href="/shop">Store</NavLink>
                  <NavLink href="/about-us">About</NavLink>
                  <NavLink href="/blogs">Blogs</NavLink>
                  <NavLink href="/contact-us">Contact</NavLink>
                </ul>
              </div>
            </nav>
          </div>
        </div>

        <div className="w-full sm:w-1/4 lg:w-1/6">
          <ul className="flex justify-end pt-10 space-x-4">
            <li>
              <button className="block w-6 h-6 ">
                <SearchIcon />
              </button>
            </li>
            <li className="relative">
              <button className="block w-6 h-6  relative">
                <span className="num rounded-full block bg-red-600 text-white text-center absolute top-0 right-0">
                  2
                </span>
                <Cart height="1.6rem" width="1.6rem" />
              </button>
            </li>
            <li>
              <button className="block w-6 h-6 ">
                <Image
                  src={profileIcon}
                  height={15}
                  width={15}
                  alt="profile Icon"
                />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default ShopHeader;
