"use client";

import {
  ReactCompareSlider,
  ReactCompareSliderImage,
  ReactCompareSliderHandle,
} from "react-compare-slider";
import { Text } from "@/components/ui";

const comparisonImages = [
  {
    title: "Bath Room Transformation",
    before: "/images/living-before.jpg",
    after: "/images/living-after.jpg",
  },
  {
    title: "Shower Makeover",
    before: "/images/backyard-before.jpg",
    after: "/images/backyard-after.jpg",
  },
];

const ConvertShowcase = () => {
  return (
    <section className="relative py-12 px-4 sm:px-8 md:px-12 text-white">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="h-full w-full bg-[url('/images/bg.png')] bg-cover bg-center" />
      </div>

      <div className="mb-10 text-center">
        <Text variant="h2" className="text-white">
          How We <span className="text-blue-500">Transform Your Home</span>
        </Text>
        <p className="mt-2 text-lg text-white/80">
          Drag each slider to reveal the difference.
        </p>
      </div>

      {/* Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {comparisonImages.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col rounded-xl overflow-hidden shadow-lg bg-blue-400/60 backdrop-blur-sm"
          >
            <div className="mb-2 py-3 text-center text-lg sm:text-xl font-semibold text-white">
              {item.title}
            </div>
            <div className="relative w-full aspect-[3/4]">
              <ReactCompareSlider
                handle={
                  <ReactCompareSliderHandle
                    buttonStyle={{
                      backgroundColor: "#3b82f6",
                      border: "2px solid white",
                    }}
                    linesStyle={{
                      backgroundColor: "#3b82f6",
                      width: "4px",
                    }}
                  />
                }
                itemOne={
                  <ReactCompareSliderImage
                    src={item.before}
                    alt="Before"
                  />
                }
                itemTwo={
                  <ReactCompareSliderImage
                    src={item.after}
                    alt="After"
                  />
                }
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ConvertShowcase;
