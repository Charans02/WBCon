"use client";

import Image from "next/image";
import { Text } from "@/components/ui";

const Experts = () => {
  return (
    <div className="relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('/images/bg.png')] bg-cover bg-center blur-[2px]" />

      <div className="text-background relative z-10">
        <div className="bg-black/60">
          <section className="px-4 md:px-[80px] py-[60px]">
            {/* Top Section */}
            <div className="flex flex-col items-center justify-between gap-9 xl:flex-row">
              <div className="flex flex-col items-center gap-9 xl:flex-row">
                <Image src="/images/logo.png" alt="" width={134} height={122} />
                <Text
                  variant="h2"
                  className="max-w-[517px] text-center xl:text-left"
                >
                  How to Begin a
                  <span className="text-blue-600"> Home Project </span>
                  in 4 easy steps!
                </Text>
              </div>
              <p className="hidden max-w-[478px] text-center font-[family-name:var(--font-sora-sans)] text-[19px] leading-[30px] sm:block xl:text-left">
                What&apos;s stopping your dreams from becoming a reality.
              </p>
            </div>

            {/* Steps Section */}
            <div className="relative mt-20">
              {/* Desktop / Tablet Layout */}
              <div className="hidden md:block relative">
                {/* Horizontal line */}
                <div className="absolute left-0 right-0 top-4 h-[4px] bg-blue-600 z-0" />

                <div className="relative z-10 flex justify-between gap-4 flex-nowrap">
                  {[
                    "/images/step1.jpg",
                    "/images/step2.jpg",
                    "/images/step3.jpg",
                    "/images/step4.jpg",
                  ].map((src, idx) => (
                    <div
                      key={idx}
                      className="relative flex flex-col items-center w-[250px] sm:w-[250px] md:w-[250px] lg:w-[330px]"
                    >
                      {/* Dot */}
                      <div className="w-3 h-3 rounded-full bg-blue-600 mb-1 z-10" />
                      {/* Connecting line */}
                      <div className="h-6 w-[2px] bg-blue-600 mb-2" />
                      {/* Image */}
                      <div className="relative w-full aspect-square overflow-hidden rounded-xl border border-white/10 bg-black shadow-lg">
                        <Image
                          src={src}
                          alt={`Project ${idx + 1}`}
                          fill
                          className="object-cover object-center"
                          priority
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="block md:hidden relative flex justify-center">
                {/* Vertical line */}
                <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-[4px] bg-blue-600 z-0" />

                <div className="flex flex-col items-center gap-10 z-10">
                  {[
                    "/images/step1.jpg",
                    "/images/step2.jpg",
                    "/images/step3.jpg",
                    "/images/step4.jpg",
                  ].map((src, idx) => (
                    <div
                      key={idx}
                      className="relative flex flex-col items-center w-full px-4"
                    >
                      {/* Dot */}
                      <div className="w-3 h-3 rounded-full bg-blue-600 mb-2 z-10" />

                      {/* Image */}
                      <div className="relative w-full max-w-[260px] mx-auto overflow-hidden rounded-xl border border-white/10 bg-black shadow-lg">
                        <Image
                          src={src}
                          alt={`Project ${idx + 1}`}
                          width={800}
                          height={800}
                          className="object-cover object-center w-full h-auto"
                          priority
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Experts;
