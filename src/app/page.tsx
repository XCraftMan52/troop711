"use client";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";

export default function Home() {
  return (
      <div className="max-w-5xl mx-auto bg-[#0f350f]">
      <Hero />
      <About />
      <Contact />
      <FAQ />
    </div>
  );
}
