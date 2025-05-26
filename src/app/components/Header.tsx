'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-[#0f350f] text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between">
        {/* Logo + Title */}
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
          <Image
            src="/logo.png"
            alt="Troop 711 Logo"
            width={48}
            height={48}
            className="h-12 w-12"
          />
          <div>
            <h1 className="text-xl font-bold leading-tight">TROOP 711</h1>
            <p className="text-sm text-green-200">Albion, Rhode Island</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex space-x-6 text-sm md:text-base">
          <Link href="#about" className="hover:text-green-300 transition">About</Link>
          <Link href="#contact" className="hover:text-green-300 transition">Contact</Link>
          <Link href="#faq" className="hover:text-green-300 transition">FAQ</Link>
        </nav>
      </div>
    </header>
  );
}
