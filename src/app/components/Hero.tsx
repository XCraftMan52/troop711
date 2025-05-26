'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
    return (
    <section className="flex flex-col md:flex-row items-center justify-between py-12 px-6 md:px-16 bg-[#0f350f] text-white">
    <div className="md:w-1/2 space-y-3">
        <h1 className="text-4xl font-bold">TROOP 711</h1>
        <p className="text-lg">Albion, Rhode Island</p>
        <p className="text-sm text-green-200">Leadership • Community Service • Character Building</p>
        <Link href="#contact" className="inline-block mt-4 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded shadow transition transform hover:scale-105">
        Join Today
        </Link>
    </div>

    <div className="md:w-1/2 mt-8 md:mt-0">
        <Image
        src="/hero.jpg"
        alt="Troop 711 group"
        width={600}
        height={400}
        className="rounded-xl border-4 border-white shadow-lg"
        />
    </div>
</section>
);
}
