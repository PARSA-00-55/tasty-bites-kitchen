"use client";
// import siteMetadata from "@/data/siteMetadata";
import headerNavLinks from "@/constant/headerNavLinks";
import Logo from "@/assets/tasty-bites-kitchen-logo.png";
import Link from "next/link";
import Image from "next/image";
// import Link from "@/components/others/Links";
import MobileNav from "@/components/others/MobileNav";
// import ThemeSwitch from "./ThemeSwitch";
// import SearchButton from "./SearchButton";

const Header = () => {
  return (
    <header className="flex items-center justify-between py-10">
      <div>
        <Link href="/">
          <div className="flex items-center justify-between">
            <div className="mr-3">
              {/* <Logo /> */}
              <Image src={Logo} alt="website logo" width={100} />
            </div>
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        {headerNavLinks
          .filter((link) => link.href !== "/")
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hidden font-medium text-gray-900 dark:text-gray-100 sm:block"
            >
              {link.title}
            </Link>
          ))}
        {/* <SearchButton /> */}
        {/* <ThemeSwitch /> */}
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
