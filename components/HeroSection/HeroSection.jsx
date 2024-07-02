"use client";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import React, { useRef, useState } from "react";

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
import useEmblaCarousel from "embla-carousel-react";

const HeroSection = () => {
  const [count, setCount] = useState(1);
  const [emblaRef, emblaApi] = useEmblaCarousel(carouselData, [Fade()]);
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

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
                <div className="px-3 overflow-hidden flex items-end">
                  <div className="relative h-[700px] w-1/2">
                    <Image
                      src={data.image}
                      alt="image description"
                      fill
                      priority
                      className="img-fluid"
                      style={{
                        objectFit: "contain",
                      }}
                    />
                  </div>
                  <div className="h-[700px] w-1/2 flex flex-col justify-around">
                    <strong className="w-3/4 text-xl uppercase hero-welcome-text">
                      <span className="bordered">welcome</span> to botanical
                      store the perfect choice
                    </strong>
                    <div className="h-[300px]">
                      <span className="text-slate-700 text-xl font-bold">
                        {data.title}
                      </span>
                      <h1 className="my-10 text-6xl font-medium lin">
                        {data.heading}
                      </h1>
                      <p className=" mb-10 text-gray-600">{data.description}</p>
                      <Link
                        href="/shop"
                        className=" py-4 px-8 bg-green-600 text-white rounded-full hover:bg-green-500"
                      >
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex items-center justify-center mt-6 space-x-4">
          <div
            role="button"
            className="flex-shrink-0 h-[0px]"
            onClick={() => setCount(count - 1)}
          >
            <CarouselPrevious />
          </div>
          <div>
            <p className="text-lg font-bold text-gray-700">
              {count} / {carouselData.length}
            </p>
          </div>
          <div
            role="button"
            className="flex-shrink-0 h-[0px]"
            onClick={() => setCount(count + 1)}
          >
            <CarouselNext />
          </div>
        </div>
      </Carousel>
    </>
  );
};

export default HeroSection;
