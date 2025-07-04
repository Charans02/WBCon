// hero.tsx
import Image from "next/image";
import { CalendarRange, Truck, MessageCircle, Phone } from "lucide-react";
import { Text } from "@/components/ui";
import { CUSTOMERS } from "@/lib/constants";
import { useRef, useEffect } from "react";
import { SERVICE_AREAS } from "@/lib/constants";
import { MapPinCheckInside } from "lucide-react";

const Hero = ({ setHeroInView }: { setHeroInView?: (inView: boolean) => void }) => {
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!heroRef.current || !setHeroInView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeroInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, [setHeroInView]);

  return (
    <div
      ref={heroRef}
      className="text-background bg-[url('/images/bg.png')] bg-cover bg-center pt-[58px] md:pt-[92px] xl:pt-[112px]"
    >
      <div className="bg-black-gradient">
        <section className="flex flex-col-reverse gap-5 !pt-[20px] !pb-[40px] md:flex-row md:gap-[32.01px] md:!pt-[35px] md:!pb-[60px] xl:justify-between xl:gap-0 xl:!pb-[80px] 2xl:!pt-[60px] 2xl:gap-20">
          
          {/* LEFT: Single Picture */}
          <div className="w-full md:w-5/12 flex justify-center items-center">
            <Image
              src="/images/picture.jpg" // <-- Replace with your image path
              alt="Your New Picture"
              width={800}
              height={800}
              quality={100}
              className="w-full max-w-[600px] object-contain rounded-2xl"
              priority
            />
          </div>

          {/* RIGHT: Text Content */}
          <div className="flex h-fit w-full max-w-[710px] flex-col items-center gap-4 md:w-7/12 md:items-start lg:w-7/12 xl:w-7/12 2xl:w-1/2">
            <Text
              variant="h1"
              className="text-center text-[38px] leading-[50px] sm:text-[28px] sm:leading-[43px] md:text-[34px] md:leading-[43px] lg:text-left xl:text-left xl:text-[55px] xl:leading-[78px]"
            >
              <span className="text-blue-600 font-extrabold">
                Salt Lake City&apos;s Top-Rated Construction Team
              </span>
              <br />
              Locally Owned and Faith-Driven.
            </Text>

            <Text className="text-center text-[16px] leading-[23px] md:text-left lg:text-[21px] lg:leading-[26px] xl:text-left">
              <span className="leading-[33px] font-bold">
                Serving Salt Lake City With Reliability.
              </span>
            </Text>

            <div className="bg-[#f6f6f6] py-4 px-4 w-full rounded-xl md:px-6 md:max-w-[450px] mt-2">
              <div className="mx-auto flex flex-col items-center justify-center gap-2 text-center md:flex-row md:gap-4 md:text-left">
                <Image
                  src="/images/google-review.png"
                  alt="Google Review Badge"
                  width={60}
                  height={60}
                  className="object-contain"
                />
                <div>
                  <p className="text-lg font-semibold text-gray-800">
                    Google Rating <span className="text-yellow-500">5.0</span>
                    <span className="ml-2 text-yellow-400">★ ★ ★ ★ ★</span>
                  </p>
                  <p className="text-sm font-medium text-gray-600">
                    Over <span className="font-bold text-black">60 Reviews</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden md:flex mt-4 items-center justify-start gap-1.5 py-2 whitespace-nowrap">
              <div className="flex items-center gap-1.5">
                <CalendarRange className="size-4 sm:size-5 lg:size-6" />
                <Text className="text-[15px] font-semibold lg:text-[18px]">
                  24hr Remodel Service
                </Text>
              </div>
              <div className="bg-background h-5 w-px" />
              <div className="flex items-center gap-1.5">
                <Truck className="size-4 sm:size-5 lg:size-6" />
                <Text className="text-[15px] font-semibold lg:text-[18px]">
                  60+ 5 star reviews
                </Text>
              </div>
            </div>

            {/* Happy Customers */}
            <div className="customers-container flex w-full items-center justify-center md:justify-between gap-3 rounded-full border-none py-2 px-2 sm:w-fit sm:justify-around">
              <div className="flex items-center gap-0 sm:gap-3 md:gap-1 lg:gap-3">
                {CUSTOMERS.map((customer, index) => (
                  <Image
                    key={customer.id}
                    src={customer.avatar_url}
                    alt={customer.name}
                    width={40}
                    height={40}
                    className={`relative ${index > 0 ? "ml-[-20px] sm:ml-0" : ""} rounded-full border-2 border-white`}
                  />
                ))}
              </div>
              <div className="flex items-center justify-between gap-2">
                <Text className="text-[18px] font-semibold md:text-[22px] xl:text-[28px]">
                  60+
                </Text>
                <Text className="text-[13px] font-extrabold md:text-[15px]">
                  Happy Customers
                </Text>
              </div>
            </div>

            {/* Areas We Serve */}
            <div className="mt-6 w-full">
              <p className="text-[15px] md:text-[17px] lg:text-[18px] font-semibold text-white uppercase italic text-center md:text-left mb-4">
                Same Day Services Available
              </p>
              <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
                {SERVICE_AREAS.map((area, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <MapPinCheckInside size={28} stroke="white" fill="blue" />
                    <Text
                      variant="body2"
                      className="text-foreground font-bold max-w-full text-white text-[16px] md:text-[20px] md:max-w-[360px] xl:max-w-[212px]"
                    >
                      {area}, FL
                    </Text>
                  </div>
                ))}
              </div>
            </div>

            <div className="h-4" />
            <div className="flex w-full flex-col items-center md:items-start gap-12">
              <Text className="text-center text-[18px] text-blue-500 md:text-left lg:text-[26px]">
                <span className="font-bold">
                  $50 Off For New Customers
                </span>
              </Text>

              <button
                onClick={() => {
                  const quoteSection = document.getElementById("quote");
                  const headerOffset = 160;
                  if (quoteSection) {
                    const elementPosition = quoteSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.scrollY - headerOffset;

                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth",
                    });
                  }
                }}
                className="group bg-blue-500 hover:text-blue-500 flex h-[54px] w-full max-w-[348px] cursor-pointer items-center justify-center gap-2.5 rounded-full px-8 py-4 text-white hover:bg-[#f3f3f3]"
                aria-label="Scroll to Quote Section"
              >
                <div className="relative">
                  <MessageCircle size={24} />
                  <Phone
                    size={10}
                    className="group-hover:fill-blue-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fill-white"
                  />
                </div>
                <p className="font-semibold text-[16px] uppercase">
                  Call for Free Quote
                </p>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
