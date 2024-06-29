"use client";
import Autoplay from "embla-carousel-autoplay";
import * as React from "react";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import carouselData from "@/Data/heroSectio.json";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    );

    return (
        <>
            <Carousel
                plugins={[plugin.current]}
                className="container mx-auto"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
            >
                <CarouselContent>
                    {carouselData.map((data, index) => (
                        <CarouselItem key={index}>
                            <section className="container mx-auto w-full pt-24 pb-12 px-17 lg:pt-16 lg:pb-12 md:pt-16 md:pb-0">
                                <div className="flex flex-wrap px-3 overflow-hidden">
                                    <div className="relative w-1/2">
                                        <Image
                                            src={data.image}
                                            alt="image description"
                                            width={710}
                                            height={795}
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="w-1/2 lg:pt-17 px-6">
                                        <strong className="block text-uppercase font-bold relative pt-0 lg:pt-0 mb-22 lg:mb-12 md:mb-6 mb-3">
                                            welcome to botanical store
                                            <span className="block">the perfect choice</span>
                                        </strong>
                                        <div className="relative pt-19 pb-35 lg:pt-15 lg:pb-25 py-0 bg-[#F6F6F6] w-full">
                                            <span className="block mb-4 lg:mb-4">
                                                {data.title}
                                            </span>
                                            <h1 className="font-bold mb-6 lg:mb-6 md:mb-4 text-6xl">
                                                {data.heading}
                                            </h1>
                                            <p className="mb-16 lg:mb-10 md:mb-10">
                                                {data.description}
                                            </p>
                                            <Link
                                                href="/shop"
                                                className="font-bold rounded-md py-3 px-4 mb-6 bg-green-500 text-white"
                                            >
                                                Shop Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center mt-6 space-x-4">
                                    <div className="flex-shrink-0">
                                        <CarouselPrevious />
                                    </div>
                                    <div>
                                        <p className="text-lg font-bold text-gray-700">{index + 1} / {carouselData.length}</p>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <CarouselNext />
                                    </div>
                                </div>
                            </section>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </>
    );
};

export default HeroSection;
