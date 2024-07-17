import ProductCard from "@/components/Sheared/ProductCard";
import Image from "next/image";
import AddToCartSection from "./AddToCartSection";
import DescriptionReviews from "./DescriptionReviews";
import Sizes from "./Sizes";
import SocialShare from "./SocialShare";

const ProductDetails = () => {
    return (
        <main>
            {/* twoColumns */}
            <div className="container pt-56 pb-80 py-40">
                <div className="flex mb-6 gap-10">
                    <div className="col-12 col-lg-6 order-lg-1">
                        {/* productSliderImage */}
                        <div className="mb-lg-0 mb-4 animate-pulse animate-once">

                            <Image
                                src="https://htmlbeans.com/html/botanical/images/img58.jpg"
                                alt="image description"
                                width={500}
                                height={450}
                                className=""
                            />

                        </div>
                    </div>
                    <div className="col-12 col-lg-6 order-lg-3">
                        {/* productTextHolder */}
                        <div className="overflow-hidden">
                            <h2 className="font-bold mb-2">Pellentesque aliquot</h2>
                            <ul className="list-none flex flex-nowrap mb-2">
                                <li className="mr-2">
                                    <Image src="/icons-svg/star.svg" alt="Botanical" width={20} height={10} className="mx-auto" />
                                </li>
                                <li className="mr-2">
                                    <Image src="/icons-svg/star.svg" alt="Botanical" width={20} height={10} className="mx-auto" />
                                </li>
                                <li className="mr-2">
                                    <Image src="/icons-svg/star.svg" alt="Botanical" width={20} height={10} className="mx-auto" />
                                </li>


                                <li>( 5 customer reviews )</li>
                            </ul>
                            <strong className="block mb-5 text-green-500">65.00 $</strong>
                            <p className="mb-5 ">Vestibules short description </p>
                            <ul className="list-none mb-5 overflow-hidden">
                                <li className="mb-2">Product Code: <span className="font-semibold">FA008</span></li>
                                <li className="mb-2">Quantity: <span className="font-semibold">68 Items</span></li>
                                <li className="mb-2">Shipping tax: <span className="font-semibold">Free</span></li>
                            </ul>

                            <Sizes />

                            <AddToCartSection />

                            <SocialShare />

                            <ul className="list-none">
                                <li className="mb-2 ">
                                    Categories:
                                    <a href="javascript:void(0);">Butter &amp; Eggs,</a>
                                    <a href="javascript:void(0);">Fruits,</a>
                                    <a href="javascript:void(0);">Milk &amp; Cream,</a>
                                    <a href="javascript:void(0);">Vegetables</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        {/* pageSlider */}

                        <div className="flex gap-3">
                            <div className="imgBlock">
                                <img
                                    src="http://placehold.it/170x190"
                                    alt="image description"
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <DescriptionReviews />
            {/* featureSec */}
            <section className="container overflow-hidden pt-12 pb-20 py-10">
                <div className="row">
                    {/* mainHeader */}
                    <header className="col-12 text-center mb-5">
                        <h1 className="heading-4 playfair font-bold mb-4">Related products</h1>
                    </header>
                </div>
                <div className="flex gap-5 justify-evenly items-center ">
                    {/* featureCol */}
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </section>
        </main>

    );
};

export default ProductDetails;