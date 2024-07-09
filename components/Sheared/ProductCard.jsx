import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
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

export default ProductCard;


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