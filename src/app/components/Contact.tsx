'use client';
import React from 'react';

const contacts = [
  {
    name: 'David Levesque',
    role: 'T711B Scoutmaster',
    email: '',
    phone: '',
  },
  {
    name: 'Catherine Duclos',
    role: 'T711G Scoutmaster',
    email: 'ctduclos@cox.net',
    phone: '(617) 594-8207',
  },
  {
    name: 'Michael Webber',
    role: 'Committee Chair',
    email: 'mwebber1@gmail.com',
    phone: '(774) 810-1738',
  },
  {
    name: 'Brian McMahon',
    role: 'Organization Representative',
    email: 'bfm711albion@gmail.com',
    phone: '(401) 935-6239',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="text-white py-20 px-6 md:px-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Contact Us</h2>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 max-w-4xl mx-auto">
  {contacts.map((contact, idx) => (
    <div
      key={idx}
      className="bg-[#256d25] text-white border border-[#2f8f2f] rounded-xl p-6 shadow-lg space-y-2"
    >
      <h3 className="text-lg font-semibold">{contact.name}</h3>
      <p className="text-sm text-gray-100">{contact.role}</p>

      <div className="text-sm text-gray-300 space-y-1 pt-2">
        <div>
          {/* <span className="text-gray-400">Email:</span>{' '} */}
          <a href={`mailto:${contact.email}`} className="text-yellow-300 hover:underline">
            {contact.email}
          </a>
        </div>
        <div>
          {/* <span className="text-gray-400">Phone:</span>{' '} */}
          <a href={`tel:${contact.phone}`} className="text-yellow-300 hover:underline">
            {contact.phone}
          </a>
        </div>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}
