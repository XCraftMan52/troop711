"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";

export default function Home() {
  return (
      <div className="space-y-12 p-6 max-w-5xl mx-auto">
      <Hero />
      <About />
      <Contact />
      <FAQ />
    </div>
  );
}
