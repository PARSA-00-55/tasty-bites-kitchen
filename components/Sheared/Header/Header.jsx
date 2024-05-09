import logo from "@/public/tasty-bites-kitchen-logo.png";

import Image from "next/image";
import Cart from "./Cart";
import Search from "./Search";

const Header = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Image src={logo} width={200} alt="logo" />
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900">Home</a>
          <a className="mr-5 hover:text-gray-900">About</a>
          <a className="mr-5 hover:text-gray-900">Restaurants</a>
          <a className="mr-5 hover:text-gray-900">Blog</a>
          <a className="mr-5 hover:text-gray-900">Contact</a>
        </nav>
        <div className="flex divide-x-[2px] divide-orange-500">
          <p className="p-2">
            <span>Call For Order</span>
            <br />
            <span className="">1-123-000-000</span>
          </p>
          <div className="flex gap-2 p-2">
            <Search />
            <Cart />
          </div>


        </div>
      </div>
    </header>
  );
};

export default Header;
