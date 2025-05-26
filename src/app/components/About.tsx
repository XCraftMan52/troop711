'use client';
import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 md:px-16 text-white">
      <div className="max-w-4xl mx-auto bg-white text-gray-900 rounded-xl shadow-xl p-8 md:p-12">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 border-b border-gray-300 pb-2">
          About Troop 711
        </h2>
        <p className="mb-4 text-lg leading-relaxed">
          Troop 711 Albion is a Scouts BSA troop based in Lincoln, Rhode Island, and chartered by St. Ambrose Church.
          We meet every <strong>Thursday night from 7:00 to 8:00 PM</strong> and are proud to welcome youth from grades 6 through 12—
          both boys and girls—into a program built on leadership, service, and adventure.
        </p>
        <p className="mb-4 text-lg leading-relaxed">
          We run monthly campouts, activities, and much more. Scouts also have the
          opportunity to advance in rank, earn merit badges, and work toward Scouting’s highest honor, Eagle Scout.
        </p>
        <p className="text-lg leading-relaxed">
          Our dedicated adult leaders and troop committee support a program that helps youth grow into confident,
          capable leaders. New scouts are always welcome—come visit a meeting and see what Troop 711 is all about!
        </p>
      </div>
    </section>
  );
}
