"use client"
import Image from "next/image";
import Link from "next/link";

const Buttons = () => {
    return (
        <div className="flex translate-y-full  items-center space-x-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <Link
                href={`/productDetails/}`}
                className=" flex size-12 items-center justify-center  rounded-s-full bg-white shadow-lg transition"
                title="view product"
            >
                <Image src="/icons-svg/eye.svg" width={18} height={18} alt="magnifying" />
            </Link>
            <Link
                href={`/productDetails/}`}
                className="flex size-12 items-center justify-center  bg-white shadow-lg transition"
                title="view product"
            >
                <Image src="/icons-svg/wish.svg" width={18} height={18} alt="wish" />
            </Link>
            <Link
                href={`/productDetails/}`}
                className="flex size-12 items-center justify-center  rounded-e-full bg-white shadow-lg transition"
                title="view product"
            >
                <Image src="/icons-svg/cart.svg" width={18} height={18} alt="cart" />
            </Link>
        </div>
    );
};

export default Buttons;
