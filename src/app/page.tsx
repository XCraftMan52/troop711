"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
   const [faqOpen, setFaqOpen] = useState(false);
  return (
      <div className="space-y-12 p-6 max-w-5xl mx-auto">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-blue-600">Troop 711 • Albion, RI</h1>
        <p className="mt-2 text-lg">Leadership • Community Service • Character Building</p>
        <p className="mt-1 text-md text-gray-600">NOW ACCEPTING BOYS & GIRLS 6–12th GRADE</p>
        <Link href="/eagles-nest" className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Visit the Eagles Nest</Link>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Welcome!</h2>
        <p>Troop 711 Albion is located in Lincoln, Rhode Island at St. Ambrose Church. Meetings are held every Thursday night from 7–8 PM. New scouts are always welcome.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">About Troop 711</h2>
        <p>Troop 711 is a Scouts BSA troop based in Albion, Rhode Island. We focus on developing leadership, building character, and serving our community.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold">Catherine Duclos – Scoutmaster</h3>
            <p>📞 617-594-8207</p>
            <p>✉️ <a href="mailto:ctduclos@cox.net" className="text-blue-600 underline">ctduclos@cox.net</a></p>
          </div>
          <div>
            <h3 className="font-bold">Brian McMahon – Scoutmaster</h3>
            <p>📞 401-935-6239</p>
            <p>✉️ <a href="mailto:SM711albion@gmail.com" className="text-blue-600 underline">SM711albion@gmail.com</a></p>
          </div>
          <div>
            <h3 className="font-bold">Michael Webber – Committee Chairman</h3>
            <p>📞 774-306-1326</p>
            <p>✉️ <a href="mailto:mwebber1@gmail.com" className="text-blue-600 underline">mwebber1@gmail.com</a></p>
          </div>
          <div>
            <h3 className="font-bold">Charlie Malenfant – Chartered Org. Rep</h3>
            <p>📞 401-477-6587</p>
            <p>✉️ <a href="mailto:chaz920@verizon.net" className="text-blue-600 underline">chaz920@verizon.net</a></p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">News</h2>
        <p>Stay tuned for updates and announcements about upcoming events!</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
        <div className="border rounded shadow">
          <button
            onClick={() => setFaqOpen(!faqOpen)}
            className="w-full text-left px-4 py-3 bg-gray-100 hover:bg-gray-200 focus:outline-none"
          >
            Q – When and where are the Troop meetings?
          </button>
          {faqOpen && (
            <div className="px-4 py-3">
              A – The Troop meetings are held every Thursday from 7 to 8 at St. Ambrose Church in Lincoln, RI.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
