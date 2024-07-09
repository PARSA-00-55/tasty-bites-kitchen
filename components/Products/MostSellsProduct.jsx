import Image from "next/image";
import ProductCard from "../Sheared/ProductCard";

const MostSellsProduct = () => {
    return (
        <div className="container mx-auto p-4">
            <div className="flex h-48 flex-col items-center justify-center">
                <h4 className="mb-4 text-center font-serif text-3xl font-bold">Most Sells Products</h4>
                <Image src={"https://htmlbeans.com/html/botanical/images/hbdr.png"} height={70} width={300} alt="placeholder image" />
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                <ProductCard />

                <ProductCard />

            </div>
        </div>
    );
};

export default MostSellsProduct;
