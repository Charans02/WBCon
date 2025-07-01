import Image from "next/image";
import { Text } from "@/components/ui";
import { SERVICES } from "@/lib/constants";
import { ServiceType } from "@/lib/types";
// declare function gtag_report_conversion(url?: string): boolean;

const Services = () => {
  return (
    <div className="bg-[#f3f3f3]">
      <section
        id="services"
        className="flex flex-col items-center px-[80px] py-[60px]"
      >
        <Text
          variant="h2"
          className="max-w-[768px] text-center xl:max-w-[1146px]"
        >
          If you&apos;re ready to<span className="text-blue-700"> transform your outdated house</span> into space
          right for your family!
        </Text>
        <div className="mt-8 flex flex-col justify-between gap-8 lg:mt-16 xl:flex-row">
          {SERVICES.map((s, idx) => (
            <ServiceCard key={idx} s={s} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;

const ServiceCard = ({ s }: { s: ServiceType }) => {
  const imageHeight = s.imageHeight || 260;

  // Banner text based on service title
  const getBannerText = (title: string) => {
    if (title === "Residential Junk Removal") return "Modern Makeover";
    if (title === "Yard Waste & Debris") return "Custom Cabinetry & Storage";
    if (title === "Construction & Renovation Cleanup") return "Complete Kitchen Remodel";
    return "";
  };

  // Function to format the title with colored parts
  const formatTitle = (title: string) => {
    if (title === "Residential Junk Removal") {
      return (
        <>
          <span className="text-blue-600">Transform your outdated kitchen</span>
          <span> into a modern culinary space</span>
        </>
      );
    } else if (title === "Yard Waste & Debris") {
      return (
        <>
          <span className="text-blue-600">Maximize every inch of space with custom</span>
          <span> cabinets, clever storage solutions</span>
        </>
      );
    } else if (title === "Construction & Renovation Cleanup") {
      return (
        <>
          <span className="text-blue-600">From flooring to fixtures, enjoy a</span>
          <span> full-service kitchen renovation that revitalizes your space</span>
        </>
      );
    }

    return (
      <>
        <span className="text-blue-600 text-[26px] md:text-[30px]">
          {title.charAt(0).toLocaleUpperCase()}
        </span>
        <span>{title.slice(1).toLocaleUpperCase()}</span>
      </>
    );
  };

  return (
    <div className="flex w-full max-w-[768px] flex-1 flex-col items-center rounded-2xl bg-white px-6 py-8 shadow">
      <div
        className="relative w-full overflow-hidden rounded-sm"
        style={{ height: `${imageHeight}px` }}
      >
        {/* Banner Text */}
        <div className="absolute top-0 left-0 w-full bg-blue-700 text-white text-center text-lg md:text-xl font-bold tracking-wide py-4 z-10">
          {getBannerText(s.title)}
        </div>

        <Image
          src={s.image}
          alt={s.title}
          fill
          className="object-cover object-center"
        />
      </div>

      <p className="mt-6 text-center text-[20px] leading-[25px] font-semibold md:text-[25px] md:leading-[32px]">
        {formatTitle(s.title)}
      </p>
      {/* <Text className="mt-4 text-center text-[#525252]">{s.description}</Text> */}
    </div>
  );
};
