"use client";
// import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "@/public/tasty-bites-kitchen-logo.png";
import Cart from "./Cart";
import Search from "./Search";
import { PizzaIcon } from "@/assets/Icons/PizzaIcon";

const Header = () => {
  const isActive = usePathname();
  // const isActive = (href) => {
  //   return router.pathname === href;
  // };

  const headerArr = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Restaurant", link: "/restaurant" },
    { title: "Blog", link: "/blog" },
    { title: "Contact", link: "/contact-us" },
  ];

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center mb-4 md:mb-0">
          <Image src={logo} width={200} alt="logo" />
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          {headerArr.map((link, i) => (
            <Link
              key={i}
              href={link.link}
              className={`mr-5 hover:text-amber-600 relative ${isActive === `${link.link}` ? "root-primary font-medium" : "root-primary-grey font-medium"}`}
            >
              <span className="fixed top-[22px] ">
                {isActive === `${link.link}` ? (
                  <PizzaIcon width="22px" height="22px" />
                ) : (
                  ""
                )}
              </span>
              {link.title}
            </Link>
          ))}
        </nav>
        <div className="flex divide-x-[2px] divide-amber-500">
          <p className="p-2">
            <span className="m-0 w-full block text-xs text-right">
              Call For Order
            </span>
            <span className="font-extrabold text-xl root-primary">
              1-123-000-000
            </span>
          </p>
          <div className="p-2 flex gap-2 ">
            {/* <Search /> */}
            <Cart />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
