'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-[#0f350f] text-white px-6 md:px-16 py-10 gap-8">
      {/* Left: Logo + Text */}
        <div className="flex flex-col items-start md:w-1/2 space-y-4">
            <div className="w-24 h-24 md:w-32 md:h-32 relative">
            <Image
                src="/logo.png"
                alt="Troop 711 Logo"
                fill
                className="w-24 h-24 md:w-32 md:h-32 relative object-contain"
            />
            </div>
            <h1 className="text-4xl font-extrabold">TROOP 711</h1>
            <p className="text-xl">Albion, Rhode Island</p>
            <p className="text-sm">Leadership • Community Service • Character Building</p>
            <Link href="#contact" className="mt-4 bg-white text-[#0f350f] font-semibold px-6 py-2 rounded hover:bg-gray-100 transition">
            Join Today
            </Link>
        </div>

        {/* Right: Group Photo */}
        <div className="relative w-full md:w-1/2 max-w-[600px] rounded-xl overflow-hidden shadow-lg border-4 border-white">
            <Image
            src="/hero.jpg"
            alt="Troop 711 group photo"
            width={800}
            height={600}
            className="object-cover w-full h-full"
            priority
            />
        </div>
    </section>
);
}
