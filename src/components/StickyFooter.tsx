"use client";

import { Phone, MessageCircle } from "lucide-react";

const StickyFooter = () => {
  return (
    <div className="fixed bottom-0 z-50 w-full lg:hidden">
      {/* Background layer */}
      <div className="flex flex-col items-center w-full bg-gradient-to-t from-white/70 via-white/30 to-transparent backdrop-blur-md px-4 pb-3 pt-2">
        <div className="flex w-full max-w-md gap-3">
          {/* Call Button */}
          <a
            href="tel:+18176812020"
            target="_blank"
            className="flex flex-1 items-center justify-center gap-2 rounded-md bg-blue-600 py-3 text-white shadow-md hover:bg-blue-700 transition"
          >
            <Phone size={20} />
            <span className="text-sm font-semibold uppercase">Call Now</span>
          </a>

          {/* Get Quote Button */}
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
            className="flex flex-1 items-center justify-center gap-2 rounded-md bg-blue-600 py-3 text-white shadow-md hover:bg-blue-700 transition"
          >
            <MessageCircle size={20} />
            <span className="text-sm font-semibold uppercase">Get a Quote</span>
          </button>
        </div>
        <p className="mt-2 text-l font-bold text-black">Mon – Sun 6am – 9pm</p>
      </div>
    </div>
  );
};

export default StickyFooter;
