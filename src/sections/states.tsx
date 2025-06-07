import Image from "next/image";

import { Text } from "@/components/ui";

const STATES = [
  { content: 100, more: true, description: "Satisfied Customers" },
  { content: 10, more: true, description: "Years Experience" },
  { content: 3, more: true, description: "Trash Trucks" },
  { content: 6, more: true, description: "Counties We Service" },
];

const States = () => {
  return (
    <div className="bg-[#f3f3f3]">
      <section className="flex flex-col items-center gap-8 px-[80px] py-[60px] xl:flex-row xl:gap-40">
        <div className="relative aspect-[6/7] w-full overflow-hidden rounded-2xl xl:max-w-full order-2">
          <Image
            src="/images/truck.jpg"
            alt=""
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="flex w-full flex-col items-center xl:max-w-full xl:items-start order-1">
          <Text
            variant="h2"
            className="max-w-[467px] text-center md:max-w-full xl:text-left"
          >
            Your Junk Removal Solution,
            <span className="text-blue-700"> Good News Haulers!</span>
          </Text>
          <Text className="mt-6 max-w-[516px] text-center text-[#525252] md:max-w-full xl:text-left">
            Whether you are looking for a small junk removal job or a whole
            house clean-out, Good News Haulers can get it done. We are open 24/7 always
            taking call and new customers.
          </Text>
          <div className="mt-8 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
            {STATES.map((state, index) => (
              <div
                key={index}
                className="flex w-full flex-col items-center justify-center gap-2 rounded-2xl bg-white py-5 shadow md:py-10"
              >
                <Text variant="h2">
                  {state.content}
                  {state.more && <span className="text-blue-600">+</span>}
                </Text>
                <Text variant="body2" className="text-[#525252]">
                  {state.description}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default States;
