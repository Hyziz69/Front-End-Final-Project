"use client";

import Hero from "./components/sections/main/Hero";
import Features from "./components/sections/main/Features";
import Navbar from "./components/building-blocks/Navbar";
import About from "./components/sections/main/About";
import ReviewsSection from "./components/sections/main/ReviewsSection";
import TechSpecsSection from "./components/sections/main/TechSpecsSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <TechSpecsSection />
      <ReviewsSection />
      <About />
    </>
  );
}
