"use client"
import { useState } from "react";
import Banner from "@/components/banner";
import {
  Hero,
  States,
  Comparison,
  Services,
  Testimonials,
  Story,
  WhyChoose,
  Experts,
  ServiceAreas,
  // Contact,
  CTA,
  JunkRemovalQuote,
} from "@/sections";
// import FallMustHaves from "@/sections/FallMustHaves";
import ConvertShowcase from "@/sections/ConvertShowcase"

export default function Home() {
  const [heroInView, setHeroInView] = useState(true);

  return (
    <>
      <Hero setHeroInView={setHeroInView} />
      {/* <div className="mt-[-165px] md:mt-[-70.84px] xl:mt-[-130px] xl:px-[60px]">
        <JunkRemovalQuote />
      </div> */}
      <Banner />
      <Services />
      <JunkRemovalQuote />
      <br />
      <br />
      <ConvertShowcase />
      <States />
      <Testimonials />
      <Story />
      <Banner />
      <WhyChoose />
      <Experts />
      {/* <FallMustHaves /> */}
      {/* <Comparison /> */}
      <ServiceAreas />
      {/* <Contact /> */}
      <CTA heroInView={heroInView} />
    </>
  );
}
