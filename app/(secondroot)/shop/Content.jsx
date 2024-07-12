'use client'
import ProductCard from "@/components/Sheared/ProductCard";
import listIcon from "@/public/icons-svg/list-icon.svg";
import thLarge from "@/public/icons-svg/th-large.svg";
import Image from "next/image";
import { useState } from 'react';

const Content = () => {
    const [showSorting, setShowSorting] = useState(false);
    return (
        <div className="w-full   ">
            <article id="content">
                {/* show-head */}
                <header className="flex flex-wrap justify-between mb-7">
                    <ul className="flex items-center space-x-2">
                        <li>
                            <a href="#" className="active">
                                <Image src={thLarge} width={20} hight={10} alt="Grid view" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <Image src={listIcon} width={20} hight={10} alt="Grid view" />
                            </a>
                        </li>
                        <li>Showing 1–9 of 24 results</li>
                    </ul>
                    {/* sortGroup */}
                    <div className="flex flex-wrap items-center">
                        <strong className="mr-2 text-gray-500">Sort by:</strong>
                        <div className="relative">
                            <button onClick={() => setShowSorting(!showSorting)} className="border p-1 border-gray-400" type="button" id="sortGroup">
                                Default sorting
                            </button>
                            {
                                showSorting && <ul className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 z-10">
                                    <li>
                                        <a href="#" className="block px-4 py-2">
                                            Default Order
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2">
                                            Default Order
                                        </a>
                                    </li>

                                </ul>
                            }
                        </div>
                    </div>
                </header>
                <div className="flex flex-wrap mx-4 gap-8">
                    {/* Product card  */}

                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />



                    <div className="w-full pt-3">
                        {/* pagination */}
                        <ul className="flex items-end justify-center space-x-2">
                            <li>
                                <a href="#">
                                    <i className="fas fa-chevron-left"></i>
                                </a>
                            </li>
                            <li className="border border-black p-1">
                                <a href="#">1</a>
                            </li>
                            <li className="border border-black p-1 "
                            >
                                <a href="#">2</a>
                            </li>
                            <li>...</li>
                            <li>
                                <a href="#">
                                    <i className="fas fa-chevron-right"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default Content;