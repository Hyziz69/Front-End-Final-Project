"use client";

import Hero from "./components/sections/main/Hero";
import Features from "./components/sections/main/Features";
import Navbar from "./components/building-blocks/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <section className="w-full min-h-screen bg-blue-200">About</section>
      <section className="w-full min-h-screen bg-green-200">Projects</section>
    </>
  );
}
