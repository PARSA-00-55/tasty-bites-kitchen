/* eslint-disable tailwindcss/no-custom-classname */

import Image from "next/image";
import Buttons from "./Buttons";

const Card = ({ product }) => {
    return (
        <div className="group overflow-hidden rounded bg-white shadow transition-transform duration-300 hover:scale-105">
            <div className="relative h-56 w-full">
                <Image
                    src={`https://htmlbeans.com/html/botanical/images/img02.jpg`}
                    alt="product"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-transparent">
                    <Buttons />
                </div>
                <div className="absolute left-2 top-2 space-y-1">
                    <p className="tag-label">Popular</p>
                </div>
            </div>

            <div className="px-4 pb-3 pt-4">
                <p className="text-lg font-light text-primary">Product Name</p>
                <p className="text-xl font-semibold text-primary">Price</p>
            </div>
        </div>
    );
};

export default Card;
