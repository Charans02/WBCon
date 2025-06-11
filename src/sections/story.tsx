"use client";
import Image from "next/image";
import { MessageCircle, Phone } from "lucide-react";
import { Text } from "@/components/ui";
import { JUNK_REMOVAL_IMAGES } from "@/lib/constants";

const Story = () => {
  return (
    <section
      id="story"
      className="flex flex-col items-center px-[80px] py-[60px]"
    >
      <Text variant="h2">
        <span className="text-blue-800">What</span> We Do!
      </Text>
      <Text className="mt-8 hidden max-w-[702px] text-center text-[#525252]">
        For 1+ years Good News Haulers has been dedicated to keeping Texas a
        cleaner place for both you and those around you
      </Text>
      <div className="mt-8 xl:mt-15 flex w-full max-w-[768px] flex-col items-center gap-8 md:gap-20 xl:max-w-full xl:flex-row xl:gap-30">
        <div className="relative mx-auto min-h-[393px] w-full xl:max-w-[550px] overflow-hidden rounded-2xl bg-white shadow">
          <Image
            src="/images/company_logo.jpg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
        <div className="flex w-full flex-col items-center gap-8">
          <p className="text-center font-[family-name:var(--font-sora-sans)] text-[28px] leading-[44px] font-normal uppercase lg:text-left">
            <span className="text-blue-700 font-extrabold">Got clutter? </span>
            We&apos;ve got you covered.
          </p>
          <p className="text-center font-[family-name:var(--font-lato-sans)] text-[18px] leading-[34px] font-normal lg:text-left">
            <span className="text-blue-600 font-bold text-[#d80027]">
              Keeping Your Home And Texas A Cleaner Place.
            </span>
            <br />
            <br />
            <span>
              Good News Haulers is your go-to team for junk removal in Arlington, Mansfield, Grand Prairie, and beyond.
            </span>
            <div className="mx-auto flex flex-row items-center justify-center gap-2 py-5">
              {JUNK_REMOVAL_IMAGES.map((item) => (
                <Image
                  key={item.id}
                  src={item.img_url}
                  alt={item.img_name}
                  width={120}
                  height={120}
                  className="w-[90px] h-[90px] sm:w-[120px] sm:h-[120px]"
                />
              ))}
            </div>
            <span>
              Whether it&apos;s a single item or a full property cleanout—we haul it all with care, speed, and a smile.
            </span>
          </p>
          <button 
            className="group bg-blue-500 hover:text-blue-500 flex h-[54px] w-full max-w-[348px] cursor-pointer items-center justify-center gap-2.5 rounded-full px-8 py-4 text-white transition-colors hover:bg-[#f3f3f3]"
            onClick={() => {
              const phone = "+18176812020";
              window.open(`tel:${phone}`, "_self");
            }}
          >
            <div className="relative">
              <MessageCircle size={24} />
              <Phone
                size={10}
                className="group-hover:fill-blue-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fill-white"
              />
            </div>
            <p className="font-[family-name:var(--font-sora-sans)] text-[16px] leading-[100%] font-semibold uppercase">
              Click to Call Us
            </p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Story;
