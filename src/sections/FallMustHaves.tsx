"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useState } from "react";
import Image from "next/image";
import React from "react";

const images = [
  "/images/fall1.jpg",
  "/images/fall2.jpg",
  "/images/fall3.jpg",
];

const FallMustHaves = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative max-h-[700px] overflow-hidden bg-white text-gray-900 py-10">
      <div className="relative z-10 text-center mb-6">
        <h2 className="text-3xl font-bold">🍂 Fall Must Haves</h2>
        <p className="mt-2 text-sm text-gray-600">
          Discover essentials for the cozy season
        </p>
      </div>

      <div className="flex justify-center mb-4">
        <div className="flex space-x-4">
          <button
            onClick={scrollPrev}
            aria-label="Previous"
            className="bg-blue-200 hover:bg-blue-300 flex h-9 w-9 items-center justify-center rounded-full transition-colors"
          >
            <ChevronLeft size={20} className="text-blue-800" />
          </button>
          <button
            onClick={scrollNext}
            aria-label="Next"
            className="bg-blue-200 hover:bg-blue-300 flex h-9 w-9 items-center justify-center rounded-full transition-colors"
          >
            <ChevronRight size={20} className="text-blue-800" />
          </button>
        </div>
      </div>

      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="embla__slide relative flex-[0_0_80%] md:flex-[0_0_50%] lg:flex-[0_0_40%] px-2"
            >
              <div
                className={`overflow-hidden rounded-xl border border-gray-200 transform transition-all duration-500 ${
                  selectedIndex === idx ? "scale-100" : "scale-95 opacity-80"
                }`}
              >
                <Image
                  src={src}
                  alt={`Fall must have ${idx + 1}`}
                  width={800}
                  height={500}
                  className="object-contain w-full h-auto max-h-[400px] bg-white"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (emblaApi) emblaApi.scrollTo(index);
            }}
            className={`h-2 w-2 rounded-full transition-all ${
              index === selectedIndex ? "bg-blue-500" : "bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FallMustHaves;
