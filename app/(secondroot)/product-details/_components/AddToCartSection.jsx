'use client';
import { Button } from "@/components/ui/button";
import rightIcon from "@/public/icons-svg/arrow-right.svg";
import Image from "next/image";
import { useState } from "react";

const AddToCartSection = () => {
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => setQuantity(quantity + 1);
    const decreaseQuantity = () => setQuantity(Math.max(1, quantity - 1));

    return (
        <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center border border-[#84bb4f] rounded-full">
                <button
                    onClick={decreaseQuantity}
                    className="hover:bg-[#84bb4f] font-bold py-2 px-5 rounded-l-full border-r border-[#84bb4f]"
                >
                    -
                </button>
                <span className="text-lg font-semibold px-5">{quantity}</span>
                <button
                    onClick={increaseQuantity}
                    className="hover:bg-[#84bb4f] font-bold py-2 px-5 rounded-r-full border-l border-[#84bb4f]"
                >
                    +
                </button>
            </div>
            <Button >Add To Cart <Image src={rightIcon} width={15} height={10} alt="rightIcon" />  </Button>
        </div>
    );
};

export default AddToCartSection;
