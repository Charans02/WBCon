import Image from "next/image";
import { CalendarRange, Truck } from "lucide-react";
import { Text } from "@/components/ui";
// import { CUSTOMERS } from "@/lib/constants";
import { MessageCircle, Phone } from "lucide-react";

const Hero = () => {
  return (
    <div className="text-background bg-[url('/images/bg.png')] bg-cover bg-center pt-[58px] md:pt-[92px] xl:pt-[112px]">
      <div className="bg-black-gradient">
        <section className="flex flex-col-reverse gap-5 !pt-[20px] !pb-[190px] md:flex-row md:gap-[32.01px] md:!pt-[35px] md:!pb-[100px] xl:justify-between xl:gap-0 xl:!pb-[200px] 2xl:!pt-[60px] 2xl:gap-20">
          <div className="hidden md:block md:w-5/12 lg:w-5/12 xl:w-5/12 2xl:w-1/2 m-auto">
            <Image
              src="/images/truck_no_bg.png"
              alt="Trash Lion truck"
              width={803}
              height={987}
              quality={100}
              className="mx-auto w-full max-w-[280px] scale-x-[1] object-contain md:max-w-[340px] lg:max-w-[400px] xl:max-w-[500px]"
              priority
            />
          </div>

          <div className="flex h-fit w-full max-w-[710px] flex-col items-center gap-4 md:w-7/12 md:items-start lg:w-7/12 lg:items-start lg:gap-6 xl:w-7/12 xl:items-start 2xl:w-1/2">
            <Text
              variant="h1"
              className="text-center text-[38px] leading-[50px] sm:text-[28px] sm:leading-[43px] md:text-[34px] md:leading-[43px] lg:text-left xl:text-left xl:text-[55px] xl:leading-[78px]"
            >
              <span className="text-blue-600 font-extrabold">
                Arlington&apos;s Top-Rated Junk Removal Team
              </span>
              <br />
              Locally Owned and Faith-Driven.
            </Text>

            <Text className="text-center text-[16px] leading-[23px] md:text-left md:text-[18px] lg:text-left lg:text-[21px] lg:leading-[26px] xl:text-left">
              <span className="leading-[33px] font-bold">
                Serving Texas with Fast, Honest Service.
              </span>
            </Text>

            {/* Service Highlights Row */}
            <div
              className="scrollbar-hide flex w-full max-w-full items-center justify-center md:justify-start gap-1.5 overflow-x-auto py-2 whitespace-nowrap sm:gap-2.5 lg:gap-5 lg:py-3"
              style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
            >
              <div className="flex flex-shrink-0 items-center gap-1.5 sm:gap-3">
                <CalendarRange className="size-4 sm:size-5 lg:size-6 xl:size-7" />
                <Text className="text-[15px] leading-[16px] font-semibold sm:text-[16px] sm:leading-[18px] md:text-[17px] md:leading-[20px] lg:text-[18px] lg:leading-[20px] xl:text-[20px]">
                  Same-Day Pickup
                </Text>
              </div>
              <div className="bg-background h-5 w-px flex-shrink-0 sm:h-6 lg:h-10" />
              <div className="flex flex-shrink-0 items-center gap-1.5 sm:gap-3">
                <Truck className="size-4 sm:size-5 lg:size-6 xl:size-7" />
                <Text className="text-[15px] leading-[16px] font-semibold sm:text-[16px] sm:leading-[18px] md:text-[17px] md:leading-[20px] lg:text-[18px] lg:leading-[20px] xl:text-[20px]">
                  60+ 5 star reviews
                </Text>
              </div>
            </div>

            {/* Mobile truck image */}
            <div className="block md:hidden md:w-5/12 lg:w-5/12 xl:w-5/12">
              <Image
                src="/images/truck_no_bg.png"
                alt="Trash Lion truck"
                width={553}
                height={737}
                quality={100}
                className="mx-auto w-full max-w-[280px] scale-x-[-1] object-contain md:max-w-[340px] lg:max-w-[400px] xl:max-w-[500px]"
                priority
              />
            </div>

            {/* Grouped $50 off text + CTA button with more spacing */}
            <div className="flex w-full flex-col items-center md:items-start gap-12 md:gap-14 lg:gap-20 xl:gap-24">
              <Text className="text-center text-[18px] leading-[28px] text-blue-500 md:text-left md:text-[22px] lg:text-left lg:text-[26px] lg:leading-[30px] xl:text-left">
                <span className="leading-[33px] font-bold">
                  $50 Off For New Customers
                </span>
              </Text>

              {/* CTA Button */}
              <a
                href="tel:+18176812020"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-blue-500 hover:text-blue-500 flex h-[54px] w-full max-w-[348px] cursor-pointer items-center justify-center gap-2.5 rounded-full px-8 py-4 text-white transition-colors hover:bg-[#f3f3f3]"
              >
                <div className="relative">
                  <MessageCircle size={24} />
                  <Phone
                    size={10}
                    className="group-hover:fill-blue-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fill-white"
                  />
                </div>
                <p className="font-[family-name:var(--font-sora-sans)] text-[16px] leading-[100%] font-semibold uppercase">
                  Call for Free Quote
                </p>
              </a>
            </div>
          </div>
        </section>

        {/* Google Reviews Banner Section */}
        <div className="bg-[#f6f6f6] py-6 px-4 md:px-10 lg:px-20">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-3 text-center md:flex-row md:gap-6 md:text-left">
            <Image
              src="/images/google-review.png"
              alt="Google Review Badge"
              width={60}
              height={60}
              className="object-contain"
            />
            <div>
              <p className="text-xl font-semibold text-gray-800">
                Google Rating <span className="text-yellow-500">5.0</span>
                <span className="ml-2 text-yellow-400">★ ★ ★ ★ ★</span>
              </p>
              <p className="text-sm font-medium text-gray-600">
                Over <span className="font-bold text-black">60 Reviews</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
