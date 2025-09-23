import React, { useState } from 'react';

const items = [
  {
    name: 'Aluminium Ladder assorted type',
    type: 'TOOL',
    quantity: 535,
    image: '/plant-ladder.png',
  },
  {
    name: 'Scaffolding Planks',
    type: 'TOOL',
    quantity: 18570,
    image: '/plant-planks.png',
  },
  {
    name: 'Scaffolding Vertical & Ledger',
    type: 'TOOL',
    quantity: 16313,
    image: '/plant-ledger.png',
  },
  {
    name: 'Scaffolding Clamp assorted type',
    type: 'TOOL',
    quantity: 113444,
    image: '/plant-clamp.png',
  },
  {
    name: 'Scaffolding Pipe',
    type: 'EQUIPMENT',
    quantity: 84083,
    image: '/plant-pipe.png',
  },
  {
    name: 'Chain Pulley Block 5t - 10t',
    type: 'TOOL',
    quantity: 150,
    image: '/plant-chainpulley.png',
  },
  {
    name: 'Dshackle',
    type: 'TOOL',
    quantity: 280,
    image: '/plant-dshackle.png',
  },
  {
    name: 'Wire Rope Sling 52mm & 80mm',
    type: 'TOOL',
    quantity: 12,
    image: '/plant-ropesling.png',
  },
  {
    name: 'Magnetic Base Drill M/c',
    type: 'TOOL',
    quantity: 15,
    image: '/plant-magneticdrill.png',
  },
  {
    name: 'Hydraulic Press',
    type: 'TOOL',
    quantity: 1,
    image: '/plant-hydraulicpress.png',
  },
  {
    name: 'Plate Bending Machine',
    type: 'TOOL',
    quantity: 3,
    image: '/plant-bending.png',
  },
  {
    name: 'Compressor 13 CFM',
    type: 'TOOL',
    quantity: 6,
    image: '/plant-compressor.png',
  },
  {
    name: 'Auto Beveling Machine',
    type: 'TOOL',
    quantity: 1,
    image: '/plant-beveling.png',
  },
  {
    name: 'Plasma Cutting Machine',
    type: 'TOOL',
    quantity: 7,
    image: '/plant-plasma.png',
  },
  {
    name: 'Welding Machine',
    type: 'TOOL',
    quantity: 144,
    image: '/plant-welding.png',
  },
  {
    name: 'Power Pack 7.5 HP',
    type: 'TOOL',
    quantity: 1,
    image: '/plant-powerpack7.png',
  },
  {
    name: 'Vertical Hydraulic Jack 12t',
    type: 'TOOL',
    quantity: 13,
    image: '/plant-jack12.png',
  },
  {
    name: 'Power Pack 20 HP',
    type: 'TOOL',
    quantity: 2,
    image: '/plant-powerpack20.png',
  },
  {
    name: 'Vertical Hydraulic Jack 25t',
    type: 'TOOL',
    quantity: 60,
    image: '/plant-jack25.png',
  },
  {
    name: 'Farana F15',
    type: 'TOOL',
    quantity: 2,
    image: '/plant-farana15.png',
  },
  {
    name: 'FARANA F-20',
    type: 'TOOL',
    quantity: 2,
    image: '/plant-farana20.png',
  },
  {
    name: 'FARANA F-17',
    type: 'TOOL',
    quantity: 3,
    image: '/plant-farana17.png',
  },
  {
    name: 'Office Container',
    type: 'EQUIPMENT',
    quantity: 12,
    image: '/plant-container.png',
  },
];


const Plant = () => {
  const [search, setSearch] = useState('');
  const filtered = items.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.type.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="bg-white min-h-screen pb-12">
      <div className="max-w-5xl mx-auto px-4 pt-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-2">Tool,Plants & Machinery</h1>
        <div className="flex justify-center mb-10">
          <div className="h-1 w-24 bg-blue-100 mt-2 relative">
            <div className="absolute left-0 w-16 h-1 bg-blue-500 rounded"></div>
          </div>
        </div>
        <div className="mb-8 flex justify-center">
          <input
            type="text"
            placeholder="SEARCH..."
            className="w-full max-w-xs border border-gray-200 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-200 shadow-sm"
            aria-label="Search tools, plants, machinery"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-6">
          {filtered.length === 0 ? (
            <div className="text-center text-gray-500 py-12 text-lg">No results found.</div>
          ) : (
            filtered.map((item, idx) => (
              <div
                key={item.name}
                className="flex flex-col sm:flex-row items-center bg-white rounded-2xl border border-gray-100 shadow hover:shadow-md transition p-4 sm:p-6 gap-4 sm:gap-8"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-contain mb-2 sm:mb-0"
                  onError={e => { e.target.src = 'https://via.placeholder.com/64?text=+'; }}
                />
                <div className="flex-1 w-full">
                  <div className="font-bold text-lg md:text-xl text-gray-900">{item.name}</div>
                  <div className="uppercase text-xs text-gray-500 tracking-widest mt-1">{item.type}</div>
                </div>
                <div className="flex flex-col items-end min-w-[100px]">
                  <span className="text-gray-500 text-xs">Quantity</span>
                  <span className="font-bold text-xl text-gray-800">{item.quantity.toLocaleString()}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
};

export default Plant;