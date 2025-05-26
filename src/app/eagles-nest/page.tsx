import React from 'react';

const eagleScouts = [
  { name: 'Ryan J. McCarty', date: '4/8/2004', id: '8260' },
  { name: 'Colby Darling', date: '5/15/2006', id: '8751' },
  { name: 'Andrew Margenot', date: '5/15/2006', id: '8752' },
  { name: 'Michael Fournier', date: '9/17/2007', id: '9133' },
  { name: 'Charles Malenfant', date: '5/21/2009', id: '9573' },
  { name: 'Brandon Crowell', date: '6/4/2009', id: '9591' },
  { name: 'Kevin Forget', date: '8/11/2009', id: '9644' },
  { name: 'Dan Fournier', date: '2/1/2010', id: '9754' },
  { name: 'Jacob Malenfant', date: '3/22/2010', id: '9799' },
  { name: 'Zachary Scahill', date: '6/30/2010', id: '9860' },
  { name: "Timothy O'Reilly", date: '11/8/2010', id: '9985' },
  { name: 'Nickolai Morin', date: '3/7/2011', id: '10033' },
  { name: 'Brian McMahon', date: '5/16/2011', id: '10105' },
  { name: 'AJ Shippee', date: '6/6/2011', id: '10112' },
  { name: 'Thomas Anzivino', date: '10/24/2011', id: '10189' },
  { name: 'Connor McCarty', date: '12/22/2011', id: '10240' },
  { name: 'Taylor Vass', date: '4/30/2012', id: '10328' },
  { name: 'Connor Sheridan', date: '6/1/2012', id: '10356' },
  { name: 'Gian DiCosanzo', date: '8/6/2012', id: '10395' },
  { name: 'Matthew LaButti', date: '8/6/2012', id: '10396' },
  { name: 'Bryan Guilbert', date: '10/16/2012', id: '10446' },
  { name: 'Jonathan Kwarta', date: '10/16/2012', id: '10448' },
  { name: 'Andrew Tavares', date: '11/25/2012', id: '10475' },
  { name: 'Eric Brown', date: '11/25/2012', id: '10476' },
  { name: 'Nathaniel Banks', date: '5/23/2013', id: '10609' },
  { name: 'Connor Vass', date: '10/9/2013', id: '10718' },
  { name: 'Jacob Haddad', date: '11/5/2013', id: '10739' },
  { name: 'Chris Forget', date: '1/7/2014', id: '10770' },
  { name: 'Thomas Morin', date: '1/7/2014', id: '10771' },
  { name: 'Brian Hasegawa', date: '4/1/2014', id: '10849' },
  { name: 'Christian Masse', date: '3/20/2015', id: '11093' },
  { name: 'Luke Demers', date: '10/12/2015', id: '11271' },
  { name: 'Mathew Salemi', date: '5/5/2016', id: '11402' },
  { name: 'Steven Anzivino', date: '1/16/2017', id: '11591' },
  { name: 'Drew Abram', date: '1/16/2017', id: '11592' },
  { name: 'Michael Matkowski', date: '2/13/2017', id: '11611' },
  { name: 'Garrett Scahill', date: '6/28/2017', id: '11763' },
  { name: 'Thomas Calitri', date: '9/21/2017', id: '11910' },
  { name: 'Steven Mammano', date: '11/25/2017', id: '11884' },
  { name: 'Daniel Hasegawa', date: '7/15/2018', id: '12064' },
  { name: 'Sebastian Toledo', date: '8/7/2018', id: '12076' },
  { name: 'Drew Gleason', date: '8/7/2018', id: '12074' },
  { name: 'Anthony Carrier', date: '10/23/2018', id: '12135' },
  { name: 'Dakota Masse', date: '12/17/2019', id: '12461' },
  { name: 'Dmitriy Dillon', date: '10/10/2021', id: '12912' },
  { name: 'Emily Duclos', date: '6/10/2023', id: '13263' },
  { name: 'Lucas Webber', date: '9/30/2023', id: '13323' },
  { name: 'Michael Menard', date: '11/18/2023', id: '13342' },
  { name: 'Joseph Fucci', date: '11/18/2023', id: '13343' },
  { name: 'Sean Maher', date: '3/9/2024', id: '13406' },
  { name: 'Carlos Pinto', date: '3/9/2024', id: '13407' },
  { name: 'John Chatty', date: '7/27/2024', id: '13483' },
  { name: 'Beckett Cournoyer', date: '7/27/2024', id: '13484' },
  { name: 'Logan Laliberte', date: '2/1/2025', id: '13582' }
];

export default function EaglesNest() {
  return (
    <section className="py-20 px-6 md:px-16 bg-[#0f350f] text-white">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">The Eagles Nest</h1>
        <p className="mb-8 text-lg text-green-200">
          Troop 711 Albion was founded in 2005 as a small troop. Since then, it has grown tremendously — now proudly
          recognizing <strong>{eagleScouts.length} Eagle Scouts</strong>.
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-green-700">
            <thead className="bg-green-800">
              <tr>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Date</th>
                <th className="px-4 py-2 text-left">Eagle ID</th>
              </tr>
            </thead>
            <tbody className="bg-green-900 divide-y divide-green-800">
              {eagleScouts.map((scout, idx) => (
                <tr key={idx}>
                  <td className="px-4 py-2 font-medium text-white">{scout.name}</td>
                  <td className="px-4 py-2 text-green-200">{scout.date}</td>
                  <td className="px-4 py-2 text-green-400">{scout.id}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
