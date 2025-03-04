import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";

import AboutSectionOne2 from "../components/About2/AboutSectionOne2";
import AboutSectionTwo2 from "../components/About2/AboutSectionTwo2";

import AboutSectionOne3 from "../components/About3/AboutSectionOne3";
import AboutSectionTwo3 from "../components/About3/AboutSectionTwo3";

import AboutSectionOne4 from "../components/About4/AboutSectionOne4";
import AboutSectionTwo4 from "../components/About4/AboutSectionTwo4";

import AboutSectionOne5 from "../components/About5/AboutSectionOne5";
import AboutSectionTwo5 from "../components/About5/AboutSectionTwo5";

import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";


import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Next.js Template for Startup and SaaS",
  description: "This is Home for Startup Next.js Template",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />


      {/* Render different sections based on your requirement */}
      
     
    </>
  );
}
