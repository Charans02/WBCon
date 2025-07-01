"use client";
import { Text } from "@/components/ui";
import Image from "next/image";
import { useState, useEffect } from "react";
import { CUSTOMERS } from "@/lib/constants";

const Comparison = () => {
  const [lineWidth, setLineWidth] = useState("4px");
  lineWidth;

  // This is still here in case you later want to adjust something responsively
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setLineWidth("12px");
      } else {
        setLineWidth("4px");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-[url('/images/bg.png')] bg-cover bg-center blur-[2px]"></div>
      <div className="relative z-10">
        <div className="bg-black/60">
          <section>
            <div className="flex flex-col items-center justify-center px-[20px] md:px-[35px] lg:flex-row lg:px-[60px]">
              <div className="flex flex-col">
                <Text variant="h2" className="text-center text-white">
                  Check out these industry facts{" "}
                  {/* <span className="font-extrabold underline">Junk Removal</span>! */}
                </Text>
                <p className="mt-4 hidden text-center font-[family-name:var(--font-sora-sans)] text-[25px] leading-[30px] font-semibold text-white/70 sm:block">
                  <span className="font-extrabold">
                    that might just
                  </span>
                  {" "}
                  change the way you think about your next upgrade!
                </p>
                <div className="mt-6 flex w-full justify-center">
                  <div className="customers-container flex items-center gap-3 rounded-full border-none bg-white/10 px-4 py-2 sm:w-fit">
                    <div className="flex items-center gap-0 sm:gap-3 md:gap-1 lg:gap-3">
                      {CUSTOMERS.map((customer, index) => (
                        <Image
                          key={customer.id}
                          src={customer.avatar_url}
                          alt={customer.name}
                          width={40}
                          height={40}
                          className={`relative ${
                            index > 0 ? "ml-[-20px] sm:ml-0" : ""
                          } rounded-full border-2 border-white`}
                        />
                      ))}
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      <Text className="text-[18px] leading-[14px] font-semibold md:text-[22px] md:leading-[26px] lg:text-[22px] lg:leading-[26px] xl:text-[28px] xl:leading-[32px] text-white">
                        60+
                      </Text>
                      <Text className="text-[13px] leading-[11px] font-extrabold md:text-[15px] md:leading-[20px] lg:text-[15px] lg:leading-[20px] xl:text-[15px] xl:leading-[20px] text-white/80">
                        Happy Customers
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Instead of the slider, show a single picture */}
            <div className="mt-8 md:mt-12">
              <div className="mx-auto flex max-w-4xl flex-col gap-6 px-4 md:flex-row">
                <div className="w-full md:w-1/2">
                  <Image
                    src="/images/picture2.jpg"
                    alt="Project Example 1"
                    width={600}
                    height={400}
                    className="w-full rounded-2xl object-cover"
                    priority
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <Image
                    src="/images/picture3.jpg"
                    alt="Project Example 2"
                    width={600}
                    height={400}
                    className="w-full rounded-2xl object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Comparison;
