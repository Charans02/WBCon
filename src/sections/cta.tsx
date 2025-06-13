import Image from "next/image";
import { Mail, PhoneCall } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

const CTA = () => {
  return (
    <div className="bg-white relative">
      {/* ✅ Sticky Button: visible only on mobile */}
      <div className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 w-full max-w-sm px-4 sm:hidden">
        <a
          href="tel:+18176812020"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full rounded-full bg-white px-6 py-4 text-center text-blue-600 font-bold shadow-lg hover:bg-blue-700 hover:text-white transition"
        >
          Call For Free Quote
        </a>
      </div>

      {/* 🔽 Main CTA Content */}
      <section className="px-5 sm:px-10 md:px-20 py-10">
        <div className="relative flex w-full flex-col items-center gap-5 rounded-3xl bg-gradient-to-r from-blue-400 to-blue-600 px-6 py-10 text-white sm:gap-8 lg:px-20 xl:gap-10 xl:px-[100px] xl:py-20 overflow-hidden">
          {/* Background Pattern */}
          <Image
            src="/images/cta-pattern.png"
            alt=""
            fill
            className="object-cover object-center z-0"
          />

          {/* Foreground Content */}
          <div className="relative z-10 flex flex-col items-center gap-5 w-full">
            <p className="text-center font-[family-name:var(--font-sora-sans)] text-[24px] leading-[36px] tracking-tighter sm:text-[36px] sm:leading-[45px] xl:text-[56px] xl:leading-[74px]">
              “Whatever you do, work at it with all your heart.”{" "}
              <span className="font-semibold underline">Colossians 3:23</span>
            </p>

            <p className="text-center font-[family-name:var(--font-sora-sans)] text-[25px] leading-[36px] tracking-tight font-bold sm:text-[18px] sm:leading-[23px] xl:text-[27px] xl:leading-[38px]">
              Call Now & Save $50 Off Your First Job!
            </p>

            <div className="flex flex-col-reverse items-center justify-center gap-1 md:flex-row md:gap-16">
              <div className="flex items-center gap-4 xl:gap-5">
                <Mail
                  fill="white"
                  stroke="#00008B"
                  className="size-6 sm:size-8 lg:size-9"
                />
                <p className="font-[family-name:var(--font-sora-sans)] text-[13px] leading-[30px] font-semibold sm:text-[20px] sm:leading-[50px] xl:text-[25px] xl:leading-[63px]">
                  {CONTACT_INFO[0].value}
                </p>
              </div>

              <div className="flex items-center gap-4 xl:gap-5">
                <PhoneCall
                  fill="white"
                  stroke="none"
                  className="size-5 sm:size-7 lg:size-8"
                />
                <p className="font-[family-name:var(--font-sora-sans)] text-[13px] leading-[30px] sm:text-[20px] sm:leading-[50px] xl:text-[25px] xl:leading-[63px]">
                  {CONTACT_INFO[2].value}
                </p>
              </div>
            </div>

            {/* 💻 Visible Only on Tablet/Desktop */}
            <a
              href="tel:+18176812020"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-block mt-4 rounded-full bg-white px-10 py-5 text-lg font-bold text-blue-600 shadow hover:bg-blue-700 hover:text-white transition"
            >
              Call For Free Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CTA;
