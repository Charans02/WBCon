import type { Metadata } from "next";
import { Lato, Sora } from "next/font/google";
import { Toaster } from "sonner";
import Script from "next/script";

import Header from "@/components/header";
import Footer from "@/components/footer";

import StickyFooter from "@/components/StickyFooter";

import "./globals.css";
import "./custom-toast.css";

const latoSans = Lato({
  weight: ["400", "700"],
  variable: "--font-lato-sans",
  subsets: ["latin"],
});

const soraSans = Sora({
  variable: "--font-sora-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wayman Bros Construction | Faith-Driven Junk Removal Done Right",
  description: "Fast, Affordable, Reliable",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google Tag Manager */}
        <Script id="gtm-head" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KQQBTWDX');
          `}
        </Script>
      </head>
      <body className={`${latoSans.variable} ${soraSans.variable} antialiased`}>
        {/* ✅ Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KQQBTWDX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Header />
        <main className="overflow-hidden">{children}</main>
        <StickyFooter />
        <Footer />
        <Toaster
          position="top-right"
          toastOptions={{ style: { zIndex: 1000 } }}
        />
      </body>
    </html>
  );
}
