"use client";
import Cart from "@/assets/icons/Cart";
import HeartFilled from "@/assets/icons/HeartFilled";
import MenuRound from "@/assets/icons/MenuRound";
// import logo from "@/assets/images/logo.png";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const HeaderArr = [
    {
        title: "Home",
        link: "/",
    },
    {
        title: "Shop",
        link: "/shop",
    },
    {
        title: "Faculty",
        link: "/faculty",
    },
    {
        title: "Blogs",
        link: "/blogs",
    },
    {
        title: "About us",
        link: "/about-us",
    },
    {
        title: "Contact us",
        link: "/contact-us",
    },
];



const HomeHeader = () => {
    useEffect(() => {
        const onMenuToggle = (e) => {
            const navLinks = document.querySelector(".navLinks");
            const icon = e.target;
            if (navLinks && icon) {
                navLinks.classList.toggle("left-0");
                icon.innerHTML = icon.innerHTML === "&#9776;" ? "&times;" : "&#9776;";
            }
        };

        const menuIcon = document.querySelector("span[name='menu']");
        if (menuIcon) {
            menuIcon.addEventListener("click", onMenuToggle);
        }

        return () => {
            if (menuIcon) {
                menuIcon.removeEventListener("click", onMenuToggle);
            }
        };
    }, []);

    return (
        <header className="container relative  px-3 py-5">
            <nav className="flex justify-between">
                <div className="w-[130px] md:w-[200px] flex items-center">
                    {/* <Image src={logo} alt="LOGO" width={200} height={50} /> */}
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <MenuRound height="2rem" width="2rem" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>Menu</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            {HeaderArr.map((menu, i) => (
                                <DropdownMenuItem key={i}>
                                    <Link href={menu.link}>{menu.title}</Link>
                                </DropdownMenuItem>
                            ))}
                            <DropdownMenuSeparator />
                            <DropdownMenuLabel>Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Log in</DropdownMenuItem>
                            <DropdownMenuItem>Sign up</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                <div className="flex items-center gap-3">
                    <div className="navLinks duration-500 absolute md:static md:w-auto w-full md:h-auto h-[85vh] bg-white flex md:items-center gap-[1.5vw] top-[100%] left-[-100%] px-5 md:py-0 py-5">
                        <ul className="flex md:flex-row flex-col md:items-center md:gap-[2vw] gap-8">

                            <li className="relative max-w-fit pr-3 mt-[-18px] md:pr-0 py-1 after:bg-gradient-to-r after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                                <a href="/">
                                    <Image src={`https://htmlbeans.com/html/botanical/images/logo.png`} alt="LOGO" width={200} height={50} />
                                </a>
                            </li>

                        </ul>
                    </div>

                </div>

                <div className="w-[130px] md:w-[200px] flex items-center justify-end">
                    <button>
                        <HeartFilled height="1.6rem" width="1.6rem" />
                    </button>
                    &nbsp;&nbsp;
                    <button>
                        <Cart height="1.6rem" width="1.6rem" />
                    </button>
                    <span name="menu" className="text-[30px] cursor-pointer md:hidden">
                        &#9776;
                    </span>
                </div>
            </nav>
        </header>
    );
};

export default HomeHeader;
